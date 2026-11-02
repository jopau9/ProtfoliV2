// Targetes de visita: genera, per a cada idioma, els fitxers per a la impremta i una
// previsualització.
//   node generate.mjs            → català, castellà i anglès
//   node generate.mjs ca         → només un idioma
// Mida final 85 × 55 mm, amb 3 mm de sang per costat (91 × 61 mm) i marques de tall en
// un marge blanc de 6 mm (pàgina de 103 × 73 mm). El text queda a 5 mm o més del tall.
// Colors i tipografies, els de la web.
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";
import { chromium } from "playwright-core";
import QRCode from "qrcode";

const OUT = fileURLToPath(new URL("./sortida/", import.meta.url));
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

// Mides en mm
const TRIM = { w: 85, h: 55 }; // tall final
const BLEED = 3; // sang per costat: el fons continua més enllà del tall
const SLUG = 6; // marge blanc al voltant de la sang, per a les marques de tall
const CARD = { w: TRIM.w + 2 * BLEED, h: TRIM.h + 2 * BLEED };
const PAGE = { w: CARD.w + 2 * SLUG, h: CARD.h + 2 * SLUG };

// ---- Contingut ---------------------------------------------------------------
const WEB = "joanpaurahola.com";

const contact = {
  name: "Joan Pau Rahola",
  given: "Joan Pau", // nom i cognoms del contacte del QR (a la targeta, només `name`)
  family: "Rahola Ferrer",
  email: "joanpau@joanpaurahola.com",
  phone: "+34 629 587 102",
  web: WEB,
  place: "Girona · Barcelona",
};

const copy = {
  ca: {
    eyebrow: "IA per a empreses",
    role: "arquitecte de solucions d'IA",
    title: "Arquitecte de solucions d'IA", // càrrec al contacte del QR
    tagline: ["Porto el", "potencial", "de l'IA<br>als processos dels negocis."],
  },
  es: {
    eyebrow: "IA para empresas",
    role: "arquitecto de soluciones de IA",
    title: "Arquitecto de soluciones de IA",
    tagline: ["Llevo el", "potencial", "de la IA<br>a los procesos de negocio."],
  },
  en: {
    eyebrow: "AI for business",
    role: "AI solutions architect",
    title: "AI Solutions Architect",
    tagline: ["I bring the", "potential", "of AI<br>to business processes."],
  },
};

// El QR desa el contacte: en escanejar-lo, el mòbil obre "Afegeix contacte".
// vCard 3.0, només ASCII i salts de línia simples: com menys dades, menys mòduls i
// més grans, i més fàcil de llegir un cop imprès (objectiu: ≥ 0,3 mm per mòdul).
const NBSP = String.fromCharCode(0xa0);
const nbsp = (s) => s.replace(/ /g, NBSP);

function vcard(lang) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${contact.family};${contact.given};;;`,
    // Espais no separables dins del nom i dins dels cognoms: algunes càmeres d'Android no
    // llegeixen N i parteixen FN pels espais; així queden "Joan Pau" i "Rahola Ferrer".
    `FN:${nbsp(contact.given)} ${nbsp(contact.family)}`,
    `TITLE:${copy[lang].title}`,
    `TEL:${contact.phone.replace(/\s/g, "")}`,
    `EMAIL:${contact.email}`,
    `URL:https://${WEB}`,
    "END:VCARD",
  ].join("\n");
}

// ---- Disseny -----------------------------------------------------------------
const dark = { bg: "#0a0a0c", ink: "#f2f2f4", faint: "#80808b", accent: "#eba646" };
const light = { bg: "#f7f6f2", ink: "#111116", muted: "#45454e", accent: "#a65c05" };

// Correcció L: amb una impressió neta n'hi ha prou, i els mòduls queden més grans.
const QR = { margin: 0, errorCorrectionLevel: "L" };

// QR en SVG amb els mòduls com a formes plenes, en un sol camí. L'SVG de la llibreria
// els dibuixa amb traços, i dins del PDF alguns programes els mostren com a ratlles fines.
function qrSvg(text) {
  const { modules } = QRCode.create(text, QR);
  const n = modules.size;
  let d = "";
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!modules.get(y, x)) continue;
      let run = 1;
      while (x + run < n && modules.get(y, x + run)) run++;
      d += `M${x} ${y}h${run}v1h-${run}z`;
      x += run - 1;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges"><path fill="${light.ink}" d="${d}"/></svg>`;
}

// Marques de tall: a les quatre cantonades, a l'altura del tall, fora de la sang.
function cropMarks() {
  const t = 0.1; // gruix
  const off = 0.5; // distància a la vora de la pàgina
  const len = SLUG - off - 1; // acaben a 1 mm de la sang
  const xs = [SLUG + BLEED, SLUG + BLEED + TRIM.w];
  const ys = [SLUG + BLEED, SLUG + BLEED + TRIM.h];
  const line = (x, y, w, h) =>
    `<span class="mark" style="left:${x}mm;top:${y}mm;width:${w}mm;height:${h}mm"></span>`;
  return [
    ...xs.flatMap((x) => [line(x - t / 2, off, t, len), line(x - t / 2, PAGE.h - off - len, t, len)]),
    ...ys.flatMap((y) => [line(off, y - t / 2, len, t), line(PAGE.w - off - len, y - t / 2, len, t)]),
  ].join("");
}

function html(lang, qrSvg) {
  const c = copy[lang];
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=block">
<style>
  @page { size: ${PAGE.w}mm ${PAGE.h}mm; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${PAGE.w}mm; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .page { position: relative; width: ${PAGE.w}mm; height: ${PAGE.h}mm; overflow: hidden; background: #fff; break-after: page; }
  .page:last-child { break-after: auto; }
  .card { position: absolute; left: ${SLUG}mm; top: ${SLUG}mm; width: ${CARD.w}mm; height: ${CARD.h}mm; overflow: hidden; }
  .mark { position: absolute; background: #000; }
  /* Zona segura: 5 mm dins del tall */
  .safe { position: absolute; inset: ${BLEED + 5}mm; }
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
  .back .qr { position: absolute; right: 0; bottom: 1.1mm; width: 17mm; height: 17mm; }
  .back .qr svg { display: block; width: 100%; height: 100%; }
</style></head>
<body>
  <section class="page">
    <div class="card front">
      <div class="safe">
        <p class="eyebrow mono"><i></i>${c.eyebrow}</p>
        <div class="who">
          <p class="name sans">${contact.name}</p>
          <p class="role serif">${c.role}</p>
        </div>
      </div>
    </div>
    ${cropMarks()}
  </section>
  <section class="page">
    <div class="card back">
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
    </div>
    ${cropMarks()}
  </section>
</body></html>`;
}

// ---- Sortida -----------------------------------------------------------------
const langs = process.argv[2] ? [process.argv[2]] : Object.keys(copy);

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const MM = 96 / 25.4; // px CSS per mm
const SCALE = 600 / 96; // imatges a 600 ppp
const pt = (v) => (v * 72) / 25.4; // mm → punts PDF

for (const lang of langs) {
  const dir = `${OUT}${lang}/`;
  await mkdir(dir, { recursive: true });

  const { version, modules } = QRCode.create(vcard(lang), QR);
  console.log(`QR ${lang}: versió ${version}, ${modules.size} mòduls`);

  const page = await browser.newPage({
    viewport: { width: Math.ceil(PAGE.w * MM), height: Math.ceil(PAGE.h * MM) },
    deviceScaleFactor: SCALE,
  });
  await page.setContent(html(lang, qrSvg(vcard(lang))), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const fonts = await page.evaluate(() =>
    ["500 15pt Geist", "5pt 'Geist Mono'", "italic 10pt 'Instrument Serif'"].map((f) => document.fonts.check(f))
  );
  if (fonts.includes(false)) throw new Error(`Falten tipografies: ${fonts}`);

  // PDF per a la impremta: pàgina 1 davant, pàgina 2 darrere, amb sang i marques de tall.
  // Chrome arrodoneix la pàgina a píxels; el contingut és ancorat a dalt a l'esquerra,
  // així que les caixes es mesuren des de dalt.
  const pdf = await PDFDocument.load(
    await page.pdf({ preferCSSPageSize: true, printBackground: true })
  );
  pdf.setTitle(`Targeta · ${contact.name} (${lang})`);
  pdf.setAuthor(contact.name);
  for (const p of pdf.getPages()) {
    const { height } = p.getMediaBox();
    p.setBleedBox(pt(SLUG), height - pt(SLUG + CARD.h), pt(CARD.w), pt(CARD.h));
    p.setTrimBox(pt(SLUG + BLEED), height - pt(SLUG + BLEED + TRIM.h), pt(TRIM.w), pt(TRIM.h));
  }
  await writeFile(`${dir}targeta-${lang}.pdf`, await pdf.save());

  // Imatges de cada cara amb sang (per si la impremta les vol per separat) i, per a la
  // previsualització, tal com quedaran tallades.
  const cut = [];
  const cards = await page.$$(".card");
  for (const [i, side] of ["davant", "darrere"].entries()) {
    const box = await cards[i].boundingBox();
    await page.screenshot({
      path: `${dir}${side}-${lang}.png`,
      fullPage: true,
      clip: { x: box.x, y: box.y, width: CARD.w * MM, height: CARD.h * MM },
    });
    cut.push(
      await page.screenshot({
        fullPage: true,
        clip: { x: box.x + BLEED * MM, y: box.y + BLEED * MM, width: TRIM.w * MM, height: TRIM.h * MM },
      })
    );
  }
  await page.close();

  // Previsualització: les dues cares tallades, una al costat de l'altra.
  const sheet = await browser.newPage({ viewport: { width: 1400, height: 520 }, deviceScaleFactor: 2 });
  await sheet.setContent(`<body style="margin:0;height:100vh;display:flex;gap:60px;align-items:center;justify-content:center;background:#c9c7c1">
    ${cut.map((png) => `<img src="data:image/png;base64,${png.toString("base64")}" style="width:595px;border-radius:3px;box-shadow:0 18px 40px -12px rgba(0,0,0,.45)">`).join("")}
  </body>`);
  await sheet.waitForTimeout(300);
  await sheet.screenshot({ path: `${dir}previsualitzacio-${lang}.png` });
  await sheet.close();

  console.log(`${lang}/ targeta-${lang}.pdf · davant-${lang}.png · darrere-${lang}.png · previsualitzacio-${lang}.png`);
}
await browser.close();
