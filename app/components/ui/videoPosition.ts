"use client";

import { useEffect, type RefObject } from "react";

/**
 * Punt on s'ha quedat cada vídeo, per `src`. Viu al mòdul, que sobreviu a la
 * navegació interna de Next: la portada i la fitxa del projecte comparteixen
 * així el mateix vídeo com si fos un de sol.
 */
const positions = new Map<string, number>();

/**
 * Continua el vídeo per on s'havia deixat en una altra pàgina i, en sortir,
 * en desa el punt. Amb `autoplay`, si continua, ho fa sense so (és l'única
 * reproducció automàtica que permeten els navegadors). `src` null ho desactiva.
 */
export function useResumePosition(
  ref: RefObject<HTMLVideoElement | null>,
  src: string | null,
  { autoplay = false }: { autoplay?: boolean } = {}
) {
  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;

    const saved = positions.get(src);
    const resume = () => {
      video.currentTime = saved ?? 0;
      if (autoplay) {
        video.muted = true;
        video.play().catch(() => {});
      }
    };

    if (saved) {
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) resume();
      else video.addEventListener("loadedmetadata", resume, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", resume);
      // Sense metadades la posició encara no és real: es manté la desada.
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        positions.set(src, video.currentTime);
      }
    };
  }, [ref, src, autoplay]);
}
