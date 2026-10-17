"""A stand-in for `quartz build`, for tests only: writes <slug>.html for every staged Markdown file the way Quartz lays
out its output, with links made relative (Quartz's "absolute" strategy) and same-site https links marked external with
Quartz's icon, so the post step and the graph explorer can be tested where npm (and so Quartz) is unavailable.
The real Quartz build is tested in CI (tests/e2e/site.spec.ts).
"""

from __future__ import annotations

import posixpath
import re
import shutil
from pathlib import Path

import markdown
import yaml

ICON = '<svg aria-hidden="true" class="external-icon" viewBox="0 0 512 512"><path d="M320 0H288"></path></svg>'


def render(content: Path, public: Path) -> None:
    if public.exists():
        shutil.rmtree(public)
    for md in sorted(content.rglob("*.md")):
        rel = md.relative_to(content).with_suffix("").as_posix()
        text = md.read_text(encoding="utf-8")
        fm = yaml.safe_load(text.split("---\n")[1]) or {}
        body = text.split("---\n", 2)[2]
        html = markdown.markdown(body, extensions=["footnotes", "tables"])

        def link(m: re.Match[str]) -> str:
            href = m.group(1)
            if href.startswith("https://"):
                return f'<a href="{href}" class="external external-link" target="_blank" rel="noopener">'
            if href.startswith("/"):
                base = posixpath.dirname(rel) or "."
                return f'<a href="{posixpath.relpath(href.lstrip("/") or ".", base)}" class="internal">'
            return m.group(0)

        html = re.sub(r'<a href="([^"]*)">', link, html)
        html = re.sub(r'(<a href="https://[^"]*"[^>]*>)(.*?)</a>', lambda m: f"{m.group(1)}{m.group(2)}{ICON}</a>", html)
        page = (f'<!doctype html><html lang="en"><head><meta charset="utf-8"><title>{fm.get("title", "")}</title></head>'
                f'<body><div class="page"><article class="popover-hint"><h1 class="article-title">{fm.get("title", "")}</h1>{html}</article>'
                '<footer><p>Created with Quartz \u2014 fake build</p></footer></div></body></html>')
        out = public / f"{rel}.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(page, encoding="utf-8")
    (public / "sitemap.xml").write_text("<urlset></urlset>", encoding="utf-8")
