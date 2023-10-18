import {
  About,
  Landing,
  Projects,
  BlogsSection,
} from "@/src/components/HomePageSections";
import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import RightSideNav from "@/src/components/elements/sidenav/rightSideNav";

export default function Home({ blogposts }: { blogposts: any }) {
  const homePageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: homePageRef,
    offset: ["start start", "end end"],
  });

  const backgroundScrollPosition = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -180]
  );

  const scrollPos = useSpring(backgroundScrollPosition, {
    bounce: 0,
    duration: 1,
  });

  // useEffect(() => {
  //   if (isScrolling) {
  //     scrollToSection(homePageRef, projectsSectionRef);
  //   }
  // }, [isScrolling]);

  // useEffect(() => {
  //   console.log("change");
  // }, [(homePageRef?.current as HTMLElement)?.scrollTop]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{ top: scrollPos }}
        className="absolute pt-[60px] inset-x-0 -z-50 space-y-24 bg-white"
      >
        {Array(23)
          .fill(0)
          .map((e, ind) => (
            <div key={ind} className="h-px w-full bg-[#F2f2f2]"></div>
          ))}
      </motion.div>

      <RightSideNav text="Projects" link="/projects" />

      <div
        id="home-sections-container"
        ref={homePageRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        <Landing parentRef={homePageRef} />
      </div>
    </div>
  );
}
