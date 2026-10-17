"""Read an OKF v0.2 bundle (from a knowledge-foundation release) into notes and source copies.

Shared by the two build steps: `stage` (bundle -> Quartz content/) and `post` (after Quartz: JSON-LD, Markdown twins,
llms.txt, the Sigma graph explorer). Only the bundle and graph.json are read; no code is imported from the knowledge
repository (its ADR 004).
"""

from __future__ import annotations

import json
import re
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path, PurePosixPath
from typing import Any

import yaml

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
    """Keeps timestamps as text, the way llmwiki2 writes them."""


_Loader.yaml_implicit_resolvers = {
    k: [(t, r) for t, r in v if t != "tag:yaml.org,2002:timestamp"] for k, v in yaml.SafeLoader.yaml_implicit_resolvers.items()
}


def parse_doc(text: str) -> tuple[dict[str, Any], str]:
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}, text
    end = next(i for i in range(1, len(lines)) if lines[i].strip() == "---")
    return (yaml.load("\n".join(lines[1:end]), Loader=_Loader) or {}), "\n".join(lines[end + 1 :]).lstrip("\n")


def slug_of(rel: str) -> str:
    """Quartz slug of a bundle path: governed-ai/x.md -> governed-ai/x (Quartz serves it at /governed-ai/x)."""
    return re.sub(r"\.md$", "", rel)


def url_of(rel: str) -> str:
    return "/" + slug_of(rel)


def resolve(from_rel: str, link: str) -> str:
    """Bundle path a relative or bundle-absolute Markdown link points at."""
    if link.startswith("/"):
        return link.lstrip("/")
    parts: list[str] = []
    for p in (PurePosixPath(from_rel).parent / link).parts:
        if p == "..":
            if parts:
                parts.pop()
        elif p != ".":
            parts.append(p)
    return "/".join(parts)


def _verifications(fm: dict[str, Any]) -> list[dict[str, Any]]:
    v = fm.get("verified")
    return [v] if isinstance(v, dict) else [x for x in v or [] if isinstance(x, dict)]


def trust_tier(fm: dict[str, Any]) -> str:
    vs = _verifications(fm)
    if not vs:
        return "unverified"
    return "human-reviewed" if any(str(x.get("by", "")).startswith("human:") for x in vs) else "machine-confirmed"


def last_verified(fm: dict[str, Any]) -> str:
    return max((str(x.get("at", "")) for x in _verifications(fm)), default="")


def day(ts: Any) -> str:
    t = str(ts or "")
    return t[:10] if re.match(r"\d{4}-\d{2}-\d{2}", t) else ""


def human_day(ts: Any) -> str:
    d = day(ts)
    return datetime.strptime(d, "%Y-%m-%d").strftime("%b %-d, %Y") if d else ""


def html_url(resource: str) -> str:
    """The essays' Markdown twins on muthub.org are noindex; people should land on the HTML page."""
    return re.sub(r"^(https://muthub\.org/.+)\.md$", r"\1", resource)


@dataclass
class Doc:
    rel: str
    fm: dict[str, Any]
    body: str
    text: str
    backlinks: list["Doc"] = field(default_factory=list)

    @property
    def is_raw(self) -> bool:
        return self.rel.startswith("raw/")

    @property
    def title(self) -> str:
        return str(self.fm.get("title") or PurePosixPath(self.rel).stem)

    @property
    def theme(self) -> str:
        return self.rel.split("/", 1)[0]

    @property
    def url(self) -> str:
        return url_of(self.rel)

    @property
    def description(self) -> str:
        return " ".join(str(self.fm.get("description") or "").split())


MD_LINK = re.compile(r"(?<!!)\[([^\]]*)\]\(([^)\s]+?\.md)(#[^)]*)?\)")


class Bundle:
    def __init__(self, root: Path, config: dict[str, Any]) -> None:
        self.root, self.cfg = root, config
        self.docs: dict[str, Doc] = {}
        for path in sorted(root.rglob("*.md")):
            rel = path.relative_to(root).as_posix()
            if any(p.startswith(".") for p in PurePosixPath(rel).parts) or path.name in ("index.md", "log.md"):
                continue
            text = path.read_text(encoding="utf-8")
            fm, body = parse_doc(text)
            self.docs[rel] = Doc(rel, fm, body, text)
        for n in self.notes():
            for target in self.link_targets(n):
                t = self.docs.get(target)
                if t and not t.is_raw and t is not n and n not in t.backlinks:
                    t.backlinks.append(n)

    def notes(self) -> list[Doc]:
        return sorted((d for d in self.docs.values() if not d.is_raw), key=lambda d: d.title.lower())

    def link_targets(self, d: Doc) -> list[str]:
        return [resolve(d.rel, m.group(2)) for m in MD_LINK.finditer(d.body) if "://" not in m.group(2)]

    def themes(self) -> list[dict[str, Any]]:
        out = []
        for slug, desc in self.cfg["themes"].items():
            members = [n for n in self.notes() if n.theme == slug]
            if members:
                name = (self.cfg.get("theme_labels") or {}).get(slug) or THEME_NAMES.get(slug, slug)
                out.append({"slug": slug, "name": name, "description": desc, "notes": members})
        return out

    def sources_of(self, d: Doc) -> list[dict[str, str]]:
        """A note's sources, each with its title, publication date and the public page to read it on."""
        out = []
        for s in d.fm.get("sources") or []:
            if not isinstance(s, dict):
                continue
            res = str(s.get("resource", ""))
            raw = self.docs.get(res.lstrip("/")) if res.startswith("/") else None
            if raw:
                link = html_url(str(raw.fm.get("resource") or ""))
                out.append({"id": str(s.get("id")), "title": raw.title, "published": human_day(raw.fm.get("published_at")),
                            "url": link if link.startswith("https://") else "", "kind": str(raw.fm.get("origin_kind", ""))})
            else:
                out.append({"id": str(s.get("id")), "title": str(s.get("title") or res), "published": "",
                            "url": res if res.startswith("https://") else "", "kind": ""})
        return out

    def jsonld(self, d: Doc) -> str:
        su = self.cfg["site_url"].rstrip("/")
        author = self.cfg["author"]
        person = {"@type": "Person", "name": author["name"], "url": author["url"], "sameAs": author.get("same_as", [])}
        gen = d.fm.get("generated") or {}
        art: dict[str, Any] = {
            "@context": "https://schema.org", "@type": "Article", "headline": d.title, "description": d.description,
            "url": su + d.url, "mainEntityOfPage": su + d.url, "author": person, "publisher": person,
            "dateCreated": str(gen.get("at", "")), "dateModified": last_verified(d.fm) or str(gen.get("at", "")),
            "inLanguage": "en", "license": "https://creativecommons.org/licenses/by/4.0/",
            "keywords": ", ".join(str(t) for t in d.fm.get("tags") or []),
            "isPartOf": {"@type": "WebSite", "name": self.cfg["name"], "url": su},
            "citation": [s["url"] for s in self.sources_of(d) if s["url"]],
        }
        if d.fm.get("canonical_essay"):
            art["isBasedOn"] = d.fm["canonical_essay"]
        items: list[dict[str, Any]] = [art]
        if d.fm.get("kind") == "Concept":
            items.append({"@context": "https://schema.org", "@type": "DefinedTerm", "name": d.title, "description": d.description,
                          "url": su + d.url, "inDefinedTermSet": su + "/"})
        return json.dumps(items if len(items) > 1 else art, ensure_ascii=False).replace("</", "<\\/")


def load_config(bundle_root: Path) -> dict[str, Any]:
    """wiki.config.yaml ships in every release next to wiki/; defaults cover a bare bundle."""
    path = bundle_root.parent / "wiki.config.yaml"
    cfg = yaml.safe_load(path.read_text(encoding="utf-8")) if path.exists() else {}
    cfg.setdefault("name", "Knowledge Foundation")
    cfg.setdefault("site_url", "https://wiki.muthub.org")
    cfg.setdefault("canonical_site", "https://muthub.org")
    cfg.setdefault("themes", {k: "" for k in THEME_NAMES})
    cfg.setdefault("author", {"name": "Muthukrishnan Bommiah", "url": "https://muthub.org/about", "same_as": []})
    cfg["description"] = cfg.get("description") or (
        "Muthu Bommiah's working knowledge on governed AI, context engineering and AI-native software delivery, "
        "kept current by an LLM librarian; each note says whether he has reviewed it. Every note carries its sources and when it was last verified.")
    return cfg
