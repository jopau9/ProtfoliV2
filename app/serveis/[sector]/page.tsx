import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSector, sectors } from "../../content/services";
import SectorDetail from "../SectorDetail";

type Params = { params: Promise<{ sector: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((sector) => ({ sector: sector.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { sector: id } = await params;
  const sector = getSector(id);
  if (!sector) return { title: "404" };
  const title = `${sector.title.ca.lead} ${sector.title.ca.accent}`;

  return {
    title,
    description: sector.lead.ca,
    openGraph: { title, description: sector.lead.ca },
  };
}

export default async function SectorPage({ params }: Params) {
  const { sector: id } = await params;
  const sector = getSector(id);

  if (!sector) notFound();

  return <SectorDetail sector={sector} />;
}
