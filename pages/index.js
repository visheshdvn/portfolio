import Head from "next/head";
import Image from "next/image";
import headerbg from "../public/headerbg.jpg";

export default function Home() {
  return (
    <header
      id="header"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(16,16,16,0.3), rgba(16,16,16,0.3)), url(headerbg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen"
    >
    </header>
  );
}
