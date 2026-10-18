# 4. CI and tests

**Outcome:** the **build and test** check gates every pull request with the real Quartz build.

## What runs (`.github/workflows/ci.yml`)

1. Check out the knowledge repository's `main` and build its graph (or use the latest release).
2. Write the confidential-terms secret to a temp file (never printed).
3. Unit tests (`python -m unittest discover -s tests`): staging, post-processing, release download, the real bundle.
4. The full build (`scripts/build.sh`), which rebuilds the explorer from npm.
5. **Drift check:** the committed `explorer/dist/explorer.js` and `package-lock.json` must equal what CI built; on a
   pull request a `bundle-handback` job pushes both to `ci/explorer-bundle-pr-<n>`. Take them with
   `git fetch origin ci/explorer-bundle-pr-<n> && git checkout FETCH_HEAD -- explorer/dist/explorer.js package-lock.json`.
6. Playwright (`KF_QUARTZ=1`): Quartz pages and the explorer on desktop Chrome and a Pixel 7 profile, served by
   `tests/serve.py` with the production headers, so CSP violations fail the run.
7. Confidential-terms scan of the built site.

`.github/ci-run.sh` copies a failing step's log tail into a check annotation, readable from the Checks API.

## Secrets

| Name | Value |
|---|---|
| `CONFIDENTIAL_TERMS` | The private blocklist (`\|`-separated). The CI fails if it is missing |

## Branch protection on `main`

Require a pull request and the **build and test** check; block force pushes.
