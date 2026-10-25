"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { Media as MediaItem } from "../content/projects";
import { ui } from "../content/site";
import { useT } from "../i18n/LanguageProvider";
import Media from "../components/ui/Media";
import MediaCanvas from "../components/ui/MediaCanvas";

/**
 * Galeria de la fitxa: una peça gran i dues de suport, totes sobre el mateix
 * llenç. Les escenes omplen el llenç; les captures es mostren senceres i
 * enmarcades. En clicar, s'obre a pantalla completa.
 */
export default function Gallery({
  items,
  title,
  className = "mt-14",
}: {
  items: MediaItem[];
  title: string;
  className?: string;
}) {
  const t = useT();
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <>
      <div data-gallery className={`grid gap-3 sm:grid-cols-2 ${className}`}>
        {items.map((media, i) => (
          <button
            key={`${media.src}-${i}`}
            ref={(el) => {
              triggers.current[i] = el;
            }}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`${t(ui.galleryOpen)} · ${title} ${i + 1}/${items.length}`}
            className={`group relative block overflow-hidden rounded-2xl border border-line bg-surface text-left transition-colors duration-500 hover:border-line-strong ${
              i === 0 ? "aspect-[16/9] sm:col-span-2" : "aspect-[16/10]"
            }`}
          >
            <MediaCanvas media={media} alt={`${title} ${i + 1}`} eager={i === 0} />

            <span
              aria-hidden
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-canvas/80 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <Maximize2 size={14} strokeWidth={1.75} />
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        items={items}
        title={title}
        index={open}
        onChange={setOpen}
        onClose={() => {
          const last = open;
          setOpen(null);
          if (last !== null) triggers.current[last]?.focus();
        }}
      />
    </>
  );
}

function Lightbox({
  items,
  title,
  index,
  onChange,
  onClose,
}: {
  items: MediaItem[];
  title: string;
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const t = useT();
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onChange]
  );

  // Teclat, bloqueig del scroll i focus inicial mentre és obert.
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, onClose, step]);

  const buttonClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-colors duration-300 hover:border-accent hover:text-accent";

  // El portal surt de <main> (que té el seu propi context d'apilament)
  // perquè la vista ampliada quedi per sobre de la capçalera fixa.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-canvas/95 px-4 py-20 backdrop-blur-md sm:px-20"
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full max-w-6xl items-center justify-center"
          >
            <Media
              media={items[index]}
              alt={`${title} ${index + 1}`}
              eager
              className={`max-h-[80vh] max-w-full object-contain ring-1 ring-line-strong ${
                items[index].frame === "phone" ? "rounded-[12%/5.8%]" : "rounded-xl"
              }`}
            />
          </motion.div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t(ui.galleryClose)}
            className={`${buttonClass} absolute right-4 top-4 sm:right-6 sm:top-6`}
          >
            <X size={16} strokeWidth={1.75} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                aria-label={t(ui.galleryPrev)}
                className={`${buttonClass} absolute bottom-6 left-4 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2`}
              >
                <ChevronLeft size={18} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                aria-label={t(ui.galleryNext)}
                className={`${buttonClass} absolute bottom-6 right-4 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2`}
              >
                <ChevronRight size={18} strokeWidth={1.75} />
              </button>
            </>
          )}

          <span className="type-label absolute bottom-9 left-1/2 -translate-x-1/2 text-muted">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function noopSubscribe() {
  return () => {};
}
