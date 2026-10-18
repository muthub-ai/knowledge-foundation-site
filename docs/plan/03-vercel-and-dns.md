# 3. Vercel and DNS

**Outcome:** `wiki.<domain>` serves `main`; every knowledge release rebuilds it; branches get private previews.

## Steps

1. **Create the Vercel project** from this repository. Framework: none. `vercel.json` sets:
   - `buildCommand: bash scripts/vercel_build.sh` (sets up Python 3.11.4+ in a virtualenv on Vercel's image, installs
     requirements, runs `build.sh`; on a failed preview the log becomes the page);
   - `outputDirectory: public`, `cleanUrls: true`;
   - `ignoreCommand`: skip `ci/*` branches and any production build not from `main`;
   - headers: HSTS, nosniff, frame denial, referrer policy, the explorer's CSP on `/` and `/graph/`, `noindex` and
     `text/markdown` on Markdown twins, CORS on `graph.json`.
2. **Domain:** add `wiki.<domain>` to the project. With the domain's nameservers on Vercel, no DNS record is needed.
3. **Deploy hook:** Settings → Git → Deploy Hooks → create for `main`; save the URL as `VERCEL_DEPLOY_HOOK` in the
   knowledge repository so each release triggers a rebuild.
4. **Previews:** private by default (Vercel Authentication). To preview a site branch against an unmerged knowledge
   branch, set the preview variable `KF_BRANCH` for that site branch only.

## Check it worked

A merge to `main` deploys production; a knowledge release triggers a deployment seconds after it is published;
`curl -I https://wiki.<domain>/` shows the CSP header.
