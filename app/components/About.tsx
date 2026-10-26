"use client";

import { about, identity } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Portrait from "./Portrait";
import Timeline from "./Timeline";
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
              <Portrait />
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
