import type { L } from "../i18n/LanguageProvider";

/**
 * Projectes. Cada fitxa descriu el context, les decisions tècniques,
 * els resultats i què se n'ha après, amb un registre formal i sense inflar res.
 *
 * REVISAR: corregeix-hi tot el que no s'ajusti a la realitat.
 */

export type ProjectSection = {
  id: string;
  title: L;
  /** Markdown. */
  content?: L;
  accordion?: { title: L; content: L }[];
};

/**
 * Peça de la galeria: imatge o vídeo MP4 (els GIF pesen massa).
 * `fit: "cover"` omple el llenç (escenes, captures promocionals);
 * `"contain"` (per defecte) la mostra sencera i enmarcada (captures, plànols).
 */
export type Media = {
  src: string;
  /** Fotograma fix dels vídeos: pòster i miniatura del llistat. */
  poster?: string;
  fit?: "cover" | "contain";
  /** Captures d'un mòbil amb el marc: cantonades arrodonides com el telèfon. */
  frame?: "phone";
};

export type Project = {
  slug: string;
  title: L;
  subtitle: L;
  description: L;
  /** Una línia: síntesi del projecte. */
  demonstrates: L;
  context: L;
  year: string;
  tags: string[];
  /**
   * Miniatura del llistat. Si no s'indica, s'usa el pòster (o la imatge)
   * de `images[0]`: sempre estàtica, perquè el llistat no carregui vídeos.
   */
  cover?: string;
  /**
   * Opcional: hi ha projectes interns dels quals no es poden publicar captures.
   * Sense imatges, el llistat i la fitxa ho indiquen en lloc de deixar un forat.
   */
  images?: [Media, Media, Media];
  /** Vídeo de presentació amb so i controls, a sobre de la galeria. */
  video?: { src: string; poster?: string };
  /** Enllaços públics del projecte, a la fitxa tècnica de la capçalera. */
  links?: { label: string; href: string }[];
  sections: ProjectSection[];
  /** Els destacats es mostren en gran al llistat, amb xifres clau. */
  featured?: boolean;
  /** Xifres clau del destacat: valor curt i etiqueta. Màxim tres. */
  highlights?: { value: string; label: L }[];
  /**
   * Esquema del sistema per als projectes sense captures publicables:
   * fonts d'entrada, nucli i sortides.
   */
  diagram?: { inputs: L<string[]>; core: L<string[]>; outputs: L<string[]> };
  /** Els esborranys no surten al llistat fins que els treus la marca. */
  draft?: boolean;
};

export const projects: Project[] = [
  {
    slug: "plataforma-ia-aetech",
    title: {
      ca: "Plataforma interna d'IA d'AETECH",
      es: "Plataforma interna de IA de AETECH",
      en: "AETECH internal AI platform",
    },
    subtitle: {
      ca: "Plataforma autoallotjada que permet consultar en llenguatge natural anys d'incidències i documentació tècnica, amb agents integrats en les eines de treball de l'empresa.",
      es: "Plataforma autoalojada que permite consultar en lenguaje natural años de incidencias y documentación técnica, con agentes integrados en las herramientas de trabajo de la empresa.",
      en: "A self-hosted platform for querying years of incident history and technical documentation in natural language, with agents integrated into the company's working tools.",
    },
    description: {
      ca: "Des del juliol de 2026 soc responsable del disseny, el desenvolupament i el manteniment de la plataforma interna d'intel·ligència artificial d'AETECH, així com de la seva adopció a l'organització. La plataforma s'executa íntegrament dins de la infraestructura de l'empresa i posa a disposició dels equips tècnics el coneixement acumulat en incidències, informes i documentació, sense que cap dada surti de l'organització.",
      es: "Desde julio de 2026 soy responsable del diseño, el desarrollo y el mantenimiento de la plataforma interna de inteligencia artificial de AETECH, así como de su adopción en la organización. La plataforma se ejecuta íntegramente dentro de la infraestructura de la empresa y pone a disposición de los equipos técnicos el conocimiento acumulado en incidencias, informes y documentación, sin que ningún dato salga de la organización.",
      en: "Since July 2026 I've been responsible for designing, building and maintaining AETECH's internal artificial intelligence platform, as well as for its adoption across the organisation. The platform runs entirely within the company's infrastructure and gives technical teams access to the knowledge accumulated in incidents, reports and documentation, without any data leaving the organisation.",
    },
    demonstrates: {
      ca: "RAG en producció amb avaluació sobre consultes reals, agents amb eines acotades i integració amb sistemes existents",
      es: "RAG en producción con evaluación sobre consultas reales, agentes con herramientas acotadas e integración con sistemas existentes",
      en: "Production RAG evaluated on real queries, agents with bounded tools, and integration with existing systems",
    },
    context: { ca: "AETECH", es: "AETECH", en: "AETECH" },
    year: "2026",
    featured: true,
    highlights: [
      {
        value: "80%",
        label: { ca: "Material rellevant recuperat (abans 63%)", es: "Material relevante recuperado (antes 63%)", en: "Relevant material retrieved (was 63%)" },
      },
      {
        value: "30×",
        label: { ca: "Menys memòria per sessió", es: "Menos memoria por sesión", en: "Less memory per session" },
      },
      {
        value: "300%",
        label: { ca: "Millora màxima d'eficiència en tasques", es: "Mejora máxima de eficiencia en tareas", en: "Peak task efficiency gain" },
      },
    ],
    diagram: {
      inputs: {
        ca: ["Documentació tècnica", "Incidències", "Jira", "Microsoft 365", "TIA Portal"],
        es: ["Documentación técnica", "Incidencias", "Jira", "Microsoft 365", "TIA Portal"],
        en: ["Technical docs", "Incidents", "Jira", "Microsoft 365", "TIA Portal"],
      },
      core: {
        ca: ["Recuperació híbrida", "Reranking", "Agents amb eines", "Multimodal", "MCP"],
        es: ["Recuperación híbrida", "Reranking", "Agentes con herramientas", "Multimodal", "MCP"],
        en: ["Hybrid retrieval", "Reranking", "Tool-using agents", "Multimodal", "MCP"],
      },
      outputs: {
        ca: ["Assistents per àmbit", "Equips tècnics"],
        es: ["Asistentes por ámbito", "Equipos técnicos"],
        en: ["Domain assistants", "Technical teams"],
      },
    },
    tags: [
      "RAG",
      "Recuperació híbrida",
      "Reranking",
      "MCP",
      "Multimodal",
      "TIA Portal Openness",
      "Siemens",
      "Jira",
      "Microsoft 365",
      "Self-hosted",
    ],
    // Plataforma interna: sense captures publicables.
    sections: [
      {
        id: "visio-general",
        title: { ca: "Context", es: "Contexto", en: "Context" },
        content: {
          ca: "AETECH acumula anys d'incidències, informes i documentació tècnica distribuïts entre sistemes que no estan connectats entre si. Davant d'una avaria, la solució sovint ja està documentada, però localitzar-la requereix més temps que resoldre-la de nou.\n\nL'objectiu de la plataforma és que qualsevol tècnic pugui formular una consulta en llenguatge natural i obtenir una resposta fonamentada en la documentació de l'empresa, amb referència a les fonts. Com que bona part d'aquest material és documentació de clients, el desplegament autoallotjat és un requisit de partida i no una opció.",
          es: "AETECH acumula años de incidencias, informes y documentación técnica distribuidos entre sistemas que no están conectados entre sí. Ante una avería, la solución a menudo ya está documentada, pero localizarla requiere más tiempo que resolverla de nuevo.\n\nEl objetivo de la plataforma es que cualquier técnico pueda formular una consulta en lenguaje natural y obtener una respuesta fundamentada en la documentación de la empresa, con referencia a las fuentes. Como buena parte de ese material es documentación de clientes, el despliegue autoalojado es un requisito de partida y no una opción.",
          en: "AETECH has accumulated years of incidents, reports and technical documentation spread across systems that aren't connected to each other. When a fault occurs, the solution is often already documented, but finding it takes longer than solving it again.\n\nThe platform's goal is for any technician to ask a question in natural language and get an answer grounded in the company's documentation, with references to the sources. Since much of that material is client documentation, self-hosted deployment is a starting requirement rather than an option.",
        },
      },
      {
        id: "arquitectura",
        title: { ca: "Arquitectura", es: "Arquitectura", en: "Architecture" },
        accordion: [
          {
            title: {
              ca: "Autoallotjament i aïllament per usuari",
              es: "Autoalojamiento y aislamiento por usuario",
              en: "Self-hosting and per-user isolation",
            },
            content: {
              ca: "Cap document ni cap consulta surt de la infraestructura d'AETECH. L'aïllament entre usuaris s'implementa a nivell de sistema operatiu, no només a la capa d'aplicació: cada usuari treballa en un entorn separat. En un sistema que indexa documentació de diferents clients, la separació ha de ser estructural i no pot dependre de l'absència d'errors en el codi.",
              es: "Ningún documento ni ninguna consulta sale de la infraestructura de AETECH. El aislamiento entre usuarios se implementa a nivel de sistema operativo, no solo en la capa de aplicación: cada usuario trabaja en un entorno separado. En un sistema que indexa documentación de distintos clientes, la separación debe ser estructural y no puede depender de la ausencia de errores en el código.",
              en: "No document or query leaves AETECH's infrastructure. User isolation is implemented at the operating-system level, not only in the application layer: each user works in a separate environment. In a system that indexes documentation from different clients, separation has to be structural and cannot depend on the code being free of bugs.",
            },
          },
          {
            title: {
              ca: "Assistents especialitzats per àmbit",
              es: "Asistentes especializados por ámbito",
              en: "Domain-specific assistants",
            },
            content: {
              ca: "La plataforma s'organitza en assistents per àmbit, cadascun amb el seu conjunt de fonts i d'eines, en lloc d'un únic assistent generalista. Aquest disseny millora la precisió de les respostes i permet definir de manera explícita quin coneixement i quines accions corresponen a cada assistent.",
              es: "La plataforma se organiza en asistentes por ámbito, cada uno con su conjunto de fuentes y de herramientas, en lugar de un único asistente generalista. Este diseño mejora la precisión de las respuestas y permite definir de forma explícita qué conocimiento y qué acciones corresponden a cada asistente.",
              en: "The platform is organised into domain-specific assistants, each with its own set of sources and tools, rather than a single general-purpose assistant. This design improves answer precision and makes it possible to define explicitly which knowledge and which actions belong to each assistant.",
            },
          },
          {
            title: {
              ca: "RAG amb recuperació híbrida",
              es: "RAG con recuperación híbrida",
              en: "RAG with hybrid retrieval",
            },
            content: {
              ca: "Per a la documentació no estructurada he implementat una arquitectura RAG sobre una base de dades vectorial amb recuperació híbrida: cerca semàntica per captar la intenció de la consulta, cerca lèxica per no perdre codis d'error, referències i noms de components, i una fase de reordenació que determina quins fragments arriben finalment al model.\n\nLa combinació respon a un problema observat en l'ús real: la cerca semàntica falla amb identificadors exactes, i la lèxica no reconeix consultes formulades amb una terminologia diferent de la dels manuals.",
              es: "Para la documentación no estructurada he implementado una arquitectura RAG sobre una base de datos vectorial con recuperación híbrida: búsqueda semántica para captar la intención de la consulta, búsqueda léxica para no perder códigos de error, referencias y nombres de componentes, y una fase de reordenación que determina qué fragmentos llegan finalmente al modelo.\n\nLa combinación responde a un problema observado en el uso real: la búsqueda semántica falla con identificadores exactos, y la léxica no reconoce consultas formuladas con una terminología distinta a la de los manuales.",
              en: "For unstructured documentation I implemented a RAG architecture over a vector database with hybrid retrieval: semantic search to capture the intent of the query, lexical search so error codes, part references and component names aren't lost, and a reranking stage that decides which passages finally reach the model.\n\nThe combination addresses a problem observed in real use: semantic search fails on exact identifiers, while lexical search doesn't recognise queries phrased in terminology different from the manuals.",
            },
          },
          {
            title: {
              ca: "Diagnòstic multimodal",
              es: "Diagnóstico multimodal",
              en: "Multimodal diagnosis",
            },
            content: {
              ca: "Els tècnics sovint es troben davant d'una pantalla d'HMI amb una alarma, d'un quadre elèctric o d'una placa de característiques. La plataforma admet fotografies com a entrada i les utilitza per orientar el diagnòstic, creuant la informació visual amb l'historial d'incidències i la documentació. Això redueix la necessitat de descriure el problema per escrit en situacions on no és pràctic fer-ho.",
              es: "Los técnicos a menudo se encuentran ante una pantalla de HMI con una alarma, un cuadro eléctrico o una placa de características. La plataforma admite fotografías como entrada y las utiliza para orientar el diagnóstico, cruzando la información visual con el historial de incidencias y la documentación. Esto reduce la necesidad de describir el problema por escrito en situaciones donde no es práctico hacerlo.",
              en: "Technicians are often facing an HMI screen showing an alarm, an electrical cabinet or a nameplate. The platform accepts photographs as input and uses them to guide the diagnosis, cross-referencing the visual information with incident history and documentation. This reduces the need to describe the problem in writing in situations where doing so isn't practical.",
            },
          },
          {
            title: {
              ca: "Connectors MCP amb Jira i Microsoft 365",
              es: "Conectores MCP con Jira y Microsoft 365",
              en: "MCP connectors for Jira and Microsoft 365",
            },
            content: {
              ca: "Mitjançant connectors MCP, els assistents accedeixen directament a tiquets de Jira i a correu i documents de Microsoft 365, sense que l'usuari n'hagi de copiar el contingut. Cada connector té definits de manera explícita els permisos de lectura i d'escriptura.",
              es: "Mediante conectores MCP, los asistentes acceden directamente a tickets de Jira y a correo y documentos de Microsoft 365, sin que el usuario tenga que copiar su contenido. Cada conector tiene definidos de forma explícita los permisos de lectura y de escritura.",
              en: "Through MCP connectors, the assistants access Jira tickets and Microsoft 365 mail and documents directly, without the user having to copy their content. Each connector has explicitly defined read and write permissions.",
            },
          },
          {
            title: {
              ca: "Agent d'integració amb TIA Portal",
              es: "Agente de integración con TIA Portal",
              en: "TIA Portal integration agent",
            },
            content: {
              ca: "He desenvolupat un agent que, a través de l'API Openness de Siemens, llegeix i modifica projectes de PLC des de la interfície de xat: codi SCL, taules de variables, configuració de maquinari i xarxa PROFINET.\n\nAtès que una consulta pot traduir-se en un canvi real sobre un projecte d'automatització, el disseny prioritza la definició de límits explícits sobre allò que l'agent pot modificar i la traçabilitat completa de cada acció executada.",
              es: "He desarrollado un agente que, a través de la API Openness de Siemens, lee y modifica proyectos de PLC desde la interfaz de chat: código SCL, tablas de variables, configuración de hardware y red PROFINET.\n\nDado que una consulta puede traducirse en un cambio real sobre un proyecto de automatización, el diseño prioriza la definición de límites explícitos sobre lo que el agente puede modificar y la trazabilidad completa de cada acción ejecutada.",
              en: "I developed an agent that, through Siemens' Openness API, reads and modifies PLC projects from the chat interface: SCL code, tag tables, hardware configuration and PROFINET networking.\n\nSince a query can translate into a real change to an automation project, the design prioritises explicit limits on what the agent may modify and full traceability of every action it executes.",
            },
          },
        ],
      },
      {
        id: "mesura",
        title: { ca: "Avaluació i resultats", es: "Evaluación y resultados", en: "Evaluation and results" },
        content: {
          ca: "Per avaluar la plataforma he construït un conjunt de proves a partir de consultes reals dels tècnics, que s'utilitza per validar cada canvi abans de desplegar-lo.\n\nAmb aquest procés, la proporció de material rellevant recuperat ha passat del **63% al 80%**, i el consum de memòria per sessió s'ha reduït **30 vegades**. Aquesta segona millora és la que fa viable l'ús diari de la plataforma en termes de latència i de cost.",
          es: "Para evaluar la plataforma he construido un conjunto de pruebas a partir de consultas reales de los técnicos, que se utiliza para validar cada cambio antes de desplegarlo.\n\nCon este proceso, la proporción de material relevante recuperado ha pasado del **63% al 80%**, y el consumo de memoria por sesión se ha reducido **30 veces**. Esta segunda mejora es la que hace viable el uso diario de la plataforma en términos de latencia y de coste.",
          en: "To evaluate the platform I built a test set from real technician queries, which is used to validate every change before it's deployed.\n\nThrough this process, the share of relevant material retrieved went from **63% to 80%**, and memory consumption per session dropped **30-fold**. That second improvement is what makes daily use of the platform viable in terms of latency and cost.",
        },
      },
      {
        id: "adopcio",
        title: { ca: "Adopció a l'organització", es: "Adopción en la organización", en: "Adoption across the organisation" },
        content: {
          ca: "L'encàrrec inclou liderar l'adopció de la plataforma a tota l'organització: analitzar el funcionament de cada equip, definir quins assistents li són útils, presentar la plataforma, formar els usuaris i recollir de manera sistemàtica els casos en què no dona una resposta adequada.\n\nAquests casos determinen les prioritats de millora i alimenten el conjunt d'avaluació, de manera que el sistema evoluciona a partir de l'ús real i no de suposicions.",
          es: "El encargo incluye liderar la adopción de la plataforma en toda la organización: analizar el funcionamiento de cada equipo, definir qué asistentes le resultan útiles, presentar la plataforma, formar a los usuarios y recoger de forma sistemática los casos en que no da una respuesta adecuada.\n\nEsos casos determinan las prioridades de mejora y alimentan el conjunto de evaluación, de modo que el sistema evoluciona a partir del uso real y no de suposiciones.",
          en: "The remit includes leading the platform's adoption across the organisation: analysing how each team works, defining which assistants are useful to them, presenting the platform, training users and systematically collecting the cases where it doesn't give an adequate answer.\n\nThose cases set the improvement priorities and feed the evaluation set, so the system evolves from real usage rather than assumptions.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          // REVISAR: concreta aquí les eines exactes (quina base vectorial, quins
          // models, quin runtime) si les vols fer públiques.
          ca: "- **Arquitectura RAG**: base de dades vectorial amb recuperació híbrida (semàntica i lèxica) i fase de reordenació.\n- **Models multimodals**: diagnòstic a partir de fotografies d'equips, quadres i plaques de característiques.\n- **MCP**: connectors propis cap a Jira i Microsoft 365.\n- **Siemens Openness API**: agent de lectura i modificació de projectes de TIA Portal (SCL, taules de variables, maquinari, PROFINET).\n- **Aïllament a nivell de sistema operatiu**: entorns separats per usuari.\n- **Desplegament autoallotjat**: tota la plataforma dins de la infraestructura d'AETECH.",
          es: "- **Arquitectura RAG**: base de datos vectorial con recuperación híbrida (semántica y léxica) y fase de reordenación.\n- **Modelos multimodales**: diagnóstico a partir de fotografías de equipos, cuadros y placas de características.\n- **MCP**: conectores propios hacia Jira y Microsoft 365.\n- **Siemens Openness API**: agente de lectura y modificación de proyectos de TIA Portal (SCL, tablas de variables, hardware, PROFINET).\n- **Aislamiento a nivel de sistema operativo**: entornos separados por usuario.\n- **Despliegue autoalojado**: toda la plataforma dentro de la infraestructura de AETECH.",
          en: "- **RAG architecture**: vector database with hybrid (semantic and lexical) retrieval and a reranking stage.\n- **Multimodal models**: diagnosis from photographs of equipment, cabinets and nameplates.\n- **MCP**: custom connectors to Jira and Microsoft 365.\n- **Siemens Openness API**: agent that reads and modifies TIA Portal projects (SCL, tag tables, hardware, PROFINET).\n- **OS-level isolation**: separate environments per user.\n- **Self-hosted deployment**: the entire platform within AETECH's infrastructure.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "La plataforma està en ús i en evolució contínua. Les línies de treball actuals són ampliar la cobertura documental, incorporar més consultes reals al conjunt d'avaluació i ampliar les capacitats de l'agent de TIA Portal.",
          es: "La plataforma está en uso y en evolución continua. Las líneas de trabajo actuales son ampliar la cobertura documental, incorporar más consultas reales al conjunto de evaluación y ampliar las capacidades del agente de TIA Portal.",
          en: "The platform is in use and under continuous development. Current lines of work are widening documentation coverage, adding more real queries to the evaluation set and extending the TIA Portal agent's capabilities.",
        },
      },
    ],
  },

  {
    // L'slug es manté per no trencar enllaços antics.
    slug: "finantial-tracker",
    title: {
      ca: "Capital Tracker",
      es: "Capital Tracker",
      en: "Capital Tracker",
    },
    subtitle: {
      ca: "Plataforma de finances personals i inversions amb un assistent d'IA integrat. Treball de final de grau qualificat amb matrícula d'honor, publicat en web i a Google Play.",
      es: "Plataforma de finanzas personales e inversiones con un asistente de IA integrado. Trabajo de fin de grado calificado con matrícula de honor, publicado en web y en Google Play.",
      en: "A personal finance and investment platform with a built-in AI assistant. Final-year project graded with honours, live on the web and on Google Play.",
    },
    description: {
      ca: "Capital Tracker centralitza comptes, targetes, moviments, pressupostos, objectius d'estalvi, deutes i inversions en una sola plataforma, i hi afegeix Capital AI, un assistent que treballa directament sobre les dades de l'usuari. El vaig desenvolupar entre el novembre de 2025 i el juny de 2026 com a treball de final de grau a la Universitat de Girona (unes 1.000 hores, qualificat amb matrícula d'honor) i el continuo mantenint: avui té una versió web i una aplicació Android a Google Play, disponibles en set idiomes.",
      es: "Capital Tracker centraliza cuentas, tarjetas, movimientos, presupuestos, objetivos de ahorro, deudas e inversiones en una sola plataforma, y añade Capital AI, un asistente que trabaja directamente sobre los datos del usuario. Lo desarrollé entre noviembre de 2025 y junio de 2026 como trabajo de fin de grado en la Universitat de Girona (unas 1.000 horas, calificado con matrícula de honor) y lo sigo manteniendo: hoy tiene una versión web y una aplicación Android en Google Play, disponibles en siete idiomas.",
      en: "Capital Tracker brings accounts, cards, transactions, budgets, savings goals, debts and investments into a single platform, and adds Capital AI, an assistant that works directly on the user's data. I built it between November 2025 and June 2026 as my final-year project at the University of Girona (around 1,000 hours, graded with honours) and keep maintaining it: today it has a web version and an Android app on Google Play, available in seven languages.",
    },
    demonstrates: {
      ca: "Desenvolupament complet d'un producte en producció: arquitectura, dades, IA, pagaments i publicació",
      es: "Desarrollo completo de un producto en producción: arquitectura, datos, IA, pagos y publicación",
      en: "End-to-end development of a product in production: architecture, data, AI, payments and release",
    },
    context: { ca: "TFG · Producte propi", es: "TFG · Producto propio", en: "Final-year project · Own product" },
    year: "2026",
    featured: true,
    highlights: [
      {
        value: "MH",
        label: { ca: "Matrícula d'honor al TFG", es: "Matrícula de honor en el TFG", en: "Final-year project with honours" },
      },
      {
        value: "60",
        label: { ca: "Taules amb RLS i 173 polítiques d'accés", es: "Tablas con RLS y 173 políticas de acceso", en: "Tables with RLS and 173 access policies" },
      },
      {
        value: "1.300+",
        label: { ca: "Proves automatitzades", es: "Pruebas automatizadas", en: "Automated tests" },
      },
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Capacitor",
      "Claude",
      "MCP",
      "Stripe",
      "RevenueCat",
      "Vitest",
    ],
    links: [
      { label: "capitaltrackerapp.com", href: "https://www.capitaltrackerapp.com" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.capitaltrackerapp" },
    ],
    // Vídeo promocional més recent, en anglès (recomprimit per al web).
    video: {
      src: "/ProjectImages/CapitalTracker/promo-en.mp4",
      poster: "/ProjectImages/CapitalTracker/promo-en.jpg",
    },
    // Fotogrames del tràiler retallats a la finestra i al telèfon, sense el fons
    // promocional: es mostren sobre el llenç de la web, com la resta de captures.
    images: [
      { src: "/ProjectImages/CapitalTracker/dashboard.png" },
      { src: "/ProjectImages/CapitalTracker/mobile-dashboard.png", frame: "phone" },
      { src: "/ProjectImages/CapitalTracker/mobile-ai.png", frame: "phone" },
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Context", es: "Contexto", en: "Context" },
        content: {
          ca: "Les eines de finances personals existents acostumen a oferir moltes funcionalitats, però no una visió de conjunt: la informació queda repartida entre bancs, fulls de càlcul i aplicacions d'inversió. Capital Tracker parteix d'aquesta necessitat i té com a objectiu oferir una visió integrada i clara del patrimoni.\n\nEl projecte va començar com a treball de final de grau, *Desenvolupament d'una plataforma web per al seguiment i optimització de finances personals*, i ha continuat després de la defensa. Avui inclou comptes i targetes, moviments, pressupostos, objectius d'estalvi, deutes, inversions, finances compartides, banca oberta, alertes i Capital AI, en set idiomes (català, castellà, anglès, portuguès, francès, italià i alemany).\n\nDisponible a [capitaltrackerapp.com](https://www.capitaltrackerapp.com) i a [Google Play](https://play.google.com/store/apps/details?id=com.capitaltrackerapp).",
          es: "Las herramientas de finanzas personales existentes suelen ofrecer muchas funcionalidades, pero no una visión de conjunto: la información queda repartida entre bancos, hojas de cálculo y aplicaciones de inversión. Capital Tracker parte de esa necesidad y tiene como objetivo ofrecer una visión integrada y clara del patrimonio.\n\nEl proyecto empezó como trabajo de fin de grado, *Desenvolupament d'una plataforma web per al seguiment i optimització de finances personals*, y ha continuado después de la defensa. Hoy incluye cuentas y tarjetas, movimientos, presupuestos, objetivos de ahorro, deudas, inversiones, finanzas compartidas, banca abierta, alertas y Capital AI, en siete idiomas (catalán, castellano, inglés, portugués, francés, italiano y alemán).\n\nDisponible en [capitaltrackerapp.com](https://www.capitaltrackerapp.com) y en [Google Play](https://play.google.com/store/apps/details?id=com.capitaltrackerapp).",
          en: "Existing personal finance tools tend to offer many features but no overall picture: information stays scattered across banks, spreadsheets and investment apps. Capital Tracker starts from that need and aims to provide an integrated, clear view of one's finances.\n\nThe project began as my final-year project, *Development of a web platform for tracking and optimising personal finances*, and has continued since the defence. Today it covers accounts and cards, transactions, budgets, savings goals, debts, investments, shared finances, open banking, alerts and Capital AI, in seven languages (Catalan, Spanish, English, Portuguese, French, Italian and German).\n\nAvailable at [capitaltrackerapp.com](https://www.capitaltrackerapp.com) and on [Google Play](https://play.google.com/store/apps/details?id=com.capitaltrackerapp).",
        },
      },
      {
        id: "funcionalitats-clau",
        title: { ca: "Arquitectura i funcionalitats", es: "Arquitectura y funcionalidades", en: "Architecture and features" },
        accordion: [
          {
            title: {
              ca: "Una sola base de codi per a web i mòbil",
              es: "Una sola base de código para web y móvil",
              en: "One codebase for web and mobile",
            },
            content: {
              ca: "El projecte és un monorepo amb dues aplicacions Next.js i paquets compartits. La web es desplega a Vercel; l'aplicació mòbil és una exportació estàtica empaquetada amb Capacitor i publicada a Google Play. Totes les funcionalitats viuen en un paquet compartit, de manera que només canvia la navegació entre plataformes.\n\nLes lectures van directament a Supabase amb la sessió de l'usuari, sota les seves polítiques RLS; les escriptures passen per més de 120 rutes d'API. La sincronització entre dispositius es fa amb Supabase Realtime, que invalida la memòria cau de les consultes quan canvien les dades.",
              es: "El proyecto es un monorepo con dos aplicaciones Next.js y paquetes compartidos. La web se despliega en Vercel; la aplicación móvil es una exportación estática empaquetada con Capacitor y publicada en Google Play. Todas las funcionalidades viven en un paquete compartido, de modo que solo cambia la navegación entre plataformas.\n\nLas lecturas van directamente a Supabase con la sesión del usuario, bajo sus políticas RLS; las escrituras pasan por más de 120 rutas de API. La sincronización entre dispositivos se hace con Supabase Realtime, que invalida la caché de las consultas cuando cambian los datos.",
              en: "The project is a monorepo with two Next.js applications and shared packages. The web app is deployed on Vercel; the mobile app is a static export wrapped with Capacitor and published on Google Play. All features live in a shared package, so only navigation differs between platforms.\n\nReads go straight to Supabase with the user's session, under their RLS policies; writes go through more than 120 API routes. Cross-device sync uses Supabase Realtime, which invalidates the query cache whenever data changes.",
            },
          },
          {
            title: {
              ca: "Dades, seguretat i rendiment",
              es: "Datos, seguridad y rendimiento",
              en: "Data, security and performance",
            },
            content: {
              ca: "La base de dades PostgreSQL té 60 taules, totes amb Row Level Security i 173 polítiques d'accés; un disparador activa RLS automàticament en qualsevol taula nova. Els totals per categoria, compte i targeta es mantenen amb disparadors en el moment d'escriure, cosa que va reduir la càrrega del tauler de més de 800 ms a menys de 50 ms amb 2.000 moviments.\n\nTotes les xifres de l'aplicació surten d'una capa de *vistes de dades* compartida per les pantalles, el servidor i l'assistent d'IA, de manera que mai poden mostrar resultats diferents. L'accés es protegeix amb un PIN derivat amb PBKDF2 i desbloqueig biomètric al mòbil.",
              es: "La base de datos PostgreSQL tiene 60 tablas, todas con Row Level Security y 173 políticas de acceso; un disparador activa RLS automáticamente en cualquier tabla nueva. Los totales por categoría, cuenta y tarjeta se mantienen con disparadores en el momento de escribir, lo que redujo la carga del panel de más de 800 ms a menos de 50 ms con 2.000 movimientos.\n\nTodas las cifras de la aplicación salen de una capa de *vistas de datos* compartida por las pantallas, el servidor y el asistente de IA, de modo que nunca pueden mostrar resultados distintos. El acceso se protege con un PIN derivado con PBKDF2 y desbloqueo biométrico en el móvil.",
              en: "The PostgreSQL database has 60 tables, all with Row Level Security and 173 access policies; a trigger automatically enables RLS on any new table. Totals per category, account and card are maintained by triggers at write time, which cut dashboard load from over 800 ms to under 50 ms with 2,000 transactions.\n\nEvery figure in the app comes from a layer of *data views* shared by the screens, the server and the AI assistant, so they can never show different results. Access is protected by a PIN derived with PBKDF2 and biometric unlock on mobile.",
            },
          },
          {
            title: {
              ca: "Capital AI",
              es: "Capital AI",
              en: "Capital AI",
            },
            content: {
              ca: "Capital AI és un agent basat en models de Claude que pot consultar, crear i corregir dades de l'usuari en llenguatge natural: preguntar on van els diners, crear pressupostos a partir de l'historial, importar extractes o analitzar la concentració d'una cartera, amb gràfics i taules dins del mateix xat.\n\nCada conversa s'executa en un entorn aïllat i només accedeix a les dades a través d'un servidor MCP amb la sessió de l'usuari, sota les mateixes polítiques RLS que l'aplicació. No genera SQL lliure: disposa d'unes 140 eines amb esquemes validats, les xifres surten de les mateixes vistes de dades que les pantalles i cada escriptura queda registrada amb possibilitat de desfer-la.",
              es: "Capital AI es un agente basado en modelos de Claude que puede consultar, crear y corregir datos del usuario en lenguaje natural: preguntar adónde va el dinero, crear presupuestos a partir del historial, importar extractos o analizar la concentración de una cartera, con gráficos y tablas dentro del propio chat.\n\nCada conversación se ejecuta en un entorno aislado y solo accede a los datos a través de un servidor MCP con la sesión del usuario, bajo las mismas políticas RLS que la aplicación. No genera SQL libre: dispone de unas 140 herramientas con esquemas validados, las cifras salen de las mismas vistas de datos que las pantallas y cada escritura queda registrada con posibilidad de deshacerla.",
              en: "Capital AI is an agent built on Claude models that can query, create and fix the user's data in natural language: asking where the money goes, creating budgets from history, importing statements or analysing a portfolio's concentration, with charts and tables inside the chat itself.\n\nEach conversation runs in an isolated environment and only reaches data through an MCP server using the user's session, under the same RLS policies as the app. It never writes free-form SQL: it has around 140 tools with validated schemas, figures come from the same data views as the screens, and every write is logged and can be undone.",
            },
          },
          {
            title: {
              ca: "Importació intel·ligent",
              es: "Importación inteligente",
              en: "Smart import",
            },
            content: {
              ca: "Un únic flux d'importació accepta CSV, Excel, PDF i fotografies d'extractes, també des del menú de compartir d'Android. En fitxers tabulars, el model només dedueix l'estructura (fila de capçalera, columnes, conveni de signe, format de data) i és codi determinista qui llegeix les files. En PDF i fotografies, el model transcriu els moviments i el sistema verifica que la suma quadri amb els saldos inicial i final impresos.\n\nLa categorització automàtica i la lectura de tiquets utilitzen models d'OpenAI, i les regles apreses per comerç s'apliquen a les importacions següents.",
              es: "Un único flujo de importación acepta CSV, Excel, PDF y fotografías de extractos, también desde el menú de compartir de Android. En archivos tabulares, el modelo solo deduce la estructura (fila de cabecera, columnas, convención de signo, formato de fecha) y es código determinista quien lee las filas. En PDF y fotografías, el modelo transcribe los movimientos y el sistema verifica que la suma cuadre con los saldos inicial y final impresos.\n\nLa categorización automática y la lectura de tickets utilizan modelos de OpenAI, y las reglas aprendidas por comercio se aplican a las importaciones siguientes.",
              en: "A single import flow accepts CSV, Excel, PDF and photos of statements, including from Android's share menu. For tabular files, the model only infers the structure (header row, columns, sign convention, date format) and deterministic code reads the rows. For PDFs and photos, the model transcribes the transactions and the system checks that the sum matches the printed opening and closing balances.\n\nAutomatic categorisation and receipt reading use OpenAI models, and rules learned per merchant are applied to subsequent imports.",
            },
          },
          {
            title: {
              ca: "Mòdul d'inversions",
              es: "Módulo de inversiones",
              en: "Investments module",
            },
            content: {
              ca: "Ha estat la part de més complexitat del projecte. Un motor de reconstrucció calcula el valor de la cartera dia a dia a partir de les operacions, amb el preu i el tipus de canvi vigents en cada data (no els actuals), i marca explícitament els dies que no es poden valorar del tot. Suporta compres, vendes, dividends, *splits*, traspassos de fons i aportacions periòdiques, amb preus de Yahoo Finance o TwelveData i tipus de canvi del BCE.\n\nSobre aquesta base calcula rendibilitat (TWR i XIRR), volatilitat, ràtios de Sharpe i Sortino, caiguda màxima i comparació amb l'S&P 500, i genera un informe fiscal per a l'IRPF: FIFO per valor homogeni, diferiment en traspassos de fons, normes antiaplicació de pèrdues i dades per als models 720 i 721.",
              es: "Ha sido la parte de mayor complejidad del proyecto. Un motor de reconstrucción calcula el valor de la cartera día a día a partir de las operaciones, con el precio y el tipo de cambio vigentes en cada fecha (no los actuales), y marca explícitamente los días que no se pueden valorar del todo. Soporta compras, ventas, dividendos, *splits*, traspasos de fondos y aportaciones periódicas, con precios de Yahoo Finance o TwelveData y tipos de cambio del BCE.\n\nSobre esta base calcula rentabilidad (TWR y XIRR), volatilidad, ratios de Sharpe y Sortino, caída máxima y comparación con el S&P 500, y genera un informe fiscal para el IRPF: FIFO por valor homogéneo, diferimiento en traspasos de fondos, normas antiaplicación de pérdidas y datos para los modelos 720 y 721.",
              en: "This was the most complex part of the project. A reconstruction engine computes the portfolio's value day by day from its operations, using the price and exchange rate in force on each date (not today's), and explicitly flags days that can't be fully valued. It supports buys, sells, dividends, splits, fund switches and recurring contributions, with prices from Yahoo Finance or TwelveData and ECB exchange rates.\n\nOn top of that it computes returns (TWR and XIRR), volatility, Sharpe and Sortino ratios, maximum drawdown and comparison with the S&P 500, and generates a Spanish income-tax report: FIFO per homogeneous security, fund-switch deferral, anti-wash rules and data for forms 720 and 721.",
            },
          },
          {
            title: {
              ca: "Banca oberta i finances compartides",
              es: "Banca abierta y finanzas compartidas",
              en: "Open banking and shared finances",
            },
            content: {
              ca: "La connexió amb bancs es fa per PSD2 a través de TrueLayer, amb sincronització de moviments, revisió dels pendents i quotes de sincronització per pla. Les finances compartides permeten crear una llar amb rols de propietari i membre, convidar per correu, enllaç o codi, i alternar entre la vista personal i la compartida; l'accés compartit es controla també amb polítiques RLS.",
              es: "La conexión con bancos se hace por PSD2 a través de TrueLayer, con sincronización de movimientos, revisión de los pendientes y cuotas de sincronización por plan. Las finanzas compartidas permiten crear un hogar con roles de propietario y miembro, invitar por correo, enlace o código, y alternar entre la vista personal y la compartida; el acceso compartido se controla también con políticas RLS.",
              en: "Bank connections use PSD2 through TrueLayer, with transaction sync, review of pending items and per-plan sync quotas. Shared finances let users create a household with owner and member roles, invite by email, link or code, and switch between personal and shared views; shared access is also enforced with RLS policies.",
            },
          },
          {
            title: {
              ca: "Subscripcions a web i a Android",
              es: "Suscripciones en web y en Android",
              en: "Subscriptions on web and Android",
            },
            content: {
              ca: "Hi ha tres plans (Free, Plus i Pro). A la web els pagaments es gestionen amb Stripe i a Android amb Google Play Billing a través de RevenueCat; una taula única reflecteix l'estat de tots dos proveïdors a partir dels seus webhooks. En passar a un pla superior, el canvi es cobra immediatament amb prorrateig; en passar a un pla inferior, el canvi es programa per al final del període ja pagat.\n\nLa complexitat principal va ser definir el comportament correcte en cada escenari: pagaments pendents d'autenticació, canvis entre proveïdors o subscripcions amb pagaments fallits.",
              es: "Hay tres planes (Free, Plus y Pro). En la web los pagos se gestionan con Stripe y en Android con Google Play Billing a través de RevenueCat; una tabla única refleja el estado de ambos proveedores a partir de sus webhooks. Al pasar a un plan superior, el cambio se cobra inmediatamente con prorrateo; al pasar a un plan inferior, el cambio se programa para el final del periodo ya pagado.\n\nLa complejidad principal fue definir el comportamiento correcto en cada escenario: pagos pendientes de autenticación, cambios entre proveedores o suscripciones con pagos fallidos.",
              en: "There are three plans (Free, Plus and Pro). On the web, payments are handled with Stripe and on Android with Google Play Billing through RevenueCat; a single table mirrors the state of both providers from their webhooks. Upgrades are charged immediately with proration; downgrades are scheduled for the end of the period already paid.\n\nThe main complexity lay in defining the correct behaviour for each scenario: payments awaiting authentication, changes across providers, or subscriptions with failed payments.",
            },
          },
        ],
      },
      {
        id: "qualitat",
        title: { ca: "Qualitat i proves", es: "Calidad y pruebas", en: "Quality and testing" },
        content: {
          ca: "El projecte té més de 1.300 proves automatitzades amb Vitest, centrades en la lògica on un error té conseqüències: inversions, informe fiscal, deutes, pressupostos, importació i eines de l'assistent. L'esquema de la base de dades es documenta automàticament a partir de producció, i l'arquitectura de cada mòdul està descrita amb diagrames PlantUML.\n\nEn conjunt, són més de 1.400 fitxers de codi, 137 migracions de base de dades i més de 500 *commits* entre el desembre de 2025 i l'octubre de 2026.",
          es: "El proyecto tiene más de 1.300 pruebas automatizadas con Vitest, centradas en la lógica donde un error tiene consecuencias: inversiones, informe fiscal, deudas, presupuestos, importación y herramientas del asistente. El esquema de la base de datos se documenta automáticamente a partir de producción, y la arquitectura de cada módulo está descrita con diagramas PlantUML.\n\nEn conjunto, son más de 1.400 archivos de código, 137 migraciones de base de datos y más de 500 *commits* entre diciembre de 2025 y octubre de 2026.",
          en: "The project has more than 1,300 automated tests with Vitest, focused on logic where a bug has consequences: investments, the tax report, debts, budgets, import and the assistant's tools. The database schema is documented automatically from production, and each module's architecture is described with PlantUML diagrams.\n\nOverall, it adds up to more than 1,400 source files, 137 database migrations and over 500 commits between December 2025 and October 2026.",
        },
      },
      {
        id: "aprenentatges",
        title: { ca: "Aprenentatges", es: "Aprendizajes", en: "Takeaways" },
        content: {
          ca: "Capital Tracker m'ha aportat experiència en totes les fases d'un producte, incloses les que no són estrictament tècniques: priorització, gestió de l'abast, validació amb usuaris i publicació a botigues d'aplicacions.\n\nTambé ha consolidat un criteri que aplico a la resta de projectes. En una ocasió, l'assistent va calcular +406 € on la pantalla mostrava +516 €, perquè cadascun obtenia la xifra pel seu compte. La solució no va ser ajustar el model, sinó fer que tots dos llegissin de la mateixa font. En sistemes amb IA, la fiabilitat depèn sobretot de les dades i de l'arquitectura que hi ha al darrere.",
          es: "Capital Tracker me ha aportado experiencia en todas las fases de un producto, incluidas las que no son estrictamente técnicas: priorización, gestión del alcance, validación con usuarios y publicación en tiendas de aplicaciones.\n\nTambién ha consolidado un criterio que aplico al resto de proyectos. En una ocasión, el asistente calculó +406 € donde la pantalla mostraba +516 €, porque cada uno obtenía la cifra por su cuenta. La solución no fue ajustar el modelo, sino hacer que ambos leyeran de la misma fuente. En sistemas con IA, la fiabilidad depende sobre todo de los datos y de la arquitectura que hay detrás.",
          en: "Capital Tracker gave me experience across every phase of a product, including the ones that aren't strictly technical: prioritisation, scope management, user validation and app store publishing.\n\nIt also cemented a principle I apply elsewhere. At one point the assistant reported +€406 where the screen showed +€516, because each computed the figure on its own. The fix wasn't to tune the model but to make both read from the same source. In AI systems, reliability depends above all on the data and the architecture behind them.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          ca: "- **Next.js 16 + React 19 + TypeScript**: aplicacions web i mòbil en un monorepo amb paquets compartits.\n- **Capacitor**: aplicació Android a partir de la mateixa base de codi.\n- **Supabase**: PostgreSQL, autenticació, emmagatzematge, Realtime i RLS.\n- **TanStack Query**: estat de servidor i memòria cau persistent.\n- **Claude + MCP**: Capital AI, en un entorn aïllat i amb accés a dades sota RLS.\n- **OpenAI**: categorització automàtica i lectura de tiquets.\n- **Stripe i RevenueCat**: subscripcions a web i a Google Play.\n- **TrueLayer**: banca oberta (PSD2).\n- **Yahoo Finance, TwelveData i BCE**: preus i tipus de canvi.\n- **Firebase Cloud Messaging i Resend**: notificacions push i correu.\n- **next-intl**: set idiomes.\n- **Vitest**: proves automatitzades.\n- **Vercel**: desplegament.",
          es: "- **Next.js 16 + React 19 + TypeScript**: aplicaciones web y móvil en un monorepo con paquetes compartidos.\n- **Capacitor**: aplicación Android a partir de la misma base de código.\n- **Supabase**: PostgreSQL, autenticación, almacenamiento, Realtime y RLS.\n- **TanStack Query**: estado de servidor y caché persistente.\n- **Claude + MCP**: Capital AI, en un entorno aislado y con acceso a datos bajo RLS.\n- **OpenAI**: categorización automática y lectura de tickets.\n- **Stripe y RevenueCat**: suscripciones en web y en Google Play.\n- **TrueLayer**: banca abierta (PSD2).\n- **Yahoo Finance, TwelveData y BCE**: precios y tipos de cambio.\n- **Firebase Cloud Messaging y Resend**: notificaciones push y correo.\n- **next-intl**: siete idiomas.\n- **Vitest**: pruebas automatizadas.\n- **Vercel**: despliegue.",
          en: "- **Next.js 16 + React 19 + TypeScript**: web and mobile apps in a monorepo with shared packages.\n- **Capacitor**: Android app from the same codebase.\n- **Supabase**: PostgreSQL, authentication, storage, Realtime and RLS.\n- **TanStack Query**: server state and persistent cache.\n- **Claude + MCP**: Capital AI, in an isolated environment with data access under RLS.\n- **OpenAI**: automatic categorisation and receipt reading.\n- **Stripe and RevenueCat**: subscriptions on web and Google Play.\n- **TrueLayer**: open banking (PSD2).\n- **Yahoo Finance, TwelveData and ECB**: prices and exchange rates.\n- **Firebase Cloud Messaging and Resend**: push notifications and email.\n- **next-intl**: seven languages.\n- **Vitest**: automated tests.\n- **Vercel**: deployment.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "La versió web està en producció a capitaltrackerapp.com i l'aplicació Android, a Google Play (versió 1.5). A l'octubre de 2026 s'ha publicat l'actualització més extensa fins ara, amb la nova arquitectura de Capital AI. El producte continua en desenvolupament actiu.",
          es: "La versión web está en producción en capitaltrackerapp.com y la aplicación Android, en Google Play (versión 1.5). En octubre de 2026 se ha publicado la actualización más extensa hasta la fecha, con la nueva arquitectura de Capital AI. El producto sigue en desarrollo activo.",
          en: "The web version is live at capitaltrackerapp.com and the Android app is on Google Play (version 1.5). The most extensive update to date was released in October 2026, with the new Capital AI architecture. The product remains under active development.",
        },
      },
    ],
  },

  {
    slug: "videojoccomplet",
    title: {
      ca: "Hefest: videojoc multijugador en món obert",
      es: "Hefest: videojuego multijugador en mundo abierto",
      en: "Hefest: open-world multiplayer game",
    },
    subtitle: {
      ca: "Videojoc de conducció i contraban amb estat compartit en temps real entre jugadors.",
      es: "Videojuego de conducción y contrabando con estado compartido en tiempo real entre jugadores.",
      en: "A driving and smuggling game with real-time shared state between players.",
    },
    description: {
      ca: "Hefest és un videojoc multijugador de conducció i contraban ambientat en un entorn urbà obert, desenvolupat amb Unity i C# entre juny i novembre de 2025. Va néixer de l'interès per entendre com funcionen els videojocs internament i va evolucionar cap a un projecte de complexitat considerable: sincronització d'estat entre clients, autoritat de xarxa, càrrega d'escenes coordinada i sistemes de joc interdependents.",
      es: "Hefest es un videojuego multijugador de conducción y contrabando ambientado en un entorno urbano abierto, desarrollado con Unity y C# entre junio y noviembre de 2025. Nació del interés por entender cómo funcionan los videojuegos internamente y evolucionó hacia un proyecto de complejidad considerable: sincronización de estado entre clientes, autoridad de red, carga de escenas coordinada y sistemas de juego interdependientes.",
      en: "Hefest is a multiplayer driving and smuggling game set in an open urban environment, built with Unity and C# between June and November 2025. It grew out of an interest in how games work internally and evolved into a project of considerable complexity: state synchronisation across clients, network authority, coordinated scene loading and interdependent game systems.",
    },
    demonstrates: {
      ca: "Sincronització d'estat en temps real i disseny de sistemes interdependents",
      es: "Sincronización de estado en tiempo real y diseño de sistemas interdependientes",
      en: "Real-time state synchronisation and design of interdependent systems",
    },
    context: { ca: "Projecte personal", es: "Proyecto personal", en: "Personal project" },
    year: "2025",
    tags: [
      "Unity",
      "C#",
      "Netcode for GameObjects",
      "Cinemachine",
      "ShaderGraph",
      "Multiplayer",
    ],
    images: [
      { src: "/ProjectImages/VideoGame/0.mp4", poster: "/ProjectImages/VideoGame/0.jpg", fit: "cover" },
      { src: "/ProjectImages/VideoGame/1.mp4", poster: "/ProjectImages/VideoGame/1.jpg", fit: "cover" },
      { src: "/ProjectImages/VideoGame/2.mp4", poster: "/ProjectImages/VideoGame/2.jpg", fit: "cover" },
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Context", es: "Contexto", en: "Context" },
        content: {
          ca: "El jugador ha de transportar una càrrega fins a un punt fronterer travessant controls policials, tallers i garatges, en un entorn que reacciona a les seves decisions. Des del punt de vista tècnic, el repte central és mantenir diversos clients d'acord sobre un món que canvia contínuament, sense desincronitzacions ni estats inconsistents.\n\nEl desenvolupament va ser iteratiu: diverses parts es van reescriure un cop funcionals per resoldre limitacions de disseny que només es van fer evidents amb l'ús.",
          es: "El jugador debe transportar una carga hasta un punto fronterizo atravesando controles policiales, talleres y garajes, en un entorno que reacciona a sus decisiones. Desde el punto de vista técnico, el reto central es mantener a varios clientes de acuerdo sobre un mundo que cambia continuamente, sin desincronizaciones ni estados inconsistentes.\n\nEl desarrollo fue iterativo: varias partes se reescribieron una vez funcionales para resolver limitaciones de diseño que solo se hicieron evidentes con el uso.",
          en: "The player must move a load to a border crossing through police checkpoints, workshops and garages, in an environment that reacts to their decisions. Technically, the central challenge is keeping several clients in agreement about a constantly changing world, without desyncs or inconsistent states.\n\nDevelopment was iterative: several parts were rewritten after they already worked, to address design limitations that only became apparent through use.",
        },
      },
      {
        id: "funcionalitats-clau",
        title: { ca: "Sistemes principals", es: "Sistemas principales", en: "Main systems" },
        accordion: [
          {
            title: {
              ca: "Sincronització multijugador i autoritat",
              es: "Sincronización multijugador y autoridad",
              en: "Multiplayer synchronisation and authority",
            },
            content: {
              ca: "Basat en Netcode for GameObjects, el joc sincronitza vehicles, jugadors, escenes i cinemàtiques. Quan un jugador canvia d'escena, la resta de clients carreguen els elements necessaris per mantenir la coherència global. La principal dificultat va ser definir l'autoritat sobre cada objecte i gestionar-ne la transferència quan es perd en ple moviment.",
              es: "Basado en Netcode for GameObjects, el juego sincroniza vehículos, jugadores, escenas y cinemáticas. Cuando un jugador cambia de escena, el resto de clientes cargan los elementos necesarios para mantener la coherencia global. La principal dificultad fue definir la autoridad sobre cada objeto y gestionar su transferencia cuando se pierde en pleno movimiento.",
              en: "Built on Netcode for GameObjects, the game synchronises vehicles, players, scenes and cutscenes. When a player changes scene, the other clients load what's needed to keep global consistency. The main difficulty was defining authority over each object and handling its transfer when it's lost mid-motion.",
            },
          },
          {
            // REVISAR: confirma que els NPCs fan servir un model de llenguatge.
            // Si era només NavMesh i lògica pròpia, treu la part del diàleg generat.
            title: {
              ca: "Entorn dinàmic i NPCs",
              es: "Entorno dinámico y NPCs",
              en: "Dynamic environment and NPCs",
            },
            content: {
              ca: "Els establiments segueixen un horari dins del joc i els NPCs responen amb diàleg generat a partir de l'estat de la partida. La generació ha de complir un pressupost de latència estricte per no interrompre l'experiència i ha de mantenir la coherència amb l'ambientació.",
              es: "Los establecimientos siguen un horario dentro del juego y los NPCs responden con diálogo generado a partir del estado de la partida. La generación debe cumplir un presupuesto de latencia estricto para no interrumpir la experiencia y mantener la coherencia con la ambientación.",
              en: "Shops follow an in-game schedule and NPCs respond with dialogue generated from the state of the game. Generation has to meet a strict latency budget so it doesn't interrupt the experience, and must stay consistent with the setting.",
            },
          },
          {
            title: {
              ca: "Estat acumulatiu de la càrrega",
              es: "Estado acumulativo de la carga",
              en: "Cumulative cargo state",
            },
            content: {
              ca: "Sistema d'integritat de la càrrega amb controls de verificació, pèrdues per accident i interaccions emergents. Cada decisió afecta la quantitat final lliurada i el comportament dels NPCs en controls posteriors, de manera que l'estat és acumulatiu i cap esdeveniment es pot tractar de forma aïllada.",
              es: "Sistema de integridad de la carga con controles de verificación, pérdidas por accidente e interacciones emergentes. Cada decisión afecta a la cantidad final entregada y al comportamiento de los NPCs en controles posteriores, de modo que el estado es acumulativo y ningún evento se puede tratar de forma aislada.",
              en: "A cargo-integrity system with verification checkpoints, crash losses and emergent interactions. Every decision affects the final amount delivered and NPC behaviour at later checkpoints, so state is cumulative and no event can be handled in isolation.",
            },
          },
          {
            title: {
              ca: "Vehicles i progressió",
              es: "Vehículos y progresión",
              en: "Vehicles and progression",
            },
            content: {
              ca: "Personalització de carrosseries, millores mecàniques, blindatges i eines de suport com detectors de radar o pilot automàtic. Els tallers reparen danys i redueixen el nivell de sospita policial, i els garatges permeten emmagatzemar i substituir vehicles. Tota aquesta configuració és persistent i s'ha de sincronitzar entre clients.",
              es: "Personalización de carrocerías, mejoras mecánicas, blindajes y herramientas de apoyo como detectores de radar o piloto automático. Los talleres reparan daños y reducen el nivel de sospecha policial, y los garajes permiten almacenar y sustituir vehículos. Toda esta configuración es persistente y debe sincronizarse entre clientes.",
              en: "Customisable bodywork, mechanical upgrades, armour and support tools such as radar detectors or autopilot. Workshops repair damage and lower police suspicion, and garages let players store and swap vehicles. All of this configuration is persistent and must be synchronised between clients.",
            },
          },
        ],
      },
      {
        id: "aprenentatges",
        title: { ca: "Aprenentatges", es: "Aprendizajes", en: "Takeaways" },
        content: {
          ca: "El projecte em va donar un domini sòlid de C# i Unity i experiència en problemes propis dels sistemes distribuïts: autoritat, consistència i tolerància a la latència. També va ser el primer contacte amb la integració de serveis externs dins d'un bucle interactiu, on cal preveure respostes lentes o errònies sense degradar l'experiència, un problema directament aplicable als sistemes amb IA en producció.",
          es: "El proyecto me dio un dominio sólido de C# y Unity y experiencia en problemas propios de los sistemas distribuidos: autoridad, consistencia y tolerancia a la latencia. También fue el primer contacto con la integración de servicios externos dentro de un bucle interactivo, donde hay que prever respuestas lentas o erróneas sin degradar la experiencia, un problema directamente aplicable a los sistemas con IA en producción.",
          en: "The project gave me solid command of C# and Unity and experience with problems typical of distributed systems: authority, consistency and latency tolerance. It was also my first experience integrating external services into an interactive loop, where slow or faulty responses must be anticipated without degrading the experience, a problem that applies directly to AI systems in production.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          ca: "- **Unity (C#)**: motor, física, interaccions i interfícies.\n- **Netcode for GameObjects**: sincronització, autoritat i escenes compartides.\n- **Cinemachine**: càmeres dinàmiques i cinemàtiques sincronitzades.\n- **ShaderGraph**: efectes visuals i materials propis.\n- **NavMesh / AI Tools**: navegació i comportament dels NPCs.\n- **Blender**: models 3D.\n- **Git / GitHub**: control de versions.",
          es: "- **Unity (C#)**: motor, física, interacciones e interfaces.\n- **Netcode for GameObjects**: sincronización, autoridad y escenas compartidas.\n- **Cinemachine**: cámaras dinámicas y cinemáticas sincronizadas.\n- **ShaderGraph**: efectos visuales y materiales propios.\n- **NavMesh / AI Tools**: navegación y comportamiento de los NPCs.\n- **Blender**: modelos 3D.\n- **Git / GitHub**: control de versiones.",
          en: "- **Unity (C#)**: engine, physics, interactions and UI.\n- **Netcode for GameObjects**: synchronisation, authority and shared scenes.\n- **Cinemachine**: dynamic cameras and synchronised cutscenes.\n- **ShaderGraph**: visual effects and custom materials.\n- **NavMesh / AI Tools**: NPC navigation and behaviour.\n- **Blender**: 3D models.\n- **Git / GitHub**: version control.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "El multijugador és estable, amb cinemàtiques sincronitzades, conducció, inventari i interacció amb objectes. El desenvolupament es va aturar el novembre de 2025 per prioritzar Capital Tracker; la base actual permetria reprendre'l.",
          es: "El multijugador es estable, con cinemáticas sincronizadas, conducción, inventario e interacción con objetos. El desarrollo se detuvo en noviembre de 2025 para priorizar Capital Tracker; la base actual permitiría retomarlo.",
          en: "Multiplayer is stable, with synchronised cutscenes, driving, inventory and object interaction. Development paused in November 2025 to prioritise Capital Tracker; the current foundation would allow it to be resumed.",
        },
      },
    ],
  },

  {
    slug: "custom-embedded-hmi-device",
    title: {
      ca: "Aplicació encastada per a Raspberry Pi",
      es: "Aplicación embebida para Raspberry Pi",
      en: "Embedded application for Raspberry Pi",
    },
    subtitle: {
      ca: "Interfície a pantalla completa per a un dispositiu tàctil sense teclat ni ratolí, amb integració directa amb el sistema operatiu.",
      es: "Interfaz a pantalla completa para un dispositivo táctil sin teclado ni ratón, con integración directa con el sistema operativo.",
      en: "A full-screen interface for a touch device with no keyboard or mouse, integrated directly with the operating system.",
    },
    description: {
      ca: "Aplicació d'escriptori en Python per a una Raspberry Pi amb pantalla tàctil, concebuda com a regal: galeria de fotografies, mapa interactiu, comptadors de dates i configuració del sistema. El dispositiu arrenca directament a l'aplicació, de manera que qualsevol operació (connexió WiFi, importació de fitxers, apagada) s'havia de poder fer des de la interfície, sense accés a terminal ni a perifèrics.",
      es: "Aplicación de escritorio en Python para una Raspberry Pi con pantalla táctil, concebida como regalo: galería de fotografías, mapa interactivo, contadores de fechas y configuración del sistema. El dispositivo arranca directamente en la aplicación, de modo que cualquier operación (conexión WiFi, importación de archivos, apagado) debía poder hacerse desde la interfaz, sin acceso a terminal ni a periféricos.",
      en: "A Python desktop application for a touchscreen Raspberry Pi, conceived as a gift: photo gallery, interactive map, date countdowns and system settings. The device boots straight into the app, so every operation (WiFi connection, file import, shutdown) had to be possible from the interface, with no terminal or peripherals.",
    },
    demonstrates: {
      ca: "Disseny d'interfícies per a maquinari limitat i integració amb el sistema operatiu",
      es: "Diseño de interfaces para hardware limitado e integración con el sistema operativo",
      en: "Interface design for constrained hardware and operating-system integration",
    },
    context: { ca: "Projecte personal", es: "Proyecto personal", en: "Personal project" },
    year: "2024",
    tags: [
      "Python",
      "Tkinter",
      "Raspberry Pi",
      "Linux",
      "Pillow",
      "pygame",
    ],
    images: [
      { src: "/ProjectImages/PythonProject/0.mp4", poster: "/ProjectImages/PythonProject/0.jpg", fit: "cover" },
      { src: "/ProjectImages/PythonProject/1.mp4", poster: "/ProjectImages/PythonProject/1.jpg" },
      { src: "/ProjectImages/PythonProject/2.mp4", poster: "/ProjectImages/PythonProject/2.jpg" },
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Context", es: "Contexto", en: "Context" },
        content: {
          ca: "L'aplicació s'estructura en mòduls independents (menú principal, galeria, mapa, configuració, comptadors i línia de temps) gestionats des d'un menú central. Les restriccions del dispositiu condicionen tot el disseny: entrada exclusivament tàctil, recursos de memòria limitats i la necessitat que el sistema es recuperi sol després d'un reinici.",
          es: "La aplicación se estructura en módulos independientes (menú principal, galería, mapa, configuración, contadores y línea de tiempo) gestionados desde un menú central. Las restricciones del dispositivo condicionan todo el diseño: entrada exclusivamente táctil, recursos de memoria limitados y la necesidad de que el sistema se recupere solo tras un reinicio.",
          en: "The application is structured into independent modules (main menu, gallery, map, settings, countdowns and timeline) managed from a central menu. The device's constraints shape the whole design: touch-only input, limited memory, and the need for the system to recover on its own after a restart.",
        },
      },
      {
        id: "funcionalitats-clau",
        title: { ca: "Sistemes principals", es: "Sistemas principales", en: "Main systems" },
        accordion: [
          {
            title: {
              ca: "Entrada sense teclat",
              es: "Entrada sin teclado",
              en: "Keyboard-free input",
            },
            content: {
              ca: "El mòdul de mapa permet afegir ubicacions sobre un canvas tàctil. En seleccionar un punt apareix un teclat QWERTY a pantalla completa per introduir-ne el nom. Cada ubicació es desa en JSON, es representa sobre el mapa i es mostra en una llista lateral des d'on es pot eliminar.",
              es: "El módulo de mapa permite añadir ubicaciones sobre un canvas táctil. Al seleccionar un punto aparece un teclado QWERTY a pantalla completa para introducir su nombre. Cada ubicación se guarda en JSON, se representa sobre el mapa y se muestra en una lista lateral desde donde se puede eliminar.",
              en: "The map module lets users add locations on a touch canvas. Selecting a point brings up a full-screen QWERTY keyboard to enter its name. Each location is stored as JSON, drawn on the map and shown in a side list where it can be removed.",
            },
          },
          {
            title: {
              ca: "Gestió multimèdia amb memòria limitada",
              es: "Gestión multimedia con memoria limitada",
              en: "Media handling on limited memory",
            },
            content: {
              ca: "Galeria amb reproducció contínua, redimensionament amb preservació de proporcions, importació des d'USB i eliminació d'imatges. En una Raspberry Pi cal controlar explícitament l'alliberament de memòria de cada imatge i la gestió dels fotogrames dels GIF animats perquè la interfície no es bloquegi.",
              es: "Galería con reproducción continua, redimensionado con preservación de proporciones, importación desde USB y eliminación de imágenes. En una Raspberry Pi hay que controlar explícitamente la liberación de memoria de cada imagen y la gestión de los fotogramas de los GIF animados para que la interfaz no se bloquee.",
              en: "A gallery with continuous playback, aspect-preserving resizing, USB import and image deletion. On a Raspberry Pi, memory release for each image and frame handling for animated GIFs must be managed explicitly so the interface doesn't stall.",
            },
          },
          {
            title: {
              ca: "Actualització periòdica no bloquejant",
              es: "Actualización periódica no bloqueante",
              en: "Non-blocking periodic updates",
            },
            content: {
              ca: "Diversos comptadors calculen el temps transcorregut o restant respecte a dates concretes i s'actualitzen cada segon. Tota l'actualització es fa mitjançant `after()` de Tkinter, sense bucles bloquejants, de manera que la interfície continua responent mentre avancen les animacions i els comptadors.",
              es: "Varios contadores calculan el tiempo transcurrido o restante respecto a fechas concretas y se actualizan cada segundo. Toda la actualización se realiza mediante `after()` de Tkinter, sin bucles bloqueantes, de modo que la interfaz sigue respondiendo mientras avanzan las animaciones y los contadores.",
              en: "Several counters compute the time elapsed since or remaining until specific dates and refresh every second. All updates run through Tkinter's `after()`, with no blocking loops, so the interface stays responsive while animations and counters advance.",
            },
          },
          {
            title: {
              ca: "Integració amb el sistema: xarxa, energia i processos",
              es: "Integración con el sistema: red, energía y procesos",
              en: "System integration: network, power and processes",
            },
            content: {
              ca: "El mòdul de configuració concentra la part de més complexitat tècnica: càlcul de la versió a partir dels fitxers del projecte, configuració de la WiFi mitjançant l'edició de `wpa_supplicant` i la reconfiguració de la interfície de xarxa, control de l'àudio, apagada del sistema i registre d'històric. Requereix treballar amb subprocessos, permisos i fitxers de configuració de Linux.",
              es: "El módulo de configuración concentra la parte de mayor complejidad técnica: cálculo de la versión a partir de los archivos del proyecto, configuración de la WiFi mediante la edición de `wpa_supplicant` y la reconfiguración de la interfaz de red, control del audio, apagado del sistema y registro de histórico. Requiere trabajar con subprocesos, permisos y archivos de configuración de Linux.",
              en: "The settings module holds the most technically complex part: computing the version from the project files, configuring WiFi by editing `wpa_supplicant` and reconfiguring the network interface, audio control, system shutdown and a history log. It involves working with subprocesses, permissions and Linux configuration files.",
            },
          },
        ],
      },
      {
        id: "aprenentatges",
        title: { ca: "Aprenentatges", es: "Aprendizajes", en: "Takeaways" },
        content: {
          ca: "El projecte em va obligar a dissenyar a partir de les condicions d'ús reals: un usuari no tècnic, sense accés a eines de diagnòstic, per al qual qualsevol situació d'error s'havia de poder resoldre des de la interfície. També em va aportar experiència pràctica en la integració amb Linux: gestió de processos, permisos i fitxers de configuració del sistema.",
          es: "El proyecto me obligó a diseñar a partir de las condiciones de uso reales: un usuario no técnico, sin acceso a herramientas de diagnóstico, para el que cualquier situación de error debía poder resolverse desde la interfaz. También me aportó experiencia práctica en la integración con Linux: gestión de procesos, permisos y archivos de configuración del sistema.",
          en: "The project forced me to design around real usage conditions: a non-technical user with no access to diagnostic tools, for whom any error had to be resolvable from the interface. It also gave me hands-on experience with Linux integration: process management, permissions and system configuration files.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          ca: "- **Python 3**: llenguatge principal.\n- **Tkinter + ttk / ttkthemes**: interfície gràfica i temes visuals.\n- **Pillow**: càrrega i tractament d'imatges i GIF animats.\n- **pygame**: reproducció d'àudio en bucle.\n- **JSON**: persistència de les ubicacions del mapa.\n- **datetime**: càlcul de diferències temporals.\n- **os, subprocess, shutil**: integració amb el sistema (USB, WiFi, processos i apagada).",
          es: "- **Python 3**: lenguaje principal.\n- **Tkinter + ttk / ttkthemes**: interfaz gráfica y temas visuales.\n- **Pillow**: carga y tratamiento de imágenes y GIF animados.\n- **pygame**: reproducción de audio en bucle.\n- **JSON**: persistencia de las ubicaciones del mapa.\n- **datetime**: cálculo de diferencias temporales.\n- **os, subprocess, shutil**: integración con el sistema (USB, WiFi, procesos y apagado).",
          en: "- **Python 3**: main language.\n- **Tkinter + ttk / ttkthemes**: graphical interface and visual themes.\n- **Pillow**: loading and processing images and animated GIFs.\n- **pygame**: looping audio playback.\n- **JSON**: persistence for map locations.\n- **datetime**: time-difference calculations.\n- **os, subprocess, shutil**: system integration (USB, WiFi, processes and shutdown).",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "El dispositiu és plenament funcional i el projecte es considera tancat. L'arquitectura modular permetria afegir noves seccions sense modificar el nucli.",
          es: "El dispositivo es plenamente funcional y el proyecto se considera cerrado. La arquitectura modular permitiría añadir nuevas secciones sin modificar el núcleo.",
          en: "The device is fully functional and the project is considered complete. The modular architecture would allow new sections to be added without touching the core.",
        },
      },
    ],
  },

  {
    slug: "interserveis-web",
    title: {
      ca: "Web corporativa per a Interserveis 2022 SL",
      es: "Web corporativa para Interserveis 2022 SL",
      en: "Corporate website for Interserveis 2022 SL",
    },
    subtitle: {
      ca: "Web per a un servei tècnic oficial de reparació d'electrodomèstics: estructura de continguts, sol·licitud de serveis i compliment normatiu.",
      es: "Web para un servicio técnico oficial de reparación de electrodomésticos: estructura de contenidos, solicitud de servicios y cumplimiento normativo.",
      en: "Website for an authorised appliance repair service: content structure, service requests and regulatory compliance.",
    },
    description: {
      ca: "Interserveis 2022 SL és un servei tècnic oficial de reparació d'electrodomèstics situat a Salt (Girona), amb prop de 30 anys de trajectòria. El projecte va incloure la definició de l'estructura de continguts, la configuració i personalització de WordPress, la redacció dels textos comercials i legals i l'optimització per a dispositius mòbils, des d'on arriba la major part del trànsit.",
      es: "Interserveis 2022 SL es un servicio técnico oficial de reparación de electrodomésticos situado en Salt (Girona), con cerca de 30 años de trayectoria. El proyecto incluyó la definición de la estructura de contenidos, la configuración y personalización de WordPress, la redacción de los textos comerciales y legales y la optimización para dispositivos móviles, desde donde llega la mayor parte del tráfico.",
      en: "Interserveis 2022 SL is an authorised appliance repair service based in Salt (Girona), with nearly 30 years in the trade. The project covered defining the content structure, configuring and customising WordPress, writing the commercial and legal copy, and optimising for mobile devices, where most of the traffic comes from.",
    },
    demonstrates: {
      ca: "Recollida de requisits amb un client real i traducció a decisions de producte",
      es: "Recogida de requisitos con un cliente real y traducción a decisiones de producto",
      en: "Requirements gathering with a real client, translated into product decisions",
    },
    context: { ca: "Client", es: "Cliente", en: "Client" },
    year: "2025",
    tags: [
      "WordPress",
      "Estratègia de continguts",
      "SEO",
      "RGPD",
      "Responsive Design",
    ],
    images: [
      { src: "/ProjectImages/InterServeis/0.mp4", poster: "/ProjectImages/InterServeis/0.jpg" },
      { src: "/ProjectImages/InterServeis/1.png" },
      { src: "/ProjectImages/InterServeis/2.png" },
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Context", es: "Contexto", en: "Context" },
        content: {
          ca: "L'objectiu de la web era transmetre professionalitat i confiança i, sobretot, facilitar la sol·licitud d'una reparació en el mínim de passos. L'estructura parteix de les necessitats immediates d'un client amb un electrodomèstic avariat: contacte, marques cobertes i procediment per demanar el servei.",
          es: "El objetivo de la web era transmitir profesionalidad y confianza y, sobre todo, facilitar la solicitud de una reparación en el mínimo de pasos. La estructura parte de las necesidades inmediatas de un cliente con un electrodoméstico averiado: contacto, marcas cubiertas y procedimiento para pedir el servicio.",
          en: "The site's goal was to convey professionalism and trust and, above all, to make requesting a repair possible in as few steps as possible. The structure starts from the immediate needs of a customer with a broken appliance: contact details, brands covered and how to request the service.",
        },
      },
      {
        id: "funcionalitats-clau",
        title: { ca: "Decisions principals", es: "Decisiones principales", en: "Key decisions" },
        accordion: [
          {
            title: {
              ca: "Navegació orientada a la intenció",
              es: "Navegación orientada a la intención",
              en: "Intent-driven navigation",
            },
            content: {
              ca: "Inici, Sol·licitar, Marques oficials, Serveis, Catàleg i Contactar. L'ordre respon a allò que un client busca primer quan té un electrodomèstic avariat: com sol·licitar el servei i si l'empresa treballa amb la seva marca. La resta de continguts té la funció de reforçar la confiança.",
              es: "Inicio, Solicitar, Marcas oficiales, Servicios, Catálogo y Contactar. El orden responde a lo que un cliente busca primero cuando tiene un electrodoméstico averiado: cómo solicitar el servicio y si la empresa trabaja con su marca. El resto de contenidos tiene la función de reforzar la confianza.",
              en: "Home, Request, Authorised brands, Services, Catalogue and Contact. The order reflects what a customer with a broken appliance looks for first: how to request the service and whether the company works with their brand. The remaining content serves to reinforce trust.",
            },
          },
          {
            title: {
              ca: "Formularis de sol·licitud",
              es: "Formularios de solicitud",
              en: "Request forms",
            },
            content: {
              ca: "Els formularis recullen només les dades necessàries per gestionar correctament cada avís. La feina va consistir a determinar quins camps eren imprescindibles i quins opcionals, i a redactar-los de manera que un usuari sense coneixements tècnics entengués què se li demana.",
              es: "Los formularios recogen solo los datos necesarios para gestionar correctamente cada aviso. El trabajo consistió en determinar qué campos eran imprescindibles y cuáles opcionales, y en redactarlos de forma que un usuario sin conocimientos técnicos entendiera qué se le pide.",
              en: "The forms collect only the data needed to handle each request properly. The work involved deciding which fields were essential and which optional, and wording them so a non-technical user would understand what was being asked.",
            },
          },
          {
            title: {
              ca: "Compliment normatiu: RGPD, cookies i avís legal",
              es: "Cumplimiento normativo: RGPD, cookies y aviso legal",
              en: "Regulatory compliance: GDPR, cookies and legal notice",
            },
            content: {
              ca: "Política de privacitat, política de cookies i avís legal adaptats a l'empresa (raó social, NIF, adreça, finalitats del tractament i base legal), juntament amb la gestió del consentiment de cookies. Requereix traslladar requisits legals a un llenguatge formal però comprensible.",
              es: "Política de privacidad, política de cookies y aviso legal adaptados a la empresa (razón social, NIF, dirección, finalidades del tratamiento y base legal), junto con la gestión del consentimiento de cookies. Requiere trasladar requisitos legales a un lenguaje formal pero comprensible.",
              en: "Privacy policy, cookie policy and legal notice tailored to the company (registered name, tax ID, address, processing purposes and legal basis), together with cookie consent management. It requires translating legal requirements into language that is formal yet understandable.",
            },
          },
        ],
      },
      {
        id: "aprenentatges",
        title: { ca: "Aprenentatges", es: "Aprendizajes", en: "Takeaways" },
        content: {
          ca: "Va ser el primer projecte amb un client extern. Els requisits no estaven formalitzats: es van extreure de converses amb l'empresa, de les preguntes habituals dels seus clients i dels punts on perdien temps. Aquesta capacitat d'obtenir requisits d'interlocutors no tècnics és la mateixa que exigeix qualsevol projecte d'IA aplicada, on qui millor coneix el problema rarament pot especificar quines dades o quin comportament calen.",
          es: "Fue el primer proyecto con un cliente externo. Los requisitos no estaban formalizados: se extrajeron de conversaciones con la empresa, de las preguntas habituales de sus clientes y de los puntos donde perdían tiempo. Esa capacidad de obtener requisitos de interlocutores no técnicos es la misma que exige cualquier proyecto de IA aplicada, donde quien mejor conoce el problema rara vez puede especificar qué datos o qué comportamiento hacen falta.",
          en: "This was my first project with an external client. Requirements weren't formalised: they were drawn from conversations with the company, from their customers' usual questions and from the points where they lost time. That ability to gather requirements from non-technical stakeholders is exactly what any applied AI project demands, where the person who knows the problem best can rarely specify what data or behaviour is needed.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          ca: "- **WordPress**: gestor de continguts i administració.\n- **Tema i constructor de pàgines**: maquetació de totes les seccions.\n- **Plugins de formularis**: sol·licitud de servei i contacte.\n- **Gestió de cookies i consentiment**: bàner i preferències de privacitat.\n- **HTML / CSS**: ajustos d'estil.\n- **Allotjament amb HTTPS**: certificat SSL i accés segur.",
          es: "- **WordPress**: gestor de contenidos y administración.\n- **Tema y constructor de páginas**: maquetación de todas las secciones.\n- **Plugins de formularios**: solicitud de servicio y contacto.\n- **Gestión de cookies y consentimiento**: banner y preferencias de privacidad.\n- **HTML / CSS**: ajustes de estilo.\n- **Alojamiento con HTTPS**: certificado SSL y acceso seguro.",
          en: "- **WordPress**: content management and administration.\n- **Theme and page builder**: layout for every section.\n- **Form plugins**: service requests and contact.\n- **Cookie and consent management**: banner and privacy preferences.\n- **HTML / CSS**: style adjustments.\n- **HTTPS hosting**: SSL certificate and secure access.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "La web és actualment el principal canal digital de l'empresa: presenta els serveis i les marques oficials i permet sol·licitar reparacions de manera directa.",
          es: "La web es actualmente el principal canal digital de la empresa: presenta los servicios y las marcas oficiales y permite solicitar reparaciones de forma directa.",
          en: "The website is currently the company's main digital channel: it presents its services and authorised brands and allows customers to request repairs directly.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------
   * ESBORRANY: plantilla per a un projecte nou.
   * Omple els camps i treu `draft: true` perquè aparegui al llistat.
   * ------------------------------------------------------------------ */
  {
    slug: "projecte-llm",
    draft: true,
    title: {
      ca: "REVISAR: Títol del projecte",
      es: "REVISAR: Título del proyecto",
      en: "REVIEW: Project title",
    },
    subtitle: {
      ca: "Una línia sobre què resol i per a qui.",
      es: "Una línea sobre qué resuelve y para quién.",
      en: "One line on what it solves and for whom.",
    },
    description: {
      ca: "Context del problema, solució desenvolupada i resultat obtingut.",
      es: "Contexto del problema, solución desarrollada y resultado obtenido.",
      en: "Problem context, solution developed and outcome.",
    },
    demonstrates: {
      ca: "REVISAR: síntesi en una línia",
      es: "REVISAR: síntesis en una línea",
      en: "REVIEW: one-line summary",
    },
    context: { ca: "Client", es: "Cliente", en: "Client" },
    year: "2026",
    tags: ["Python", "RAG", "Docker"],
    images: [
      { src: "/ProjectImages/test.jpg" },
      { src: "/ProjectImages/test.jpg" },
      { src: "/ProjectImages/test.jpg" },
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Context", es: "Contexto", en: "Context" },
        content: {
          ca: "Pendent d'escriure.",
          es: "Pendiente de escribir.",
          en: "To be written.",
        },
      },
    ],
  },
];

/** Els esborranys no es publiquen. */
export const publishedProjects = projects.filter((p) => !p.draft);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Projecte publicat següent, en ordre circular: per enllaçar fitxes entre si. */
export function nextProjectOf(project: Project): Project {
  const i = publishedProjects.findIndex((p) => p.slug === project.slug);
  return publishedProjects[(i + 1) % publishedProjects.length];
}

/** Imatge estàtica per a miniatures i metadades Open Graph. */
export function thumbnailOf(project: Project): string | undefined {
  if (project.cover) return project.cover;
  const first = project.images?.[0];
  return first?.poster ?? first?.src;
}

export const workSection = {
  label: { ca: "Projectes", es: "Proyectos", en: "Work" } satisfies L,
  heading: {
    ca: { lead: "Projectes", accent: "seleccionats" },
    es: { lead: "Proyectos", accent: "seleccionados" },
    en: { lead: "Selected", accent: "work" },
  } satisfies L<{ lead: string; accent: string }>,
  othersLabel: { ca: "Altres projectes", es: "Otros proyectos", en: "Other projects" } satisfies L,
};
