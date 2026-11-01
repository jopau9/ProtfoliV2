import type { Metadata } from "next";
import ServicesFooter from "./ServicesFooter";

export const metadata: Metadata = {
  title: "IA i automatització per a empreses",
  description:
    "Arquitecte de solucions d'IA: assistents que coneixen la vostra empresa, agents que treballen dins dels vostres programes, atenció al client les 24 hores i automatització de processos. En línia a tota Espanya i presencial a Girona i Barcelona. Diagnòstic gratuït.",
  openGraph: {
    title: "IA i automatització per a empreses · Joan Pau Rahola",
    description:
      "Us asseguro que el vostre negoci està demanant intel·ligència artificial. En línia a tota Espanya i presencial a Girona i Barcelona. Diagnòstic gratuït.",
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
