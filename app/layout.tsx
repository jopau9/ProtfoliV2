import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import { LanguageProvider } from "./i18n/LanguageProvider";
import Nav from "./components/Nav";
import { themeInitScript } from "./components/ui/themeScript";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joanpau.dev"), // REVISAR: posa-hi el teu domini real
  title: {
    default: "Joan Pau Rahola · Software Engineer",
    template: "%s · Joan Pau Rahola",
  },
  description:
    "Enginyer de software i AI Solutions Architect a AETECH. IA aplicada a entorns empresarials: assistents sobre documentació tècnica, recuperació híbrida i agents integrats amb TIA Portal, Jira i Microsoft 365.",
  openGraph: {
    title: "Joan Pau Rahola · Software Engineer",
    description:
      "Enginyeria de software i IA aplicada per a entorns empresarials. Plataforma interna d'IA d'AETECH, Capital Tracker i altres projectes.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // L'script del <head> pot posar `data-theme` abans d'hidratar: d'aquí el suppressHydrationWarning.
    <html lang="ca" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="grain bg-canvas text-ink antialiased">
        <LanguageProvider>
          <Nav />
          <main className="relative z-[2]">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
