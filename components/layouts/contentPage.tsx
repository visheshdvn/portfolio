import React from "react";
import LeftSideNav from "../elements/sidenav/leftSideNav";
import RightSideNav from "../elements/sidenav/rightSideNav";
import { playfairDisplayFont } from "@/lib/fonts";

const ContentPage = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <RightSideNav text="blog" link="/blog" />
      <LeftSideNav text="home" link="/" />
      <div className="pt-[106px] container px-0 pb-28">
        <header>
          <h1
            style={playfairDisplayFont.style}
            className="font-medium 2xl:text-9xl"
          >
            {title}
          </h1>
        </header>
        <section className="mt-28">{children}</section>
      </div>
    </>
  );
};

export default ContentPage;
