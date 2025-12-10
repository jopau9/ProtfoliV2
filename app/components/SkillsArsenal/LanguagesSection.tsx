"use client";

import LanguagesFormat from "./LanguagesFormat";

export default function LanguagesSection() {
  const features = [
    { image: "/icons/python.png" },
    { image: "/icons/javascript.png" },
    { image: "/icons/cpp.png" },
    { image: "/icons/java.png" },
    { image: "/icons/react.png" },
    { image: "/icons/next.png" },
    { image: "/icons/linux.png" },
    { image: "/icons/git.png" },
    { image: "/icons/git.png" },
    { image: "/icons/git.png" },
    { image: "/icons/git.png" },
    { image: "/icons/git.png" },
    { image: "/icons/git.png" },
    { image: "/icons/git.png" },
    { image: "/icons/git.png" },
    { image: "/icons/git.png" },
    // Pots afegir més si vols
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 
          gap-6 
          max-w-[1400px]
        "
      >
        {features.map((f, i) => (
          <LanguagesFormat key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
