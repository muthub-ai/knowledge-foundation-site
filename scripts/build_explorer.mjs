// Bundles explorer/src/explorer.ts with Sigma.js and graphology into explorer/dist/explorer.js (committed, so the
// bundle that was tested is the one that ships).
//
//   npm ci && npm run build:explorer                     from the npm packages pinned in package.json
//   node scripts/build_explorer.mjs --from-source DIR    from git checkouts (sigma.js@sigma@4.0.3, graphology@0.26.0,
//                                                        browserify/events@v3.3.0) when npm is unreachable
import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const i = process.argv.indexOf("--from-source");
const alias = {};
if (i > 0) {
  const src = path.resolve(process.argv[i + 1]);
  Object.assign(alias, {
    "sigma/rendering": path.join(src, "sigma.js/packages/sigma/src/rendering/index.ts"),
    "sigma/primitives": path.join(src, "sigma.js/packages/sigma/src/primitives/index.ts"),
    "sigma/types": path.join(src, "sigma.js/packages/sigma/src/types.ts"),
    "sigma/utils": path.join(src, "sigma.js/packages/sigma/src/utils/index.ts"),
    "sigma/settings": path.join(src, "sigma.js/packages/sigma/src/settings.ts"),
    sigma: path.join(src, "sigma.js/packages/sigma/src/index.ts"),
    graphology: path.join(src, "graphology/src/graphology/src/endpoint.esm.js"),
    "graphology-utils": path.join(src, "graphology/src/utils"),
    events: path.join(src, "events/events.js"),
  });
}

await build({
  entryPoints: [path.join(root, "explorer/src/explorer.ts")],
  outfile: path.join(root, "explorer/dist/explorer.js"),
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2020"],
  legalComments: "eof",
  sourcemap: false,
  alias,
  // sigma marks itself side-effect free but registers its built-in primitives with `import "./rendering"`.
  ignoreAnnotations: true,
  logLevel: "info",
  banner: { js: "/* Knowledge Foundation graph explorer. Includes sigma.js 4.0.3 (MIT), graphology 0.26.0 (MIT), events 3.3.0 (MIT). */" },
});
