import React from "react";

type FeatureCardProps = {
  image: string;
  size?: number; // 👉 nou prop
};

export default function LanguagesFormat({ image, size = 48 }: FeatureCardProps) {
  return (
    <div
      className="
        p-6 rounded-2xl h-[130px] w-35
        bg-[#222225]
        text-white
        flex items-center justify-center
        transition shadow-md
      "
    >
      {/* Contenidor amb mida dinàmica */}
      <div
        className="flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <img
          src={image}
          alt="language"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
