import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import { LanguageProvider } from "./i18n/LanguageProvider";
import Nav from "./components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joanpau.dev"), // REVISAR: posa-hi el teu domini real
  title: {
    default: "Joan Pau Rahola · AI Engineer",
    template: "%s · Joan Pau Rahola",
  },
  description:
    "Enginyer d'IA. Dissenyo, construeixo i mantinc sistemes amb models de llenguatge: assistents sobre documentació pròpia, agents amb eines i recuperació avaluada.",
  openGraph: {
    title: "Joan Pau Rahola · AI Engineer",
    description:
      "He posat una empresa sencera a treballar amb IA: disseny, construcció i adopció d'una plataforma interna d'assistents, RAG i agents.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca" className={fontVariables}>
      <body className="grain bg-canvas text-ink antialiased">
        <LanguageProvider>
          <Nav />
          <main className="relative z-[2]">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
