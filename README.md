# Joan Pau Rahola · Portfolio

Portfoli personal orientat a un perfil d'**enginyer d'IA**. Next.js (App Router),
React 19, Tailwind CSS v4 i Framer Motion. Contingut bilingüe català / anglès.

```bash
npm run dev     # http://localhost:3000
npm run build   # build de producció
npm run lint
```

---

## Dues regles del projecte

1. **Cap valor visual sense token.** Colors, tipografies i ritme vertical es
   defineixen a `@theme` dins de [`app/globals.css`](app/globals.css). No hi ha
   mides de font en píxels: l'escala és fluida amb `clamp()`.
2. **Cap text dins d'un component.** Tot el contingut viu a
   [`app/content/`](app/content/) com a objectes `{ ca, en }`.

Si et trobes escrivint un color literal o una frase dins d'un `.tsx`, és que la
peça hauria d'anar a un d'aquests dos llocs.

---

## Estructura

```
app/
  globals.css            Tokens de disseny + escala tipogràfica
  fonts.ts               Geist · Geist Mono · Instrument Serif
  layout.tsx             Providers, metadades, navegació
  page.tsx               Ordre de seccions de la portada

  content/               ── ÚNICA FONT DE CONTINGUT ──
    site.ts              Identitat, hero, sobre mi, contacte, textos d'UI
    domains.ts           Les sis àrees de domini
    projects.ts          Projectes i el contingut de cada fitxa

  i18n/
    LanguageProvider.tsx Estat d'idioma (useSyncExternalStore + localStorage)

  components/            Portada: Nav, Hero, ProjectIndex, Domains, About, Footer
    ui/                  Reveal, SectionHeading, LanguageToggle

  projects/
    ProjectDetail.tsx    Plantilla de fitxa de projecte
    Accordion.tsx  TOC.tsx  Markdown.tsx
    [slug]/page.tsx      Ruta estàtica generada des de projects.ts
```

---

## Tasques habituals

### Afegir un projecte

Afegeix un objecte a l'array `projects` de [`app/content/projects.ts`](app/content/projects.ts).
La ruta `/projects/<slug>`, l'entrada al llistat i les metadades es generen soles.

Camps que val la pena pensar-se bé:

| Camp | Què hi va |
|---|---|
| `demonstrates` | Una línia: què demostra del teu perfil. És el que es llegeix al llistat. |
| `sections` | Cada secció és `content` (Markdown) **o** `accordion` (llista plegable). |
| `draft: true` | El projecte no surt al llistat, però la seva URL segueix sent accessible per previsualitzar-lo. |

### Editar textos

Tot a `app/content/`. Cada text és `{ ca: "...", en: "..." }`. Si te'n deixes un
idioma, TypeScript et donarà error en compilar i no quedarà cap buit a la pàgina.

### Afegir un idioma

Afegeix el codi al tipus `Locale` de
[`app/i18n/LanguageProvider.tsx`](app/i18n/LanguageProvider.tsx). El compilador
et marcarà tots els textos pendents de traduir.

### Canviar l'accent de color

Una sola línia: `--color-accent` a [`app/globals.css`](app/globals.css).

---

## Pendent de revisar

Marcats amb `REVISAR` / `REVIEW` dins del codi:

- `metadataBase` a `layout.tsx`: el domini de producció.
- El projecte `projecte-llm` a `projects.ts` és una plantilla en esborrany.
  És el forat més important del portfoli: el posicionament d'IA aplicada se
  sosté ara mateix en projectes reenfocats, no en un sistema amb LLMs
  construït de cap a peus.
