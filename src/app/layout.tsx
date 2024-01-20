import "@/src/styles/globals.css";
import Navbar from "@/src/components/elements/navbar";
import AnimatedBG from "@/src/components/background/Grid";
import { latoFont, playfairDisplayFont } from "@/src/lib/fonts";
import SideNavs from "@/src/components/elements/sidenav";
import { ThemeProvider } from "@/src/context/theme";
import { SideNavProvider } from "@/src/context/sideNav";
import BottomNavCarousel from "../components/elements/bottomNav/BottomNavCarousel";

export const metadata = {
  title: "Vishesh Dhawan",
  description:
    "Hi, I am Vishesh Dhawan. I am a Full-Stack web developer and a blogger.",
  icons: {
    icon: "/favImg.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${latoFont.variable} ${playfairDisplayFont.variable} overflow-x-hidden`}
      >
        <ThemeProvider>
          <SideNavProvider>
            <Navbar />
            <AnimatedBG />
            <SideNavs />
            {children}
            <BottomNavCarousel />
          </SideNavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
