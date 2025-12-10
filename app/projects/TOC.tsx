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
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target.id);

        setVisibleIds((prev) => {
          const merged = Array.from(new Set([...prev, ...visible]));

          // eliminar sections que ja no són visibles
          const stillVisible = merged.filter((id) =>
            entries.some((e) => e.target.id === id && e.isIntersecting)
          );

          return stillVisible;
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // controla quan es considera "visible"
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

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
        <div className="flex flex-col">
          {items.map((t) => {
            const isVisible = visibleIds.includes(t.id);

            return (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`relative py-1.5 transition-colors [overflow-wrap:anywhere]
                  ${isVisible ? "text-white-400" : "text-gray-500 hover:text-gray-300"}
                `}
                style={{
                  paddingInlineStart: t.indent ? 36 : 14,
                }}
              >
                {/* border esquerra */}
                <div
                  className={`absolute inset-y-0 w-px 
                    ${isVisible ? "bg-gray-400" : "bg-white/10"}
                  `}
                  style={{ insetInlineStart: t.indent ? 10 : 0 }}
                />

                {/* punt indicador */}
                {isVisible && (
                  <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full" />
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
