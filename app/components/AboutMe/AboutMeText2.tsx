"use client";

import { roboto, dm_serif_text } from "../../fonts";

export default function AboutMeText2() {
  return (
    <div className={`${dm_serif_text.className} pl-20`}>
      <p className="text-gray-300 max-w-[380px] text-[20px] text-justify">
        Per mi, el procés de desenvolupament no és només programar, sinó entendre el problema, 
        trobar la millor manera de resoldre’l i implementar-ho de manera clara i eficient.
      </p>
    </div>
  );
}
