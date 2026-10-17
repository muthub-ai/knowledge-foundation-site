# Graph explorer: design notes

The explorer at `/graph/` is Sigma.js 4 (WebGL) over graphology. This note records the design choices and the research
behind them (October 2026), so later changes keep the same intent.

## What we looked at

- **Palantir Vertex** (graph exploration in Foundry): color by property, node subtitles and badges, curved or straight
  edges, edge width by volume, selection borders, cluster/radial/hierarchy layouts, a selection panel per object, and
  a histogram that filters the graph. Exploration is "search around" one step at a time from what you selected.
- **Neo4j Bloom**: a legend panel that lists every category and relationship type and owns its styling (rule-based
  styles), a scene that shows only what you reached by search, and an inspector/card list beside the graph.
- **Kumu**: "focus": select an element and the rest of the map steps back, with degree controls and Escape to leave.
- **Cambridge Intelligence (KeyLines)**: nodes as UI (shape, badges, multiple labels), detail on demand by zoom level,
  attention-drawing "ping" animation, directional links, filtering that keeps the context visible.
- **Obsidian graph view and the "Beautiful Graph" plugin**: hover brings the immediate family forward while the rest
  fades; per-group palettes; glow; a startup animation where the graph visibly forms its groups.
- **Semantica**: knowledge-graph views that color by community or entity type and size by centrality.
- **Animation guidance for data visualization**: hover 100 to 150 ms, updates 200 to 300 ms, filter transitions 400 to
  600 ms, staggered entry with ease-out, ease-in-out for moves; motion should explain, not decorate; honor
  `prefers-reduced-motion`.

## What we do

- **Color means theme.** Each note takes the color of the theme it belongs to (five hues, one set for light and one for
  dark backgrounds). Themes are larger hubs with a serif label that is always shown. Sources are grey.
- **Shape means kind.** Essay = circle, Initiative = diamond, Playbook = rounded square, Source = triangle.
- **Edges are quiet until they matter.** Curved, tinted by the source's theme, mostly transparent. Theme membership is
  the faintest; declared relations the strongest and carry arrows. When a node is in focus, its edges light up in its
  color and show direction.
- **Focus, like Kumu and Obsidian.** Hover (or select) a node: the rest of the map fades to 14% over 180 ms; the
  neighbourhood stays and shows its labels. Click a theme (in the legend or on the map) to focus its cluster and fit the
  camera to it.
- **Entrance, like Obsidian's startup.** Theme hubs pop in first (ease-out-back), then each theme's notes fly out from
  their hub, staggered by theme; edges fade in after. About 1.6 s; nothing to wait for with reduced motion.
- **Selection.** The camera glides to the note (650 ms, cubic in-out); the note gets a slow pulsing glow; the panel rises
  in with the theme color as its edge, a review badge, and connections grouped by relation.
- **Real pages first.** A note that summarises one of Muthu's essays has `canonical` in `graph.json`; its main action is
  "Read on muthub.org", with the wiki summary as the second link (also for double-click and the list view).
- **Chrome.** Glass toolbar and legend (backdrop blur), a soft center glow, a faint dot grid and a vignette behind the
  canvas. Search suggests as you type (arrow keys, Enter); "/" focuses it.
- **Accessibility.** The list view is a table of everything shown; the legend and panel are keyboard reachable;
  `prefers-reduced-motion` turns every animation off.

## Sources

- Palantir Vertex: [Explore object relationships](https://palantir.com/docs/foundry/vertex/explore-object-relationships/),
  [Object and edge display options](https://palantir.com/docs/foundry/vertex/graphs-display-options/)
- [Neo4j Bloom overview](https://neo4j.com/docs/bloom-user-guide/current/bloom-visual-tour/bloom-overview/)
- [Kumu: Focus](https://docs.kumu.io/guides/focus)
- Cambridge Intelligence: [Advanced node styling](https://cambridge-intelligence.com/blog/the-advanced-node-styling-users-want-in-their-graph-visualizations/),
  [Styling a graph visualization](https://cambridge-intelligence.com/?p=7379)
- [Obsidian: Beautiful Graph plugin](https://community.obsidian.md/plugins/beautiful-graph)
- [Semantica: graph analytics and visualization](https://instagit.com/semantica-agi/semantica/semantica-graph-analytics-functions/)
- [Animation principles for data visualization](https://playbooks.com/skills/dylantarre/animation-principles/data-visualization)
- Sigma.js 4: [Camera and viewport](https://www.sigmajs.org/how-to/interactivity/camera-viewport/),
  [Styles and primitives](https://www.sigmajs.org/concepts/styles-and-primitives/),
  [Hover and search highlight](https://www.sigmajs.org/how-to/interactivity/hover-search/)
