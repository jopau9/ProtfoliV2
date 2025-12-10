"use client";

import AboutMeTitle from "./AboutMeTitle";
import AboutMeText1 from "./AboutMeText1";
import DownloadCV from "../Buttons/DownloadCV";
import AboutMeText2 from "./AboutMeText2";
import QuoteBlock from "../QuoteBlock";

export default function AboutMe() {
  return (
    <section
      className="
        w-full
        py-16                 /* separació vertical normal */
        flex flex-col
        gap-12                /* espai entre blocs, no exagerat */
      "
    >
      {/* Títol */}
      <AboutMeTitle />

      {/* Text + CV + text lateral */}
      <div className="mt-4">
        <AboutMeText1 />

        <div
          className="
            mt-8 
            flex flex-col lg:flex-row    /* en columna al mòbil, en fila al desktop */
            items-start lg:items-center 
            gap-6                         /* separació constant */
          "
        >
          <DownloadCV />
          <AboutMeText2 />
        </div>
      </div>

      {/* Frase / quote centrada */}
      <div className="mt-12 mb-6 flex justify-center">
        <QuoteBlock />
      </div>
    </section>
  );
}
