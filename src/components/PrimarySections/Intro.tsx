import { hexToRGB } from "@/src/utils/utilityFunctions";
import React from "react";
import Image from "next/image";

const Intro = () => {
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
            <div className="xl:col-span-5 col-span-11 order-2 xl:order-1 flex items-end">
              <div className="ml-5 lg:ml-8 xl:ml-0">
                <h3 className="font-bold 2xl:text-2xl xl:text-xl mb-3 font-primary text-2xl lg:text-3xl">
                  Hi, I am
                </h3>
                <h1 className="font-medium 2xl:text-[120px] xl:text-[80px] lg:text-[90px] md:text-[68px] font-primary uppercase leading-none 2xl:mb-6 xl:mb-4 inline xl:block">
                  Vishesh{" "}
                </h1>
                <h1 className="font-medium 2xl:text-[120px] xl:text-[80px] lg:text-[90px] md:text-[68px] font-primary uppercase leading-none inline xl:block">
                  Dhawan
                </h1>
                <h2 className="leading-none 2xl:mt-10 xl:mt-6 md:mt-3 font-medium 2xl:text-lg xl:text-sm lg:text-xl text-lg text-[#757575] font-secondary">
                  Full-Stack web developer • Blockchain developer
                </h2>
                <ul className="lg:mt-14 mt-10 ml-10 font-medium font-primary lg:text-2xl text-lg w-3/4 space-y-7 lg:space-y-11 xl:hidden">
                  <li>
                    I specialize in creating fast and SEO friendly web
                    applications with the best technologies internet has to
                    offer.
                  </li>
                  <li>
                    “Certified Blockchain Architect” via the blockchain council.
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative xl:col-span-6 col-span-11 order-1 xl:order-2 xl:overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 transform xl:translate-x-0 lg:-translate-x-[100px] md:-translate-x-[80px] lg:h-[542px] md:h-[407px] xl:h-auto mb-8 xl:mb-0">
                <Image
                  src={"/me_home_red.jpg"}
                  alt="Vishesh Dhawan"
                  fill
                  className="object-center object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          {/* hidden for under md */}
          <div className="border-b 2xl:mt-12 xl:mt-10 2xl:mb-14 xl:mb-10 xl:block hidden" />
          <div className="grid-cols-11 gap-4 px-3 2xl:text-lg xl:text-sm xl:grid hidden">
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
