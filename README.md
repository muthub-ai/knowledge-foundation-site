# Knowledge Foundation website

**wiki.muthub.org**: [Quartz 5](https://quartz.jzhao.xyz) over the Knowledge Foundation bundle, with a
[Sigma.js 4](https://www.sigmajs.org) graph explorer at `/graph/`. It reads one thing, a release of
[`muthub-ai/knowledge-foundation`](https://github.com/muthub-ai/knowledge-foundation) (`bundle.tgz` and `graph.json`),
and never imports code from that repository (ADR 004 and 014 there).

```
release (wiki/, graph.json)
  └─ kfsite stage   OKF notes → Quartz content: provenance callout, sources with dates, site-path links, home and theme pages
      └─ quartz build   Quartz 5 at the commit in quartz.ref, configured by quartz.config.yaml
          └─ kfsite post   JSON-LD, Markdown twins, llms.txt, robots.txt, the Sigma explorer and graph.json
              └─ public/   what Vercel serves
```

What a reader gets:
- **Note pages** (Quartz). Each opens with a callout: reviewed by Muthu or not yet, last verified, drafted by whom,
  re-check date, number of sources. Then the note, its sources with publication dates, See also, and Quartz's
  backlinks, table of contents, popovers and tag list.
- **Theme folders, search, the folder explorer, dark mode and RSS**, from Quartz.
- **`/graph/`**: the whole graph in Sigma.js. It has hover highlighting, a side panel per note, search, filters by node
  type and connection origin, a list view, zoom controls, and `?node=<id>` links from every note. It shares the dark-mode
  choice with the Quartz pages.
- **For machines**: a Markdown twin of every note (`/<theme>/<note>.md`, the OKF file itself), `llms.txt`, the sitemap,
  and JSON-LD on every note.

Source copies under `raw/` are not published. Sources link to the original instead: the essay on muthub.org, or the
third-party page.

## Build

Needs Python 3.12 and Node 22.

```bash
pip install -r requirements.txt
KF_BUNDLE=../knowledge-foundation/wiki KF_GRAPH=../knowledge-foundation/dist/graph.json bash scripts/build.sh
python3 tests/serve.py public 8765          # http://127.0.0.1:8765, with clean URLs as on Vercel
```

`cd ../knowledge-foundation && make graph` first writes `dist/graph.json`. Without `KF_BUNDLE`, the build downloads
the latest release (or the tag in `KF_RELEASE`), which is what Vercel does. The first build clones Quartz into
`.build/` and runs `npm ci` there, which takes a minute or two.

**Upgrading Quartz:**
1. Put the new commit in `quartz.ref`.
2. Run `python scripts/make_quartz_config.py .build/quartz` to regenerate the config from Quartz's new default.
3. Build and test.

**The explorer:** `explorer/src/explorer.ts` is bundled with Sigma.js and graphology by `npm run build:explorer` into
`explorer/dist/explorer.js`. The build script rebuilds it from npm every time. The committed copy is only there for
machines without npm.

## Test

```bash
pip install -r requirements-dev.txt
python -m unittest discover -s tests -v     # stage, post, release download (fixture bundle and the real one)
npm install && npx playwright install chromium
KF_QUARTZ=1 npx playwright test             # Quartz pages and the graph explorer, desktop and mobile
```

Without npm, `python tests/build_preview.py --bundle … --graph …` builds `public/` with a stand-in for Quartz
(`tests/fake_quartz.py`). In that case, run `npx playwright test` without `KF_QUARTZ`: the explorer tests run and the
Quartz page tests skip.

CI (`.github/workflows/ci.yml`) runs everything on every pull request with the real Quartz build. Add the
`CONFIDENTIAL_TERMS` secret here too, so the built site is scanned for confidential terms.

## Deploy (once)

1. **Create the project.** In Vercel, go to Add New Project and import `muthub-ai/knowledge-foundation-site`.
   `vercel.json` sets the install and build commands, the output folder, clean URLs and the headers.
2. **Add the domain.** In Project → Settings → Domains, add `wiki.muthub.org`. At your DNS host, add a CNAME record
   `wiki` → `cname.vercel-dns.com`.
3. **Connect the deploy hook.** In Project → Settings → Git → Deploy Hooks, create one for `main`. Save its URL as the
   `VERCEL_DEPLOY_HOOK` secret in the knowledge repository, so every release rebuilds the site.
