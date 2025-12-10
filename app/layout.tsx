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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background:
            "radial-gradient(circle, rgba(64,65,70,1) 0%, rgba(26,28,33,1) 300%)",
        }}
      >
        <div className="mx-auto w-full max-w-[2000px] px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
