import "@/src/styles/globals.css";
import Navbar from "@/src/components/elements/navbar";
import Head from "next/head";
import { CustomAppProps } from "@/types/globals";

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <Head>
        <title>Vishesh Dhawan</title>
      </Head>
      <Navbar navbarTheme={Component?.customProps?.navbarTheme} />
      <Component {...pageProps} />
    </>
  );
}
