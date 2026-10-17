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
  re-check date, number of sources. A note that summarises one of Muthu's essays leads the callout with "Read the full
  essay on muthub.org", because the essay is the canonical page. Then the note, its sources with publication dates,
  See also, and Quartz's backlinks, table of contents, popovers and tag list.
- **Theme folders, search, the folder explorer, dark mode and RSS**, from Quartz.
- **`/graph/`**: the whole graph in Sigma.js, designed as a map ([design notes](docs/explorer-design.md)): themes as
  hubs on a ring, each theme's notes orbiting it in the theme's colour, shape by kind. It assembles itself on load;
  hovering fades the rest of the map and lights a note's neighbourhood; a theme in the legend focuses its cluster; the
  selected note glows and its panel opens with "Read on muthub.org" first for essays. Search suggests as you type ("/"),
  filters by node type and connection origin, a list view, zoom controls, and `?node=<id>` links from every note (those
  open at once, without the entrance). On phones the panel is a bottom sheet. It shares the dark-mode choice with the
  Quartz pages, and `prefers-reduced-motion` turns the animation off. Its CSP allows no inline scripts or styles.
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
`explorer/dist/explorer.js`. The build script rebuilds it from npm every time. The committed copy is for machines
without npm. The npm packages are locked in `package-lock.json` (`build.sh` runs `npm ci`). CI fails when the committed
bundle or lockfile differs from what it built; on a pull request its `bundle-handback` job then pushes both to the
scratch branch `ci/explorer-bundle-pr-<pull request number>`. Take them with
`git fetch origin ci/explorer-bundle-pr-<n> && git checkout FETCH_HEAD -- explorer/dist/explorer.js package-lock.json` and
commit. Vercel ignores `ci/*` branches.

## Test

```bash
pip install -r requirements-dev.txt
python -m unittest discover -s tests -v     # stage, post, release download (fixture bundle and the real one)
npm install && npx playwright install chromium
KF_QUARTZ=1 npx playwright test             # Quartz pages and the graph explorer, desktop and mobile
```

`tests/serve.py` serves `public/` the way Vercel does (clean URLs, and the response headers from `vercel.json`, so a
Content-Security-Policy violation on `/graph/` fails the browser tests as a console error).

Without npm, `python tests/build_preview.py --bundle … --graph …` builds `public/` with a stand-in for Quartz
(`tests/fake_quartz.py`). In that case, run `npx playwright test` without `KF_QUARTZ`: the explorer tests run and the
Quartz page tests skip.

CI (`.github/workflows/ci.yml`) runs everything on every pull request with the real Quartz build. Add the
`CONFIDENTIAL_TERMS` secret here too, so the built site is scanned for confidential terms.

## Deploy

The Vercel project `knowledge-foundation-site` exists (created October 17, 2026) and is linked to this repository.
`vercel.json` runs everything through `scripts/vercel_build.sh`, which installs the Python packages
(`scripts/pip_install.sh` copes with Vercel's "externally managed" Python) and runs `scripts/build.sh`.

- **Production** is `main` only. A merge to `main` deploys wiki.muthub.org. The project's "ignored build step" skips
  any production build from another branch, as a guard. Production builds read the latest knowledge release.
- **Domain:** `wiki.muthub.org`, verified. muthub.org's DNS is hosted by Vercel, so no record is needed.
- **Previews:** every push to a branch gets a private preview (Vercel Authentication). A preview reads the knowledge
  repository's branch named in the Vercel preview variable `KF_BRANCH` (set for this repository's `claude/initial-build`
  branch while the two first pull requests are open; remove it after they merge) and otherwise the latest release.
  When a preview build fails, its page shows the build log instead.
- **Still to do once:** create a deploy hook for `main` (Project → Settings → Git → Deploy Hooks) and save its URL as
  the `VERCEL_DEPLOY_HOOK` secret in the knowledge repository, so every knowledge release rebuilds the site.
