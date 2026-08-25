"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };

/** Índex lateral que segueix la secció en lectura. */
export default function TOC({
  items,
  heading,
}: {
  items: TocItem[];
  heading: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(
    items[0]?.id ?? null
  );

  useEffect(() => {
    const visibility = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting);
        });

        // La secció activa és la primera visible en ordre de document.
        const first = items.find((item) => visibility.get(item.id));
        if (first) setActiveId(first.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={heading}>
      <p className="type-label text-faint">{heading}</p>

      <ul className="relative mt-5">
        {/* Riel vertical continu */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-px bg-line"
        />

        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id} className="relative">
              {/* Segment del riel il·luminat per a la secció activa */}
              <span
                aria-hidden
                className={`absolute inset-y-1 left-0 w-px transition-colors duration-300 ${
                  isActive ? "bg-accent" : "bg-transparent"
                }`}
              />
              <a
                href={`#${item.id}`}
                className={`type-body block py-2 pl-5 text-sm transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-faint hover:text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
