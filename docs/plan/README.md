# Plan: build the wiki site again

This repository turns a knowledge release into wiki.muthub.org. The whole system (three repositories, accounts,
ground rules) is planned in the knowledge repository's [docs/plan](https://github.com/muthub-ai/knowledge-foundation/tree/main/docs/plan);
start there. This plan covers the site only.

| # | Document | Outcome |
|---|---|---|
| 1 | [01-quartz-and-staging.md](01-quartz-and-staging.md) | Notes rendered by Quartz 5 with provenance callouts, dated sources and relations |
| 2 | [02-explorer.md](02-explorer.md) | The Sigma.js home page: graph, inspector, list view, semantic layer, under a strict CSP |
| 3 | [03-vercel-and-dns.md](03-vercel-and-dns.md) | A Vercel project serving `wiki.<domain>` from `main`, rebuilt on each knowledge release |
| 4 | [04-ci-and-tests.md](04-ci-and-tests.md) | Unit and browser tests, the real Quartz build and the bundle drift check gating every pull request |
| 5 | [05-operations.md](05-operations.md) | Upgrades, previews, rollback, failure modes |

**Prerequisites:** a knowledge repository that publishes releases (`bundle.tgz`, `graph.json`); Python 3.12; Node 22;
a Vercel account managing the domain's DNS.
