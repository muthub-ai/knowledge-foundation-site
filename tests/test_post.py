"""kfsite post: finishing the Quartz output (tested against tests/fake_quartz.py, a stand-in for `quartz build`)."""

import json
import os
import re
import shutil
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "tests"))
import fake_quartz  # noqa: E402
from helpers import make_bundle  # noqa: E402

from kfsite.bundle import Bundle, load_config  # noqa: E402
from kfsite.post import BuildError, check_output, finish, same_site_links  # noqa: E402
from kfsite.stage import stage  # noqa: E402

REAL_BUNDLE = Path(os.environ.get("KF_BUNDLE", ROOT.parent / "knowledge-foundation" / "wiki"))
REAL_GRAPH = Path(os.environ.get("KF_GRAPH", ROOT.parent / "knowledge-foundation" / "dist" / "graph.json"))


def build(wiki: Path, graph: Path, tmp: Path) -> tuple[Bundle, Path]:
    cfg = load_config(wiki)
    stage(wiki, tmp / "content", cfg)
    fake_quartz.render(tmp / "content", tmp / "public")
    bundle = Bundle(wiki, cfg)
    finish(bundle, graph, tmp / "public")
    return bundle, tmp / "public"


class SameSiteLinks(unittest.TestCase):
    def test_external_marks_are_removed(self):
        a = ('<p><a href="https://wiki.muthub.org/graph/?node=a%2Fb.md&amp;x=1" class="external external-link" target="_blank" rel="noopener">'
             'Show in graph<svg aria-hidden="true" class="external-icon" viewBox="0 0 1 1"><path d="M0"></path></svg></a> '
             '<a href="https://example.com/" class="external">out</a></p>')
        out = same_site_links(a, "https://wiki.muthub.org")
        self.assertIn('<a class="internal" href="/graph/?node=a%2Fb.md&amp;x=1" data-router-ignore>Show in graph</a>', out)
        self.assertIn('<a href="https://example.com/" class="external">out</a>', out)


class PostFixture(unittest.TestCase):
    def setUp(self):
        self.tmp = Path(tempfile.mkdtemp())
        self.wiki = make_bundle(self.tmp)
        self.bundle, self.public = build(self.wiki, self.tmp / "graph.json", self.tmp)
        self.note = (self.public / "governed-ai" / "guardrails.html").read_text()

    def tearDown(self):
        shutil.rmtree(self.tmp)

    def test_jsonld_added_once(self):
        lds = re.findall(r'<script type="application/ld\+json" data-kf="jsonld">(.*?)</script>', self.note, re.S)
        self.assertEqual(len(lds), 1)
        art, term = json.loads(lds[0])
        self.assertEqual((art["@type"], term["@type"]), ("Article", "DefinedTerm"))
        self.assertEqual(art["url"], "https://wiki.muthub.org/governed-ai/guardrails")
        self.assertEqual(art["dateModified"], "2026-10-12T09:00:00Z")
        self.assertEqual(art["citation"], ["https://muthub.org/writing/my-essay", "https://example.com/post"])
        finish(self.bundle, self.tmp / "graph.json", self.public)  # idempotent
        self.assertEqual((self.public / "governed-ai" / "guardrails.html").read_text().count('data-kf="jsonld"'), 1)

    def test_jsonld_is_script_safe(self):
        page = (self.public / "context-engineering" / "context-layer.html").read_text()
        ld = re.search(r'data-kf="jsonld">(.*?)</script>', page, re.S).group(1)
        self.assertNotIn("</script", ld)
        self.assertEqual(json.loads(ld)["headline"], "Context layer <script>alert(1)</script>")  # a Pattern: Article only

    def test_graph_and_markdown_links_are_same_site(self):
        self.assertIn('href="/graph/?node=governed-ai%2Fguardrails.md"', self.note)
        self.assertIn('href="/governed-ai/guardrails.md"', self.note)
        self.assertNotIn('href="https://wiki.muthub.org', self.note)
        self.assertIn('href="https://example.com/post"', self.note)

    def test_machine_readable_files(self):
        self.assertEqual((self.public / "governed-ai" / "guardrails.md").read_text(), (self.wiki / "governed-ai" / "guardrails.md").read_text())
        llms = (self.public / "llms.txt").read_text()
        self.assertIn("- [Guardrails by design](https://wiki.muthub.org/governed-ai/guardrails.md): Policy enforced in the platform.", llms)
        self.assertIn("Sitemap: https://wiki.muthub.org/sitemap.xml", (self.public / "robots.txt").read_text())
        self.assertFalse((self.public / "raw").exists())

    def test_explorer_installed(self):
        for f in ("graph/index.html", "graph/explorer.js", "graph/explorer.css", "graph/theme.js", "graph.json"):
            self.assertTrue((self.public / f).exists(), f)

    def test_output_is_clean(self):
        self.assertEqual(check_output(self.public, self.bundle), [])  # Quartz's own footer em dash is not ours to police

    def test_em_dash_in_content_is_reported(self):
        f = self.public / "governed-ai" / "guardrails.html"
        f.write_text(f.read_text().replace("Overview<", "Overview \u2014<"))
        self.assertTrue(any("em dash" in p for p in check_output(self.public, self.bundle)))

    def test_any_email_address_is_reported_but_not_asset_names(self):
        f = self.public / "governed-ai" / "guardrails.html"
        f.write_text(f.read_text().replace("Overview<", 'Overview <img src="icon@2x.png"><'))
        self.assertEqual(check_output(self.public, self.bundle), [])
        f.write_text(f.read_text().replace("Overview ", "Overview someone@example.org "))
        self.assertTrue(any("email" in p for p in check_output(self.public, self.bundle)))

    def test_missing_quartz_page_fails_the_build(self):
        (self.public / "context-engineering" / "context-layer.html").unlink()
        with self.assertRaises(BuildError) as e:
            finish(self.bundle, self.tmp / "graph.json", self.public)
        self.assertIn("context-engineering/context-layer", str(e.exception))


@unittest.skipUnless(REAL_BUNDLE.exists() and REAL_GRAPH.exists(), "real bundle not present")
class PostRealBundle(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = Path(tempfile.mkdtemp())
        cls.bundle, cls.public = build(REAL_BUNDLE, REAL_GRAPH, cls.tmp)

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(cls.tmp)

    def test_clean_and_every_note_has_jsonld_and_twin(self):
        self.assertEqual(check_output(self.public, self.bundle), [])
        for n in self.bundle.notes():
            self.assertIn('data-kf="jsonld"', (self.public / f"{n.rel[:-3]}.html").read_text(), n.rel)
            self.assertTrue((self.public / n.rel).exists(), n.rel)

    def test_graph_urls_have_pages(self):
        g = json.loads((self.public / "graph.json").read_text())
        missing = [n["url"] for n in g["nodes"] if not n["url"].startswith("http")
                   and not (self.public / (n["url"].strip("/") + ".html")).exists()
                   and not (self.public / n["url"].strip("/") / "index.html").exists()]
        self.assertEqual(missing, [])

    def test_confidential_terms_absent(self):
        path = os.environ.get("CONFIDENTIAL_TERMS_FILE", str(ROOT.parent / "knowledge-foundation" / ".confidential-terms.txt"))
        terms = [t.strip() for t in Path(path).read_text().replace("|", "\n").splitlines() if t.strip() and not t.startswith("#")] if Path(path).exists() else []
        if not terms:
            # In CI the secret must be there: a missing or empty one would otherwise pass silently.
            if os.environ.get("CI"):
                self.fail("no confidential terms in CI (secret CONFIDENTIAL_TERMS missing or empty)")
            self.skipTest("no blocklist available")
        hits = 0
        # The built site, and this repository's own public prose (README, design notes).
        for f in [*self.public.rglob("*"), ROOT / "README.md", *(ROOT / "docs").rglob("*.md")]:
            if f.suffix not in (".html", ".md", ".json", ".txt", ".xml") or not f.is_file():
                continue
            text = f.read_text(encoding="utf-8")
            for t in terms:
                pat = re.escape(t[5:]) if t.startswith("case:") else re.escape(t)
                hits += bool(re.search(r"(?<![A-Za-z0-9])" + pat + r"(?![A-Za-z0-9])", text, 0 if t.startswith("case:") else re.I))
        self.assertEqual(hits, 0, "a blocklisted term appears in the built site (term not shown)")


if __name__ == "__main__":
    unittest.main()
