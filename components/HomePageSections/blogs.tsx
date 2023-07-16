import React, { useEffect } from "react";
import { HomeSectionsLayout } from "../layouts";
import { latoFont, playfairDisplayFont } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
const BlogsSection = ({
  data,
  parentRef,
  myRef,
}: {
  data: any;
  parentRef: React.RefObject<HTMLElement>;
  myRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <HomeSectionsLayout
      id="blog-section"
      sectionRef={myRef}
      heading="Latest Posts."
    >
      <section style={playfairDisplayFont.style} className="w-[1310px] mx-auto">
        <div className="w-full flex justify-between mb-24">
          {data.slice(0, 3).map((d: any, i: number) => {
            return <BlogPeek key={i} data={d} />;
          })}
        </div>
        <div className="w-full flex justify-between">
          {data.slice(3, 6).map((d: any, i: number) => {
            return <BlogPeek key={i} data={d} />;
          })}
        </div>
      </section>
    </HomeSectionsLayout>
  );
};

function BlogPeek({ data }: { data: any }) {
  const { title, topic, slug, banner, bannerAlt, external, externalLink } =
    data;

  return (
    <Link href={externalLink} target="_blank">
      <div className="w-[384px]">
        <div className="w-full relative">
          <div className="aspect-w-16 aspect-h-10 w-full">
            <Image src={banner} alt={bannerAlt} fill={true} />
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
        <div className="">
          <h3 style={latoFont.style} className="font-bold text-sm my-2">
            {topic.name.replace("_", " ").toUpperCase()}
          </h3>
          <h1
            style={playfairDisplayFont.style}
            className="font-medium text-[22px] leading-tight"
          >
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default BlogsSection;
