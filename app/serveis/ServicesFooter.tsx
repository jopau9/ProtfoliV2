"use client";

import Link from "next/link";
import { servicesFooter } from "../content/services";
import { identity } from "../content/site";
import { useT } from "../i18n/LanguageProvider";

/** Peu discret de serveis: el formulari ja fa de tancament. */
export default function ServicesFooter() {
  const t = useT();

  return (
    <footer className="shell pb-12">
      <div className="flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="type-label flex items-center gap-2.5 text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {identity.fullName}
          </p>
          <p className="mt-3 text-[0.875rem] text-faint">{t(servicesFooter.tagline)}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${identity.email}`}
            className="type-label link-underline text-muted transition-colors hover:text-ink"
          >
            {identity.email}
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="type-label link-underline text-muted transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <Link href="/" className="type-label link-underline text-muted transition-colors hover:text-ink">
            {t(servicesFooter.portfolio)}
          </Link>
        </div>
      </div>
    </footer>
  );
}
