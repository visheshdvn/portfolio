"use client";

import React, { useContext, useEffect, useRef } from "react";
import { About as AboutSection } from "@/src/components/PrimarySections";
import Image from "next/image";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";
import { useInView } from "framer-motion";

const About = () => {
  // @ts-ignore
  const { navData, setNavData } = useContext(SideNavContext);
  // console.log(navData);
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
        <div className="mt-10">
          <h1 className="font-primary pt-1 text-9xl font-medium mb-20">
            About.
          </h1>
          <div className="content-section mb-24">
            <div
              ref={fadeInRef}
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transform: isInView
                  ? "translate(0px, 0px)"
                  : "translate(0px, 16px)",
              }}
              className="grid grid-cols-7 gap-4"
            >
              <div className="col-span-4 pr-5">
                <AboutSection />
              </div>
              <div className="relative col-span-3">
                <div
                  className="absolute right-0 -top-32 w-[512px] h-[512px] border border-black select-none"
                >
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
      </main>
      <Watermark
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          transform: isInView ? "translate(0px, 0px)" : "translate(0px, 160px)",
        }}
        text="ABOUT"
      />
    </>
  );
};

export default About;
