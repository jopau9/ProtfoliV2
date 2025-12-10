"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  label: string;
  indent?: number;
};

export default function TOC({ items }: { items: TocItem[] }) {
  const [visibleIds, setVisibleIds] = useState<string[]>([]);

  useEffect(() => {
    // Map intern per guardar què està visible en cada moment
    const visibilityMap = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        // Actualitzem el mapa amb els canvis de visibilitat
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.isIntersecting);
        });

        // Recalculem la llista de seccions visibles en l'ordre dels items
        const currentlyVisible: string[] = [];
        items.forEach((item) => {
          if (visibilityMap.get(item.id)) {
            currentlyVisible.push(item.id);
          }
        });

        setVisibleIds(currentlyVisible);
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    // Observem totes les seccions
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  // La secció "activa" serà la primera visible a la llista
  const activeId = visibleIds[0] ?? null;

  return (
    <div className="flex h-full w-[220px] max-w-full flex-col pe-4">
      <div className="h-10" />

      <h3 className="inline-flex items-center gap-2 text-sm text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="size-4"
        >
          <path d="M15 18H3"></path>
          <path d="M17 6H3"></path>
          <path d="M21 12H3"></path>
        </svg>
        On this page
      </h3>

      <div className="relative min-h-0 text-sm overflow-auto py-3">
        {/* LÍNIA VERTICAL CONTÍNUA DEL TOC */}
        <div className="pointer-events-none absolute left-[10px] top-0 bottom-0 w-px bg-black/25" />

        <div className="flex flex-col relative">
          {items.map((t) => {
            const isActive = t.id === activeId;
            const isVisible = visibleIds.includes(t.id);

            // indent bàsic: pots ajustar aquests valors segons t'agradi
            const paddingLeft = t.indent ? 28 + t.indent * 12 : 22;

            return (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`
                  relative py-1.5 transition-colors [overflow-wrap:anywhere]
                  ${
                    isActive
                      ? "text-gray-100"
                      : isVisible
                      ? "text-gray-300"
                      : "text-gray-600 hover:text-gray-200"
                  }
                `}
                style={{
                  paddingInlineStart: paddingLeft,
                }}
              >
                {/* PUNT INDICADOR SOBRE LA LÍNIA: NOMÉS PER A L'APARTAT ACTIU */}
                {isActive && (
                  <div className="absolute left-[6px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full" />
                )}

                {t.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
