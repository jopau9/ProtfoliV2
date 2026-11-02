# Targetes de visita

Targetes de 85 × 55 mm, a dues cares, amb els colors i les tipografies de la web.

```
npm install
node generate.mjs        # català, castellà i anglès
node generate.mjs ca     # només un idioma
```

Cal Google Chrome a `C:/Program Files/Google/Chrome/Application/chrome.exe` i connexió
a internet (les tipografies es baixen de Google Fonts).

## Sortida (`sortida/<idioma>/`)

Una carpeta per idioma (`ca`, `es`, `en`), amb:

- `targeta-ca.pdf`: **el que s'envia a la impremta**. Dues pàgines (1 davant, 2 darrere) de
  103 × 73 mm: la targeta de 85 × 55 mm, 3 mm de sang per costat i marques de tall en un
  marge blanc de 6 mm. El tall i la sang també són marcats al PDF (TrimBox i BleedBox).
  El text queda a 5 mm o més del tall.
- `davant-ca.png`, `darrere-ca.png`: cada cara per separat amb la sang (91 × 61 mm), a
  600 ppp, per si la impremta les vol com a imatges.
- `previsualitzacio-ca.png`: les dues cares tal com quedaran tallades, per revisar.

Els colors són RGB: la impremta els passa a CMYK.

## Canviar dades

Tot el text és a dalt de `generate.mjs` (`contact`, `copy` i `WEB`). El QR desa el
contacte (vCard: nom, càrrec, telèfon, correu i web) i es regenera sol amb aquestes dades.
Si s'hi afegeix res, vigila els mòduls que s'escriuen per consola: el QR fa 17 mm, i amb
més de 53 mòduls cada un queda per sota de 0,32 mm i costa més de llegir-lo imprès.
