"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  aboutSection,
  faqSection,
  processSection,
  sectors,
  sectorsSection,
  servicesHero,
} from "../content/services";
import { about, identity } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Portrait from "../components/Portrait";
import Timeline from "../components/Timeline";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../projects/Accordion";
import AuditForm from "./AuditForm";
import { SECTOR_ICONS } from "./sectorIcons";

/**
 * Portada de serveis. Ordre pensat per a algú que no busca un enginyer:
 * què hi guanya, els sectors, com es treballa, qui hi ha darrere, dubtes
 * i, al final, el formulari.
 */
export default function ServicesHome() {
  const t = useT();
  const reduced = useReducedMotion();
  const headline = t(servicesHero.headline);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: reduced
      ? { duration: 0 }
      : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <>
      {/* Capçalera */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 40rem at 15% 20%, var(--color-glow), transparent 65%)",
          }}
        />
        <div aria-hidden className="blueprint pointer-events-none absolute inset-0 -z-10" />

        <div className="shell">
          <motion.p {...rise(0)} className="type-label flex items-center gap-3 text-muted">
            <span className="h-px w-8 bg-accent" />
            {t(servicesHero.eyebrow)}
          </motion.p>

          <motion.h1 {...rise(0.1)} className="type-hero mt-8 max-w-[15ch] text-ink text-balance">
            {headline.lead}{" "}
            <span className="type-accent text-accent">{headline.accent}</span>{" "}
            {headline.tail}
          </motion.h1>

          <motion.p {...rise(0.2)} className="type-lead measure mt-10 border-l border-accent pl-6 text-ink">
            {t(servicesHero.promise)}
          </motion.p>

          <motion.div {...rise(0.28)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#auditoria"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-canvas transition-colors duration-300 hover:bg-accent"
            >
              <span className="type-label">{t(servicesHero.cta.primary)}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#sectors"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <span className="type-label">{t(servicesHero.cta.secondary)}</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </motion.div>

          <motion.ul {...rise(0.36)} className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {t(servicesHero.facts).map((fact) => (
              <li key={fact} className="type-label flex items-center gap-2 text-faint">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {fact}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 01 · Sectors */}
      <section id="sectors" className="shell scroll-mt-20 pb-section">
        <SectionHeading
          index="01"
          label={t(sectorsSection.label)}
          lead={t(sectorsSection.heading).lead}
          accent={t(sectorsSection.heading).accent}
          description={t(sectorsSection.description)}
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {sectors.map((sector, i) => {
            const Icon = SECTOR_ICONS[sector.id];
            return (
              <Reveal as="li" key={sector.id} delay={0.06 * i}>
                <Link
                  href={`/serveis/${sector.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-line-strong md:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-canvas text-accent transition-colors duration-500 group-hover:border-accent/50">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <h3 className="type-h3 mt-6 text-ink text-balance transition-colors duration-300 group-hover:text-accent">
                    {t(sector.name)}
                  </h3>
                  <p className="type-body mt-4 text-muted">{t(sector.pitch)}</p>
                  <span className="type-label mt-auto flex items-center gap-2 pt-8 text-ink">
                    {t(sectorsSection.cardCta)}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* 02 · Com funciona */}
      <section id="com-funciona" className="shell scroll-mt-20 pb-section">
        <SectionHeading
          index="02"
          label={t(processSection.label)}
          lead={t(processSection.heading).lead}
          accent={t(processSection.heading).accent}
        />

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSection.steps.map((step, i) => (
            <Reveal as="li" key={step.title.ca} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-line p-6 md:p-7">
                <span className="text-outline select-none text-[3.5rem] font-medium leading-[0.8] tracking-[-0.06em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="type-h3 mt-6 text-ink">{t(step.title)}</h3>
                <p className="type-body mt-3 text-muted">{t(step.text)}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 03 · Qui soc */}
      <section id="qui-soc" className="shell scroll-mt-20 pb-section">
        <SectionHeading
          index="03"
          label={t(aboutSection.label)}
          lead={t(aboutSection.heading).lead}
          accent={t(aboutSection.heading).accent}
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Retrat i presentació, fixos mentre es llegeix la trajectòria */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Portrait />
              </Reveal>
              <Reveal delay={0.08}>
                <p className="type-body mt-6 text-ink">{t(aboutSection.text)}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href="/"
                    className="type-label link-underline text-muted transition-colors hover:text-ink"
                  >
                    {t(aboutSection.portfolio)} →
                  </Link>
                  <a
                    href={identity.cv}
                    download
                    className="type-label link-underline text-muted transition-colors hover:text-ink"
                  >
                    CV · PDF ↓
                  </a>
                </div>
              </Reveal>
            </div>
          </aside>

          {/* El mateix currículum que al portfoli */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Timeline
              label={t(about.experienceLabel)}
              entries={about.timeline.filter((entry) => entry.kind === "work")}
              className=""
            />
            <Timeline
              label={t(about.educationLabel)}
              entries={about.timeline.filter((entry) => entry.kind === "education")}
            />
          </div>
        </div>
      </section>

      {/* 04 · Preguntes */}
      <section id="preguntes" className="shell scroll-mt-20">
        <SectionHeading
          index="04"
          label={t(faqSection.label)}
          lead={t(faqSection.heading).lead}
          accent={t(faqSection.heading).accent}
        />

        <Reveal className="mt-14">
          <Accordion
            items={faqSection.items.map((item) => ({ title: t(item.q), content: t(item.a) }))}
          />
        </Reveal>
      </section>

      {/* 05 · Formulari */}
      <AuditForm index="05" />
    </>
  );
}
