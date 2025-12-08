"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollCarousel() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Moviment horitzontal (0 -> 300px a la dreta)
  const x = useTransform(scrollYProgress, [0, 1], [-350, 50]);

  return (
    <div ref={ref} className="relative pt-[8vh] pb-[7vh] w-full flex justify-center items-center overflow-x-hidden">
      {/* Contenidor del carrussel */}
      <motion.div
        style={{ x }}
        className="flex gap-15"
      >
        <img src="/MySQL_logo.png" className="w-[260px] rounded-xl filter grayscale brightness-100 contrast-100 object-contain" />
        <img src="/React_icon.png" className="w-[300px] rounded-xl filter grayscale brightness-100 contrast-100 object-contain" />
        <img src="/C's_logos.png" className="w-[160px] rounded-xl filter grayscale brightness-100 contrast-50 object-contain" />
        <img src="/tailwind_logo.png" className="w-[400px] filter grayscale brightness-100 contrast-0 object-contain" />
        <img src="/java_logo.png" className="w-[190px] rounded-xl filter grayscale brightness-100 contrast-0 object-contain" />
        <img src="/unity_logo.png" className="w-[260px] rounded-xl filter grayscale brightness-100 contrast-0 object-contain" />
        <img src="/springboot_logo.png" className="w-[260px] rounded-xl filter grayscale brightness-100 contrast-0 object-contain" />

      </motion.div>
    </div>
  );
}
