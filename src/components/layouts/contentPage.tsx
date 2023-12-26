import React from "react";
import SideNav from "../elements/sidenav";

const ContentPage = ({
  title,
  children,
  rightSideNavLink,
  rightSideNavText,
  leftSideNavLink,
  leftSideNavText,
}: {
  title: string;
  children?: React.ReactNode;
  rightSideNavText?: string;
  leftSideNavText?: string;
  rightSideNavLink?: string;
  leftSideNavLink?: string;
}) => {
  return (
    <>
      {rightSideNavLink && rightSideNavText && (
        <SideNav
          variant="right"
          text={rightSideNavText}
          link={rightSideNavLink}
        />
      )}
      {leftSideNavLink && leftSideNavText && (
        <SideNav variant="left" text={leftSideNavText} link={leftSideNavLink} />
      )}
      <div className="pt-[106px] container px-0 pb-28">
        <header>
          <div className="flex justify-center">
            <h1 className="font-medium xl:text-9xl lg:text-[110px] leading-[1] xl:w-full lg:w-[840px] font-primary">
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
