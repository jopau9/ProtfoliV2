"use client";

import TypingText from "../TypingText";
import { roboto } from "../../fonts";

export default function AboutMeText() {
  return (
    <div className={`${roboto.className} pl-30`}>
      <TypingText
        text="Estudiant de quart curs d'Enginyeria Informàtica amb una gran passió pel desenvolupament de software. Gaudeixo ideant solucions, 
        escrivint codi i veient com els projectes prenen forma i funcionen tal com els he dissenyat. Per mi, el procés de desenvolupament no és només programar, 
        sinó entendre el problema, trobar la millor manera de resoldre’l i implementar-ho de manera clara i eficient."
        speed={5}
        className="text-gray-300 text-left max-w-[800px] text-[25px]"
      />
      
    </div>
  );
}
