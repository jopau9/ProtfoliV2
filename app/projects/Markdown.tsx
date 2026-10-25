"use client";

import ReactMarkdown from "react-markdown";

/**
 * Renderitzat de Markdown amb els estils del sistema.
 * No fem servir cap plugin de tipografia: cada element es defineix aquí,
 * així el text llarg respecta els mateixos tokens que la resta del lloc.
 *
 * Variants:
 * - `default`: prosa normal.
 * - `lead`: paràgrafs grans, per a reflexions i conclusions.
 * - `grid`: les llistes es converteixen en una graella de rajoles; el text
 *   en negreta de cada element fa de títol de la rajola.
 */
export default function Markdown({
  children,
  variant = "default",
}: {
  children: string;
  variant?: "default" | "lead" | "grid";
}) {
  const grid = variant === "grid";

  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p
            className={
              variant === "lead"
                ? "type-lead measure mb-6 text-ink/90 last:mb-0"
                : "type-body measure mb-5 text-muted last:mb-0"
            }
          >
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className={grid ? "mb-1.5 block font-medium text-ink" : "font-medium text-ink"}>
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="type-accent text-ink">{children}</em>
        ),
        ul: ({ children }) => (
          <ul className={grid ? "grid gap-3 sm:grid-cols-2" : "mb-6 space-y-2.5"}>
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-6 list-decimal space-y-2.5 pl-5">{children}</ol>
        ),
        li: ({ children }) =>
          grid ? (
            <li className="type-body rounded-xl border border-line bg-surface p-5 text-muted transition-colors duration-300 hover:border-line-strong">
              {children}
            </li>
          ) : (
            <li className="type-body measure flex gap-3 text-muted">
              <span
                aria-hidden
                className="mt-[0.7em] h-px w-3 shrink-0 bg-accent/60"
              />
              <span>{children}</span>
            </li>
          ),
        code: ({ children }) => (
          <code className="rounded bg-elevated px-1.5 py-0.5 font-mono text-[0.85em] text-accent">
            {children}
          </code>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
          >
            {children}
          </a>
        ),
        h3: ({ children }) => (
          <h3 className="type-h3 mt-10 mb-4 text-ink">{children}</h3>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
