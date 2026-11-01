"use client";

import { useEffect, useRef } from "react";
import type { Media as MediaItem } from "../../content/projects";
import { useResumePosition } from "./videoPosition";

/**
 * Imatge o vídeo de galeria. Els vídeos substitueixen els GIF i es comporten
 * com ells: sense so, en bucle i sempre en marxa, però només mentre són
 * visibles, perquè els que queden fora de pantalla no gastin recursos.
 */
export default function Media({
  media,
  alt,
  className = "",
  eager = false,
  resume = false,
  sizes = "100vw",
}: {
  media: MediaItem;
  alt: string;
  className?: string;
  eager?: boolean;
  /** Comparteix la posició amb el mateix vídeo en altres pàgines. */
  resume?: boolean;
  /** Amplada amb què es mostra, per triar la còpia de `widths` adequada. */
  sizes?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const isVideo = media.src.endsWith(".mp4");
  useResumePosition(ref, resume && isVideo ? media.src : null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Els navegadors només deixen reproduir sols els vídeos sense so.
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (!isVideo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={media.src}
        srcSet={srcSetOf(media)}
        sizes={media.widths ? sizes : undefined}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={className}
      />
    );
  }

  return (
    <video
      ref={ref}
      src={media.src}
      poster={media.poster}
      aria-label={alt}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

/** La còpia més gran és el mateix `src`; la resta porten l'amplada al nom. */
function srcSetOf(media: MediaItem) {
  if (!media.widths) return undefined;
  const largest = Math.max(...media.widths);
  const dot = media.src.lastIndexOf(".");
  return media.widths
    .map((w) => {
      const src = w === largest ? media.src : `${media.src.slice(0, dot)}-${w}${media.src.slice(dot)}`;
      return `${src} ${w}w`;
    })
    .join(", ");
}
