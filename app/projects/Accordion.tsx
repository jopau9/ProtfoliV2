"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccordionList({ items }: { items: any[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-black/10 backdrop-blur-sm">
      {items.map((item, i) => {
        const isOpen = open === i;

        return (
          <div key={i} className="border-b border-white/10 last:border-none">
            {/* HEADER */}
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="
                w-full flex items-center justify-between
                px-5 py-4
                text-left
                hover:bg-white/5 transition-colors
              "
            >
              <span className="text-white font-medium">{item.title}</span>

              {/* ICONA AMB ROTACIÓ SUAU */}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-white/60"
              >
                ▼
              </motion.span>
            </button>

            {/* CONTENT */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: {
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                        opacity: { duration: 0.3 }
                      }
                    },
                    collapsed: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.25, ease: [0.55, 0.09, 0.68, 0.53] },
                        opacity: { duration: 0.2 }
                      }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="
                      px-5 py-4
                      text-white/70 leading-relaxed
                      bg-white/5
                    "
                    initial={{ y: -4 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.content}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
