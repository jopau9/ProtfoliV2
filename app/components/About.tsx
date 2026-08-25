"use client";

import { about, identity } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "./ui/Reveal";

export default function About() {
  const t = useT();

  return (
    <div className="shell py-section">
      <div className="grid gap-14 border-t border-line pt-6 lg:grid-cols-12 lg:gap-16">
        {/* Retrat */}
        <Reveal className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/personal_photos/Adobe Express - file.png"
              alt={identity.fullName}
              className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
            />
            {/* Degradat inferior perquè la foto es fongui amb el fons */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background:
                  "linear-gradient(to top, #08080a 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="type-label text-faint">{identity.fullName}</span>
            <span className="type-label text-faint">
              {t(identity.location)}
            </span>
          </div>
        </Reveal>

        {/* Text */}
        <div className="lg:col-span-7">
          <Reveal className="flex items-baseline gap-4">
            <span className="type-label text-accent">03</span>
            <span className="type-label text-faint">{t(about.heading)}</span>
          </Reveal>

          <div className="mt-10 space-y-6">
            {t(about.paragraphs).map((paragraph, i) => (
              <Reveal key={i} delay={0.06 * i}>
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

          <Reveal delay={0.2}>
            <a
              href={identity.cv}
              download
              className="group mt-12 inline-flex items-center gap-3 border-b border-line-strong pb-2 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <span className="type-label">CV · PDF</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
