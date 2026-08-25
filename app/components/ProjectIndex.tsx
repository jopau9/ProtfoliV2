"use client";

import Link from "next/link";
import { publishedProjects, workSection } from "../content/projects";
import { ui } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function ProjectIndex() {
  const t = useT();
  const heading = t(workSection.heading);

  return (
    <div className="shell py-section">
      <SectionHeading
        index="01"
        label={t(workSection.label)}
        lead={heading.lead}
        accent={heading.accent}
      />

      <ul className="mt-20">
        {publishedProjects.map((project, i) => {
          const thumb = project.cover ?? project.images?.[0];

          return (
            <Reveal as="li" key={project.slug} delay={0.03 * (i % 3)}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block border-t border-line py-8 md:py-10"
              >
                <div className="grid gap-5 md:grid-cols-12 md:items-start md:gap-8">
                  {/* Miniatura fixa: sempre visible, res no apareix en passar-hi.
                      Els projectes interns no tenen captures publicables. */}
                  <div className="overflow-hidden rounded-lg border border-line md:col-span-3">
                    {thumb ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={thumb}
                        alt=""
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex aspect-[16/10] w-full items-center justify-center bg-surface px-4">
                        <span className="type-label text-center leading-relaxed text-faint">
                          {t(ui.noPreview)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-9">
                    {/* Número, títol i metadades */}
                    <div className="flex items-start gap-4">
                      <span className="type-label mt-2 text-faint transition-colors duration-500 group-hover:text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <h3 className="type-h2 flex-1 text-ink text-balance">
                        {t(project.title)}
                      </h3>

                      <div className="mt-1.5 flex shrink-0 items-center gap-4">
                        <span className="type-label hidden text-faint sm:inline">
                          {t(project.context)} · {project.year}
                        </span>
                        <span
                          aria-hidden
                          className="text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
                        >
                          →
                        </span>
                      </div>
                    </div>

                    <p className="type-body measure mt-4 text-muted md:pl-10">
                      {t(project.demonstrates)}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 md:pl-10">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="type-label rounded-full border border-line px-2.5 py-1.5 text-faint"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="sr-only">{t(ui.viewProject)}</span>
              </Link>
            </Reveal>
          );
        })}
        <li className="border-t border-line" aria-hidden />
      </ul>
    </div>
  );
}
