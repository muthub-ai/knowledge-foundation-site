# S01: Release assets are the only coupling to the knowledge repository

Status: accepted, October 17, 2026 (implements ADR 004 and ADR 014 of the knowledge repository)

## Context

The knowledge repository changes through reviewed pull requests and publishes a release per merge. The site must be
rebuildable from any release and must not break when the knowledge repository's tooling changes.

## Decision

The build reads only `bundle.tgz` and `graph.json` from a release (or a local bundle and graph for development). No
code is imported from the knowledge repository. `graph.schema.json` there is the contract.

## Consequences

Either side can be refactored freely as long as the release format holds. A site build is reproducible from a release
tag (`KF_RELEASE`). Preview builds of an unmerged knowledge branch use `KF_BRANCH` and build the graph themselves.
