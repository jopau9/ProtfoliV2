// Renderitza fitxers HTML de composició a PNG a mida exacta.
// Ús: node render.mjs <fitxer.html> <sortida.png> <amplada> <alçada>
//     node render.mjs --top <url> <sortida.png> <amplada> <alçada> <escala>   (captura neta de la part de dalt d'una pàgina)
import { chromium } from "playwright-core";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
if (args[0] === "--top") {
  const [, url, out, w, h, dpr] = args;
  const ctx = await browser.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: +dpr, locale: "es-ES" });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: out });
} else {
  const [file, out, w, h] = args;
  const ctx = await browser.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(pathToFileURL(file).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  await page.screenshot({ path: out });
}
await browser.close();
console.log("ok", args.at(-3) ?? "");
