import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <nav className="bg-black h-screen left-0 fixed lg:w-36">
      <div className="h-full w-full relative">
        <div className="w-full h-auto flex justify-center mt-14">
          <Link href="/#home">
            <img src="namelogo-white.svg" className="w-16 h-16 cursor-pointer" />
          </Link>
        </div>

        <ul className="list-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/#about">
            <li className="mb-10 text-xl cursor-pointer font-secondary transform transition-all duration-300 hover:text-theme-about">
              About
            </li>
          </Link>
          <Link href="/#resume">
            <li className="mb-10 text-xl cursor-pointer font-secondary transform transition-all duration-300 hover:text-theme-resume">
              Resume
            </li>
          </Link>
          <Link href="/#projects">
            <li className="mb-10 text-xl cursor-pointer font-secondary transform transition-all duration-300 hover:text-theme-projects">
              Projects
            </li>
          </Link>
          <Link href="/#blog">
            <li className="mb-10 text-xl cursor-pointer font-secondary transform transition-all duration-300 hover:text-theme-blog">
              Blog
            </li>
          </Link>
          <Link href="/#skills">
            <li className="mb-10 text-xl cursor-pointer font-secondary transform transition-all duration-300 hover:text-theme-skills">
              Skills
            </li>
          </Link>
          <Link href="/#contact">
            <li className="mb-16 text-xl cursor-pointer font-secondary transform transition-all duration-300 hover:text-theme-contact">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
