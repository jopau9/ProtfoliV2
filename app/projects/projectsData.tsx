export type ProjectSection = {
  id: string;
  title: string;
  content?: string;
  accordion?: { title: string; content: string }[];
};

export type ProjectData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  date: string;
  sections: ProjectSection[];
};

export const projects: ProjectData[] = [
  {
    slug: "videojoccomplet",
    title: "Un videojoc multijugador de contraban",
    subtitle: "Un joc multijugador de conducció, supervivència i contraban en un món obert dinàmic.",
    description:
      "Projecte d’un videojoc multijugador ambientat en un món urbà, sarcàstic i realista. Els jugadors reben l’encàrrec més gran de les seves vides: transportar una enorme quantitat de droga fins a un punt fronterer. Mecàniques sistèmiques, narrativa emergent i situacions d’alt risc defineixen tota l’experiència.",
    tags: ["Unity", "C#", "LLM's","Netcode for GameObjects", "Cinemachine", "ShaderGraph", "Multiplayer Design", "GitHub"],
    date: "2025-05-13",

    sections: [
      {
        id: "funcionalitats-clau",
        title: "Funcionalitats Clau",  
        accordion: [
          {
            title: "Conducció d’Alt Risc i Arquitectura de Món Obert",
            content:
              "Construït amb Unity i un sistema de física personalitzat per oferir trajectes tensos, persecucions, controls policials i situacions imprevisibles. El món obert integra triggers, cutscenes sincronitzades i escenes carregades dinàmicament per garantir fluïdesa i coherència multijugador.",
          },
          {
            title: "Gestió d'estupefaents, Inventari i Mecàniques Sistèmiques",
            content: "Inclou un sistema complet d’integritat del producte, controls policials amb verificació, consum, pèrdua per accidents i interaccions emergents. Cada decisió del jugador pot alterar la quantitat entregada i el comportament dels NPCs en futurs controls.",
          },
          {
            title: "Personalització i Evolució dels Vehicles",
            content: "El jugador pot transformar completament el seu vehicle al llarg del viatge: canvi de carrosseries, millores mecàniques, blindatges, rodes especials i eines de suport com detectors de radars o sistemes d’autopilot. Els tallers mecànics permeten reparar danys, reduir sospites policials i desbloquejar configuracions avançades. A més, diversos garatges repartits pel món funcionen com a punts segurs on guardar, modificar o substituir vehicles segons l’estratègia de contraban del jugador.",
          },
          {
            title: "Multijugador Amb Sincronització Avançada",
            content: "Basat en Netcode for GameObjects: sincronització de vehicles, jugadors, escenes i cutscenes. Quan un jugador canvia d’escena, la resta amaguen i carreguen les necessàries per mantenir coherència global, evitant desconnexions o desincronitzacions.",
          },
          {
            title: "NPCs Reactius, IA i Món Viu",
            content: "Botigues amb horari real, NPCs que tanquen el local i un sistema d’interacció amb IA per generar respostes contextuals. El món reacciona al jugador tant en l’àmbit social com en el policial.",
          },
        ],
      },
      {
        id: "tech-stack",
        title: "Tecnologies Utilitzades",
        content: `
      - Unity (C#) – Motor del joc, física, interaccions i interfícies.
      - Netcode for GameObjects – Sincronització multijugador, gestió d’autoritat i escenes compartides.
      - Cinemachine – Sistemes de càmera dinàmics i cutscenes sincronitzades.
      - ShaderGraph – Efectes visuals i materials personalitzats.
      - NavMesh / AI Tools – Navegació i comportament bàsic dels NPCs.
      - Blender – Edició i creació de models 3D utilitzats al joc.
      - Git / GitHub – Control de versions i desenvolupament estructurat.
        `
      },
      {
        id: "resultats",
        title: "Resultat i Estat Actual",
        content:"El projecte compta amb sistemes multijugador estables, cutscenes sincronitzades, conducció avançada, sistema d'inventari i interaccio real amb objectes. L'estat actual se centra en polir mecàniques, programar noves mecaniques, ampliar la narrativa i optimitzar la sincronització de vehicles i escenes."

        
      }
    ],
  },
  {
    slug: "custom-embedded-hmi-device",
    title: "Custom Embedded HMI Device - Raspberry Pi",
    subtitle:
      "Aplicació de sobretaula per a Raspberry Pi amb mapes, galeria, cronòmetres i petites sorpreses personals.",
    description:
      "Projecte personal desenvolupat com a regal digital. Es tracta d’una aplicació a pantalla completa pensada per executar-se en una Raspberry Pi, amb GIFs d’inici, música, galeria de fotos, mapa interactiu de destinacions, cronòmetres de dates especials i un petit ‘timeline’ protegit amb contrasenya. Tot està implementat amb Python i Tkinter, prioritzant la claredat del codi, l’organització en mòduls i una experiència d’usuari coherent i fàcil d’utilitzar.",

    tags: [
      "Python",
      "Tkinter",
      "ttkthemes",
      "PIL",
      "Raspberry Pi",
      "pygame",
      "Folium",
      "GUI Design"
    ],
    date: "2024-10-13",

    sections: [
      {
        id: "visio-general",
        title: "Visió General del Projecte",
        content:
          "El projecte és una interfície HMI personalitzada per a Raspberry Pi, pensada com a punt d’entrada únic a records, plans futurs i petites sorpreses preparades per a una persona concreta. L’aplicació agrupa en un mateix entorn: galeria de fotos, mapa interactiu, cronòmetres de dates importants, un mini joc de contrasenya i un espai de configuració avançada. Des del principi he intentat mantenir un enfocament clar: una interfície neta, poques pantalles però ben definides (menú principal, galeria, mapa, configuració, cronòmetres, timeline) i una estructura de codi modular que faciliti tant el manteniment com l’afegit de noves funcionalitats."
      },

      {
        id: "funcionalitats-clau",
        title: "Funcionalitats Clau",
        accordion: [
          {
            title: "Menú Principal, GIFs de Benvinguda i Música",
            content:
              "En arrencar l’aplicació es mostra un GIF aleatori de felicitació, triat d’una carpeta d’animacions, al centre de la pantalla. El menú superior dona accés directe a totes les seccions (GALERIA, TIMELINE, MAPA, ❤ i CONFIGURACIÓ), mentre que a la part inferior es mostra la data i l’hora en temps real. Des d’aquí també es pot activar o pausar la música de fons (mitjançant pygame) i apagar el sistema. Aquesta part m’ha servit per entendre millor el model d’esdeveniments de Tkinter, l’ús de temes gràfics (ttkthemes) i la gestió de recursos multimèdia (GIFs i audio loops) de manera controlada."
          },
          {
            title: "Galeria de Fotos Dinàmica amb Importació des d’USB",
            content:
              "La secció GALERIA mostra un passi de fotos continu: les imatges es carreguen des d’una carpeta del sistema, es redimensionen perquè encaixin bé a la pantalla i es van mostrant en bucle cada pocs segons. A més, he afegit la possibilitat d’importar fotos noves directament des d’un USB (carpeta ‘fotos’) i d’eliminar imatges si cal. Aquesta funcionalitat m’ha obligat a treballar amb el sistema de fitxers (os, shutil), a controlar bé la càrrega i el tractament d’imatges amb PIL i a encapsular la lògica de la galeria en una classe pròpia, separant clarament la part visual de la part de gestió de dades."
          },
          {
            title: "Mapa Interactiu de Plans i Destinacions",
            content:
              "El MAPA mostra una imatge de fons amb un mapa personalitzat i permet afegir punts fent clic sobre el canvas. Quan l’usuari selecciona una zona, apareix un teclat virtual QWERTY a pantalla completa per escriure el nom de la destinació sense necessitat de teclat físic. Cada punt es desa en un fitxer JSON, es representa com un punt vermell sobre el mapa i es llista en una secció lateral de ‘Destinacions’, des d’on també es poden eliminar. Aquesta part m’ha ajudat a treballar amb canvas, coordenades de clic, persistència de dades amb JSON i disseny d’interaccions pensades per a pantalla tàctil o ratolí únicament."
          },
          {
            title: "Cronòmetres de Dates Especials",
            content:
              "L’apartat ❤ agrupa diversos cronòmetres que compten el temps des de (o fins a) dates concretes: el dia que vam començar a sortir, el primer dia que ens vam veure, el primer petó, una data íntima determinada o el proper aniversari, entre d’altres. Cada cronòmetre ocupa la pantalla quan es selecciona, amaga la resta i mostra un text explicatiu (per exemple, ‘Temps que fa que sortim ❤’ o ‘Temps pel següent aniversari’). A nivell tècnic, he treballat amb el mòdul datetime, càlcul de diferències en dies/hores/minuts/segons i actualitzacions periòdiques amb \`after()\`, mantenint un codi reutilitzable i fàcil de seguir."
          },
          {
            title: "Timeline 2025: Joc de Contrasenya i Sorpresa",
            content:
              "La secció TIMELINE (C2025) funciona com un petit joc de contrasenya. A la pantalla apareixen quatre botons amb imatges (0, 1, 2 i 3) que representen números. L’usuari ha d’introduir una seqüència concreta (una data significativa), i el programa compta quants valors s’han introduït i comprova si són correctes. Si la combinació no és vàlida, mostra missatges d’error pensats amb humor; quan la combinació és correcta, s’amaguen tots els widgets i es mostra una imatge sorpresa (per exemple, un codi QR amb una altra activitat). Aquesta part m’ha permès practicar la gestió d’estat intern (seqüència introduïda, comptador), el feedback visual i el control de transicions entre pantalles dins d’una mateixa finestra."
          },
          {
            title: "Configuració Avançada, WiFi, Històric i Crèdits",
            content:
              "La secció CONFIGURACIÓ concentra funcionalitats més tècniques: informació de versió (any de creació, tecnologies utilitzades, llicència i data de darrera modificació real recorrent els fitxers del projecte), configuració de la WiFi editant el fitxer wpa_supplicant del sistema i reconfigurant la interfície, una secció HOW? amb imatges explicatives de l’ús de l’aplicació, un HISTÒRIC amb records i comentaris en un text scrollable, i uns CRÈDITS amb efecte de ‘scroll’ vertical de tipus cinema que acaben amb una dedicatòria. També hi he incorporat petits easter eggs, com el botó ‘PASS TIMELINE’ que es mou per la pantalla i acaba mostrant una imatge “troll”. Aquí he treballat especialment amb subprocessos, accés al sistema, lectura/escriptura de fitxers externs i disseny de pantalles de configuració que siguin potents però no intimidadores per a l’usuari final."
          }
        ]
      },

      {
        id: "arquitectura-i-aprenentatges",
        title: "Arquitectura i Aprenentatges Tècnics",
        content: `He aprofitat aquest regal per plantejar-lo com un projecte Python complet, modular i mantenible. L’aplicació es basa en una finestra principal i en un conjunt de mòduls independents (galeria, mapa, configuració, cronòmetres i timeline), que el menú central activa o amaga segons la secció seleccionada. Aquesta organització m’ha ajudat a entendre com estructurar una GUI relativament gran sense dependre de variables globals ni barrejar lògica i interfície de manera desordenada.

  A nivell tècnic he après a:

  - Crear interfícies \`Tkinter\` raonablement polides amb \`ttk\` i \`ttkthemes\`, controlant estils, fonts i colors.
  - Treballar amb imatges (\`PIL\`) i GIFs animats, incloent-hi redimensionament, manteniment de proporcions i gestió de *frames*.
  - Gestionar l’estat de la UI: amagar i mostrar *frames*, *canvas* i *widgets* segons el context i la secció activa.
  - Utilitzar \`after()\` per actualitzar cronòmetres i animacions sense bloquejar el bucle principal i mantenint una bona resposta de la interfície.
  - Persistir dades amb fitxers \`JSON\` (punts del mapa) i fitxers de text (històric) de forma senzilla però robusta.
  - Integrar el programa amb el sistema: configuració de WiFi, control de música, gestió de fitxers i, en el futur, enviament d’emails i altres automatitzacions.

  He intentat que el codi sigui clar i fàcil de seguir: noms d’atributs descriptius, funcions amb una responsabilitat acotada i comentaris només quan afegeixen context real. Tot i ser un projecte molt personal, l’he enfocat com un exercici seriós de desenvolupament de *software*, pensant en que sigui fàcil d’entendre, d’ampliar i de mantenir al llarg del temps.`
      },

      {
        id: "tech-stack",
        title: "Tecnologies Utilitzades",
        content: `- \`Python 3\` – Llenguatge principal del projecte.
  - \`Tkinter + ttk\` – Construcció de la interfície gràfica (*frames*, botons, *labels*, *canvas*, *Treeview*, etc.).
  - \`ttkthemes\` (*ThemedTk*, *ThemedStyle*) – Aplicació de temes visuals (“equilux”, “plastik”) per donar un aspecte més cuidat a la UI.
  - \`Pillow\` (*PIL*, \`Image\`, \`ImageTk\`, \`ImageSequence\`) – Càrrega, tractament i visualització d’imatges i GIFs animats.
  - \`pygame\` – Reproducció de música en bucle i control bàsic de reproducció (play/pause).
  - \`json\` – Emmagatzematge i càrrega de les destinacions del mapa en un fitxer \`punts_mapa.json\`.
  - \`datetime\` – Càlcul de diferències temporals per als cronòmetres de dates especials.
  - \`smtplib\` i \`MIME\` (planificat) – Enviament de correus automàtics quan s’inicia el programa a la Raspberry Pi.
  - \`os\`, \`subprocess\`, \`shutil\` – Interacció amb el sistema: llistar dispositius USB, copiar fotos, modificar configuració WiFi, gestionar processos i integrar botons com “Apagar”.

  Aquest *stack* em permet combinar una part molt personal (el contingut i el context del regal) amb un aprenentatge tècnic real, treballant tant la capa visual com la integració amb el sistema operatiu de la Raspberry Pi.`
      },

      {
        id: "resultats",
        title: "Resultat i Estat Actual",
        content:
          "Actualment el projecte és plenament utilitzable: en encendre la Raspberry Pi, la persona destinatària pot navegar per la galeria de fotos, consultar el mapa amb els punts marcats, revisar els cronòmetres de dates importants, jugar amb el sistema de contrasenya del TIMELINE i accedir a l’històric i als crèdits. A nivell de desenvolupament, ha estat una bona oportunitat per practicar la construcció d’una aplicació d’escriptori real amb Python, més enllà d’scripts puntuals.\n\nA curt termini, el considero un projecte tancat i estable com a regal. A mig termini, seria relativament senzill afegir-hi noves seccions (mini-jocs, noves pantalles d’estadístiques, integració amb algun servei extern, etc.) aprofitant l’arquitectura modular que he definit."
      }
    ]
  },
  {
  slug: "portfoliv2",
  title: "PortfoliV2 – Web personal de projectes",
  subtitle:
    "Single-page portfolio amb animacions de scroll, seccions enganxades i fitxes de projecte detallades.",
  description:
    "Portfoli desenvolupat amb Next.js, React i Tailwind CSS per presentar de manera clara els meus projectes, habilitats i experiència. Inclou seccions diferenciades (Hero, Sobre mi, Skills, carrusel i projectes), targetes animades amb Framer Motion i una pàgina de detall per a cada projecte amb TOC lateral i contingut en Markdown. L’objectiu principal ha estat tenir una eina professional que expliqui bé qui soc com a desenvolupador i, alhora, m’ajudi a practicar un desenvolupament front-end més cuidat i estructurat.",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "UI Design",
    "Responsive Design"
  ],
  date: "2025-01-10",

  sections: [
    {
      id: "visio-general",
      title: "Visió General del Projecte",
      content:
        "Aquest portfoli és la meva carta de presentació com a desenvolupador. Està pensat com una pàgina principal amb diverses seccions: un Hero inicial, una part de Sobre mi, un carrusel visual, una secció d’habilitats i un bloc de projectes que condueix a fitxes individuals detallades. Tots els apartats conviuen en una mateixa pàgina amb un fons en degradat radial i una navegació suau per àncores. La idea central és que qualsevol persona pugui entendre ràpidament què faig, quins projectes he realitzat i en què m’agradaria seguir creixent, amb una interfície clara i una experiència visual agradable.:contentReference[oaicite:0]{index=0}"
    },

    {
      id: "funcionalitats-clau",
      title: "Funcionalitats Clau",
      accordion: [
        {
          title: "Layout principal i seccions del portfoli",
          content:
            "La pàgina principal s’estructura en blocs clarament identificats: HERO, SOBRE MI, CARROUSEL, SKILLS i PROJECTES. El component principal orquestra aquestes seccions i defineix el fons amb un gradient radial, mentre que cada bloc es resol amb components dedicats (Hero, AboutMe, ScrollCarousel, SkillsSection i Projects). Aquesta separació m’ha ajudat a treballar amb una jerarquia de components clara i a entendre millor com organitzar una SPA amb Next.js."
        },
        {
          title: "Llistat de projectes amb scroll vertical i targetes apilades",
          content:
            "La secció de PROJECTES utilitza un sistema de targetes apilades que es desplacen amb l’scroll. Cada ProjectCard té un índex, títol, client i tres imatges, i es posiciona dins un contenidor sticky molt alt (400vh). Amb Framer Motion i useScroll, la posició vertical de cada targeta es calcula en funció del progrés de l’scroll, creant un efecte de pila que es va desplegant a mesura que es baixa. És una manera de mostrar poca informació a la vegada però amb impacte visual, i m’ha servit per practicar animacions basades en scroll i transformacions suaus."
        },
        {
          title: "Fitxes de projecte amb TOC lateral i contingut en Markdown",
          content:
            "Quan es fa clic a “VEURE PROJECTE” en una targeta, s’obre una pàgina de detall que rep el slug del projecte i recupera la informació de `projectsData`. El contingut de cada secció s’escriu en Markdown i es renderitza amb ReactMarkdown, i al mateix temps es genera un índex de continguts (TOC) amb totes les seccions. El component TOC utilitza IntersectionObserver per detectar quina secció és visible i marcar-la com activa, destacant-la visualment. Això dona una lectura molt més còmoda de fitxes que poden créixer en longitud i m’ha permès combinar dades tipades, Rendering de Markdown i lògica de visibilitat al navegador."
        },
        {
          title: "Components reutilitzables: Accordion i seccions d’habilitats",
          content:
            "Per descriure funcionalitats i projectes utilitzo un component d’Accordion reutilitzable, que mostra un sol bloc obert per defecte i anima l’expansió i el tancament amb Framer Motion. A la secció d’habilitats he optat per petites targetes amb una icona animada i text breu, pensades per destacar aspectes més transversals (resolució de problemes, adaptabilitat, treball en equip i gestió del temps). Tot plegat m’ha ajudat a pensar en components generics que pugui reutilitzar en altres parts del portfoli o futurs projectes."
        },
        {
          title: "Identitat visual, tipografia i detall d’interacció",
          content:
            "Visualment, el portfoli combina un fons fosc amb degradat radial i titulars en una font tipus ‘arcade’ (Press Start 2P) per donar-li personalitat, mentre que el cos de text utilitza tipografies més llegibles. S’han definit mides grans per als títols (especialment en la secció de PROJECTES) i s’han afegit petits detalls d’interacció: llocs on el text s’omple amb Framer Motion en funció de l’scroll, botons amb transició de color, i targetes que reaccionen al pas del cursor. L’objectiu és que la pàgina se senti viva però sense perdre la claredat."
        }
      ]
    },

    {
      id: "arquitectura-i-aprenentatges",
      title: "Arquitectura i Aprenentatges Tècnics",
      content: `He plantejat el portfoli com un projecte Next.js real, no només com una pàgina estàtica. Hi ha una separació clara entre dades i presentació: la informació de cada projecte es guarda a \`projectsData\`, i els components visuals (targetes, llistats, pàgines de detall) només llegeixen aquesta estructura tipada. Això fa molt fàcil afegir o modificar projectes sense tocar la lògica de renderitzat.

A nivell tècnic, aquest projecte m’ha ajudat a:

- Consolidar l’ús de **Next.js** i **React** per construir una aplicació de portfoli amb components client-side i dinàmiques d’scroll.
- Treballar amb **TypeScript** definint tipus clars per a les dades dels projectes i per a les seccions de contingut.
- Utilitzar **Tailwind CSS** per maquetar ràpid, amb classes utilitàries per al layout, el responsive i les microinteraccions.
- Integrar **Framer Motion** per donar moviment a elements clau (targetes apilades, títols que s’omplen, desplegables, etc.).
- Gestionar contingut en **Markdown** per escriure descripcions llargues d’una forma més còmoda i flexible.
- Implementar un **TOC** amb IntersectionObserver per seguir quina secció està activa mentre l’usuari fa scroll.

El resultat és un projecte on no només mostro el que he fet, sinó que també demostra com penso el codi: separat per responsabilitats, amb components reutilitzables i una atenció especial a que tot sigui fàcil de llegir i mantenir.`
    },

    {
      id: "tech-stack",
      title: "Tecnologies Utilitzades",
      content: `- **Next.js** – Marc principal per a la web del portfoli i la gestió de rutes.
- **React** – Construcció de tots els components d’interfície.
- **TypeScript** – Tipatge de dades de projectes i props dels components.
- **Tailwind CSS** – Maquetació, sistemes de grid, espais, colors i responsivitat.
- **Framer Motion** – Animacions basades en scroll i transicions suaus en targetes i seccions.
- **ReactMarkdown** – Renderitzat de descripcions de projecte escrites en Markdown.
- **Custom Fonts (Press Start 2P, etc.)** – Definició de la identitat visual del portfoli.
- **Icons & UI helpers** – Petites animacions en icones i components per millorar la sensació d’interactivitat.`
    },

    {
      id: "resultats",
      title: "Resultat i Estat Actual",
      content:
        "El portfoli està preparat per ser el meu punt central de referència quan parlo de projectes, tant amb empreses com amb altres desenvolupadors. Puc afegir nous projectes simplement ampliant `projectsData`, sense canviar l’arquitectura, i puc adaptar les seccions de text per orientarlas a diferents rols o oportunitats. Més enllà de la part visual, ha estat una bona pràctica per treballar amb un stack modern de front-end i, sobretot, per obligar-me a explicar amb claredat què faig i què sé fer."
    }
  ]
}


];
