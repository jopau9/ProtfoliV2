"use client";

import { dm_serif_text } from "../../fonts";

export default function AboutMeText1() {
  return (
    <div className={`${dm_serif_text.className} pl-30`}>
      <p className="text-gray-300 max-w-[450px] text-[20px] text-justify">
        Estudiant de quart curs d'Enginyeria Informàtica amb una gran passió pel desenvolupament de software. 
        Gaudeixo ideant solucions, escrivint codi i veient com els projectes prenen forma i funcionen tal com 
        els he dissenyat.
      </p>
    </div>
  );
}
