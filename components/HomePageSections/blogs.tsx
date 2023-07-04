import React, { useEffect } from "react";
import { HomeSectionsLayout } from "../layouts";
import { latoFont, playfairDisplayFont } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import {
  useScrollDirection,
  ScrollDirection,
} from "react-use-scroll-direction";
import {
  isElementBottomDivisionOnViewport,
  isElementOnViewport,
  isElementTopDivisionOnViewport,
} from "@/utils/elementPosition";
import { SECTIONS_SCROLL_OFFSET } from "@/lib/constants";

const BlogsSection = ({
  data,
  parentRef,
  myRef,
}: {
  data: any;
  parentRef: React.RefObject<HTMLElement>;
  myRef: React.RefObject<HTMLElement>;
}) => {
  const { isScrolling, isScrollingUp, isScrollingDown, scrollDirection } =
    useScrollDirection(parentRef?.current as unknown as HTMLElement);

  const scrollSectionToPosition = (
    parentRef: React.RefObject<HTMLElement>,
    sectionRef: React.RefObject<HTMLElement>,
    position: "top" | "bottom",
    scrollDirection: ScrollDirection
  ) => {
    // console.log("h");

    if (myRef?.current && parentRef?.current) {
      if (isElementOnViewport(sectionRef)) {
        let parentElement = parentRef.current as HTMLDivElement;
        const currElement = myRef.current as HTMLDivElement;
        const pos = currElement.getBoundingClientRect();
        // console.log(position, scrollDirection);

        if (scrollDirection === "DOWN") {
          const bottomPos = isElementBottomDivisionOnViewport(sectionRef);
          const topPos = isElementTopDivisionOnViewport(sectionRef);

          console.log(
            topPos,
            topPos.top < window.innerHeight - SECTIONS_SCROLL_OFFSET
          );

          if (bottomPos.is && bottomPos.bottom <= SECTIONS_SCROLL_OFFSET) {
            parentElement?.scroll({
              top:
                parentElement.scrollTop +
                pos.top +
                pos.height -
                window.innerHeight,
              // (currElement.getBoundingClientRect().bottom - window.innerHeight),
              // +145 for next section
              behavior: "smooth",
            });
            return;
          }

          if (
            topPos.is &&
            topPos.top < window.innerHeight - SECTIONS_SCROLL_OFFSET
          ) {
            console.log("st");
            
            currElement.scrollIntoView({ behavior: "smooth" });
            return;
          }
        }
      }
    }
  };

  useEffect(() => {
    scrollSectionToPosition(parentRef, myRef, "bottom", scrollDirection);
  }, [(parentRef.current as HTMLElement)?.scrollTop]);

  return (
    <HomeSectionsLayout
      id="blog-section"
      sectionRef={myRef}
      heading="Latest Posts."
    >
      <section style={playfairDisplayFont.style} className="w-[1310px] mx-auto">
        <div className="w-full flex justify-between mb-24">
          {data.slice(0, 3).map((d, i) => {
            return <BlogPeek key={i} data={d} />;
          })}
        </div>
        <div className="w-full flex justify-between">
          {data.slice(3, 6).map((d, i) => {
            return <BlogPeek key={i} data={d} />;
          })}
        </div>
      </section>
    </HomeSectionsLayout>
  );
};

function BlogPeek({ data }) {
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
