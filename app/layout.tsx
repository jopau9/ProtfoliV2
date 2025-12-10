import type { Metadata } from "next";
import {
  Anton,
  Press_Start_2P,
  Bellota,
  Roboto_Flex,
  Overlock,
  Geist,
  Geist_Mono,
  Roboto,
  Modak,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JoanPau – Portfolio",
  description: "Portfolio de desenvolupador de software junior",
};

export const press_Start_2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const modak = Modak({
  weight: "400",
  subsets: ["latin"],
});

export const robotoLight = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const robotoBlack = Roboto({
  weight: "900",
  subsets: ["latin"],
});

export const robotoflex = Roboto_Flex({
  weight: "200",
  subsets: ["latin"],
});

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export const bellota = Bellota({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const overlock = Overlock({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* FONS GLOBAL A TOTA LA PANTALLA */}
        <div
          className="min-h-screen w-full"
          style={{
            background:
              "radial-gradient(circle, rgba(64,65,70,1) 0%, rgba(26,28,33,1) 300%)",
          }}
        >
          {/* CONTENIDOR CENTRAL DEL CONTINGUT */}
          <div className="mx-auto w-full max-w-[2000px] px-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
