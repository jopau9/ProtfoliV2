"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type AccordionItem = {
  title: string;
  content: string;
};

/** Llista plegable. El primer element ve obert; només un obert alhora. */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;

        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start gap-5 py-6 text-left"
            >
              <span
                className={`type-label mt-1.5 transition-colors duration-300 ${
                  isOpen ? "text-accent" : "text-faint"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span
                className={`type-h3 flex-1 text-balance transition-colors duration-300 ${
                  isOpen ? "text-ink" : "text-muted group-hover:text-ink"
                }`}
              >
                {item.title}
              </span>

              {/* Creu que gira a menys en obrir-se */}
              <span
                aria-hidden
                className="relative mt-2 block h-3 w-3 shrink-0"
              >
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current text-muted" />
                <span
                  className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current text-muted transition-transform duration-300 ${
                    isOpen ? "scale-y-0" : "scale-y-100"
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="type-body measure pb-8 pl-11 text-muted">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
