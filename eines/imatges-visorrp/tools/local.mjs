// Captures del portfoli local (servidor de desenvolupament).
// Ús: node local.mjs <sortida-dir> <url> <nom> [pàgina sencera: 1|0] [desplaçament fins a selector]
import { chromium } from "playwright-core";

const [, , out, url, name, full = "1", sel] = process.argv;
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
page.on("console", (m) => m.type() === "error" && console.log("console error:", m.text().slice(0, 200)));
await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
await page.waitForTimeout(1500);
const H = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += 450) {
  await page.evaluate((y) => scrollTo(0, y), y);
  await page.waitForTimeout(150);
}
if (sel) await page.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: "start" }), sel);
else await page.evaluate(() => scrollTo(0, 0));
await page.waitForTimeout(1200);
await page.screenshot({ path: `${out}/${name}.png`, fullPage: full === "1" });
console.log("ok", name, H);
await browser.close();
