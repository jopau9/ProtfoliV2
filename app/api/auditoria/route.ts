import { NextResponse } from "next/server";
import { sectors } from "../../content/services";
import { identity } from "../../content/site";

/**
 * Sol·licituds d'auditoria: valida el formulari i l'envia per correu amb Resend.
 *
 * Variables d'entorn (a Vercel: Settings → Environment Variables):
 * - RESEND_API_KEY   obligatòria, de resend.com
 * - AUDIT_TO_EMAIL   on arriben les sol·licituds (per defecte, el correu del lloc)
 * - AUDIT_FROM_EMAIL remitent; sense domini verificat a Resend, només
 *                    "onboarding@resend.dev", que només pot enviar al titular del compte
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // El parany per a robots ple: es respon com si res perquè no ho tornin a provar.
  if (text(data.website, 200)) return NextResponse.json({ ok: true });

  const name = text(data.name, 120);
  const company = text(data.company, 120);
  const email = text(data.email, 160);
  const phone = text(data.phone, 40);
  const task = text(data.task, 2000);
  const sectorId = text(data.sector, 40);
  const locale = text(data.locale, 5);

  if (!name || !company || !EMAIL.test(email) || !task || !data.consent) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("auditoria: falta RESEND_API_KEY");
    return NextResponse.json({ error: "not-configured" }, { status: 500 });
  }

  const sector = sectors.find((item) => item.id === sectorId)?.name.ca ?? "Un altre";
  const body = [
    `Nom: ${name}`,
    `Empresa: ${company}`,
    `Sector: ${sector}`,
    `Correu: ${email}`,
    `Telèfon: ${phone || "—"}`,
    `Idioma de la web: ${locale || "—"}`,
    "",
    "Tasca que els fa perdre més temps:",
    task,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.AUDIT_FROM_EMAIL ?? "Web <onboarding@resend.dev>",
      to: [process.env.AUDIT_TO_EMAIL ?? identity.email],
      reply_to: email,
      subject: `Auditoria · ${company} (${sector})`,
      text: body,
    }),
  });

  if (!response.ok) {
    console.error("auditoria: Resend ha respost", response.status, await response.text());
    return NextResponse.json({ error: "send-failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
