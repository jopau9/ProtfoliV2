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
        py-16
        grid grid-cols-1 lg:grid-cols-2
        gap-16
        justify-items-center
        
      "
    >
      {/* COLUMNA ESQUERRA */}
      <div className="flex flex-col gap-12 pl-0">
        <AboutMeTitle />

        <div className="pl-20">
          <AboutMeText1 />

          <div className="mt-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 pl-40">
            <DownloadCV />
            <AboutMeText2 />
          </div>
        </div>
      </div>

      {/* COLUMNA DRETA */}
      <div className="lg:flex justify-center items-start">
  <img
    src="/personal_photos/Adobe Express - file.png"
    alt="Portrait"
    className="w-full max-w-md rounded-2xl object-cover"
    style={{
      WebkitMaskImage: `
        linear-gradient(to left, transparent 0%, black 200px),
        linear-gradient(to top, transparent 0%, black 500px)
      `,
      WebkitMaskComposite: 'intersect',
      maskImage: `
        linear-gradient(to left, transparent 5%, black 200px),
        linear-gradient(to top, transparent 0%, black 200px)
      `,
      maskComposite: 'intersect'
    }}
  />
</div>


      {/* QUOTE A SOTA, CENTRADA */}
      <div className="lg:col-span-2 mt-8 flex justify-center">
        <QuoteBlock />
      </div>
    </section>
  );
}
