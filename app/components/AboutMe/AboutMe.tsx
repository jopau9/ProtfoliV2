"use client";

import AboutMeTitle from "./AboutMeTitle";
import AboutMeText1 from "./AboutMeText1";
import DownloadCV from "../Buttons/DownloadCV";
import AboutMeText2 from "./AboutMeText2";
import QuoteBlock from "../QuoteBlock";

export default function AboutMe() {
  return (
    <section className="flex flex-col items-center"
    >
      <div className="
        w-full
        py-16
        grid grid-cols-1 lg:grid-cols-5
        gap-16
        
      ">
      {/* COLUMNA ESQUERRA */}
      <div className="flex flex-col gap-12 grid-cols-1 lg:col-span-3 pl-50
      ">
        <AboutMeTitle />

        <div className="">
          <AboutMeText1 />

          <div className="pl-40 mt-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <DownloadCV />
            <AboutMeText2 />
          </div>
        </div>
      </div>

      {/* COLUMNA DRETA */}
      <div className="lg:flex justify-center items-start pr-40 grid-cols-1 hidden lg:col-span-2 ">
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
      {/* QUOTE A SOTA, CENTRADA */}
<div className="mt-20 lg:col-span-5 flex justify-center">
  <QuoteBlock />
</div>

      </div>
    </section>
    
  );
}
