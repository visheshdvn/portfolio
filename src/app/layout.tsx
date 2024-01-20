import "@/src/styles/globals.css";
import Navbar from "@/src/components/elements/navbar";
import AnimatedBG from "@/src/components/background/Grid";
import { latoFont, playfairDisplayFont } from "@/src/lib/fonts";
import SideNavs from "@/src/components/elements/sidenav";
import { ThemeProvider } from "@/src/context/theme";
import { SideNavProvider } from "@/src/context/sideNav";
import BottomNav from "@/src/components/elements/bottomNav/BottomNav";

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
            <BottomNav />
          </SideNavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
