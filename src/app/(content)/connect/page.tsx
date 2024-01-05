"use client";

import React, { useContext, useEffect } from "react";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";
import Image from "next/image";
import Link from "next/link";

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
          <h1 className="font-primary pt-1 text-9xl font-medium mb-10 text-white">
            Connect.
          </h1>
          <div className="fixed -z-10 h-screen w-screen inset-0 god-creating-adam"></div>
          <div className="content-section mb-24 text-white">
            {/* photo section */}
            <div className="flex justify-center mb-32">
              <div className="relative w-72 h-72 flex justify-center items-center">
                <div className="relative rounded-full w-52 h-52 overflow-hidden">
                  <Image
                    src={"/me_connect.jpg"}
                    alt="Vishesh Dhawan"
                    fill={true}
                    sizes="(max-width: 200px)"
                  />
                </div>

                {/* rotating text */}
                <div className="absolute w-full h-full animate-spin duration-10000">
                  <p className="font-secondary text-2xl font-bold">
                    {"Let's not be strangers. Let's not be strangers."
                      .split("")
                      .map((char, i) => {
                        return (
                          <span
                            style={{
                              transform: `rotate(${i * 7.6}deg)`,
                              transformOrigin: "0 144px",
                            }}
                            key={i}
                            className="absolute left-1/2 animate-fade"
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
            <div className="flex justify-between">
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
      className="flex connect-btn-shadow justify-center items-center max-w-[240px] h-[74px] border-2 border-[#333] rounded-full w-full font-secondary font-bold text-2xl"
    >
      {text}
    </Link>
  );
}

export default ConnectPage;
