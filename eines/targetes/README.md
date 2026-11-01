# Targetes de visita

Targetes de 85 × 55 mm, a dues cares, amb els colors i les tipografies de la web.

```
npm install
node generate.mjs        # català, castellà i anglès
node generate.mjs ca     # només un idioma
```

Cal Google Chrome a `C:/Program Files/Google/Chrome/Application/chrome.exe` i connexió
a internet (les tipografies es baixen de Google Fonts).

## Sortida (`sortida/`)

- `targeta-ca.pdf`, `targeta-es.pdf`, `targeta-en.pdf`: per a la impremta. Dues pàgines (davant, darrere),
  amb ~2 mm de sang per costat i el tall de 85 × 55 mm marcat al PDF (TrimBox).
  El text queda a 5 mm o més del tall.
- `davant-*.png`, `darrere-*.png`: cada cara tal com quedarà tallada, a 600 ppp.
- `previsualitzacio-*.png`: les dues cares juntes, per revisar.

## Canviar dades

Tot el text és a dalt de `generate.mjs` (`contact` i `copy`). Quan hi hagi domini propi,
canvia `WEB`: el QR (que porta a `/serveis`) es regenera sol.
