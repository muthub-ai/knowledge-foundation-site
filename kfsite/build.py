"""Static site for the Knowledge Foundation wiki.

Reads an OKF v0.2 bundle and the published graph.json (both from a knowledge-foundation release, or local paths) and
writes plain HTML to public/: one page per note with a provenance block and JSON-LD, theme pages, a home page with
search, the graph explorer, a Markdown twin of every page, llms.txt, sitemap.xml, rss.xml, robots.txt and 404.html.

Only the bundle and graph.json are read: the site never imports code from the knowledge repository (ADR 004).
"""

from __future__ import annotations

import html
import json
import re
import shutil
from dataclasses import dataclass, field
from datetime import datetime, timezone
from email.utils import format_datetime
from pathlib import Path, PurePosixPath
from typing import Any

import markdown
import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape

ROOT = Path(__file__).resolve().parents[1]

THEME_NAMES = {
    "context-engineering": "Context engineering",
    "governed-ai": "Governed AI",
    "ai-native-sdlc": "AI-native SDLC",
    "data-ai-platforms": "Data & AI platforms",
    "leading-ai-change": "Leading AI change",
    "reference": "Reference",
    "start-here": "Start here",
}


class _Loader(yaml.SafeLoader):
    pass


_Loader.yaml_implicit_resolvers = {
    k: [(t, r) for t, r in v if t != "tag:yaml.org,2002:timestamp"] for k, v in yaml.SafeLoader.yaml_implicit_resolvers.items()
}


def parse_doc(text: str) -> tuple[dict[str, Any], str]:
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}, text
    end = next(i for i in range(1, len(lines)) if lines[i].strip() == "---")
    return (yaml.load("\n".join(lines[1:end]), Loader=_Loader) or {}), "\n".join(lines[end + 1 :]).lstrip("\n")


def url_for(rel: str) -> str:
    """Site path of a bundle document: theme/slug.md -> /theme/slug/ (folder-style, works on any static host)."""
    return "/" + re.sub(r"\.md$", "", rel) + "/"


def resolve(from_rel: str, link: str) -> str:
    if link.startswith("/"):
        return link.lstrip("/")
    parts: list[str] = []
    for p in (PurePosixPath(from_rel).parent / link).parts:
        if p == "..":
            parts and parts.pop()
        elif p != ".":
            parts.append(p)
    return "/".join(parts)


def trust_tier(fm: dict[str, Any]) -> str:
    v = fm.get("verified")
    vs = [v] if isinstance(v, dict) else [x for x in v or [] if isinstance(x, dict)]
    if not vs:
        return "unverified"
    return "human-reviewed" if any(str(x.get("by", "")).startswith("human:") for x in vs) else "machine-confirmed"


def last_verified(fm: dict[str, Any]) -> str:
    v = fm.get("verified")
    vs = [v] if isinstance(v, dict) else [x for x in v or [] if isinstance(x, dict)]
    return max((str(x.get("at", "")) for x in vs), default="")


def day(ts: Any) -> str:
    t = str(ts or "")
    return t[:10] if re.match(r"\d{4}-\d{2}-\d{2}", t) else ""


def human_day(ts: Any) -> str:
    d = day(ts)
    if not d:
        return ""
    return datetime.strptime(d, "%Y-%m-%d").strftime("%b %-d, %Y")


@dataclass
class Page:
    rel: str
    fm: dict[str, Any]
    body: str
    raw_text: str
    is_raw: bool
    backlinks: list["Page"] = field(default_factory=list)

    @property
    def url(self) -> str:
        return url_for(self.rel)

    @property
    def title(self) -> str:
        return str(self.fm.get("title") or PurePosixPath(self.rel).stem)

    @property
    def theme(self) -> str:
        return self.rel.split("/", 1)[0]

    @property
    def own(self) -> bool:
        return str(self.fm.get("origin_kind", "")).startswith("own")


SEE_ALSO = re.compile(r"\n# See also\n(?P<list>(?:\n?[*-] .*)*)\s*$")
FULL_LINK = re.compile(r"(?<!!)\[([^\]]*)\]\(([^)\s]+?\.md)(#[^)]*)?\)")
MD_LINK = re.compile(r"\]\(([^)\s]+?\.md)(#[^)]*)?\)")


class Site:
    def __init__(self, bundle: Path, graph_path: Path, out: Path, config: dict[str, Any]) -> None:
        self.bundle, self.graph_path, self.out, self.cfg = bundle, graph_path, out, config
        self.site_url = config["site_url"].rstrip("/")
        self.env = Environment(loader=FileSystemLoader(ROOT / "templates"), autoescape=select_autoescape(["html"]))
        self.env.filters["human_day"] = human_day
        self.pages: dict[str, Page] = {}
        self.built = datetime.now(timezone.utc)

    # -- reading --------------------------------------------------------------
    def load(self) -> None:
        for path in sorted(self.bundle.rglob("*.md")):
            rel = path.relative_to(self.bundle).as_posix()
            if any(p.startswith(".") for p in PurePosixPath(rel).parts) or path.name in ("index.md", "log.md"):
                continue
            text = path.read_text(encoding="utf-8")
            fm, body = parse_doc(text)
            self.pages[rel] = Page(rel, fm, body, text, rel.startswith("raw/"))
        for p in self.notes():
            for target in self.links_of(p):
                if target in self.pages and not self.pages[target].is_raw and p not in self.pages[target].backlinks:
                    self.pages[target].backlinks.append(p)

    def notes(self) -> list[Page]:
        return [p for p in self.pages.values() if not p.is_raw]

    def published_raws(self) -> list[Page]:
        return [p for p in self.pages.values() if p.is_raw and p.own]

    def links_of(self, p: Page) -> list[str]:
        return [resolve(p.rel, m.group(1)) for m in MD_LINK.finditer(p.body) if "://" not in m.group(1)]

    # -- rendering --------------------------------------------------------------
    def render_body(self, p: Page) -> tuple[str, list[dict[str, str]]]:
        body = p.body
        see_also: list[dict[str, str]] = []
        m = SEE_ALSO.search("\n" + body)
        if m:
            for line in m.group("list").strip().splitlines():
                lm = re.match(r"[*-]\s+\[([^\]]*)\]\(([^)\s]+)\)\s*(?:-\s*(.*))?", line.strip())
                if lm:
                    target = resolve(p.rel, lm.group(2))
                    see_also.append({"title": lm.group(1), "url": url_for(target), "summary": lm.group(3) or ""})
            body = ("\n" + body)[: m.start()].lstrip("\n")

        def relink(mm: re.Match[str]) -> str:
            if "://" in mm.group(2) or mm.group(2).startswith("mailto:"):
                return mm.group(0)
            text, target = mm.group(1), resolve(p.rel, mm.group(2))
            page = self.pages.get(target)
            if page and (not page.is_raw or page.own):
                return f"[{text}]({url_for(target)}{mm.group(3) or ''})"
            external = str(page.fm.get("resource") or "") if page else ""
            # A third-party source copy is not published, and a missing note has no page: link out, or keep the text.
            return f"[{text}]({external})" if external.startswith("https://") else text

        body = FULL_LINK.sub(relink, body)
        # The note's own title is the page h1: shift body headings down one level.
        body = re.sub(r"^(#{1,5}) ", lambda mm: "#" + mm.group(1) + " ", body, flags=re.M)
        md = markdown.Markdown(extensions=["footnotes", "tables", "fenced_code", "sane_lists"], output_format="html")
        return md.convert(body), see_also

    def sources_of(self, p: Page) -> list[dict[str, str]]:
        out = []
        for s in p.fm.get("sources") or []:
            if not isinstance(s, dict):
                continue
            res = str(s.get("resource", ""))
            raw = self.pages.get(res.lstrip("/")) if res.startswith("/") else None
            if raw:
                external = re.sub(r"^(https://muthub\.org/.+)\.md$", r"\1", str(raw.fm.get("resource") or ""))
                out.append({"id": str(s.get("id")), "title": raw.title, "published": human_day(raw.fm.get("published_at")),
                            "url": external if external.startswith("https://") else "", "copy_url": raw.url if raw.own else "",
                            "kind": str(raw.fm.get("origin_kind", ""))})
            else:
                out.append({"id": str(s.get("id")), "title": str(s.get("title") or res), "published": "", "url": res if res.startswith("https://") else "", "copy_url": "", "kind": ""})
        return out

    def jsonld(self, p: Page, sources: list[dict[str, str]]) -> str:
        author = self.cfg["author"]
        person = {"@type": "Person", "name": author["name"], "url": author["url"], "sameAs": author.get("same_as", [])}
        art: dict[str, Any] = {
            "@context": "https://schema.org", "@type": "Article", "headline": p.title, "description": p.fm.get("description", ""),
            "url": self.site_url + p.url, "mainEntityOfPage": self.site_url + p.url, "author": person, "publisher": person,
            "dateModified": str((p.fm.get("generated") or {}).get("at", "")), "inLanguage": "en",
            "license": "https://creativecommons.org/licenses/by/4.0/", "keywords": ", ".join(p.fm.get("tags") or []),
            "isPartOf": {"@type": "WebSite", "name": self.cfg["name"], "url": self.site_url},
            "citation": [s["url"] for s in sources if s["url"]],
        }
        if p.fm.get("canonical_essay"):
            art["isBasedOn"] = p.fm["canonical_essay"]
        graph: list[dict[str, Any]] = [art]
        if p.fm.get("kind") == "Concept":
            graph.append({"@context": "https://schema.org", "@type": "DefinedTerm", "name": p.title, "description": p.fm.get("description", ""),
                          "url": self.site_url + p.url, "inDefinedTermSet": self.site_url + "/"})
        return json.dumps(graph if len(graph) > 1 else art, ensure_ascii=False).replace("</", "<\\/")

    def write(self, url: str, html_text: str) -> None:
        target = self.out / url.strip("/") / "index.html" if url.strip("/") else self.out / "index.html"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(html_text, encoding="utf-8")

    def twin(self, rel: str, text: str) -> None:
        target = self.out / (re.sub(r"\.md$", "", rel) + ".md")
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(text, encoding="utf-8")

    def base_ctx(self, **kw: Any) -> dict[str, Any]:
        return {"site": self.cfg, "site_url": self.site_url, "themes": self.theme_list(), "built": self.built.strftime("%b %-d, %Y"), **kw}

    def theme_list(self) -> list[dict[str, Any]]:
        out = []
        for slug, desc in self.cfg["themes"].items():
            notes = [p for p in self.notes() if p.theme == slug]
            if notes:
                out.append({"slug": slug, "name": THEME_NAMES.get(slug, slug), "description": desc, "count": len(notes), "url": f"/{slug}/"})
        return out

    def build(self) -> dict[str, int]:
        if self.out.exists():
            shutil.rmtree(self.out)
        self.out.mkdir(parents=True)
        shutil.copytree(ROOT / "static", self.out / "static")
        self.load()
        notes = sorted(self.notes(), key=lambda p: p.title.lower())
        note_tpl, theme_tpl = self.env.get_template("note.html"), self.env.get_template("theme.html")

        for p in notes:
            body_html, see_also = self.render_body(p)
            sources = self.sources_of(p)
            fm = p.fm
            prov = {"trust": trust_tier(fm), "generated_by": str((fm.get("generated") or {}).get("by", "")),
                    "generated_at": human_day((fm.get("generated") or {}).get("at")), "verified_at": human_day(last_verified(fm)),
                    "stale_after": human_day(fm.get("stale_after")), "status": str(fm.get("status", "stable"))}
            self.write(p.url, note_tpl.render(**self.base_ctx(page=p, kind=fm.get("kind", "Concept"), body=body_html, see_also=see_also,
                       sources=sources, prov=prov, backlinks=sorted(p.backlinks, key=lambda b: b.title.lower()), jsonld=self.jsonld(p, sources),
                       theme_name=THEME_NAMES.get(p.theme, p.theme), canonical=fm.get("canonical_essay"), md_url=p.url.rstrip("/") + ".md",
                       title=p.title, description=fm.get("description", ""))))
            self.twin(p.rel, p.raw_text)

        for p in self.published_raws():
            # Source copies of the author's own pages keep their site-relative links: point them back at that site.
            origin = re.match(r"https://[^/]+", str(p.fm.get("resource") or ""))
            raw_body = re.sub(r"\]\((/[^)\s]*)\)", lambda mm: f"]({origin.group(0) if origin else self.cfg['canonical_site']}{mm.group(1)})", p.body)
            body_html = markdown.markdown(re.sub(r"^(#{1,5}) ", lambda mm: "#" + mm.group(1) + " ", raw_body, flags=re.M), extensions=["tables", "fenced_code"])
            self.write(p.url, self.env.get_template("raw.html").render(**self.base_ctx(page=p, body=body_html, title=p.title,
                       description=f"Source copy, published {human_day(p.fm.get('published_at'))}", md_url=p.url.rstrip("/") + ".md",
                       published=human_day(p.fm.get("published_at")))))
            self.twin(p.rel, p.raw_text)

        for t in self.theme_list():
            members = [p for p in notes if p.theme == t["slug"]]
            self.write(t["url"], theme_tpl.render(**self.base_ctx(theme=t, notes=members, title=t["name"], description=t["description"], md_url=t["url"].rstrip("/") + ".md")))
            (self.out / f"{t['slug']}.md").write_text(f"# {t['name']}\n\n> {t['description']}\n\n" + "\n".join(f"- [{p.title}]({self.site_url}{p.url.rstrip('/')}.md): {p.fm.get('description', '')}" for p in members) + "\n", encoding="utf-8")

        recent = sorted(notes, key=lambda p: str((p.fm.get("generated") or {}).get("at", "")), reverse=True)[:8]
        self.write("/", self.env.get_template("home.html").render(**self.base_ctx(recent=recent, count=len(notes), title=self.cfg["name"],
                   description=self.cfg.get("description", ""), md_url="/index.md")))
        self.write("/graph/", self.env.get_template("graph.html").render(**self.base_ctx(title="Graph", description="An interactive map of the notes, their sources and how they connect.", md_url="")))
        self.write("/search/", self.env.get_template("search.html").render(**self.base_ctx(title="Search", description="Search the wiki.", md_url="")))
        (self.out / "404.html").write_text(self.env.get_template("404.html").render(**self.base_ctx(title="Not found", description="", md_url="")), encoding="utf-8")
        shutil.copy(self.graph_path, self.out / "graph.json")
        self.write_indexes(notes)
        return {"notes": len(notes), "sources": len(self.published_raws()), "themes": len(self.theme_list())}

    def write_indexes(self, notes: list[Page]) -> None:
        su = self.site_url
        (self.out / "search-index.json").write_text(json.dumps([
            {"url": p.url, "title": p.title, "kind": str(p.fm.get("kind", "")), "theme": THEME_NAMES.get(p.theme, p.theme),
             "summary": str(p.fm.get("description", "")), "text": re.sub(r"[#*\[\]()`>_-]+", " ", p.body)[:4000]} for p in notes
        ], ensure_ascii=False), encoding="utf-8")
        llms = [f"# {self.cfg['name']}", "", f"> {self.cfg.get('description', '')}", "",
                f"Every page is also available as Markdown by replacing the trailing slash with .md. Notes follow the Open Knowledge Format v0.2; provenance is in each file's frontmatter. The author's essays are canonical at {self.cfg['canonical_site']}.", ""]
        for t in self.theme_list():
            llms += [f"## {t['name']}", ""] + [f"- [{p.title}]({su}{p.url.rstrip('/')}.md): {p.fm.get('description', '')}" for p in notes if p.theme == t["slug"]] + [""]
        llms += ["## Optional", "", f"- [Graph data]({su}/graph.json): nodes and edges of the knowledge graph", f"- [Essays]({self.cfg['canonical_site']}/llms.txt): the canonical essays", ""]
        text = "\n".join(llms)
        (self.out / "llms.txt").write_text(text, encoding="utf-8")
        (self.out / "index.md").write_text(text, encoding="utf-8")
        # Source copies duplicate the author's essays on muthub.org, so they are noindex and stay out of the sitemap.
        urls = ["/", "/graph/"] + [t["url"] for t in self.theme_list()] + [p.url for p in notes]
        (self.out / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
                                              + "".join(f"  <url><loc>{su}{u}</loc></url>\n" for u in urls) + "</urlset>\n", encoding="utf-8")
        items = sorted(notes, key=lambda p: str((p.fm.get("generated") or {}).get("at", "")), reverse=True)[:30]

        def rfc822(p: Page) -> str:
            ts = str((p.fm.get("generated") or {}).get("at", ""))
            try:
                return format_datetime(datetime.fromisoformat(ts.replace("Z", "+00:00")))
            except ValueError:
                return format_datetime(self.built)

        rss = ['<?xml version="1.0" encoding="UTF-8"?>', '<rss version="2.0"><channel>', f"<title>{html.escape(self.cfg['name'])}</title>", f"<link>{su}/</link>",
               f"<description>{html.escape(self.cfg.get('description', ''))}</description>"]
        rss += [f"<item><title>{html.escape(p.title)}</title><link>{su}{p.url}</link><guid>{su}{p.url}</guid><pubDate>{rfc822(p)}</pubDate>"
                f"<description>{html.escape(str(p.fm.get('description', '')))}</description></item>" for p in items]
        rss += ["</channel></rss>", ""]
        (self.out / "rss.xml").write_text("\n".join(rss), encoding="utf-8")
        (self.out / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {su}/sitemap.xml\n", encoding="utf-8")


def load_config(bundle_root: Path) -> dict[str, Any]:
    """wiki.config.yaml ships in every release next to wiki/; fall back to defaults when building from a bare bundle."""
    cfg_path = bundle_root.parent / "wiki.config.yaml"
    cfg = yaml.safe_load(cfg_path.read_text(encoding="utf-8")) if cfg_path.exists() else {}
    cfg.setdefault("name", "Knowledge Foundation")
    cfg.setdefault("site_url", "https://wiki.muthub.org")
    cfg.setdefault("canonical_site", "https://muthub.org")
    cfg.setdefault("themes", {k: "" for k in THEME_NAMES})
    cfg.setdefault("author", {"name": "Muthukrishnan Bommiah", "url": "https://muthub.org/about", "same_as": []})
    cfg["description"] = cfg.get("description") or (
        "Muthu Bommiah's working knowledge on governed AI, context engineering and AI-native software delivery, "
        "kept current by an LLM librarian and reviewed by him. Every note carries its sources and when it was last verified.")
    return cfg
