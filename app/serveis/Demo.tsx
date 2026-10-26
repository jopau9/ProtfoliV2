"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Check, Paperclip, RotateCcw } from "lucide-react";
import { demoUi, type DemoScenario } from "../content/services";
import { useT } from "../i18n/LanguageProvider";

/** Temps entre passos: prou lent per llegir-los, prou ràpid per no avorrir. */
const STEP_MS = 1100;

/**
 * Demo amb guió: el missatge que entra, el que fa la IA pas a pas i el
 * resultat. No crida cap model: és una animació amb dades inventades, que
 * no falla mai davant d'un client i no costa res. Arrenca en entrar a la
 * pantalla; amb menys moviment es mostra sencera de cop.
 */
export default function Demo({ scenarios }: { scenarios: DemoScenario[] }) {
  const t = useT();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const [active, setActive] = useState(0);
  // Canvia per tornar a reproduir el mateix escenari.
  const [run, setRun] = useState(0);
  // Quants passos s'han completat; un més que els passos mostra el resultat.
  const [stage, setStage] = useState(0);

  const scenario = scenarios[active];
  const steps = t(scenario.steps);
  const total = steps.length + 1;
  const shown = reduced ? total : stage;
  const done = shown >= total;

  useEffect(() => {
    if (!inView || reduced) return;
    const timers = Array.from({ length: total }, (_, i) =>
      setTimeout(() => setStage(i + 1), STEP_MS * (i + 1))
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced, active, run, total]);

  const select = (index: number) => {
    setActive(index);
    setStage(0);
  };

  const replay = () => {
    setRun((n) => n + 1);
    setStage(0);
  };

  const rows = scenario.output.rows ? t(scenario.output.rows) : [];

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-line bg-surface"
    >
      {/* Capçalera: avís de dades inventades i escenaris */}
      <div className="flex flex-col gap-4 border-b border-line px-5 py-4 md:flex-row md:items-center md:justify-between md:px-7">
        <p className="type-label flex items-center gap-2.5 text-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t(demoUi.disclaimer)}
        </p>

        {scenarios.length > 1 && (
          <div role="tablist" className="flex flex-wrap gap-1.5">
            {scenarios.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => select(i)}
                className={`type-label shrink-0 rounded-full border px-3.5 py-2 transition-colors duration-300 ${
                  i === active
                    ? "border-ink bg-ink text-canvas"
                    : "border-line text-muted hover:border-line-strong hover:text-ink"
                }`}
              >
                {t(item.tab)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3">
        {/* 1 · El que entra */}
        <Panel label={t(demoUi.input)} index="1">
          <div className="rounded-xl border border-line bg-canvas p-4">
            <p className="type-label text-accent">{t(scenario.input.channel)}</p>
            <p className="mt-3 text-[0.9375rem] font-medium text-ink">
              {t(scenario.input.from)}
            </p>
            {scenario.input.subject && (
              <p className="mt-1 text-[0.875rem] text-muted">
                {t(scenario.input.subject)}
              </p>
            )}
            <p className="type-body mt-3 whitespace-pre-line text-ink/85">
              {t(scenario.input.body)}
            </p>
            {scenario.input.attachment && (
              <p className="type-label mt-4 inline-flex items-center gap-2 rounded-md border border-line px-2.5 py-1.5 text-muted">
                <Paperclip size={12} strokeWidth={1.75} />
                {t(scenario.input.attachment)}
              </p>
            )}
          </div>
        </Panel>

        {/* 2 · El que fa la IA, pas a pas */}
        <Panel label={t(demoUi.process)} index="2">
          <ol className="space-y-3.5" aria-live="polite">
            {steps.map((step, i) => {
              const state = i < shown ? "done" : i === shown ? "active" : "pending";
              return (
                <li
                  key={step}
                  className={`flex gap-3 transition-opacity duration-500 ${
                    state === "pending" ? "opacity-35" : "opacity-100"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                      state === "done"
                        ? "border-accent bg-accent text-canvas"
                        : state === "active"
                          ? "border-accent motion-safe:animate-pulse"
                          : "border-line-strong"
                    }`}
                  >
                    {state === "done" && <Check size={12} strokeWidth={2.5} />}
                  </span>
                  <span className="text-[0.9375rem] leading-snug text-ink">
                    {step}
                  </span>
                </li>
              );
            })}
          </ol>
        </Panel>

        {/* 3 · El resultat */}
        <Panel label={t(demoUi.output)} index="3" last>
          {done ? (
            <div key={`${active}-${run}`} className="motion-safe:animate-demo-in">
              <p className="flex items-center gap-2 text-[0.9375rem] font-medium text-ink">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-canvas">
                  <Check size={12} strokeWidth={2.5} />
                </span>
                {t(scenario.output.title)}
              </p>

              {rows.length > 0 && (
                <dl className="mt-4 divide-y divide-line rounded-xl border border-line bg-canvas">
                  {rows.map((row) => (
                    <div key={row.label} className="flex items-baseline justify-between gap-4 px-4 py-2.5">
                      <dt className="text-[0.8125rem] text-muted">{row.label}</dt>
                      <dd className="text-right text-[0.875rem] font-medium text-ink">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {scenario.output.text && (
                <p className="mt-4 whitespace-pre-line rounded-xl border border-accent/40 bg-accent-dim p-4 text-[0.9375rem] leading-relaxed text-ink">
                  {t(scenario.output.text)}
                </p>
              )}
            </div>
          ) : (
            <div aria-hidden className="space-y-2.5">
              <p className="type-label text-faint">{t(demoUi.waiting)}</p>
              <div className="h-3 w-3/4 rounded bg-elevated motion-safe:animate-pulse" />
              <div className="h-3 w-full rounded bg-elevated motion-safe:animate-pulse" />
              <div className="h-3 w-2/3 rounded bg-elevated motion-safe:animate-pulse" />
            </div>
          )}
        </Panel>
      </div>

      {/* Peu: temps estimat abans i després, i tornar a veure-ho */}
      <div className="flex flex-col gap-4 border-t border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-7">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="type-label text-faint">{t(demoUi.estimate)}</span>
          <span className="text-[0.875rem] text-muted">
            {t(demoUi.before)}: <span className="text-ink line-through decoration-faint">{t(scenario.before)}</span>
          </span>
          <span aria-hidden className="text-faint">→</span>
          <span className="text-[0.875rem] text-muted">
            {t(demoUi.after)}: <span className="font-medium text-accent">{t(scenario.after)}</span>
          </span>
        </div>

        {!reduced && (
          <button
            type="button"
            onClick={replay}
            className="type-label inline-flex items-center gap-2 self-start text-muted transition-colors hover:text-ink sm:self-auto"
          >
            <RotateCcw size={12} strokeWidth={1.75} />
            {t(demoUi.replay)}
          </button>
        )}
      </div>
    </div>
  );
}

function Panel({
  label,
  index,
  last = false,
  children,
}: {
  label: string;
  index: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`p-5 md:p-7 ${
        last ? "" : "border-b border-line lg:border-b-0 lg:border-r"
      }`}
    >
      <p className="type-label mb-5 flex items-center gap-3 text-faint">
        <span className="text-accent">{index}</span>
        {label}
      </p>
      {children}
    </div>
  );
}
