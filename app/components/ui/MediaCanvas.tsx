"use client";

import type { Media as MediaItem } from "../../content/projects";
import Media from "./Media";

/**
 * Llenç comú per a captures i escenes. Ha d'anar dins d'un contenidor
 * `relative` amb proporció fixa. Les escenes (`fit: "cover"`) l'omplen;
 * la resta es mostra sencera, enmarcada sobre la graella de punts.
 * Funciona dins d'un `group` per a l'efecte en passar-hi.
 */
export default function MediaCanvas({
  media,
  alt,
  eager = false,
}: {
  media: MediaItem;
  alt: string;
  eager?: boolean;
}) {
  if (media.fit === "cover") {
    return (
      <Media
        media={media}
        alt={alt}
        eager={eager}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
      />
    );
  }

  // Les cantonades del telèfon són proporcionals a la mida de la captura.
  const radius = media.frame === "phone" ? "rounded-[12%/5.8%]" : "rounded-lg";

  return (
    <>
      <div aria-hidden className="dot-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, var(--color-glow), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-[6%]">
        <Media
          media={media}
          alt={alt}
          eager={eager}
          className={`max-h-full max-w-full ${radius} shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] ring-1 ring-line-strong transition-transform duration-700 ease-out group-hover:scale-[1.015]`}
        />
      </div>
    </>
  );
}
