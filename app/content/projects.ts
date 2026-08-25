import type { L } from "../i18n/LanguageProvider";

/**
 * Projectes. Reenfocats: cada fitxa explica què demostra el projecte
 * en termes de sistema, no de llenguatge.
 *
 * REVISAR: els textos són una proposta. Corregeix-hi tot el que no encaixi
 * amb com ho vius tu, especialment `demonstrates` i els anys.
 */

export type ProjectSection = {
  id: string;
  title: L;
  /** Markdown. */
  content?: L;
  accordion?: { title: L; content: L }[];
};

export type Project = {
  slug: string;
  title: L;
  subtitle: L;
  description: L;
  /** Una línia: què demostra aquest projecte del perfil. */
  demonstrates: L;
  context: L;
  year: string;
  tags: string[];
  /**
   * Miniatura del llistat. Si no s'indica, s'usa `images[0]`, que ara mateix
   * és un GIF a tots els projectes. Posa-hi una captura estàtica si vols que
   * el llistat quedi més tranquil.
   */
  cover?: string;
  /**
   * Opcional: hi ha projectes interns dels quals no es poden publicar captures.
   * Sense imatges, el llistat i la fitxa ho indiquen en lloc de deixar un forat.
   */
  images?: [string, string, string];
  sections: ProjectSection[];
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
      ca: "Anys d'incidències i documentació tècnica convertits en coneixement consultable en llenguatge natural, privat i autoallotjat.",
      es: "Años de incidencias y documentación técnica convertidos en conocimiento consultable en lenguaje natural, privado y autoalojado.",
      en: "Years of incident history and technical documentation turned into knowledge you can query in natural language, private and self-hosted.",
    },
    description: {
      ca: "Soc el responsable del disseny, el desenvolupament i el manteniment de la plataforma interna d'IA d'AETECH, i també de liderar-ne l'adopció a tota l'organització. És una solució privada i autoallotjada que converteix anys d'incidències i documentació tècnica en coneixement que qualsevol tècnic pot consultar en llenguatge natural, sense que cap dada surti de casa.",
      es: "Soy el responsable del diseño, el desarrollo y el mantenimiento de la plataforma interna de IA de AETECH, y también de liderar su adopción en toda la organización. Es una solución privada y autoalojada que convierte años de incidencias y documentación técnica en conocimiento que cualquier técnico puede consultar en lenguaje natural, sin que ningún dato salga de casa.",
      en: "I am responsible for designing, building and maintaining AETECH's internal AI platform, and for leading its adoption across the organisation. It is a private, self-hosted system that turns years of incident history and technical documentation into knowledge any technician can query in natural language, without a single piece of data leaving the company.",
    },
    demonstrates: {
      ca: "RAG en producció amb mesura real, agents amb eines i connectors cap a sistemes existents",
      es: "RAG en producción con medición real, agentes con herramientas y conectores hacia sistemas existentes",
      en: "Production RAG with real measurement, tool-using agents, and connectors into existing systems",
    },
    context: { ca: "AETECH", es: "AETECH", en: "AETECH" },
    year: "2026",
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
        title: { ca: "Visió general", es: "Visión general", en: "Overview" },
        content: {
          ca: "AETECH acumula anys d'incidències, informes i documentació tècnica repartits entre sistemes que no es parlen entre ells. Quan un tècnic es troba davant d'una avaria, la resposta sovint ja existeix en algun lloc, però trobar-la costa més que resoldre-la de nou.\n\nLa plataforma converteix tot aquest historial en coneixement consultable en llenguatge natural. Tot corre dins de la infraestructura d'AETECH: és una decisió d'arquitectura, no una preferència, perquè bona part d'aquest material és documentació de clients i no pot sortir de l'organització.",
          es: "AETECH acumula años de incidencias, informes y documentación técnica repartidos entre sistemas que no se hablan entre ellos. Cuando un técnico se encuentra ante una avería, la respuesta a menudo ya existe en algún sitio, pero encontrarla cuesta más que resolverla de nuevo.\n\nLa plataforma convierte todo ese historial en conocimiento consultable en lenguaje natural. Todo corre dentro de la infraestructura de AETECH: es una decisión de arquitectura, no una preferencia, porque buena parte de ese material es documentación de clientes y no puede salir de la organización.",
          en: "AETECH has accumulated years of incidents, reports and technical documentation spread across systems that don't talk to each other. When a technician faces a fault, the answer often already exists somewhere, but finding it costs more than solving it again from scratch.\n\nThe platform turns that history into knowledge you can query in natural language. Everything runs inside AETECH's own infrastructure: an architectural decision rather than a preference, because much of this material is client documentation and cannot leave the organisation.",
        },
      },
      {
        id: "arquitectura",
        title: { ca: "Arquitectura i sistemes", es: "Arquitectura y sistemas", en: "Architecture & systems" },
        accordion: [
          {
            title: {
              ca: "Autoallotjament i aïllament per usuari",
              es: "Autoalojamiento y aislamiento por usuario",
              en: "Self-hosting and per-user isolation",
            },
            content: {
              ca: "Cap document ni cap consulta no surt de la infraestructura d'AETECH. L'aïllament entre usuaris es resol a nivell de sistema operatiu i no només dins de l'aplicació: cada persona treballa en un entorn separat, de manera que un error de la capa d'aplicació no pot fer que el material d'un usuari acabi a la sessió d'un altre. En un sistema que indexa documentació de clients diferents, aquesta garantia havia de ser estructural.",
              es: "Ningún documento ni ninguna consulta sale de la infraestructura de AETECH. El aislamiento entre usuarios se resuelve a nivel de sistema operativo y no solo dentro de la aplicación: cada persona trabaja en un entorno separado, de modo que un error de la capa de aplicación no puede hacer que el material de un usuario acabe en la sesión de otro. En un sistema que indexa documentación de clientes distintos, esa garantía tenía que ser estructural.",
              en: "No document and no query leaves AETECH's infrastructure. Isolation between users is enforced at the operating-system level rather than only inside the application: each person works in a separate environment, so a bug in the application layer cannot leak one user's material into another's session. In a system indexing documentation from different clients, that guarantee had to be structural.",
            },
          },
          {
            title: {
              ca: "Assistents especialitzats per domini",
              es: "Asistentes especializados por dominio",
              en: "Domain-specific assistants",
            },
            content: {
              ca: "En lloc d'un únic assistent generalista, la plataforma s'organitza en assistents per domini. Cadascun treballa amb el seu conjunt de fonts i les seves eines. Això millora la precisió de les respostes, però sobretot fa possible raonar de manera explícita sobre què ha de saber cada assistent i què no li pertoca tocar, que és una pregunta de disseny abans que de model.",
              es: "En lugar de un único asistente generalista, la plataforma se organiza en asistentes por dominio. Cada uno trabaja con su conjunto de fuentes y sus herramientas. Esto mejora la precisión de las respuestas, pero sobre todo hace posible razonar de forma explícita sobre qué debe saber cada asistente y qué no le corresponde tocar, que es una pregunta de diseño antes que de modelo.",
              en: "Instead of a single general assistant, the platform is organised into per-domain assistants. Each works with its own set of sources and its own tools. This improves answer precision, but more importantly it makes it possible to reason explicitly about what each assistant should know and what it has no business touching, which is a design question before it is a model question.",
            },
          },
          {
            title: {
              ca: "RAG amb recuperació híbrida sobre documentació no estructurada",
              es: "RAG con recuperación híbrida sobre documentación no estructurada",
              en: "RAG with hybrid retrieval over unstructured documentation",
            },
            content: {
              ca: "Per a tota la documentació sense estructura he muntat una arquitectura RAG amb base de dades vectorial i recuperació híbrida: cerca semàntica per capturar la intenció de la pregunta, cerca lèxica per no perdre codis d'error, referències i noms de peça, i una passada de reordenació que decideix què entra realment a la finestra de context.\n\nLa combinació no és decorativa. La cerca semàntica sola falla justament amb els identificadors exactes que un tècnic escriu quan té l'avaria al davant, i la lèxica sola no entén una pregunta formulada amb altres paraules que les del manual.",
              es: "Para toda la documentación sin estructura he montado una arquitectura RAG con base de datos vectorial y recuperación híbrida: búsqueda semántica para capturar la intención de la pregunta, búsqueda léxica para no perder códigos de error, referencias y nombres de pieza, y una pasada de reordenación que decide qué entra realmente en la ventana de contexto.\n\nLa combinación no es decorativa. La búsqueda semántica sola falla justamente con los identificadores exactos que un técnico escribe cuando tiene la avería delante, y la léxica sola no entiende una pregunta formulada con otras palabras que las del manual.",
              en: "For all unstructured documentation I built a RAG architecture with a vector database and hybrid retrieval: semantic search to capture the intent of the question, lexical search so error codes, part references and component names don't get lost, and a reranking pass that decides what actually makes it into the context window.\n\nThe combination isn't decorative. Semantic search alone fails on exactly the identifiers a technician types when staring at the fault, and lexical search alone doesn't understand a question phrased in words the manual never used.",
            },
          },
          {
            title: {
              ca: "Diagnòstic multimodal a partir de fotografies",
              es: "Diagnóstico multimodal a partir de fotografías",
              en: "Multimodal diagnosis from photographs",
            },
            content: {
              ca: "Un tècnic sovint té davant una pantalla d'HMI amb un error, un quadre elèctric obert o una placa de característiques, i el més ràpid que pot fer és una fotografia. La plataforma accepta aquestes imatges com a entrada i les fa servir per orientar el diagnòstic, creuant el que es veu amb l'historial d'incidències i la documentació. És la via d'entrada més natural per a algú que té les mans ocupades i no escriurà tres paràgrafs de context.",
              es: "Un técnico a menudo tiene delante una pantalla de HMI con un error, un cuadro eléctrico abierto o una placa de características, y lo más rápido que puede hacer es una fotografía. La plataforma acepta esas imágenes como entrada y las usa para orientar el diagnóstico, cruzando lo que se ve con el historial de incidencias y la documentación. Es la vía de entrada más natural para alguien que tiene las manos ocupadas y no va a escribir tres párrafos de contexto.",
              en: "A technician is often standing in front of an HMI screen showing a fault, an open electrical cabinet or a nameplate, and the fastest thing they can do is take a photo. The platform accepts those images as input and uses them to steer the diagnosis, cross-referencing what's visible with incident history and documentation. It's the most natural entry point for someone whose hands are busy and who will not type three paragraphs of context.",
            },
          },
          {
            title: {
              ca: "Connectors MCP amb Jira i Microsoft 365",
              es: "Conectores MCP con Jira y Microsoft 365",
              en: "MCP connectors for Jira and Microsoft 365",
            },
            content: {
              ca: "La plataforma no viu aïllada de les eines on ja passa la feina. A través de connectors MCP s'integra amb Jira i Microsoft 365, de manera que els assistents poden treballar amb el context real (tiquets, correu, documents) en comptes de demanar a l'usuari que el copiï i l'enganxi. Cada connector porta els seus límits sobre què pot llegir i què pot escriure.",
              es: "La plataforma no vive aislada de las herramientas donde ya ocurre el trabajo. A través de conectores MCP se integra con Jira y Microsoft 365, de modo que los asistentes pueden trabajar con el contexto real (tickets, correo, documentos) en vez de pedir al usuario que lo copie y lo pegue. Cada conector lleva sus propios límites sobre qué puede leer y qué puede escribir.",
              en: "The platform doesn't live apart from the tools where the work already happens. Through MCP connectors it integrates with Jira and Microsoft 365, so assistants can work with real context (tickets, mail, documents) instead of asking the user to copy and paste it in. Each connector carries its own limits on what it may read and what it may write.",
            },
          },
          {
            title: {
              ca: "Agent d'integració amb TIA Portal via API Openness",
              es: "Agente de integración con TIA Portal vía API Openness",
              en: "TIA Portal integration agent via the Openness API",
            },
            content: {
              ca: "És la peça més exigent del projecte. He desenvolupat un agent propi que, a través de l'API Openness de Siemens, llegeix i modifica projectes de PLC directament des del xat: codi SCL, taules de variables, configuració de maquinari i configuració de xarxa PROFINET.\n\nVol dir que una consulta en llenguatge natural pot acabar en una lectura o en un canvi real sobre un projecte d'automatització. Precisament per això, la part més important del disseny no és el que l'agent pot fer, sinó els límits explícits del que té permès tocar i la traça del que ha fet.",
              es: "Es la pieza más exigente del proyecto. He desarrollado un agente propio que, a través de la API Openness de Siemens, lee y modifica proyectos de PLC directamente desde el chat: código SCL, tablas de variables, configuración de hardware y configuración de red PROFINET.\n\nSignifica que una consulta en lenguaje natural puede acabar en una lectura o en un cambio real sobre un proyecto de automatización. Precisamente por eso, la parte más importante del diseño no es lo que el agente puede hacer, sino los límites explícitos de lo que tiene permitido tocar y la traza de lo que ha hecho.",
              en: "This is the most demanding part of the project. I built a custom agent that, through Siemens' Openness API, reads and modifies PLC projects directly from the chat: SCL code, tag tables, hardware configuration and PROFINET network configuration.\n\nIt means a natural-language question can end in a real read or a real change against an automation project. Which is exactly why the most important part of the design isn't what the agent can do, but the explicit limits on what it is allowed to touch and the trace of what it did.",
            },
          },
        ],
      },
      {
        id: "mesura",
        title: { ca: "Mesura i resultats", es: "Medición y resultados", en: "Measurement & results" },
        content: {
          ca: "Un sistema RAG és fàcil de fer semblar bo en una demo i difícil de fer bo de veritat. Per això vaig muntar un cicle de mesura sobre preguntes reals de tècnics, no sobre exemples escollits per lluir.\n\nAmb aquest cicle, la proporció de material útil recuperat ha passat del **63% al 80%**, i la memòria consumida per sessió s'ha reduït **30 vegades**.\n\nLa segona xifra és la que fa el sistema sostenible. Sense ella, el cost per consulta i la latència creixien fins a deixar la plataforma fora de l'ús diari, que és exactament on ha de funcionar.",
          es: "Un sistema RAG es fácil de hacer parecer bueno en una demo y difícil de hacer bueno de verdad. Por eso monté un ciclo de medición sobre preguntas reales de técnicos, no sobre ejemplos escogidos para lucir.\n\nCon ese ciclo, la proporción de material útil recuperado ha pasado del **63% al 80%**, y la memoria consumida por sesión se ha reducido **30 veces**.\n\nLa segunda cifra es la que hace sostenible el sistema. Sin ella, el coste por consulta y la latencia crecían hasta dejar la plataforma fuera del uso diario, que es exactamente donde tiene que funcionar.",
          en: "A RAG system is easy to make look good in a demo and hard to make genuinely good. So I built a measurement loop over real technician questions rather than examples picked to flatter it.\n\nThrough that loop, the share of useful material retrieved went from **63% to 80%**, and memory consumed per session dropped **30 times over**.\n\nThe second figure is what makes the system sustainable. Without it, cost per query and latency grew until the platform fell out of daily use, which is precisely where it has to work.",
        },
      },
      {
        id: "adopcio",
        title: { ca: "Adopció a l'organització", es: "Adopción en la organización", en: "Adoption across the organisation" },
        content: {
          ca: "Part de l'encàrrec és liderar l'adopció a tota l'organització, i és una feina diferent de construir la plataforma. Implica entendre com treballa cada equip, decidir quins assistents tenen sentit per a cadascun, formar la gent i, sobretot, recollir els casos en què el sistema no ajuda.\n\nAquests casos són els que marquen què s'ha de millorar després, i també d'on surten les preguntes reals que alimenten el cicle de mesura. Sense usuaris de veritat, avaluar un sistema així és una conjectura ben presentada.",
          es: "Parte del encargo es liderar la adopción en toda la organización, y es un trabajo distinto de construir la plataforma. Implica entender cómo trabaja cada equipo, decidir qué asistentes tienen sentido para cada uno, formar a la gente y, sobre todo, recoger los casos en que el sistema no ayuda.\n\nEsos casos son los que marcan qué hay que mejorar después, y también de donde salen las preguntas reales que alimentan el ciclo de medición. Sin usuarios de verdad, evaluar un sistema así es una conjetura bien presentada.",
          en: "Part of the remit is leading adoption across the organisation, and that is different work from building the platform. It means understanding how each team operates, deciding which assistants make sense for whom, training people, and above all collecting the cases where the system doesn't help.\n\nThose cases are what set the improvement agenda, and they're also where the real questions feeding the measurement loop come from. Without actual users, evaluating a system like this is guesswork in a nice suit.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          // REVISAR: concreta aquí les eines exactes (quina base vectorial, quins
          // models, quin runtime) si les vols fer públiques.
          ca: "- **Arquitectura RAG**: base de dades vectorial amb recuperació híbrida, cerca semàntica i lèxica combinades amb una passada de reordenació.\n- **Models multimodals**: diagnòstic a partir de fotografies d'equips, quadres i plaques de característiques.\n- **MCP**: connectors propis cap a Jira i Microsoft 365.\n- **Siemens Openness API**: agent de lectura i modificació de projectes de TIA Portal (SCL, taules de variables, maquinari, PROFINET).\n- **Aïllament a nivell de sistema operatiu**: separació d'entorns per usuari.\n- **Desplegament autoallotjat**: tota la plataforma dins de la infraestructura d'AETECH.",
          es: "- **Arquitectura RAG**: base de datos vectorial con recuperación híbrida, búsqueda semántica y léxica combinadas con una pasada de reordenación.\n- **Modelos multimodales**: diagnóstico a partir de fotografías de equipos, cuadros y placas de características.\n- **MCP**: conectores propios hacia Jira y Microsoft 365.\n- **Siemens Openness API**: agente de lectura y modificación de proyectos de TIA Portal (SCL, tablas de variables, hardware, PROFINET).\n- **Aislamiento a nivel de sistema operativo**: separación de entornos por usuario.\n- **Despliegue autoalojado**: toda la plataforma dentro de la infraestructura de AETECH.",
          en: "- **RAG architecture**: vector database with hybrid retrieval, semantic and lexical search combined with a reranking pass.\n- **Multimodal models**: diagnosis from photographs of equipment, cabinets and nameplates.\n- **MCP**: custom connectors to Jira and Microsoft 365.\n- **Siemens Openness API**: agent that reads and modifies TIA Portal projects (SCL, tag tables, hardware, PROFINET).\n- **OS-level isolation**: separate environments per user.\n- **Self-hosted deployment**: the entire platform inside AETECH's infrastructure.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "La plataforma és en ús i en evolució contínua. Les línies obertes són ampliar la cobertura documental, afinar el cicle d'avaluació amb més preguntes reals i estendre les capacitats de l'agent de TIA Portal.\n\nÉs el projecte on convergeix tota la resta del que faig: recuperació, avaluació, agents amb eines, multimodalitat i integració amb els sistemes que ja hi havia, tot alhora i amb usuaris de veritat al davant.",
          es: "La plataforma está en uso y en evolución continua. Las líneas abiertas son ampliar la cobertura documental, afinar el ciclo de evaluación con más preguntas reales y extender las capacidades del agente de TIA Portal.\n\nEs el proyecto donde converge todo lo demás que hago: recuperación, evaluación, agentes con herramientas, multimodalidad e integración con los sistemas que ya existían, todo a la vez y con usuarios de verdad delante.",
          en: "The platform is in use and under continuous development. Open threads are widening documentation coverage, sharpening the evaluation loop with more real questions, and extending what the TIA Portal agent can do.\n\nIt's the project where everything else I do converges: retrieval, evaluation, tool-using agents, multimodality and integration with the systems already in place, all at once and with real users in front of it.",
        },
      },
    ],
  },

  {
    slug: "videojoccomplet",
    title: {
      ca: "Món obert multijugador amb NPCs dirigits per LLM",
      es: "Mundo abierto multijugador con NPCs dirigidos por LLM",
      en: "Multiplayer open world with LLM-driven NPCs",
    },
    subtitle: {
      ca: "Un sistema distribuït en temps real, disfressat de videojoc de contraban.",
      es: "Un sistema distribuido en tiempo real, disfrazado de videojuego de contrabando.",
      en: "A real-time distributed system, disguised as a smuggling game.",
    },
    description: {
      ca: "Videojoc multijugador de conducció i contraban en un món urbà obert. Sota la superfície és el projecte més exigent que he fet a nivell de sistema: estat compartit entre clients, autoritat de xarxa, càrrega d'escenes sincronitzada i NPCs que responen amb llenguatge generat en funció del context de la partida.",
      es: "Videojuego multijugador de conducción y contrabando en un mundo urbano abierto. Bajo la superficie es el proyecto más exigente que he hecho a nivel de sistema: estado compartido entre clientes, autoridad de red, carga de escenas sincronizada y NPCs que responden con lenguaje generado en función del contexto de la partida.",
      en: "A multiplayer driving and smuggling game set in an open urban world. Under the surface it is the most demanding system I have built: shared state across clients, network authority, synchronised scene loading, and NPCs that answer with generated language based on the state of the run.",
    },
    demonstrates: {
      ca: "Estat distribuït en temps real i LLMs integrats en un bucle interactiu",
      es: "Estado distribuido en tiempo real y LLMs integrados en un bucle interactivo",
      en: "Real-time distributed state and LLMs inside an interactive loop",
    },
    context: { ca: "Projecte personal", es: "Proyecto personal", en: "Personal project" },
    year: "2025",
    tags: [
      "Unity",
      "C#",
      "LLMs",
      "Netcode for GameObjects",
      "Cinemachine",
      "ShaderGraph",
      "Multiplayer",
    ],
    images: [
      "/ProjectImages/VideoGame/0.gif",
      "/ProjectImages/VideoGame/1.gif",
      "/ProjectImages/VideoGame/2.gif",
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Visió general", es: "Visión general", en: "Overview" },
        content: {
          ca: "El jugador rep un encàrrec: transportar una càrrega fins a un punt fronterer, travessant controls policials, tallers, garatges i un món que reacciona a les seves decisions. El que m'interessava del projecte no era el joc en si, sinó el problema tècnic que hi ha a sota: mantenir diversos clients d'acord sobre un món que canvia constantment, sense desincronitzacions ni estats impossibles.",
          es: "El jugador recibe un encargo: transportar una carga hasta un punto fronterizo, atravesando controles policiales, talleres, garajes y un mundo que reacciona a sus decisiones. Lo que me interesaba del proyecto no era el juego en sí, sino el problema técnico que hay debajo: mantener a varios clientes de acuerdo sobre un mundo que cambia constantemente, sin desincronizaciones ni estados imposibles.",
          en: "The player is handed a job: move a load to a border crossing, through police checkpoints, garages and workshops, in a world that reacts to their decisions. What drew me to the project wasn't the game itself but the technical problem underneath it: keeping several clients agreeing on a constantly changing world, with no desyncs and no impossible states.",
        },
      },
      {
        id: "funcionalitats-clau",
        title: { ca: "Sistemes clau", es: "Sistemas clave", en: "Key systems" },
        accordion: [
          {
            title: {
              ca: "Sincronització multijugador i autoritat",
              es: "Sincronización multijugador y autoridad",
              en: "Multiplayer synchronisation and authority",
            },
            content: {
              ca: "Construït sobre Netcode for GameObjects. Se sincronitzen vehicles, jugadors, escenes i cutscenes. Quan un jugador canvia d'escena, la resta amaguen i carreguen el que cal per mantenir la coherència global. El repte real va ser decidir qui és l'autoritat de cada objecte i què passa quan aquesta autoritat es perd a mig moviment.",
              es: "Construido sobre Netcode for GameObjects. Se sincronizan vehículos, jugadores, escenas y cutscenes. Cuando un jugador cambia de escena, el resto ocultan y cargan lo necesario para mantener la coherencia global. El reto real fue decidir quién es la autoridad de cada objeto y qué ocurre cuando esa autoridad se pierde a medio movimiento.",
              en: "Built on Netcode for GameObjects. Vehicles, players, scenes and cutscenes are all synchronised. When one player changes scene, the others hide and load what they need to keep global coherence. The real challenge was deciding who holds authority over each object, and what happens when that authority is lost mid-motion.",
            },
          },
          {
            title: {
              ca: "NPCs reactius amb generació de llenguatge",
              es: "NPCs reactivos con generación de lenguaje",
              en: "Reactive NPCs with language generation",
            },
            content: {
              ca: "Les botigues obren i tanquen amb horari real i els NPCs responen a través d'un sistema d'IA que genera respostes contextuals a partir de l'estat de la partida. És el primer cop que vaig posar un model de llenguatge dins d'un bucle interactiu amb pressupost de temps: la resposta ha d'arribar abans que el jugador perdi la paciència, i no pot trencar el to del món.",
              es: "Las tiendas abren y cierran con horario real y los NPCs responden a través de un sistema de IA que genera respuestas contextuales a partir del estado de la partida. Es la primera vez que puse un modelo de lenguaje dentro de un bucle interactivo con presupuesto de tiempo: la respuesta tiene que llegar antes de que el jugador pierda la paciencia, y no puede romper el tono del mundo.",
              en: "Shops open and close on real clock time, and NPCs answer through an AI system that generates contextual responses from the state of the run. It was the first time I put a language model inside an interactive loop with a time budget: the answer has to arrive before the player loses patience, and it can't break the tone of the world.",
            },
          },
          {
            title: {
              ca: "Mecàniques sistèmiques i estat de la càrrega",
              es: "Mecánicas sistémicas y estado de la carga",
              en: "Systemic mechanics and cargo state",
            },
            content: {
              ca: "Sistema complet d'integritat del producte: controls amb verificació, pèrdues per accident, consum i interaccions emergents. Cada decisió altera la quantitat final entregada i el comportament dels NPCs en controls posteriors. És un sistema d'estat acumulatiu on cap esdeveniment es pot tractar de manera aïllada.",
              es: "Sistema completo de integridad del producto: controles con verificación, pérdidas por accidente, consumo e interacciones emergentes. Cada decisión altera la cantidad final entregada y el comportamiento de los NPCs en controles posteriores. Es un sistema de estado acumulativo donde ningún evento se puede tratar de forma aislada.",
              en: "A full cargo-integrity system: verified checkpoints, losses from crashes, consumption and emergent interactions. Every decision alters the final delivered amount and how NPCs behave at later checkpoints. It's a cumulative state system where no single event can be handled in isolation.",
            },
          },
          {
            title: {
              ca: "Personalització i evolució dels vehicles",
              es: "Personalización y evolución de los vehículos",
              en: "Vehicle customisation and progression",
            },
            content: {
              ca: "Carrosseries, millores mecàniques, blindatges i eines de suport com detectors de radar o autopilot. Els tallers reparen danys i redueixen sospita policial; els garatges repartits pel món funcionen com a punts segurs on guardar o substituir vehicles. Tot això és configuració persistent que ha de viatjar sincronitzada entre clients.",
              es: "Carrocerías, mejoras mecánicas, blindajes y herramientas de apoyo como detectores de radar o autopiloto. Los talleres reparan daños y reducen la sospecha policial; los garajes repartidos por el mundo funcionan como puntos seguros donde guardar o sustituir vehículos. Todo eso es configuración persistente que tiene que viajar sincronizada entre clientes.",
              en: "Body kits, mechanical upgrades, armour and support tools like radar detectors or autopilot. Workshops repair damage and lower police suspicion; garages spread across the map act as safe points to store or swap vehicles. All of it is persistent configuration that has to travel synchronised between clients.",
            },
          },
        ],
      },
      {
        id: "aprenentatges",
        title: { ca: "Què me n'enduc", es: "Qué me llevo", en: "What I took from it" },
        content: {
          ca: "És el primer cop que vaig posar un LLM dins d'alguna cosa que havia de funcionar en temps real, i em va ensenyar tot el que no surt als tutorials: què fas mentre la resposta no arriba, quin camí alternatiu tens si la crida falla, i com evites que una sortida rara trenqui l'experiència. Aquests problemes (pressupost de latència, degradació elegant, estat compartit) són exactament els mateixos en un assistent de producte o en un agent que executa tasques. Canvia el domini, no la classe de problema.",
          es: "Es la primera vez que puse un LLM dentro de algo que tenía que funcionar en tiempo real, y me enseñó todo lo que no sale en los tutoriales: qué haces mientras la respuesta no llega, qué camino alternativo tienes si la llamada falla, y cómo evitas que una salida rara rompa la experiencia. Esos problemas (presupuesto de latencia, degradación elegante, estado compartido) son exactamente los mismos en un asistente de producto o en un agente que ejecuta tareas. Cambia el dominio, no la clase de problema.",
          en: "It was the first time I put an LLM inside something that had to work in real time, and it taught me everything the tutorials skip: what you show while the answer is still coming, what fallback you have when the call fails, and how you stop one odd output from breaking the experience. Those problems (latency budgets, graceful degradation, shared state) are exactly the same in a product assistant or a task-running agent. The domain changes; the class of problem doesn't.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          ca: "- **Unity (C#)**: motor, física, interaccions i interfícies.\n- **Netcode for GameObjects**: sincronització, autoritat i escenes compartides.\n- **Cinemachine**: càmeres dinàmiques i cutscenes sincronitzades.\n- **ShaderGraph**: efectes visuals i materials propis.\n- **NavMesh / AI Tools**: navegació i comportament dels NPCs.\n- **API de model de llenguatge**: generació de diàleg contextual.\n- **Blender**: models 3D.\n- **Git / GitHub**: control de versions.",
          es: "- **Unity (C#)**: motor, física, interacciones e interfaces.\n- **Netcode for GameObjects**: sincronización, autoridad y escenas compartidas.\n- **Cinemachine**: cámaras dinámicas y cutscenes sincronizadas.\n- **ShaderGraph**: efectos visuales y materiales propios.\n- **NavMesh / AI Tools**: navegación y comportamiento de los NPCs.\n- **API de modelo de lenguaje**: generación de diálogo contextual.\n- **Blender**: modelos 3D.\n- **Git / GitHub**: control de versiones.",
          en: "- **Unity (C#)**: engine, physics, interactions and UI.\n- **Netcode for GameObjects**: synchronisation, authority and shared scenes.\n- **Cinemachine**: dynamic cameras and synchronised cutscenes.\n- **ShaderGraph**: visual effects and custom materials.\n- **NavMesh / AI Tools**: NPC navigation and behaviour.\n- **Language model API**: contextual dialogue generation.\n- **Blender**: 3D models.\n- **Git / GitHub**: version control.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "El multijugador és estable, amb cutscenes sincronitzades, conducció avançada, inventari i interacció real amb objectes. La feina actual és polir mecàniques, ampliar la narrativa i optimitzar la sincronització de vehicles i escenes.",
          es: "El multijugador es estable, con cutscenes sincronizadas, conducción avanzada, inventario e interacción real con objetos. El trabajo actual es pulir mecánicas, ampliar la narrativa y optimizar la sincronización de vehículos y escenas.",
          en: "Multiplayer is stable, with synchronised cutscenes, advanced driving, inventory and real object interaction. Current work is polishing mechanics, extending the narrative and optimising vehicle and scene synchronisation.",
        },
      },
    ],
  },

  {
    slug: "finantial-tracker",
    title: {
      ca: "Financial Tracker: modelatge de dades i anàlisi temporal",
      es: "Financial Tracker: modelado de datos y análisis temporal",
      en: "Financial Tracker: data modelling and temporal analysis",
    },
    subtitle: {
      ca: "Un esquema relacional ben pensat, aïllament de dades per usuari i quadres de comandament que responen preguntes reals.",
      es: "Un esquema relacional bien pensado, aislamiento de datos por usuario y cuadros de mando que responden preguntas reales.",
      en: "A carefully modelled relational schema, per-user data isolation, and dashboards that answer real questions.",
    },
    description: {
      ca: "Aplicació web per centralitzar i entendre finances personals: comptes, targetes, transaccions, categories i evolució temporal. Va néixer d'una necessitat pròpia, però l'he tractat com un exercici de modelatge de dades: quin esquema aguanta quan les preguntes es tornen més complexes, i com es protegeixen les dades de cada usuari des de la base.",
      es: "Aplicación web para centralizar y entender finanzas personales: cuentas, tarjetas, transacciones, categorías y evolución temporal. Nació de una necesidad propia, pero lo he tratado como un ejercicio de modelado de datos: qué esquema aguanta cuando las preguntas se vuelven más complejas, y cómo se protegen los datos de cada usuario desde la base.",
      en: "A web application to centralise and understand personal finances: accounts, cards, transactions, categories and change over time. It came from a personal need, but I treated it as a data modelling exercise: which schema holds up when the questions get harder, and how each user's data is protected at the database level.",
    },
    demonstrates: {
      ca: "Modelatge relacional, agregació temporal i seguretat a nivell de fila",
      es: "Modelado relacional, agregación temporal y seguridad a nivel de fila",
      en: "Relational modelling, temporal aggregation and row-level security",
    },
    context: { ca: "Projecte personal", es: "Proyecto personal", en: "Personal project" },
    year: "2026",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "RLS",
      "Dashboards",
      "Tailwind CSS",
    ],
    images: [
      "/ProjectImages/FinantialTraker/0.gif",
      "/ProjectImages/FinantialTraker/1.gif",
      "/ProjectImages/FinantialTraker/2.png",
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Visió general", es: "Visión general", en: "Overview" },
        content: {
          ca: "L'objectiu no era registrar despeses, que d'això ja n'hi ha prou aplicacions, sinó oferir una visió estructurada: comptes, targetes associades, categories, períodes i comparatives entre mesos. Des del principi hi ha una separació clara entre dades, lògica i interfície, amb Supabase al darrere i Next.js al davant, perquè el projecte pugui créixer sense que l'esquema s'hagi de reescriure cada cop.",
          es: "El objetivo no era registrar gastos, que de eso ya hay bastantes aplicaciones, sino ofrecer una visión estructurada: cuentas, tarjetas asociadas, categorías, periodos y comparativas entre meses. Desde el principio hay una separación clara entre datos, lógica e interfaz, con Supabase detrás y Next.js delante, para que el proyecto pueda crecer sin que el esquema se tenga que reescribir cada vez.",
          en: "The goal wasn't to log expenses, since there are plenty of apps for that, but to give a structured view: accounts, linked cards, categories, periods and month-over-month comparisons. From the start there's a clear separation between data, logic and interface, with Supabase behind and Next.js in front, so the project can grow without rewriting the schema every time.",
        },
      },
      {
        id: "funcionalitats-clau",
        title: { ca: "Sistemes clau", es: "Sistemas clave", en: "Key systems" },
        accordion: [
          {
            title: {
              ca: "Esquema relacional: comptes, targetes i transaccions",
              es: "Esquema relacional: cuentas, tarjetas y transacciones",
              en: "Relational schema: accounts, cards and transactions",
            },
            content: {
              ca: "Múltiples comptes bancaris, cadascun amb les seves targetes. La separació reflecteix la realitat financera de l'usuari i permet analitzar tant el saldo global com el comportament per compte o per targeta. Cada entitat té la seva vista de detall amb totals i evolució temporal. El repte va ser mantenir l'esquema normalitzat sense que les consultes d'agregació es tornessin impracticables.",
              es: "Múltiples cuentas bancarias, cada una con sus tarjetas. La separación refleja la realidad financiera del usuario y permite analizar tanto el saldo global como el comportamiento por cuenta o por tarjeta. Cada entidad tiene su vista de detalle con totales y evolución temporal. El reto fue mantener el esquema normalizado sin que las consultas de agregación se volvieran impracticables.",
              en: "Multiple bank accounts, each with its own cards. The separation mirrors the user's actual financial setup and makes it possible to analyse both the global balance and behaviour per account or per card. Each entity has its own detail view with totals and change over time. The challenge was keeping the schema normalised without making aggregate queries impractical.",
            },
          },
          {
            title: {
              ca: "Agregació temporal i comparatives entre períodes",
              es: "Agregación temporal y comparativas entre periodos",
              en: "Temporal aggregation and period comparison",
            },
            content: {
              ca: "Quadres de comandament amb targetes de resum, gràfics de barres i circulars que mostren evolució de despesa, ingressos i variació respecte del període anterior. La lògica de càlcul de períodes (mes actual, mes anterior, rangs personalitzats) és la part on més temps vaig invertir, perquè és on una comparativa mal definida dona un número que sembla correcte i no ho és.",
              es: "Cuadros de mando con tarjetas de resumen, gráficos de barras y circulares que muestran evolución de gasto, ingresos y variación respecto al periodo anterior. La lógica de cálculo de periodos (mes actual, mes anterior, rangos personalizados) es la parte donde más tiempo invertí, porque es donde una comparativa mal definida da un número que parece correcto y no lo es.",
              en: "Dashboards with summary cards, bar and donut charts showing spending, income and variation against the previous period. The period logic (current month, previous month, custom ranges) is where most of the time went, because it's where a badly defined comparison produces a number that looks right and isn't.",
            },
          },
          {
            title: {
              ca: "Aïllament de dades amb Row Level Security",
              es: "Aislamiento de datos con Row Level Security",
              en: "Data isolation with Row Level Security",
            },
            content: {
              ca: "Cada usuari només pot accedir a les seves dades gràcies a polítiques RLS a Supabase. Consultes, insercions i actualitzacions estan protegides a la base de dades, no a l'aplicació: encara que el client estigui compromès, no hi ha manera d'arribar a files d'un altre perfil. És l'enfocament que trobo correcte per defecte quan la lògica viu al navegador.",
              es: "Cada usuario solo puede acceder a sus datos gracias a políticas RLS en Supabase. Consultas, inserciones y actualizaciones están protegidas en la base de datos, no en la aplicación: aunque el cliente esté comprometido, no hay manera de llegar a filas de otro perfil. Es el enfoque que considero correcto por defecto cuando la lógica vive en el navegador.",
              en: "Each user can only reach their own data through RLS policies in Supabase. Reads, inserts and updates are protected at the database level, not in the application: even with a compromised client, there's no path to another profile's rows. It's the approach I consider correct by default when logic lives in the browser.",
            },
          },
          {
            title: {
              ca: "Categories reutilitzables i experiència mòbil",
              es: "Categorías reutilizables y experiencia móvil",
              en: "Reusable categories and mobile experience",
            },
            content: {
              ca: "Les categories no només s'apliquen a transaccions, sinó també a comptes i targetes, gestionades des d'un únic lloc per evitar duplicacions. A nivell d'interfície, el disseny està orientat a mòbil: navegació inferior flotant en pantalles petites i layouts amplis en escriptori, sense duplicar lògica entre les dues versions.",
              es: "Las categorías no solo se aplican a transacciones, sino también a cuentas y tarjetas, gestionadas desde un único sitio para evitar duplicaciones. A nivel de interfaz, el diseño está orientado a móvil: navegación inferior flotante en pantallas pequeñas y layouts amplios en escritorio, sin duplicar lógica entre las dos versiones.",
              en: "Categories apply not only to transactions but also to accounts and cards, managed from a single place to avoid duplication. On the interface side the design is mobile-first: a floating bottom navigation on small screens and wider layouts on desktop, without duplicating logic between the two.",
            },
          },
        ],
      },
      {
        id: "aprenentatges",
        title: { ca: "Què me n'enduc", es: "Qué me llevo", en: "What I took from it" },
        content: {
          ca: "És el projecte on he après a pensar l'esquema abans que la pantalla. Les decisions de modelatge que prens al principi són les que després permeten o impedeixen respondre una pregunta nova sense migrar res. Aquesta lliçó és la que més he acabat aplicant als sistemes amb LLMs: si el context no queda capturat al model de dades, cap recuperació posterior, ni el millor embedding, se'l podrà inventar. Un RAG mediocre sovint és un problema de dades disfressat de problema de model.",
          es: "Es el proyecto donde he aprendido a pensar el esquema antes que la pantalla. Las decisiones de modelado que tomas al principio son las que después permiten o impiden responder una pregunta nueva sin migrar nada. Esa lección es la que más he acabado aplicando a los sistemas con LLMs: si el contexto no queda capturado en el modelo de datos, ninguna recuperación posterior, ni el mejor embedding, se lo podrá inventar. Un RAG mediocre a menudo es un problema de datos disfrazado de problema de modelo.",
          en: "This is the project where I learned to think about the schema before the screen. The modelling decisions you take early are the ones that later allow or block answering a new question without a migration. It's the lesson I've ended up applying most to LLM systems: if context isn't captured in the data model, no downstream retrieval, not even the best embedding, can invent it. A mediocre RAG system is often a data problem wearing a model problem's clothes.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          ca: "- **Next.js (App Router)**: estructura de l'aplicació i rutes.\n- **React + TypeScript**: components tipats, estat i lògica d'interfície.\n- **Supabase**: autenticació, PostgreSQL i polítiques RLS.\n- **PostgreSQL**: model relacional de comptes, targetes, transaccions i categories.\n- **Tailwind CSS**: maquetació i disseny responsive.\n- **Components de gràfics propis**: targetes de resum, barres i donuts.\n- **Git / GitHub**: control de versions.",
          es: "- **Next.js (App Router)**: estructura de la aplicación y rutas.\n- **React + TypeScript**: componentes tipados, estado y lógica de interfaz.\n- **Supabase**: autenticación, PostgreSQL y políticas RLS.\n- **PostgreSQL**: modelo relacional de cuentas, tarjetas, transacciones y categorías.\n- **Tailwind CSS**: maquetación y diseño responsive.\n- **Componentes de gráficos propios**: tarjetas de resumen, barras y donuts.\n- **Git / GitHub**: control de versiones.",
          en: "- **Next.js (App Router)**: application structure and routing.\n- **React + TypeScript**: typed components, state and interface logic.\n- **Supabase**: authentication, PostgreSQL and RLS policies.\n- **PostgreSQL**: relational model for accounts, cards, transactions and categories.\n- **Tailwind CSS**: layout and responsive design.\n- **Custom chart components**: summary cards, bars and donuts.\n- **Git / GitHub**: version control.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "És una aplicació funcional i en ús diari: gestió de comptes i targetes, registre de transaccions, anàlisi per categories i evolució temporal. A curt termini continua evolucionant amb millores d'usabilitat i optimització de consultes; a mitjà termini està pensada per créixer cap al seguiment d'inversions.",
          es: "Es una aplicación funcional y en uso diario: gestión de cuentas y tarjetas, registro de transacciones, análisis por categorías y evolución temporal. A corto plazo sigue evolucionando con mejoras de usabilidad y optimización de consultas; a medio plazo está pensada para crecer hacia el seguimiento de inversiones.",
          en: "It's a functional application in daily use: account and card management, transaction logging, category analysis and change over time. Short term it keeps evolving with usability improvements and query optimisation; medium term it's designed to grow toward investment tracking.",
        },
      },
    ],
  },

  {
    slug: "custom-embedded-hmi-device",
    title: {
      ca: "HMI encastat a mida sobre Raspberry Pi",
      es: "HMI empotrado a medida sobre Raspberry Pi",
      en: "Custom embedded HMI on Raspberry Pi",
    },
    subtitle: {
      ca: "Una interfície a pantalla completa dissenyada per a maquinari limitat, entrada tàctil i cap teclat.",
      es: "Una interfaz a pantalla completa diseñada para hardware limitado, entrada táctil y ningún teclado.",
      en: "A full-screen interface designed for constrained hardware, touch input and no keyboard.",
    },
    description: {
      ca: "Aplicació d'escriptori a pantalla completa per a Raspberry Pi, concebuda com un regal digital però construïda com un projecte encastat seriós: galeria, mapa interactiu, cronòmetres, configuració de sistema i integració directa amb el sistema operatiu. És el projecte que millor representa què vol dir dissenyar per a un dispositiu que no té ni ratolí ni teclat i que ha d'arrencar sol.",
      es: "Aplicación de escritorio a pantalla completa para Raspberry Pi, concebida como un regalo digital pero construida como un proyecto empotrado serio: galería, mapa interactivo, cronómetros, configuración de sistema e integración directa con el sistema operativo. Es el proyecto que mejor representa qué significa diseñar para un dispositivo que no tiene ni ratón ni teclado y que tiene que arrancar solo.",
      en: "A full-screen desktop application for the Raspberry Pi, conceived as a digital gift but built as a serious embedded project: gallery, interactive map, timers, system configuration and direct OS integration. It's the project that best captures what it means to design for a device with no mouse, no keyboard, and the expectation that it boots on its own.",
    },
    demonstrates: {
      ca: "Disseny d'HMI per a maquinari limitat i integració amb el sistema operatiu",
      es: "Diseño de HMI para hardware limitado e integración con el sistema operativo",
      en: "HMI design for constrained hardware and operating-system integration",
    },
    context: { ca: "Projecte personal", es: "Proyecto personal", en: "Personal project" },
    year: "2024",
    tags: [
      "Python",
      "Tkinter",
      "Raspberry Pi",
      "Embedded",
      "Pillow",
      "pygame",
      "HMI Design",
    ],
    images: [
      "/ProjectImages/PythonProject/0.gif",
      "/ProjectImages/PythonProject/1.gif",
      "/ProjectImages/PythonProject/2.gif",
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Visió general", es: "Visión general", en: "Overview" },
        content: {
          ca: "El dispositiu arrenca directament a l'aplicació i no en surt mai. Això obliga a resoldre coses que en una aplicació d'escriptori normal no et planteges: com s'escriu text sense teclat, què passa si un recurs no hi és, com s'apaga el sistema des de la mateixa interfície i com es configura la xarxa sense sortir a un terminal. L'estructura és modular (menú principal, galeria, mapa, configuració, cronòmetres i timeline), amb el menú central activant i amagant cada mòdul.",
          es: "El dispositivo arranca directamente en la aplicación y no sale nunca de ella. Eso obliga a resolver cosas que en una aplicación de escritorio normal no te planteas: cómo se escribe texto sin teclado, qué pasa si un recurso no está, cómo se apaga el sistema desde la propia interfaz y cómo se configura la red sin salir a un terminal. La estructura es modular (menú principal, galería, mapa, configuración, cronómetros y timeline), con el menú central activando y ocultando cada módulo.",
          en: "The device boots straight into the application and never leaves it. That forces you to solve things a normal desktop app never raises: how text gets typed with no keyboard, what happens when a resource is missing, how the system shuts down from within the interface, and how the network is configured without dropping to a terminal. The structure is modular (main menu, gallery, map, settings, timers and timeline), with the central menu showing and hiding each module.",
        },
      },
      {
        id: "funcionalitats-clau",
        title: { ca: "Sistemes clau", es: "Sistemas clave", en: "Key systems" },
        accordion: [
          {
            title: {
              ca: "Entrada sense teclat: teclat virtual i canvas",
              es: "Entrada sin teclado: teclado virtual y canvas",
              en: "Keyboard-free input: on-screen keyboard and canvas",
            },
            content: {
              ca: "El mòdul de mapa permet afegir punts fent clic sobre un canvas. En seleccionar una zona apareix un teclat QWERTY a pantalla completa per escriure el nom de la destinació. Cada punt es desa en JSON, es dibuixa sobre el mapa i apareix en una llista lateral des d'on es pot eliminar. Treballar amb coordenades de clic i persistència senzilla em va obligar a pensar la interacció des de zero, sense donar per fet cap perifèric.",
              es: "El módulo de mapa permite añadir puntos haciendo clic sobre un canvas. Al seleccionar una zona aparece un teclado QWERTY a pantalla completa para escribir el nombre del destino. Cada punto se guarda en JSON, se dibuja sobre el mapa y aparece en una lista lateral desde donde se puede eliminar. Trabajar con coordenadas de clic y persistencia sencilla me obligó a pensar la interacción desde cero, sin dar por hecho ningún periférico.",
              en: "The map module lets you add points by clicking on a canvas. Selecting an area brings up a full-screen QWERTY keyboard to type the destination name. Each point is stored as JSON, drawn on the map and listed in a side panel where it can be removed. Working with click coordinates and simple persistence forced me to design the interaction from scratch, assuming no peripherals.",
            },
          },
          {
            title: {
              ca: "Gestió de recursos multimèdia amb memòria limitada",
              es: "Gestión de recursos multimedia con memoria limitada",
              en: "Media handling on limited memory",
            },
            content: {
              ca: "Passi de fotos continu amb càrrega des del sistema de fitxers, redimensionament mantenint proporcions i rotació en bucle. També importació de fotos noves des d'un USB i eliminació d'imatges. En una Raspberry Pi això no és trivial: cal controlar quan es descarrega cada imatge de memòria i com es gestionen els frames dels GIFs animats perquè la interfície no es bloquegi.",
              es: "Pase de fotos continuo con carga desde el sistema de archivos, redimensionado manteniendo proporciones y rotación en bucle. También importación de fotos nuevas desde un USB y eliminación de imágenes. En una Raspberry Pi esto no es trivial: hay que controlar cuándo se descarga cada imagen de memoria y cómo se gestionan los frames de los GIFs animados para que la interfaz no se bloquee.",
              en: "A continuous photo slideshow loading from the filesystem, resizing while preserving aspect ratio and cycling in a loop. Plus importing new photos from a USB drive and deleting images. On a Raspberry Pi this isn't trivial: you have to control when each image leaves memory and how animated GIF frames are handled so the interface doesn't stall.",
            },
          },
          {
            title: {
              ca: "Actualització periòdica sense bloquejar la interfície",
              es: "Actualización periódica sin bloquear la interfaz",
              en: "Periodic updates without blocking the interface",
            },
            content: {
              ca: "Diversos cronòmetres compten el temps des de o fins a dates concretes, actualitzant-se cada segon. Tot passa amb `after()` de Tkinter, mai amb bucles bloquejants, de manera que la interfície continua responent mentre les animacions i els comptadors avancen. És el mateix patró d'esdeveniments cooperatius que després t'estalvia problemes en qualsevol interfície de supervisió.",
              es: "Varios cronómetros cuentan el tiempo desde o hasta fechas concretas, actualizándose cada segundo. Todo ocurre con `after()` de Tkinter, nunca con bucles bloqueantes, de modo que la interfaz sigue respondiendo mientras las animaciones y los contadores avanzan. Es el mismo patrón de eventos cooperativos que después te ahorra problemas en cualquier interfaz de supervisión.",
              en: "Several timers count up from or down to specific dates, refreshing every second. It all runs through Tkinter's `after()`, never through blocking loops, so the interface stays responsive while animations and counters advance. It's the same cooperative event pattern that later saves you trouble in any supervisory interface.",
            },
          },
          {
            title: {
              ca: "Integració amb el sistema: xarxa, energia i processos",
              es: "Integración con el sistema: red, energía y procesos",
              en: "System integration: network, power and processes",
            },
            content: {
              ca: "La secció de configuració concentra la part més tècnica: informació de versió calculada recorrent els fitxers del projecte, configuració de la WiFi editant `wpa_supplicant` i reconfigurant la interfície, control de música, apagada del sistema i un històric en text. Aquí és on el projecte deixa de ser una GUI i passa a ser un dispositiu: subprocessos, permisos i fitxers de sistema.",
              es: "La sección de configuración concentra la parte más técnica: información de versión calculada recorriendo los archivos del proyecto, configuración de la WiFi editando `wpa_supplicant` y reconfigurando la interfaz, control de música, apagado del sistema y un histórico en texto. Aquí es donde el proyecto deja de ser una GUI y pasa a ser un dispositivo: subprocesos, permisos y archivos de sistema.",
              en: "The settings section holds the most technical part: version information computed by walking the project files, WiFi configuration by editing `wpa_supplicant` and reconfiguring the interface, music control, system shutdown and a text-based history log. This is where the project stops being a GUI and becomes a device: subprocesses, permissions and system files.",
            },
          },
        ],
      },
      {
        id: "aprenentatges",
        title: { ca: "Què me n'enduc", es: "Qué me llevo", en: "What I took from it" },
        content: {
          ca: "Aquest és el projecte que em fa sentir còmode parlant d'edge. Un dispositiu que arrenca sol, que ha de sobreviure a que li treguin el corrent i que toca el sistema operatiu per sota és estructuralment el mateix problema que desplegar inferència en local: recursos comptats, cap adult supervisant i tot ha de tornar a funcionar sol quan es reinicia. La diferència és què hi corre a dins, no com s'ha de dissenyar.",
          es: "Este es el proyecto que me hace sentir cómodo hablando de edge. Un dispositivo que arranca solo, que tiene que sobrevivir a que le quiten la corriente y que toca el sistema operativo por debajo es estructuralmente el mismo problema que desplegar inferencia en local: recursos contados, ningún adulto supervisando y todo tiene que volver a funcionar solo cuando se reinicia. La diferencia es qué corre dentro, no cómo hay que diseñarlo.",
          en: "This is the project that makes me comfortable talking about edge. A device that boots unattended, has to survive being unplugged, and reaches into the operating system underneath is structurally the same problem as deploying inference locally: counted resources, no adult supervision, and everything has to come back on its own after a restart. What runs inside differs; how it has to be designed does not.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          ca: "- **Python 3**: llenguatge principal.\n- **Tkinter + ttk / ttkthemes**: interfície gràfica i temes visuals.\n- **Pillow**: càrrega i tractament d'imatges i GIFs animats.\n- **pygame**: reproducció d'àudio en bucle.\n- **JSON**: persistència dels punts del mapa.\n- **datetime**: càlcul de diferències temporals.\n- **os, subprocess, shutil**: integració amb el sistema: USB, WiFi, processos i apagada.",
          es: "- **Python 3**: lenguaje principal.\n- **Tkinter + ttk / ttkthemes**: interfaz gráfica y temas visuales.\n- **Pillow**: carga y tratamiento de imágenes y GIFs animados.\n- **pygame**: reproducción de audio en bucle.\n- **JSON**: persistencia de los puntos del mapa.\n- **datetime**: cálculo de diferencias temporales.\n- **os, subprocess, shutil**: integración con el sistema: USB, WiFi, procesos y apagado.",
          en: "- **Python 3**: main language.\n- **Tkinter + ttk / ttkthemes**: graphical interface and visual themes.\n- **Pillow**: image and animated-GIF loading and processing.\n- **pygame**: looping audio playback.\n- **JSON**: persistence for map points.\n- **datetime**: temporal difference calculations.\n- **os, subprocess, shutil**: system integration: USB, WiFi, processes and shutdown.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "El dispositiu és plenament funcional: en encendre'l s'hi pot navegar per la galeria, consultar el mapa, revisar els cronòmetres i accedir a la configuració i l'històric. El considero un projecte tancat i estable, amb una arquitectura modular que permetria afegir-hi noves seccions sense tocar el nucli.",
          es: "El dispositivo es plenamente funcional: al encenderlo se puede navegar por la galería, consultar el mapa, revisar los cronómetros y acceder a la configuración y al histórico. Lo considero un proyecto cerrado y estable, con una arquitectura modular que permitiría añadir nuevas secciones sin tocar el núcleo.",
          en: "The device is fully functional: on power-up you can browse the gallery, check the map, review the timers and reach settings and history. I consider it closed and stable, with a modular architecture that would allow new sections without touching the core.",
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
      ca: "Client real, requisits reals: estructura de continguts, conversió i compliment legal.",
      es: "Cliente real, requisitos reales: estructura de contenidos, conversión y cumplimiento legal.",
      en: "Real client, real requirements: content structure, conversion and legal compliance.",
    },
    description: {
      ca: "Web corporativa per a un servei tècnic oficial de reparació d'electrodomèstics amb prop de 30 anys d'ofici. Poc codi a mida i molta feina d'estructura: definir què busca un client quan hi arriba, reduir la fricció del formulari de sol·licitud i deixar la part legal ben resolta. L'incloc perquè és el projecte que més m'ha ensenyat sobre requisits que no els posa un enunciat.",
      es: "Web corporativa para un servicio técnico oficial de reparación de electrodomésticos con cerca de 30 años de oficio. Poco código a medida y mucho trabajo de estructura: definir qué busca un cliente cuando llega, reducir la fricción del formulario de solicitud y dejar la parte legal bien resuelta. Lo incluyo porque es el proyecto que más me ha enseñado sobre requisitos que no los pone un enunciado.",
      en: "A corporate website for an official appliance repair service with nearly 30 years in the trade. Little custom code and a lot of structural work: defining what a customer is looking for when they land, reducing friction in the request form, and getting the legal side right. I include it because it taught me most about requirements that don't come from a brief.",
    },
    demonstrates: {
      ca: "Recollida de requisits amb client real i traducció a decisions de producte",
      es: "Recogida de requisitos con cliente real y traducción a decisiones de producto",
      en: "Requirements gathering with a real client, translated into product decisions",
    },
    context: { ca: "Client", es: "Cliente", en: "Client" },
    year: "2025",
    tags: [
      "WordPress",
      "Content Strategy",
      "UX Writing",
      "SEO",
      "GDPR",
      "Responsive Design",
    ],
    images: [
      "/ProjectImages/InterServeis/0.gif",
      "/ProjectImages/InterServeis/1.png",
      "/ProjectImages/InterServeis/2.png",
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Visió general", es: "Visión general", en: "Overview" },
        content: {
          ca: "Interserveis 2022 SL és un servei tècnic oficial situat a Salt, Girona. La web havia de transmetre professionalitat i confiança i, sobretot, facilitar que un client pogués demanar una reparació ràpidament. El projecte va consistir a definir l'estructura de continguts, configurar i personalitzar WordPress, redactar textos comercials i legals, i assegurar que tot funcionés bé al mòbil, que és des d'on arriba la major part del trànsit.",
          es: "Interserveis 2022 SL es un servicio técnico oficial situado en Salt, Girona. La web tenía que transmitir profesionalidad y confianza y, sobre todo, facilitar que un cliente pudiera pedir una reparación rápidamente. El proyecto consistió en definir la estructura de contenidos, configurar y personalizar WordPress, redactar textos comerciales y legales, y asegurar que todo funcionara bien en móvil, que es desde donde llega la mayor parte del tráfico.",
          en: "Interserveis 2022 SL is an authorised service centre based in Salt, Girona. The site had to convey professionalism and trust and, above all, make it easy for a customer to request a repair fast. The project meant defining the content structure, configuring and customising WordPress, writing both commercial and legal copy, and making sure it all worked on mobile, where most of the traffic comes from.",
        },
      },
      {
        id: "funcionalitats-clau",
        title: { ca: "Decisions clau", es: "Decisiones clave", en: "Key decisions" },
        accordion: [
          {
            title: {
              ca: "Estructura de navegació orientada a la intenció",
              es: "Estructura de navegación orientada a la intención",
              en: "Navigation structured around intent",
            },
            content: {
              ca: "Inici, Sol·licitar, Marques oficials, Serveis, Catàleg i Contactar. L'ordre no és arbitrari: respon al que un client busca primer quan se li ha espatllat un electrodomèstic: telèfon, si treballen amb la seva marca, i com demanar el servei. La resta de contingut és de suport a la confiança, no de conversió.",
              es: "Inicio, Solicitar, Marcas oficiales, Servicios, Catálogo y Contactar. El orden no es arbitrario: responde a lo que un cliente busca primero cuando se le ha estropeado un electrodoméstico: teléfono, si trabajan con su marca, y cómo pedir el servicio. El resto de contenido es de apoyo a la confianza, no de conversión.",
              en: "Home, Request, Authorised brands, Services, Catalogue and Contact. The order isn't arbitrary: it follows what a customer looks for first when an appliance breaks: phone number, whether their brand is covered, and how to book the service. Everything else supports trust rather than conversion.",
            },
          },
          {
            title: {
              ca: "Formularis pensats per reduir fricció",
              es: "Formularios pensados para reducir fricción",
              en: "Forms designed to reduce friction",
            },
            content: {
              ca: "Poques dades, però les necessàries per gestionar bé una incidència. La feina va ser decidir quins camps són imprescindibles, quins són opcionals i com redactar-los perquè un client no tècnic entengui què se li demana sense haver de preguntar per telèfon.",
              es: "Pocos datos, pero los necesarios para gestionar bien una incidencia. El trabajo fue decidir qué campos son imprescindibles, cuáles son opcionales y cómo redactarlos para que un cliente no técnico entienda qué se le pide sin tener que preguntar por teléfono.",
              en: "Few fields, but the ones needed to handle a case properly. The work was deciding which fields are essential, which are optional, and how to word them so a non-technical customer understands what's being asked without having to call and check.",
            },
          },
          {
            title: {
              ca: "Compliment legal: RGPD, cookies i avís legal",
              es: "Cumplimiento legal: RGPD, cookies y aviso legal",
              en: "Legal compliance: GDPR, cookies and legal notice",
            },
            content: {
              ca: "Política de privacitat, política de cookies i avís legal adaptats al cas concret: raó social, NIF, adreça, finalitats de tractament i base legal, més la gestió del consentiment de cookies. Traslladar requisits legals a un llenguatge entenedor però formal és una habilitat que després serveix per a qualsevol document tècnic amb implicacions.",
              es: "Política de privacidad, política de cookies y aviso legal adaptados al caso concreto: razón social, NIF, dirección, finalidades de tratamiento y base legal, más la gestión del consentimiento de cookies. Trasladar requisitos legales a un lenguaje entendible pero formal es una habilidad que después sirve para cualquier documento técnico con implicaciones.",
              en: "Privacy policy, cookie policy and legal notice tailored to the specific case: registered name, tax ID, address, processing purposes and legal basis, plus cookie consent handling. Turning legal requirements into language that's readable but still formal is a skill that transfers to any technical document with consequences.",
            },
          },
        ],
      },
      {
        id: "aprenentatges",
        title: { ca: "Què me n'enduc", es: "Qué me llevo", en: "What I took from it" },
        content: {
          ca: "És el primer projecte on el client no era jo. Els requisits no venien escrits: sortien de converses, de saber què els preguntaven els clients per telèfon i de què els feia perdre feina. Aquesta manera d'extreure requisits d'algú que no parla en termes tècnics és exactament la que necessita qualsevol projecte d'IA aplicada: la persona que millor entén el problema gairebé mai és la que sap explicar-te quines dades calen, quin context ha d'anar al model o què hauria de considerar-se una bona resposta.",
          es: "Es el primer proyecto donde el cliente no era yo. Los requisitos no venían escritos: salían de conversaciones, de saber qué les preguntaban los clientes por teléfono y de qué les hacía perder trabajo. Esa manera de extraer requisitos de alguien que no habla en términos técnicos es exactamente la que necesita cualquier proyecto de IA aplicada: la persona que mejor entiende el problema casi nunca es la que sabe explicarte qué datos hacen falta, qué contexto debe ir al modelo o qué debería considerarse una buena respuesta.",
          en: "It's the first project where the client wasn't me. Requirements didn't arrive written down: they came out of conversations, of knowing what customers asked on the phone, and of what was costing them work. Pulling requirements out of someone who doesn't speak in technical terms is exactly what any applied AI project needs: the person who understands the problem best is almost never the one who can tell you what data is required, what context belongs in the model, or what should count as a good answer.",
        },
      },
      {
        id: "tech-stack",
        title: { ca: "Stack", es: "Stack", en: "Stack" },
        content: {
          ca: "- **WordPress**: gestor de continguts i administració.\n- **Tema i constructor de pàgines**: maquetació de totes les seccions.\n- **Plugins de formularis**: sol·licitud de servei i contacte.\n- **Gestió de cookies i consentiment**: banner i preferències de privacitat.\n- **HTML / CSS**: ajustos puntuals d'estil.\n- **Hosting amb HTTPS**: certificat SSL i accés segur.",
          es: "- **WordPress**: gestor de contenidos y administración.\n- **Tema y constructor de páginas**: maquetación de todas las secciones.\n- **Plugins de formularios**: solicitud de servicio y contacto.\n- **Gestión de cookies y consentimiento**: banner y preferencias de privacidad.\n- **HTML / CSS**: ajustes puntuales de estilo.\n- **Hosting con HTTPS**: certificado SSL y acceso seguro.",
          en: "- **WordPress**: content management and administration.\n- **Theme and page builder**: layout for all sections.\n- **Form plugins**: service request and contact.\n- **Cookie and consent management**: banner and privacy preferences.\n- **HTML / CSS**: targeted style adjustments.\n- **HTTPS hosting**: SSL certificate and secure access.",
        },
      },
      {
        id: "resultats",
        title: { ca: "Estat actual", es: "Estado actual", en: "Current state" },
        content: {
          ca: "La web és avui l'aparador digital principal de l'empresa: presenta els serveis i les marques oficials, i posa fàcil demanar una reparació. Per mi va ser el pas del projecte acadèmic al projecte amb conseqüències.",
          es: "La web es hoy el escaparate digital principal de la empresa: presenta los servicios y las marcas oficiales, y pone fácil pedir una reparación. Para mí fue el paso del proyecto académico al proyecto con consecuencias.",
          en: "The site is now the company's main digital storefront: it presents the services and authorised brands and makes requesting a repair straightforward. For me it was the step from academic project to project with consequences.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------
   * ESBORRANY: plantilla per al teu primer projecte d'LLM aplicat.
   * És el forat més important del portfoli: tot el posicionament d'IA
   * aplicada se sosté ara mateix en projectes reenfocats, no en un
   * sistema amb LLMs construït per tu de cap a peus.
   *
   * Omple els camps i treu `draft: true` perquè aparegui al llistat.
   * ------------------------------------------------------------------ */
  {
    slug: "projecte-llm",
    draft: true,
    title: {
      ca: "REVISAR: Títol del projecte amb LLMs",
      es: "REVISAR: Título del proyecto con LLMs",
      en: "REVIEW: LLM project title",
    },
    subtitle: {
      ca: "Una línia sobre què resol i per a qui.",
      es: "Una línea sobre qué resuelve y para quién.",
      en: "One line on what it solves and for whom.",
    },
    description: {
      ca: "Descriu el problema, quin coneixement o documents hi havia disponibles, com recuperes el context, com avalues que la resposta és bona i per què calia un LLM i no una regla o una cerca normal.",
      es: "Describe el problema, qué conocimiento o documentos había disponibles, cómo recuperas el contexto, cómo evalúas que la respuesta es buena y por qué hacía falta un LLM y no una regla o una búsqueda normal.",
      en: "Describe the problem, what knowledge or documents were available, how you retrieve context, how you evaluate that the answer is good, and why this needed an LLM rather than a rule or plain search.",
    },
    demonstrates: {
      ca: "REVISAR: què demostra del teu perfil",
      es: "REVISAR: qué demuestra de tu perfil",
      en: "REVIEW: what it demonstrates about your profile",
    },
    context: { ca: "Client", es: "Cliente", en: "Client" },
    year: "2026",
    tags: ["Python", "Claude API", "RAG", "pgvector", "Docker"],
    images: [
      "/ProjectImages/test.jpg",
      "/ProjectImages/test.jpg",
      "/ProjectImages/test.jpg",
    ],
    sections: [
      {
        id: "visio-general",
        title: { ca: "Visió general", es: "Visión general", en: "Overview" },
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

export const workSection = {
  label: { ca: "Projectes", es: "Proyectos", en: "Work" } satisfies L,
  heading: {
    ca: { lead: "Coses que he", accent: "construït" },
    es: { lead: "Cosas que he", accent: "construido" },
    en: { lead: "Things I have", accent: "built" },
  } satisfies L<{ lead: string; accent: string }>,
};
