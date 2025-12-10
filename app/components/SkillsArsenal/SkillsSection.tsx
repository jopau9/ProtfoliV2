"use client";

import { CircuitBoard } from "@/components/animate-ui/icons/circuit-board";
import { Cog } from "@/components/animate-ui/icons/cog";
import FormatSkill from "./SkillsFormat";
import { MessageCircleMore } from "@/components/animate-ui/icons/message-circle-more";
import { Timer } from "@/components/animate-ui/icons/timer";

export default function SkillsSection() {
  const features = [
    {
      icon: <Cog size={40} animateOnHover />,
      title: "Resolució de Problemes",
      description:
        "M’agrada afrontar reptes, analitzar solucions i gaudir de la satisfacció de resoldre’ls.",
    },
    {
      icon: <CircuitBoard size={40} animateOnHover />,
      title: "Adaptabilitat Tecnològica",
      description:
        "Soc capaç d’aprendre ràpid, explorar noves tecnologies i adaptar-me a nous desafiaments.",
    },
    {
      icon: <MessageCircleMore size={40} animateOnHover />,
      title: "Treball en Equip i lideratge",
      description:
        "Escolta activa, comunicació efectiva i adaptabilitat per afavorir la cooperació.",
    },
    {
      icon: <Timer size={40} animateOnHover />,
      title: "Gestió del Temps",
      description:
        "Gaudeixo planificant i estructurant el treball per gestionar eficientment les tasques i complir terminis.",
    },
  ];

  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px]">
        {features.map((f, i) => (
          <FormatSkill key={i} {...f} />
        ))}
      </div>
  );
}
