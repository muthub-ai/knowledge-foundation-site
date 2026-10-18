# S04: The explorer bundle is committed, and CI checks it for drift

Status: accepted, October 17, 2026

## Context

Some build environments (including the agent sessions that maintain this repository) cannot reach npm. The bundle
must be testable there, and production must ship exactly what was tested.

## Decision

`explorer/dist/explorer.js` is committed. `build.sh` rebuilds it from the locked npm packages; CI fails when the
committed bundle or `package-lock.json` differ from what it built, and on a pull request pushes both to the scratch
branch `ci/explorer-bundle-pr-<n>` to be committed. Offline, `build_explorer.mjs --from-source` builds from vendored
checkouts of the same versions.

## Consequences

One extra commit per explorer change. Vercel ignores `ci/*` branches.
