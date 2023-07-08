import "@/styles/globals.css";
// import { ThemeProvider } from "next-themes";
import Navbar from "@/components/elements/navbar";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { CustomAppProps } from "@/types/globals";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Vishesh Dhawan</title>
      </Head>
      {Component?.customProps?.displayNavBar !== false && (
        <Navbar navbarTheme={Component?.customProps?.navbarTheme} />
      )}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
