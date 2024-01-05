"use client";

import React, { useContext, useEffect } from "react";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";
import Link from "next/link";
import Image from "next/image";

const blogData = [
  {
    title: "ABCDEF",
    topic: { name: "AI" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?painting",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "ML" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?art",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "blockchain" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?canvas",
    bannerAlt: "text",
    external: false,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "ML" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?code",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "ML" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?text",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "ML" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?tech",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "ML" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?bot",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "ML" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?text",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "ML" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?tech",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
  {
    title: "ABCD",
    topic: { name: "ML" },
    slug: "abcd",
    banner: "https://source.unsplash.com/random/512×512?bot",
    bannerAlt: "text",
    external: true,
    externalLink: "www.google.com",
  },
];

const BlogPage = () => {
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
      <main>
        <div className="mt-10">
          <h1 className="font-primary pt-1 text-9xl font-medium mb-20">
            Blog.
          </h1>
          <div className="content-section mb-24">
            <div className="grid grid-cols-2 gap-4 mb-20">
              <div>
                <h2 className="font-primary font-bold text-5xl">
                  Why do I blog?
                </h2>
              </div>
              <div>
                <BlogPeek data={blogData[0]} />
              </div>
            </div>

            <div className="grid grid-cols-3">
              {blogData.slice(1).map((data, i) => (
                <div key={i} className="blog-list mb-20">
                  <div className="w-[384px]">
                    <BlogPeek data={data} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Watermark text="BLOG" />
    </>
  );
};

function BlogPeek({ data }: { data: any }) {
  const { title, topic, slug, banner, bannerAlt, external, externalLink } =
    data;

  return (
    <div className="">
      <Link href={externalLink} target="_blank">
        <div className="w-full relative">
          <div className="aspect-w-16 aspect-h-10 w-full">
            <Image
              src={banner}
              alt={bannerAlt}
              fill={true}
              className="object-cover object-center"
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
          <h1 className="font-medium text-[22px] leading-tight font-primary line-clamp-3">
            {title}
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default BlogPage;
