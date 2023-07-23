import React from "react";
import LeftSideNav from "../elements/sidenav/leftSideNav";
import RightSideNav from "../elements/sidenav/rightSideNav";
import { playfairDisplayFont } from "@/lib/fonts";

const ContentPage = ({
  title,
  children,
  rightSideNavLink,
  rightSideNavText,
  leftSideNavLink,
  leftSideNavText,
}: {
  title: string;
  children: React.ReactNode;
  rightSideNavText?: string;
  leftSideNavText?: string;
  rightSideNavLink?: string;
  leftSideNavLink?: string;
}) => {
  return (
    <>
      {rightSideNavLink && rightSideNavText && (
        <RightSideNav text={rightSideNavText} link={rightSideNavLink} />
      )}
      {leftSideNavLink && leftSideNavText && (
        <LeftSideNav text={leftSideNavText} link={leftSideNavLink} />
      )}
      <div className="pt-[106px] container px-0 pb-28">
        <header>
          <div className="flex justify-center">
            <h1
              style={playfairDisplayFont.style}
              className="font-medium xl:text-9xl lg:text-[110px] leading-[1] xl:w-full lg:w-[840px]"
            >
              {title}
            </h1>
          </div>
        </header>
        <section className="mt-28">{children}</section>
      </div>
    </>
  );
};

export default ContentPage;
