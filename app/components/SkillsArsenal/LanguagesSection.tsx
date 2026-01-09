"use client";

import LanguagesFormat from "./LanguagesFormat";

export default function LanguagesSection() {
  const features = [
    { image: "/icons/c.png", size: 55 },
    { image: "/icons/c++.png", size: 55 },
    { image: "/icons/csharp.png", size: 170 },
    { image: "/icons/c.png", size: 55 },
    { image: "/icons/java.png", size: 70 },
    { image: "/icons/python.png", size: 50 },
    { image: "/icons/react.png", size: 80 },
    { image: "/icons/tailwind.png", size: 60 },
    { image: "/icons/git.png", size: 40 },
    { image: "/icons/mysql.png", size: 140 },
    { image: "/icons/unity.avif", size: 130 },
    { image: "/icons/spring-boot.png", size: 52 },
    { image: "/icons/html.webp", size: 52 },
    { image: "/icons/javascript.webp", size: 65 },
    { image: "/icons/firebase.png", size: 60 },
    { image: "/icons/wordpress.png", size: 100 },
    { image: "/icons/postgresql.webp", size: 70 },
    { image: "/icons/supabase.png", size: 80 },
    { image: "/icons/capacitor.png", size: 70 },
  ];

  return (
    <section className="w-full flex justify-center">
      {/* container centrat */}
      <div className="w-full max-w-[1400px] px-4">
        {/* ✅ files centrades automàticament */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((f, i) => (
            <div key={i} className="w-[150px] flex justify-center">
              <LanguagesFormat {...f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
