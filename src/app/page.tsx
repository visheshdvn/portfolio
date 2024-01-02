"use client";

import React, { useContext, useEffect } from "react";
import { Intro } from "@/src/components/PrimarySections";
import { SideNavContext } from "@/src/context/sideNav";

const Home = () => {
  // @ts-ignore
  const { navData, setNavData } = useContext(SideNavContext);

  useEffect(() => {
    setNavData({
      ...navData,
      right: {
        text: "ABOUT",
        link: "/about",
      },
      left: null,
    });
  }, [setNavData, navData]);

  return (
    <>
      <div className="h-screen w-screen overflow-hidden pt-[60px] text-white">
        <div id="home-sections-container" className="">
          <Intro />
        </div>
      </div>
    </>
  );
};

export default Home;
