import "../styles/globals.css";
import SideBar from "../components/SideBar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vishesh Dhawan</title>
      </Head>
      <SideBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
