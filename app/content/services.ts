import type { L } from "../i18n/LanguageProvider";
import { identity } from "./site";

/**
 * Serveis: la part de la web pensada per captar clients (pimes de Girona).
 * To no tècnic, català primer. Les demos són exemples amb dades inventades
 * i els temps, estimacions: no s'han de presentar mai com a clients reals.
 *
 * REVISAR: durada de l'auditoria, termini de resposta i textos legals.
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
      ca: "Podem abordar qualsevol procés administratiu de la clínica i automatitzar-lo de principi a fi.",
      es: "Podemos abordar cualquier proceso administrativo de la clínica y automatizarlo de principio a fin.",
      en: "We can take on any admin process in your clinic and automate it from start to finish.",
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
      ca: "Les dades de salut tenen una protecció especial al RGPD. Per això, a l'auditoria decidim on es processa cada dada i, quan cal, fem servir models que funcionen en un servidor propi, sense enviar res a fora.",
      es: "Los datos de salud tienen una protección especial en el RGPD. Por eso, en la auditoría decidimos dónde se procesa cada dato y, cuando hace falta, usamos modelos que funcionan en un servidor propio, sin enviar nada fuera.",
      en: "Health data has special protection under the GDPR. That's why, during the audit, we decide where each piece of data is processed and, when needed, use models running on your own server without sending anything outside.",
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
  // A qui va dirigit: el visitant s'hi ha de reconèixer abans de llegir res més.
  eyebrow: {
    ca: "Gestories · Immobiliàries · Clíniques · Girona",
    es: "Gestorías · Inmobiliarias · Clínicas · Girona",
    en: "Accountancy · Estate agents · Clinics · Girona",
  } satisfies L,
  headline: {
    ca: { lead: "Que la feina", accent: "repetitiva", tail: "la faci la IA." },
    es: { lead: "Que el trabajo", accent: "repetitivo", tail: "lo haga la IA." },
    en: { lead: "Let AI handle the", accent: "repetitive", tail: "work." },
  } satisfies L<{ lead: string; accent: string; tail: string }>,
  // En primera persona i sense embuts: un compromís clar.
  // La xifra es limita a les tasques internes: "tot el temps de feina" no es pot defensar.
  // REVISAR: quan hi hagi un primer client, una xifra real aquí convenç més que res.
  promise: {
    ca: "Estic segur que, després d'analitzar com treballeu per dins, podem reduir a menys de la meitat el temps que dediqueu a les tasques internes.",
    es: "Estoy seguro de que, después de analizar cómo trabajáis por dentro, podemos reducir a menos de la mitad el tiempo que dedicáis a las tareas internas.",
    en: "I'm confident that, once I've looked at how you work internally, we can cut the time you spend on internal tasks by more than half.",
  } satisfies L,
  cta: {
    primary: { ca: "Demana l'auditoria gratuïta", es: "Pide la auditoría gratuita", en: "Book your free audit" } satisfies L,
    secondary: { ca: "Veure sectors", es: "Ver sectores", en: "See sectors" } satisfies L,
  },
  // REVISAR: la durada i el format han de coincidir amb el que realment oferiràs.
  facts: {
    ca: ["Gratuïta", "1 hora", "A Girona o en línia", "Sense compromís"],
    es: ["Gratuita", "1 hora", "En Girona o en línea", "Sin compromiso"],
    en: ["Free", "1 hour", "In Girona or online", "No commitment"],
  } satisfies L<string[]>,
};

export const sectorsSection = {
  label: { ca: "Sectors", es: "Sectores", en: "Sectors" } satisfies L,
  heading: {
    ca: { lead: "Què pot fer la IA", accent: "al vostre sector" },
    es: { lead: "Qué puede hacer la IA", accent: "en vuestro sector" },
    en: { lead: "What AI can do", accent: "in your sector" },
  } satisfies L<{ lead: string; accent: string }>,
  description: {
    ca: "Treballo sobretot amb aquests tres sectors. Si el vostre no hi és, parlem-ne igualment.",
    es: "Trabajo sobre todo con estos tres sectores. Si el vuestro no está, hablémoslo igualmente.",
    en: "I mainly work with these three sectors. If yours isn't here, let's talk anyway.",
  } satisfies L,
  cardCta: { ca: "Saber-ne més", es: "Saber más", en: "Learn more" } satisfies L,
};

export const processSection = {
  label: { ca: "Com funciona", es: "Cómo funciona", en: "How it works" } satisfies L,
  heading: {
    ca: { lead: "De l'auditoria", accent: "a les hores estalviades" },
    es: { lead: "De la auditoría", accent: "a las horas ahorradas" },
    en: { lead: "From the audit", accent: "to hours saved" },
  } satisfies L<{ lead: string; accent: string }>,
  steps: [
    {
      title: { ca: "Auditoria gratuïta", es: "Auditoría gratuita", en: "Free audit" },
      text: {
        ca: "Una hora amb qui fa la feina, a la vostra oficina o en línia. Mirem com treballeu i on se'n va el temps.",
        es: "Una hora con quien hace el trabajo, en vuestra oficina o en línea. Vemos cómo trabajáis y dónde se va el tiempo.",
        en: "One hour with the people who do the work, at your office or online. We look at how you work and where the time goes.",
      },
    },
    {
      title: { ca: "Proposta", es: "Propuesta", en: "Proposal" },
      text: {
        ca: "Us envio quines tasques es poden automatitzar, quantes hores us estalviaríeu cada mes i un preu tancat. Sense compromís.",
        es: "Os envío qué tareas se pueden automatizar, cuántas horas os ahorraríais cada mes y un precio cerrado. Sin compromiso.",
        en: "I send you which tasks can be automated, how many hours you'd save each month and a fixed price. No commitment.",
      },
    },
    {
      title: { ca: "Posada en marxa", es: "Puesta en marcha", en: "Roll-out" },
      text: {
        ca: "Us ho preparo tot, us ho mostro funcionant i comencem.",
        es: "Os lo preparo todo, os lo enseño funcionando y empezamos.",
        en: "I get everything ready, show it to you working, and we start.",
      },
    },
    {
      title: { ca: "Seguiment", es: "Seguimiento", en: "Follow-up" },
      text: {
        ca: "Mesurem les hores que realment s'estalvien i ajustem el que calgui. Si funciona, passem a la tasca següent.",
        es: "Medimos las horas que realmente se ahorran y ajustamos lo que haga falta. Si funciona, pasamos a la siguiente tarea.",
        en: "We measure the hours actually saved and adjust whatever's needed. If it works, we move on to the next task.",
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
    ca: "Soc Joan Pau Rahola, enginyer informàtic per la Universitat de Girona. Dissenyo i poso en marxa solucions d'IA en una empresa d'enginyeria i, a part, ajudo petites organitzacions a dedicar menys hores a tasques que no aporten res. Parlo el vostre idioma, també el no tècnic, i soc a prop per venir a l'oficina.",
    es: "Soy Joan Pau Rahola, ingeniero informático por la Universitat de Girona. Diseño y pongo en marcha soluciones de IA en una empresa de ingeniería y, aparte, ayudo a pequeñas organizaciones a dedicar menos horas a tareas que no aportan nada. Hablo vuestro idioma, también el no técnico, y estoy cerca para ir a la oficina.",
    en: "I'm Joan Pau Rahola, a computer engineer from the University of Girona. I design and roll out AI solutions at an engineering company and, separately, help small organisations spend fewer hours on tasks that add nothing. I speak your language, including the non-technical one, and I'm close enough to come to your office.",
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
        ca: "Hem de canviar els programes que fem servir?",
        es: "¿Tenemos que cambiar los programas que usamos?",
        en: "Do we have to change the software we use?",
      },
      a: {
        ca: "Normalment no. La idea és connectar-se al que ja teniu (el correu, WhatsApp, el programa de comptabilitat o de gestió, l'agenda) i estalviar-vos els passos manuals entre un i altre. Si en algun cas cal un canvi, ho veurem a l'auditoria i en sabreu el motiu.",
        es: "Normalmente no. La idea es conectarse a lo que ya tenéis (el correo, WhatsApp, el programa de contabilidad o de gestión, la agenda) y ahorraros los pasos manuales entre uno y otro. Si en algún caso hace falta un cambio, lo veremos en la auditoría y sabréis el motivo.",
        en: "Usually not. The idea is to connect to what you already have (email, WhatsApp, your accounting or management software, your calendar) and save you the manual steps in between. If a change is ever needed, we'll see it in the audit and you'll know why.",
      },
    },
    {
      q: {
        ca: "Les dades dels nostres clients estan segures?",
        es: "¿Los datos de nuestros clientes están seguros?",
        en: "Is our clients' data safe?",
      },
      a: {
        ca: "Cada solució es dissenya d'acord amb el RGPD. A l'auditoria decidim on es processen les dades segons el tipus d'informació: amb proveïdors amb servidors a la Unió Europea o, si cal més control (per exemple, amb dades de salut), amb models que funcionen en un servidor propi.",
        es: "Cada solución se diseña de acuerdo con el RGPD. En la auditoría decidimos dónde se procesan los datos según el tipo de información: con proveedores con servidores en la Unión Europea o, si hace falta más control (por ejemplo, con datos de salud), con modelos que funcionan en un servidor propio.",
        en: "Every solution is designed in line with the GDPR. In the audit we decide where data is processed depending on the type of information: with providers whose servers are in the European Union or, when more control is needed (for example with health data), with models running on your own server.",
      },
    },
    {
      q: { ca: "Quant costa?", es: "¿Cuánto cuesta?", en: "How much does it cost?" },
      a: {
        ca: "L'auditoria és gratuïta. Després us faig una proposta amb preu tancat per a cada tasca, de manera que en sabeu el cost abans de començar i el podeu comparar amb les hores que us estalviareu.",
        es: "La auditoría es gratuita. Después os hago una propuesta con precio cerrado para cada tarea, de modo que conocéis el coste antes de empezar y podéis compararlo con las horas que os ahorraréis.",
        en: "The audit is free. Afterwards I send you a fixed-price proposal for each task, so you know the cost before we start and can weigh it against the hours you'll save.",
      },
    },
    {
      q: {
        ca: "Quant es triga a veure resultats?",
        es: "¿Cuánto se tarda en ver resultados?",
        en: "How long until we see results?",
      },
      a: {
        ca: "L'objectiu és tenir la primera tasca funcionant en poques setmanes, no en mesos. Per això comencem per la que més temps us fa perdre: perquè l'estalvi es noti aviat.",
        es: "El objetivo es tener la primera tarea funcionando en pocas semanas, no en meses. Por eso empezamos por la que más tiempo os hace perder: para que el ahorro se note pronto.",
        en: "The aim is to have the first task running within a few weeks, not months. That's why we start with the one that wastes the most time: so the savings show early.",
      },
    },
    {
      q: { ca: "Treballes només a Girona?", es: "¿Trabajas solo en Girona?", en: "Do you only work in Girona?" },
      a: {
        ca: "Soc a Girona i puc venir a l'oficina a les comarques gironines. També treballo en línia amb empreses d'altres llocs.",
        es: "Estoy en Girona y puedo ir a la oficina en las comarcas de Girona. También trabajo en línea con empresas de otros lugares.",
        en: "I'm based in Girona and can visit offices across the province. I also work online with businesses elsewhere.",
      },
    },
  ] satisfies { q: L; a: L }[],
};

/* ------------------------------------------------------------------
 * Formulari de l'auditoria
 * ------------------------------------------------------------------ */

export const auditForm = {
  label: { ca: "Auditoria", es: "Auditoría", en: "Audit" } satisfies L,
  heading: {
    ca: { lead: "Demana l'auditoria", accent: "gratuïta" },
    es: { lead: "Pide la auditoría", accent: "gratuita" },
    en: { lead: "Book your", accent: "free audit" },
  } satisfies L<{ lead: string; accent: string }>,
  // REVISAR: el termini de resposta és un compromís.
  description: {
    ca: "Explica'm breument a què us dediqueu i quina tasca us fa perdre més temps. Et respondré en un màxim de dos dies feiners per acordar el dia.",
    es: "Cuéntame brevemente a qué os dedicáis y qué tarea os hace perder más tiempo. Te responderé en un máximo de dos días laborables para acordar el día.",
    en: "Tell me briefly what you do and which task takes up the most time. I'll reply within two working days to arrange a date.",
  } satisfies L,
  fields: {
    name: { ca: "Nom i cognoms", es: "Nombre y apellidos", en: "Full name" } satisfies L,
    company: { ca: "Empresa", es: "Empresa", en: "Company" } satisfies L,
    sector: { ca: "Sector", es: "Sector", en: "Industry" } satisfies L,
    sectorPlaceholder: { ca: "Tria'n un", es: "Elige uno", en: "Choose one" } satisfies L,
    sectorOther: { ca: "Un altre", es: "Otro", en: "Other" } satisfies L,
    email: { ca: "Correu electrònic", es: "Correo electrónico", en: "Email" } satisfies L,
    phone: { ca: "Telèfon (opcional)", es: "Teléfono (opcional)", en: "Phone (optional)" } satisfies L,
    task: {
      ca: "Quina tasca us fa perdre més temps?",
      es: "¿Qué tarea os hace perder más tiempo?",
      en: "Which task takes up the most time?",
    } satisfies L,
    taskPlaceholder: {
      ca: "Per exemple: cada mes passem a mà les factures que ens envien els clients.",
      es: "Por ejemplo: cada mes pasamos a mano las facturas que nos envían los clientes.",
      en: "For example: every month we type in the invoices our clients send us by hand.",
    } satisfies L,
    consent: {
      ca: "Accepto que em contactis per respondre aquesta sol·licitud.",
      es: "Acepto que me contactes para responder a esta solicitud.",
      en: "I agree to be contacted about this request.",
    } satisfies L,
  },
  // Primera capa d'informació del RGPD. REVISAR amb una política de privacitat completa.
  privacy: {
    ca: `Responsable: Joan Pau Rahola Ferrer. Finalitat: respondre la teva sol·licitud i preparar l'auditoria. No es cedeixen dades a tercers. Pots accedir a les teves dades, rectificar-les o demanar que s'esborrin escrivint a ${identity.email}.`,
    es: `Responsable: Joan Pau Rahola Ferrer. Finalidad: responder a tu solicitud y preparar la auditoría. No se ceden datos a terceros. Puedes acceder a tus datos, rectificarlos o pedir que se borren escribiendo a ${identity.email}.`,
    en: `Controller: Joan Pau Rahola Ferrer. Purpose: replying to your request and preparing the audit. Your data is not shared with third parties. You can access, correct or ask for deletion of your data by writing to ${identity.email}.`,
  } satisfies L,
  submit: { ca: "Envia la sol·licitud", es: "Enviar solicitud", en: "Send request" } satisfies L,
  sending: { ca: "S'està enviant…", es: "Enviando…", en: "Sending…" } satisfies L,
  sentTitle: { ca: "Sol·licitud rebuda", es: "Solicitud recibida", en: "Request received" } satisfies L,
  sentText: {
    ca: "Gràcies. T'escriuré en un màxim de dos dies feiners per acordar el dia de l'auditoria.",
    es: "Gracias. Te escribiré en un máximo de dos días laborables para acordar el día de la auditoría.",
    en: "Thank you. I'll write within two working days to arrange the audit.",
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

export const servicesNav: { href: string; label: L }[] = [
  { href: "/serveis#sectors", label: { ca: "Sectors", es: "Sectores", en: "Sectors" } },
  { href: "/serveis#com-funciona", label: { ca: "Com funciona", es: "Cómo funciona", en: "How it works" } },
  { href: "/serveis#preguntes", label: { ca: "Preguntes", es: "Preguntas", en: "Questions" } },
  { href: "/", label: { ca: "Portfoli", es: "Portfolio", en: "Portfolio" } },
];

export const servicesCta = {
  short: { ca: "Auditoria gratuïta", es: "Auditoría gratuita", en: "Free audit" } satisfies L,
};

export const sectorPage = {
  back: { ca: "Tots els sectors", es: "Todos los sectores", en: "All sectors" } satisfies L,
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
    ca: "IA aplicada per a empreses de les comarques de Girona.",
    es: "IA aplicada para empresas de las comarcas de Girona.",
    en: "Applied AI for businesses around Girona.",
  } satisfies L,
  portfolio: { ca: "Portfoli", es: "Portfolio", en: "Portfolio" } satisfies L,
};
