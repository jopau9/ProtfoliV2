"use client";

import type { MotionValue } from "framer-motion";
import { press_Start_2P } from "../../fonts";
import { motion, useTransform } from "framer-motion";

type ProjectCardProps = {
  order: number;
  index: number;
  title: string;
  client: string;
  image: string;
  scroll: MotionValue<number>;
  total: number;
};

export default function ProjectCard({
  order,
  index,
  title,
  client,
  image,
  scroll,
  total,
}: ProjectCardProps) {

  const start = order / total;
  const end = (order + 1) / total;

  // offset per apilar-les
  const stackOffset = order * 60;

  // ✔️ Si és la primera, NO ANIMEM
  const y = order === 0
    ? stackOffset // es queda quieta i visible des del principi
    : useTransform(scroll, [start, end], [750 + stackOffset, stackOffset]);

  return (
    <motion.div
      className="
        absolute
        w-[1300px]
        h-[675px]
        bg-[#0e0e11]
        rounded-3xl
        p-6
        shadow-xl
        border border-white/10
      "
      style={{ y }}
    >

      {/* HEADER */}
      <div className={`${press_Start_2P.className} flex gap-5 items-center`}>
        <div className="text-white text-4xl font-bold tracking-wider">
          {index < 10 ? `0${index}` : index}
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-white text-[16px] font-semibold">{title}</div>
          <div className="text-white/60 text-[12px] uppercase">{client}</div>
        </div>

        <button className="px-6 py-3 text-sm border border-white/80 text-white rounded-full hover:bg-white/10 transition ml-auto">
          VEURE PROJECTE
        </button>
      </div>

      {/* IMATGES */}
      <div className="flex gap-3 overflow-hidden h-full mt-6">
        
        <img
          src={image}
          alt={title}
          className="w-[70%] h-[545px] rounded-4xl object-cover"
        />

        <div className="flex flex-col gap-3 w-[30%]">
          <img
            src={image}
            alt={title}
            className="h-[325px] rounded-4xl object-cover"
          />
          <img
            src={image}
            alt={title}
            className="h-[210px] rounded-4xl object-cover"
          />
        </div>

      </div>
    </motion.div>
  );
}
