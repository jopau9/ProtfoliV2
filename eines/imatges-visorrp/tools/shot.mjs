// Captures del web públic de VisorRP a alta resolució (Chrome local, sense finestra).
// Ús: node shot.mjs <sortida> <ruta>[,<ruta>...] [amplada] [alçada] [escala]
import { chromium } from "playwright-core";

const [, , outDir, pathsArg, w = "1920", h = "1080", dpr = "2"] = process.argv;
const paths = pathsArg.split(",");

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const ctx = await browser.newContext({
  viewport: { width: +w, height: +h },
  deviceScaleFactor: +dpr,
  locale: "es-ES",
  colorScheme: "dark",
});
const page = await ctx.newPage();
for (const p of paths) {
  const url = `https://visorrp.es${p}`;
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 }).catch((e) => console.log("goto", p, e.message));
  await page.waitForTimeout(3500);
  const name = (p.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "") || "home") + `_${w}x${h}`;
  await page.screenshot({ path: `${outDir}/${name}.png` });
  // També la pàgina sencera, a escala 1, per veure'n l'estructura.
  const full = await ctx.newPage();
  await full.setViewportSize({ width: +w, height: +h });
  await full.goto(url, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
  await full.waitForTimeout(2500);
  const height = await full.evaluate(() => document.documentElement.scrollHeight);
  console.log(p, "-> alçada", height);
  await full.close();
}
await browser.close();
