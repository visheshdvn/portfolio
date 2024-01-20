"use client";

import React, { useContext } from "react";
import { SideNavContext } from "@/src/context/sideNav";
import { ThemeContext } from "@/src/context/theme";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import {
  FaCircleArrowLeft as LeftArrow,
  FaCircleArrowRight as RightArrow,
} from "react-icons/fa6";

const BottomNav = () => {
  // @ts-ignore
  const { navData } = useContext(SideNavContext);
  // @ts-ignore
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn(
        "fixed bottom-0 text-white z-40 w-screen border-t h-10 md:h-10 flex lg:hidden bg-clip-padding backdrop-filter backdrop-blur-sm",
        {
          "bg-white/80": theme === "light",
          "bg-black/80 border-[#222]": theme === "dark",
        }
      )}
    >
      {navData.left ? (
        <NavBtn
          text={navData.left.text}
          link={navData.left.link}
          variant="left"
        />
      ) : null}

      {navData.right ? (
        <NavBtn
          text={navData.right.text}
          link={navData.right.link}
          variant="right"
        />
      ) : null}
    </div>
  );
};

export default BottomNav;

export interface BottomNavButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string;
  link: string;
  variant: "left" | "right";
}

const NavBtn: React.FC<BottomNavButtonProps> = ({
  text,
  link,
  variant,
  className,
  ...props
}) => {
  // @ts-ignore
  const { theme } = useContext(ThemeContext);

  return (
    <div
      {...props}
      className={cn(
        "flex-1 h-full flex justify-center items-center font-secondary font-bold text-sm leading-none md:text-base",
        { "text-black": theme === "light" }
      )}
    >
      <Link
        href={link}
        className={cn(
          "flex items-center leading-none flex-1 justify-center h-full transform transition-colors duration-200",
          {
            "active:bg-gray-100": theme === "light",
            "active:bg-neutral-950": theme === "dark",
          }
        )}
      >
        {variant === "left" && (
          <LeftArrow className="md:h-4 md:w-4 h-3 w-3 mr-3" />
        )}
        {text}
        {variant === "right" && (
          <RightArrow className="md:h-4 md:w-4 h-3 w-3 ml-3" />
        )}
      </Link>
    </div>
  );
};
