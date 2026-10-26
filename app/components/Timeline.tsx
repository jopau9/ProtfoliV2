"use client";

import { about, type TimelineEntry } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "./ui/Reveal";

/** Trajectòria (experiència o formació). La fan servir el portfoli i la pàgina de serveis. */
export default function Timeline({
  label,
  entries,
  className = "mt-20",
}: {
  label: string;
  entries: TimelineEntry[];
  className?: string;
}) {
  const t = useT();

  return (
    <section className={className}>
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
