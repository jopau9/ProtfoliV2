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
  /** Mostra cada element de `points` com un paràgraf en lloc d'un punt de llista. */
  prose?: boolean;
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
      ca: "Sovint la solució a un problema ja és escrita en algun lloc: una incidència antiga, un manual, un informe. Dissenyo i construeixo, de principi a fi, eines d'IA que coneixen tot el negoci: troben aquesta informació, responen citant-ne la font i actuen dins dels programes que l'equip ja fa servir.",
      es: "A menudo la solución a un problema ya está escrita en algún sitio: una incidencia antigua, un manual, un informe. Diseño y construyo, de principio a fin, herramientas de IA que conocen todo el negocio: encuentran esa información, responden citando la fuente y actúan dentro de los programas que el equipo ya utiliza.",
      en: "The answer to a problem has often already been written down somewhere: an old incident, a manual, a report. I design and build end-to-end AI tools that know the whole business: they find that information, cite their source and act inside the software the team already uses.",
    },
    prose: true,
    cases: [
      {
        place: "AETECH",
        points: {
          ca: [
            "L'experiència de l'empresa ja no depèn de qui se'n recorda ni de la documentació (si n'hi ha). Qui es troba davant d'un problema en fa una foto o l'explica amb les seves paraules, i rep com resoldre'l amb l'ajuda de la documentació o de precedents d'errors semblants que han quedat registrats.",
            "I, quan cal, també actua. Treballa dins dels programes que l'equip ja fa servir. En el cas d'AETECH, pot editar directament projectes de TIA Portal o Studio 5000 seguint els estàndards de la casa, crear quadres de comandament a PI Vision, modificar formularis d'AVEVA o consultar tiquets de Jira i correus de Microsoft 365. En definitiva, es pot connectar a qualsevol programa intern, tant per consultar-lo i obtenir-ne més informació com per escriure-hi o interactuar-hi.",
          ],
          es: [
            "La experiencia de la empresa ya no depende de quién se acuerde ni de la documentación (si la hay). Quien se encuentra ante un problema le hace una foto o lo explica con sus palabras, y recibe cómo resolverlo con la ayuda de la documentación o de precedentes de errores parecidos que han quedado registrados.",
            "Y, cuando hace falta, también actúa. Trabaja dentro de los programas que el equipo ya utiliza. En el caso de AETECH, puede editar directamente proyectos de TIA Portal o Studio 5000 siguiendo los estándares de la casa, crear cuadros de mando en PI Vision, modificar formularios de AVEVA o consultar tiques de Jira y correos de Microsoft 365. En definitiva, puede conectarse a cualquier programa interno, tanto para consultarlo y obtener más información como para escribir en él o interactuar con él.",
          ],
          en: [
            "The company's know-how no longer depends on who happens to remember it, or on the documentation (if there is any). Anyone facing a problem takes a photo of it or explains it in their own words, and gets how to solve it, drawing on the documentation or on recorded precedents of similar errors.",
            "And, when needed, it acts. It works inside the software the team already uses. At AETECH, it can edit TIA Portal or Studio 5000 projects directly following the company's standards, build dashboards in PI Vision, modify AVEVA forms or look up Jira tickets and Microsoft 365 emails. In short, it can connect to any internal software, both to read from it and gather more information and to write to it or interact with it.",
          ],
        },
      },
      {
        place: "Capital Tracker",
        points: {
          ca: [
            "L'usuari no ha d'interpretar gràfics ni fer comptes: pregunta «on se'm van els diners?» i Capital AI li respon a partir dels seus propis moviments. També li prepara un pressupost basat en el que gasta de veritat, i cada canvi que fa queda registrat per poder-lo desfer, de manera que l'usuari sempre té el control.",
          ],
          es: [
            "El usuario no tiene que interpretar gráficos ni hacer cuentas: pregunta «¿en qué se me va el dinero?» y Capital AI le responde a partir de sus propios movimientos. También le prepara un presupuesto basado en lo que gasta de verdad, y cada cambio que hace queda registrado para poder deshacerlo, así que el usuario siempre tiene el control.",
          ],
          en: [
            "Users don't have to read charts or do the maths: they ask \"where does my money go?\" and Capital AI answers from their own transactions. It also prepares a budget based on what they actually spend, and every change it makes is logged so it can be undone, so the user always stays in control.",
          ],
        },
      },
    ],
    stack: ["RAG", "Cerca híbrida", "Reranking", "MCP", "Models multimodals", "Claude", "OpenAI API", "Siemens Openness"],
  },
  {
    id: "automation",
    title: {
      ca: "Automatització de tasques manuals",
      es: "Automatización de tareas manuales",
      en: "Automating manual work",
    },
    summary: {
      ca: "No sempre cal intel·ligència artificial. Bona part de la feina repetitiva, com copiar dades d'un lloc a un altre, omplir formularis o preparar informes, es resol millor amb un programa ben fet que fa sempre el mateix: és més ràpid, més barat i més fiable. Primer observo com es fa realment la feina, que sovint no coincideix amb el procediment escrit, i després automatitzo el que estalvia temps de veritat.",
      es: "No siempre hace falta inteligencia artificial. Buena parte del trabajo repetitivo, como copiar datos de un sitio a otro, rellenar formularios o preparar informes, se resuelve mejor con un programa bien hecho que hace siempre lo mismo: es más rápido, más barato y más fiable. Primero observo cómo se hace realmente el trabajo, que a menudo no coincide con el procedimiento escrito, y después automatizo lo que ahorra tiempo de verdad.",
      en: "AI isn't always needed. Much repetitive work, such as copying data from one place to another, filling in forms or preparing reports, is better handled by a well-built program that always does the same thing: it's faster, cheaper and more reliable. I first look at how the work is really done, which often differs from the written procedure, and then automate what genuinely saves time.",
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
    id: "web",
    title: {
      ca: "Creació i modernització de webs",
      es: "Creación y modernización de webs",
      en: "Building and modernising websites",
    },
    summary: {
      ca: "Una web ha de servir perquè un client trobi el que busca i contacti amb l'empresa en pocs passos, sobretot des del mòbil. Faig webs noves i renovo les que ja existeixen: l'estructura dels continguts, la part visual, els textos legals, l'allotjament i la publicació.",
      es: "Una web tiene que servir para que un cliente encuentre lo que busca y contacte con la empresa en pocos pasos, sobre todo desde el móvil. Hago webs nuevas y renuevo las que ya existen: la estructura de los contenidos, la parte visual, los textos legales, el alojamiento y la publicación.",
      en: "A website should let a customer find what they need and get in touch in a few steps, especially from a phone. I build new websites and revamp existing ones: content structure, visual design, legal pages, hosting and publishing.",
    },
    cases: [
      {
        place: "Interserveis 2022 SL",
        points: {
          ca: ["Web d'un servei tècnic oficial de reparació d'electrodomèstics, pensada perquè el client demani una reparació en pocs passos des del mòbil, amb els textos comercials i legals (privacitat i galetes) inclosos."],
          es: ["Web de un servicio técnico oficial de reparación de electrodomésticos, pensada para que el cliente pida una reparación en pocos pasos desde el móvil, con los textos comerciales y legales (privacidad y cookies) incluidos."],
          en: ["Website for an authorised appliance repair service, designed so customers can request a repair in a few steps from their phone, including the commercial copy and legal pages (privacy and cookies)."],
        },
      },
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
    stack: ["WordPress", "Drupal", "PHP", "jQuery", "Cordova", "SEO"],
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
