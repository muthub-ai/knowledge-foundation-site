"""kfsite stage: an OKF bundle becomes Quartz content."""

import os
import re
import shutil
import sys
import tempfile
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "tests"))
from helpers import make_bundle  # noqa: E402

from kfsite.bundle import load_config, resolve, trust_tier  # noqa: E402
from kfsite.stage import stage  # noqa: E402

REAL_BUNDLE = Path(os.environ.get("KF_BUNDLE", ROOT.parent / "knowledge-foundation" / "wiki"))


def front(text: str) -> dict:
    return yaml.safe_load(text.split("---\n")[1])


class Helpers(unittest.TestCase):
    def test_resolve(self):
        self.assertEqual(resolve("governed-ai/x.md", "../raw/y.md"), "raw/y.md")
        self.assertEqual(resolve("governed-ai/x.md", "/raw/y.md"), "raw/y.md")
        self.assertEqual(resolve("a/b/c.md", "./d.md"), "a/b/d.md")

    def test_trust(self):
        self.assertEqual(trust_tier({}), "unverified")
        self.assertEqual(trust_tier({"verified": {"by": "llmwiki2/lint"}}), "machine-confirmed")
        self.assertEqual(trust_tier({"verified": [{"by": "llmwiki2/lint"}, {"by": "human:muthu"}]}), "human-reviewed")


class StageFixture(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = Path(tempfile.mkdtemp())
        cls.wiki = make_bundle(cls.tmp)
        cls.out = cls.tmp / "content"
        cls.stats = stage(cls.wiki, cls.out, load_config(cls.wiki))
        cls.note = (cls.out / "governed-ai" / "guardrails.md").read_text()
        cls.draft = (cls.out / "context-engineering" / "context-layer.md").read_text()

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(cls.tmp)

    def test_layout(self):
        self.assertEqual(self.stats, {"notes": 2, "themes": 2})
        files = sorted(p.relative_to(self.out).as_posix() for p in self.out.rglob("*.md"))
        self.assertEqual(files, ["context-engineering/context-layer.md", "context-engineering/index.md",
                                 "governed-ai/guardrails.md", "governed-ai/index.md", "index.md"])

    def test_quartz_frontmatter(self):
        f = front(self.note)
        self.assertEqual(f["title"], "Guardrails by design")
        self.assertEqual(f["description"], "Policy enforced in the platform.")
        self.assertEqual(f["tags"], ["governed-ai"])
        self.assertEqual((f["created"], f["modified"]), ("2026-10-10T10:00:00Z", "2026-10-12T09:00:00Z"))
        self.assertEqual((f["kf_trust"], f["kf_kind"]), ("human-reviewed", "Concept"))
        self.assertEqual(front(self.draft)["modified"], "2026-10-10T10:00:00Z")  # never verified: drafted date

    def test_provenance_callout(self):
        body = self.note.split("---\n", 2)[2]
        # A summary of an essay: the title says so, the first line links to it, the review state leads the provenance.
        self.assertTrue(body.lstrip().startswith("> [!success] Summary of an essay on muthub.org\n> **[Read the full essay on muthub.org →](https://muthub.org/writing/my-essay)**"))
        self.assertIn("> Reviewed by Muthu · **Concept** · Last verified Oct 12, 2026 · Drafted Oct 10, 2026 by llmwiki2/0.5.0 · Re-check by Apr 12, 2027 · 2 sources", self.note)
        self.assertIn("[Show in graph](https://wiki.muthub.org/graph/?node=governed-ai%2Fguardrails.md)", self.note)
        self.assertIn("[Markdown](https://wiki.muthub.org/governed-ai/guardrails.md)", self.note)
        self.assertIn("> [!info] Not yet reviewed", self.draft)
        self.assertIn("**Pattern** · Draft · Drafted", self.draft)
        self.assertIn("· 1 source\n", self.draft)

    def test_read_the_original_section_is_dropped_when_the_callout_links_the_essay(self):
        from kfsite.stage import READ_ORIGINAL
        body = "# Overview\n\nSummary.\n\n# Read the original\n\nThe full note is on muthub.org: [x](https://muthub.org/x).\n\n# See also\n\n- y\n"
        self.assertEqual(READ_ORIGINAL.sub("", body), "# Overview\n\nSummary.\n\n# See also\n\n- y\n")
        self.assertEqual(READ_ORIGINAL.sub("", "# Overview\n\nA.\n\n# Read the original\n\nLink.\n"), "# Overview\n\nA.\n")
        # Footnote definitions after the section stay, or the [^s1] reference in the body would dangle.
        self.assertEqual(READ_ORIGINAL.sub("", "# Overview\n\nA.[^s1]\n\n# Read the original\n\nLink.\n\n[^s1]: Src.\n"),
                         "# Overview\n\nA.[^s1]\n\n[^s1]: Src.\n")

    def test_links(self):
        self.assertIn("[the context layer](/context-engineering/context-layer#why)", self.note)
        self.assertIn("[the vendor post](https://example.com/post)", self.note)  # unpublished copy -> original
        self.assertIn(" a missing note and", self.note)  # missing note -> plain text
        self.assertIn("[an essay](https://muthub.org/writing/x.md)", self.note)  # external untouched
        self.assertIn("[guardrails](/governed-ai/guardrails)", self.draft)  # bundle-absolute link
        self.assertNotRegex(self.note + self.draft, r"\]\((?!https://)[^)]*\.md")

    def test_headings_sources_see_also(self):
        self.assertIn("\n## Overview\n", self.note)
        self.assertNotRegex(self.note, r"(?m)^# ")
        sources = self.note.split("## Sources\n\n")[1].split("\n\n")[0]
        self.assertEqual(sources, "1. [My essay](https://muthub.org/writing/my-essay) · published May 1, 2025\n"
                                  "2. [Vendor post](https://example.com/post) · published Jan 2, 2026")
        self.assertTrue(self.note.rstrip().endswith("## See also\n\n- [Context layer](/context-engineering/context-layer) - where facts live"))
        self.assertIn("[^s1]: My essay, 2025.", self.note)

    def test_home_and_theme_pages(self):
        home = (self.out / "index.md").read_text()
        self.assertEqual(front(home)["title"], "Knowledge Foundation")
        self.assertIn("- [Governed AI](/governed-ai/): ", home)
        self.assertIn("(1 note)", home)
        self.assertIn("2 notes, 1 reviewed by Muthu so far.", home)
        self.assertIn("[Explore the graph](https://wiki.muthub.org/graph/)", home)
        self.assertIn("- [Guardrails by design](/governed-ai/guardrails)", home)  # recently updated
        theme = (self.out / "governed-ai" / "index.md").read_text()
        self.assertEqual(front(theme)["title"], "Governed AI")
        self.assertNotIn("guardrails.md", theme)  # llmwiki2's list is dropped; Quartz lists the folder

    def test_yaml_safe_titles(self):
        self.assertEqual(front(self.draft)["title"], "Context layer <script>alert(1)</script>")  # escaped by Quartz, kept verbatim here

    def test_restage_removes_stale_files(self):
        (self.out / "stale.md").write_text("x")
        stage(self.wiki, self.out, load_config(self.wiki))
        self.assertFalse((self.out / "stale.md").exists())


@unittest.skipUnless(REAL_BUNDLE.exists(), "real bundle not present")
class StageRealBundle(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = Path(tempfile.mkdtemp())
        cls.out = cls.tmp / "content"
        cls.stats = stage(REAL_BUNDLE, cls.out, load_config(REAL_BUNDLE))
        cls.files = {p.relative_to(cls.out).as_posix(): p.read_text() for p in cls.out.rglob("*.md")}

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(cls.tmp)

    def test_every_note_is_staged(self):
        notes = [p.relative_to(REAL_BUNDLE).as_posix() for p in REAL_BUNDLE.rglob("*.md")
                 if not p.relative_to(REAL_BUNDLE).as_posix().startswith("raw/") and p.name not in ("index.md", "log.md")]
        self.assertEqual(len(notes), self.stats["notes"])
        self.assertTrue(set(notes) <= set(self.files))

    def test_internal_links_point_at_staged_pages(self):
        slugs = {f[:-3] for f in self.files} | {f[:-9] for f in self.files if f.endswith("/index.md")}
        broken = []
        for f, text in self.files.items():
            for target in re.findall(r"\]\((/[^)#\s]*)", text):
                if target.strip("/") not in slugs and target.strip("/") + "/index" not in slugs:
                    broken.append((f, target))
        self.assertEqual(broken, [])

    def test_frontmatter_parses_and_no_relative_md_links(self):
        for f, text in self.files.items():
            self.assertIn("title", front(text), f)
            self.assertNotRegex(text, r"\]\((?!https://)[^)]*\.md", f)
            self.assertNotIn("\u2014", text, f)


if __name__ == "__main__":
    unittest.main()
