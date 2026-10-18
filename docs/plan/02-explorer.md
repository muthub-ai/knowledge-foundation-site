# 2. The explorer (home page)

**Outcome:** `/` is a Sigma.js 4 explorer framed in an editorial page, matching the approved design, under a strict CSP.

## Steps

1. **Bundle** `explorer/src/explorer.ts` with Sigma.js 4.0.3 and graphology 0.26.0 through esbuild
   (`npm run build:explorer`) into `explorer/dist/explorer.js`; commit it (decision S04).
2. **Page** `explorer/index.html` + `explorer.css` + `theme.js`: classes only, no inline style or script (S03).
   Dark by default with a toggle that shares `localStorage.theme` with the Quartz pages (S05).
3. **Layout** computed client-side: theme hubs on a ring ordered by cross-links, notes orbiting their hub and turned
   toward the themes they link to, sources just outside their note, entities among the notes that mention them.
4. **Interaction:** hover lights a neighbourhood; click opens the inspector (review, connections, source date,
   re-check date; "Open the note", "Read the essay"); `?node=` deep links; search by label or alias; filters by type
   and edge origin; list view as a provenance table; zoom, fit, fullscreen; bottom sheet on phones.
5. **Page around it** filled from `graph.json`: counts, theme cards, most connected, reading-path links resolved to
   note URLs, the semantic-layer line and "Show them" (S06).
6. **Semantic layer rules** (S06): `ext:` nodes are kind Entity, grey, hidden by default, shown together with their
   `extracted` edges; never counted as notes or connections.

## Check it worked

Compare screenshots at 1440 and 390 px, dark and light, with the design artboards; open a note from search, a theme
from the legend, the list view, and "Show them".

## Gotchas

- Sigma measures the stage on its first frame: a deep link must wait for it before framing the camera.
- The phone layout keys off the page width, not the frame's (the frame is narrow in the hero on desktop).
- A graph change that adds a new node kind needs explorer support before it ships, or it renders as stray dots and
  inflates counts (it did once); the explorer tests now cover entities, aliases and typed machine edges.
