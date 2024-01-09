import { hexToRGB } from "@/src/utils/utilityFunctions";
import React from "react";
import { IoMdHeart as HeartIcon } from "react-icons/io";
import { TbPeace as PeaceIcon } from "react-icons/tb";
import { LuCode2 as CodeIcon } from "react-icons/lu";

const Intro = () => {
  // console.log(window.devicePixelRatio);
  // const makeSmaller = window.devicePixelRatio === 1.25;
  // console.log(makeSmaller);

  return (
    <section
      style={{
        height: "calc(100vh - 56px)",
      }}
      className="flex items-center"
    >
      <div className="container z-10 -mt-[56px]">
        <div className="w-full h-full xl:scale-[90%] 2xl:scale-[80%] 3xl:scale-[100%]">
          <div className="grid grid-cols-11 gap-4 px-3">
            <div className="col-span-5 flex items-end">
              <div className="">
                <h3 className="font-bold text-2xl mb-3 font-primary">
                  Hi, I am
                </h3>
                <h1 className="font-medium text-[120px] font-primary uppercase leading-none mb-6">
                  Vishesh
                </h1>
                <h1 className="font-medium text-[120px] uppercase leading-none font-primary">
                  Dhawan
                </h1>
                <h2 className="leading-none mt-10 font-medium text-lg text-[#757575] font-secondary">
                  Full-Stack web developer • Blockchain developer
                </h2>
              </div>
            </div>
            <div className="col-span-6 flex justify-between">
              <IconCard
                color="#6A1919"
                icon={<HeartIcon className="h-[88px] w-[88px]" />}
              />
              <IconCard
                color="#404040"
                icon={<PeaceIcon className="h-[88px] w-[88px]" />}
              />
              <IconCard
                color="#1E3A8A"
                icon={<CodeIcon className="h-[88px] w-[88px]" />}
              />
            </div>
          </div>
          <div className="border-b mt-12 mb-14" />
          <div className="grid grid-cols-11 gap-4 px-3">
            <div className="col-span-5 text-lg font-medium font-primary">
              I specialize in creating fast and SEO friendly web applications
              with the best technologies out there.
            </div>
            <div className="col-span-6 flex justify-between">
              <p className="text-left w-52 text-lg font-medium font-primary">
                Amateur blogger sharing everything I learn on the internet.
              </p>
              <p className="text-left w-52 text-lg font-medium font-primary">
                &ldquo;Certified Blockchain Architect&rdquo; via the blockchain
                council.
              </p>
              <p className="text-left w-52 text-lg font-medium font-primary">
                2 years work experience as a software engineer in an MNC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function IconCard({ color, icon }: { color: string; icon: React.ReactNode }) {
  const hexColor = hexToRGB(color);

  return (
    <div
      style={{
        backgroundColor: `rgba(${hexColor?.r}, ${hexColor?.g}, ${hexColor?.b}, 60%)`,
      }}
      className="w-52 h-[407px] flex flex-col items-center justify-end pb-10"
    >
      {icon}
    </div>
  );
}
export default Intro;
