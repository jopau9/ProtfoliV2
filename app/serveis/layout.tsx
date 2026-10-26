import type { Metadata } from "next";
import ServicesFooter from "./ServicesFooter";

export const metadata: Metadata = {
  title: "IA per a empreses a Girona",
  description:
    "Automatització de tasques repetitives amb IA per a gestories, immobiliàries i clíniques de les comarques de Girona. Auditoria gratuïta.",
  openGraph: {
    title: "IA per a empreses a Girona · Joan Pau Rahola",
    description:
      "Automatització de tasques repetitives amb IA per a gestories, immobiliàries i clíniques. Auditoria gratuïta.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // La capçalera ja canvia sola a /serveis (Nav); aquí només hi ha el peu propi.
  return (
    <div className="relative">
      {children}
      <ServicesFooter />
    </div>
  );
}
