"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectsTitle from "./ProjectsTitle";

export default function ProjectsSection() {
  const projects = [
    {
      index: 1,
      title: "Urban VideoGame",
      client: "Projecte Personal",
      image: "/ProjectImages/test.jpg",
    },
    {
      index: 2,
      title: "Pixel Forge",
      client: "Client Pro",
      image: "/ProjectImages/test.jpg",
    },
    {
      index: 3,
      title: "Fantasy World",
      client: "Pixel Studio",
      image: "/ProjectImages/test.jpg",
    },
  ];

  const ref = useRef(null);

  // Control del scroll global
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Moviment subtil del contenidor
  const subtleY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
