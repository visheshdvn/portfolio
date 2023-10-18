import React, { useRef } from "react";
import ContentPage from "@/src/components/layouts/contentPage";
import { customFCProps } from "@/types/globals";
import { playfairDisplayFont } from "@/src/lib/fonts";
import Image from "next/image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const projectData = [
  {
    title: "LumBytes.com",
    intro:
      "Lorem ipsum dolor sit amet consectetur. Dui ornare accumsan nec mauris ultrices. Quam morbi vitae sollicitudin donec. Aliquam ac pulvinar sit curabitur dui amet id sed et. Molestie laoreet elementum fermentum urna nam sed felis cursus.",
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

const Projects: React.FC & customFCProps = (): JSX.Element => {
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
          title="Projects."
          rightSideNavLink="/blog"
          rightSideNavText="BLOG"
          leftSideNavLink="/"
          leftSideNavText="HOME"
        >
          <div className="flex justify-center">
            <div className="space-y-24">
              {projectData.map((data, i) => (
                <ProjectPeek key={i} data={data} ind={i} />
              ))}
            </div>
          </div>
        </ContentPage>
      </div>
    </>
  );
};

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
      <div className="w-full flex justify-between 2xl:w-[1250px]">
        <div
          className={`${
            ind % 2 == 0 ? "order-1" : "order-2"
          } flex-1 max-w-[570px]`}
        >
          <h1
            style={playfairDisplayFont.style}
            className="font-medium text-5xl mb-8"
          >
            {data.title}
          </h1>
          <p className="font-serif text-lg leading-normal">{data.intro}</p>
        </div>

        <div
          className={`${
            ind % 2 == 0 ? "order-2" : "order-1"
          } flex-1 max-w-[570px]`}
        >
          <div className="w-full overflow-hidden flex items-center aspect-w-16 aspect-h-10">
            <Image
              src={data.banner.url}
              alt={data.banner.alternativeText}
              // fill={true}
              width={570}
              height={346}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

Projects.customProps = {
  navbarTheme: "light",
};

export default Projects;
