import React from "react";
import ContentPage from "@/src/components/layouts/contentPage";
import { customFCProps } from "@/types/globals";
import { playfairDisplayFont, latoFont } from "@/src/lib/fonts";
import Image from "next/image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Link from "next/link";

const BLOGPOSTS = [
  {
    id: "askdbl323",
    title: "the title of blog",
    topic: {
      name: "Web Development",
    },
    externalLink: "http://google.com",
    banner: "https://source.unsplash.com/random",
    bannerAlt: "Alt text",
    external: true,
  },
  {
    id: "askdbl323",
    title: "the title of blog",
    topic: {
      name: "Web Development",
    },
    externalLink: "http://google.com",
    banner: "https://source.unsplash.com/random",
    bannerAlt: "Alt text",
    external: true,
  },
  {
    id: "askdbl323",
    title: "the title of blog",
    topic: {
      name: "Web Development",
    },
    externalLink: "http://google.com",
    banner: "https://source.unsplash.com/random",
    bannerAlt: "Alt text",
    external: true,
  },
];

const Blog: React.FC & customFCProps = (props: any): JSX.Element => {
  const { scrollYProgress } = useScroll();

  const backgroundScrollPosition = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  );

  const scrollPos = useSpring(backgroundScrollPosition, {
    bounce: 0,
    duration: 1,
  });

  return (
    <>
      <motion.div
        style={{ top: scrollPos }}
        className="fixed pt-[60px] inset-x-0 -z-50 space-y-24 bg-white"
      >
        {Array(20)
          .fill(0)
          .map((e, ind) => (
            <div key={ind} className="h-px w-full bg-[#F2f2f2]"></div>
          ))}
      </motion.div>

      <div className="">
        <ContentPage
          title="Blog."
          leftSideNavLink="/projects"
          leftSideNavText="PROJECTS"
          rightSideNavLink="/connect"
          rightSideNavText="CONNECT"
        >
          <section className="2xl:w-[1310px] xl:w-[1100px] lg:w-[840px] mx-auto grid grid-cols-12 xl:gap-16 gap-8">
            {BLOGPOSTS.map((data: any, i: number) => (
              <BlogPeek
                key={data.title}
                title={data.title}
                slug={data.slug}
                id={data.id}
                banner={data.banner}
                bannerAlt={data.bannerAlt}
                external={data.external}
                externalLink={data.externalLink}
                topic={data.topic}
              />
            ))}
          </section>
        </ContentPage>
      </div>
    </>
  );
};

function BlogPeek({
  title,
  slug,
  id,
  banner,
  bannerAlt,
  external,
  externalLink,
  topic,
}: {
  title: string;
  slug?: string;
  id: number;
  banner: string;
  bannerAlt: string;
  external: boolean;
  externalLink: string;
  topic: {
    name: string;
    slug: string;
  };
}) {
  return (
    <Link href={externalLink} target="_blank" className="col-span-4">
      <div className="">
        <div className="w-full relative">
          <div className="aspect-w-16 aspect-h-10 w-full">
            <Image
              src={banner}
              alt={bannerAlt || title}
              fill={true}
              className="object-cover"
            />
          </div>
          {external && !!externalLink?.trim() && (
            <div className="absolute bottom-0 right-0">
              <Image
                src={"/lumBytesLogoDark.png"}
                alt="LumBytes Logo"
                width={42}
                height={42}
              />
            </div>
          )}
        </div>
        <div className="">
          <h3 style={latoFont.style} className="font-bold text-sm my-2">
            {topic.name.replace("_", " ").toUpperCase()}
          </h3>
          <h1
            style={playfairDisplayFont.style}
            className="font-medium xl:text-[22px] text-xl leading-tight"
          >
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

Blog.customProps = {
  navbarTheme: "light",
};

export default Blog;
