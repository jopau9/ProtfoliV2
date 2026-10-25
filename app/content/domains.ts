import type { L } from "../i18n/LanguageProvider";

/**
 * Àmbits de treball: cadascun lligat als projectes i llocs on s'ha exercit.
 * Les eines queden al peu, com a nota discreta.
 *
 * Ordre: la feina actual primer, i després el que la sosté.
 *
 * REVISAR: `stack` només ha de tenir allò que realment has tocat.
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
    id: "applied-ai",
    title: {
      ca: "IA aplicada i sistemes amb LLMs",
      es: "IA aplicada y sistemas con LLMs",
      en: "Applied AI and LLM systems",
    },
    summary: {
      ca: "Disseny i desenvolupament de sistemes basats en models de llenguatge per resoldre problemes concrets d'una organització. El factor determinant no és el model, sinó la selecció del context que rep, la definició dels seus límits d'actuació i la mesura de la qualitat de les respostes.",
      es: "Diseño y desarrollo de sistemas basados en modelos de lenguaje para resolver problemas concretos de una organización. El factor determinante no es el modelo, sino la selección del contexto que recibe, la definición de sus límites de actuación y la medición de la calidad de las respuestas.",
      en: "Designing and building systems based on language models to solve an organisation's concrete problems. The deciding factor isn't the model but the selection of the context it receives, the definition of its operating limits, and the measurement of answer quality.",
    },
    points: {
      ca: [
        "Assistents sobre documentació tècnica i historial d'incidències, amb RAG, recuperació híbrida (semàntica i lèxica) i reordenació de resultats",
        "Agents amb eines i permisos acotats, com la integració amb TIA Portal mitjançant l'API Openness de Siemens",
        "Connectors MCP cap a Jira i Microsoft 365, i entrada multimodal a partir de fotografies d'equips",
        "Avaluació amb consultes reals d'usuaris per validar cada canvi abans del desplegament",
      ],
      es: [
        "Asistentes sobre documentación técnica e historial de incidencias, con RAG, recuperación híbrida (semántica y léxica) y reordenación de resultados",
        "Agentes con herramientas y permisos acotados, como la integración con TIA Portal mediante la API Openness de Siemens",
        "Conectores MCP hacia Jira y Microsoft 365, y entrada multimodal a partir de fotografías de equipos",
        "Evaluación con consultas reales de usuarios para validar cada cambio antes del despliegue",
      ],
      en: [
        "Assistants over technical documentation and incident history, using RAG, hybrid (semantic and lexical) retrieval and reranking",
        "Agents with bounded tools and permissions, such as the TIA Portal integration through Siemens' Openness API",
        "MCP connectors to Jira and Microsoft 365, and multimodal input from photographs of equipment",
        "Evaluation against real user queries to validate every change before deployment",
      ],
    },
    stack: ["RAG", "Cerca híbrida", "Reranking", "MCP", "Models multimodals", "Claude", "OpenAI API", "Siemens Openness"],
  },
  {
    id: "product",
    title: {
      ca: "Desenvolupament de producte web i mòbil",
      es: "Desarrollo de producto web y móvil",
      en: "Web and mobile product development",
    },
    summary: {
      ca: "Desenvolupament complet d'aplicacions, des del model de dades fins a la publicació. Capital Tracker n'és l'exemple principal: un producte en producció amb versió web i Android, sistema de subscripcions i una capa d'IA integrada.",
      es: "Desarrollo completo de aplicaciones, desde el modelo de datos hasta la publicación. Capital Tracker es el ejemplo principal: un producto en producción con versión web y Android, sistema de suscripciones y una capa de IA integrada.",
      en: "End-to-end application development, from the data model to public release. Capital Tracker is the main example: a product in production with web and Android versions, a subscription system and a built-in AI layer.",
    },
    points: {
      ca: [
        "Arquitectura amb aplicacions web i mòbil desacoblades que comparteixen base de dades i lògica de negoci",
        "Subscripcions amb Stripe a la web i Google Play Billing a Android: prorrateig en canvis de pla i canvis programats a final de període",
        "Disseny del procés d'incorporació d'usuaris i d'interfícies orientades a la presa de decisions",
      ],
      es: [
        "Arquitectura con aplicaciones web y móvil desacopladas que comparten base de datos y lógica de negocio",
        "Suscripciones con Stripe en la web y Google Play Billing en Android: prorrateo en cambios de plan y cambios programados a final de periodo",
        "Diseño del proceso de incorporación de usuarios y de interfaces orientadas a la toma de decisiones",
      ],
      en: [
        "Architecture with decoupled web and mobile apps sharing the same database and business logic",
        "Subscriptions with Stripe on the web and Google Play Billing on Android: proration on plan changes and changes scheduled at period end",
        "Design of the user onboarding flow and of decision-oriented interfaces",
      ],
    },
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Capacitor", "Stripe", "RevenueCat", "Tailwind CSS"],
  },
  {
    id: "data",
    title: {
      ca: "Modelatge de dades i bases de dades",
      es: "Modelado de datos y bases de datos",
      en: "Data modelling and databases",
    },
    summary: {
      ca: "La qualitat d'un sistema depèn en gran mesura de com s'estructuren les seves dades. Un bon modelatge inicial permet respondre preguntes noves sense migracions, i és igual de determinant en una aplicació convencional que en un sistema amb IA.",
      es: "La calidad de un sistema depende en gran medida de cómo se estructuran sus datos. Un buen modelado inicial permite responder preguntas nuevas sin migraciones, y es igual de determinante en una aplicación convencional que en un sistema con IA.",
      en: "A system's quality depends heavily on how its data is structured. Good early modelling lets you answer new questions without migrations, and that matters as much in a conventional application as in an AI system.",
    },
    points: {
      ca: [
        "Esquemes relacionals amb capacitat de reconstrucció històrica, com l'estat d'una cartera d'inversions en qualsevol data",
        "Aïllament de dades per usuari a nivell de base de dades mitjançant Row Level Security",
        "Optimització de consultes SQL en sistemes en producció",
      ],
      es: [
        "Esquemas relacionales con capacidad de reconstrucción histórica, como el estado de una cartera de inversiones en cualquier fecha",
        "Aislamiento de datos por usuario a nivel de base de datos mediante Row Level Security",
        "Optimización de consultas SQL en sistemas en producción",
      ],
      en: [
        "Relational schemas that support historical reconstruction, such as an investment portfolio's state on any date",
        "Per-user data isolation at the database level using Row Level Security",
        "SQL query optimisation in production systems",
      ],
    },
    stack: ["PostgreSQL", "Row Level Security", "MySQL", "SQL", "Microsoft Access"],
  },
  {
    id: "automation",
    title: {
      ca: "Automatització de processos",
      es: "Automatización de procesos",
      en: "Process automation",
    },
    summary: {
      ca: "Anàlisi i automatització de processos manuals en entorns administratius i empresarials. El primer pas és documentar com es fa realment la feina, que sovint difereix del procediment formal, i a partir d'aquí decidir què té sentit automatitzar.",
      es: "Análisis y automatización de procesos manuales en entornos administrativos y empresariales. El primer paso es documentar cómo se hace realmente el trabajo, que a menudo difiere del procedimiento formal, y a partir de ahí decidir qué tiene sentido automatizar.",
      en: "Analysing and automating manual processes in administrative and business settings. The first step is documenting how the work is actually done, which often differs from the formal procedure, and deciding from there what makes sense to automate.",
    },
    points: {
      ca: [
        "Automatització de processos administratius en tres unitats de la Universitat de Girona, amb impacte en més de 80 llocs de treball",
        "Automatització de processos interns amb l'API d'OpenAI a SATB2C",
        "Aplicacions de gestió en Microsoft Access i VBA: formularis, consultes i generació d'informes",
      ],
      es: [
        "Automatización de procesos administrativos en tres unidades de la Universitat de Girona, con impacto en más de 80 puestos de trabajo",
        "Automatización de procesos internos con la API de OpenAI en SATB2C",
        "Aplicaciones de gestión en Microsoft Access y VBA: formularios, consultas y generación de informes",
      ],
      en: [
        "Automation of administrative processes in three University of Girona units, affecting more than 80 positions",
        "Automation of internal processes with the OpenAI API at SATB2C",
        "Management applications in Microsoft Access and VBA: forms, queries and report generation",
      ],
    },
    stack: ["Python", "VBA", "APIs REST", "OpenAI API", "Firebase"],
  },
  {
    id: "legacy",
    title: {
      ca: "Modernització de sistemes existents",
      es: "Modernización de sistemas existentes",
      en: "Modernising existing systems",
    },
    summary: {
      ca: "Una part substancial de l'enginyeria consisteix a fer evolucionar sistemes que ja estan en ús: entendre codi heretat, reduir-ne la complexitat i millorar-lo sense interrompre l'operativa dels usuaris.",
      es: "Una parte sustancial de la ingeniería consiste en hacer evolucionar sistemas que ya están en uso: entender código heredado, reducir su complejidad y mejorarlo sin interrumpir la operativa de los usuarios.",
      en: "A substantial part of engineering is evolving systems already in use: understanding legacy code, reducing its complexity and improving it without disrupting the people who rely on it.",
    },
    points: {
      ca: [
        "Migració i modernització del portal PHP de SATB2C, amb implantació de notificacions push",
        "Modernització de llocs web en Drupal: frontend, estructura de continguts, allotjament i desplegament",
        "Disseny i publicació de webs corporatives en WordPress",
      ],
      es: [
        "Migración y modernización del portal PHP de SATB2C, con implantación de notificaciones push",
        "Modernización de sitios web en Drupal: frontend, estructura de contenidos, alojamiento y despliegue",
        "Diseño y publicación de webs corporativas en WordPress",
      ],
      en: [
        "Migration and modernisation of SATB2C's PHP portal, including push notifications",
        "Modernisation of Drupal websites: frontend, content structure, hosting and deployment",
        "Design and publication of corporate websites in WordPress",
      ],
    },
    stack: ["PHP", "jQuery", "Cordova", "Drupal", "WordPress"],
  },
];

export const domainsSection = {
  label: { ca: "Àmbits", es: "Ámbitos", en: "Expertise" } satisfies L,
  heading: {
    ca: { lead: "Àmbits de", accent: "treball" },
    es: { lead: "Ámbitos de", accent: "trabajo" },
    en: { lead: "Areas of", accent: "work" },
  } satisfies L<{ lead: string; accent: string }>,
  lead: {
    ca: "Cinc àmbits en què he treballat de manera continuada, cadascun vinculat als projectes i a les organitzacions on l'he desenvolupat.",
    es: "Cinco ámbitos en los que he trabajado de forma continuada, cada uno vinculado a los proyectos y a las organizaciones donde lo he desarrollado.",
    en: "Five areas I've worked in consistently, each tied to the projects and organisations where I developed it.",
  } satisfies L,
};
