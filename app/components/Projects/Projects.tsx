"use client";
import { press_Start_2P } from "../../fonts";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect  } from "react";
import ProjectsTitle from "./ProjectsTitle";
import ProjectsSection from "./ProjectSection";

export default function Projects() {
  return (
    <section
      className="
        min-h-screen 
        flex flex-col
        gap-20
        items-center
      "
    >
      <ProjectsSection />
    </section>
  );
}
