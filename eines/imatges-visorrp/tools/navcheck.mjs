// Comprova la barra superior de /serveis: colors calculats de cada enllaç, en clar i fosc, a dalt i després de baixar.
import { chromium } from "playwright-core";

const out = process.argv[2];
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
for (const scheme of ["light", "dark"]) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: scheme });
  const page = await ctx.newPage();
  await page.goto("http://localhost:4000/serveis", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  for (const [label, y] of [["dalt", 0], ["baix", 2600]]) {
    await page.evaluate((y) => scrollTo(0, y), y);
    await page.waitForTimeout(900);
    const colors = await page.evaluate(() =>
      [...document.querySelectorAll("header a, header button")].map((a) => ({
        text: a.textContent.trim().slice(0, 24),
        color: getComputedStyle(a).color,
        bg: getComputedStyle(a).backgroundColor,
        focus: a === document.activeElement,
      }))
    );
    console.log(scheme, label, JSON.stringify(colors));
    await page.screenshot({ path: `${out}/nav-${scheme}-${label}.png`, clip: { x: 0, y: 0, width: 1440, height: 90 } });
  }
  await ctx.close();
}
await browser.close();
