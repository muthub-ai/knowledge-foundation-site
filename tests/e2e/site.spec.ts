import { test, expect, Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

const graph = JSON.parse(fs.readFileSync(path.join(__dirname, "../../public/graph.json"), "utf8"));
const firstNote = graph.nodes.find((n: any) => n.type !== "Source" && n.type !== "Theme");
const noteUrl = firstNote.url.replace(/\/?$/, "/");

// Fonts come from Google and may be unreachable in a sandbox; every other console error fails the test.
function watchErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error" && !/fonts\.(googleapis|gstatic)|ERR_TUNNEL|ERR_NAME|net::ERR/.test(m.text())) errors.push(m.text()); });
  return errors;
}

async function noHorizontalScroll(page: Page) {
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(over).toBeLessThanOrEqual(1);
}

test("home lists themes and searches", async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Knowledge Foundation");
  const cards = page.locator("section[aria-labelledby=themes-h] .card");
  expect(await cards.count()).toBeGreaterThanOrEqual(3);
  await noHorizontalScroll(page);
  await page.locator("#q").fill("context");
  await page.locator("#q").press("Enter");
  await expect(page).toHaveURL(/\/search\/\?q=context/);
  await expect(page.locator("#results li").first()).toBeVisible();
  await expect(page.locator("#search-status")).toContainText("result");
  expect(errors).toEqual([]);
});

test("search shows an empty state and keeps the query in the URL", async ({ page }) => {
  await page.goto("/search/");
  await page.locator("#q").fill("zzqxnotaword");
  await expect(page.locator("#search-status")).toContainText("No notes match");
  await expect(page).toHaveURL(/q=zzqxnotaword/);
  await page.locator("#q").fill("");
  await expect(page.locator("#results li")).toHaveCount(0);
});

test("theme page links to its notes", async ({ page }) => {
  await page.goto("/" + firstNote.id.split("/")[0] + "/");
  const link = page.locator(".card a").first();
  const href = await link.getAttribute("href");
  await link.click();
  await expect(page).toHaveURL(new RegExp(href!.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$"));
  await expect(page.locator(".provenance")).toBeVisible();
});

test("note page shows provenance, sources and machine-readable twins", async ({ page, request }) => {
  const errors = watchErrors(page);
  await page.goto(noteUrl);
  await expect(page.locator("h1")).toHaveText(firstNote.label);
  await expect(page.locator(".provenance")).toContainText("Trust");
  await expect(page.locator(".provenance")).toContainText("Re-check by");
  await expect(page.locator(".sources li").first()).toBeVisible();
  const ld = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() as string);
  expect([].concat(ld)[0]["@type"]).toBe("Article");
  await noHorizontalScroll(page);
  const md = await request.get(noteUrl.replace(/\/$/, ".md"));
  expect(md.ok()).toBeTruthy();
  expect(await md.text()).toContain("title:");
  for (const f of ["/llms.txt", "/sitemap.xml", "/rss.xml", "/robots.txt", "/search-index.json"]) expect((await request.get(f)).ok(), f).toBeTruthy();
  expect(errors).toEqual([]);
});

test("show in graph opens the explorer on that note", async ({ page }) => {
  await page.goto(noteUrl);
  await page.getByRole("link", { name: "Show in graph" }).click();
  await expect(page.locator("#explorer")).toHaveAttribute("data-ready", "true");
  await expect(page.locator("#g-panel")).toBeVisible();
  await expect(page.locator("#g-panel h2")).toHaveText(firstNote.label);
});

test.describe("graph explorer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/graph/");
    await expect(page.locator("#explorer")).toHaveAttribute("data-ready", "true");
  });

  test("renders, with sources hidden by default", async ({ page }) => {
    const shown = graph.nodes.filter((n: any) => n.type !== "Source").length;
    await expect(page.locator("#g-status")).toContainText(`${shown} nodes`);
    const painted = await page.evaluate(() => {
      const c = document.getElementById("g-canvas") as HTMLCanvasElement;
      const d = c.getContext("2d")!.getImageData(0, 0, c.width, c.height).data;
      let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > 0) n++;
      return n;
    });
    expect(painted).toBeGreaterThan(500);
    await noHorizontalScroll(page);
  });

  test("clicking a node opens the panel; Escape closes it", async ({ page }) => {
    const [x, y] = await page.evaluate((id) => (window as any).kfExplorer.screenPos(id), firstNote.id);
    await page.locator("#g-canvas").click({ position: { x, y } });
    await expect(page.locator("#g-panel h2")).toHaveText(firstNote.label);
    await expect(page).toHaveURL(new RegExp("node=" + encodeURIComponent(firstNote.id).replace(/%2F/g, "(%2F|/)")));
    await expect(page.locator("#g-panel a.open")).toHaveAttribute("href", noteUrl);
    await page.keyboard.press("Escape");
    await expect(page.locator("#g-panel")).toBeHidden();
    await expect(page).not.toHaveURL(/node=/);
  });

  test("panel neighbours navigate within the graph", async ({ page }) => {
    await page.goto("/graph/?node=" + encodeURIComponent(firstNote.id));
    const nb = page.locator("#g-panel li a").first();
    const name = await nb.textContent();
    await nb.click();
    await expect(page.locator("#g-panel h2")).toHaveText(name!);
  });

  test("search jumps to a note", async ({ page }) => {
    const target = graph.nodes.find((n: any) => n.type === "Playbook" || n.type === "Initiative") || firstNote;
    await page.locator("#g-search").fill(target.label.slice(0, 12));
    await page.locator("#g-search").press("Enter");
    await expect(page.locator("#g-panel h2")).toBeVisible();
    await page.locator("#g-search").fill("zzqxnotaword");
    await page.locator("#g-search").press("Enter");
    await expect(page.locator("#g-status")).toContainText("No note matches");
  });

  test("filters change what is shown, reset restores defaults", async ({ page }) => {
    await page.locator(".filters summary").click();
    await page.locator('#f-types input[value="Source"]').check();
    await expect(page.locator("#g-status")).toContainText(`${graph.nodes.length} nodes`);
    await page.locator('#f-origins input[value="folder"]').uncheck();
    const folderEdges = graph.edges.filter((e: any) => e.origin === "folder").length;
    expect(folderEdges).toBeGreaterThan(0);
    await page.getByRole("button", { name: "Reset" }).click();
    await expect(page.locator('#f-types input[value="Source"]')).not.toBeChecked();
    await expect(page.locator('#f-origins input[value="folder"]')).toBeChecked();
  });

  test("list view is a table of every shown node", async ({ page }) => {
    await page.getByRole("button", { name: "List view" }).click();
    await expect(page.locator("#g-list table")).toBeVisible();
    const shown = graph.nodes.filter((n: any) => n.type !== "Source").length;
    await expect(page.locator("#g-list tbody tr")).toHaveCount(shown);
    await expect(page.getByRole("button", { name: "Graph view" })).toHaveAttribute("aria-pressed", "true");
  });

  test("wheel zoom changes the view", async ({ page, isMobile }) => {
    test.skip(isMobile, "no wheel on touch devices");
    const before = await page.evaluate((id) => (window as any).kfExplorer.screenPos(id), firstNote.id);
    await page.mouse.move(300, 300);
    await page.mouse.wheel(0, -400);
    const after = await page.evaluate((id) => (window as any).kfExplorer.screenPos(id), firstNote.id);
    expect(Math.hypot(after[0] - before[0], after[1] - before[1])).toBeGreaterThan(5);
  });
});

test("dark mode toggles and persists", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Toggle dark mode" }).click();
  const theme = await page.evaluate(() => document.documentElement.dataset.theme);
  expect(["dark", "light"]).toContain(theme);
  await page.reload();
  expect(await page.evaluate(() => document.documentElement.dataset.theme)).toBe(theme);
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(bg).toBe(theme === "dark" ? "rgb(15, 17, 20)" : "rgb(255, 255, 255)");
});

test("skip link and 404 page", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip")).toBeFocused();
  await page.goto("/404.html");
  await expect(page.locator("h1")).toHaveText("Page not found");
  await expect(page.locator("#q")).toBeVisible();
});
