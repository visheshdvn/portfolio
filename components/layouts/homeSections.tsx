import React from "react";
import { playfairDisplayFont } from "@/lib/fonts";
// import { useIsOverflow } from "@/utils/hasYOverflow";

interface LayoutType {
  heading: string;
  children?: JSX.Element;
}

const HomeSections = ({ heading, children }: LayoutType) => {
  return (
    <>
      {/* head tags */}

      {/* body */}
      <section
        style={{ perspective: "500px" }}
        className="layout-screen snap-start"
      >
        <h1 className="font-medium text-7xl mb-14">
          <span style={playfairDisplayFont.style}>{heading}</span>
        </h1>
        <div className="pl-[90px]">{children}</div>
      </section>
    </>
  );
};

export default HomeSections;
