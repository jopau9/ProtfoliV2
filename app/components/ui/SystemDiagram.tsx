"use client";

import type { Project } from "../../content/projects";
import { ui } from "../../content/site";
import { useT } from "../../i18n/LanguageProvider";

type Diagram = NonNullable<Project["diagram"]>;

/**
 * Esquema del sistema per als projectes interns sense captures:
 * fonts → plataforma → ús, sobre una graella de punts.
 */
export default function SystemDiagram({
  diagram,
  large = false,
  className = "",
}: {
  diagram: Diagram;
  /** Escala l'esquema quan ocupa una peça gran (llistat de destacats). */
  large?: boolean;
  className?: string;
}) {
  const t = useT();

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-elevated px-5 py-10 sm:px-10 ${className}`}
    >
      <div aria-hidden className="dot-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(30rem 20rem at 50% 50%, var(--color-glow), transparent 70%)",
        }}
      />

      <div
        className={`relative flex w-full max-w-lg flex-col items-center ${
          large ? "md:scale-110 lg:scale-[1.3]" : ""
        }`}
      >
        <Tier label={t(ui.diagramSources)} items={t(diagram.inputs)} />
        <Connector />

        {/* Nucli: l'única peça amb accent */}
        <div className="w-full rounded-xl border border-accent/50 bg-canvas p-4 shadow-[0_0_0_6px_var(--color-accent-dim)] sm:p-5">
          <p className="type-label text-center text-accent">
            {t(ui.diagramCore)}
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
            {t(diagram.core).map((item) => (
              <li
                key={item}
                className="type-label rounded-md border border-line-strong px-2.5 py-1.5 text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Connector />
        <Tier label={t(ui.diagramOutputs)} items={t(diagram.outputs)} />
      </div>
    </div>
  );
}

function Tier({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col items-center">
      <p className="type-label text-faint">{label}</p>
      <ul className="mt-3 flex flex-wrap justify-center gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="type-label rounded-full border border-line bg-canvas/70 px-2.5 py-1.5 text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden className="relative h-9 w-px bg-line-strong">
      <span className="absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-accent opacity-0 motion-safe:animate-flow" />
    </div>
  );
}
