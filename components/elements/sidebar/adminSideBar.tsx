import React, { useState } from "react";
import { useRouter } from "next/router";
import { Popover } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";

import {
  HiTag as TagIconSolid,
  HiOutlineTag as TagIconOutline,
  HiChevronUp as UpArrow,
} from "react-icons/hi";
import {
  MdTopic as TopicSelected,
  MdOutlineTopic as TopicNotSelected,
} from "react-icons/md";
import {
  AiFillEye as ChannelSelected,
  AiOutlineEye as ChannelNotSelected,
  AiOutlineFileText as BlogPostsNotSelected,
  AiFillFileText as BlogpostSelected,
} from "react-icons/ai";
// import { latoFont } from "@/lib/fonts";
import clsx from "clsx";

const blogpostsOutline = <BlogPostsNotSelected className="mr-2 h-5 w-5" />;
const blogpostsSolid = <BlogpostSelected className="mr-2 h-5 w-5" />;
const channelOutline = (
  <ChannelNotSelected className="mr-2 h-5 w-5 stroke-white" />
);
const channelSolid = <ChannelSelected className="mr-2 h-5 w-5 stroke-white" />;
const topicOutline = <TopicNotSelected className="mr-2 h-5 w-5" />;
const topicSolid = <TopicSelected className="mr-2 h-5 w-5" />;
const tagsOutline = <TagIconOutline className="mr-2 h-5 w-5" />;
const tagsSolid = <TagIconSolid className="mr-2 h-5 w-5" />;
// import { Label } from "@/components/ui/label"
// defaultIcon={<>{TopicNotSelected}</>}
//             checkedIcon={<>{TopicSelected}</>}
const sideBarSections = [
  {
    head: { name: "Content" },
    navs: [
      {
        name: "BlogPosts",
        icons: {
          defaultIcon: blogpostsOutline,
          selectedIcon: blogpostsSolid,
        },
        link: "/admin/blogposts",
      },
      // {
      //   name: "Topics",
      //   link: "/admin/topics",
      //   icons: {
      //     defaultIcon: topicOutline,
      //     selectedIcon: topicSolid,
      //   },
      // },
      // {
      //   name: "Tags",
      //   link: "/admin/tags",
      //   icons: {
      //     defaultIcon: tagsOutline,
      //     selectedIcon: tagsSolid,
      //   },
      // },
    ],
  },
  {
    head: { name: "Management" },
    navs: [
      {
        name: "Site Information",
        icons: {
          defaultIcon: blogpostsOutline,
          selectedIcon: blogpostsSolid,
        },
        link: "/admin/info",
      },
      {
        name: "Products",
        link: "/admin/products",
        icons: {
          defaultIcon: topicOutline,
          selectedIcon: topicSolid,
        },
      },
    ],
  },
];

const LeftSideBar = () => {
  const { data: session, status } = useSession();
  let user = undefined;
  if (session) {
    user = session.user;
  }

  const router = useRouter();

  return (
    <>
      <div className="w-80">
        <div
          // style={{}}
          className="font-primary fixed flex h-screen w-80 items-center justify-center"
        >
          <div className="relative h-full w-full pl-8 bg-black">
            {/* CMS LOGO */}
            <div className="my-8 flex text-white">
              <div className="flex w-full">
                <div className="flex w-4/5">
                  <a href="/">
                    <div
                      style={{
                        backgroundImage: `url(/logo/Logo-SimpletextDark.png)`,
                      }}
                      className="h-10 w-10 rounded-full border border-zinc-50 bg-cover bg-center"
                    ></div>
                  </a>
                  <h4 className="ml-4 flex items-center text-3xl font-bold">
                    CMS
                  </h4>
                </div>
                {/* <div className="flex flex-1 items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <Switch
                      onCheckedChange={() => {
                        if (theme === "light") {
                          setTheme("dark");
                        } else {
                          setTheme("light");
                        }
                      }}
                      id="airplane-mode"
                    />
                  </div>
                </div> */}
              </div>
            </div>

            {/* content */}
            <div className="text-[#979797]">
              <div className="space-y-16">
                {sideBarSections.map((section, i) => {
                  return <SideBarSection section={section} key={i} />;
                })}
              </div>
            </div>

            {/* user info */}
            {user && (
              <div className="absolute bottom-8 left-1/2 flex w-60 -translate-x-1/2 transform text-white">
                <div
                  style={{ backgroundImage: `url(${user.dp})` }}
                  className="mr-4 h-12 w-12 rounded-full bg-cover bg-center bg-white"
                ></div>
                <div className="flex-1 flex-col justify-around">
                  <h4 className="text-base font-semibold">
                    {user.firstname} {user.lastname || ""}
                  </h4>
                </div>
                <div className="flex items-center w-4">
                  <Popover className="relative">
                    <Popover.Button className="border-none outline-none">
                      <UpArrow className="h-4 w-4" />
                    </Popover.Button>
                    <Popover.Panel className="absolute -top-16 -left-20 z-10 overflow-hidden rounded-lg border-2 bg-white px-2 py-1">
                      <div className="text-grayMain w-24 text-center">
                        <button
                          onClick={() => signOut()}
                          className="rounded-lg text-sm font-bold text-black"
                        >
                          Sign Out
                        </button>
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function SideBarSection({ section }) {
  return (
    <div className="">
      <h3 className="font-regular mb-6 text-lg">{section.head.name}</h3>
      <ul className="space-y-[19px]">
        {section.navs.map((nav, i) => (
          <SideBarSectionItem nav={nav} key={i} />
        ))}
      </ul>
    </div>
  );
}

function SideBarSectionItem({ nav }) {
  const selected = GetSelection(nav);

  return (
    <li className={clsx("flex", { "text-white": selected })}>
      <a href={nav.link} className="flex w-4/5 items-center">
        {!!nav.icons && !selected && nav.icons.defaultIcon}
        {!!nav.icons && selected && nav.icons.selectedIcon}
        <h4 className="ml-2 text-base font-normal leading-none">{nav.name}</h4>
      </a>
      <div className="flex flex-1 items-center justify-center">
        {selected && (
          <div className="aspect-1 w-[6px] rounded-full bg-white"></div>
        )}
      </div>
    </li>
  );
}

function GetSelection(nav): boolean {
  const router = useRouter();
  // return nav.link === router.route;
  return router.route.startsWith(nav.link);
}

function PathOption({ checked, text, defaultIcon, checkedIcon }) {
  return (
    <div
      className={`font-primary flex h-14 w-60 cursor-pointer items-center pl-5 ${
        checked ? "font-bold text-white" : "font-medium text-gray-500"
      }`}
    >
      {checked ? checkedIcon : defaultIcon}
      <span>{text}</span>
    </div>
  );
}

export default LeftSideBar;
