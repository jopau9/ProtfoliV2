"use client";

import SkillsTitle from "./SkillsTitle";
import SkillsSection from "./SkillsSection";
import LanguagesSection from "./LanguagesSection";

export default function SkillsArsenal() {

  return (
    <section className="w-full flex flex-col items-center">
      <div className="mb-25">
        <SkillsTitle />
      </div>

      <div>
        <SkillsSection />
      </div>
      
      <div className="mt-20">
        <LanguagesSection />
      </div>
    </section>
  );
}
