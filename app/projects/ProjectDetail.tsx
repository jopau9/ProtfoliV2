"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  nextProjectOf,
  publishedProjects,
  type Project,
  type ProjectSection,
} from "../content/projects";
import { ui } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "../components/ui/Reveal";
import SystemDiagram from "../components/ui/SystemDiagram";
import { useResumePosition } from "../components/ui/videoPosition";
import Accordion from "./Accordion";
import Gallery from "./Gallery";
import Markdown from "./Markdown";

/** Cada tipus de secció té el seu tractament visual. */
function variantOf(section: ProjectSection) {
  if (section.id === "tech-stack") return "grid" as const;
  if (section.id === "aprenentatges") return "lead" as const;
  return "default" as const;
}

/**
 * A l'stack, el text en negreta fa de títol de rajola: el ":" ja no cal i
 * la descripció passa a començar en majúscula.
 */
function prepare(section: ProjectSection, content: string) {
  if (section.id !== "tech-stack") return content;
  return content.replace(/\*\*: (\p{L})/gu, (_, first: string) => `** ${first.toUpperCase()}`);
}

export default function ProjectDetail({ project }: { project: Project }) {
  const t = useT();
  const next = nextProjectOf(project);
  const position = publishedProjects.findIndex((p) => p.slug === project.slug) + 1;
  const pad = (n: number) => String(n).padStart(2, "0");

  // Si el vídeo ja s'estava veient a la portada, continua des d'allà (sense so).
  const videoRef = useRef<HTMLVideoElement>(null);
  useResumePosition(videoRef, project.video?.src ?? null, { autoplay: true });

  // Fitxa tècnica de la capçalera
  const specs: { label: string; value: React.ReactNode }[] = [
    { label: t(ui.specYear), value: project.year },
    { label: t(ui.specContext), value: t(project.context) },
    { label: t(ui.stack), value: project.tags.slice(0, 3).join(" · ") },
  ];
  if (project.links?.length) {
    specs.push({
      label: t(ui.specLinks),
      value: (
        <span className="flex flex-col items-end gap-1">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
            >
              {link.label}
              <span aria-hidden className="text-faint transition-colors group-hover:text-accent">
                ↗
              </span>
            </a>
          ))}
        </span>
      ),
    });
  }

  return (
    <article className="shell pt-28 pb-24 md:pt-36">
      {/* Fons de la capçalera: halo i retícula, a tota amplada (el layout és `relative`) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[56rem]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50rem 30rem at 15% 10%, var(--color-glow), transparent 70%)",
          }}
        />
        <div className="blueprint absolute inset-0" />
      </div>

      {/* Tornar · posició dins del llistat */}
      <Reveal className="flex items-center justify-between gap-6">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2.5 text-muted transition-colors hover:text-ink"
        >
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            ←
          </span>
          <span className="type-label">{t(ui.backToWork)}</span>
        </Link>
        <span className="type-label text-faint">
          {t(ui.projectLabel)} <span className="text-accent">{pad(position)}</span> / {pad(publishedProjects.length)}
        </span>
      </Reveal>

      {/* Capçalera */}
      <header className="mt-16 md:mt-20">
        <Reveal>
          <h1 className="max-w-[18ch] text-[clamp(2.75rem,7.5vw,7rem)] font-medium leading-[0.95] tracking-[-0.045em] text-ink text-balance">
            {t(project.title)}
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-12">
          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="type-lead measure text-muted">{t(project.subtitle)}</p>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <dl>
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3 first:pt-0"
                >
                  <dt className="type-label shrink-0 text-faint">{spec.label}</dt>
                  <dd className="text-right text-[0.9375rem] text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      {/* Vídeo de presentació, amb so i controls */}
      {project.video && (
        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-line bg-black shadow-[0_40px_100px_-50px_rgba(0,0,0,0.6)]">
            <video
              ref={videoRef}
              src={project.video.src}
              poster={project.video.poster}
              controls
              playsInline
              preload="metadata"
              aria-label={`${t(ui.promoVideo)} · ${t(project.title)}`}
              className="aspect-video w-full"
            />
          </div>
        </Reveal>
      )}

      {/* Galeria: una peça gran i dues de suport sobre un llenç comú.
          Els projectes interns no en tenen i mostren l'esquema del sistema. */}
      <Reveal delay={0.1}>
        {project.images ? (
          <Gallery
            items={project.images}
            title={t(project.title)}
            className={project.video ? "mt-3" : "mt-16"}
          />
        ) : project.diagram ? (
          <div className="mt-16 overflow-hidden rounded-2xl border border-line">
            <SystemDiagram diagram={project.diagram} className="min-h-[28rem]" />
            <p className="type-label border-t border-line bg-surface px-5 py-3 text-faint">
              {t(ui.noPreview)}
            </p>
          </div>
        ) : (
          <div className="mt-16 flex items-center justify-center rounded-2xl border border-line bg-surface px-6 py-20">
            <span className="type-label text-center text-faint">{t(ui.noPreview)}</span>
          </div>
        )}
      </Reveal>

      {/* Xifres clau */}
      {project.highlights && (
        <dl className="mt-3 grid gap-3 sm:grid-cols-3">
          {project.highlights.map((highlight, i) => (
            <Reveal key={highlight.value} delay={0.06 * i}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 md:p-8">
                <span aria-hidden className="absolute inset-x-6 top-0 h-px bg-accent/70 md:inset-x-8" />
                <dd className="text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.04em] text-ink">
                  {highlight.value}
                </dd>
                <dt className="mt-4 text-[0.875rem] leading-snug text-muted">
                  {t(highlight.label)}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      )}

      {/* Descripció + síntesi */}
      <div className="mt-24 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <p className="text-[clamp(1.25rem,1.9vw,1.625rem)] leading-[1.5] tracking-[-0.015em] text-ink">
            {t(project.description)}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-7">
            <p className="type-label flex items-center gap-2.5 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t(ui.demonstrates)}
            </p>
            <p className="type-body mt-4 text-ink">{t(project.demonstrates)}</p>
          </div>
        </Reveal>
      </div>

      {/* Seccions: títol fix a l'esquerra mentre es llegeix el contingut a la dreta */}
      <div className="mt-28 space-y-20 md:mt-36 md:space-y-28">
        {project.sections.map((section, i) => {
          const isResult = section.id === "resultats";

          return (
            <section
              key={section.id}
              id={section.id}
              className="grid scroll-mt-28 gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-4">
                <Reveal className="lg:sticky lg:top-28">
                  <span className="type-label text-accent">{pad(i + 1)}</span>
                  <h2 className="type-h2 mt-4 text-ink text-balance">{t(section.title)}</h2>
                </Reveal>
              </div>

              <Reveal delay={0.06} className="lg:col-span-8">
                {section.accordion && (
                  <Accordion
                    items={section.accordion.map((item) => ({
                      title: t(item.title),
                      content: t(item.content),
                    }))}
                  />
                )}

                {section.content &&
                  (isResult ? (
                    // L'estat actual tanca la fitxa: va en un bloc destacat.
                    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 md:p-9">
                      <span aria-hidden className="absolute inset-y-6 left-0 w-px bg-accent md:inset-y-9" />
                      <Markdown>{t(section.content)}</Markdown>
                    </div>
                  ) : (
                    <Markdown variant={variantOf(section)}>
                      {prepare(section, t(section.content))}
                    </Markdown>
                  ))}
              </Reveal>
            </section>
          );
        })}
      </div>

      {/* Següent projecte: la fitxa no acaba en sec */}
      <Reveal>
        <Link
          href={`/projects/${next.slug}`}
          className="group relative mt-32 block overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors duration-500 hover:border-line-strong md:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(40rem 20rem at 85% 50%, var(--color-glow), transparent 70%)",
            }}
          />
          <span className="type-label relative text-faint">{t(ui.nextProject)}</span>
          <div className="relative mt-6 flex items-end justify-between gap-8">
            <span className="type-h1 text-ink text-balance transition-colors duration-300 group-hover:text-accent">
              {t(next.title)}
            </span>
            <span
              aria-hidden
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas md:h-16 md:w-16"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </Link>
      </Reveal>
    </article>
  );
}
