"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect  } from "react";
import AboutMeTitle from "./AboutMeTitle";
import AboutMeText1 from "./AboutMeText1";
import DownloadCV from "../Buttons/DownloadCV";
import AboutMeText2 from "./AboutMeText2";
import QuoteBlock from "../QuoteBlock";

export default function AboutMe() {
  return (
    <section
      className="
        min-h-screen
        flex flex-col
        gap-20
        
      "
    >
      
        <AboutMeTitle />
      <div>
        <AboutMeText1 />
        <div className="mt-10 flex items-center ml-40">
          <DownloadCV />
          <AboutMeText2 />
          
        </div>
      </div>
      <div className="justify-center mt-20 mb-10">
        <QuoteBlock />
      </div>
    </section>
  );
}
