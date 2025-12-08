"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectsTitle from "./ProjectsTitle";

export default function ProjectsSection() {
  const projects = [
    {
      index: 1,
      title: "Videojoc Complet",
      client: "Projecte Personal",
      image1: "/ProjectImages/VideoGame/0.gif",
      image2: "/ProjectImages/VideoGame/1.gif",
      image3: "/ProjectImages/VideoGame/2.gif",
    },
    {
      index: 2,
      title: "Regal Personalitzat",
      client: "Projecte Personal",
      image1: "/ProjectImages/test.jpg",
      image2: "/ProjectImages/test2.jpg",
      image3: "/ProjectImages/test3.jpg",
    },
    {
      index: 3,
      title: "PortfoliV2",
      client: "Projecte Personal",
      image1: "/ProjectImages/test.jpg",
      image2: "/ProjectImages/test2.jpg",
      image3: "/ProjectImages/test3.jpg",
    },
    {
      index: 4,
      title: "PortfoliV1  ",
      client: "Projecte Personal",
      image1: "/ProjectImages/PortfoliV1/0.gif",
      image2: "/ProjectImages/PortfoliV1/1.png",
      image3: "/ProjectImages/PortfoliV1/2.png",
    },
  ];

  const ref = useRef(null);

  // Control del scroll global
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Moviment subtil del contenidor
  const subtleY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="relative h-[400vh]">
      
      {/* Sticky container */}
      <motion.div
        style={{ y: subtleY }}
        className="sticky top-[-80px] h-screen justify-center items-start"
      >
        <ProjectsTitle />

        <div className="relative w-full top-20 flex justify-center">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.index}
              order={i}
              {...p}
              scroll={scrollYProgress}
              total={projects.length}
            />
          ))}
        </div>
      </motion.div>
      
    </section>
  );
}
