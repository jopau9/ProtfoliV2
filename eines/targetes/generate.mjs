// Targetes de visita: genera el PDF per a impremta (amb sang) i previsualitzacions PNG.
//   node generate.mjs            → català, castellà i anglès
//   node generate.mjs ca         → només un idioma
// Mida final 85 × 55 mm, amb 2 mm de sang per costat (pàgina de 89 × 59 mm).
// El text queda a 5 mm o més del tall. Colors i tipografies, els de la web.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";
import { chromium } from "playwright-core";
import QRCode from "qrcode";

const OUT = fileURLToPath(new URL("./sortida/", import.meta.url));
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

// ---- Contingut ---------------------------------------------------------------
const WEB = "joanpaurahola.vercel.app"; // REVISAR quan hi hagi domini propi
const QR_URL = `https://${WEB}/serveis`;

const contact = {
  name: "Joan Pau Rahola",
  email: "jprahfer@gmail.com",
  phone: "+34 629 587 102",
  web: WEB,
  place: "Girona · Barcelona",
};

const copy = {
  ca: {
    eyebrow: "IA per a empreses",
    role: "arquitecte de solucions d'IA",
    tagline: ["Porto el", "potencial", "de l'IA<br>als processos dels negocis."],
  },
  es: {
    eyebrow: "IA para empresas",
    role: "arquitecto de soluciones de IA",
    tagline: ["Llevo el", "potencial", "de la IA<br>a los procesos de negocio."],
  },
  en: {
    eyebrow: "AI for business",
    role: "AI solutions architect",
    tagline: ["I bring the", "potential", "of AI<br>to business processes."],
  },
};

// ---- Disseny -----------------------------------------------------------------
const dark = { bg: "#0a0a0c", ink: "#f2f2f4", faint: "#80808b", accent: "#eba646" };
const light = { bg: "#f7f6f2", ink: "#111116", muted: "#45454e", accent: "#a65c05" };

function html(lang, qrSvg) {
  const c = copy[lang];
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=block">
<style>
  @page { size: 89mm 59mm; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 89mm; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .page { position: relative; width: 89mm; height: 59mm; overflow: hidden; break-after: page; }
  .page:last-child { break-after: auto; }
  /* Zona segura: 5 mm dins del tall (2 mm de sang + 5 mm) */
  .safe { position: absolute; inset: 7mm; }
  .mono { font-family: "Geist Mono", monospace; text-transform: uppercase; letter-spacing: 0.14em; }
  .serif { font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; }
  .sans { font-family: "Geist", sans-serif; }

  /* Davant: fosc */
  .front { background: ${dark.bg}; color: ${dark.ink}; }
  .front .eyebrow { display: flex; align-items: center; gap: 2.2mm; font-size: 5.2pt; color: ${dark.faint}; }
  .front .eyebrow i { display: block; width: 5mm; height: 0.25mm; background: ${dark.accent}; }
  .front .who { position: absolute; left: 0; bottom: 0; }
  .front .name { font-size: 15pt; font-weight: 500; letter-spacing: -0.025em; line-height: 1; }
  .front .role { margin-top: 1.6mm; font-size: 10.5pt; line-height: 1; color: ${dark.accent}; letter-spacing: -0.01em; }

  /* Darrere: clar */
  .back { background: ${light.bg}; color: ${light.ink}; }
  .back .tagline { width: 62mm; font-size: 8.6pt; line-height: 1.32; letter-spacing: -0.01em; }
  .back .tagline .serif { font-size: 10pt; color: ${light.accent}; letter-spacing: -0.015em; }
  .back .lines { position: absolute; left: 0; bottom: 0; font-size: 5.6pt; line-height: 1.75; color: ${light.muted}; letter-spacing: 0.06em; text-transform: none; }
  .back .lines b { font-weight: 500; color: ${light.ink}; }
  .back .qr { position: absolute; right: 0; bottom: 1.1mm; width: 15mm; height: 15mm; }
  .back .qr svg { display: block; width: 100%; height: 100%; }
</style></head>
<body>
  <section class="page front">
    <div class="safe">
      <p class="eyebrow mono"><i></i>${c.eyebrow}</p>
      <div class="who">
        <p class="name sans">${contact.name}</p>
        <p class="role serif">${c.role}</p>
      </div>
    </div>
  </section>
  <section class="page back">
    <div class="safe">
      <p class="tagline sans">${c.tagline[0]} <span class="serif">${c.tagline[1]}</span> ${c.tagline[2]}</p>
      <p class="lines mono">
        <b>${contact.email}</b><br>
        ${contact.phone}<br>
        ${contact.web}<br>
        ${contact.place}
      </p>
      <div class="qr">${qrSvg}</div>
    </div>
  </section>
</body></html>`;
}

// ---- Sortida -----------------------------------------------------------------
const langs = process.argv[2] ? [process.argv[2]] : Object.keys(copy);
await mkdir(OUT, { recursive: true });

const qrSvg = await QRCode.toString(QR_URL, {
  type: "svg",
  margin: 0,
  errorCorrectionLevel: "M",
  color: { dark: light.ink, light: "#0000" },
});

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const MM = 96 / 25.4; // px CSS per mm
const SCALE = 600 / 96; // previsualitzacions a 600 ppp

for (const lang of langs) {
  const page = await browser.newPage({
    viewport: { width: Math.ceil(89 * MM), height: Math.ceil(59 * MM) },
    deviceScaleFactor: SCALE,
  });
  await page.setContent(html(lang, qrSvg), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const fonts = await page.evaluate(() =>
    ["500 15pt Geist", "5pt 'Geist Mono'", "italic 10pt 'Instrument Serif'"].map((f) => document.fonts.check(f))
  );
  if (fonts.includes(false)) throw new Error(`Falten tipografies: ${fonts}`);

  // PDF per a impremta: 2 pàgines (davant, darrere), amb sang. Chrome arrodoneix la
  // pàgina a píxels (~88,9 × 58,9 mm); el TrimBox marca el tall exacte de 85 × 55 mm.
  const pdf = await PDFDocument.load(
    await page.pdf({ preferCSSPageSize: true, printBackground: true })
  );
  pdf.setTitle(`Targeta · ${contact.name} (${lang})`);
  pdf.setAuthor(contact.name);
  for (const p of pdf.getPages()) {
    const { width, height } = p.getMediaBox();
    const mm = (v) => (v * 72) / 25.4;
    p.setBleedBox(0, 0, width, height);
    // Contingut ancorat a dalt a l'esquerra: el tall comença a 2 mm de cada vora.
    p.setTrimBox(mm(2), height - mm(2 + 55), mm(85), mm(55));
  }
  await writeFile(`${OUT}targeta-${lang}.pdf`, await pdf.save());

  // Previsualització de cada cara tal com quedarà tallada (sense sang).
  const sides = await page.$$(".page");
  for (const [i, side] of ["davant", "darrere"].entries()) {
    const box = await sides[i].boundingBox();
    await page.screenshot({
      path: `${OUT}${side}-${lang}.png`,
      fullPage: true,
      clip: { x: box.x + 2 * MM, y: box.y + 2 * MM, width: 85 * MM, height: 55 * MM },
    });
  }
  await page.close();
  console.log(`targeta-${lang}.pdf · davant-${lang}.png · darrere-${lang}.png`);
}

// Muntatge per revisar: les dues cares, una al costat de l'altra.
const sheet = await browser.newPage({ viewport: { width: 1400, height: 520 }, deviceScaleFactor: 2 });
for (const lang of langs) {
  const img = async (side) =>
    `data:image/png;base64,${(await readFile(`${OUT}${side}-${lang}.png`)).toString("base64")}`;
  const imgs = await Promise.all(["davant", "darrere"].map(img));
  await sheet.setContent(`<body style="margin:0;height:100vh;display:flex;gap:60px;align-items:center;justify-content:center;background:#c9c7c1">
    ${imgs.map((src) => `<img src="${src}" style="width:595px;border-radius:3px;box-shadow:0 18px 40px -12px rgba(0,0,0,.45)">`).join("")}
  </body>`);
  await sheet.waitForTimeout(300);
  await sheet.screenshot({ path: `${OUT}previsualitzacio-${lang}.png` });
}
await browser.close();
