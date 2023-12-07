import Navbar from "@/src/components/elements/navbar";
import AnimatedBG from "../components/background/Grid";
import "@/src/styles/globals.css";

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
      <body>
        <Navbar />
        <AnimatedBG />
        {children}
      </body>
    </html>
  );
}
