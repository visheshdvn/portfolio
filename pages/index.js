import Header from "../components/header"
import About from "../components/about"
import Blog from "../components/blog"
import Resume from "../components/resume"
import Skills from "../components/skills"

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Blog />
      <Skills />
    </>
  );
}
