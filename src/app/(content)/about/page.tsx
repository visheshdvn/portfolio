"use client";

import React, { useContext, useEffect, useRef } from "react";
import { About as AboutSection } from "@/src/components/PrimarySections";
import Image from "next/image";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";
import { useInView } from "framer-motion";
import ContentPageHeading from "@/src/components/elements/heading/contentPageHeading";

const About = () => {
  // @ts-ignore
  const { navData, setNavData } = useContext(SideNavContext);

  useEffect(() => {
    setNavData<SideNavDataType>({
      ...navData,
      right: {
        text: "PROJECTS",
        link: "/projects",
      },
      left: {
        text: "HOME",
        link: "/",
      },
    });
  }, []);

  const fadeInRef = useRef(null);
  const isInView = useInView(fadeInRef, { once: true });

  return (
    <>
      <main>
        <div className="content-page-position">
          <ContentPageHeading text="About." />
          <div className="content-section mb-24">
            <div
              ref={fadeInRef}
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                transform: isInView
                  ? "translate(0px, 0px)"
                  : "translate(0px, 16px)",
              }}
              className="grid grid-cols-7 gap-4"
            >
              <div className="xl:col-span-4 col-span-7 2xl:pr-5 xl:pr-3 order-2 xl:order-1">
                <AboutSection />
              </div>
              <div className="xl:col-span-3 col-span-7 order-1 xl:order-2">
                <div className="w-full xl:relative flex xl:block justify-center mb-12 xl:mb-0">
                  <div className="xl:absolute relative right-0 3xl:-top-32 2xl:-top-[120px] xl:-top-[88px] 3xl:w-[512px] 3xl:h-[512px] 2xl:w-[412px] 2xl:h-[412px] xl:w-[341px] xl:h-[341px] lg:h-96 lg:w-96 md:w-[341px] md:h-[341px] border border-black select-none">
                    <Image
                      fill={true}
                      src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=512&auto=format&fit=crop"
                      // src="https://source.unsplash.com/random/512×512?face"
                      alt="Vishesh Dhawan"
                      priority
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Watermark
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          transform: isInView ? "translate(0px, 0px)" : "translate(0px, 160px)",
        }}
        text="ABOUT"
      />
    </>
  );
};

export default About;
