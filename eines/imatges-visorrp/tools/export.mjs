// Exporta les imatges finals de VisorRP a WebP amb les còpies reduïdes (`<nom>-<amplada>.webp`).
// La més gran és el mateix `<nom>.webp`, com espera `Media.widths`.
import sharp from "sharp";
import { mkdirSync, statSync } from "node:fs";

const [, , sp, outDir] = process.argv;
mkdirSync(outDir, { recursive: true });

const jobs = [
  { name: "portada", src: `${sp}/comp/comp0-safe.png`, widths: [640, 960, 1280, 1600, 1920, 2400] },
  {
    name: "atraco",
    src: `${sp}/frames/full/t25.8.png`,
    // 2560×1440 → 16:10 centrat, sense ampliar: la més gran és de 2304 px.
    extract: { left: 128, top: 0, width: 2304, height: 1440 },
    widths: [640, 960, 1280, 1600, 1920, 2304],
  },
  { name: "ia", src: `${sp}/comp/comp2b.png`, widths: [640, 960, 1280, 1600, 1920, 2400] },
];

for (const j of jobs) {
  const base = j.extract ? await sharp(j.src).extract(j.extract).toBuffer() : await sharp(j.src).toBuffer();
  const largest = Math.max(...j.widths);
  for (const w of j.widths) {
    const file = w === largest ? `${outDir}/${j.name}.webp` : `${outDir}/${j.name}-${w}.webp`;
    await sharp(base)
      .resize({ width: w, kernel: "lanczos3" })
      .webp({ quality: w >= 1920 ? 86 : 82, effort: 6, smartSubsample: true })
      .toFile(file);
    const m = await sharp(file).metadata();
    console.log(file.split(/[\\/]/).pop(), `${m.width}x${m.height}`, Math.round(statSync(file).size / 1024) + " KB");
  }
}
