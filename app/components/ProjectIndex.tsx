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
 * La jerarquia la fa la mida, no el text: els destacats van de dos en dos,
 * amb el títol a sobre d'una peça gran; la resta, una graella petita.
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

      {/* Cada targeta és una subgraella de dues files (títol i peça): així les
          peces comencen i acaben a la mateixa alçada encara que un títol ocupi
          més línies que l'altre. */}
      <ul className="mt-20 grid gap-y-16 md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
        {featured.map((project, i) => (
          <Reveal
            as="li"
            key={project.slug}
            delay={0.06 * (i % 2)}
            className="md:row-span-2 md:grid md:grid-rows-subgrid md:gap-y-7"
          >
            <FeaturedCard project={project} index={i} />
          </Reveal>
        ))}
      </ul>

      {others.length > 0 && (
        <div className="mt-20 md:mt-24">
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
    <Link
      href={`/projects/${project.slug}`}
      className="group block md:row-span-2 md:grid md:grid-rows-subgrid"
    >
      {/* Títol a dalt, arran de la peça encara que l'altre títol sigui més alt */}
      <div className="flex items-end justify-between gap-6 md:self-end">
        <div>
          <Meta project={project} index={index} />
          <h3 className="type-h2 mt-4 text-ink text-balance transition-colors duration-300 group-hover:text-accent">
            {t(project.title)}
          </h3>
        </div>

        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </span>
        <span className="sr-only">{t(ui.viewProject)}</span>
      </div>

      {/* Al mòbil, proporció fixa; en dues columnes, la fila iguala l'alçada de les dues peces. */}
      <div className="mt-7 overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 group-hover:border-line-strong md:mt-0">
        {project.video ? (
          // El vídeo de presentació omple la peça, sense so; la fitxa el continua.
          <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[22rem]">
            <Media
              media={project.video}
              alt={`${t(ui.promoVideo)} · ${t(project.title)}`}
              resume
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ) : first ? (
          <div className="relative aspect-[16/10] md:aspect-auto md:h-full md:min-h-[22rem]">
            <MediaCanvas media={first} alt={t(project.title)} />
          </div>
        ) : project.diagram ? (
          <SystemDiagram
            diagram={project.diagram}
            className="min-h-[22rem] md:h-full"
          />
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center bg-elevated md:aspect-auto md:h-full md:min-h-[22rem]">
            <span className="type-label text-faint">{t(ui.noPreview)}</span>
          </div>
        )}
      </div>
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
