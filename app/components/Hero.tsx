"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { hero, identity, ui } from "../content/site";
import { useT } from "../i18n/LanguageProvider";

export default function Hero() {
  const t = useT();
  const reduced = useReducedMotion();
  const headline = t(hero.headline);

  // Entrada escalonada del bloc principal.
  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.9,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <div className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
      {/* Halo molt tènue darrere del titular: dona profunditat sense semblar un gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 40rem at 15% 20%, rgba(232,161,60,0.07), transparent 65%)",
        }}
      />

      <div className="shell">
        <motion.p
          {...rise(0)}
          className="type-label flex items-center gap-3 text-muted"
        >
          <span className="h-px w-8 bg-accent" />
          {t(hero.eyebrow)}
        </motion.p>

        <motion.h1
          {...rise(0.1)}
          className="type-display mt-8 text-ink text-balance"
        >
          {headline.lead}{" "}
          <span className="type-accent text-accent">{headline.accent}</span>{" "}
          {headline.tail}
        </motion.h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <motion.p
            {...rise(0.2)}
            className="type-lead measure text-muted lg:col-span-6"
          >
            {t(hero.lead)}
          </motion.p>

          <motion.div
            {...rise(0.28)}
            className="flex flex-wrap items-start gap-3 lg:col-span-6 lg:justify-end"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-canvas transition-colors duration-300 hover:bg-accent"
            >
              <span className="type-label">{t(hero.cta.primary)}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={identity.cv}
              download
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <span className="type-label">{t(hero.cta.secondary)}</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </motion.div>
        </div>

      </div>

      {/* Barra inferior: socials a l'esquerra, indicador de scroll a la dreta */}
      <div className="shell mt-24 flex items-end justify-between">
        <motion.div {...rise(0.46)} className="flex items-center gap-5">
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-faint transition-colors hover:text-ink"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-faint transition-colors hover:text-ink"
          >
            <FaLinkedin size={18} />
          </a>
          <span className="type-label hidden text-faint sm:inline">
            {t(identity.location)}
          </span>
        </motion.div>

        <motion.span
          {...rise(0.46)}
          className="type-label flex items-center gap-2 text-faint"
        >
          {t(ui.scroll)}
          <motion.span
            animate={reduced ? {} : { y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.span>
      </div>
    </div>
  );
}
