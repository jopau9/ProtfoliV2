"use client";

import ReactMarkdown from "react-markdown";

/**
 * Renderitzat de Markdown amb els estils del sistema.
 * No fem servir cap plugin de tipografia: cada element es defineix aquí,
 * així el text llarg respecta els mateixos tokens que la resta del lloc.
 */
export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p className="type-body measure mb-5 text-muted">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-medium text-ink">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="type-accent text-ink">{children}</em>
        ),
        ul: ({ children }) => (
          <ul className="mb-6 space-y-2.5">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-6 list-decimal space-y-2.5 pl-5">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="type-body measure flex gap-3 text-muted">
            <span
              aria-hidden
              className="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong"
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
            className="link-underline text-ink"
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
