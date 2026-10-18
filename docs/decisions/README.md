# Site decisions

Decisions specific to the website. The system-wide records (Git as the system of record, release-only coupling,
review-stamped verification, Quartz and Sigma.js, the semantic layer) are in the knowledge repository's
[decisions](https://github.com/muthub-ai/knowledge-foundation/tree/main/decisions).

| ID | Decision | Status |
|---|---|---|
| [S01](S01-release-assets-are-the-only-coupling.md) | Release assets are the only coupling to the knowledge repository | accepted, October 17, 2026 (implements ADR 004 and ADR 014 of the knowledge repository) |
| [S02](S02-the-home-page-is-the-graph.md) | The home page is the graph | accepted, October 18, 2026 (from the signed-off design, Round 2 "Final" artboards) |
| [S03](S03-strict-csp-no-inline-script-or-style.md) | Strict Content-Security-Policy on the explorer | accepted, October 17, 2026 |
| [S04](S04-committed-explorer-bundle-with-drift-check.md) | The explorer bundle is committed, and CI checks it for drift | accepted, October 17, 2026 |
| [S05](S05-dark-by-default-shared-with-quartz.md) | Dark by default, one choice shared by the explorer and the note pages | accepted, October 18, 2026 |
| [S06](S06-machine-structure-is-labelled-hidden-and-counted-apart.md) | Machine-found structure is labelled, hidden by default and counted apart | accepted, October 18, 2026 (implements ADR 016 of the knowledge repository) |
