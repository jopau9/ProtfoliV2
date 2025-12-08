"use client";

import { freehand } from "../fonts";

export default function QuoteBlock() {
  return (
    <div className="w-full flex justify-center px-6">
      <div className={`text-center ${freehand.className}`}>
        <p className="text-[32px] leading-relaxed italic text-gray-300">
          “Programs must be written for people to read, and only incidentally for machines to execute.”
        </p>

        <p className="text-[22px] font-light text-gray-300">
          — Harold Abelson, MIT
        </p>

        {/* Línia decorativa */}
        <div className="mt-3 w-24 mx-auto h-[2px] bg-white rounded-full"></div>
      </div>
    </div>
  );
}
