import { Building2, Calculator, Stethoscope, type LucideIcon } from "lucide-react";
import type { SectorId } from "../content/services";

// Una icona per sector. Les dades no importen components.
export const SECTOR_ICONS: Record<SectorId, LucideIcon> = {
  gestories: Calculator,
  immobiliaries: Building2,
  cliniques: Stethoscope,
};
