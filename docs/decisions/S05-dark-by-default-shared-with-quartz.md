# S05: Dark by default, one choice shared by the explorer and the note pages

Status: accepted, October 18, 2026

## Context

The approved design is dark by default with a light toggle. The explorer and Quartz pages are separate code.

## Decision

Both read and write `localStorage.theme`. The explorer's `theme.js` defaults to dark; `kfsite post` injects a one-line
script before Quartz's own dark-mode script so a first visit to a note page is dark too.

## Consequences

A reader's choice follows them across the site. The injected script is the only change to Quartz's pages and is
covered by a unit test.
