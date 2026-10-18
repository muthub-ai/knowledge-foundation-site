# S06: Machine-found structure is labelled, hidden by default and counted apart

Status: accepted, October 18, 2026 (implements ADR 016 of the knowledge repository)

## Context

Releases carry Semantica's entities (`ext:` nodes) and machine-suggested relations (`extracted` edges). Mixed with the
curated graph they once showed as a disconnected ring and inflated the note count from 51 to 156.

## Decision

Entities are their own kind, **Entity**: grey nodes and grey edges, hidden until the reader turns on *Extracted* (or
presses "Show them"), placed among the notes that mention them, and excluded from note counts, theme cards, "most
connected" and the list's theme groups. Suggested relations appear in a note's panel in their own group, labelled
"machine, not reviewed", with the quoted evidence. The hero counts the layer on a separate, quieter line.

## Consequences

The four headline numbers describe only what the author stands behind. The same counting rules apply on muthub.org.
