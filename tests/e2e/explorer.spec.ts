import { test, expect, Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

// The graph explorer: the site's home page (/), also served at /graph/ for older links. Runs against any build of
// public/ (real Quartz or the stand-in).
const graph = JSON.parse(fs.readFileSync(path.resolve("public/graph.json"), "utf8"));
// Semantica's entities (ids "ext:...") are the extracted layer: not notes, hidden by default like sources.
const isEntity = (n: any) => String(n.id).startsWith("ext:");
const notes = graph.nodes.filter((n: any) => n.type !== "Source" && n.type !== "Theme" && !isEntity(n));
const firstNote = notes[0];
const shownCount = graph.nodes.filter((n: any) => n.type !== "Source" && !isEntity(n)).length;
const entities = graph.nodes.filter(isEntity);
// Notes linked to it (in the text or declared), as the panel lists them; theme membership is not a link.
const linkedOf = (id: string) =>
  graph.edges.filter((e: any) => (e.origin === "link" || e.origin === "frontmatter") && (e.source === id || e.target === id)).map((e: any) => (e.source === id ? e.target : e.source));
const neighbourOf = (id: string) =>
  graph.edges.filter((e: any) => e.origin !== "source" && e.origin !== "extracted" && (e.source === id || e.target === id)).map((e: any) => (e.source === id ? e.target : e.source));

function watchErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error" && !/fonts\.(googleapis|gstatic)|net::ERR/.test(m.text())) errors.push(m.text());
  });
  return errors;
}
const screenPos = (page: Page, id: string) => page.evaluate((i) => (window as any).kfExplorer.screenPos(i), id);
const ready = async (page: Page, url = "/") => {
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
  // "Open the note" is the wiki page; an essay also offers "Read the essay" on muthub.org (the canonical essay).
  await expect(page.locator("#g-panel a.open")).toHaveAttribute("href", firstNote.url);
  if (firstNote.canonical) await expect(page.locator("#g-panel a.wiki")).toHaveAttribute("href", firstNote.canonical);
  // Provenance, straight from the note's frontmatter: never an invented review date.
  await expect(page.locator("#g-panel .prov")).toContainText("Review");
  await expect(page.locator("#g-panel .prov")).toContainText(firstNote.verified || firstNote.trust !== "unverified" ? /Reviewed|Machine-confirmed/ : "Not yet reviewed");
  await page.keyboard.press("Escape");
  await expect(page.locator("#g-panel")).toBeHidden();
  await expect(page).not.toHaveURL(/node=/);
});

test("?node= opens on that note, and panel neighbours navigate", async ({ page }) => {
  const target = notes.find((n: any) => linkedOf(n.id).length > 0) || firstNote;
  await ready(page, "/graph/?node=" + encodeURIComponent(target.id));
  await expect(page.locator("#g-panel h2")).toHaveText(target.label);
  await expect.poll(() => page.evaluate(() => (window as any).kfExplorer.selected())).toBe(target.id);
  // The camera frames the note with its name: no part of the name is cut off at the screen edge.
  await page.waitForTimeout(900);
  const [l, r] = await page.evaluate((id) => (window as any).kfExplorer.labelBox(id), target.id);
  const vw = await page.evaluate(() => document.getElementById("g-canvas")!.clientWidth);
  expect(l, "name cut off on the left").toBeGreaterThanOrEqual(-2);
  expect(r, "name cut off on the right").toBeLessThanOrEqual(vw + 2);
  const nb = page.locator("#g-panel li a").first();
  const name = await nb.locator(".t").textContent();
  await nb.click();
  await expect(page.locator("#g-panel h2")).toHaveText(name!);
});

test("search jumps to a note and zooms in; unknown text says so", async ({ page }) => {
  await ready(page);
  const before = await page.evaluate(() => (window as any).kfExplorer.cameraRatio());
  const target = graph.nodes.find((n: any) => n.type === "Playbook" || n.type === "Initiative") || firstNote;
  await page.locator("#g-search").fill(target.label.slice(0, 14));
  await expect(page.locator("#g-search")).toHaveAttribute("aria-expanded", "true");
  await page.locator("#g-search").press("Enter");
  await expect(page.locator("#g-panel h2")).toBeVisible();
  await expect(page.locator("#g-search")).toHaveAttribute("aria-expanded", "false");
  await expect.poll(() => page.evaluate(() => (window as any).kfExplorer.cameraRatio())).toBeLessThan(before);
  await page.locator("#g-search").fill("zzqxnotaword");
  await page.locator("#g-search").press("Enter");
  await expect(page.locator("#g-status")).toContainText("No note matches");
});

test("filters change what is shown; reset restores the defaults", async ({ page, isMobile }) => {
  test.skip(isMobile, "filters are desktop-only; phones get the theme chips and the list");
  await ready(page);
  await page.locator(".filters summary").click();
  await page.locator('#f-types input[value="Source"]').check();
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${graph.nodes.length - entities.length} nodes`));
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
  await page.getByRole("button", { name: "List", exact: true }).click();
  await expect(page.locator("#g-list tbody tr:has(td)")).toHaveCount(shownCount - graph.nodes.filter((n: any) => n.type === "Theme").length); // themes are the group rows
  await expect(page.getByRole("button", { name: "Graph", exact: true })).toHaveAttribute("aria-pressed", "true");
  // The provenance table: grouped by theme, one column per frontmatter field.
  await expect(page.locator("#g-list thead th")).toContainText(["Note", "Kind", "Source dated", "Review", "Re-check by", "Links"]);
  await expect(page.locator("#g-list tbody th[scope=rowgroup]")).toHaveCount(graph.nodes.filter((n: any) => n.type === "Theme").length);
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

test("dark by default; the toggle switches to light and the choice is shared with the Quartz pages", async ({ page }) => {
  await ready(page);
  await expect(page.locator("html")).toHaveAttribute("saved-theme", "dark");
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe("rgb(15, 17, 20)");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("saved-theme", "light");
  expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe("light");
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe("rgb(255, 255, 255)");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("saved-theme", "light");
  await expect(page.getByRole("button", { name: "Switch to dark mode" })).toBeVisible();
});

test("the home page around the graph is filled from graph.json", async ({ page }) => {
  await ready(page);
  const themeCount = graph.nodes.filter((n: any) => n.type === "Theme").length;
  await expect(page.locator('[data-stat="notes"]')).toHaveText(String(notes.length));
  await expect(page.locator('[data-stat="themes"]')).toHaveText(String(themeCount));
  await expect(page.locator('[data-stat="connections"]')).toHaveText(String(graph.edges.filter((e: any) => e.origin !== "source" && e.origin !== "extracted").length));
  await expect(page.locator("#theme-cards .theme-card")).toHaveCount(themeCount);
  await expect(page.locator("#hubs li")).toHaveCount(5);
  // Every reading-path essay resolved to a real note page (missing ones are dropped, never left pointing at /notes/).
  for (const href of await page.locator("#paths [data-note]").evaluateAll((as) => as.map((a) => a.getAttribute("href")))) {
    expect(href).not.toBe("/notes/");
    expect((await page.request.get(href!)).status()).toBe(200);
  }
  // A hub opens that note in the explorer.
  const first = page.locator("#hubs li").first();
  const title = (await first.locator("a").textContent())!.trim();
  await first.click();
  await expect(page.locator("#g-panel h2")).toHaveText(title);
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(over).toBeLessThanOrEqual(1);
});

test("/graph/ still serves the explorer for older links", async ({ page }) => {
  await ready(page, "/graph/");
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${shownCount} nodes`));
});

test("the open-note link reaches the note page", async ({ page, request }) => {
  const res = await request.get(firstNote.url);
  expect(res.status()).toBe(200);
  const twin = await request.get(firstNote.url + ".md");
  expect(twin.status()).toBe(200);
  expect(await twin.text()).toContain("title:");
});

test("the extracted layer: off by default, one switch shows entities and their edges together, grey", async ({ page, isMobile }) => {
  test.skip(!entities.length, "this graph.json has no extracted entities");
  test.skip(isMobile, "filters are desktop-only");
  await ready(page);
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${shownCount} nodes`));
  await page.locator(".filters summary").click();
  await page.locator('#f-origins input[value="extracted"]').check();
  await expect(page.locator('#f-types input[value="Entity"]')).toBeChecked();
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${shownCount + entities.length} nodes`));
  // An entity's panel says what found it and lists the notes that mention it; it has no page to open.
  const e = entities.slice().sort((a: any, b: any) => (b.degree || 0) - (a.degree || 0))[0];
  await page.locator("#g-search").fill(e.label);
  await page.locator("#g-search").press("Enter");
  await expect(page.locator("#g-panel h2")).toHaveText(e.label);
  await expect(page.locator("#g-panel")).toContainText("Found by Semantica");
  await expect(page.locator("#g-panel a.open")).toHaveCount(0);
  await page.getByRole("button", { name: "Reset" }).click();
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${shownCount} nodes`));
});

test("the semantic layer line counts it apart and Show them turns it on; suggested relations carry their evidence", async ({ page }) => {
  await ready(page);
  const line = page.locator("[data-semantic]");
  if (!entities.length) { await expect(line).toBeHidden(); return; }
  const mentions = graph.edges.filter((e: any) => e.origin === "extracted" && e.type === "mentions").length;
  const typed = graph.edges.filter((e: any) => e.origin === "extracted" && e.type !== "mentions");
  await expect(line).toContainText(`${entities.length} entities`);
  await expect(line).toContainText(`${mentions} mentions`);
  if (typed.length) await expect(line).toContainText(`${typed.length} suggested relation`);
  await expect(page.locator('[data-stat="notes"]')).toHaveText(String(notes.length)); // the curated counts do not move
  await line.getByRole("button", { name: "Show them" }).click();
  await expect(page.locator("#g-status")).toHaveText(new RegExp(`^${shownCount + entities.length} nodes`));
  if (!typed.length) return;
  // A note with a suggested relation lists it in its own group, labelled as machine-made, with the quote as a tooltip.
  await page.locator("#g-search").fill(graph.nodes.find((n: any) => n.id === typed[0].source).label);
  await page.locator("#g-search").press("Enter");
  await expect(page.locator("#g-panel")).toContainText("Suggested relations (machine, not reviewed)");
  await expect(page.locator(`#g-panel a[title*="${typed[0].evidence.slice(0, 20)}"]`).first()).toBeVisible();
});

test("an entity is found by any of its names", async ({ page }) => {
  const aliased = entities.find((n: any) => (n.aliases || []).length);
  test.skip(!aliased, "no aliased entity in this graph.json");
  await ready(page);
  await page.locator("#g-search").fill(aliased.aliases[0]);
  await expect(page.locator("#g-suggest li").first()).toContainText(aliased.label);
});
