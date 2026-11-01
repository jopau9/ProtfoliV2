import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { confirmationEmail } from "../../content/services";
import { identity } from "../../content/site";

/**
 * Sol·licituds del diagnòstic gratuït (la ruta conserva el nom antic, "auditoria"):
 * valida el formulari, me l'envia per correu i envia a qui l'ha omplert un correu
 * de confirmació en el seu idioma. Tot surt del meu Gmail, per SMTP.
 *
 * Variables d'entorn (a Vercel: Settings → Environment Variables):
 * - GMAIL_APP_PASSWORD obligatòria: contrasenya d'aplicació de Google
 *                      (myaccount.google.com/apppasswords; cal la verificació en dos passos)
 * - GMAIL_USER         el compte de Gmail (per defecte, el correu del lloc)
 * - AUDIT_TO_EMAIL     on arriben les sol·licituds (per defecte, el mateix compte)
 */

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Un nom que es pot posar a la salutació: només lletres, espais, apòstrofs i guions (res d'enllaços). */
const PLAIN_NAME = /^\p{L}[\p{L} '’-]{0,59}$/u;

type Locale = keyof typeof confirmationEmail.subject;

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
  const sector = text(data.sector, 80) || "—";
  const locale = text(data.locale, 5);

  if (!name || !company || !EMAIL.test(email) || !task || !data.consent) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER || identity.email;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ""); // Google la mostra en grups de 4
  if (!pass) {
    console.error("auditoria: falta GMAIL_APP_PASSWORD");
    return NextResponse.json({ error: "not-configured" }, { status: 500 });
  }
  const owner = process.env.AUDIT_TO_EMAIL || user;

  const mail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  // 1. La sol·licitud, per a mi. Si falla, falla tot.
  try {
    await mail.sendMail({
      from: { name: "Web · Diagnòstic", address: user },
      to: owner,
      replyTo: email,
      subject: `Diagnòstic · ${company} (${sector})`,
      text: [
        `Nom: ${name}`,
        `Empresa: ${company}`,
        `Sector: ${sector}`,
        `Correu: ${email}`,
        `Telèfon: ${phone || "—"}`,
        `Idioma de la web: ${locale || "—"}`,
        "",
        "La seva situació:",
        task,
      ].join("\n"),
    });
  } catch (error) {
    console.error("auditoria: no s'ha pogut enviar la sol·licitud", error);
    return NextResponse.json({ error: "send-failed" }, { status: 502 });
  }

  // 2. La confirmació, per a qui l'ha enviat. Si falla, la sol·licitud ja m'ha
  //    arribat: no es dona per fallida.
  const lang: Locale = locale === "es" || locale === "en" ? locale : "ca";
  let confirmation = true;
  try {
    await mail.sendMail({
      from: { name: "Joan Pau Rahola", address: user },
      to: email,
      replyTo: owner,
      subject: confirmationEmail.subject[lang],
      text: [
        confirmationEmail.greeting[lang](PLAIN_NAME.test(name) ? name : ""),
        ...confirmationEmail.paragraphs[lang],
        confirmationEmail.signature[lang].join("\n"),
      ].join("\n\n"),
    });
  } catch (error) {
    console.error("auditoria: no s'ha pogut enviar la confirmació", error);
    confirmation = false;
  }

  return NextResponse.json({ ok: true, confirmation });
}
