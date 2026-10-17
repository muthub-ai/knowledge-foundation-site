# Knowledge Foundation website

The static site at **wiki.muthub.org**. It reads one thing: a release of
[`muthub-ai/knowledge-foundation`](https://github.com/muthub-ai/knowledge-foundation) (`bundle.tgz` and `graph.json`),
and writes plain HTML. It never imports code from the knowledge repository, so either can change without the other
(ADR 004 and 010 there).

What it builds:

- a page per note at `/<theme>/<slug>/` with a provenance block (reviewed or not, last verified, re-check date,
  sources), sources with their publication dates, See also, backlinks and JSON-LD (Article; DefinedTerm for concepts)
- theme pages, a home page and client-side search
- `/graph/`: the knowledge graph explorer (canvas, no libraries): pan, zoom, hover, a side panel per note, search,
  filters by node type and edge origin, a list view, and `?node=<id>` links from every note
- a Markdown twin of every page (`/<theme>/<slug>.md`), `llms.txt`, `sitemap.xml`, `rss.xml`, `robots.txt`, `404.html`

Copies of the author's essays under `/raw/` are `noindex` and left out of the sitemap, because muthub.org is
canonical for them. Third-party source copies are never published; their notes link to the original.

## Build locally

```bash
pip install -r requirements.txt
python -m kfsite --bundle ../knowledge-foundation/wiki --graph ../knowledge-foundation/dist/graph.json --out public
python -m http.server 8765 --directory public       # http://localhost:8765
```

(`cd ../knowledge-foundation && make graph` first, to write `dist/graph.json`.) Without `--bundle`, the build
downloads the latest release (or the tag in `KF_RELEASE`), which is what Vercel does.

## Test

```bash
python -m unittest discover -s tests -v             # generator, links, escaping, JSON-LD, sitemap, blocklist
npm install --no-save @playwright/test@1.56.1 && npx playwright install chromium
npx playwright test                                 # browser tests, desktop and mobile
```

CI (`.github/workflows/ci.yml`) builds from the knowledge repository's `main` and runs both on every pull request.
Add the `CONFIDENTIAL_TERMS` secret here too, so the built pages are scanned for confidential terms.

## Deploy (once)

1. Vercel → Add New Project → import `muthub-ai/knowledge-foundation-site`. `vercel.json` sets the install and build
   commands, the output folder and the security headers; no other settings are needed.
2. Project → Settings → Domains → add `wiki.muthub.org`, then at your DNS host add a CNAME record
   `wiki` → `cname.vercel-dns.com`.
3. Project → Settings → Git → Deploy Hooks → create one for `main`, and save its URL as the `VERCEL_DEPLOY_HOOK`
   secret in the knowledge repository. Every release there then rebuilds the site.
