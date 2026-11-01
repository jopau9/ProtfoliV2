// Llista les seccions de la portada (id, títol i posició) i en fa una captura a pantalla sencera per trossos.
import { chromium } from "playwright-core";

const out = process.argv[2];
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1, locale: "es-ES" });
const page = await ctx.newPage();
await page.goto("https://visorrp.es/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);
const secs = await page.evaluate(() =>
  [...document.querySelectorAll("section, [id]")]
    .filter((e) => e.id || e.tagName === "SECTION")
    .map((e) => ({
      tag: e.tagName,
      id: e.id,
      top: Math.round(e.getBoundingClientRect().top + scrollY),
      h: Math.round(e.getBoundingClientRect().height),
      title: (e.querySelector("h1,h2")?.textContent || "").trim().slice(0, 60),
    }))
    .filter((s) => s.h > 200)
);
console.log(JSON.stringify(secs, null, 0));
// Desplaça poc a poc perquè s'activin les animacions d'entrada.
const H = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += 540) {
  await page.evaluate((y) => scrollTo(0, y), y);
  await page.waitForTimeout(250);
}
for (let y = 0, i = 0; y < H; y += 1080, i++) {
  await page.evaluate((y) => scrollTo(0, y), y);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${out}/home-part-${String(i).padStart(2, "0")}.png` });
}
await browser.close();
