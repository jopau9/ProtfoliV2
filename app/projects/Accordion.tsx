"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Markdown from "./Markdown";

export type AccordionItem = {
  title: string;
  /** Markdown: respecta paràgrafs, negretes i cursives. */
  content: string;
};

/** Targetes plegables. La primera ve oberta; només una oberta alhora. */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;

        return (
          <div
            key={item.title}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? "border-line-strong bg-surface" : "border-line hover:border-line-strong"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-5 px-5 py-5 text-left md:px-7 md:py-6"
            >
              <span
                className={`type-label w-6 shrink-0 transition-colors duration-300 ${
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

              {/* El "+" gira fins a fer una "×" quan la targeta és oberta */}
              <span
                aria-hidden
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-accent bg-accent text-canvas"
                    : "border-line-strong text-muted group-hover:text-ink"
                }`}
              >
                <Plus size={15} strokeWidth={1.75} />
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
                  <div className="px-5 pb-7 md:pl-[4.75rem] md:pr-16">
                    <Markdown>{item.content}</Markdown>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
