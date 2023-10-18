import React from "react";
import Link from "next/link";
import clsx from "clsx";

const RightSideNav = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="fixed right-0 h-screen flex justify-center items-center 2xl:w-[90px] w-16 z-50">
      <Link href={link} className="-rotate-90">
        <span className={clsx("text-sm font-bold uppercase tracking-[12px]")}>
          {text}
        </span>
      </Link>
    </div>
  );
};

export default RightSideNav;
