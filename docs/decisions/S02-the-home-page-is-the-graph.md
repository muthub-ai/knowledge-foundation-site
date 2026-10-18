# S02: The home page is the graph

Status: accepted, October 18, 2026 (from the signed-off design, Round 2 "Final" artboards)

## Context

The wiki serves two audiences equally: leaders looking for an argument, and engineers looking for how it works. A
list of notes says what exists; a graph says how the ideas connect and shows the system's technical depth.

## Decision

`/` is the explorer page: editorial copy and live counts beside a framed explorer, then the pipeline ("How a note gets
here"), three curated reading paths, theme cards, the most connected notes and a key. Quartz's index moves to
`/notes/`; `/graph/` keeps serving the explorer for older links. Everything except the copy and the reading paths is
filled from `graph.json`.

## Consequences

The page stays true as the wiki grows. The explorer must work as a page component (narrow frame on desktop, bottom
sheet on phones), which shaped its layout code.
