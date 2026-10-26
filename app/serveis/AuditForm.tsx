"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { auditForm, sectors, type SectorId } from "../content/services";
import { identity } from "../content/site";
import { useLanguage } from "../i18n/LanguageProvider";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[0.9375rem] text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none";

/**
 * Secció i formulari de l'auditoria. Va al final de totes les pàgines de
 * serveis amb l'ancoratge #auditoria, que és on porten tots els botons.
 */
export default function AuditForm({
  index,
  defaultSector = "",
}: {
  index: string;
  defaultSector?: SectorId | "";
}) {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const heading = t(auditForm.heading);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/auditoria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="auditoria" className="shell scroll-mt-20 py-section">
      <SectionHeading
        index={index}
        label={t(auditForm.label)}
        lead={heading.lead}
        accent={heading.accent}
        description={t(auditForm.description)}
      />

      <Reveal delay={0.08} className="mt-14">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-5 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(40rem 20rem at 100% 0%, var(--color-glow), transparent 70%)",
            }}
          />

          {status === "sent" ? (
            <div className="relative flex flex-col items-start gap-5 py-8" role="status">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-canvas">
                <Check size={20} strokeWidth={2.25} />
              </span>
              <h3 className="type-h2 text-ink">{t(auditForm.sentTitle)}</h3>
              <p className="type-body measure text-muted">{t(auditForm.sentText)}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="relative grid gap-5 md:grid-cols-2">
              <Field label={t(auditForm.fields.name)}>
                <input name="name" required autoComplete="name" maxLength={120} className={field} />
              </Field>

              <Field label={t(auditForm.fields.company)}>
                <input name="company" required autoComplete="organization" maxLength={120} className={field} />
              </Field>

              <Field label={t(auditForm.fields.email)}>
                <input name="email" type="email" required autoComplete="email" maxLength={160} className={field} />
              </Field>

              <Field label={t(auditForm.fields.phone)}>
                <input name="phone" type="tel" autoComplete="tel" maxLength={40} className={field} />
              </Field>

              <Field label={t(auditForm.fields.sector)} wide>
                <select name="sector" required defaultValue={defaultSector} className={field}>
                  <option value="" disabled>
                    {t(auditForm.fields.sectorPlaceholder)}
                  </option>
                  {sectors.map((sector) => (
                    <option key={sector.id} value={sector.id}>
                      {t(sector.short)}
                    </option>
                  ))}
                  <option value="altres">{t(auditForm.fields.sectorOther)}</option>
                </select>
              </Field>

              <Field label={t(auditForm.fields.task)} wide>
                <textarea
                  name="task"
                  required
                  rows={4}
                  maxLength={2000}
                  placeholder={t(auditForm.fields.taskPlaceholder)}
                  className={`${field} resize-y`}
                />
              </Field>

              {/* Parany per a robots: les persones no el veuen ni l'omplen */}
              <div aria-hidden className="hidden">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-start gap-3 text-[0.9375rem] text-ink">
                  <input
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
                  />
                  {t(auditForm.fields.consent)}
                </label>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-faint">
                  {t(auditForm.privacy)}
                </p>
              </div>

              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-canvas transition-colors duration-300 hover:bg-accent disabled:opacity-60"
                >
                  <span className="type-label">
                    {status === "sending" ? t(auditForm.sending) : t(auditForm.submit)}
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>

                {status === "error" && (
                  <p role="alert" className="text-[0.875rem] text-muted">
                    {t(auditForm.error)}{" "}
                    <a href={`mailto:${identity.email}`} className="text-accent underline underline-offset-4">
                      {identity.email}
                    </a>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}

function Field({
  label,
  wide = false,
  children,
}: {
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 ${wide ? "md:col-span-2" : ""}`}>
      <span className="type-label text-faint">{label}</span>
      {children}
    </label>
  );
}
