# 5. Operations

| Task | How |
|---|---|
| Upgrade Quartz | Put the new commit in `quartz.ref`, run `python scripts/make_quartz_config.py .build/quartz`, build and test |
| Upgrade Sigma.js or graphology | Bump in `package.json`, `npm install`, `npm run build:explorer`, run the explorer tests, commit bundle and lockfile |
| Preview with an unmerged knowledge branch | Set `KF_BRANCH` as a preview variable for the site branch; remove it after |
| Rebuild after a knowledge release | Automatic through the deploy hook; otherwise redeploy `main` in Vercel |
| Roll back | Promote the previous production deployment in Vercel, or revert the merge |

## Failure modes

| Symptom | Likely cause | Action |
|---|---|---|
| Preview page shows a build log | The preview build failed (by design the log is the page) | Read it; the GitHub check has the same failure |
| "bundle out of date" in CI | Explorer source or lockfile changed | Commit the handback from `ci/explorer-bundle-pr-<n>` |
| Explorer blank, console CSP error | An inline style or script slipped in | Move it to `explorer.css` or a data attribute |
| Counts look inflated | A new node or edge kind in `graph.json` the explorer does not know | Teach the explorer the kind (see decision S06) and add a test |
| Old data on the site | Site built before the release existed | Redeploy `main` |
