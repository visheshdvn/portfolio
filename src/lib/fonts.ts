import { Playfair_Display, Lato } from "next/font/google";

export const playfairDisplayFont = Playfair_Display({
  weight: ["500", "700"],
  subsets: ["latin"],
  style: "normal",
  preload: true,
  variable: "--playfair_display-font",
});

export const latoFont = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
  preload: true,
  variable: "--lato-font",
});
