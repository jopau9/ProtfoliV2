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
    { image: "/icons/firebase.png", size: 60},
    { image: "/icons/wordpress.png", size: 100},

  ];

  return (
    <section className="w-full flex flex-col items-center ">
      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-4 
          lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
          gap-6 
          max-w-[1400px]
          justify-center 
          justify-items-center
        "
      >
        {features.map((f, i) => (
          <LanguagesFormat key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
