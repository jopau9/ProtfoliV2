// Captura de la finestra a partir d'una secció del web (scroll fins a l'element i captura del viewport).
// Ús: node viewshot.mjs <sortida.png> <url> <selector|-> [amplada] [alçada] [escala] [desplaçament]
import { chromium } from "playwright-core";

const [, , out, url, sel, w = "1920", h = "1080", dpr = "2", off = "0"] = process.argv;
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const ctx = await browser.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: +dpr, locale: "es-ES" });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(1500);
// Passa per tota la pàgina perquè s'activin les animacions d'entrada i la càrrega diferida.
const H = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += 400) {
  await page.evaluate((y) => scrollTo(0, y), y);
  await page.waitForTimeout(120);
}
if (sel !== "-") {
  await page.evaluate(
    ([s, o]) => {
      const el = document.querySelector(s);
      scrollTo(0, el.getBoundingClientRect().top + scrollY + o);
    },
    [sel, +off]
  );
} else {
  await page.evaluate(() => scrollTo(0, 0));
}
await page.waitForTimeout(2500);
await page.screenshot({ path: out });
await browser.close();
console.log("ok", out);
