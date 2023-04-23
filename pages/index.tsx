import { About, Landing, Projects } from "@/components/HomePageSections";

export default function Home() {
  return (
    <div className="snap- snap-mandatory snap-always h-screen overflow-y-scroll">
      <Landing />
      <About />
      <Projects />
    </div>
  );
}
