# Imatges del projecte VisorRP

Com es fan les tres imatges de la fitxa de VisorRP (`public/ProjectImages/VisorRP/`) i la resta de material d'on surten.

| Imatge | Què és | D'on surt |
|---|---|---|
| `portada.webp` (16:9) | El web i un pla del joc, superposats | `comp/comp0-safe.html`: portada de visorrp.es + fotograma `t63.5` del tràiler |
| `atraco.webp` (16:10) | L'atracament amb el dependent que escolta per veu | Fotograma `t25.8` del tràiler, retallat a 16:10 |
| `ia.webp` (16:10) | La secció «Una ciudad que te escucha» del web | `comp/comp2b.html`: captura de `#ia` de visorrp.es |

La portada està pensada perquè el retall 4:3 del llistat de projectes (franja central, x = 300–2100) hi mantingui sencers el titular del web i el iot.

## Carpetes

| Carpeta | Contingut | Al repo |
|---|---|---|
| `tools/` | Scripts i `package.json` propi (sharp, ffmpeg-static, ffprobe-static, playwright-core) | Sí (sense `node_modules`) |
| `comp/` | Composicions en HTML (les finals: `comp0-safe.html` i `comp2b.html`; la resta són proves) | Només l'HTML |
| `media/` | `trailer.mp4`: el tràiler a 2560×1440, copiat del pve (`/root/fivem/promo/trailer/salida/visorrp-trailer-16x9.mp4`) | No |
| `frames/` | Fotogrames del tràiler (`full/tNN.png`, a 2560×1440) i les làmines per triar-los | No |
| `web/` | Captures de visorrp.es (`home2x.png`, `ia2x.png`, `ia2x-crop.png`…, a escala 2) | No |
| `local/` | Captures del portfoli en local, per revisar com queda | No |

## Tornar-les a fer

Des de `tools/` (amb Chrome instal·lat a `C:/Program Files/Google/Chrome/`):

```sh
npm install

# 1. Tràiler i fotogrames
scp root@192.168.1.10:/root/fivem/promo/trailer/salida/visorrp-trailer-16x9.mp4 ../media/trailer.mp4
node_modules/ffmpeg-static/ffmpeg.exe -ss 63.5 -i ../media/trailer.mp4 -frames:v 1 ../frames/full/t63.5.png
node_modules/ffmpeg-static/ffmpeg.exe -ss 25.8 -i ../media/trailer.mp4 -frames:v 1 ../frames/full/t25.8.png

# 2. Captures del web (escala 2)
node render.mjs --top https://visorrp.es/ ../web/home2x.png 1600 1000 2
node viewshot.mjs ../web/ia2x.png https://visorrp.es/ "#ia" 1600 1000 2 -40
#    ia2x-crop.png: ia2x.png retallat a 3200×1720 (treu la vora del mòbil de la secció següent)

# 3. Composicions
node render.mjs ../comp/comp0-safe.html ../comp/comp0-safe.png 2400 1350
node render.mjs ../comp/comp2b.html ../comp/comp2b.png 2400 1500

# 4. WebP finals amb les còpies reduïdes (`<nom>-<amplada>.webp`)
node export.mjs .. ../../../public/ProjectImages/VisorRP
```

Amb Git Bash, posa `MSYS_NO_PATHCONV=1` davant de les ordres que porten una ruta que comença per `/` (com `"/"` a `shot.mjs`): si no, la converteix en una ruta de Windows.

## Scripts

- `render.mjs`: renderitza un HTML de composició a PNG a mida exacta, o (`--top`) captura la part de dalt d'una pàgina.
- `viewshot.mjs`: captura la finestra a partir d'una secció del web, després de passar per tota la pàgina perquè s'activin les animacions.
- `shot.mjs` i `sections.mjs`: captures i llista de seccions de visorrp.es, per explorar-lo.
- `export.mjs`: exporta els WebP finals.
- `local.mjs`: captura el portfoli en local (`http://localhost:4000`) per revisar-ne el resultat.
