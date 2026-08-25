"use client";

import { domains, domainsSection } from "../content/domains";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

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
        {domains.map((domain, i) => (
          <Reveal as="li" key={domain.id} delay={0.04 * (i % 3)}>
            <article className="group grid gap-6 border-t border-line py-12 lg:grid-cols-12 lg:gap-10">
              {/* Columna esquerra: número i títol */}
              <div className="lg:col-span-5">
                <div className="flex items-start gap-4">
                  <span className="type-label mt-1.5 text-faint transition-colors duration-500 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-h2 measure-tight text-ink text-balance">
                    {t(domain.title)}
                  </h3>
                </div>
              </div>

              {/* Columna dreta: resum, punts concrets i stack discret */}
              <div className="lg:col-span-7">
                <p className="type-body measure text-muted">
                  {t(domain.summary)}
                </p>

                <ul className="mt-7 space-y-2.5">
                  {t(domain.points).map((point) => (
                    <li
                      key={point}
                      className="type-body flex gap-3 text-ink/75"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong"
                      />
                      <span className="measure">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* L'stack va al peu, deliberadament secundari */}
                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                  {domain.stack.map((tool, j) => (
                    <span key={tool} className="type-label flex items-center gap-3 text-faint">
                      {j > 0 && (
                        <span aria-hidden className="h-2.5 w-px bg-line" />
                      )}
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
