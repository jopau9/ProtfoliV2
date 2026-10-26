"use client";

import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { sectorPage, sectors, servicesHero, type Sector } from "../content/services";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import AuditForm from "./AuditForm";
import Demo from "./Demo";
import { SECTOR_ICONS } from "./sectorIcons";

/** Pàgina d'un sector: el problema, la demo, la resta de tasques i el formulari. */
export default function SectorDetail({ sector }: { sector: Sector }) {
  const t = useT();
  const title = t(sector.title);
  const others = sectors.filter((item) => item.id !== sector.id);

  return (
    <>
      {/* Capçalera */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50rem 30rem at 15% 10%, var(--color-glow), transparent 70%)",
          }}
        />
        <div aria-hidden className="blueprint pointer-events-none absolute inset-0 -z-10" />

        <div className="shell">
          <Reveal>
            <Link
              href="/serveis#sectors"
              className="group inline-flex items-center gap-2.5 text-muted transition-colors hover:text-ink"
            >
              <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              <span className="type-label">{t(sectorPage.back)}</span>
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="type-hero mt-14 max-w-[16ch] text-ink text-balance">
              {title.lead} <span className="type-accent text-accent">{title.accent}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="type-lead measure mt-10 text-muted">{t(sector.lead)}</p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#auditoria"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-canvas transition-colors duration-300 hover:bg-accent"
            >
              <span className="type-label">{t(servicesHero.cta.primary)}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#demo"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <span className="type-label">{t(sectorPage.demoLabel)}</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* 01 · Demo */}
      <section id="demo" className="shell scroll-mt-20 pb-section">
        <SectionHeading
          index="01"
          label={t(sectorPage.demoLabel)}
          lead={t(sectorPage.demoHeading).lead}
          accent={t(sectorPage.demoHeading).accent}
        />
        <Reveal className="mt-14">
          <Demo scenarios={sector.demos} />
        </Reveal>

        {sector.note && (
          <Reveal className="mt-4">
            <p className="flex gap-4 rounded-2xl border border-line bg-surface p-5 text-[0.9375rem] leading-relaxed text-muted md:p-6">
              <ShieldCheck size={20} strokeWidth={1.6} className="mt-0.5 shrink-0 text-accent" />
              {t(sector.note)}
            </p>
          </Reveal>
        )}
      </section>

      {/* 02 · Altres tasques */}
      <section className="shell">
        <SectionHeading
          index="02"
          label={t(sectorPage.tasksLabel)}
          lead={t(sectorPage.tasksHeading).lead}
          accent={t(sectorPage.tasksHeading).accent}
        />

        <ul className="mt-14 grid gap-x-10 gap-y-5 md:grid-cols-2">
          {t(sector.tasks).map((task, i) => (
            <Reveal as="li" key={task} delay={0.04 * (i % 2)} className="flex gap-4 border-b border-line pb-5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/50 text-accent">
                <Check size={13} strokeWidth={2.25} />
              </span>
              <span className="type-body text-ink">{task}</span>
            </Reveal>
          ))}
        </ul>

        {/* Altres sectors: per si el visitant ha entrat al que no era */}
        <div className="mt-14 flex flex-wrap gap-3">
          {others.map((other) => {
            const Icon = SECTOR_ICONS[other.id];
            return (
              <Link
                key={other.id}
                href={`/serveis/${other.id}`}
                className="group inline-flex items-center gap-3 rounded-full border border-line px-4 py-2.5 text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <Icon size={15} strokeWidth={1.6} className="text-accent" />
                <span className="type-label">{t(other.name)}</span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 03 · Formulari, amb el sector ja triat */}
      <AuditForm index="03" defaultSector={sector.id} />
    </>
  );
}
