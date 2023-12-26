import React from "react";
import Link from "next/link";

const LeftSideNav = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="fixed left-0 h-screen flex justify-center items-center 2xl:w-[90px] w-16 z-50">
      <Link href={link} className="-rotate-90">
        <span className="text-sm uppercase font-bold tracking-[12px] text-black">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default LeftSideNav;