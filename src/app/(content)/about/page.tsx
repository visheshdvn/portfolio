"use client";

import React, { useContext, useEffect } from "react";
import { About as AboutSection } from "@/src/components/PrimarySections";
import Image from "next/image";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";

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

  return (
    <>
      <main>
        <div className="mt-10">
          <h1 className="font-primary pt-1 text-9xl font-medium mb-20">
            About
          </h1>
          <div className="content-section mb-24">
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-4 pr-5">
                <AboutSection />
              </div>
              <div className="relative col-span-3">
                <div className="absolute right-0 -top-32 w-[512px] h-[512px] border border-black">
                  <Image
                    fill={true}
                    src="https://source.unsplash.com/random/512×512?face"
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
      <Watermark text="ABOUT." />
    </>
  );
};

export default About;
