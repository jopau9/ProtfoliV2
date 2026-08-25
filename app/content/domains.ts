import type { L } from "../i18n/LanguageProvider";

/**
 * Àrees de domini: el nucli del posicionament.
 * Substitueix la graella de logos de llenguatges: el pes va al coneixement
 * de l'entorn, i les eines concretes queden com a nota discreta.
 *
 * Ordre deliberat: l'aplicació d'LLMs va al davant perquè és el centre de
 * la feina, i les àrees de suport (dades, producció, interfície) la segueixen.
 *
 * REVISAR: ajusta `stack` per deixar-hi només allò que realment has tocat.
 */

export type Domain = {
  id: string;
  title: L;
  summary: L;
  points: L<string[]>;
  stack: string[];
};

export const domains: Domain[] = [
  {
    id: "llm-systems",
    title: {
      ca: "LLMs i sistemes d'agents",
      es: "LLMs y sistemas de agentes",
      en: "LLMs & agent systems",
    },
    summary: {
      ca: "Models de llenguatge com a component d'un sistema, no com a producte. La feina rarament és el prompt: és decidir què li deixes fer, amb quines eines i què passa el moment que se'n surt.",
      es: "Modelos de lenguaje como componente de un sistema, no como producto. El trabajo rara vez es el prompt: es decidir qué le dejas hacer, con qué herramientas y qué ocurre en el momento en que se sale del guion.",
      en: "Language models as a component of a system, not as the product. The work is rarely the prompt: it's deciding what you let it do, with which tools, and what happens the moment it goes off-script.",
    },
    points: {
      ca: [
        "Assistents i copilots sobre coneixement propi: documentació, procediments, històric",
        "Agents amb eines acotades, traça completa i límits explícits del que poden tocar",
        "Extracció estructurada: convertir documents desordenats en dades consultables",
      ],
      es: [
        "Asistentes y copilotos sobre conocimiento propio: documentación, procedimientos, histórico",
        "Agentes con herramientas acotadas, traza completa y límites explícitos de lo que pueden tocar",
        "Extracción estructurada: convertir documentos desordenados en datos consultables",
      ],
      en: [
        "Assistants and copilots over your own knowledge: docs, procedures, history",
        "Agents with bounded tools, full tracing, and explicit limits on what they may touch",
        "Structured extraction: turning messy documents into queryable data",
      ],
    },
    stack: ["Claude API", "OpenAI API", "Function calling", "MCP", "Structured outputs"],
  },
  {
    id: "retrieval",
    title: {
      ca: "Recuperació i context",
      es: "Recuperación y contexto",
      en: "Retrieval & context",
    },
    summary: {
      ca: "La qualitat d'un sistema amb LLM la decideix el que entra a la finestra de context, no el model que hi ha darrere. És on es guanya o es perd la partida, i on gairebé tothom inverteix menys del que caldria.",
      es: "La calidad de un sistema con LLM la decide lo que entra en la ventana de contexto, no el modelo que hay detrás. Es donde se gana o se pierde la partida, y donde casi todo el mundo invierte menos de lo que debería.",
      en: "The quality of an LLM system is decided by what makes it into the context window, not by the model behind it. It's where the thing is won or lost, and where almost everyone underinvests.",
    },
    points: {
      ca: [
        "Trossejat, indexació i cerca híbrida (semàntica i lèxica) sobre corpus reals",
        "Reordenació i selecció: no gastar finestra de context en soroll",
        "Citacions i traçabilitat, perquè cada resposta es pugui seguir fins a la font",
      ],
      es: [
        "Troceado, indexación y búsqueda híbrida (semántica y léxica) sobre corpus reales",
        "Reordenación y selección: no gastar ventana de contexto en ruido",
        "Citas y trazabilidad, para que cada respuesta se pueda seguir hasta la fuente",
      ],
      en: [
        "Chunking, indexing and hybrid search (semantic plus lexical) over real corpora",
        "Reranking and selection: not spending context window on noise",
        "Citations and traceability, so every answer can be followed back to its source",
      ],
    },
    stack: ["pgvector", "Embeddings", "Hybrid search", "Reranking", "Chunking"],
  },
  {
    id: "evaluation",
    title: {
      ca: "Avaluació i fiabilitat",
      es: "Evaluación y fiabilidad",
      en: "Evaluation & reliability",
    },
    summary: {
      ca: "Un sistema que no es mesura no es millora: només es retoca a cegues. Aquesta és la part que separa una demo que impressiona d'alguna cosa on es pot confiar un dilluns qualsevol.",
      es: "Un sistema que no se mide no mejora: solo se retoca a ciegas. Esta es la parte que separa una demo que impresiona de algo en lo que se puede confiar un lunes cualquiera.",
      en: "A system you don't measure doesn't improve; you just poke at it blind. This is the part that separates an impressive demo from something you can rely on any given Monday.",
    },
    points: {
      ca: [
        "Conjunts d'avaluació propis i proves de regressió abans de tocar cap prompt ni model",
        "Guardarails, validació d'esquema i camins de degradació quan la sortida no serveix",
        "Observabilitat en servei: cost, latència, taxa d'error i què va passar a cada crida",
      ],
      es: [
        "Conjuntos de evaluación propios y pruebas de regresión antes de tocar ningún prompt ni modelo",
        "Guardarraíles, validación de esquema y caminos de degradación cuando la salida no sirve",
        "Observabilidad en servicio: coste, latencia, tasa de error y qué ocurrió en cada llamada",
      ],
      en: [
        "Custom eval sets and regression checks before touching any prompt or model",
        "Guardrails, schema validation, and fallback paths when the output isn't usable",
        "Production observability: cost, latency, error rate, and what happened on each call",
      ],
    },
    stack: ["Evals", "LLM-as-judge", "JSON Schema", "Tracing", "A/B testing"],
  },
  {
    id: "data",
    title: {
      ca: "Dades, modelatge i pipelines",
      es: "Datos, modelado y pipelines",
      en: "Data, modelling & pipelines",
    },
    summary: {
      ca: "Abans de qualsevol model hi ha ingesta, modelatge i qualitat, i aquesta feina fixa el sostre de tot el que ve després. És igual de cert per a un RAG que per a un classificador.",
      es: "Antes de cualquier modelo hay ingesta, modelado y calidad, y ese trabajo fija el techo de todo lo que viene después. Es igual de cierto para un RAG que para un clasificador.",
      en: "Before any model there's ingestion, modelling and quality work, and it sets the ceiling for everything downstream. Just as true for a RAG system as for a classifier.",
    },
    points: {
      ca: [
        "Modelatge relacional i de sèries temporals pensat per respondre preguntes, no només per desar",
        "Ingesta i transformació contínua des de fonts que ningú va dissenyar perquè les consultessis",
        "Qualitat: buits, duplicats, deriva i context que, si no es captura, no es recupera mai",
      ],
      es: [
        "Modelado relacional y de series temporales pensado para responder preguntas, no solo para almacenar",
        "Ingesta y transformación continua desde fuentes que nadie diseñó para que las consultaras",
        "Calidad: huecos, duplicados, deriva y contexto que, si no se captura, no se recupera nunca",
      ],
      en: [
        "Relational and time-series modelling designed to answer questions, not merely to store",
        "Continuous ingestion and transformation from sources nobody designed to be queried",
        "Quality: gaps, duplicates, drift, and context that is gone for good if you don't capture it",
      ],
    },
    stack: ["PostgreSQL", "Python", "Pandas", "SQL", "scikit-learn", "PyTorch"],
  },
  {
    id: "production",
    title: {
      ca: "MLOps i producció",
      es: "MLOps y producción",
      en: "MLOps & production",
    },
    summary: {
      ca: "Un sistema entregat és un sistema desplegat, versionat i vigilat. La distància entre una prova de concepte i un producte és tot el que passa després que funcioni al portàtil.",
      es: "Un sistema entregado es un sistema desplegado, versionado y vigilado. La distancia entre una prueba de concepto y un producto es todo lo que ocurre después de que funcione en el portátil.",
      en: "A delivered system is a deployed, versioned and monitored system. The distance between a proof of concept and a product is everything that happens after it works on your laptop.",
    },
    points: {
      ca: [
        "Desplegament reproduïble, amb versionat de prompts, models i dades tractats igual que el codi",
        "Control de cost i latència: què es memoritza a la memòria cau, què s'agrupa i què no cal ni cridar",
        "Monitoratge i retorn enrere sense drama quan una versió nova empitjora les coses",
      ],
      es: [
        "Despliegue reproducible, con versionado de prompts, modelos y datos tratados igual que el código",
        "Control de coste y latencia: qué se cachea, qué se agrupa y qué no hace falta ni llamar",
        "Monitorización y vuelta atrás sin dramas cuando una versión nueva empeora las cosas",
      ],
      en: [
        "Reproducible deployment, with prompts, models and data versioned like code",
        "Cost and latency control: what gets cached, what gets batched, what needn't be called at all",
        "Monitoring, and rollbacks without drama when a new version makes things worse",
      ],
    },
    stack: ["Docker", "GitHub Actions", "MLflow", "Linux", "REST APIs", "Caching"],
  },
  {
    id: "interface",
    title: {
      ca: "Producte i interfície",
      es: "Producto e interfaz",
      en: "Product & interface",
    },
    summary: {
      ca: "Un sistema d'IA acaba en una pantalla on algú pren una decisió. Per bo que sigui el model, si la sortida no és llegible i justificable en cinc segons, ningú l'utilitzarà dues vegades.",
      es: "Un sistema de IA acaba en una pantalla donde alguien toma una decisión. Por bueno que sea el modelo, si la salida no es legible y justificable en cinco segundos, nadie la usará dos veces.",
      en: "An AI system ends on a screen where someone makes a decision. However good the model is, if the output isn't legible and justifiable in five seconds, nobody uses it twice.",
    },
    points: {
      ca: [
        "Interfícies de conversa i de decisió: streaming, estats d'espera i correcció per part de l'usuari",
        "Mostrar la incertesa i les fonts sense convertir-ho tot en soroll",
        "Aplicacions web pròpies quan l'eina de mercat no encaixa amb el procés real",
      ],
      es: [
        "Interfaces de conversación y de decisión: streaming, estados de espera y corrección por parte del usuario",
        "Mostrar la incertidumbre y las fuentes sin convertirlo todo en ruido",
        "Aplicaciones web propias cuando la herramienta de mercado no encaja con el proceso real",
      ],
      en: [
        "Conversational and decision interfaces: streaming, waiting states, and user correction",
        "Surfacing uncertainty and sources without turning everything into noise",
        "Custom web applications when the off-the-shelf tool doesn't fit the actual process",
      ],
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Streaming UI"],
  },
];

export const domainsSection = {
  label: { ca: "Domini", es: "Dominio", en: "Domains" } satisfies L,
  heading: {
    ca: { lead: "El que sé de", accent: "l'entorn" },
    es: { lead: "Lo que sé del", accent: "entorno" },
    en: { lead: "What I know about the", accent: "environment" },
  } satisfies L<{ lead: string; accent: string }>,
  lead: {
    ca: "Un enginyer d'IA no val pel llenguatge que domina, sinó per saber on encaixa un model i on no. Aquestes són les sis àrees on em moc, des de la primera decisió sobre el context fins a la pantalla on algú llegeix la resposta.",
    es: "Un ingeniero de IA no vale por el lenguaje que domina, sino por saber dónde encaja un modelo y dónde no. Estas son las seis áreas en las que me muevo, desde la primera decisión sobre el contexto hasta la pantalla donde alguien lee la respuesta.",
    en: "An AI engineer isn't worth the language they know, but knowing where a model fits and where it doesn't. These are the six areas I work across, from the first decision about context to the screen where someone reads the answer.",
  } satisfies L,
};
