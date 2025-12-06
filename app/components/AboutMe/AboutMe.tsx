"use client";
import { press_Start_2P } from "../../fonts";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect  } from "react";
import AboutMeTitle from "./AboutMeTitle";
import AboutMeText from "./AboutMeText";

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
      <AboutMeText />
    </section>
  );
}
