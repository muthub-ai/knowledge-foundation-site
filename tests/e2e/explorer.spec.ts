import { test, expect, Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

// The Sigma.js graph explorer at /graph/. Runs against any build of public/ (real Quartz or the stand-in).
const graph = JSON.parse(fs.readFileSync(path.resolve("public/graph.json"), "utf8"));
const notes = graph.nodes.filter((n: any) => n.type !== "Source" && n.type !== "Theme");
const firstNote = notes[0];
const shownCount = graph.nodes.filter((n: any) => n.type !== "Source").length;
const neighbourOf = (id: string) =>
  graph.edges.filter((e: any) => e.origin !== "source" && (e.source === id || e.target === id)).map((e: any) => (e.source === id ? e.target : e.source));

function watchErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error" && !/fonts\.(googleapis|gstatic)|net::ERR/.test(m.text())) errors.push(m.text());
  });
  return errors;
}
const screenPos = (page: Page, id: string) => page.evaluate((i) => (window as any).kfExplorer.screenPos(i), id);
const ready = async (page: Page, url = "/graph/") => {
  await page.goto(url);
  await expect(page.locator("#explorer")).toHaveAttribute("data-ready", "true");
};

test("renders with Sigma, sources hidden by default, no errors", async ({ page }) => {
  const errors = watchErrors(page);
  await ready(page);
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${shownCount} nodes`));
  expect(await page.locator("#g-canvas canvas").count()).toBeGreaterThan(0); // sigma's WebGL layers
  const [x, y] = await screenPos(page, firstNote.id);
  const box = (await page.locator("#g-canvas").boundingBox())!;
  expect(x).toBeGreaterThan(0); expect(x).toBeLessThan(box.width);
  expect(y).toBeGreaterThan(0); expect(y).toBeLessThan(box.height);
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(over).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test("hovering a node lights up its neighbours", async ({ page, isMobile }) => {
  test.skip(isMobile, "no hover on touch devices");
  await ready(page);
  const target = notes.find((n: any) => neighbourOf(n.id).length > 0) || firstNote;
  const [x, y] = await screenPos(page, target.id);
  const box = (await page.locator("#g-canvas").boundingBox())!;
  await page.mouse.move(box.x + x, box.y + y);
  await expect.poll(() => page.evaluate((id) => (window as any).kfExplorer.renderer.getNodeState(id).isActive, neighbourOf(target.id)[0])).toBe(true);
  await page.mouse.move(box.x + 5, box.y + box.height - 5);
  await expect.poll(() => page.evaluate(() => (window as any).kfExplorer.renderer.getGraphState().hasActive)).toBe(false);
});

test("clicking a node opens the panel; Escape closes it", async ({ page }) => {
  await ready(page);
  const [x, y] = await screenPos(page, firstNote.id);
  await page.locator("#g-canvas").click({ position: { x, y } });
  await expect(page.locator("#g-panel h2")).toHaveText(firstNote.label);
  await expect(page).toHaveURL(/node=/);
  await expect(page.locator("#g-panel a.open")).toHaveAttribute("href", firstNote.url);
  await page.keyboard.press("Escape");
  await expect(page.locator("#g-panel")).toBeHidden();
  await expect(page).not.toHaveURL(/node=/);
});

test("?node= opens on that note, and panel neighbours navigate", async ({ page }) => {
  const target = notes.find((n: any) => neighbourOf(n.id).length > 0) || firstNote;
  await ready(page, "/graph/?node=" + encodeURIComponent(target.id));
  await expect(page.locator("#g-panel h2")).toHaveText(target.label);
  await expect.poll(() => page.evaluate(() => (window as any).kfExplorer.selected())).toBe(target.id);
  const nb = page.locator("#g-panel li a").first();
  const name = await nb.textContent();
  await nb.click();
  await expect(page.locator("#g-panel h2")).toHaveText(name!);
});

test("search jumps to a note and zooms in; unknown text says so", async ({ page }) => {
  await ready(page);
  const before = await page.evaluate(() => (window as any).kfExplorer.cameraRatio());
  const target = graph.nodes.find((n: any) => n.type === "Playbook" || n.type === "Initiative") || firstNote;
  await page.locator("#g-search").fill(target.label.slice(0, 14));
  await page.locator("#g-search").press("Enter");
  await expect(page.locator("#g-panel h2")).toBeVisible();
  await expect.poll(() => page.evaluate(() => (window as any).kfExplorer.cameraRatio())).toBeLessThan(before);
  await page.locator("#g-search").fill("zzqxnotaword");
  await page.locator("#g-search").press("Enter");
  await expect(page.locator("#g-status")).toContainText("No note matches");
});

test("filters change what is shown; reset restores the defaults", async ({ page }) => {
  await ready(page);
  await page.locator(".filters summary").click();
  await page.locator('#f-types input[value="Source"]').check();
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${graph.nodes.length} nodes`));
  const before = await page.locator("#g-status").textContent();
  await page.locator('#f-origins input[value="folder"]').uncheck();
  await expect(page.locator("#g-status")).not.toHaveText(before!);
  await page.getByRole("button", { name: "Reset" }).click();
  await expect(page.locator('#f-types input[value="Source"]')).not.toBeChecked();
  await expect(page.locator('#f-origins input[value="folder"]')).toBeChecked();
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${shownCount} nodes`));
});

test("list view is a table of every shown node", async ({ page }) => {
  await ready(page);
  await page.getByRole("button", { name: "List view" }).click();
  await expect(page.locator("#g-list tbody tr")).toHaveCount(shownCount);
  await expect(page.getByRole("button", { name: "Graph view" })).toHaveAttribute("aria-pressed", "true");
  const href = await page.locator("#g-list tbody a").first().getAttribute("href");
  expect(href).toMatch(/^(\/|https:\/\/)/);
});

test("zoom buttons change the camera", async ({ page, isMobile }) => {
  test.skip(isMobile, "zoom buttons are hidden on phones (pinch instead)");
  await ready(page);
  const r0 = await page.evaluate(() => (window as any).kfExplorer.cameraRatio());
  await page.getByRole("button", { name: "Zoom in" }).click();
  await expect.poll(() => page.evaluate(() => (window as any).kfExplorer.cameraRatio())).toBeLessThan(r0);
  await page.getByRole("button", { name: "Fit the whole graph" }).click();
  await expect.poll(() => page.evaluate(() => (window as any).kfExplorer.cameraRatio())).toBeCloseTo(1, 1);
});

test("dark mode is shared with the Quartz pages (localStorage 'theme')", async ({ page }) => {
  await ready(page);
  await page.getByRole("button", { name: "Toggle dark mode" }).click();
  const theme = await page.evaluate(() => document.documentElement.getAttribute("saved-theme"));
  expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe(theme);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("saved-theme", theme!);
  const bg = await page.evaluate(() => getComputedStyle(document.querySelector(".explorer")!).backgroundColor);
  expect(bg).toBe(theme === "dark" ? "rgb(23, 26, 31)" : "rgb(246, 245, 242)");
});

test("the open-note link reaches the note page", async ({ page, request }) => {
  const res = await request.get(firstNote.url);
  expect(res.status()).toBe(200);
  const twin = await request.get(firstNote.url + ".md");
  expect(twin.status()).toBe(200);
  expect(await twin.text()).toContain("title:");
});
