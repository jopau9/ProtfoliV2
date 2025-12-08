"use client";

import { useState, useEffect, useRef } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function TypingText({
  text,
  speed = 50,
  className = "",
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  // Detecta quan l’element entra al viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect(); // Només activar una vegada
        }
      },
      { threshold: 0.2 } // 20% visible ja comença
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Escriptura quan ja s’ha activat
  useEffect(() => {
    if (!start) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed]);

  return (
    <p ref={ref} className={className}>
      {displayedText}
    </p>
  );
}

{/* USE EXAMPLE:
   <TypingText
        text="Estudiant de quart curs d'Enginyeria Informàtica amb una gran passió pel desenvolupament de software. Gaudeixo ideant solucions, 
        escrivint codi i veient com els projectes prenen forma i funcionen tal com els he dissenyat."
        speed={5}
        className="text-gray-300 max-w-[450px] text-[20px] text-justify"
      />*/}
