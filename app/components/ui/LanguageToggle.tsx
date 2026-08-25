"use client";

import { LOCALES, useLanguage } from "../../i18n/LanguageProvider";

/** Selector CA / EN. Dos estats, cap desplegable. */
export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`type-label rounded-full px-2.5 py-1.5 transition-colors duration-300 ${
              active
                ? "bg-ink text-canvas"
                : "text-faint hover:text-muted"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
