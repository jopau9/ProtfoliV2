// Tres tipografies i prou. Cadascuna amb una feina clara.
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

/** Cos i titulars. Grotesk neutre, es comporta bé en mides molt grans. */
export const sans = Geist({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

/** Metadades, numeració de secció, tags. Tot el que ha de semblar "dada". */
export const mono = Geist_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  display: "swap",
});

/** Èmfasi editorial. Només per a una o dues paraules per pantalla. */
export const serif = Instrument_Serif({
  variable: "--font-serif-var",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${sans.variable} ${mono.variable} ${serif.variable}`;
