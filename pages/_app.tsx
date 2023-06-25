import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { ThemeProvider } from "next-themes";
import Navbar from "@/components/elements/navbar";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Vishesh Dhawan</title>
      </Head>
      {Component?.customProps?.nav !== false && <Navbar />}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
