import { robotoBlack, robotoflex, modak, press_Start_2P } from "../layout";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Hero() {
  return (
    <div className="relative min-h-screen 
      flex flex-col justify-center items-center 
    text-gray-300
    "
      >
      <h2 className={`${robotoflex.className} text-[20px]  sm:-translate-x-[220px]`}>
        SOC EN
      </h2>

      <h1 className={`${press_Start_2P.className} text-[130px] font-bold leading-normal`}
        style={{
          textShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
        }}
      >
        JOANPAU
      </h1>

      <h2 className={`${robotoflex.className} text-[20px] max-w-[230px] sm:translate-x-[270px]`}>
        UN DESENVOLUPADOR DE SOFTWARE JUNIOR
      </h2>

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
