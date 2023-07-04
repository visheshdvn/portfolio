import React, { useEffect, useRef } from "react";
import { HomeSectionsLayout } from "../layouts";
import { playfairDisplayFont } from "@/lib/fonts";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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

const projectData = [
  {
    title: "LumBytes.com",
    intro:
      "Lorem ipsum dolor sit amet consectetur. Dui ornare accumsan nec mauris ultrices. Quam morbi vitae sollicitudin donec. Aliquam ac pulvinar sit curabitur dui amet id sed et.",
    banner: {
      url: "https://visheshdvn-media.s3.eu-west-1.amazonaws.com/yrobot_c9818dfd72.jpg",
      alternativeText: "a cute robot",
      caption: null,
    },
  },
  {
    title: "LumBytes.com",
    intro: "High performance blogging application, optimised for SEO.",
    banner: {
      url: "https://visheshdvn-media.s3.eu-west-1.amazonaws.com/yrobot_c9818dfd72.jpg",
      alternativeText: "a cute robot",
      caption: null,
    },
  },
  {
    title: "LumBytes.com",
    intro: "High performance blogging application, optimised for SEO.",
    banner: {
      url: "https://visheshdvn-media.s3.eu-west-1.amazonaws.com/yrobot_c9818dfd72.jpg",
      alternativeText: "a cute robot",
      caption: null,
    },
  },
];

const Projects = ({
  parentRef,
  myRef,
}: {
  parentRef: React.RefObject<HTMLElement>;
  myRef: React.RefObject<HTMLElement>;
}) => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });
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
            currElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  };

  // useEffect(() => {
  //   if (isScrollingDown) {
  //     scrollSectionToPosition(parentRef, myRef, "bottom");
  //   }
  // }, [isScrollingDown]);

  useEffect(() => {
    scrollSectionToPosition(parentRef, myRef, "bottom", scrollDirection);
  }, [(parentRef.current as HTMLElement)?.scrollTop]);

  return (
    <HomeSectionsLayout
      id="project-section"
      sectionRef={myRef}
      heading="Projects."
    >
      <section
        ref={projectsRef}
        className="space-y-20 max-w-[1310px] ml-[70px]"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {/* <button onClick={scrollCurrentSectionToBottom}>Scroll to bottom</button> */}
        {projectData.map((data, i) => (
          <ProjectPeek key={i} data={data} ind={i} />
        ))}
      </section>
    </HomeSectionsLayout>
  );
};

export default Projects;

function ProjectPeek({
  data,
  ind,
}: {
  data: {
    title: string;
    intro: string;
    banner: { url: string; alternativeText: string };
  };
  ind: number;
}) {
  return (
    <>
      <div className="w-full flex justify-between max-w-[1180px]">
        <div
          className={`${
            ind % 2 == 0 ? "order-1" : "order-2"
          } flex-1 max-w-[508px]`}
        >
          <h1
            style={playfairDisplayFont.style}
            className="font-medium text-5xl mb-5"
          >
            {data.title}
          </h1>
          <p>{data.intro}</p>
        </div>
        <div
          className={`${
            ind % 2 == 0 ? "order-2" : "order-1"
          } flex-1 max-w-[508px]`}
        >
          <div className="w-full h-[308px] overflow-hidden flex items-center">
            <Image
              src={data.banner.url}
              alt={data.banner.alternativeText}
              // fill={true}
              width={508}
              height={306}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
