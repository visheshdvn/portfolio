"use client";

import React, { useContext } from "react";
import { SideNavContext } from "@/src/context/sideNav";
import SideNav from "./atom";


const SideNavs = () => {
  // @ts-ignore
  const { navData } = useContext(SideNavContext);

  return (
    <>
      {navData.left ? (
        <SideNav
          variant="left"
          text={navData.left.text}
          link={navData.left.link}
        />
      ) : null}

      {navData.right ? (
        <SideNav
          variant="right"
          text={navData.right.text}
          link={navData.right.link}
        />
      ) : null}
    </>
  );
};

export default SideNavs;
