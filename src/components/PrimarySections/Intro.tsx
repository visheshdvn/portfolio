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
        <div className="w-full h-full xl:scale-100 mx-auto xl:max-w-[calc(0.77*1280px)] 2xl:max-w-max 2xl:scale-[80%] 3xl:scale-[100%]">
          <div className="grid grid-cols-11 gap-4 px-3">
            <div className="col-span-5 flex items-end">
              <div className="">
                <h3 className="font-bold 2xl:text-2xl xl:text-xl mb-3 font-primary">
                  Hi, I am
                </h3>
                <h1 className="font-medium 2xl:text-[120px] xl:text-[80px] font-primary uppercase leading-none 2xl:mb-6 xl:mb-4">
                  Vishesh
                </h1>
                <h1 className="font-medium 2xl:text-[120px] xl:text-[80px] uppercase leading-none font-primary">
                  Dhawan
                </h1>
                <h2 className="leading-none 2xl:mt-10 xl:mt-6 font-medium 2xl:text-lg xl:text-sm text-[#757575] font-secondary">
                  Full-Stack web developer • Blockchain developer
                </h2>
              </div>
            </div>
            <div className="col-span-6 flex justify-between">
              <IconCard
                color="#6A1919"
                icon={<HeartIcon className="2xl:h-[88px] 2xl:w-[88px] xl:h-16 xl:w-16" />}
              />
              <IconCard
                color="#404040"
                icon={<PeaceIcon className="2xl:h-[88px] 2xl:w-[88px] xl:h-16 xl:w-16" />}
              />
              <IconCard
                color="#1E3A8A"
                icon={<CodeIcon className="2xl:h-[88px] 2xl:w-[88px] xl:h-16 xl:w-16" />}
              />
            </div>
          </div>
          <div className="border-b 2xl:mt-12 xl:mt-10 2xl:mb-14 xl:mb-10" />
          <div className="grid grid-cols-11 gap-4 px-3 2xl:text-lg xl:text-sm">
            <div className="col-span-5 font-medium font-primary 2xl:pr-14 xl:pr-8">
              I specialize in creating fast and SEO friendly web applications
              with the best technologies out there.
            </div>
            <div className="col-span-6 flex justify-between">
              <p className="text-left 2xl:w-52 xl:w-[148px] font-medium font-primary">
                Amateur blogger sharing everything I learn on the internet.
              </p>
              <p className="text-left 2xl:w-52 xl:w-[148px] font-medium font-primary">
                &ldquo;Certified Blockchain Architect&rdquo; via the blockchain
                council.
              </p>
              <p className="text-left 2xl:w-52 xl:w-[128px] font-medium font-primary">
                2 years work exp. as a software engineer in an MNC.
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
      className="2xl:w-52 xl:w-[148px] 2xl:h-[407px] xl:h-[280px] flex flex-col items-center justify-end 2xl:pb-10 xl:pb-6"
    >
      {icon}
    </div>
  );
}
export default Intro;
