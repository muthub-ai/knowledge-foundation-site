"""Unit tests for the site generator: a small hand-made bundle plus whole-site checks on the real bundle when present."""

import json
import os
import re
import shutil
import sys
import tempfile
import unittest
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from kfsite.build import Site, load_config, resolve, trust_tier, url_for  # noqa: E402

REAL_BUNDLE = Path(os.environ.get("KF_BUNDLE", ROOT.parent / "knowledge-foundation" / "wiki"))
REAL_GRAPH = Path(os.environ.get("KF_GRAPH", ROOT.parent / "knowledge-foundation" / "dist" / "graph.json"))


def fm(**kw):
    import yaml
    return "---\n" + yaml.safe_dump(kw, sort_keys=False, allow_unicode=True) + "---\n"


GEN = {"by": "llmwiki2/0.5.0", "at": "2026-10-20T10:00:00Z"}


def make_bundle(root: Path) -> None:
    (root / "wiki" / "governed-ai").mkdir(parents=True)
    (root / "wiki" / "context-engineering").mkdir(parents=True)
    (root / "wiki" / "raw").mkdir(parents=True)
    w = root / "wiki"
    (w / "raw" / "own.md").write_text(fm(type="Source", title="My essay", resource="https://muthub.org/writing/my-essay.md", published_at="2025-05-01", origin_kind="own-essay", license_note="mine") + "Essay text.\n")
    (w / "raw" / "third.md").write_text(fm(type="Source", title="Vendor post", resource="https://example.com/post", published_at="2026-01-02", origin_kind="third-party-note", license_note="cite") + "Notes.\n")
    (w / "governed-ai" / "guardrails.md").write_text(fm(
        type="Concept", title="Guardrails by design", description="Policy enforced in the platform.", kind="Concept", status="stable",
        generated=GEN, verified={"by": "human:muthu", "at": "2026-10-21T09:00:00Z"}, stale_after="2027-04-21", tags=["governed-ai"],
        sources=[{"id": "s1", "resource": "/raw/own.md"}, {"id": "s2", "resource": "/raw/third.md"}], canonical_essay="https://muthub.org/writing/my-essay",
    ) + "# Overview\n\nSee [the context layer](../context-engineering/context-layer.md), [the vendor post](../raw/third.md), "
        "[a missing note](../governed-ai/nope.md) and [an essay](https://muthub.org/writing/x.md).[^s1]\n\n"
        "| a | b |\n|---|---|\n| 1 | 2 |\n\n[^s1]: My essay, 2025.\n\n# See also\n\n- [Context layer](../context-engineering/context-layer.md) - where facts live\n")
    (w / "context-engineering" / "context-layer.md").write_text(fm(
        type="Concept", title="Context layer <script>alert(1)</script>", description="Facts & rules", kind="Concept", status="draft",
        generated=GEN, stale_after="2027-04-20", tags=[], sources=[{"id": "s1", "resource": "/raw/third.md"}],
    ) + "# Overview\n\nBody.\n")
    (root / "graph.json").write_text(json.dumps({"version": "1", "nodes": [], "edges": []}))


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.hrefs = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        for k in ("href", "src"):
            if a.get(k):
                self.hrefs.append(a[k])


def internal_targets(out: Path):
    """Every same-site href/src in the built HTML, paired with the page it came from."""
    for page in out.rglob("*.html"):
        p = Links()
        p.feed(page.read_text(encoding="utf-8"))
        for h in p.hrefs:
            if h.startswith("/") and not h.startswith("//"):
                yield page, h.split("#")[0].split("?")[0]


def exists(out: Path, path: str) -> bool:
    t = out / path.lstrip("/")
    return (t / "index.html").exists() if path.endswith("/") else t.exists()


class Helpers(unittest.TestCase):
    def test_url_and_resolve(self):
        self.assertEqual(url_for("governed-ai/x.md"), "/governed-ai/x/")
        self.assertEqual(resolve("governed-ai/x.md", "../raw/y.md"), "raw/y.md")
        self.assertEqual(resolve("governed-ai/x.md", "/raw/y.md"), "raw/y.md")
        self.assertEqual(resolve("a/b/c.md", "./d.md"), "a/b/d.md")

    def test_trust_tiers(self):
        self.assertEqual(trust_tier({}), "unverified")
        self.assertEqual(trust_tier({"verified": {"by": "llmwiki2/lint", "at": "x"}}), "machine-confirmed")
        self.assertEqual(trust_tier({"verified": [{"by": "llmwiki2/lint"}, {"by": "human:muthu"}]}), "human-reviewed")


class FixtureBuild(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = Path(tempfile.mkdtemp())
        make_bundle(cls.tmp)
        cls.out = cls.tmp / "public"
        cls.stats = Site(cls.tmp / "wiki", cls.tmp / "graph.json", cls.out, load_config(cls.tmp / "wiki")).build()
        cls.note = (cls.out / "governed-ai" / "guardrails" / "index.html").read_text()

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(cls.tmp)

    def test_counts(self):
        self.assertEqual(self.stats, {"notes": 2, "sources": 1, "themes": 2})

    def test_provenance_block(self):
        self.assertIn("Reviewed by Muthu", self.note)
        self.assertIn("Oct 21, 2026", self.note)
        self.assertIn("Apr 21, 2027", self.note)
        draft = (self.out / "context-engineering" / "context-layer" / "index.html").read_text()
        self.assertIn("Not yet reviewed", draft)
        self.assertIn("status-draft", draft)

    def test_links_are_rewritten_or_dropped(self):
        self.assertIn('href="/context-engineering/context-layer/"', self.note)
        self.assertIn('href="https://example.com/post"', self.note)  # unpublished third-party copy -> original
        self.assertNotIn("nope.md", self.note)  # missing note -> plain text
        self.assertIn("a missing note", self.note)
        self.assertIn('href="https://muthub.org/writing/x.md"', self.note)  # external untouched
        self.assertNotRegex(self.note, r'href="[^"]*\.\./')

    def test_sources_and_canonical(self):
        self.assertIn('href="https://muthub.org/writing/my-essay"', self.note)  # .md twin shown as the HTML essay
        self.assertIn('href="/raw/own/"', self.note)  # own copy is published
        self.assertFalse((self.out / "raw" / "third").exists())
        self.assertNotIn('href="/raw/third/"', self.note)
        self.assertIn("published May 1, 2025", self.note)
        self.assertIn('rel="canonical" href="https://wiki.muthub.org/governed-ai/guardrails/"', self.note)

    def test_see_also_backlinks_tables_footnotes(self):
        self.assertIn('id="see-h"', self.note)
        self.assertIn("where facts live", self.note)
        self.assertEqual(self.note.count("# See also"), 0)
        self.assertIn("<table>", self.note)
        self.assertIn('class="footnote"', self.note)
        layer = (self.out / "context-engineering" / "context-layer" / "index.html").read_text()
        self.assertIn('href="/governed-ai/guardrails/">Guardrails by design', layer)

    def test_escaping(self):
        layer = (self.out / "context-engineering" / "context-layer" / "index.html").read_text()
        self.assertNotIn("<script>alert(1)</script>", layer)
        self.assertIn("&lt;script&gt;", layer)
        ld = re.search(r'<script type="application/ld\+json">(.*?)</script>', layer, re.S).group(1)
        self.assertNotIn("</script", ld)
        self.assertIn("Context layer", json.loads(ld)[0]["headline"])

    def test_jsonld(self):
        ld = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', self.note, re.S).group(1))
        art, term = ld
        self.assertEqual(art["@type"], "Article")
        self.assertEqual(art["isBasedOn"], "https://muthub.org/writing/my-essay")
        self.assertEqual(term["@type"], "DefinedTerm")

    def test_raw_pages_noindex_and_out_of_sitemap(self):
        raw = (self.out / "raw" / "own" / "index.html").read_text()
        self.assertIn('content="noindex, follow"', raw)
        self.assertIn('rel="canonical" href="https://muthub.org/writing/my-essay.md"', raw)
        locs = [e.text for e in ET.parse(self.out / "sitemap.xml").getroot().iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
        self.assertIn("https://wiki.muthub.org/governed-ai/guardrails/", locs)
        self.assertFalse(any("/raw/" in u for u in locs))

    def test_machine_readable_outputs(self):
        self.assertTrue((self.out / "governed-ai" / "guardrails.md").read_text().startswith("---\n"))
        llms = (self.out / "llms.txt").read_text()
        self.assertIn("(https://wiki.muthub.org/governed-ai/guardrails.md)", llms)
        ET.parse(self.out / "rss.xml")
        idx = json.loads((self.out / "search-index.json").read_text())
        self.assertEqual({d["url"] for d in idx}, {"/governed-ai/guardrails/", "/context-engineering/context-layer/"})
        self.assertIn("Sitemap: https://wiki.muthub.org/sitemap.xml", (self.out / "robots.txt").read_text())
        for f in ("404.html", "graph/index.html", "search/index.html", "graph.json", "static/explorer.js", "static/style.css"):
            self.assertTrue((self.out / f).exists(), f)

    def test_internal_links_resolve(self):
        broken = [(str(p.relative_to(self.out)), h) for p, h in internal_targets(self.out) if not exists(self.out, h)]
        self.assertEqual(broken, [])

    def test_rebuild_removes_stale_pages(self):
        (self.out / "stale").mkdir()
        Site(self.tmp / "wiki", self.tmp / "graph.json", self.out, load_config(self.tmp / "wiki")).build()
        self.assertFalse((self.out / "stale").exists())


@unittest.skipUnless(REAL_BUNDLE.exists() and REAL_GRAPH.exists(), "real bundle not present")
class RealBundle(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = Path(tempfile.mkdtemp())
        cls.out = cls.tmp / "public"
        cls.stats = Site(REAL_BUNDLE, REAL_GRAPH, cls.out, load_config(REAL_BUNDLE)).build()

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(cls.tmp)

    def test_every_note_has_a_page_and_twin(self):
        notes = [p for p in REAL_BUNDLE.rglob("*.md") if not p.relative_to(REAL_BUNDLE).as_posix().startswith("raw/") and p.name not in ("index.md", "log.md")]
        self.assertEqual(len(notes), self.stats["notes"])
        for n in notes:
            rel = n.relative_to(REAL_BUNDLE).with_suffix("")
            self.assertTrue((self.out / rel / "index.html").exists(), rel)
            self.assertTrue((self.out / (str(rel) + ".md")).exists(), rel)

    def test_internal_links_resolve(self):
        broken = sorted({(str(p.relative_to(self.out)), h) for p, h in internal_targets(self.out) if not exists(self.out, h)})
        self.assertEqual(broken, [])

    def test_graph_urls_resolve(self):
        g = json.loads((self.out / "graph.json").read_text())
        missing = [n["url"] for n in g["nodes"] if not n["url"].startswith("http") and not exists(self.out, n["url"].rstrip("/") + "/")]
        self.assertEqual(missing, [])

    def test_no_em_dashes_or_emails(self):
        for f in list(self.out.rglob("*.html")) + list(self.out.rglob("*.md")):
            t = f.read_text(encoding="utf-8")
            self.assertNotIn("\u2014", t, f)
            self.assertIsNone(re.search(r"mailto:|[\w.+-]+@gmail\.com", t), f)

    def test_confidential_terms_absent(self):
        path = os.environ.get("CONFIDENTIAL_TERMS_FILE", str(ROOT.parent / "knowledge-foundation" / ".confidential-terms.txt"))
        if not Path(path).exists():
            self.skipTest("no blocklist available")
        terms = [t.strip() for t in Path(path).read_text().splitlines() if t.strip() and not t.startswith("#")]
        hits = 0
        for f in list(self.out.rglob("*.html")) + list(self.out.rglob("*.md")) + list(self.out.rglob("*.json")) + list(self.out.rglob("*.txt")):
            text = f.read_text(encoding="utf-8")
            low = text.lower()
            for t in terms:
                if t.startswith("case:"):
                    hits += bool(re.search(r"\b" + re.escape(t[5:]) + r"\b", text))
                else:
                    hits += bool(re.search(r"\b" + re.escape(t.lower()) + r"\b", low))
        self.assertEqual(hits, 0, "a blocklisted term appears in the built site (term not shown)")


if __name__ == "__main__":
    unittest.main()
