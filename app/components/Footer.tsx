"use client";

import { contact, identity, ui } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Reveal from "./ui/Reveal";

export default function Footer() {
  const t = useT();
  const heading = t(contact.heading);
  const year = 2026; // fix: evita mismatch d'hidratació amb new Date()

  return (
    <footer className="shell pt-section pb-12">
      <div className="border-t border-line pt-6">
        <Reveal className="flex items-baseline gap-4">
          <span className="type-label text-accent">04</span>
          <span className="type-label text-faint">{t(ui.contactLabel)}</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="type-display mt-10 text-ink text-balance">
            {heading.lead}{" "}
            <span className="type-accent text-accent">{heading.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="type-body measure text-muted">{t(contact.lead)}</p>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-7 lg:justify-self-end">
            <ul className="space-y-1">
              {[
                { label: "Email", href: `mailto:${identity.email}`, value: identity.email },
                { label: "GitHub", href: identity.github, value: "github.com/jopau9" },
                { label: "LinkedIn", href: identity.linkedin, value: "Joan Pau Rahola Ferrer" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-baseline gap-6 border-b border-line py-4 transition-colors hover:border-line-strong"
                  >
                    <span className="type-label w-20 shrink-0 text-faint">
                      {link.label}
                    </span>
                    <span className="type-h3 text-ink transition-colors group-hover:text-accent">
                      {link.value}
                    </span>
                    <span
                      aria-hidden
                      className="ml-auto text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="type-label text-faint">
            © {year} {identity.fullName}
          </span>
          <span className="type-label text-faint">{t(ui.rights)}</span>
        </div>
      </div>
    </footer>
  );
}
