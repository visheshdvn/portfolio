import Navbar from "@/src/components/elements/navbar";
import AnimatedBG from "../components/background/Grid";
import "@/src/styles/globals.css";
import { latoFont, playfairDisplayFont } from "@/src/lib/fonts";
import SideNav from "../components/elements/sidenav";

export const metadata = {
  title: "Vishesh Dhawan",
  description:
    "Hi, I am Vishesh Dhawan. I am a Full-Stack web developer and a blogger.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${latoFont.variable} ${playfairDisplayFont.variable}`}>
        <Navbar />
        <AnimatedBG />
        <SideNav variant="right" text="ABOUT" link="/about" />
        {children}
      </body>
    </html>
  );
}
