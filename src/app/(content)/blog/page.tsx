"use client";

import React, { useContext, useEffect } from "react";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";

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
            <div className="grid grid-cols-2 gap-4">
              <div>A</div>
              <div>B</div>
            </div>
          </div>
        </div>
      </main>
      <Watermark text="BLOG" />
    </>
  );
};

export default BlogPage;
