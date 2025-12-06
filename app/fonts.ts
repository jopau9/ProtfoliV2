import { Press_Start_2P, Anton, Bellota, Overlock, Roboto } from "next/font/google";

export const press_Start_2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

// si tens altres fonts:
export const anton = Anton({ weight: "400", subsets: ["latin"] });
export const bellota = Bellota({ weight: ["300", "400", "700"], subsets: ["latin"] });
export const overlock = Overlock({ weight: ["400", "700", "900"], subsets: ["latin"] });