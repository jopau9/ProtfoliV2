import type { L } from "../i18n/LanguageProvider";

/**
 * Textos globals del lloc.
 * Tot el que és visible viu aquí: cap string a dins dels components.
 */

export const identity = {
  name: "Joan Pau Rahola",
  fullName: "Joan Pau Rahola Ferrer",
  role: {
    ca: "Enginyer d'IA",
    es: "Ingeniero de IA",
    en: "AI Engineer",
  } satisfies L,
  location: {
    ca: "Girona, Catalunya",
    es: "Girona, Cataluña",
    en: "Girona, Catalonia",
  } satisfies L,
  email: "jprahfer@gmail.com",
  github: "https://github.com/jopau9",
  linkedin: "https://www.linkedin.com/in/joan-pau-rahola-ferrer-b6994b24a/",
  cv: "/PDF/CV_JoanPau.pdf",
};

export const nav: { id: string; label: L }[] = [
  { id: "work", label: { ca: "Projectes", es: "Proyectos", en: "Work" } },
  { id: "domains", label: { ca: "Domini", es: "Dominio", en: "Domains" } },
  { id: "about", label: { ca: "Sobre mi", es: "Sobre mí", en: "About" } },
  { id: "contact", label: { ca: "Contacte", es: "Contacto", en: "Contact" } },
];

export const hero = {
  eyebrow: {
    ca: "Enginyer d'IA · Sistemes amb LLMs",
    es: "Ingeniero de IA · Sistemas con LLMs",
    en: "AI Engineer · LLM systems",
  } satisfies L,
  // El titular es parteix en tres: la paraula del mig va en serif itàlica ambre.
  headline: {
    ca: { lead: "He posat una empresa", accent: "sencera", tail: "a treballar amb IA." },
    es: { lead: "He puesto a una empresa", accent: "entera", tail: "a trabajar con IA." },
    en: { lead: "I got an", accent: "entire", tail: "company working with AI." },
  } satisfies L<{ lead: string; accent: string; tail: string }>,
  lead: {
    ca: "Construeixo sistemes que llegeixen per nosaltres: assistents que coneixen la documentació d'una empresa, agents que s'encarreguen de la part repetitiva d'una feina, processos que abans exigien hores de lectura atenta. La dificultat no és mai fer-los parlar, sinó fer que encertin i deixar que qualsevol ho pugui comprovar.",
    es: "Construyo sistemas que leen por nosotros: asistentes que conocen la documentación de una empresa, agentes que se encargan de la parte repetitiva de un trabajo, procesos que antes exigían horas de lectura atenta. La dificultad nunca es hacerlos hablar, sino conseguir que acierten y que cualquiera pueda comprobarlo.",
    en: "I build systems that read on our behalf: assistants that know a company's documentation, agents that take on the repetitive part of a job, processes that used to demand hours of careful reading. The difficulty is never getting them to talk, but getting them right and letting anyone verify it.",
  } satisfies L,
  cta: {
    primary: {
      ca: "Veure projectes",
      es: "Ver proyectos",
      en: "See the work",
    } satisfies L,
    secondary: {
      ca: "Descarregar CV",
      es: "Descargar CV",
      en: "Download CV",
    } satisfies L,
  },
};

export const about = {
  heading: { ca: "Sobre mi", es: "Sobre mí", en: "About" } satisfies L,
  paragraphs: {
    ca: [
      "Vinc del desenvolupament de software i he acabat a l'IA aplicada pel mateix motiu que em va atreure programar: m'interessa més el sistema sencer que qualsevol de les seves peces.",
      "El que em va acabar de convèncer dels models de llenguatge no va ser veure'ls escriure, sinó veure'ls llegir. De sobte hi havia una manera de treballar amb tot allò que una empresa sap però no té ordenat enlloc.",
      "Aquesta és la feina que faig avui, i la part que m'ocupa més temps no és la que sembla. Fer que un model respongui és qüestió d'una tarda; fer que respongui bé demana escollir amb cura què arriba a saber, i tenir manera de demostrar que ha encertat.",
      "Per això no organitzo el meu perfil per llenguatges. Un llenguatge s'aprèn en setmanes; saber on encaixa un model i, sobretot, on no, no.",
    ],
    es: [
      "Vengo del desarrollo de software y he acabado en la IA aplicada por el mismo motivo que me atrajo programar: me interesa más el sistema entero que cualquiera de sus piezas.",
      "Lo que acabó de convencerme de los modelos de lenguaje no fue verlos escribir, sino verlos leer. De pronto había una forma de trabajar con todo aquello que una empresa sabe pero no tiene ordenado en ninguna parte.",
      "Ese es el trabajo que hago hoy, y la parte que más tiempo me ocupa no es la que parece. Conseguir que un modelo responda es cuestión de una tarde; conseguir que responda bien exige escoger con cuidado qué llega a saber, y tener manera de demostrar que ha acertado.",
      "Por eso no organizo mi perfil por lenguajes. Un lenguaje se aprende en semanas; saber dónde encaja un modelo y, sobre todo, dónde no, no.",
    ],
    en: [
      "I come from software engineering and ended up in applied AI for the same reason programming pulled me in: I care more about the whole system than about any single piece of it.",
      "What finally convinced me about language models wasn't watching them write, but watching them read. Suddenly there was a way to work with everything a company knows and has never filed anywhere.",
      "That's the work I do today, and the part that takes the most time isn't the obvious one. Getting a model to answer takes an afternoon; getting it to answer well means choosing carefully what it comes to know, and having a way to prove it got things right.",
      "That's why I don't organise my profile by programming languages. A language takes weeks to learn; knowing where a model fits, and more importantly where it doesn't, does not.",
    ],
  } satisfies L<string[]>,
};

export const contact = {
  heading: {
    ca: { lead: "Parlem de", accent: "sistemes" },
    es: { lead: "Hablemos de", accent: "sistemas" },
    en: { lead: "Let's talk about", accent: "systems" },
  } satisfies L<{ lead: string; accent: string }>,
  lead: {
    ca: "Obert a qualsevol projecte que impliqui aplicar models de llenguatge de manera seriosa: assistents, agents, automatització de processos amb documents, o portar a producció una prova de concepte que s'ha quedat encallada.",
    es: "Abierto a cualquier proyecto que implique aplicar modelos de lenguaje en serio: asistentes, agentes, automatización de procesos con documentos, o llevar a producción una prueba de concepto que se ha quedado encallada.",
    en: "Open to any project that involves applying language models seriously: assistants, agents, document-driven process automation, or taking a proof of concept that stalled and getting it into production.",
  } satisfies L,
};

export const ui = {
  scroll: { ca: "Desplaça't", es: "Desplázate", en: "Scroll" } satisfies L,
  viewProject: {
    ca: "Veure projecte",
    es: "Ver proyecto",
    en: "View project",
  } satisfies L,
  backToWork: {
    ca: "Tots els projectes",
    es: "Todos los proyectos",
    en: "All projects",
  } satisfies L,
  onThisPage: {
    ca: "En aquesta pàgina",
    es: "En esta página",
    en: "On this page",
  } satisfies L,
  stack: { ca: "Stack", es: "Stack", en: "Stack" } satisfies L,
  contactLabel: {
    ca: "Contacte",
    es: "Contacto",
    en: "Contact",
  } satisfies L,
  demonstrates: {
    ca: "Què demostra",
    es: "Qué demuestra",
    en: "What it demonstrates",
  } satisfies L,
  notFound: {
    ca: "Projecte no trobat",
    es: "Proyecto no encontrado",
    en: "Project not found",
  } satisfies L,
  noPreview: {
    ca: "Projecte intern · sense captures públiques",
    es: "Proyecto interno · sin capturas públicas",
    en: "Internal project · no public screenshots",
  } satisfies L,
  rights: {
    ca: "Dissenyat i construït de zero.",
    es: "Diseñado y construido desde cero.",
    en: "Designed and built from scratch.",
  } satisfies L,
};
