# Graph explorer: design notes

The explorer (the home page, also at `/graph/`) is Sigma.js 4 (WebGL) over graphology. This note records the design choices and the research
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

- **Layout is designed, not simulated.** Themes sit on a ring, ordered so strongly linked themes are neighbours; each
  theme's notes orbit their hub, turned toward the themes they link to, with a gap below the hub for its name (Vertex's
  "cluster" layout, made deterministic). The force layout in `graph.json` piled the clusters on top of each other.
- **Color means theme.** Each note takes the color of the theme it belongs to (a palette of seven hues, one set for
  light and one for dark backgrounds). Themes are larger hubs with a serif name on a pill. Sources are grey.
- **Shape means kind.** Essay = circle, Initiative = diamond, Playbook = rounded square, Source = triangle.
- **Edges are quiet until they matter.** Curved, tinted by the source's theme, mostly transparent. Theme membership is
  the faintest; declared relations the strongest and carry arrows. When a node is in focus, its edges light up in its
  color and show direction.
- **Focus, like Kumu and Obsidian.** Hover (or select) a node: the rest of the map fades to 14% over 180 ms; the
  neighbourhood stays and every neighbour is named on a soft pill; the hovered node grows slightly. Click a theme (in the legend or on the map) to focus its cluster and fit the
  camera to it.
- **Entrance, like Obsidian's startup.** Theme hubs pop in first (ease-out-back), then each theme's notes fly out from
  their hub, staggered by theme; edges fade in after. About 1.6 s; nothing to wait for with reduced motion.
- **Selection.** The camera glides to the note (700 ms, cubic in-out), centring it and zooming to show its neighbours
  (a note with few neighbours also shows its theme), clear of the legend and panel; the note gets a slow pulsing glow;
  the panel rises in with the theme color as its edge, a review badge, and its connections: linked notes once each
  with a direction mark (→ ← ⇄), sources, or a theme's notes. On phones the panel is a bottom sheet and the camera
  lifts the note above it.
- **Real pages first.** A note that summarises one of Muthu's essays has `canonical` in `graph.json`; its main action is
  "Read on muthub.org", with the wiki summary as the second link (also for double-click and the list view).
- **Chrome.** Glass toolbar and legend (backdrop blur), a soft center glow, a faint dot grid and a vignette behind the
  canvas. Search suggests as you type (arrow keys, Enter); "/" focuses it.
- **Accessibility.** The list view is a table of everything shown; the legend and panel are keyboard reachable;
  choosing a note from search moves focus to the panel; selections are announced in one short line; touch targets are
  44 px on touch screens; `prefers-reduced-motion` turns every animation off and the pulse stops in a background tab.
- **Independent review (October 17, 2026).** A separate design review drove: the bottom sheet, list view on phones,
  the label gap below hubs, named neighbours in focus, clicking a node framing it, Sources and their edges toggling
  together, merged relation lists, the empty state, the loading message, and zoom limits.

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

## The home page around it (October 2026 redesign)

The graph became the wiki's front door, from a signed-off design (three concepts; the chosen one: editorial copy beside
a framed explorer, dark by default with a header toggle). Rules it fixed:

- Nothing on the page is typed by hand except the copy and the three reading paths; counts, theme cards, the "most
  connected" list and the inspector's provenance all come from `graph.json` (`fillPage()`), so the page stays true as
  the wiki grows. Review state says "Not yet reviewed" until a human verification exists in the note.
- The frame is narrow in the hero, so the phone layout (bottom-sheet panel) keys off the page width, not the frame's.
  The theme chips are a strip along the top; the inspector is a card at the bottom right (bottom sheet on phones).
- Colours stay in `THEME_LIGHT`/`THEME_DARK`; every dot on the page carries `data-theme-dot` so a theme switch repaints
  the chips and cards along with the map. The CSP still forbids inline styles.
- Dark is the default on the Quartz pages too: `post.py` injects a one-line script before Quartz's own, so the first
  visit is dark and a toggle on either side is remembered by both (`localStorage.theme`).
