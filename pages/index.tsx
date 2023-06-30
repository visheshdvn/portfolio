import {
  About,
  Landing,
  Projects,
  BlogsSection,
} from "@/components/HomePageSections";
import { GetStaticProps } from "next";
import prisma from "@/lib/prisma";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home({ blogposts }) {
  const homeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: homeRef,
    offset: ["start start", "end end"],
  });

  const backgroundScrollPosition = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200]
  );

  return (
    <>
      <motion.div
        style={{ top: backgroundScrollPosition }}
        className="absolute pt-[60px] inset-x-0 -z-50 space-y-28 h-screen overflow-hidden"
      >
        {Array(12)
          .fill(0)
          .map((e, ind) => (
            <div key={ind} className="h-px w-full bg-[#F8F7F7]"></div>
          ))}
      </motion.div>
      <div
        ref={homeRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        <Landing />
        <About containerRef={homeRef} />
        <Projects />
        {!!blogposts && <BlogsSection data={blogposts} />}
      </div>
    </>
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
