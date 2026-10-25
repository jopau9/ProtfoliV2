"use client";

import Link from "next/link";
import {
  publishedProjects,
  workSection,
  type Project,
} from "../content/projects";
import { ui } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Media from "./ui/Media";
import MediaCanvas from "./ui/MediaCanvas";
import SystemDiagram from "./ui/SystemDiagram";

/**
 * La jerarquia la fa la mida, no el text: els destacats són una imatge
 * gran a tota amplada amb el títol a sobre; la resta, una graella petita.
 */
export default function ProjectIndex() {
  const t = useT();
  const heading = t(workSection.heading);
  const featured = publishedProjects.filter((p) => p.featured);
  const others = publishedProjects.filter((p) => !p.featured);

  return (
    <div className="shell py-section">
      <SectionHeading
        index="01"
        label={t(workSection.label)}
        lead={heading.lead}
        accent={heading.accent}
      />

      <ul className="mt-20 space-y-20 md:space-y-28">
        {featured.map((project, i) => (
          <Reveal as="li" key={project.slug}>
            <FeaturedCard project={project} index={i} />
          </Reveal>
        ))}
      </ul>

      {others.length > 0 && (
        <div className="mt-28 md:mt-36">
          <Reveal className="flex items-center gap-5">
            <span className="type-label text-muted">
              {t(workSection.othersLabel)}
            </span>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </Reveal>

          <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <Reveal as="li" key={project.slug} delay={0.06 * (i % 3)}>
                <ProjectCard project={project} index={featured.length + i} />
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/** Número, context i any: la mateixa línia de metadades a tot el llistat. */
function Meta({ project, index }: { project: Project; index: number }) {
  const t = useT();
  return (
    <span className="type-label text-faint">
      {String(index + 1).padStart(2, "0")} · {t(project.context)} · {project.year}
    </span>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const t = useT();
  // La primera peça de la galeria; si és un vídeo, es reprodueix com un GIF.
  const first = project.images?.[0];

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      {/* Títol a dalt, imatge a sota */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <Meta project={project} index={index} />
          <h3 className="type-feature mt-4 text-ink text-balance transition-colors duration-300 group-hover:text-accent">
            {t(project.title)}
          </h3>
        </div>

        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas md:h-14 md:w-14"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>

      <div className="mt-7 overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 group-hover:border-line-strong">
        {first ? (
          <div className="relative aspect-[16/9]">
            <MediaCanvas media={first} alt={t(project.title)} />
          </div>
        ) : project.diagram ? (
          <SystemDiagram
            diagram={project.diagram}
            large
            className="min-h-[26rem] sm:aspect-[16/9] sm:min-h-0"
          />
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center bg-elevated">
            <span className="type-label text-faint">{t(ui.noPreview)}</span>
          </div>
        )}
      </div>
      <span className="sr-only">{t(ui.viewProject)}</span>
    </Link>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useT();
  // Miniatura animada si la primera peça és un vídeo; si no, la imatge.
  const first = project.images?.[0];

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-500 group-hover:border-line-strong">
        {first ? (
          <Media
            media={first}
            alt={t(project.title)}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center bg-elevated px-4">
            <span className="type-label text-center text-faint">
              {t(ui.noPreview)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-5">
        <Meta project={project} index={index} />
        <h3 className="type-h3 mt-3 text-ink text-balance transition-colors duration-300 group-hover:text-accent">
          {t(project.title)}
        </h3>
      </div>
    </Link>
  );
}
