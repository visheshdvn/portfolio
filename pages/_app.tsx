import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/elements/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" storageKey="theme" defaultTheme="light">
        <Navbar />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}
