"use client";

import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Número de secció, p. ex. "01". */
  index: string;
  label: string;
  /** El titular es parteix en dos: la part neutra i la paraula en serif itàlica. */
  lead: string;
  accent: string;
  description?: string;
};

export default function SectionHeading({
  index,
  label,
  lead,
  accent,
  description,
}: SectionHeadingProps) {
  return (
    <header className="border-t border-line pt-6">
      <Reveal className="flex items-baseline gap-4 text-faint">
        <span className="type-label text-accent">{index}</span>
        <span className="type-label">{label}</span>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal delay={0.05} className="lg:col-span-7">
          <h2 className="type-h1 text-ink text-balance">
            {lead}{" "}
            <span className="type-accent text-accent">{accent}</span>
          </h2>
        </Reveal>

        {description && (
          <Reveal delay={0.12} className="lg:col-span-5 lg:pt-2">
            <p className="type-body measure text-muted">{description}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
