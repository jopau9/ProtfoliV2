// fonts.ts
import {
  Press_Start_2P,
  Anton,
  Bellota,
  Overlock,
  Roboto,
  Roboto_Flex,
  DM_Serif_Text,
  Freehand,
  Modak,
  Geist,
  Geist_Mono,
} from "next/font/google";


// ----------------------
// FONTS PRINCIPALS
// ----------------------

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

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// ----------------------
// FONTS ADDITIONALS
// ----------------------

export const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export const dm_serif_text = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export const freehand = Freehand({
  weight: "400",
  subsets: ["latin"],
});

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export const bellota = Bellota({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const overlock = Overlock({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
