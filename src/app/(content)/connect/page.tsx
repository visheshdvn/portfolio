"use client";

import React, { useContext, useEffect } from "react";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Image from "next/image";
import Link from "next/link";
import ContentPageHeading from "@/src/components/elements/heading/contentPageHeading";

const ConnectPage = () => {
  // @ts-ignore
  const { navData, setNavData } = useContext(SideNavContext);

  useEffect(() => {
    setNavData<SideNavDataType>({
      ...navData,
      left: {
        text: "BLOG",
        link: "/blog",
      },
      right: null,
    });
  }, []);

  return (
    <>
      <main>
        <div className="mt-10">
          <ContentPageHeading
            text={"Connect"}
            className="text-white 3xl:mb-10 2xl:mb-8 xl:mb-6 lg:mb-20"
          />
          <div className="fixed -z-10 h-screen w-screen inset-0 god-creating-adam" />
          <div className="content-section mb-24 text-white">
            {/* photo section */}
            <div className="flex justify-center 3xl:mb-36 2xl:mb-24 xl:mb-16 lg:mb-24">
              <div className="relative 3xl:w-72 3xl:h-72 2xl:w-[272px] 2xl:h-[272px] xl:w-[248px] xl:h-[248px] lg:w-[272px] lg:h-[272px] flex justify-center items-center">
                <div className="relative rounded-full 3xl:w-52 3xl:h-52 2xl:w-48 2xl:h-48 xl:h-44 xl:w-44 lg:w-48 lg:h-48 overflow-hidden">
                  <Image
                    src={"/me_connect.jpg"}
                    alt="Vishesh Dhawan"
                    fill={true}
                    sizes="(max-width: 200px)"
                    placeholder="blur"
                    blurDataURL={"/me_connect.jpg"}
                    priority
                  />
                </div>

                {/* rotating text */}
                <div className="absolute w-full h-full animate-spin duration-10000">
                  <p className="font-secondary 2xl:text-2xl xl:text-xl font-bold lg:text-2xl">
                    {"Let's not be strangers. Let's not be strangers."
                      .split("")
                      .map((char, i) => {
                        return (
                          <span
                            style={{
                              transform: `rotate(${i * 7.6}deg)`,
                            }}
                            key={i}
                            className="absolute left-1/2 animate-fade 3xl:origin-[0_144px] 2xl:origin-[0_136px] xl:origin-[0_124px] lg:origin-[0_136px]"
                          >
                            {char}
                          </span>
                        );
                      })}
                  </p>
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="flex justify-between xl:flex-row flex-col space-y-14 xl:space-y-0 items-center">
              {[
                {
                  text: "LinkedIn",
                  url: "https://www.linkedin.com/in/visheshdvn/",
                },
                {
                  text: "Email",
                  url: "mailto:visheshdvn@gmail.com",
                },
                {
                  text: "GitHub",
                  url: "https://github.com/visheshdvn",
                },
              ].map((data, i) => (
                <ConnectBtn key={i} url={data.url} text={data.text} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

function ConnectBtn({ url, text }: { url: string; text: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex connect-btn-shadow justify-center items-center 2xl:w-[240px] 2xl:h-[74px] xl:w-[182px] xl:h-14 lg:w-[240px] lg:h-[74px] border-2 border-[#333] rounded-full font-secondary font-bold 2xl:text-2xl xl:text-xl lg:text-2xl"
    >
      {text}
    </Link>
  );
}

export default ConnectPage;
