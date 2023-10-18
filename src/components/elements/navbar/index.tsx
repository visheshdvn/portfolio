"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { cn } from "@/src/lib/utils";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/outline";
import { playfairDisplayFont, latoFont } from "@/src/lib/fonts";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Connect", href: "/connect" },
];

export default function Navbar({
  navbarTheme,
}: {
  navbarTheme?: "dark" | "light";
}) {
  const [theme, setTheme] = useState<"light" | "dark">();

  useEffect(() => {
    if (navbarTheme !== "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [navbarTheme, setTheme]);

  return (
    <>
      <Disclosure
        as="nav"
        className={cn(
          "fixed top-0 z-40 w-full bg-black/30 border-b border-[#202020]",
          {
            "bg-white": theme === "light",
          }
        )}
      >
        {({ open }) => (
          <>
            <div className="mx-auto px-14">
              <div className="relative flex items-center justify-center h-[60px]">
                {/* disclosure button */}
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* mame logo */}
                <div className="flex-1 flex space-x-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 33"
                    className="h-9 w-9"
                    fill="none"
                  >
                    <path
                      d="M7.75585 10.0732L12.4656 22.0379L17.1553 10.0732H19.0592L13.2873 24.3026H11.6439L5.85192 10.0732H7.75585Z"
                      className={cn("fill-white", {
                        "fill-black": theme === "light",
                      })}
                    />
                    <path
                      d="M24.9627 21.7129C23.8205 22.8376 22.3082 23.5167 20.7056 23.6342V23.0321C22.1378 22.916 23.4896 22.3039 24.5152 21.294C25.6597 20.1671 26.3042 18.637 26.3042 17.0399C26.3042 15.4428 25.6597 13.9127 24.5152 12.7857C23.4896 11.7759 22.1378 11.1638 20.7056 11.0477L20.7056 10.4456C22.3082 10.5631 23.8205 11.2422 24.9627 12.3668C26.2228 13.6075 26.9293 15.2886 26.9293 17.0399C26.9293 18.7911 26.2228 20.4722 24.9627 21.7129Z"
                      className={cn("stroke-white", {
                        "stroke-black": theme === "light",
                      })}
                    />
                    <line
                      x1="13.3203"
                      y1="23.3385"
                      x2="20.2588"
                      y2="23.3385"
                      className={cn("stroke-white", {
                        "stroke-black": theme === "light",
                      })}
                      strokeWidth="1.6083"
                    />
                    <path
                      d="M17.3255 10.717H20.2588"
                      className={cn("stroke-white", {
                        "stroke-black": theme === "light",
                      })}
                      strokeWidth="1.6083"
                    />
                    <rect
                      x="0.8"
                      y="-0.8"
                      width="31.4"
                      height="31.4"
                      rx="15.7"
                      transform="matrix(1 0 0 -1 0 31.4)"
                      className={cn("stroke-white", {
                        "stroke-black": theme === "light",
                      })}
                      strokeWidth="1.6"
                    />
                  </svg>
                  <div className="flex flex-col space-y-1">
                    <p
                      style={latoFont.style}
                      className={`leading-none tracking-[10.5px] text-sm ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Vishesh
                    </p>
                    <p
                      style={latoFont.style}
                      className={`leading-none text-sm tracking-[10.5px] ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Dhawan
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-shrink-0 items-center">
                  {/* nav links */}
                  <div className="hidden items-center md:flex">
                    <div className="flex xl:space-x-10 space-x-6">
                      {navigation.map((item) => (
                        <div className="flex space-x-1" key={item.name}>
                          <Link
                            style={playfairDisplayFont.style}
                            href={item.href}
                            className={cn(
                              "font-primary text-white text-sm font-normal hover:underline decoration-dotted",
                              { "text-black": theme === "light" }
                            )}
                          >
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 justify-end bsolute inset-y-0 right-0 flex items-center md:ml-6 md:pr-0">
                  {/* <button
                    type="button"
                    className="hidden rounded-full bg-white p-1 text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}
                  <Link href={"/search"} legacyBehavior>
                    <button className="mr-4 h-5 w-5 outline-none">
                      <SearchIcon className="h-full w-full stroke-white" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{ height: "1px" }}
              className="w-full bg-black dark:bg-[#E9E9E9]"
            ></div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 border px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    passHref
                    key={item.name}
                    legacyBehavior
                  >
                    <a className="font-primary text-black dark:text-white block rounded-md px-3 py-2 text-base font-medium">
                      {item.name}
                    </a>
                  </Link>
                ))}
                <hr />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

function ItemButton({ text, action }: { text: string; action: () => void }) {
  return (
    <button
      onClick={action}
      className="font-primary block w-full px-4 py-2 text-left text-sm font-bold text-gray-700 hover:bg-gray-100"
    >
      {text}
    </button>
  );
}

function ItemLink({ text, link }: { text: string; link: string }) {
  return (
    <Link href={`${link}`} legacyBehavior>
      <a className="font-primary block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100">
        {text}
      </a>
    </Link>
  );
}
