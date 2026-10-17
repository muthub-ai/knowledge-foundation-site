"""Stage an OKF bundle as Quartz content.

    bundle (wiki/)                         content/ (what Quartz builds)
    <theme>/<note>.md                  ->  <theme>/<note>.md   Quartz frontmatter, provenance callout, body, Sources, See also
    <theme>/index.md                   ->  <theme>/index.md    the theme's name and description (Quartz lists the notes)
    index.md                           ->  index.md            the home page
    raw/*, log.md                      ->  (not published: sources link to the original instead)

Links are rewritten to site paths ("/<theme>/<note>"), which Quartz's CrawlLinks resolves with the "absolute" strategy.
Links Quartz would mangle (query strings, the Markdown twins) are written as absolute https URLs on the wiki's own
domain; the post step turns them back into same-site links.
"""

from __future__ import annotations

import re
import shutil
from pathlib import Path
from typing import Any
from urllib.parse import quote

import yaml

from .bundle import MD_LINK, Bundle, Doc, html_url, human_day, last_verified, resolve, trust_tier, url_of

SEE_ALSO = re.compile(r"(?:^|\n)# See also\n(?P<list>[\s\S]*)$")
CALLOUT = {"human-reviewed": ("success", "Reviewed by Muthu"), "machine-confirmed": ("info", "Machine-confirmed, not yet reviewed"),
           "unverified": ("info", "Not yet reviewed")}


def _dump(fm: dict[str, Any]) -> str:
    return "---\n" + yaml.safe_dump(fm, sort_keys=False, allow_unicode=True, width=1000) + "---\n"


class Stager:
    def __init__(self, bundle: Bundle) -> None:
        self.b = bundle
        self.site = bundle.cfg["site_url"].rstrip("/")

    def relink(self, d: Doc, text: str) -> str:
        def sub(m: re.Match[str]) -> str:
            label, link, anchor = m.group(1), m.group(2), m.group(3) or ""
            if "://" in link or link.startswith("mailto:"):
                return m.group(0)
            target = self.b.docs.get(resolve(d.rel, link))
            if target and not target.is_raw:
                return f"[{label}]({target.url}{anchor})"
            external = html_url(str(target.fm.get("resource") or "")) if target else ""
            # Source copies are not published and a missing note has no page: link to the original, or keep the text.
            return f"[{label}]({external})" if external.startswith("https://") else label

        return MD_LINK.sub(sub, text)

    def note(self, d: Doc) -> str:
        fm, gen = d.fm, d.fm.get("generated") or {}
        body = d.body.rstrip() + "\n"
        see_also = ""
        m = SEE_ALSO.search(body)
        if m:
            see_also, body = m.group("list").strip(), body[: m.start()].rstrip() + "\n"
        body = self.relink(d, body)
        body = re.sub(r"^(#{1,5}) ", lambda mm: "#" + mm.group(1) + " ", body, flags=re.M)  # the title is the page's h1

        trust = trust_tier(fm)
        kind, title = CALLOUT[trust]
        facts = [f"**{fm.get('kind', 'Concept')}**"]
        if fm.get("status") in ("draft", "deprecated"):
            facts.append(str(fm["status"]).capitalize())
        if last_verified(fm):
            facts.append(f"Last verified {human_day(last_verified(fm))}")
        if gen.get("at"):
            facts.append(f"Drafted {human_day(gen['at'])}" + (f" by {gen['by']}" if gen.get("by") else ""))
        if fm.get("stale_after"):
            facts.append(f"Re-check by {human_day(fm['stale_after'])}")
        sources = self.b.sources_of(d)
        facts.append(f"{len(sources)} source" + ("" if len(sources) == 1 else "s"))
        callout = [f"> [!{kind}] {title}", "> " + " · ".join(facts)]
        if fm.get("canonical_essay"):
            callout += [">", f"> The full essay is on [muthub.org]({fm['canonical_essay']}); this note summarises it."]
        callout += [">", f"> [Show in graph]({self.site}/graph/?node={quote(d.rel, safe='')}) · [Markdown]({self.site}{d.url}.md)"]

        parts = ["\n".join(callout), body.strip()]
        if sources:
            lines = []
            for s in sources:
                title_md = f"[{s['title']}]({s['url']})" if s["url"] else s["title"]
                lines.append(f"{len(lines) + 1}. {title_md}" + (f" · published {s['published']}" if s["published"] else ""))
            parts.append("## Sources\n\n" + "\n".join(lines))
        if see_also:
            parts.append("## See also\n\n" + self.relink(d, see_also))

        out_fm: dict[str, Any] = {"title": d.title, "description": d.description, "tags": [str(t) for t in fm.get("tags") or []]}
        if gen.get("at"):
            out_fm["created"] = str(gen["at"])
        out_fm["modified"] = last_verified(fm) or str(gen.get("at", "")) or None
        out_fm["kf_kind"], out_fm["kf_trust"], out_fm["kf_status"] = str(fm.get("kind", "Concept")), trust, str(fm.get("status", "stable"))
        return _dump({k: v for k, v in out_fm.items() if v not in (None, "")}) + "\n" + "\n\n".join(parts) + "\n"

    def theme_index(self, t: dict[str, Any]) -> str:
        return _dump({"title": t["name"], "description": t["description"]}) + f"\n{t['description']}.\n"

    def home(self) -> str:
        cfg, notes = self.b.cfg, self.b.notes()
        lines = [cfg["description"], "",
                 f"{len(notes)} notes. Each one shows whether Muthu has reviewed it, when it was last verified and the sources it draws on. "
                 f"The essays themselves live on [muthub.org]({cfg['canonical_site']}).", "",
                 f"[Explore the graph]({self.site}/graph/) · [llms.txt]({self.site}/llms.txt)", "", "## Themes", ""]
        for t in self.b.themes():
            lines.append(f"- [{t['name']}](/{t['slug']}/): {t['description']} ({len(t['notes'])} notes)")
        recent = sorted(notes, key=lambda n: last_verified(n.fm) or str((n.fm.get("generated") or {}).get("at", "")), reverse=True)[:8]
        lines += ["", "## Recently updated", ""] + [f"- [{n.title}]({n.url})" for n in recent]
        return _dump({"title": cfg["name"], "description": cfg["description"]}) + "\n" + "\n".join(lines) + "\n"

    def write(self, out: Path) -> dict[str, int]:
        if out.exists():
            shutil.rmtree(out)
        out.mkdir(parents=True)
        (out / "index.md").write_text(self.home(), encoding="utf-8")
        for t in self.b.themes():
            (out / t["slug"]).mkdir(exist_ok=True)
            (out / t["slug"] / "index.md").write_text(self.theme_index(t), encoding="utf-8")
        for n in self.b.notes():
            target = out / n.rel
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(self.note(n), encoding="utf-8")
        return {"notes": len(self.b.notes()), "themes": len(self.b.themes())}


def stage(bundle_root: Path, out: Path, config: dict[str, Any]) -> dict[str, int]:
    return Stager(Bundle(bundle_root, config)).write(out)


__all__ = ["stage", "Stager", "url_of"]
