import type { L } from "../i18n/LanguageProvider";

/**
 * Àmbits de treball, explicats perquè els entengui algú no tècnic:
 * el resum diu quin problema es resol i els casos, on s'ha fet i què.
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
  /** Casos concrets agrupats per lloc: és el que fa l'àmbit creïble. */
  cases: { place: string; points: L<string[]> }[];
  stack: string[];
};

export const domains: Domain[] = [
  {
    id: "applied-ai",
    title: {
      ca: "IA connectada a les dades i les eines de l'empresa",
      es: "IA conectada a los datos y las herramientas de la empresa",
      en: "AI connected to a company's data and tools",
    },
    summary: {
      ca: "Sovint la solució a un problema ja és escrita en algun lloc: una incidència antiga, un manual, un informe. Construeixo assistents que la troben i responen citant-ne la font, i agents que fan accions concretes dins de les eines de treball, amb límits clars i provats amb casos reals abans d'arribar als usuaris.",
      es: "A menudo la solución a un problema ya está escrita en algún sitio: una incidencia antigua, un manual, un informe. Construyo asistentes que la encuentran y responden citando la fuente, y agentes que hacen acciones concretas dentro de las herramientas de trabajo, con límites claros y probados con casos reales antes de llegar a los usuarios.",
      en: "The answer to a problem has often already been written down somewhere: an old incident, a manual, a report. I build assistants that find it and answer with a reference to the source, and agents that carry out specific actions inside work tools, with clear limits and tested on real cases before they reach users.",
    },
    cases: [
      {
        place: "AETECH",
        points: {
          ca: [
            "Els tècnics pregunten amb les seves paraules com es va resoldre una avaria i reben la resposta extreta d'anys d'incidències i documentació, amb la font citada. Tot s'executa als servidors de l'empresa: cap document de client en surt.",
            "Diagnòstic a partir d'una fotografia (una alarma a la pantalla d'una màquina, un quadre elèctric o una placa de característiques) creuada amb l'historial d'incidències.",
            "Un agent que llegeix i modifica projectes de PLC de Siemens (TIA Portal) des d'un xat, i connexions amb Jira i Microsoft 365 per consultar tiquets, correus i documents sense haver-los de copiar.",
            "Cada canvi es prova amb preguntes reals dels tècnics abans de publicar-lo: la informació rellevant que troba l'assistent ha passat del 63% al 80%.",
          ],
          es: [
            "Los técnicos preguntan con sus propias palabras cómo se resolvió una avería y reciben la respuesta extraída de años de incidencias y documentación, con la fuente citada. Todo se ejecuta en los servidores de la empresa: ningún documento de cliente sale de ellos.",
            "Diagnóstico a partir de una fotografía (una alarma en la pantalla de una máquina, un cuadro eléctrico o una placa de características) cruzada con el historial de incidencias.",
            "Un agente que lee y modifica proyectos de PLC de Siemens (TIA Portal) desde un chat, y conexiones con Jira y Microsoft 365 para consultar tiques, correos y documentos sin tener que copiarlos.",
            "Cada cambio se prueba con preguntas reales de los técnicos antes de publicarlo: la información relevante que encuentra el asistente ha pasado del 63% al 80%.",
          ],
          en: [
            "Technicians ask in their own words how a fault was fixed and get an answer drawn from years of incidents and documentation, with the source cited. Everything runs on the company's own servers: no client document ever leaves them.",
            "Diagnosis from a photo (an alarm on a machine's screen, an electrical panel or a rating plate) cross-checked against the incident history.",
            "An agent that reads and modifies Siemens PLC projects (TIA Portal) from a chat, plus connections to Jira and Microsoft 365 to look up tickets, emails and documents without copying them over.",
            "Every change is tested against real questions from technicians before release: the share of relevant information the assistant finds has gone from 63% to 80%.",
          ],
        },
      },
      {
        place: "Capital Tracker",
        points: {
          ca: [
            "Capital AI respon preguntes com «on se'm van els diners?» i crea pressupostos a partir de l'historial, treballant directament sobre les dades de l'usuari i amb cada canvi registrat per poder-lo desfer.",
          ],
          es: [
            "Capital AI responde preguntas como «¿en qué se me va el dinero?» y crea presupuestos a partir del historial, trabajando directamente sobre los datos del usuario y con cada cambio registrado para poder deshacerlo.",
          ],
          en: [
            "Capital AI answers questions like \"where does my money go?\" and builds budgets from past spending, working directly on the user's data with every change logged so it can be undone.",
          ],
        },
      },
    ],
    stack: ["RAG", "Cerca híbrida", "Reranking", "MCP", "Models multimodals", "Claude", "OpenAI API", "Siemens Openness"],
  },
  {
    id: "product",
    title: {
      ca: "Aplicacions web i mòbil, de la idea a la publicació",
      es: "Aplicaciones web y móvil, de la idea a la publicación",
      en: "Web and mobile apps, from idea to launch",
    },
    summary: {
      ca: "M'encarrego de tot el recorregut d'una aplicació: què ha de fer, com es guarden les dades, la interfície, els pagaments i la publicació. Capital Tracker n'és l'exemple: va començar com a treball de final de grau i avui està publicada a la web i a Google Play, en set idiomes.",
      es: "Me encargo de todo el recorrido de una aplicación: qué debe hacer, cómo se guardan los datos, la interfaz, los pagos y la publicación. Capital Tracker es el ejemplo: empezó como trabajo de fin de grado y hoy está publicada en la web y en Google Play, en siete idiomas.",
      en: "I handle an app's whole journey: what it needs to do, how data is stored, the interface, payments and release. Capital Tracker is the example: it started as my final-year project and is now live on the web and on Google Play, in seven languages.",
    },
    cases: [
      {
        place: "Capital Tracker",
        points: {
          ca: [
            "Una sola base de codi per a la web i l'aplicació Android: cada funcionalitat nova arriba a totes dues alhora.",
            "Tres plans de subscripció amb pagament a la web i a Google Play; en passar a un pla superior només es cobra la part proporcional.",
            "Més de 1.300 proves automàtiques sobre els càlculs en què un error tindria conseqüències, com les inversions o l'informe per a la declaració de la renda.",
          ],
          es: [
            "Una sola base de código para la web y la aplicación Android: cada funcionalidad nueva llega a ambas a la vez.",
            "Tres planes de suscripción con pago en la web y en Google Play; al pasar a un plan superior solo se cobra la parte proporcional.",
            "Más de 1.300 pruebas automáticas sobre los cálculos en los que un error tendría consecuencias, como las inversiones o el informe para la declaración de la renta.",
          ],
          en: [
            "A single codebase for the web and the Android app: every new feature reaches both at once.",
            "Three subscription plans with payment on the web and on Google Play; upgrading only charges the prorated difference.",
            "More than 1,300 automated tests on the calculations where a mistake would matter, such as investments or the tax return report.",
          ],
        },
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Capacitor", "Stripe", "RevenueCat", "Tailwind CSS"],
  },
  {
    id: "data",
    title: {
      ca: "Bases de dades fiables, ràpides i segures",
      es: "Bases de datos fiables, rápidas y seguras",
      en: "Reliable, fast and secure databases",
    },
    summary: {
      ca: "Quan les dades estan mal organitzades, cada pantalla, informe o assistent d'IA acaba donant una xifra diferent. Dissenyo bases de dades perquè tot llegeixi de la mateixa font, les consultes responguin de pressa i cada usuari vegi només el que li correspon.",
      es: "Cuando los datos están mal organizados, cada pantalla, informe o asistente de IA acaba dando una cifra distinta. Diseño bases de datos para que todo lea de la misma fuente, las consultas respondan rápido y cada usuario vea solo lo que le corresponde.",
      en: "When data is badly organised, every screen, report or AI assistant ends up showing a different figure. I design databases so everything reads from the same source, queries respond quickly and each user sees only what they should.",
    },
    cases: [
      {
        place: "Capital Tracker",
        points: {
          ca: [
            "El valor d'una cartera d'inversions en qualsevol dia del passat, amb els preus i els tipus de canvi d'aquell dia.",
            "El tauler principal ha passat de trigar més de 800 ms a menys de 50 ms amb 2.000 moviments, perquè els totals es calculen en el moment de guardar les dades.",
            "Cada usuari només pot accedir a les seves dades, i ho garanteix la mateixa base de dades (60 taules i 173 regles d'accés), no només el codi de l'aplicació.",
          ],
          es: [
            "El valor de una cartera de inversiones en cualquier día del pasado, con los precios y los tipos de cambio de ese día.",
            "El panel principal ha pasado de tardar más de 800 ms a menos de 50 ms con 2.000 movimientos, porque los totales se calculan en el momento de guardar los datos.",
            "Cada usuario solo puede acceder a sus datos, y lo garantiza la propia base de datos (60 tablas y 173 reglas de acceso), no solo el código de la aplicación.",
          ],
          en: [
            "The value of an investment portfolio on any past day, using that day's prices and exchange rates.",
            "The main dashboard went from over 800 ms to under 50 ms with 2,000 transactions, because totals are calculated when the data is saved.",
            "Each user can only access their own data, enforced by the database itself (60 tables and 173 access rules), not just by the application code.",
          ],
        },
      },
      {
        place: "SATB2C",
        points: {
          ca: ["Optimització de les consultes SQL del portal de gestió d'ordres de treball, amb l'aplicació en ús."],
          es: ["Optimización de las consultas SQL del portal de gestión de órdenes de trabajo, con la aplicación en uso."],
          en: ["Optimising the SQL queries of the work-order management portal while it stayed in use."],
        },
      },
    ],
    stack: ["PostgreSQL", "Row Level Security", "MySQL", "SQL", "Microsoft Access"],
  },
  {
    id: "automation",
    title: {
      ca: "Automatització de tasques manuals",
      es: "Automatización de tareas manuales",
      en: "Automating manual work",
    },
    summary: {
      ca: "Moltes hores se'n van a copiar dades d'un lloc a un altre, omplir formularis o preparar informes a mà. Primer observo com es fa realment la feina, que sovint no coincideix amb el procediment escrit, i després automatitzo el que estalvia temps de veritat.",
      es: "Muchas horas se van en copiar datos de un sitio a otro, rellenar formularios o preparar informes a mano. Primero observo cómo se hace realmente el trabajo, que a menudo no coincide con el procedimiento escrito, y después automatizo lo que ahorra tiempo de verdad.",
      en: "A lot of hours go into copying data from one place to another, filling in forms or preparing reports by hand. I first look at how the work is really done, which often differs from the written procedure, and then automate what genuinely saves time.",
    },
    cases: [
      {
        place: "Universitat de Girona",
        points: {
          ca: ["Automatització de tràmits administratius en tres unitats de la universitat, entre elles la Unitat de Salut Laboral, amb impacte en més de 80 llocs de treball."],
          es: ["Automatización de trámites administrativos en tres unidades de la universidad, entre ellas la Unidad de Salud Laboral, con impacto en más de 80 puestos de trabajo."],
          en: ["Automating administrative procedures in three university units, including the Occupational Health Unit, affecting more than 80 positions."],
        },
      },
      {
        place: "Capital Tracker",
        points: {
          ca: ["Importació d'extractes bancaris des d'un Excel, un PDF o una fotografia, sense haver d'entrar els moviments a mà; quan llegeix un PDF o una foto, comprova que els saldos quadrin."],
          es: ["Importación de extractos bancarios desde un Excel, un PDF o una fotografía, sin tener que introducir los movimientos a mano; cuando lee un PDF o una foto, comprueba que los saldos cuadren."],
          en: ["Importing bank statements from an Excel file, a PDF or a photo, with no manual entry of transactions; when reading a PDF or photo, it checks that the balances add up."],
        },
      },
      {
        place: "SATB2C",
        points: {
          ca: ["Integració de l'API d'OpenAI per automatitzar processos interns del portal de gestió d'ordres de treball."],
          es: ["Integración de la API de OpenAI para automatizar procesos internos del portal de gestión de órdenes de trabajo."],
          en: ["Integrating the OpenAI API to automate internal processes in the work-order management portal."],
        },
      },
      {
        place: "Freelance",
        points: {
          ca: ["Aplicacions de gestió en Microsoft Access per a petites organitzacions: formularis per entrar les dades, consultes i informes generats automàticament."],
          es: ["Aplicaciones de gestión en Microsoft Access para pequeñas organizaciones: formularios para introducir los datos, consultas e informes generados automáticamente."],
          en: ["Management applications in Microsoft Access for small organisations: data-entry forms, queries and automatically generated reports."],
        },
      },
    ],
    stack: ["Python", "VBA", "APIs REST", "OpenAI API", "Firebase"],
  },
  {
    id: "legacy",
    title: {
      ca: "Modernització d'aplicacions que ja estan en ús",
      es: "Modernización de aplicaciones que ya están en uso",
      en: "Modernising applications already in use",
    },
    summary: {
      ca: "Sovint no cal començar de zero: l'aplicació ja funciona i hi ha gent que la fa servir cada dia. La feina és entendre el codi existent, millorar-lo per parts i afegir-hi el que falta sense aturar l'activitat de ningú.",
      es: "A menudo no hace falta empezar de cero: la aplicación ya funciona y hay gente que la usa cada día. El trabajo consiste en entender el código existente, mejorarlo por partes y añadir lo que falta sin detener la actividad de nadie.",
      en: "Often there's no need to start from scratch: the application already works and people use it every day. The job is to understand the existing code, improve it piece by piece and add what's missing without stopping anyone's work.",
    },
    cases: [
      {
        place: "SATB2C",
        points: {
          ca: [
            "Migració del codi PHP del portal de gestió d'ordres de treball i incorporació de notificacions push, amb la presentació de les novetats a 8 clients.",
            "Disseny i publicació de webs corporatives en WordPress.",
          ],
          es: [
            "Migración del código PHP del portal de gestión de órdenes de trabajo e incorporación de notificaciones push, con la presentación de las novedades a 8 clientes.",
            "Diseño y publicación de webs corporativas en WordPress.",
          ],
          en: [
            "Migrating the PHP code of the work-order management portal and adding push notifications, then presenting the new features to 8 clients.",
            "Designing and publishing corporate websites in WordPress.",
          ],
        },
      },
      {
        place: "Freelance",
        points: {
          ca: ["Renovació de llocs web en Drupal: la part visual, l'organització dels continguts, l'allotjament i la publicació."],
          es: ["Renovación de sitios web en Drupal: la parte visual, la organización de los contenidos, el alojamiento y la publicación."],
          en: ["Revamping Drupal websites: the front end, content structure, hosting and publishing."],
        },
      },
    ],
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
    ca: "Què faig, explicat amb casos reals: per a cada àmbit, on l'he aplicat i què hi he fet.",
    es: "Qué hago, explicado con casos reales: para cada ámbito, dónde lo he aplicado y qué he hecho.",
    en: "What I do, explained through real cases: for each area, where I've applied it and what I did there.",
  } satisfies L,
};
