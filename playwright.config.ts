import { defineConfig, devices } from "@playwright/test";

// Serves public/ as Vercel would (clean URLs). Build it first: `bash scripts/build.sh` (real Quartz), or
// `python tests/build_preview.py ...` (the Quartz stand-in; only explorer.spec.ts is meaningful then).
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30_000,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: { baseURL: "http://127.0.0.1:8765" },
  webServer: {
    command: "python3 tests/serve.py public 8765",
    url: "http://127.0.0.1:8765/graph/",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
