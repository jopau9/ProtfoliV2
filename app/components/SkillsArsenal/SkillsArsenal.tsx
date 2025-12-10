"use client";

import { CircuitBoard } from "@/components/animate-ui/icons/circuit-board";
import { Cog } from "@/components/animate-ui/icons/cog";
import FormatSkill from "./SkillsFormat";
import SkillsTitle from "./SkillsTitle";
import { MessageCircleMore } from "@/components/animate-ui/icons/message-circle-more";
import { Timer } from "@/components/animate-ui/icons/timer";
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
