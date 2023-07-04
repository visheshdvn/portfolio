import {
  About,
  Landing,
  Projects,
  BlogsSection,
} from "@/components/HomePageSections";
import { GetStaticProps } from "next";
import prisma from "@/lib/prisma";
import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useScrollDirection } from "react-use-scroll-direction";
// import { scrollToSection } from "@/lib/scroller";
// import { useRouter } from "next/router";

export default function Home({ blogposts }) {
  const homePageRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const blogSectionRef = useRef(null);

  const { isScrolling, isScrollingUp, isScrollingDown, scrollDirection } =
    useScrollDirection(homePageRef?.current as unknown as HTMLDivElement);

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
      <div className="fixed right-0 h-screen flex justify-center items-center w-[90px] z-50">
        <span className="-rotate-90 text-sm font-bold tracking-[12px] text-black">
          PROJECTS
        </span>
      </div>
      <div
        id="home-sections-container"
        ref={homePageRef}
        className="h-screen overflow-y-scroll snap- snap-mandator"
      >
        <Landing parentRef={homePageRef} />
        <About parentRef={homePageRef} myRef={aboutSectionRef} />
        <Projects parentRef={homePageRef} myRef={projectsSectionRef} />
        {!!blogposts && (
          <BlogsSection
            parentRef={homePageRef}
            myRef={blogSectionRef}
            data={blogposts}
          />
        )}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let blogposts = await prisma.blogPosts.findMany({
    select: {
      title: true,
      slug: true,
      id: true,
      banner: true,
      bannerAlt: true,
      description: true,
      content: true,
      external: true,
      externalLink: true,
      date: true,
      minuteRead: true,
      topic: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
    where: {
      published: true,
    },
    skip: 0,
    take: 6,
  });

  blogposts = JSON.parse(JSON.stringify(blogposts));

  return {
    props: {
      blogposts: blogposts,
    },
    revalidate: 14400,
  };
};
