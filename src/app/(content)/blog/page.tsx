"use client";

import React, { useContext, useEffect, useRef } from "react";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";
import Link from "next/link";
import Image from "next/image";
import blogData from "@/src/db/blogs.json";
import { useInView } from "framer-motion";
import { cn } from "@/src/lib/utils";
import ContentPageHeading from "@/src/components/elements/heading/contentPageHeading";
import useWindowSize from "@/src/hooks/useWindowSize";

const BlogPage = () => {
  const whenOnScreen = useRef(null);
  const isInView = useInView(whenOnScreen, { once: true });
  const { width } = useWindowSize();

  // @ts-ignore
  const { navData, setNavData } = useContext(SideNavContext);

  useEffect(() => {
    setNavData<SideNavDataType>({
      ...navData,
      left: {
        text: "PROJECTS",
        link: "/projects",
      },
      right: {
        text: "CONNECT",
        link: "/connect",
      },
    });
  }, []);

  return (
    <>
      <main ref={whenOnScreen}>
        <div className="content-page-position">
          <ContentPageHeading text="Blog." />
          <div className="content-section mb-24">
            <div className="grid grid-cols-2 gap-4 lg:mb-20 md:mb-16">
              <div className="xl:pr-8 pr-3 col-span-2 lg:col-span-1">
                <h2 className="font-primary font-bold text-5xl 2xl:mb-10 xl:mb-6 mb-4">
                  Why do I blog?
                </h2>
                <p className="font-serif 2xl:text-lg leading-[1.45] xl:text-base text-lg md:text-xl">
                  Blogging serves as my canvas to express my fervor for the web.
                  It&#39;s not just a documentation of my personal journey but a
                  platform where I distill complex concepts and turn them into
                  accessible insights.
                  <br />
                  <br />
                  Beyond personal fulfillment, I believe in sharing knowledge.
                  Through my blog, I provide valuable content to aid others in
                  learning, fostering a supportive community for growth in web
                  development and blockchain.
                </p>
              </div>
              <div
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                  transform: isInView
                    ? "translate(0px, 0px)"
                    : "translate(0px, 16px)",
                }}
                className="hidden lg:block"
              >
                <BlogPeek data={blogData[0]} variant="xl" />
              </div>
            </div>

            <div
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                transform: isInView
                  ? "translate(0px, 0px)"
                  : "translate(0px, 16px)",
              }}
              className="grid xl:grid-cols-3 md:grid-cols-2"
            >
              {(width as number) < 1024 && (
                <div className="max-w-[88.1%] flex-1 lg:hidden">
                  <BlogPeek data={blogData[0]} />
                </div>
              )}
              {blogData.slice(1).map((data, i) => (
                <div key={i} className="blog-list mb-20">
                  <div className="max-w-[88.1%] flex-1">
                    <BlogPeek data={data} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Watermark
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          transform: isInView
            ? "translate(-50%, 0px)"
            : "translate(-50%, 160px)",
        }}
        text="BLOG"
        className="transform "
      />
    </>
  );
};

function BlogPeek({
  data,
  variant = "normal",
}: {
  data: any;
  variant?: "xl" | "normal";
}) {
  const { title, topic, slug, banner, bannerAlt, external, externalLink } =
    data;

  return (
    <div className="blogpeek-container">
      <Link href={externalLink} target="_blank">
        <div className="w-full relative">
          <div className="aspect-w-16 aspect-h-10 w-full overflow-hidden">
            <Image
              src={banner}
              alt={bannerAlt}
              fill={true}
              className="object-cover object-center blogpeek-banner"
              sizes="(max-width: 700px), 33vw"
            />
          </div>
          {external && !!externalLink.trim() && (
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
      </Link>
      <div>
        <h3 className="font-bold text-sm my-2 font-secondary uppercase text-[#3C7DAF]">
          {topic.name.replace("_", " ")}
        </h3>
        <Link href={externalLink} target="_blank">
          <h1
            className={cn(
              "font-medium leading-tight font-primary line-clamp-3 3xl:text-[22px] 2xl:text-xl 2xl:leading-tight lg:text-2xl lg:leading-tight md:text-[22px] md:leading-tight",
              {
                "3xl:text-3xl 3xl:leading-tight 2xl:text-3xl 2xl:leading-tight lg:text-2xl xl:leading-tight text-2xl":
                  variant === "xl",
              }
            )}
          >
            {title}
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default BlogPage;
