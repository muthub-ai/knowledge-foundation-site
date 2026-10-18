## What changes

<!-- One or two sentences, and a screenshot for anything a reader sees. -->

## Checks

- [ ] `python -m unittest discover -s tests` passes
- [ ] Playwright explorer tests pass (`npx playwright test`; `KF_QUARTZ=1` with a real Quartz build)
- [ ] Checked at 1440 and 390 px, dark and light
- [ ] No inline script or style on the explorer (CSP)
- [ ] Explorer changed? Commit CI's rebuilt bundle from `ci/explorer-bundle-pr-<n>`
- [ ] A decision record in `docs/decisions/` if this changes how the site works
