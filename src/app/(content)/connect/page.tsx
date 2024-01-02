"use client";

import React, { useContext, useEffect } from "react";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";

const ConnectPage = () => {
  // @ts-ignore
  const { navData, setNavData } = useContext(SideNavContext);

  useEffect(() => {
    setNavData<SideNavDataType>({
      ...navData,
      left: {
        text: "BLOG",
        link: "/blog",
      },
      right: null,
    });
  }, []);

  return (
    <>
      <main>
        <div className="mt-10">
          <h1 className="font-primary pt-1 text-9xl font-medium mb-20 text-white">
            Connect.
          </h1>
          <div className="content-section mb-24">
            <div className="grid grid-cols-2 gap-4">
              <div>A</div>
              <div>B</div>
            </div>
          </div>
        </div>
      </main>
      <Watermark text="CONNECT" className="text-[#202020]" />
    </>
  );
};

export default ConnectPage;
