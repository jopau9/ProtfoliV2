import type { L } from "../i18n/LanguageProvider";
import { identity } from "./site";

/**
 * Serveis: la part de la web pensada per captar clients com a freelance
 * (empreses de serveis de tota Espanya; en línia, i presencial a Girona i Barcelona).
 * To no tècnic, català primer. Les demos són exemples amb dades inventades
 * i els temps, estimacions: no s'han de presentar mai com a clients reals.
 *
 * REVISAR: durada del diagnòstic, termini de resposta i textos legals.
 */

export type SectorId = "gestories" | "immobiliaries" | "cliniques";

/** Una demo és un guió: què entra, què fa la IA pas a pas i què en surt. */
export type DemoScenario = {
  id: string;
  tab: L;
  input: {
    channel: L;
    from: L;
    subject?: L;
    body: L;
    attachment?: L;
  };
  steps: L<string[]>;
  output: {
    title: L;
    /** Dades estructurades: etiqueta i valor. */
    rows?: L<{ label: string; value: string }[]>;
    /** Text redactat per la IA: una resposta, un anunci... */
    text?: L;
  };
  /** Temps estimat: com es fa ara i un cop automatitzat. */
  before: L;
  after: L;
};

export type Sector = {
  id: SectorId;
  name: L;
  /** Com apareix al desplegable del formulari. */
  short: L;
  title: L<{ lead: string; accent: string }>;
  lead: L;
  /**
   * Targeta de la portada de serveis: una frase genèrica amb la veu del titular.
   * Qualsevol procés del sector, automatitzat de principi a fi.
   */
  pitch: L;
  /** Llista més llarga per a la pàgina del sector. */
  tasks: L<string[]>;
  demos: DemoScenario[];
  /** Avís específic del sector (p. ex. dades de salut). */
  note?: L;
};

// El primer és el sector principal: va primer a tot arreu.
export const sectors: Sector[] = [
  {
    id: "gestories",
    name: { ca: "Gestories i assessories", es: "Gestorías y asesorías", en: "Accountancy and advisory firms" },
    short: { ca: "Gestoria o assessoria", es: "Gestoría o asesoría", en: "Accountancy or advisory firm" },
    title: {
      ca: { lead: "IA per a", accent: "gestories i assessories" },
      es: { lead: "IA para", accent: "gestorías y asesorías" },
      en: { lead: "AI for", accent: "accountancy firms" },
    },
    lead: {
      ca: "Bona part del dia se'n va a picar factures, demanar papers als clients i respondre les mateixes preguntes. Són tasques necessàries, però no necessiten el criteri d'un assessor: la IA les pot preparar perquè el vostre equip només les hagi de revisar.",
      es: "Buena parte del día se va en picar facturas, pedir papeles a los clientes y responder las mismas preguntas. Son tareas necesarias, pero no necesitan el criterio de un asesor: la IA puede prepararlas para que vuestro equipo solo tenga que revisarlas.",
      en: "A large part of the day goes on keying in invoices, chasing clients for paperwork and answering the same questions. These tasks are necessary but don't need an adviser's judgement: AI can prepare them so your team only has to review them.",
    },
    pitch: {
      ca: "Podem abordar qualsevol procés administratiu del vostre despatx i automatitzar-lo de principi a fi.",
      es: "Podemos abordar cualquier proceso administrativo de vuestro despacho y automatizarlo de principio a fin.",
      en: "We can take on any admin process in your firm and automate it from start to finish.",
    },
    tasks: {
      ca: [
        "Llegir factures i tiquets, també en foto, i preparar-ne els assentaments",
        "Conciliar els moviments del banc amb les factures",
        "Demanar la documentació que falta i recordar-la sense haver-hi de pensar",
        "Classificar les notificacions de l'administració i avisar el responsable",
        "Respondre les preguntes freqüents dels clients per correu o WhatsApp",
        "Preparar esborranys de correus i d'informes per als clients",
      ],
      es: [
        "Leer facturas y tiques, también en foto, y preparar sus asientos",
        "Conciliar los movimientos del banco con las facturas",
        "Pedir la documentación que falta y recordarla sin tener que pensar en ello",
        "Clasificar las notificaciones de la administración y avisar al responsable",
        "Responder las preguntas frecuentes de los clientes por correo o WhatsApp",
        "Preparar borradores de correos y de informes para los clientes",
      ],
      en: [
        "Reading invoices and receipts, photos included, and preparing the entries",
        "Reconciling bank transactions with invoices",
        "Requesting missing documents and chasing them without anyone having to remember",
        "Sorting official notices and alerting the person in charge",
        "Answering clients' frequent questions by email or WhatsApp",
        "Drafting emails and reports for clients",
      ],
    },
    demos: [
      {
        id: "factures",
        tab: { ca: "Factures dels clients", es: "Facturas de los clientes", en: "Client invoices" },
        input: {
          channel: { ca: "Correu", es: "Correo", en: "Email" },
          from: { ca: "Taller Vila · client", es: "Taller Vila · cliente", en: "Taller Vila · client" },
          subject: { ca: "Factures del trimestre", es: "Facturas del trimestre", en: "This quarter's invoices" },
          body: {
            ca: "Hola! Us envio les factures de despeses del trimestre. Algunes són fotos, perdoneu.",
            es: "¡Hola! Os envío las facturas de gastos del trimestre. Algunas son fotos, perdonad.",
            en: "Hi! Here are this quarter's expense invoices. Some are photos, sorry.",
          },
          attachment: { ca: "14 fitxers · PDF i fotos", es: "14 archivos · PDF y fotos", en: "14 files · PDFs and photos" },
        },
        steps: {
          ca: [
            "Llegeix els 14 documents, també les fotos",
            "Extreu proveïdor, NIF, data, base, IVA i total",
            "Detecta una factura repetida i un NIF que no quadra",
            "Prepara els assentaments per al programa de comptabilitat",
          ],
          es: [
            "Lee los 14 documentos, también las fotos",
            "Extrae proveedor, NIF, fecha, base, IVA y total",
            "Detecta una factura repetida y un NIF que no cuadra",
            "Prepara los asientos para el programa de contabilidad",
          ],
          en: [
            "Reads all 14 documents, photos included",
            "Extracts supplier, tax ID, date, net amount, VAT and total",
            "Spots a duplicated invoice and a tax ID that doesn't match",
            "Prepares the entries for the accounting software",
          ],
        },
        output: {
          title: { ca: "Llest per revisar", es: "Listo para revisar", en: "Ready to review" },
          rows: {
            ca: [
              { label: "Documents llegits", value: "14" },
              { label: "Assentaments preparats", value: "13" },
              { label: "Per revisar", value: "1 repetida · 1 NIF" },
            ],
            es: [
              { label: "Documentos leídos", value: "14" },
              { label: "Asientos preparados", value: "13" },
              { label: "Para revisar", value: "1 repetida · 1 NIF" },
            ],
            en: [
              { label: "Documents read", value: "14" },
              { label: "Entries prepared", value: "13" },
              { label: "To check", value: "1 duplicate · 1 tax ID" },
            ],
          },
        },
        before: { ca: "≈ 45 min picant dades", es: "≈ 45 min picando datos", en: "≈ 45 min of data entry" },
        after: { ca: "≈ 5 min revisant", es: "≈ 5 min revisando", en: "≈ 5 min of review" },
      },
      {
        id: "renda",
        tab: { ca: "Papers per a la renda", es: "Papeles para la renta", en: "Tax return paperwork" },
        input: {
          channel: { ca: "WhatsApp", es: "WhatsApp", en: "WhatsApp" },
          from: { ca: "Marta · clienta", es: "Marta · clienta", en: "Marta · client" },
          body: {
            ca: "Hola! Quins papers us he de portar per a la declaració de la renda?",
            es: "¡Hola! ¿Qué papeles os tengo que traer para la declaración de la renta?",
            en: "Hi! What documents do I need to bring you for my tax return?",
          },
        },
        steps: {
          ca: [
            "Consulta la fitxa de la clienta: lloguer i pla de pensions",
            "Prepara la llista de documents que li calen a ella",
            "Programa un recordatori si d'aquí a una setmana no ha enviat res",
          ],
          es: [
            "Consulta la ficha de la clienta: alquiler y plan de pensiones",
            "Prepara la lista de documentos que necesita ella",
            "Programa un recordatorio si en una semana no ha enviado nada",
          ],
          en: [
            "Checks the client's file: renting and a pension plan",
            "Prepares the list of documents she specifically needs",
            "Schedules a reminder in case nothing arrives within a week",
          ],
        },
        output: {
          title: { ca: "Resposta preparada", es: "Respuesta preparada", en: "Reply drafted" },
          text: {
            ca: "Hola, Marta! Per preparar la teva declaració necessitem:\n· El certificat de retencions de l'empresa\n· Els rebuts del lloguer\n· El certificat del pla de pensions\nPots enviar-ho per aquí mateix. Gràcies!",
            es: "¡Hola, Marta! Para preparar tu declaración necesitamos:\n· El certificado de retenciones de la empresa\n· Los recibos del alquiler\n· El certificado del plan de pensiones\nPuedes enviarlo por aquí mismo. ¡Gracias!",
            en: "Hi Marta! To prepare your return we need:\n· Your employer's withholding certificate\n· Your rent receipts\n· Your pension plan certificate\nYou can send them right here. Thanks!",
          },
        },
        before: { ca: "≈ 10 min per client", es: "≈ 10 min por cliente", en: "≈ 10 min per client" },
        after: { ca: "≈ 1 min revisant", es: "≈ 1 min revisando", en: "≈ 1 min of review" },
      },
      {
        id: "notificacions",
        tab: { ca: "Notificacions d'Hisenda", es: "Notificaciones de Hacienda", en: "Tax office notices" },
        input: {
          channel: { ca: "Bústia electrònica", es: "Buzón electrónico", en: "Electronic mailbox" },
          from: { ca: "Agència Tributària", es: "Agencia Tributaria", en: "Spanish Tax Agency" },
          subject: {
            ca: "Requeriment d'informació · Taller Vila",
            es: "Requerimiento de información · Taller Vila",
            en: "Information request · Taller Vila",
          },
          body: {
            ca: "Notificació nova a la bústia electrònica d'un client.",
            es: "Nueva notificación en el buzón electrónico de un cliente.",
            en: "New notice in a client's electronic mailbox.",
          },
          attachment: { ca: "notificacio.pdf", es: "notificacion.pdf", en: "notice.pdf" },
        },
        steps: {
          ca: [
            "Llegeix la notificació i identifica el client",
            "Reconeix el tipus: requeriment d'informació",
            "Calcula el termini per respondre",
            "Crea la tasca per al responsable i avisa el client",
          ],
          es: [
            "Lee la notificación e identifica al cliente",
            "Reconoce el tipo: requerimiento de información",
            "Calcula el plazo para responder",
            "Crea la tarea para el responsable y avisa al cliente",
          ],
          en: [
            "Reads the notice and identifies the client",
            "Recognises the type: information request",
            "Works out the response deadline",
            "Creates a task for the person in charge and notifies the client",
          ],
        },
        output: {
          title: { ca: "Tasca creada", es: "Tarea creada", en: "Task created" },
          rows: {
            ca: [
              { label: "Client", value: "Taller Vila" },
              { label: "Tipus", value: "Requeriment" },
              { label: "Termini", value: "10 dies hàbils" },
              { label: "Responsable", value: "Anna · fiscal" },
            ],
            es: [
              { label: "Cliente", value: "Taller Vila" },
              { label: "Tipo", value: "Requerimiento" },
              { label: "Plazo", value: "10 días hábiles" },
              { label: "Responsable", value: "Anna · fiscal" },
            ],
            en: [
              { label: "Client", value: "Taller Vila" },
              { label: "Type", value: "Information request" },
              { label: "Deadline", value: "10 working days" },
              { label: "Assigned to", value: "Anna · tax" },
            ],
          },
        },
        before: { ca: "Revisar bústies cada dia", es: "Revisar buzones cada día", en: "Checking mailboxes daily" },
        after: { ca: "Avís al moment", es: "Aviso al momento", en: "Instant alert" },
      },
    ],
  },
  {
    id: "immobiliaries",
    name: { ca: "Immobiliàries", es: "Inmobiliarias", en: "Estate agencies" },
    short: { ca: "Immobiliària", es: "Inmobiliaria", en: "Estate agency" },
    title: {
      ca: { lead: "IA per a", accent: "immobiliàries" },
      es: { lead: "IA para", accent: "inmobiliarias" },
      en: { lead: "AI for", accent: "estate agencies" },
    },
    lead: {
      ca: "Un comprador que escriu en alemany un divendres a la nit sovint no rep resposta fins dilluns, i per llavors ja ha contactat amb tres agències més. La IA respon de seguida i en el seu idioma, prepara els anuncis i fa el seguiment, perquè els agents es dediquin a les visites.",
      es: "Un comprador que escribe en alemán un viernes por la noche a menudo no recibe respuesta hasta el lunes, y para entonces ya ha contactado con otras tres agencias. La IA responde enseguida y en su idioma, prepara los anuncios y hace el seguimiento, para que los agentes se dediquen a las visitas.",
      en: "A buyer who writes in German on a Friday night often hears nothing until Monday, and by then has contacted three other agencies. AI replies straight away in their language, prepares listings and follows up, so agents can focus on viewings.",
    },
    pitch: {
      ca: "Podem abordar qualsevol procés de l'agència, de l'atenció als clients a la gestió dels immobles, i automatitzar-lo de principi a fi.",
      es: "Podemos abordar cualquier proceso de la agencia, de la atención a los clientes a la gestión de los inmuebles, y automatizarlo de principio a fin.",
      en: "We can take on any process in your agency, from client enquiries to property management, and automate it from start to finish.",
    },
    tasks: {
      ca: [
        "Respondre els contactes dels portals en l'idioma de cada comprador",
        "Redactar anuncis i adaptar-los a cada portal",
        "Proposar hores de visita segons l'agenda dels agents",
        "Avisar els compradors interessats quan entra un immoble nou",
        "Fer el seguiment dels contactes que no han respost",
        "Preparar la documentació i el resum de cada operació",
      ],
      es: [
        "Responder los contactos de los portales en el idioma de cada comprador",
        "Redactar anuncios y adaptarlos a cada portal",
        "Proponer horas de visita según la agenda de los agentes",
        "Avisar a los compradores interesados cuando entra un inmueble nuevo",
        "Hacer el seguimiento de los contactos que no han respondido",
        "Preparar la documentación y el resumen de cada operación",
      ],
      en: [
        "Answering portal enquiries in each buyer's language",
        "Writing listings and adapting them to each portal",
        "Offering viewing slots based on the agents' calendars",
        "Alerting interested buyers when a new property comes in",
        "Following up with contacts who haven't replied",
        "Preparing the paperwork and a summary of each deal",
      ],
    },
    demos: [
      {
        id: "idiomes",
        tab: { ca: "Contactes en altres idiomes", es: "Contactos en otros idiomas", en: "Enquiries in other languages" },
        input: {
          channel: { ca: "Correu · portal immobiliari", es: "Correo · portal inmobiliario", en: "Email · property portal" },
          from: { ca: "Klaus Weber", es: "Klaus Weber", en: "Klaus Weber" },
          // El missatge original és en alemany a tots els idiomes: és el que es vol ensenyar.
          subject: { ca: "Wohnung in Platja d'Aro", es: "Wohnung in Platja d'Aro", en: "Wohnung in Platja d'Aro" },
          body: {
            ca: "Guten Tag, ist die Wohnung in Platja d'Aro noch verfügbar? Gibt es einen Parkplatz? Wir möchten sie im November besichtigen.",
            es: "Guten Tag, ist die Wohnung in Platja d'Aro noch verfügbar? Gibt es einen Parkplatz? Wir möchten sie im November besichtigen.",
            en: "Guten Tag, ist die Wohnung in Platja d'Aro noch verfügbar? Gibt es einen Parkplatz? Wir möchten sie im November besichtigen.",
          },
        },
        steps: {
          ca: [
            "Detecta l'idioma: alemany",
            "Identifica l'immoble i comprova que encara està disponible",
            "Respon en alemany amb les dades de la fitxa",
            "Proposa dues hores de visita lliures a l'agenda",
          ],
          es: [
            "Detecta el idioma: alemán",
            "Identifica el inmueble y comprueba que sigue disponible",
            "Responde en alemán con los datos de la ficha",
            "Propone dos horas de visita libres en la agenda",
          ],
          en: [
            "Detects the language: German",
            "Identifies the property and checks it's still available",
            "Replies in German using the listing details",
            "Offers two free viewing slots from the calendar",
          ],
        },
        output: {
          title: { ca: "Resposta en alemany", es: "Respuesta en alemán", en: "Reply in German" },
          rows: {
            ca: [{ label: "Per a l'agent", value: "Vol visitar al novembre · pregunta pel pàrquing" }],
            es: [{ label: "Para el agente", value: "Quiere visitar en noviembre · pregunta por el parking" }],
            en: [{ label: "For the agent", value: "Wants a November viewing · asks about parking" }],
          },
          text: {
            ca: "Guten Tag Herr Weber,\ndie Wohnung ist noch verfügbar und hat einen eigenen Stellplatz. Für eine Besichtigung kann ich Ihnen den 12. November um 10 Uhr oder den 14. November um 17 Uhr anbieten.\nMit freundlichen Grüßen",
            es: "Guten Tag Herr Weber,\ndie Wohnung ist noch verfügbar und hat einen eigenen Stellplatz. Für eine Besichtigung kann ich Ihnen den 12. November um 10 Uhr oder den 14. November um 17 Uhr anbieten.\nMit freundlichen Grüßen",
            en: "Guten Tag Herr Weber,\ndie Wohnung ist noch verfügbar und hat einen eigenen Stellplatz. Für eine Besichtigung kann ich Ihnen den 12. November um 10 Uhr oder den 14. November um 17 Uhr anbieten.\nMit freundlichen Grüßen",
          },
        },
        before: {
          ca: "L'endemà, si algú sap alemany",
          es: "Al día siguiente, si alguien sabe alemán",
          en: "Next day, if someone speaks German",
        },
        after: {
          ca: "En minuts, revisada per l'agent",
          es: "En minutos, revisada por el agente",
          en: "Within minutes, checked by the agent",
        },
      },
      {
        id: "anunci",
        tab: { ca: "Anunci d'un pis nou", es: "Anuncio de un piso nuevo", en: "New property listing" },
        input: {
          channel: { ca: "Notes de la visita", es: "Notas de la visita", en: "Viewing notes" },
          from: { ca: "Jordi · agent", es: "Jordi · agente", en: "Jordi · agent" },
          body: {
            ca: "3 hab, 2 banys, 95 m², terrassa 20 m² amb vistes, reformat el 2023, Barri Vell, 2a planta sense ascensor. 320.000 €",
            es: "3 hab, 2 baños, 95 m², terraza 20 m² con vistas, reformado en 2023, Barri Vell, 2.ª planta sin ascensor. 320.000 €",
            en: "3 bed, 2 bath, 95 m², 20 m² terrace with views, renovated 2023, Barri Vell, 2nd floor, no lift. €320,000",
          },
          attachment: { ca: "18 fotos", es: "18 fotos", en: "18 photos" },
        },
        steps: {
          ca: [
            "Ordena les fotos i tria la de portada",
            "Redacta l'anunci en català, castellà, anglès i francès",
            "Adapta el text i el format a cada portal",
            "Avisa els compradors que buscaven a la zona",
          ],
          es: [
            "Ordena las fotos y elige la de portada",
            "Redacta el anuncio en catalán, castellano, inglés y francés",
            "Adapta el texto y el formato a cada portal",
            "Avisa a los compradores que buscaban en la zona",
          ],
          en: [
            "Sorts the photos and picks the cover shot",
            "Writes the listing in Catalan, Spanish, English and French",
            "Adapts the text and format to each portal",
            "Alerts buyers who were looking in the area",
          ],
        },
        output: {
          title: { ca: "Anunci a punt", es: "Anuncio listo", en: "Listing ready" },
          text: {
            ca: "Pis reformat al Barri Vell de Girona: 95 m² amb tres habitacions, dos banys i una terrassa de 20 m² amb vistes. Segona planta sense ascensor. 320.000 €.",
            es: "Piso reformado en el Barri Vell de Girona: 95 m² con tres habitaciones, dos baños y una terraza de 20 m² con vistas. Segunda planta sin ascensor. 320.000 €.",
            en: "Renovated flat in Girona's old town: 95 m² with three bedrooms, two bathrooms and a 20 m² terrace with views. Second floor, no lift. €320,000.",
          },
          rows: {
            ca: [
              { label: "Idiomes", value: "4" },
              { label: "Compradors avisats", value: "6" },
            ],
            es: [
              { label: "Idiomas", value: "4" },
              { label: "Compradores avisados", value: "6" },
            ],
            en: [
              { label: "Languages", value: "4" },
              { label: "Buyers notified", value: "6" },
            ],
          },
        },
        before: { ca: "≈ 1 h per anunci", es: "≈ 1 h por anuncio", en: "≈ 1 h per listing" },
        after: { ca: "≈ 10 min revisant", es: "≈ 10 min revisando", en: "≈ 10 min of review" },
      },
    ],
  },
  {
    id: "cliniques",
    name: { ca: "Clíniques i centres de salut", es: "Clínicas y centros de salud", en: "Clinics and health centres" },
    short: { ca: "Clínica o centre de salut", es: "Clínica o centro de salud", en: "Clinic or health centre" },
    title: {
      ca: { lead: "IA per a", accent: "clíniques" },
      es: { lead: "IA para", accent: "clínicas" },
      en: { lead: "AI for", accent: "clinics" },
    },
    lead: {
      ca: "La recepció d'una clínica passa el dia entre trucades, missatges i canvis d'hora, sovint mentre atén algú en persona. La IA pot gestionar les cites i les consultes de sempre a qualsevol hora, i deixar a l'equip el que necessita una persona.",
      es: "La recepción de una clínica pasa el día entre llamadas, mensajes y cambios de hora, a menudo mientras atiende a alguien en persona. La IA puede gestionar las citas y las consultas de siempre a cualquier hora, y dejar al equipo lo que necesita una persona.",
      en: "A clinic's front desk spends the day juggling calls, messages and rescheduling, often while dealing with someone in person. AI can handle bookings and routine questions at any hour, leaving the team free for what needs a person.",
    },
    pitch: {
      ca: "Podem abordar qualsevol procés administratiu i informàtic de la clínica i automatitzar-lo de principi a fi.",
      es: "Podemos abordar cualquier proceso administrativo e informático de la clínica y automatizarlo de principio a fin.",
      en: "We can take on any admin or IT process in your clinic and automate it from start to finish.",
    },
    tasks: {
      ca: [
        "Donar i canviar cites per WhatsApp o pel web",
        "Enviar recordatoris el dia abans i confirmar l'assistència",
        "Omplir les anul·lacions amb pacients de la llista d'espera",
        "Respondre preguntes freqüents: horaris, preus, com preparar la visita",
        "Passar a net les notes de la visita perquè el professional només les revisi",
        "Demanar una ressenya als pacients després de la visita",
      ],
      es: [
        "Dar y cambiar citas por WhatsApp o por la web",
        "Enviar recordatorios el día antes y confirmar la asistencia",
        "Llenar las cancelaciones con pacientes de la lista de espera",
        "Responder preguntas frecuentes: horarios, precios, cómo preparar la visita",
        "Pasar a limpio las notas de la visita para que el profesional solo las revise",
        "Pedir una reseña a los pacientes después de la visita",
      ],
      en: [
        "Booking and rescheduling appointments via WhatsApp or the website",
        "Sending reminders the day before and confirming attendance",
        "Filling cancellations from the waiting list",
        "Answering frequent questions: opening hours, prices, how to prepare",
        "Tidying up visit notes so the practitioner only has to review them",
        "Asking patients for a review after their visit",
      ],
    },
    note: {
      ca: "Les dades de salut tenen una protecció especial al RGPD. Per això, des del primer dia decidim on es processa cada dada i, quan cal, fem servir models que funcionen en un servidor propi, sense enviar res a fora.",
      es: "Los datos de salud tienen una protección especial en el RGPD. Por eso, desde el primer día decidimos dónde se procesa cada dato y, cuando hace falta, usamos modelos que funcionan en un servidor propio, sin enviar nada fuera.",
      en: "Health data has special protection under the GDPR. That's why, from day one, we decide where each piece of data is processed and, when needed, use models running on your own server without sending anything outside.",
    },
    demos: [
      {
        id: "cites",
        tab: { ca: "Cites per WhatsApp", es: "Citas por WhatsApp", en: "Bookings via WhatsApp" },
        input: {
          channel: { ca: "WhatsApp", es: "WhatsApp", en: "WhatsApp" },
          from: { ca: "Pacient", es: "Paciente", en: "Patient" },
          body: {
            ca: "Hola, voldria hora per a una neteja dental. Millor a la tarda, aquesta setmana o la que ve.",
            es: "Hola, querría hora para una limpieza dental. Mejor por la tarde, esta semana o la que viene.",
            en: "Hi, I'd like to book a dental cleaning. Afternoons are best, this week or next.",
          },
        },
        steps: {
          ca: [
            "Entén el motiu: neteja dental, 30 minuts",
            "Busca forats a la tarda a l'agenda",
            "Ofereix tres opcions al pacient",
            "Quan respon, reserva la cita i programa el recordatori",
          ],
          es: [
            "Entiende el motivo: limpieza dental, 30 minutos",
            "Busca huecos por la tarde en la agenda",
            "Ofrece tres opciones al paciente",
            "Cuando responde, reserva la cita y programa el recordatorio",
          ],
          en: [
            "Understands the reason: dental cleaning, 30 minutes",
            "Looks for afternoon slots in the calendar",
            "Offers the patient three options",
            "Once they reply, books the appointment and schedules a reminder",
          ],
        },
        output: {
          title: { ca: "Resposta enviada", es: "Respuesta enviada", en: "Reply sent" },
          text: {
            ca: "Hola! Per a la neteja tenim aquests forats:\n· Dimarts a les 17.30 h\n· Dijous a les 16.00 h\n· Dilluns vinent a les 18.00 h\nQuin et va millor?",
            es: "¡Hola! Para la limpieza tenemos estos huecos:\n· Martes a las 17:30\n· Jueves a las 16:00\n· El lunes que viene a las 18:00\n¿Cuál te va mejor?",
            en: "Hi! For the cleaning we have these slots:\n· Tuesday at 5.30 pm\n· Thursday at 4 pm\n· Next Monday at 6 pm\nWhich suits you best?",
          },
        },
        before: {
          ca: "Trucades i missatges entre visites",
          es: "Llamadas y mensajes entre visitas",
          en: "Calls and messages between patients",
        },
        after: {
          ca: "Resposta al moment, a qualsevol hora",
          es: "Respuesta al momento, a cualquier hora",
          en: "Instant reply, any time of day",
        },
      },
      {
        id: "anullacions",
        tab: { ca: "Anul·lacions", es: "Cancelaciones", en: "Cancellations" },
        input: {
          channel: { ca: "WhatsApp", es: "WhatsApp", en: "WhatsApp" },
          from: { ca: "Pacient", es: "Paciente", en: "Patient" },
          body: {
            ca: "Ho sento, demà a les 10 no podré venir.",
            es: "Lo siento, mañana a las 10 no podré ir.",
            en: "Sorry, I can't make it tomorrow at 10.",
          },
        },
        steps: {
          ca: [
            "Anul·la la cita de demà a les 10.00 h",
            "Busca a la llista d'espera qui volia hora abans",
            "Ofereix el forat als dos primers pacients",
            "Reserva la cita al primer que accepta",
          ],
          es: [
            "Cancela la cita de mañana a las 10:00",
            "Busca en la lista de espera quién quería hora antes",
            "Ofrece el hueco a los dos primeros pacientes",
            "Reserva la cita al primero que acepta",
          ],
          en: [
            "Cancels tomorrow's 10 am appointment",
            "Checks the waiting list for anyone wanting an earlier slot",
            "Offers the slot to the first two patients",
            "Books it for whoever accepts first",
          ],
        },
        output: {
          title: { ca: "Forat recuperat", es: "Hueco recuperado", en: "Slot filled" },
          rows: {
            ca: [
              { label: "Cita anul·lada", value: "Demà · 10.00 h" },
              { label: "Oferta a", value: "2 pacients en espera" },
              { label: "Estat", value: "Ocupada de nou" },
            ],
            es: [
              { label: "Cita cancelada", value: "Mañana · 10:00" },
              { label: "Ofrecida a", value: "2 pacientes en espera" },
              { label: "Estado", value: "Ocupada de nuevo" },
            ],
            en: [
              { label: "Cancelled", value: "Tomorrow · 10 am" },
              { label: "Offered to", value: "2 waiting-list patients" },
              { label: "Status", value: "Booked again" },
            ],
          },
        },
        before: { ca: "Hora perduda a l'agenda", es: "Hora perdida en la agenda", en: "Lost appointment slot" },
        after: { ca: "Hora aprofitada", es: "Hora aprovechada", en: "Slot put to use" },
      },
    ],
  },
];

export function getSector(id: string) {
  return sectors.find((sector) => sector.id === id);
}

/* ------------------------------------------------------------------
 * Portada de serveis
 * ------------------------------------------------------------------ */

export const servicesHero = {
  eyebrow: {
    ca: "IA i automatització per a empreses",
    es: "IA y automatización para empresas",
    en: "AI and automation for businesses",
  } satisfies L,
  headline: {
    ca: { lead: "Us asseguro que el vostre negoci", accent: "està demanant", tail: "intel·ligència artificial." },
    es: { lead: "Os aseguro que vuestro negocio", accent: "está pidiendo", tail: "inteligencia artificial." },
    en: { lead: "I can assure you your business is", accent: "crying out for", tail: "artificial intelligence." },
  } satisfies L<{ lead: string; accent: string; tail: string }>,
  // Sense xifres que no es puguin defensar: les proves reals van a cada servei.
  promise: {
    ca: "La majoria d'empreses encara no han provat la intel·ligència artificial i no saben fins on els pot ajudar. Jo us ho ensenyo amb la vostra pròpia feina: analitzo com treballeu, trobo on se us en va el temps i us ho resolc de principi a fi. Mai una inversió us haurà sortit rendible tan de pressa.",
    es: "La mayoría de empresas todavía no han probado la inteligencia artificial y no saben hasta dónde les puede ayudar. Yo os lo enseño con vuestro propio trabajo: analizo cómo trabajáis, encuentro dónde se os va el tiempo y os lo resuelvo de principio a fin. Nunca una inversión os habrá salido rentable tan rápido.",
    en: "Most companies haven't tried artificial intelligence yet and don't know how much it could help them. I show you using your own work: I look at how you operate, find where your time goes and solve it end to end. You'll never have seen an investment pay off this fast.",
  } satisfies L,
  cta: {
    primary: { ca: "Demana el diagnòstic gratuït", es: "Pide el diagnóstico gratuito", en: "Book a free consultation" } satisfies L,
    secondary: { ca: "Què puc fer per vosaltres", es: "Qué puedo hacer por vosotros", en: "What I can do for you" } satisfies L,
  },
  // REVISAR: la durada del diagnòstic és un compromís.
  facts: {
    ca: ["Diagnòstic gratuït de 45 min", "En línia a tota Espanya", "Presencial a Girona i Barcelona", "Preu tancat abans de començar"],
    es: ["Diagnóstico gratuito de 45 min", "En línea en toda España", "Presencial en Girona y Barcelona", "Precio cerrado antes de empezar"],
    en: ["Free 45-min consultation", "Online across Spain", "On-site in Girona and Barcelona", "Fixed price before we start"],
  } satisfies L<string[]>,
};

/**
 * Serveis per tipus de problema, perquè hi encaixi qualsevol empresa de serveis.
 * Cada un porta la prova d'on ja s'ha fet; els casos són els del portfoli.
 * Fora dels sectors industrials (alimentari, farmacèutic, químic, manufactura,
 * energia): són els d'AETECH i no es busquen clients freelance en aquests sectors.
 */
export type ServiceOffer = {
  id: "coneixement" | "agents" | "atencio" | "producte";
  title: L;
  text: L;
  examples: L<string[]>;
  proof: { text: L; href?: string };
};

export const offerSection = {
  label: { ca: "Serveis", es: "Servicios", en: "Services" } satisfies L,
  heading: {
    ca: { lead: "Què puc fer", accent: "per vosaltres" },
    es: { lead: "Qué puedo hacer", accent: "por vosotros" },
    en: { lead: "What I can do", accent: "for you" },
  } satisfies L<{ lead: string; accent: string }>,
  description: {
    ca: "Quatre maneres de posar la IA a treballar per a la vostra empresa. Totes les he posat a prova en casos reals, i sé com fer que funcionin també a la vostra.",
    es: "Cuatro maneras de poner la IA a trabajar para vuestra empresa. Todas las he puesto a prueba en casos reales, y sé cómo hacer que funcionen también en la vuestra.",
    en: "Four ways to put AI to work for your company. I've tested every one of them in real cases, and I know how to make them work in yours too.",
  } satisfies L,
  proofLabel: { ca: "Ja ho he fet", es: "Ya lo he hecho", en: "Done before" } satisfies L,
  proofCta: { ca: "Veure el cas", es: "Ver el caso", en: "See the case" } satisfies L,
  items: [
    {
      id: "coneixement",
      title: {
        ca: "Un assistent que coneix la vostra empresa",
        es: "Un asistente que conoce vuestra empresa",
        en: "An assistant that knows your company",
      },
      text: {
        ca: "La informació hi és, però repartida en correus, documents, carpetes i el cap de qui fa anys que hi treballa. Munto assistents que la troben i responen citant-ne la font, perquè qualsevol persona de l'equip resolgui un dubte sense haver d'interrompre ningú.",
        es: "La información está, pero repartida en correos, documentos, carpetas y la cabeza de quien lleva años trabajando ahí. Monto asistentes que la encuentran y responden citando la fuente, para que cualquier persona del equipo resuelva una duda sin tener que interrumpir a nadie.",
        en: "The information exists, but it's scattered across emails, documents, folders and the heads of people who've been there for years. I build assistants that find it and answer citing the source, so anyone on the team can clear up a question without interrupting anyone.",
      },
      examples: {
        ca: ["Consultar procediments, contractes i manuals", "Saber com es va resoldre un cas semblant", "Incorporar persones noves més de pressa"],
        es: ["Consultar procedimientos, contratos y manuales", "Saber cómo se resolvió un caso parecido", "Incorporar a personas nuevas más rápido"],
        en: ["Looking up procedures, contracts and manuals", "Finding out how a similar case was solved", "Getting new hires up to speed faster"],
      },
      proof: {
        text: {
          ca: "En una empresa d'enginyeria, els tècnics consulten anys d'incidències i documentació. La informació rellevant que troba l'assistent ha passat del 63% al 80%.",
          es: "En una empresa de ingeniería, los técnicos consultan años de incidencias y documentación. La información relevante que encuentra el asistente ha pasado del 63% al 80%.",
          en: "At an engineering company, technicians query years of incidents and documentation. The share of relevant information the assistant finds has gone from 63% to 80%.",
        },
        href: "/projects/plataforma-ia-aetech",
      },
    },
    {
      id: "agents",
      title: {
        ca: "Agents que fan la feina dins dels vostres programes",
        es: "Agentes que hacen el trabajo dentro de vuestros programas",
        en: "Agents that do the work inside your software",
      },
      text: {
        ca: "Respondre no n'hi ha prou: la IA pot llegir un correu, entendre què demana i fer-ne la feina al CRM, a l'ERP, al full de càlcul, a l'agenda o a qualsevol altre programa que feu servir. Sempre amb permisos clars i cada acció registrada.",
        es: "Responder no basta: la IA puede leer un correo, entender qué pide y hacer el trabajo en el CRM, el ERP, la hoja de cálculo, la agenda o cualquier otro programa que uséis. Siempre con permisos claros y cada acción registrada.",
        en: "Answering isn't enough: AI can read an email, understand what it asks for and do the work in your CRM, ERP, spreadsheet, calendar or any other software you use. Always with clear permissions and every action logged.",
      },
      examples: {
        ca: ["Passar comandes i factures al programa de gestió", "Actualitzar el CRM després de cada conversa", "Preparar informes amb dades de diversos programes"],
        es: ["Pasar pedidos y facturas al programa de gestión", "Actualizar el CRM después de cada conversación", "Preparar informes con datos de varios programas"],
        en: ["Entering orders and invoices into your management software", "Updating the CRM after every conversation", "Preparing reports from data across several systems"],
      },
      proof: {
        text: {
          ca: "En una empresa d'enginyeria, els agents treballen directament dins dels programes de l'equip, seguint els estàndards de la casa. A VisorRP, la IA és el nucli de la gestió del servidor, integrada en tots els processos, i cada canvi que fa es pot desfer.",
          es: "En una empresa de ingeniería, los agentes trabajan directamente dentro de los programas del equipo, siguiendo los estándares de la casa. En VisorRP, la IA es el núcleo de la gestión del servidor, integrada en todos los procesos, y cada cambio que hace se puede deshacer.",
          en: "At an engineering company, the agents work directly inside the team's software, following in-house standards. At VisorRP, AI is the core of how the server is run, built into every process, and every change it makes can be undone.",
        },
        href: "/projects/visorrp",
      },
    },
    {
      id: "atencio",
      title: {
        ca: "Atenció al client les 24 hores",
        es: "Atención al cliente las 24 horas",
        en: "Customer service around the clock",
      },
      text: {
        ca: "Respondre al moment, en l'idioma del client i amb el seu historial al davant, per correu, WhatsApp, xat o telèfon. La IA resol el que és habitual i passa a una persona el que no ho és, amb tot el context perquè no hagi de tornar a preguntar res.",
        es: "Responder al momento, en el idioma del cliente y con su historial delante, por correo, WhatsApp, chat o teléfono. La IA resuelve lo habitual y pasa a una persona lo que no lo es, con todo el contexto para que no tenga que volver a preguntar nada.",
        en: "Replying instantly, in the customer's language and with their history at hand, by email, WhatsApp, chat or phone. AI handles the routine and passes the rest to a person, with all the context so they don't have to ask again.",
      },
      examples: {
        ca: ["Resoldre les consultes més habituals", "Donar i canviar cites", "Classificar les incidències i avisar qui toca"],
        es: ["Resolver las consultas más habituales", "Dar y cambiar citas", "Clasificar las incidencias y avisar a quien corresponda"],
        en: ["Resolving the most common enquiries", "Booking and rescheduling appointments", "Sorting incidents and alerting the right person"],
      },
      proof: {
        text: {
          ca: "A VisorRP, la IA atén els tiquets al moment, reuneix les proves de cada cas i en proposa la resolució; el que és greu sempre ho decideix una persona. També hi ha personatges que t'escolten i et contesten amb veu.",
          es: "En VisorRP, la IA atiende los tickets al momento, reúne las pruebas de cada caso y propone la resolución; lo grave siempre lo decide una persona. También hay personajes que te escuchan y te contestan con voz.",
          en: "At VisorRP, the AI handles tickets instantly, gathers the evidence for each case and proposes a resolution; anything serious is always decided by a person. There are also characters that listen and talk back by voice.",
        },
        href: "/projects/visorrp",
      },
    },
    {
      id: "producte",
      title: {
        ca: "IA dins del vostre producte",
        es: "IA dentro de vuestro producto",
        en: "AI inside your product",
      },
      text: {
        ca: "Els vostres usuaris ja no volen buscar entre menús: volen demanar el que necessiten i que l'aplicació ho faci. Hi afegeixo un assistent que coneix les dades de cada usuari, l'entén amb les seves paraules i fa les accions per ell, des de preparar un pressupost fins a reservar una cita. És el que fa que un producte destaqui davant la competència.",
        es: "Vuestros usuarios ya no quieren buscar entre menús: quieren pedir lo que necesitan y que la aplicación lo haga. Le añado un asistente que conoce los datos de cada usuario, le entiende con sus propias palabras y hace las acciones por él, desde preparar un presupuesto hasta reservar una cita. Es lo que hace que un producto destaque frente a la competencia.",
        en: "Your users no longer want to dig through menus: they want to ask for what they need and have the app do it. I add an assistant that knows each user's data, understands them in their own words and takes actions for them, from preparing a budget to booking an appointment. It's what makes a product stand out from the competition.",
      },
      examples: {
        ca: ["Un assistent dins de la vostra aplicació", "Funcions noves basades en IA", "Controlar i reduir el cost de la IA"],
        es: ["Un asistente dentro de vuestra aplicación", "Funciones nuevas basadas en IA", "Controlar y reducir el coste de la IA"],
        en: ["An assistant inside your app", "New AI-powered features", "Monitoring and cutting AI costs"],
      },
      proof: {
        text: {
          ca: "Capital AI, a Capital Tracker, respon preguntes com «on se'm van els diners?» i crea pressupostos treballant directament sobre les dades de cada usuari, amb cada canvi registrat per poder-lo desfer.",
          es: "Capital AI, en Capital Tracker, responde preguntas como «¿en qué se me va el dinero?» y crea presupuestos trabajando directamente sobre los datos de cada usuario, con cada cambio registrado para poder deshacerlo.",
          en: "Capital AI, in Capital Tracker, answers questions like \"where does my money go?\" and builds budgets working directly on each user's data, with every change logged so it can be undone.",
        },
        href: "/projects/finantial-tracker",
      },
    },
  ] satisfies ServiceOffer[],
};

export const sectorsSection = {
  label: { ca: "Exemples", es: "Ejemplos", en: "Examples" } satisfies L,
  heading: {
    ca: { lead: "Com es veu", accent: "a la pràctica" },
    es: { lead: "Cómo se ve", accent: "en la práctica" },
    en: { lead: "What it looks like", accent: "in practice" },
  } satisfies L<{ lead: string; accent: string }>,
  description: {
    ca: "Treballo amb empreses de serveis de qualsevol sector. Aquí en teniu tres exemples:",
    es: "Trabajo con empresas de servicios de cualquier sector. Aquí tenéis tres ejemplos:",
    en: "I work with service businesses in any sector. Here are three examples:",
  } satisfies L,
  cardCta: { ca: "Veure la demo", es: "Ver la demo", en: "See the demo" } satisfies L,
};

export const processSection = {
  label: { ca: "Com treballem", es: "Cómo trabajamos", en: "How we work" } satisfies L,
  heading: {
    ca: { lead: "Del primer contacte", accent: "a les hores estalviades" },
    es: { lead: "Del primer contacto", accent: "a las horas ahorradas" },
    en: { lead: "From first call", accent: "to hours saved" },
  } satisfies L<{ lead: string; accent: string }>,
  steps: [
    {
      title: { ca: "Diagnòstic gratuït", es: "Diagnóstico gratuito", en: "Free consultation" },
      text: {
        ca: "45 minuts per videotrucada o presencial. M'expliqueu com treballeu i quins són els vostres processos, i en sortiu amb una idea clara del que es pot automatitzar, encara que després no treballem junts.",
        es: "45 minutos por videollamada o presencial. Me explicáis cómo trabajáis y cuáles son vuestros procesos, y salís con una idea clara de lo que se puede automatizar, aunque después no trabajemos juntos.",
        en: "45 minutes by video call or in person. You tell me how you work and what your processes are, and you come away with a clear idea of what can be automated, even if we don't end up working together.",
      },
    },
    {
      title: { ca: "Proposta amb preu tancat", es: "Propuesta con precio cerrado", en: "Fixed-price proposal" },
      text: {
        ca: "Us envio què farem, quant temps us estalviarà i quant costa. Sabeu el preu abans de començar i el podeu comparar amb l'estalvi.",
        es: "Os envío qué haremos, cuánto tiempo os ahorrará y cuánto cuesta. Sabéis el precio antes de empezar y podéis compararlo con el ahorro.",
        en: "I send you what we'll do, how much time it will save and what it costs. You know the price before we start and can weigh it against the savings.",
      },
    },
    {
      title: { ca: "Construcció i posada en marxa", es: "Construcción y puesta en marcha", en: "Build and roll-out" },
      text: {
        ca: "Ho connecto als programes que ja feu servir i ho provem amb casos reals vostres abans d'activar-ho. A Girona i Barcelona, presencialment quan cal; a la resta d'Espanya, en línia.",
        es: "Lo conecto a los programas que ya usáis y lo probamos con casos reales vuestros antes de activarlo. En Girona y Barcelona, presencialmente cuando hace falta; en el resto de España, en línea.",
        en: "I connect it to the software you already use and we test it on your real cases before switching it on. In Girona and Barcelona, on-site when needed; elsewhere in Spain, online.",
      },
    },
    {
      title: { ca: "Formació i seguiment", es: "Formación y seguimiento", en: "Training and follow-up" },
      text: {
        ca: "Formo l'equip perquè ho faci servir, mesurem l'estalvi real i ajustem el que calgui.",
        es: "Formo al equipo para que lo use, medimos el ahorro real y ajustamos lo que haga falta.",
        en: "I train the team to use it, we measure the real savings and adjust whatever's needed.",
      },
    },
  ] satisfies { title: L; text: L }[],
};

export const aboutSection = {
  label: { ca: "Qui soc", es: "Quién soy", en: "About me" } satisfies L,
  heading: {
    ca: { lead: "Qui hi ha", accent: "darrere" },
    es: { lead: "Quién hay", accent: "detrás" },
    en: { lead: "Who's", accent: "behind it" },
  } satisfies L<{ lead: string; accent: string }>,
  text: {
    ca: "Soc Joan Pau Rahola, enginyer informàtic i arquitecte de solucions d'IA. Dissenyo i mantinc la plataforma d'IA d'una empresa d'enginyeria, que els seus equips fan servir cada dia, i he creat productes amb IA que tenen usuaris reals. Treballo en línia amb empreses de tota Espanya i presencialment a Girona i Barcelona. Parlo el vostre idioma, també el no tècnic.",
    es: "Soy Joan Pau Rahola, ingeniero informático y arquitecto de soluciones de IA. Diseño y mantengo la plataforma de IA de una empresa de ingeniería, que sus equipos usan cada día, y he creado productos con IA que tienen usuarios reales. Trabajo en línea con empresas de toda España y presencialmente en Girona y Barcelona. Hablo vuestro idioma, también el no técnico.",
    en: "I'm Joan Pau Rahola, a computer engineer and AI solutions architect. I design and maintain the AI platform of an engineering company, used every day by its teams, and I've built AI products with real users. I work online with businesses across Spain and on-site in Girona and Barcelona. I speak your language, including the non-technical one.",
  } satisfies L,
  // La trajectòria ve de content/site.ts (about.timeline): una sola font per al CV.
  portfolio: { ca: "Veure el portfoli complet", es: "Ver el portfolio completo", en: "See the full portfolio" } satisfies L,
};

export const faqSection = {
  label: { ca: "Preguntes", es: "Preguntas", en: "Questions" } satisfies L,
  heading: {
    ca: { lead: "Preguntes", accent: "freqüents" },
    es: { lead: "Preguntas", accent: "frecuentes" },
    en: { lead: "Frequently asked", accent: "questions" },
  } satisfies L<{ lead: string; accent: string }>,
  items: [
    {
      q: {
        ca: "No en sabem res, d'IA. És un problema?",
        es: "No sabemos nada de IA. ¿Es un problema?",
        en: "We know nothing about AI. Is that a problem?",
      },
      a: {
        ca: "Gens. No cal saber-ne ni tenir ningú tècnic a l'equip. Partim de com treballeu avui, amb els programes i els documents que ja teniu: la part tècnica la porto jo, i a vosaltres només us cal explicar-me com feu la feina.",
        es: "En absoluto. No hace falta saber de IA ni tener a nadie técnico en el equipo. Partimos de cómo trabajáis hoy, con los programas y los documentos que ya tenéis: la parte técnica la llevo yo, y vosotros solo tenéis que explicarme cómo hacéis el trabajo.",
        en: "Not at all. You don't need to know about AI or have anyone technical on the team. We start from how you work today, with the software and documents you already have: I handle the technical side, and all you need to do is explain how you work.",
      },
    },
    {
      q: {
        ca: "Hem de canviar els programes que fem servir?",
        es: "¿Tenemos que cambiar los programas que usamos?",
        en: "Do we have to change the software we use?",
      },
      a: {
        ca: "Normalment no. La idea és connectar-se al que ja teniu (el correu, WhatsApp, el CRM, el programa de gestió, l'agenda) i estalviar-vos els passos manuals entre un i altre. Si en algun cas cal un canvi, ho veurem al diagnòstic i en sabreu el motiu.",
        es: "Normalmente no. La idea es conectarse a lo que ya tenéis (el correo, WhatsApp, el CRM, el programa de gestión, la agenda) y ahorraros los pasos manuales entre uno y otro. Si en algún caso hace falta un cambio, lo veremos en el diagnóstico y sabréis el motivo.",
        en: "Usually not. The idea is to connect to what you already have (email, WhatsApp, your CRM, your management software, your calendar) and save you the manual steps in between. If a change is ever needed, we'll see it in the consultation and you'll know why.",
      },
    },
    {
      q: {
        ca: "Les dades dels nostres clients estan segures?",
        es: "¿Los datos de nuestros clientes están seguros?",
        en: "Is our clients' data safe?",
      },
      a: {
        ca: "Cada solució es dissenya d'acord amb el RGPD. Al principi decidim on es processen les dades segons el tipus d'informació: amb proveïdors amb servidors a la Unió Europea o, si cal més control, amb models que funcionen als vostres servidors, sense enviar res a fora.",
        es: "Cada solución se diseña de acuerdo con el RGPD. Al principio decidimos dónde se procesan los datos según el tipo de información: con proveedores con servidores en la Unión Europea o, si hace falta más control, con modelos que funcionan en vuestros servidores, sin enviar nada fuera.",
        en: "Every solution is designed in line with the GDPR. At the start we decide where data is processed depending on the type of information: with providers whose servers are in the European Union or, when more control is needed, with models running on your own servers, sending nothing outside.",
      },
    },
    {
      q: {
        ca: "I si la IA s'equivoca?",
        es: "¿Y si la IA se equivoca?",
        en: "What if the AI gets it wrong?",
      },
      a: {
        ca: "Per això la dissenyo amb límits: la IA proposa, prepara i resumeix, però el que té conseqüències, com un pagament o una resposta delicada, ho valida una persona. Cada acció queda registrada i, sempre que es pot, es pot desfer.",
        es: "Por eso la diseño con límites: la IA propone, prepara y resume, pero lo que tiene consecuencias, como un pago o una respuesta delicada, lo valida una persona. Cada acción queda registrada y, siempre que se puede, se puede deshacer.",
        en: "That's why I design it with limits: the AI proposes, prepares and summarises, but anything with consequences, such as a payment or a sensitive reply, is approved by a person. Every action is logged and, wherever possible, can be undone.",
      },
    },
    {
      q: { ca: "Quant costa?", es: "¿Cuánto cuesta?", en: "How much does it cost?" },
      a: {
        ca: "El diagnòstic és gratuït. Després us envio una proposta amb preu tancat, de manera que en sabeu el cost abans de començar i el podeu comparar amb el temps que us estalviareu.",
        es: "El diagnóstico es gratuito. Después os envío una propuesta con precio cerrado, de modo que conocéis el coste antes de empezar y podéis compararlo con el tiempo que os ahorraréis.",
        en: "The consultation is free. Afterwards I send you a fixed-price proposal, so you know the cost before we start and can weigh it against the time you'll save.",
      },
    },
    {
      q: {
        ca: "Quant es triga a veure resultats?",
        es: "¿Cuánto se tarda en ver resultados?",
        en: "How long until we see results?",
      },
      a: {
        ca: "L'objectiu és tenir el primer procés funcionant en poques setmanes, no en mesos. Per això comencem pel que més temps us fa perdre: perquè l'estalvi es noti aviat.",
        es: "El objetivo es tener el primer proceso funcionando en pocas semanas, no en meses. Por eso empezamos por el que más tiempo os hace perder: para que el ahorro se note pronto.",
        en: "The aim is to have the first process running within a few weeks, not months. That's why we start with the one that wastes the most time: so the savings show early.",
      },
    },
    {
      q: {
        ca: "Treballes a tota Espanya?",
        es: "¿Trabajas en toda España?",
        en: "Do you work across Spain?",
      },
      a: {
        ca: "Sí, en línia: el diagnòstic, les reunions i la posada en marxa es poden fer per videotrucada. Presencialment, treballo a Girona i Barcelona.",
        es: "Sí, en línea: el diagnóstico, las reuniones y la puesta en marcha se pueden hacer por videollamada. Presencialmente, trabajo en Girona y Barcelona.",
        en: "Yes, online: the consultation, meetings and roll-out can all be done by video call. On-site, I work in Girona and Barcelona.",
      },
    },
  ] satisfies { q: L; a: L }[],
};

/* ------------------------------------------------------------------
 * Formulari del diagnòstic
 * ------------------------------------------------------------------ */

export const auditForm = {
  label: { ca: "Diagnòstic", es: "Diagnóstico", en: "Consultation" } satisfies L,
  heading: {
    ca: { lead: "Demana el diagnòstic", accent: "gratuït" },
    es: { lead: "Pide el diagnóstico", accent: "gratuito" },
    en: { lead: "Book your", accent: "free consultation" },
  } satisfies L<{ lead: string; accent: string }>,
  // REVISAR: el termini de resposta és un compromís.
  description: {
    ca: "Explica'm breument a què us dediqueu i quina tasca us fa perdre més temps. Et respondré en un màxim de dos dies feiners per acordar el dia i si el fem per videotrucada o presencialment.",
    es: "Cuéntame brevemente a qué os dedicáis y qué tarea os hace perder más tiempo. Te responderé en un máximo de dos días laborables para acordar el día y si lo hacemos por videollamada o en persona.",
    en: "Tell me briefly what you do and which task takes up the most time. I'll reply within two working days to arrange a day and whether we meet by video call or in person.",
  } satisfies L,
  fields: {
    name: { ca: "Nom i cognoms", es: "Nombre y apellidos", en: "Full name" } satisfies L,
    company: { ca: "Empresa", es: "Empresa", en: "Company" } satisfies L,
    sector: { ca: "Sector", es: "Sector", en: "Industry" } satisfies L,
    sectorPlaceholder: {
      ca: "Per exemple: assessoria, clínica, comerç en línia…",
      es: "Por ejemplo: asesoría, clínica, comercio online…",
      en: "For example: accountancy, clinic, e-commerce…",
    } satisfies L,
    email: { ca: "Correu electrònic", es: "Correo electrónico", en: "Email" } satisfies L,
    phone: { ca: "Telèfon (opcional)", es: "Teléfono (opcional)", en: "Phone (optional)" } satisfies L,
    task: {
      ca: "Quina tasca us fa perdre més temps?",
      es: "¿Qué tarea os hace perder más tiempo?",
      en: "Which task takes up the most time?",
    } satisfies L,
    taskPlaceholder: {
      ca: "Per exemple: cada setmana passem a mà les comandes que ens arriben per correu.",
      es: "Por ejemplo: cada semana pasamos a mano los pedidos que nos llegan por correo.",
      en: "For example: every week we type in the orders that arrive by email by hand.",
    } satisfies L,
    consent: {
      ca: "Accepto que em contactis per respondre aquesta sol·licitud.",
      es: "Acepto que me contactes para responder a esta solicitud.",
      en: "I agree to be contacted about this request.",
    } satisfies L,
  },
  // Primera capa d'informació del RGPD. REVISAR amb una política de privacitat completa.
  privacy: {
    ca: `Responsable: Joan Pau Rahola Ferrer. Finalitat: respondre la teva sol·licitud i preparar el diagnòstic. No es cedeixen dades a tercers. Pots accedir a les teves dades, rectificar-les o demanar que s'esborrin escrivint a ${identity.email}.`,
    es: `Responsable: Joan Pau Rahola Ferrer. Finalidad: responder a tu solicitud y preparar el diagnóstico. No se ceden datos a terceros. Puedes acceder a tus datos, rectificarlos o pedir que se borren escribiendo a ${identity.email}.`,
    en: `Controller: Joan Pau Rahola Ferrer. Purpose: replying to your request and preparing the consultation. Your data is not shared with third parties. You can access, correct or ask for deletion of your data by writing to ${identity.email}.`,
  } satisfies L,
  submit: { ca: "Envia la sol·licitud", es: "Enviar solicitud", en: "Send request" } satisfies L,
  sending: { ca: "S'està enviant…", es: "Enviando…", en: "Sending…" } satisfies L,
  sentTitle: { ca: "Sol·licitud rebuda", es: "Solicitud recibida", en: "Request received" } satisfies L,
  sentText: {
    ca: "Gràcies. T'escriuré en un màxim de dos dies feiners per acordar el dia del diagnòstic.",
    es: "Gracias. Te escribiré en un máximo de dos días laborables para acordar el día del diagnóstico.",
    en: "Thank you. I'll write within two working days to arrange the consultation.",
  } satisfies L,
  error: {
    ca: "No s'ha pogut enviar. Torna-ho a provar o escriu-me directament a",
    es: "No se ha podido enviar. Vuelve a intentarlo o escríbeme directamente a",
    en: "It couldn't be sent. Please try again or email me directly at",
  } satisfies L,
};

/* ------------------------------------------------------------------
 * Navegació, pàgina de sector, demo i peu
 * ------------------------------------------------------------------ */

/** On porten tots els botons de contacte: el formulari, al final de cada pàgina de serveis. */
export const FORM_ANCHOR = "diagnostic";

export const servicesNav: { href: string; label: L }[] = [
  { href: "/serveis#serveis", label: { ca: "Serveis", es: "Servicios", en: "Services" } },
  { href: "/serveis#com-funciona", label: { ca: "Com treballem", es: "Cómo trabajamos", en: "How we work" } },
  { href: "/serveis#preguntes", label: { ca: "Preguntes", es: "Preguntas", en: "Questions" } },
  { href: "/", label: { ca: "Portfoli", es: "Portfolio", en: "Portfolio" } },
];

export const servicesCta = {
  short: { ca: "Diagnòstic gratuït", es: "Diagnóstico gratuito", en: "Free consultation" } satisfies L,
};

export const sectorPage = {
  back: { ca: "Tots els serveis", es: "Todos los servicios", en: "All services" } satisfies L,
  demoLabel: { ca: "Demo", es: "Demo", en: "Demo" } satisfies L,
  demoHeading: {
    ca: { lead: "Mireu-ho", accent: "en acció" },
    es: { lead: "Miradlo", accent: "en acción" },
    en: { lead: "See it", accent: "in action" },
  } satisfies L<{ lead: string; accent: string }>,
  tasksLabel: { ca: "Tasques", es: "Tareas", en: "Tasks" } satisfies L,
  tasksHeading: {
    ca: { lead: "Altres tasques que", accent: "es poden automatitzar" },
    es: { lead: "Otras tareas que", accent: "se pueden automatizar" },
    en: { lead: "Other tasks that", accent: "can be automated" },
  } satisfies L<{ lead: string; accent: string }>,
};

export const demoUi = {
  disclaimer: {
    ca: "Exemple amb dades inventades",
    es: "Ejemplo con datos inventados",
    en: "Example with made-up data",
  } satisfies L,
  input: { ca: "Entra", es: "Entra", en: "Comes in" } satisfies L,
  process: { ca: "Què fa la IA", es: "Qué hace la IA", en: "What the AI does" } satisfies L,
  output: { ca: "Resultat", es: "Resultado", en: "Result" } satisfies L,
  waiting: { ca: "Preparant…", es: "Preparando…", en: "Working…" } satisfies L,
  before: { ca: "Ara", es: "Ahora", en: "Today" } satisfies L,
  after: { ca: "Automatitzat", es: "Automatizado", en: "Automated" } satisfies L,
  estimate: { ca: "Temps estimat", es: "Tiempo estimado", en: "Estimated time" } satisfies L,
  replay: { ca: "Torna-ho a veure", es: "Volver a verlo", en: "Watch again" } satisfies L,
};

export const servicesFooter = {
  tagline: {
    ca: "IA i automatització per a empreses. En línia a tota Espanya; presencial a Girona i Barcelona.",
    es: "IA y automatización para empresas. En línea en toda España; presencial en Girona y Barcelona.",
    en: "AI and automation for businesses. Online across Spain; on-site in Girona and Barcelona.",
  } satisfies L,
  portfolio: { ca: "Portfoli", es: "Portfolio", en: "Portfolio" } satisfies L,
};
