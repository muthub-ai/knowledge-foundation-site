import { test, expect } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

// The Quartz pages. Needs a real `bash scripts/build.sh` build (CI sets KF_QUARTZ=1); skipped against the stand-in.
test.skip(!process.env.KF_QUARTZ, "needs a real Quartz build (KF_QUARTZ=1)");

const graph = JSON.parse(fs.readFileSync(path.resolve("public/graph.json"), "utf8"));
const notes = graph.nodes.filter((n: any) => n.type !== "Source" && n.type !== "Theme");
const themes = graph.nodes.filter((n: any) => n.type === "Theme");

test("home page: title, themes and a same-site link to the graph", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Knowledge Foundation/);
  await expect(page.locator("article")).toContainText("Themes");
  await expect(page.locator('article a[href$="/graph/"]').first()).toBeVisible();
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(over).toBeLessThanOrEqual(1);
});

test("a note page shows the provenance callout, sources and JSON-LD", async ({ page }) => {
  const n = notes[0];
  await page.goto(n.url);
  await expect(page.locator("article .callout").first()).toContainText(/Reviewed by Muthu|Not yet reviewed|Machine-confirmed/);
  await expect(page.locator("article")).toContainText("Sources");
  const ld = JSON.parse((await page.locator('script[data-kf="jsonld"]').textContent())!);
  expect([].concat(ld)[0]["@type"]).toBe("Article");
  const graphLink = page.locator('article a[href^="/graph/?node="]').first();
  await expect(graphLink).toHaveAttribute("href", "/graph/?node=" + encodeURIComponent(n.id));
  await graphLink.click();
  await expect(page.locator("#g-panel h2")).toHaveText(n.label);
});

test("theme pages list their notes", async ({ page }) => {
  for (const t of themes) {
    await page.goto(t.url + "/");
    const members = notes.filter((n: any) => n.id.startsWith(t.url.slice(1) + "/"));
    expect(members.length).toBeGreaterThan(0);
    await expect(page.locator(`a[href*="${members[0].url.split("/").pop()}"]`).first()).toBeVisible();
  }
});

test("internal links on the home page and ten notes all resolve", async ({ page, request }) => {
  const seen = new Set<string>();
  for (const url of ["/", ...notes.slice(0, 10).map((n: any) => n.url)]) {
    await page.goto(url);
    const hrefs = await page.locator("a[href]").evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href));
    for (const h of hrefs) {
      const u = new URL(h);
      if (u.origin !== new URL(page.url()).origin || seen.has(u.pathname)) continue;
      seen.add(u.pathname);
      expect((await request.get(u.pathname)).status(), `${u.pathname} (linked from ${url})`).toBe(200);
    }
  }
  expect(seen.size).toBeGreaterThan(20);
});

test("machine-readable files", async ({ request }) => {
  for (const f of ["/llms.txt", "/robots.txt", "/sitemap.xml", "/graph.json", notes[0].url + ".md"]) {
    expect((await request.get(f)).status(), f).toBe(200);
  }
});

test("dark mode carries over from a note to the graph explorer", async ({ page }) => {
  await page.goto(notes[0].url);
  await page.evaluate(() => localStorage.setItem("theme", "dark"));
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("saved-theme", "dark");
  await page.goto("/graph/");
  await expect(page.locator("html")).toHaveAttribute("saved-theme", "dark");
});
