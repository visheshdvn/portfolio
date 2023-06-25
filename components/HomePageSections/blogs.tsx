import React from "react";
import { HomeSectionsLayout } from "../layouts";
import { latoFont, playfairDisplayFont } from "@/lib/fonts";
import Image from "next/image";

const BlogsSection = ({ data }) => {
  // console.log("data", data);

  return (
    <HomeSectionsLayout heading="Latest Posts.">
      <section
        style={playfairDisplayFont.style}
        className="w-[1308px] flex flex-wrap justify-between"
      >
        {data.map((d, i) => {
          const { title, topic, slug, banner, bannerAlt, lumbytes, lumbytesLink } = d;
          return (
            <div key={i} className="w-[384px] mb-10">
              <div className="w-full relative">
                <div className="aspect-w-16 aspect-h-10 w-full">
                  <Image
                    src={banner}
                    alt={bannerAlt}
                    fill={true}
                  />
                </div>
                {lumbytes && !!lumbytesLink.trim() && (
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
                  {topic.replace("_", " ").toUpperCase()}
                </h3>
                <h1
                  style={playfairDisplayFont.style}
                  className="font-medium text-[22px] leading-tight"
                >
                  {title}
                </h1>
              </div>
            </div>
          );
        })}
      </section>
    </HomeSectionsLayout>
  );
};

export default BlogsSection;
