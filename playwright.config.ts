import { defineConfig, devices } from "@playwright/test";

// The site is plain static files: build it first (python -m kfsite ... --out public), then the tests serve public/.
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30_000,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: { baseURL: "http://127.0.0.1:8765" },
  webServer: { command: "python3 -m http.server 8765 --bind 127.0.0.1 --directory public", url: "http://127.0.0.1:8765/", reuseExistingServer: !process.env.CI, stdout: "ignore", stderr: "pipe" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
