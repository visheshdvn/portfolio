import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/elements/navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider attribute="class" storageKey="theme" defaultTheme="light"> */}
        <Head>
          <title>Vishesh Dhawan</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
