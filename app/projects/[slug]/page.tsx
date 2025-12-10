"use client";

import { projects } from "../projectsData";
import React from "react";
import ProjectHeader from "../ProjectHeader";
import AccordionList from "../Accordion";
import TOC from "../TOC";
import ReactMarkdown from "react-markdown";
import { robotoflex} from "../../fonts";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div className="text-white">Project not found</div>;

  // convertim sections → items per al TOC
  const tocItems = project.sections.map((section) => ({
    id: section.id,
    label: section.title,
    indent: 0,
  }));

    return (
    // CONTENIDOR PRINCIPAL: dues columnes (contingut + TOC)
    <div className={`flex flex-row w-full mx-auto px-6 gap-14 pt-20 pb-20 ${robotoflex.className}`}>




      {/* COLUMNA ESQUERRA — CONTINGUT DEL PROJECTE */}
      <div className="w-full lg:w-[70%]">

        {/* Capçalera del projecte (títol, subtítol, tags...) */}
        <ProjectHeader project={project} />

        {/* Llista de seccions del projecte */}
        {project.sections.map((section) => (
          <section
            id={section.id}          // ID per permetre scroll i enllaços del TOC
            key={section.id}         // Clau única per React
            className="mt-16 scroll-mt-24" // Separació i offset pel scroll automàtic
          >

            {/* Títol de cada secció */}
            <h2 className="text-3xl font-bold mb-6 text-white">
              {section.title}
            </h2>

            {/* Si la secció porta un ACORDIÓ, el mostrem */}
            {section.accordion && (
              <AccordionList items={section.accordion} />
            )}

            {/* Si la secció porta contingut Markdown, el renderitzem */}
            {section.content && (
              <div className="prose prose-invert text-white/80">
                <ReactMarkdown>
                  {section.content}
                </ReactMarkdown>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* COLUMNA DRETA — TAULA DE CONTINGUTS (TOC) */}
      <div className="hidden lg:block w-[25%] sticky top-28 h-fit">

        {/* El TOC rep la llista de seccions ja transformada a {id, label} */}
        <TOC items={tocItems} />

      </div>
    </div>
  );

}
