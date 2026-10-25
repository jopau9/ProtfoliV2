import type { L } from "../i18n/LanguageProvider";

/**
 * Textos globals del lloc.
 * Tot el que és visible viu aquí: cap string a dins dels components.
 */

export const identity = {
  name: "Joan Pau Rahola",
  fullName: "Joan Pau Rahola Ferrer",
  role: {
    ca: "Enginyer de software",
    es: "Ingeniero de software",
    en: "Software Engineer",
  } satisfies L,
  location: {
    ca: "Girona, Catalunya",
    es: "Girona, Cataluña",
    en: "Girona, Catalonia",
  } satisfies L,
  coordinates: "41.98° N · 2.82° E",
  timeZone: "Europe/Madrid",
  email: "jprahfer@gmail.com",
  github: "https://github.com/jopau9",
  linkedin: "https://www.linkedin.com/in/joan-pau-rahola-ferrer-b6994b24a/",
  cv: "/PDF/CV_JoanPau.pdf",
};

export const nav: { id: string; label: L }[] = [
  { id: "work", label: { ca: "Projectes", es: "Proyectos", en: "Work" } },
  { id: "domains", label: { ca: "Àmbits", es: "Ámbitos", en: "Expertise" } },
  { id: "about", label: { ca: "Trajectòria", es: "Trayectoria", en: "About" } },
  { id: "contact", label: { ca: "Contacte", es: "Contacto", en: "Contact" } },
];

export const hero = {
  eyebrow: {
    ca: "Software Engineer · AI Solutions Architect",
    es: "Software Engineer · AI Solutions Architect",
    en: "Software Engineer · AI Solutions Architect",
  } satisfies L,
  // El titular es parteix en tres: la paraula del mig va en serif itàlica ambre.
  headline: {
    ca: { lead: "Poso", accent: "empreses", tail: "a treballar amb IA." },
    es: { lead: "Pongo", accent: "empresas", tail: "a trabajar con IA." },
    en: { lead: "I get", accent: "companies", tail: "working with AI." },
  } satisfies L<{ lead: string; accent: string; tail: string }>,
  lead: {
    ca: "Enginyer informàtic orientat a la intel·ligència artificial aplicada en entorns empresarials. Actualment treballo a AETECH desenvolupant la plataforma interna que centralitza totes les eines d'intel·ligència artificial de l'empresa: des de la integració de models de llenguatge amb software de tercers fins al desenvolupament de funcionalitats pròpies que han millorat de manera mesurada l'eficiència de determinades tasques fins a un 300%.",
    es: "Ingeniero informático orientado a la inteligencia artificial aplicada en entornos empresariales. Actualmente trabajo en AETECH desarrollando la plataforma interna que centraliza todas las herramientas de inteligencia artificial de la empresa: desde la integración de modelos de lenguaje con software de terceros hasta el desarrollo de funcionalidades propias que han mejorado de forma medida la eficiencia de determinadas tareas hasta en un 300%.",
    en: "Computer engineer focused on applied artificial intelligence in business environments. I currently work at AETECH developing the internal platform that brings together all of the company's artificial intelligence tools: from integrating language models with third-party software to building in-house features that have measurably improved the efficiency of certain tasks by up to 300%.",
  } satisfies L,
  cta: {
    primary: {
      ca: "Veure projectes",
      es: "Ver proyectos",
      en: "See projects",
    } satisfies L,
    secondary: {
      ca: "Descarregar CV",
      es: "Descargar CV",
      en: "Download CV",
    } satisfies L,
  },
};

export type TimelineEntry = {
  kind: "work" | "education";
  /** Etapa en curs: es marca amb un punt actiu. */
  current?: boolean;
  period: L;
  role: L;
  place: string;
  text: L;
};

export const about = {
  heading: { ca: "Trajectòria", es: "Trayectoria", en: "About" } satisfies L,
  title: {
    ca: { lead: "Perfil i", accent: "trajectòria" },
    es: { lead: "Perfil y", accent: "trayectoria" },
    en: { lead: "Profile and", accent: "background" },
  } satisfies L<{ lead: string; accent: string }>,
  // Fets clau al costat del retrat: valor curt i etiqueta.
  facts: [
    {
      value: "UdG",
      label: { ca: "Enginyeria Informàtica, 2022–2026", es: "Ingeniería Informática, 2022–2026", en: "Computer Engineering, 2022–2026" },
    },
    {
      value: "MH",
      label: { ca: "Matrícula d'honor al TFG", es: "Matrícula de honor en el TFG", en: "Final-year project with honours" },
    },
    {
      value: "AETECH",
      label: { ca: "AI Solutions Architect des del 2026", es: "AI Solutions Architect desde 2026", en: "AI Solutions Architect since 2026" },
    },
    {
      value: "B2",
      label: { ca: "Anglès · Cambridge First. Català i castellà natius", es: "Inglés · Cambridge First. Catalán y castellano nativos", en: "English · Cambridge First. Native Catalan and Spanish" },
    },
  ] satisfies { value: string; label: L }[],
  experienceLabel: { ca: "Experiència", es: "Experiencia", en: "Experience" } satisfies L,
  educationLabel: { ca: "Formació", es: "Formación", en: "Education" } satisfies L,
  currentLabel: { ca: "Actual", es: "Actual", en: "Current" } satisfies L,
  paragraphs: {
    ca: [
      "Soc enginyer informàtic per la Universitat de Girona (2022–2026), amb el treball de final de grau qualificat amb matrícula d'honor. La meva feina combina desenvolupament de software, arquitectura de sistemes i intel·ligència artificial aplicada.",
      "La primera experiència professional va ser a SATB2C, l'estiu de 2025, com a desenvolupador full-stack en pràctiques. Hi vaig modernitzar el portal principal de l'empresa, optimitzar consultes SQL, integrar l'API d'OpenAI en processos interns i implantar el sistema de notificacions push. Va ser també el meu primer contacte directe amb clients, als quals presentava les noves funcionalitats.",
      "Durant el darrer curs vaig desenvolupar Capital Tracker, una plataforma de gestió de finances personals i inversions que avui està publicada en web i a Google Play. El projecte cobreix el cicle complet d'un producte: modelatge de dades, aplicacions web i mòbil, subscripcions, una capa d'IA sobre les dades de l'usuari i el desplegament a producció. Simultàniament, vaig treballar a la mateixa universitat automatitzant processos administratius en tres unitats, amb impacte en més de 80 llocs de treball.",
      "Des del juliol de 2026 treballo a AETECH com a Software Engineer i AI Solutions Architect. Soc responsable de les iniciatives d'IA de l'empresa en tot el seu cicle: identificació de casos d'ús, arquitectura, desenvolupament, desplegament, formació d'usuaris i millora contínua. Paral·lelament, presto serveis d'enginyeria de software a petites organitzacions, principalment en la modernització de sistemes existents.",
      "M'interessa especialment la intersecció entre IA, software i negoci: construir sistemes que resolguin problemes concrets, que es puguin mesurar i que les persones incorporin a la seva feina diària.",
    ],
    es: [
      "Soy ingeniero informático por la Universitat de Girona (2022–2026), con el trabajo de fin de grado calificado con matrícula de honor. Mi trabajo combina desarrollo de software, arquitectura de sistemas e inteligencia artificial aplicada.",
      "Mi primera experiencia profesional fue en SATB2C, en verano de 2025, como desarrollador full-stack en prácticas. Modernicé el portal principal de la empresa, optimicé consultas SQL, integré la API de OpenAI en procesos internos e implanté el sistema de notificaciones push. Fue también mi primer contacto directo con clientes, a quienes presentaba las nuevas funcionalidades.",
      "Durante el último curso desarrollé Capital Tracker, una plataforma de gestión de finanzas personales e inversiones que hoy está publicada en web y en Google Play. El proyecto cubre el ciclo completo de un producto: modelado de datos, aplicaciones web y móvil, suscripciones, una capa de IA sobre los datos del usuario y el despliegue a producción. Simultáneamente, trabajé en la propia universidad automatizando procesos administrativos en tres unidades, con impacto en más de 80 puestos de trabajo.",
      "Desde julio de 2026 trabajo en AETECH como Software Engineer y AI Solutions Architect. Soy responsable de las iniciativas de IA de la empresa en todo su ciclo: identificación de casos de uso, arquitectura, desarrollo, despliegue, formación de usuarios y mejora continua. Paralelamente, presto servicios de ingeniería de software a pequeñas organizaciones, principalmente en la modernización de sistemas existentes.",
      "Me interesa especialmente la intersección entre IA, software y negocio: construir sistemas que resuelvan problemas concretos, que se puedan medir y que las personas incorporen a su trabajo diario.",
    ],
    en: [
      "I'm a computer engineer from the University of Girona (2022–2026), with my final-year project graded with honours. My work combines software development, systems architecture and applied artificial intelligence.",
      "My first professional experience was at SATB2C in summer 2025, as a full-stack developer intern. I modernised the company's main portal, optimised SQL queries, integrated the OpenAI API into internal processes and implemented the push notification system. It was also my first direct contact with clients, to whom I presented the new features.",
      "During my final year I built Capital Tracker, a personal finance and investment management platform now available on the web and on Google Play. The project covers a product's full lifecycle: data modelling, web and mobile applications, subscriptions, an AI layer over the user's data, and production deployment. At the same time, I worked at the university automating administrative processes across three units, affecting more than 80 positions.",
      "Since July 2026 I've worked at AETECH as a Software Engineer and AI Solutions Architect. I'm responsible for the company's AI initiatives across their full lifecycle: identifying use cases, architecture, development, deployment, user training and continuous improvement. Alongside this, I provide software engineering services to small organisations, mainly modernising existing systems.",
      "I'm particularly interested in the intersection of AI, software and business: building systems that solve concrete problems, can be measured, and become part of people's daily work.",
    ],
  } satisfies L<string[]>,
  // Ordenat del més recent al més antic.
  timeline: [
    {
      kind: "work",
      current: true,
      period: { ca: "Jul. 2026 – actualitat", es: "Jul. 2026 – actualidad", en: "Jul 2026 – present" },
      role: {
        ca: "Software Engineer · AI Solutions Architect",
        es: "Software Engineer · AI Solutions Architect",
        en: "Software Engineer · AI Solutions Architect",
      },
      place: "AETECH",
      text: {
        ca: "Responsable de les solucions d'intel·ligència artificial de l'empresa, aplicades a entorns industrials d'automatització i control, en tot el seu cicle de vida: identificació d'oportunitats, disseny d'arquitectura, desenvolupament, proves, desplegament, presentació interna, formació d'usuaris i iteració contínua. El projecte principal és la plataforma interna d'IA.",
        es: "Responsable de las soluciones de inteligencia artificial de la empresa, aplicadas a entornos industriales de automatización y control, en todo su ciclo de vida: identificación de oportunidades, diseño de arquitectura, desarrollo, pruebas, despliegue, presentación interna, formación de usuarios e iteración continua. El proyecto principal es la plataforma interna de IA.",
        en: "Responsible for the company's artificial intelligence solutions, applied to industrial automation and control environments, across their full lifecycle: identifying opportunities, architecture design, development, testing, deployment, internal presentation, user training and continuous iteration. The main project is the internal AI platform.",
      },
    },
    {
      kind: "work",
      current: true,
      period: { ca: "Jun. 2026 – actualitat", es: "Jun. 2026 – actualidad", en: "Jun 2026 – present" },
      role: { ca: "Enginyer de software", es: "Ingeniero de software", en: "Software Engineer" },
      place: "Freelance",
      text: {
        ca: "Serveis d'enginyeria de software en remot per a petites organitzacions: desenvolupament i manteniment de bases de dades en Microsoft Access (VBA, formularis, consultes i informes) i modernització de llocs web en Drupal, incloent-hi frontend, estructura de continguts, allotjament i desplegament.",
        es: "Servicios de ingeniería de software en remoto para pequeñas organizaciones: desarrollo y mantenimiento de bases de datos en Microsoft Access (VBA, formularios, consultas e informes) y modernización de sitios web en Drupal, incluyendo frontend, estructura de contenidos, alojamiento y despliegue.",
        en: "Remote software engineering services for small organisations: development and maintenance of Microsoft Access databases (VBA, forms, queries and reports) and modernisation of Drupal websites, including frontend, content structure, hosting and deployment.",
      },
    },
    {
      kind: "work",
      period: { ca: "Feb. – jul. 2026", es: "Feb. – jul. 2026", en: "Feb – Jul 2026" },
      role: { ca: "Optimització i automatització de processos", es: "Optimización y automatización de procesos", en: "Process optimisation and automation" },
      place: "Universitat de Girona",
      text: {
        ca: "Automatització de processos administratius per reduir tasques manuals a la Unitat de Salut Laboral, la Facultat d'Educació i Psicologia i l'Àrea Acadèmica de la Facultat de Ciències, amb impacte en més de 80 llocs de treball.",
        es: "Automatización de procesos administrativos para reducir tareas manuales en la Unidad de Salud Laboral, la Facultad de Educación y Psicología y el Área Académica de la Facultad de Ciencias, con impacto en más de 80 puestos de trabajo.",
        en: "Automation of administrative processes to reduce manual work in the Occupational Health Unit, the Faculty of Education and Psychology and the Academic Affairs Area of the Faculty of Sciences, affecting more than 80 positions.",
      },
    },
    {
      kind: "work",
      current: true,
      period: { ca: "Nov. 2025 – actualitat", es: "Nov. 2025 – actualidad", en: "Nov 2025 – present" },
      role: { ca: "Fundador", es: "Fundador", en: "Founder" },
      place: "Capital Tracker",
      text: {
        ca: "Plataforma SaaS de finances personals i inversions amb IA integrada, desenvolupada inicialment com a treball de final de grau. Publicada en web i a Google Play, en desenvolupament continu.",
        es: "Plataforma SaaS de finanzas personales e inversiones con IA integrada, desarrollada inicialmente como trabajo de fin de grado. Publicada en web y en Google Play, en desarrollo continuo.",
        en: "SaaS platform for personal finance and investments with built-in AI, originally developed as my final-year project. Live on the web and on Google Play, under continuous development.",
      },
    },
    {
      kind: "work",
      period: { ca: "Jun. – ago. 2025", es: "Jun. – ago. 2025", en: "Jun – Aug 2025" },
      role: { ca: "Full-stack developer (pràctiques)", es: "Full-stack developer (prácticas)", en: "Full-stack developer (internship)" },
      place: "SATB2C",
      text: {
        ca: "Modernització del portal principal de l'empresa mitjançant migració de codi PHP i optimització de consultes SQL. Integració de l'API d'OpenAI per automatitzar processos interns, implantació del sistema de notificacions push, desenvolupament de webs corporatives i presentació de les noves funcionalitats a 8 clients.",
        es: "Modernización del portal principal de la empresa mediante migración de código PHP y optimización de consultas SQL. Integración de la API de OpenAI para automatizar procesos internos, implantación del sistema de notificaciones push, desarrollo de webs corporativas y presentación de las nuevas funcionalidades a 8 clientes.",
        en: "Modernisation of the company's main portal through PHP code migration and SQL query optimisation. OpenAI API integration to automate internal processes, push notification system implementation, corporate website development, and presentation of new features to 8 clients.",
      },
    },
    {
      kind: "education",
      period: { ca: "2022 – 2026", es: "2022 – 2026", en: "2022 – 2026" },
      role: { ca: "Grau en Enginyeria Informàtica", es: "Grado en Ingeniería Informática", en: "BSc in Computer Engineering" },
      place: "Universitat de Girona",
      text: {
        ca: "Formació en programació, bases de dades, enginyeria del software, sistemes, xarxes i arquitectura de computadors. Mitjana de notable i treball de final de grau (Capital Tracker) qualificat amb matrícula d'honor. Estudiant voluntari de la universitat entre 2023 i 2026.",
        es: "Formación en programación, bases de datos, ingeniería del software, sistemas, redes y arquitectura de computadores. Media de notable y trabajo de fin de grado (Capital Tracker) calificado con matrícula de honor. Estudiante voluntario de la universidad entre 2023 y 2026.",
        en: "Training in programming, databases, software engineering, systems, networks and computer architecture. Merit average, with the final-year project (Capital Tracker) graded with honours. Student volunteer at the university from 2023 to 2026.",
      },
    },
    {
      kind: "education",
      period: { ca: "2020 – 2022", es: "2020 – 2022", en: "2020 – 2022" },
      role: { ca: "Batxillerat tecnològic", es: "Bachillerato tecnológico", en: "Baccalaureate, technology track" },
      place: "Montjuïc Girona International School",
      text: {
        ca: "Formació preuniversitària en la modalitat tecnològica.",
        es: "Formación preuniversitaria en la modalidad tecnológica.",
        en: "Pre-university education in the technology track.",
      },
    },
  ] satisfies TimelineEntry[],
};

// Franja en moviment abans del contacte: paraules clau del perfil.
export const marquee: L<string[]> = {
  ca: ["IA aplicada", "Enginyeria de software", "Automatització", "Sistemes amb LLMs", "Dades", "Producte"],
  es: ["IA aplicada", "Ingeniería de software", "Automatización", "Sistemas con LLMs", "Datos", "Producto"],
  en: ["Applied AI", "Software engineering", "Automation", "LLM systems", "Data", "Product"],
};

export const contact = {
  heading: {
    ca: { lead: "Parlem de", accent: "projectes" },
    es: { lead: "Hablemos de", accent: "proyectos" },
    en: { lead: "Let's talk about", accent: "projects" },
  } satisfies L<{ lead: string; accent: string }>,
  lead: {
    ca: "Per a propostes de col·laboració, oportunitats professionals o consultes sobre qualsevol dels projectes, podeu contactar-me per correu electrònic o a través de LinkedIn.",
    es: "Para propuestas de colaboración, oportunidades profesionales o consultas sobre cualquiera de los proyectos, podéis contactarme por correo electrónico o a través de LinkedIn.",
    en: "For collaboration proposals, professional opportunities or questions about any of the projects, you can reach me by email or through LinkedIn.",
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
    ca: "En síntesi",
    es: "En síntesis",
    en: "In short",
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
  nextProject: { ca: "Següent projecte", es: "Siguiente proyecto", en: "Next project" } satisfies L,
  promoVideo: { ca: "Vídeo de presentació", es: "Vídeo de presentación", en: "Presentation video" } satisfies L,
  projectLabel: { ca: "Projecte", es: "Proyecto", en: "Project" } satisfies L,
  specYear: { ca: "Any", es: "Año", en: "Year" } satisfies L,
  specContext: { ca: "Context", es: "Contexto", en: "Context" } satisfies L,
  specLinks: { ca: "Enllaços", es: "Enlaces", en: "Links" } satisfies L,
  galleryOpen: { ca: "Ampliar", es: "Ampliar", en: "Enlarge" } satisfies L,
  galleryClose: { ca: "Tancar", es: "Cerrar", en: "Close" } satisfies L,
  galleryPrev: { ca: "Anterior", es: "Anterior", en: "Previous" } satisfies L,
  galleryNext: { ca: "Següent", es: "Siguiente", en: "Next" } satisfies L,
  diagramSources: { ca: "Fonts", es: "Fuentes", en: "Sources" } satisfies L,
  diagramCore: { ca: "Plataforma", es: "Plataforma", en: "Platform" } satisfies L,
  diagramOutputs: { ca: "Ús", es: "Uso", en: "Use" } satisfies L,
  rights: {
    ca: "Dissenyat i desenvolupat des de zero.",
    es: "Diseñado y desarrollado desde cero.",
    en: "Designed and built from scratch.",
  } satisfies L,
};
