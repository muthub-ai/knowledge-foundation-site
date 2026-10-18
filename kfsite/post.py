"""After `quartz build`: finish the site in public/.

- checks Quartz produced a page for every note, theme and the notes index at /notes/ (a missing page fails the build)
- adds JSON-LD (Article; DefinedTerm for concepts) to every note page
- turns links written as https://<wiki>/... (the ones Quartz would otherwise mangle) back into same-site links
- writes the Markdown twin of every note (the OKF file itself), llms.txt and robots.txt
- installs the graph explorer as the home page (/) and at /graph/ (older links), with graph.json
- makes dark the default for first-time readers of the Quartz pages too (the explorer's theme.js does the same for /)
"""

from __future__ import annotations

import re
import shutil
from pathlib import Path
from typing import Any

from .bundle import Bundle, slug_of

ROOT = Path(__file__).resolve().parents[1]
EXPLORER = ROOT / "explorer"
LD_MARK = 'data-kf="jsonld"'
# Runs before Quartz's own darkmode script, which reads localStorage.theme: a reader with no stored choice gets dark,
# the same default theme.js applies on the graph pages. Toggling on either side is remembered by both.
DARK_DEFAULT = '<script data-kf="theme">try{if(!localStorage.getItem("theme"))localStorage.setItem("theme","dark")}catch(e){}</script>'


class BuildError(RuntimeError):
    pass


def page_file(public: Path, slug: str) -> Path:
    """Where Quartz writes a slug: governed-ai/x -> governed-ai/x.html, governed-ai/index -> governed-ai/index.html."""
    return public / f"{slug}.html"


def same_site_links(text: str, site: str) -> str:
    """<a href="https://wiki.muthub.org/graph/?node=..." class="external ..."> -> a plain same-site link.

    These links lead to files Quartz did not render (the graph explorer, Markdown twins, llms.txt), so they carry
    data-router-ignore: Quartz's single-page router would otherwise fetch them and swap the page body in place, which
    never starts the explorer's script."""
    pattern = re.compile(r'<a\b([^>]*?)href="' + re.escape(site) + r'(/[^"]*)"([^>]*)>(.*?)</a>', re.S)

    def sub(m: re.Match[str]) -> str:
        attrs = m.group(1) + m.group(3)
        classes = re.search(r'class="([^"]*)"', attrs)
        kept = [c for c in (classes.group(1).split() if classes else []) if c not in ("external", "external-link")] + ["internal"]
        attrs = re.sub(r'\s*\b(target|rel|class)="[^"]*"', "", attrs).strip()
        inner = re.sub(r'<svg[^>]*class="external-icon"[\s\S]*?</svg>', "", m.group(4))
        extra = f" {attrs}" if attrs else ""
        return f'<a{extra} class="{" ".join(dict.fromkeys(kept))}" href="{m.group(2)}" data-router-ignore>{inner}</a>'

    return pattern.sub(sub, text)


def finish(bundle: Bundle, graph_json: Path, public: Path) -> dict[str, int]:
    cfg = bundle.cfg
    site = cfg["site_url"].rstrip("/")
    notes, themes = bundle.notes(), bundle.themes()

    expected = {"notes/index": page_file(public, "notes/index")}
    expected.update({f"{t['slug']}/index": page_file(public, f"{t['slug']}/index") for t in themes})
    expected.update({slug_of(n.rel): page_file(public, slug_of(n.rel)) for n in notes})
    missing = sorted(s for s, f in expected.items() if not f.exists())
    if missing:
        raise BuildError(f"Quartz did not produce {len(missing)} page(s): {', '.join(missing[:10])}")

    for n in notes:
        f = page_file(public, slug_of(n.rel))
        text = f.read_text(encoding="utf-8")
        if LD_MARK not in text:
            text = text.replace("</head>", f'<script type="application/ld+json" {LD_MARK}>{bundle.jsonld(n)}</script></head>', 1)
        f.write_text(text, encoding="utf-8")
        twin = public / n.rel
        twin.parent.mkdir(parents=True, exist_ok=True)
        twin.write_text(n.text, encoding="utf-8")

    for f in public.rglob("*.html"):
        text = f.read_text(encoding="utf-8")
        fixed = same_site_links(text, site)
        if 'data-kf="theme"' not in fixed and "<head>" in fixed:
            fixed = fixed.replace("<head>", "<head>" + DARK_DEFAULT, 1)
        if fixed != text:
            f.write_text(fixed, encoding="utf-8")

    llms = [f"# {cfg['name']}", "", f"> {cfg['description']}", "",
            "Every note is also available as Markdown at its address plus .md. Notes follow the Open Knowledge Format v0.2; "
            f"provenance (sources, generated, verified) is in each file's frontmatter. The author's essays are canonical at {cfg['canonical_site']}.", ""]
    for t in themes:
        llms += [f"## {t['name']}", ""] + [f"- [{n.title}]({site}{n.url}.md): {n.description}" for n in t["notes"]] + [""]
    llms += ["## Optional", "", f"- [Graph data]({site}/graph.json): nodes and edges of the knowledge graph",
             f"- [Essays]({cfg['canonical_site']}/llms.txt): the canonical essays", ""]
    (public / "llms.txt").write_text("\n".join(llms), encoding="utf-8")
    if not (public / "robots.txt").exists():
        (public / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {site}/sitemap.xml\n", encoding="utf-8")

    shutil.copy(graph_json, public / "graph.json")
    gdir = public / "graph"
    if gdir.exists():
        shutil.rmtree(gdir)
    gdir.mkdir()
    for name in ("index.html", "explorer.css", "theme.js"):
        shutil.copy(EXPLORER / name, gdir / name)
    bundle_js = EXPLORER / "dist" / "explorer.js"
    if not bundle_js.exists():
        raise BuildError("explorer/dist/explorer.js is missing: run `npm run build:explorer`")
    shutil.copy(bundle_js, gdir / "explorer.js")
    # The same page is the site's home; its asset links are absolute (/graph/...), so one copy serves both addresses.
    shutil.copy(EXPLORER / "index.html", public / "index.html")
    return {"pages": len(expected), "notes": len(notes)}


def check_output(public: Path, bundle: Bundle) -> list[str]:
    """Problems a reader would hit: used by the tests and printed by `kfsite post --check`."""
    problems: list[str] = []
    site = bundle.cfg["site_url"].rstrip("/")
    for f in public.rglob("*.html"):
        text = f.read_text(encoding="utf-8")
        if re.search(r'<a\b[^>]*href="' + re.escape(site) + r'/', text):
            problems.append(f"{f.relative_to(public)}: link to the wiki's own domain left absolute")
        article = " ".join(re.findall(r"<article[\s\S]*?</article>", text))  # our content, not Quartz's own chrome
        if "\u2014" in article:
            problems.append(f"{f.relative_to(public)}: em dash")
        # Any address, not just one provider: "name@domain.tld" with a real-looking top-level domain, so asset names
        # such as "icon@2x.png" do not count.
        if re.search(r"mailto:|\b[\w.+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:com|org|net|io|ai|dev|app|co|me|edu|gov|us|uk|in|info)\b", text, re.I):
            problems.append(f"{f.relative_to(public)}: email address")
    return problems


__all__: list[Any] = ["finish", "check_output", "BuildError", "same_site_links"]
