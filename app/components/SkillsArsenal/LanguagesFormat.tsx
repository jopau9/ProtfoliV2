import React from "react";

type FeatureCardProps = {
  image: string; // ara rep una imatge!
};

export default function LanguagesFormat({ image }: FeatureCardProps) {
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
      <img
        src={image}
        alt="language"
        className="w-10 h-10 object-contain"
      />
    </div>
  );
}
