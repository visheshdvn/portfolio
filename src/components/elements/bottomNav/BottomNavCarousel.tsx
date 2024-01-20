"use client";

import React, { useContext, useEffect, useRef } from "react";
import { SideNavContext } from "@/src/context/sideNav";
import { ThemeContext } from "@/src/context/theme";
import { cn } from "@/src/lib/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter, usePathname } from "next/navigation";

const PAGES = [
  { text: "HOME", link: "/" },
  { text: "ABOUT", link: "/about" },
  { text: "PROJECTS", link: "/projects" },
  { text: "BLOG", link: "/blog" },
  { text: "CONNECT", link: "/connect" },
];

const BottomNavCarousel = () => {
  // @ts-ignore
  const { navData } = useContext(SideNavContext);
  const slickRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname);

  // @ts-ignore
  const { theme } = useContext(ThemeContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (slickRef.current) {
      const slider = slickRef.current as Slider;
      const ind = PAGES.findIndex((page) => page.link === pathname);
      slider.slickGoTo(ind, false);
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed w-screen bottom-0 z-40 border-t h-10 font-secondary font-bold text-sm bg-clip-padding backdrop-filter backdrop-blur-sm lg:hidden",
        {
          "bg-white/80 text-black": theme === "light",
          "bg-black/80 border-[#222] text-white": theme === "dark",
        }
      )}
    >
      <Slider
        ref={slickRef}
        {...settings}
        swipeToSlide
        centerPadding="60px"
        className="w-full h-full"
        afterChange={(next) => router.push(PAGES[next].link)}
        nextArrow={<></>}
      >
        <div className="relative h-10 overflow-hidden animate-btm-carousel-on-initial-load">
          <span className="absolute transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
            {PAGES[0].text}
          </span>
        </div>
        {PAGES.slice(1, PAGES.length - 1).map((page, i) => {
          return (
            <div key={i} className="relative h-10 overflow-hidden animate-btm-carousel-on-initial-load">
              <span className="absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2">
                {PAGES[i].text}
              </span>
              <span className="absolute transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
                {page.text}
              </span>
            </div>
          );
        })}
        <div className="relative h-10 overflow-hidden animate-btm-carousel-on-initial-load">
          <span className="absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2">
            {PAGES[PAGES.length - 2].text}
          </span>
          <span className="absolute transform top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
            {PAGES[PAGES.length - 1].text}
          </span>
        </div>
        <div className="relative h-10 overflow-hidden animate-btm-carousel-on-initial-load">
          <span className="absolute transform top-1/2 -translate-y-1/2 left-0 -translate-x-1/2">
            {PAGES[PAGES.length - 1].text}
          </span>
        </div>
      </Slider>
    </div>
  );
};

export default BottomNavCarousel;
