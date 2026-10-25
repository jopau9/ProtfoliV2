"use client";

import { useEffect, useRef } from "react";
import type { Media as MediaItem } from "../../content/projects";

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
}: {
  media: MediaItem;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const isVideo = media.src.endsWith(".mp4");

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
