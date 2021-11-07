import Head from "next/head";
import Header from "../components/header"
import About from "../components/about"
import Blog from "../components/blog"

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Blog />
    </>
  );
}
