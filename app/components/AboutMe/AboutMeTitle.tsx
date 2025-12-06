"use client";
import { press_Start_2P } from "../../fonts";

import { motion, useScroll, useTransform } from "framer-motion";
import { style } from "framer-motion/m";
import { useRef, useState, useEffect  } from "react";

export default function AboutMeTitle() {
  const ref = useRef(null);

  // Progress del scroll dins del bloc
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "start 30%"],
  });

  // Omplir el text 0 → 1
  const fillOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    
    <div ref={ref} className="pl-30 pt-20">

      {/* contenidor per centrar */}
      <div className="relative">

        {/* ------------------ CAPA 1: OUTLINE ------------------ */}
        <h1
          className={`
            text-[50px] font-bold 
            text-transparent 
            pointer-events-none select-none
            ${press_Start_2P.className}
            `}
          style={{
            WebkitTextStroke: "0.3px #ffffff",
          }}
        >
          SOBRE MI
        </h1>

        {/* ------------------ CAPA 2: TEXT PLE ------------------ */}
        <motion.h1
        className={`
            absolute top-0 left-0
            text-[50px] font-bold text-white
            pointer-events-none select-none
            ${press_Start_2P.className}
        `}
        style={{ opacity: fillOpacity, textShadow: "0 4px 10px rgba(0, 0, 0, 0.4)", }}
        >
        SOBRE MI
        </motion.h1>


      </div>
    </div>
  );
}
