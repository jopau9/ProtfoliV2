"use client";

import Image from "next/image";
import { press_Start_2P } from "../fonts";

export default function Header() {
  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full 
        py-6 px-12 
        flex justify-between items-center 
        bg-transparent text-white
        ${press_Start_2P.className}
      `}
    >
      {/* LOGO */}
      <div className="flex items-center">
        <Image
          src="/favicon.png"
          alt="Logo JoanPau"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* BOTONS A LA DRETA */}
      <nav className="flex items-center gap-10 text-[18px]">
        <a href="#projectes" className="cursor-pointer hover:opacity-80 transition">
          Projectes
        </a>

        <a href="#sobre-mi" className="cursor-pointer hover:opacity-80 transition">
          Sobre mi
        </a>
      </nav>



    </header>
  );
  
}
