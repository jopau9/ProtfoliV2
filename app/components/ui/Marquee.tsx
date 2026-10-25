"use client";

import { marquee } from "../../content/site";
import { useT } from "../../i18n/LanguageProvider";

/**
 * Franja de paraules clau que es desplaça sense fi. Alterna text ple i
 * serif itàlica de contorn. Decorativa: s'amaga als lectors de pantalla.
 */
export default function Marquee() {
  const t = useT();
  const items = t(marquee);

  // Dues còpies idèntiques: en desplaçar la meitat, el bucle no té costures.
  const row = (copy: number) => (
    <ul className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <li key={`${copy}-${item}`} className="flex items-center">
          <span className={i % 2 === 1 ? "type-accent text-outline" : "text-ink"}>
            {item}
          </span>
          <span className="mx-[0.5em] text-[0.32em] text-accent">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div aria-hidden className="fade-x overflow-hidden border-y border-line py-8 md:py-12">
      <div className="flex w-max whitespace-nowrap text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-none tracking-[-0.04em] motion-safe:animate-marquee">
        {row(0)}
        {row(1)}
      </div>
    </div>
  );
}
