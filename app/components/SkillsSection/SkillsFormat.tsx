import { press_Start_2P, dm_serif_text } from "@/app/fonts";
import React from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function SkillsFormat({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        p-6 rounded-2xl h-[240px] w-72 
        bg-[#222225]
        text-white
        flex flex-col gap-3
        transition
        hover:bg-[#222225]
        shadow-md
        relative
        
      "
    >

      {/* CONTINGUT */}
      <div>{React.cloneElement(icon as any, { size: 32 })}</div>

      <h3 className={`text-[15px] font-semibold ${press_Start_2P.className}`}>
        {title}
      </h3>

      <p className={`text-[16px] text-white/70 leading-snug ${dm_serif_text.className}`}>
        {description}
      </p>
    </div>
  );
}
