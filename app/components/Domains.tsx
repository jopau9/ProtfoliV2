"use client";

import {
  BrainCircuit,
  Database,
  Layers,
  RefreshCcw,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { domains, domainsSection } from "../content/domains";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

// Una icona per àmbit, per `id`. Les dades no importen components.
const ICONS: Record<string, LucideIcon> = {
  "applied-ai": BrainCircuit,
  product: Layers,
  data: Database,
  automation: Workflow,
  legacy: RefreshCcw,
};

export default function Domains() {
  const t = useT();
  const heading = t(domainsSection.heading);

  return (
    <div className="shell py-section">
      <SectionHeading
        index="02"
        label={t(domainsSection.label)}
        lead={heading.lead}
        accent={heading.accent}
        description={t(domainsSection.lead)}
      />

      <ul className="mt-20">
        {domains.map((domain, i) => {
          const Icon = ICONS[domain.id] ?? Layers;
          const number = String(i + 1).padStart(2, "0");

          return (
            <Reveal as="li" key={domain.id} delay={0.04 * (i % 3)}>
              <article className="group relative grid gap-6 border-t border-line py-12 lg:grid-cols-12 lg:gap-10">
                {/* Línia ambre que es dibuixa sobre la vora en passar-hi */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
                />

                {/* Columna esquerra: icona, títol i numeral gran de contorn */}
                <div className="flex flex-col lg:col-span-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-accent transition-colors duration-500 group-hover:border-accent/50">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <h3 className="type-h2 measure-tight text-ink text-balance">
                      {t(domain.title)}
                    </h3>
                  </div>

                  <span
                    aria-hidden
                    className="text-outline text-outline-hover mt-auto hidden select-none pt-12 text-[clamp(5rem,9vw,8.5rem)] font-medium leading-[0.8] tracking-[-0.06em] lg:block"
                  >
                    {number}
                  </span>
                </div>

                {/* Columna dreta: resum, casos per lloc i stack */}
                <div className="lg:col-span-7">
                  <p className="type-body measure text-muted">
                    {t(domain.summary)}
                  </p>

                  <div className="mt-8 space-y-7">
                    {domain.cases.map(({ place, points }) => (
                      <div key={place}>
                        <p className="type-label text-accent">{place}</p>
                        <ul className="mt-3 space-y-2.5">
                          {t(points).map((point) => (
                            <li
                              key={point}
                              className="type-body flex gap-3 text-ink/80"
                            >
                              <span
                                aria-hidden
                                className="mt-[0.7em] h-px w-3 shrink-0 bg-accent/60"
                              />
                              <span className="measure">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {domain.stack.map((tool) => (
                      <span
                        key={tool}
                        className="type-label rounded-full border border-line px-2.5 py-1.5 text-faint"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
