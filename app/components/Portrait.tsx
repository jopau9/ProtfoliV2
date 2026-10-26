"use client";

import { identity } from "../content/site";
import { useT } from "../i18n/LanguageProvider";

/** Retrat amb nom i lloc al peu. El fan servir el portfoli i la pàgina de serveis. */
export default function Portrait() {
  const t = useT();

  return (
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
        <span className="type-label text-muted">{t(identity.location)}</span>
      </figcaption>
    </figure>
  );
}
