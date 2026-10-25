"use client";

import { about, identity, type TimelineEntry } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  const t = useT();
  const title = t(about.title);
  const paragraphs = t(about.paragraphs);
  const work = about.timeline.filter((entry) => entry.kind === "work");
  const education = about.timeline.filter((entry) => entry.kind === "education");

  return (
    <div className="shell py-section">
      <SectionHeading
        index="03"
        label={t(about.heading)}
        lead={title.lead}
        accent={title.accent}
      />

      <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-12">
        {/* Columna lateral: retrat i fets clau. Fixa mentre es llegeix el relat. */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/personal_photos/Adobe Express - file.png"
                  alt={identity.fullName}
                  className="aspect-[4/5] w-full object-cover object-top grayscale transition-[filter] duration-700 hover:grayscale-0"
                />
                {/* Degradat inferior perquè el peu de foto es llegeixi sobre la imatge */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                  style={{
                    background:
                      "linear-gradient(to top, var(--color-canvas) 0%, transparent 100%)",
                  }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <span className="type-label text-ink">{identity.fullName}</span>
                  <span className="type-label text-muted">
                    {t(identity.location)}
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-5 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface">
                {about.facts.map((fact, i) => (
                  <div
                    key={fact.value}
                    className={`flex flex-col-reverse justify-end gap-3 p-5 ${
                      i % 2 === 0 ? "border-r border-line" : ""
                    } ${i < 2 ? "border-b border-line" : ""}`}
                  >
                    <dt className="type-label leading-relaxed normal-case tracking-[0.04em] text-faint">
                      {t(fact.label)}
                    </dt>
                    <dd className="text-2xl font-medium leading-none tracking-tight text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.12}>
              <a
                href={identity.cv}
                download
                className="group mt-8 inline-flex items-center gap-3 border-b border-line-strong pb-2 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <span className="type-label">CV · PDF</span>
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </Reveal>
          </div>
        </aside>

        {/* Columna principal: relat i trajectòria */}
        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-6">
            {paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p
                  className={
                    i === 0
                      ? "type-lead measure text-ink"
                      : "type-body measure text-muted"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Timeline label={t(about.experienceLabel)} entries={work} />
          <Timeline label={t(about.educationLabel)} entries={education} />
        </div>
      </div>
    </div>
  );
}

function Timeline({ label, entries }: { label: string; entries: TimelineEntry[] }) {
  const t = useT();

  return (
    <section className="mt-20">
      <Reveal className="flex items-center gap-5">
        <span className="type-label text-accent">{label}</span>
        <span aria-hidden className="h-px flex-1 bg-line" />
        <span className="type-label text-faint">
          {String(entries.length).padStart(2, "0")}
        </span>
      </Reveal>

      <ol className="relative mt-10">
        {/* Riel vertical que uneix els punts */}
        <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-line" />

        {entries.map((entry, i) => (
          <Reveal
            as="li"
            key={`${entry.place}-${i}`}
            delay={0.04 * (i % 3)}
            className="relative pb-12 pl-10 last:pb-0"
          >
            <span
              aria-hidden
              className={`absolute left-0 top-[0.2rem] h-[11px] w-[11px] rounded-full border ${
                entry.current
                  ? "border-accent bg-accent shadow-[0_0_0_4px_var(--color-accent-dim)]"
                  : "border-line-strong bg-canvas"
              }`}
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className={`type-label ${entry.current ? "text-accent" : "text-faint"}`}>
                {t(entry.period)}
              </span>
              {entry.current && (
                <span className="type-label rounded-full bg-accent-dim px-2 py-1 text-accent">
                  {t(about.currentLabel)}
                </span>
              )}
            </div>

            <h3 className="type-h3 mt-4 text-ink text-balance">{t(entry.role)}</h3>
            <p className="type-label mt-2.5 text-muted">{entry.place}</p>
            <p className="type-body measure mt-4 text-muted">{t(entry.text)}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
