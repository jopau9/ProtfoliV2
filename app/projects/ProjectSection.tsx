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
      title: "Custom Embedded HMI Device - Raspberry Pi",
      client: "Projecte Personal",
      image1: "/ProjectImages/PythonProject/2.gif",
      image2: "/ProjectImages/PythonProject/1.gif",
      image3: "/ProjectImages/PythonProject/0.gif",
    },
    {
      index: 3,
      title: "PortfoliV2",
      client: "Projecte Personal",
      image1: "/ProjectImages/PortfoliV2/0.gif",
      image2: "/ProjectImages/PortfoliV2/1.png",
      image3: "/ProjectImages/PortfoliV2/2.jpg",
    },
    {
      index: 4,
      title: "PortfoliV1  ",
      client: "Projecte Personal",
      image1: "/ProjectImages/PortfoliV1/0.gif",
      image2: "/ProjectImages/PortfoliV1/1.png",
      image3: "/ProjectImages/PortfoliV1/2.png",
    },
    {
      index: 5,
      title: "Finantial Tracker",
      client: "Projecte Personal",
      image1: "/ProjectImages/FinantialTraker/0.png",
      image2: "/ProjectImages/FinantialTraker/1.png",
      image3: "/ProjectImages/FinantialTraker/2.png",
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
