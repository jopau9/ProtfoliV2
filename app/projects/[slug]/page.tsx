"use client";

import { projects } from "../projectsData";
import React from "react";
import ProjectHeader from "../ProjectHeader";
import AccordionList from "../Accordion";
import TOC from "../TOC";
import ReactMarkdown from "react-markdown";
import { robotoflex } from "../../fonts";
import Link from "next/link";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div className="text-white">Project not found</div>;

  const tocItems = project.sections.map((section) => ({
    id: section.id,
    label: section.title,
    indent: 0,
  }));

  return (
    <>
      {/* 🔵 BOTÓ HOME AMB FAVICON */}
      <div className="fixed top-6 right-6 z-50">
        <Link href="/">
          <img
            src="/favicon.png"
            alt="Home"
            className="w-20 h-20 cursor-pointer rounded-lg hover:scale-110 transition-transform"
          />
        </Link>
      </div>

      {/* CONTENIDOR PRINCIPAL */}
      <div className={`flex flex-row w-full mx-auto px-6 gap-14 pt-20 pb-20 ${robotoflex.className}`}>

        {/* COLUMNA ESQUERRA — CONTINGUT */}
        <div className="w-full lg:w-[70%]">
          <ProjectHeader project={project} />

          {project.sections.map((section) => (
            <section
              id={section.id}
              key={section.id}
              className="mt-16 scroll-mt-24"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                {section.title}
              </h2>

              {section.accordion && <AccordionList items={section.accordion} />}

              {section.content && (
                <div className="prose prose-invert text-white/80">
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* COLUMNA DRETA — TOC */}
        <div className="hidden lg:block w-[25%] sticky top-28 h-fit">
          <TOC items={tocItems} />
        </div>
      </div>
    </>
  );
}
