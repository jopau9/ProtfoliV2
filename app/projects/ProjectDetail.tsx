"use client";

import Link from "next/link";
import type { Project } from "../content/projects";
import { ui } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "../components/ui/Reveal";
import Accordion from "./Accordion";
import Markdown from "./Markdown";
import TOC from "./TOC";

export default function ProjectDetail({ project }: { project: Project }) {
  const t = useT();

  const tocItems = project.sections.map((section) => ({
    id: section.id,
    label: t(section.title),
  }));

  return (
    <article className="shell pt-28 pb-24 md:pt-36">
      {/* Tornar */}
      <Reveal>
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
      </Reveal>

      {/* Capçalera */}
      <header className="mt-12 border-t border-line pt-8">
        <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="type-label text-accent">{project.year}</span>
          <span aria-hidden className="h-2.5 w-px bg-line" />
          <span className="type-label text-faint">{t(project.context)}</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="type-h1 mt-8 text-ink text-balance">
            {t(project.title)}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="type-lead measure mt-6 text-muted">
            <span className="type-accent text-accent">
              {t(project.subtitle)}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="type-label rounded-full border border-line px-3 py-2 text-faint"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </header>

      {/* Galeria: una imatge gran i dues de suport.
          Els projectes interns no en tenen i mostren un avís sobri. */}
      <Reveal delay={0.1}>
        {project.images ? (
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-line md:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images[0]}
                alt={t(project.title)}
                className="h-full max-h-[32rem] w-full object-cover"
              />
            </div>
            <div className="grid gap-3">
              {project.images.slice(1).map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="overflow-hidden rounded-xl border border-line"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full max-h-[15.5rem] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-14 flex items-center justify-center rounded-xl border border-line bg-surface px-6 py-20">
            <span className="type-label text-center text-faint">
              {t(ui.noPreview)}
            </span>
          </div>
        )}
      </Reveal>

      {/* Descripció + què demostra */}
      <div className="mt-16 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="type-lead measure text-ink">{t(project.description)}</p>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
          <div className="border-l border-accent pl-6">
            <p className="type-label text-faint">{t(ui.demonstrates)}</p>
            <p className="type-body mt-3 text-ink">
              {t(project.demonstrates)}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Contingut + índex lateral */}
      <div className="mt-24 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          {project.sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-t border-line pt-8 [&:not(:first-child)]:mt-20"
            >
              <div className="flex items-baseline gap-4">
                <span className="type-label text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="type-h2 text-ink text-balance">
                  {t(section.title)}
                </h2>
              </div>

              <div className="mt-8">
                {section.accordion && (
                  <Accordion
                    items={section.accordion.map((item) => ({
                      title: t(item.title),
                      content: t(item.content),
                    }))}
                  />
                )}

                {section.content && <Markdown>{t(section.content)}</Markdown>}
              </div>
            </section>
          ))}
        </div>

        <aside className="hidden lg:col-span-3 lg:col-start-10 lg:block">
          <div className="sticky top-28">
            <TOC items={tocItems} heading={t(ui.onThisPage)} />
          </div>
        </aside>
      </div>
    </article>
  );
}
