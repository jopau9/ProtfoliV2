"use client";

import type { MotionValue } from "framer-motion";
import { press_Start_2P } from "../fonts";
import { motion, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectCardProps = {
  order: number;
  index: number;
  title: string;
  client: string;
  image1: string;
  image2: string;
  image3: string;
  scroll: MotionValue<number>;
  total: number;
  slug: string;
};

export default function ProjectCard({
  order,
  index,
  title,
  client,
  image1,
  image2,
  image3,
  scroll,
  total,
  slug,
}: ProjectCardProps) {

  const start = order / total;
  const end = (order + 1) / total;

  const stackOffset = order * 80;

  const spawnOffset = stackOffset + 1400;

  // 🔥 Primer targeta → NO animació, ja col·locada
  if (order === 0) {
    return (
      <motion.div
        className="
          absolute
          w-[1300px]
          h-[675px]
          bg-[#1c1c1d]
          rounded-3xl
          p-6
          shadow-xl
          border border-white/10
        "
        style={{ y: stackOffset, opacity: 1 }}
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

          <Link href={`/projects/${slug}`} className="ml-auto">
            <button className="px-6 py-3 text-sm border border-white/80 text-white rounded-full hover:bg-white/10 transition">
              VEURE PROJECTE
            </button>
          </Link>
        </div>

        {/* IMATGES */}
        <div className="flex gap-3 overflow-hidden h-full mt-6">
          <img
            src={image1}
            alt={title}
            className="w-[70%] h-[545px] rounded-4xl object-cover"
          />

          <div className="flex flex-col gap-3 w-[30%]">
            <img
              src={image2}
              alt={title}
              className="h-[325px] rounded-4xl object-cover"
            />

            <img
              src={image3}
              alt={title}
              className="h-[210px] rounded-4xl object-cover"
            />
          </div>
        </div>
      </motion.div>
    );
  }

  // 🔥 Targetes 1, 2, 3… → spawn + pujada
  const t = useTransform(scroll, [start, start + 0.0001], [0, 1], {
    clamp: false,
  });

  const y = useTransform(
    scroll,
    [start, start + 0.12],
    [spawnOffset, stackOffset],
    { clamp: true }
  );

  const opacity = useTransform(t, (v) => (v < 1 ? 0 : 1));

  return (
    <motion.div
      className="
        absolute
        w-[1300px]
        h-[675px]
        bg-[#1c1c1d]
        rounded-3xl
        p-6
        shadow-xl
        border border-white/10
      "
      style={{ y, opacity }}
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

        <Link href={`/projects/${slug}`} className="ml-auto">
          <button className="px-6 py-3 text-sm border border-white/80 text-white rounded-full hover:bg-white/10 transition">
            VEURE PROJECTE
          </button>
        </Link>
      </div>

      {/* IMATGES */}
      <div className="flex gap-3 overflow-hidden h-full mt-6">
        <img
          src={image1}
          alt={title}
          className="w-[70%] h-[545px] rounded-4xl object-cover"
        />

        <div className="flex flex-col gap-3 w-[30%]">
          <img
            src={image2}
            alt={title}
            className="h-[325px] rounded-4xl object-cover"
          />
          <img
            src={image3}
            alt={title}
            className="h-[210px] rounded-4xl object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
