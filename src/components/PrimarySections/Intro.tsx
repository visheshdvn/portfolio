import { hexToRGB } from "@/src/utils/utilityFunctions";
import React from "react";
import Image from "next/image";

const Intro = () => {
  // return <></>
  return (
    <section
      // style={{
      //   height: "calc(100vh - 56px)",
      // }}
      className=""
    >
      <div className="container px-0 xl:px-8 z-10 -mt-14">
        <div className="w-full h-full xl:scale-100 mx-auto xl:max-w-[calc(0.77*1280px)] 2xl:max-w-max 2xl:scale-[80%] 3xl:scale-[100%]">
          <div className="grid grid-cols-11 gap-4 px-3">
            <div className="xl:col-span-5 col-span-11 order-2 xl:order-1 flex items-end md:px-8 xl:px-0">
              <div className="md:ml-5 lg:ml-8 xl:ml-0">
                <h3 className="font-bold 2xl:text-2xl xl:text-xl md:mb-2 font-primary md:text-2xl text-xl lg:text-3xl text-center md:text-left mb-4">
                  Hi, I am
                </h3>
                <h1 className="font-medium 2xl:text-[120px] xl:text-[80px] lg:text-[90px] md:text-[68px] text-[44px] font-primary uppercase leading-none 2xl:mb-2 xl:mb-4 block md:inline xl:block mb-2 md:mb-0 text-center md:text-left">
                  Vishesh <span className="md:hidden">Dhawan</span>
                </h1>
                <h1 className="font-medium 2xl:text-[120px] xl:text-[80px] lg:text-[90px] md:text-[68px] text-6xl font-primary uppercase leading-none md:inline xl:block hidden">
                  Dhawan
                </h1>
                <h2 className="leading-none 2xl:mt-8 xl:mt-6 md:mt-3 font-medium 2xl:text-lg xl:text-sm lg:text-xl md:text-lg hidden md:block text-[#757575] font-secondary">
                  Full-Stack web developer • Blockchain developer
                </h2>
                <ul className="lg:mt-14 md:mt-10 mt-10 md:ml-10 mx-auto md:mx-0 font-medium font-primary lg:text-2xl text-base md:w-3/4 w-5/6 md:space-y-7 space-y-5 lg:space-y-11 xl:hidden text-center md:text-left">
                  <li>
                    I am a Full-Stack Web & Blockchain developer with a passion
                    for creating applications for the web.
                  </li>
                  <li>
                    “Certified Blockchain Architect” via the blockchain council.
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative xl:col-span-6 col-span-11 order-1 xl:order-2 overflow-hidden md:overflow-visible xl:overflow-hidden">
              <div className="md:aspect-w-16 md:aspect-h-9 transform xl:translate-x-0 lg:-translate-x-[100px] md:-translate-x-[50px] lg:h-[542px] md:h-[407px] h-[264px] w-[264px] md:w-auto xl:h-auto mb-6 md:mb-8 xl:mb-0 rounded-full md:rounded-none overflow-hidden md:overflow-visible mx-auto md:mx-0">
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
              I am a Full-Stack Web & Blockchain developer with a passion for
              creating applications for the web.
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
