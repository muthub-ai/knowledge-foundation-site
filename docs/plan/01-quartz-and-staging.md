# 1. Quartz and staging

**Outcome:** every note in the bundle becomes a Quartz page that opens with its provenance.

## Steps

1. **Pin Quartz 5** by commit in `quartz.ref`. The build clones it into `.build/quartz` and runs `npm ci` there.
2. **Generate the config** with `python scripts/make_quartz_config.py .build/quartz`: it starts from Quartz's own
   default at that commit and applies the site's settings (title, base URL, fonts Newsreader and Instrument Sans,
   plugins). Never edit `quartz.config.yaml` by hand; edit the script.
   - Keep the `note-properties` plugin **on** (it parses frontmatter) and hide only its panel; turning it off printed
     raw YAML and titled every page "Untitled".
   - Replace Quartz's graph component with the Sigma explorer.
3. **Stage** (`python -m kfsite stage --bundle … --out .build/quartz/content`):
   - a provenance callout per note: reviewed or not, last verified, drafted by, re-check date, number of sources; for
     a note about an essay, "Read the full essay on muthub.org" leads, because the essay is canonical;
   - sources listed with publication dates, linking to the original (source copies are not published);
   - typed frontmatter relations first in See also ("Builds on", "Applies"…), then the note's own See also;
   - links rewritten to site paths; the Quartz index written to `notes/index.md` (the home page is the explorer).
4. **Post-process** (`python -m kfsite post`): check Quartz produced every expected page (a missing page fails the
   build), add JSON-LD (Article; DefinedTerm for concepts), write the Markdown twins, `llms.txt` and `robots.txt`,
   install the explorer at `/` and `/graph/` with `graph.json`, and inject the dark-default script.

## Check it worked

`bash scripts/build.sh` with a local bundle, then `python3 tests/serve.py public 8765`: a note page shows its callout
and sources, `/notes/` lists themes, and `/<theme>/<note>.md` returns the OKF file.

## Gotchas

- Links written as `https://<wiki>/…` must become same-site links carrying `data-router-ignore`, or Quartz's
  single-page router swaps the body in place and the explorer never starts (the "Show in graph" blank-page bug).
- A footnote definition removed with a section leaves a dangling `[`; the stage step keeps footnotes intact.
