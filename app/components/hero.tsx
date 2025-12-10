"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { robotoBlack, robotoflex, modak, press_Start_2P } from "../fonts";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen text-gray-300 flex flex-col items-center justify-center"
    >

      {/* ─── HEADER INTEGRAT ─── */}
      <div
        className={`
          absolute top-0 left-0 w-full 
          flex justify-between items-center
          py-6 px-12
          ${press_Start_2P.className}
        `}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo JoanPau"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Botons */}
        <nav className="flex items-center gap-10 text-[18px]">
          
          <a href="#sobre-mi" className="cursor-pointer hover:opacity-80 transition">
            Sobre mi
          </a>
          <a href="#skills-exp" className="cursor-pointer hover:opacity-80 transition">
            Skills & Exp
          </a>
          <a href="#projectes" className="cursor-pointer hover:opacity-80 transition">
            Projectes
          </a>
        </nav>
      </div>

      {/* ─── CONTINGUT PRINCIPAL ─── */}
      <h2 className={`${robotoflex.className} text-[20px] sm:-translate-x-[220px]`}>
        SOC EN
      </h2>

      <h1
        className={`${press_Start_2P.className} text-[130px] font-bold leading-normal`}
        style={{ textShadow: "0 4px 10px rgba(0, 0, 0, 0.4)" }}
      >
        JOANPAU
      </h1>

      <h2
        className={`${robotoflex.className} text-[20px] max-w-[230px] sm:translate-x-[270px]`}
      >
        UN DESENVOLUPADOR DE SOFTWARE JUNIOR
      </h2>

      {/* ─── ICONES SOCIALS ─── */}
      <div className="absolute bottom-15 left-15 flex flex-col space-y-4 text-gray-300">
        <a href="https://github.com" target="_blank" className="hover:text-white">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-white">
          <FaLinkedin size={28} />
        </a>
        <a href="https://instagram.com" target="_blank" className="hover:text-white">
          <FaInstagram size={28} />
        </a>
      </div>
    </div>
  );
}
