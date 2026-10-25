"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { hero, identity, ui } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import LocalTime from "./ui/LocalTime";
import NeuralNetwork from "./ui/NeuralNetwork";

export default function Hero() {
  const t = useT();
  const reduced = useReducedMotion();
  const headline = t(hero.headline);

  // Entrada escalonada del bloc principal. L'estat inicial és el mateix amb
  // o sense menys moviment, perquè coincideixi amb l'HTML del servidor.
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: reduced
      ? { duration: 0 }
      : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-12">
      {/* Fons: halo ambre i retícula de plànol que s'esvaeix des del titular */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 40rem at 15% 20%, var(--color-glow), transparent 65%)",
        }}
      />
      <div aria-hidden className="blueprint pointer-events-none absolute inset-0 -z-10" />

      {/* Xarxa neuronal a la meitat dreta, esvaint-se cap al text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[50%] lg:block"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 70% at 64% 52%, #000 45%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 64% 52%, #000 45%, transparent 88%)",
        }}
      >
        <NeuralNetwork className="h-full w-full" />
      </div>

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
          className="type-hero mt-8 max-w-[16ch] text-ink text-balance"
        >
          {headline.lead}{" "}
          <span className="type-accent text-accent">{headline.accent}</span>{" "}
          {headline.tail}
        </motion.h1>

        {/* Text i botons a l'esquerra: la meitat dreta queda per a la xarxa */}
        <div className="mt-12 lg:max-w-[50%]">
          <motion.p {...rise(0.2)} className="type-lead measure text-muted">
            {t(hero.lead)}
          </motion.p>

          <motion.div {...rise(0.28)} className="mt-10">
            <div className="flex flex-wrap items-start gap-3">
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Barra inferior: socials i lectura de posició a l'esquerra, scroll a la dreta */}
      <div className="shell mt-24 flex items-end justify-between gap-6">
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
          <span className="type-label hidden items-center gap-3 text-faint sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
            {t(identity.location)}
            <span className="hidden text-line-strong md:inline">/</span>
            <span className="hidden md:inline">{identity.coordinates}</span>
            <span className="text-line-strong">/</span>
            <LocalTime />
          </span>
        </motion.div>

        <motion.span
          {...rise(0.46)}
          className="type-label flex items-center gap-2 text-faint"
        >
          {t(ui.scroll)}
          <motion.span
            animate={{ y: reduced ? 0 : [0, 5, 0] }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            ↓
          </motion.span>
        </motion.span>
      </div>
    </div>
  );
}
