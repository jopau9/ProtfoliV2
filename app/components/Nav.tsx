"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { servicesCta, servicesNav } from "../content/services";
import { identity, nav } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import LanguageToggle from "./ui/LanguageToggle";
import ThemeToggle from "./ui/ThemeToggle";

export default function Nav() {
  const t = useT();
  // Dins de /serveis, el menú és el comercial i hi ha el botó de l'auditoria.
  // Totes les pàgines de serveis tenen el formulari a #auditoria.
  const inServices = usePathname().startsWith("/serveis");
  const links = inServices ? servicesNav : nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Progrés de lectura: una línia ambre sota la capçalera (només transformació).
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueja el scroll del document mentre el menú mòbil és obert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-line bg-canvas/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <motion.span
          aria-hidden
          style={{ scaleX: scrollYProgress }}
          className={`absolute inset-x-0 -bottom-px h-px origin-left bg-accent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
          <Link
            href={inServices ? "/serveis" : "/"}
            className="group flex items-center gap-2.5"
            aria-label={identity.name}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150" />
            <span className="type-label whitespace-nowrap text-ink">{identity.name}</span>
          </Link>

          {/* Cinc enllaços no hi caben en tauleta: fins a lg, menú desplegable */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="type-label link-underline text-muted transition-colors hover:text-ink"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:flex" />
            <LanguageToggle />

            {inServices && (
              <a
                href="#auditoria"
                className="type-label hidden rounded-full bg-ink px-4 py-2.5 text-canvas transition-colors duration-300 hover:bg-accent lg:inline-flex"
              >
                {t(servicesCta.short)}
              </a>
            )}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink lg:hidden"
              aria-expanded={open}
              aria-label="Menu"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-2.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-xl lg:hidden"
          >
            <div className="shell flex h-full flex-col justify-center gap-2">
              {links.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  className="type-h2 border-b border-line py-5 text-ink"
                >
                  {t(item.label)}
                </motion.a>
              ))}
              {inServices && (
                <a
                  href="#auditoria"
                  onClick={() => setOpen(false)}
                  className="type-label mt-8 inline-flex justify-center rounded-full bg-ink px-6 py-4 text-canvas"
                >
                  {t(servicesCta.short)}
                </a>
              )}
              <ThemeToggle className="mt-8 flex sm:hidden" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
