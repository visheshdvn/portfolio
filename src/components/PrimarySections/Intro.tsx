import { hexToRGB } from "@/utils/utilityFunctions";
import React from "react";
import { playfairDisplayFont, latoFont } from "@/src/lib/fonts";

const Intro = () => {
  return (
    <section
      style={{
        height: "calc(100vh - 60px)",
      }}
      className="bg-black flex items-center justify-center"
    >
      <div className="container z-10">
        <div className="w-full h-full">
          <div className="grid grid-cols-11 gap-4 px-3">
            <div className="col-span-5 flex items-end">
              <div className="">
                <h3
                  style={playfairDisplayFont.style}
                  className="font-bold text-2xl mb-3"
                >
                  Hi, I am
                </h3>
                <h1
                  style={playfairDisplayFont.style}
                  className="font-medium text-[120px] uppercase leading-none mb-6
                "
                >
                  Vishesh
                </h1>
                <h1
                  style={playfairDisplayFont.style}
                  className="font-medium text-[120px] uppercase leading-none"
                >
                  Dhawan
                </h1>
                <h2
                  style={latoFont.style}
                  className="leading-none mt-10 font-medium text-lg text-[#757575]"
                >
                  Full-Stack web developer • Blockchain developer
                </h2>
              </div>
            </div>
            <div className="col-span-6 flex justify-between">
              <IconCard color="#6A1919" />
              <IconCard color="#404040" />
              <IconCard color="#1E3A8A" />
            </div>
          </div>
          <div className="border-b mt-12 mb-14" />
          <div className="grid grid-cols-11 gap-4 px-3">
            <div className="col-span-5 border">1</div>
            <div className="col-span-6 flex justify-between">
              <p className="border text-left w-52">A</p>
              <p className="border text-left w-52">A</p>
              <p className="border text-left w-52">A</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function IconCard({ color }: { color: string }) {
  const hexColor = hexToRGB(color);

  return (
    <div
      style={{
        backgroundColor: `rgba(${hexColor?.r}, ${hexColor?.g}, ${hexColor?.b}, 60%)`,
      }}
      className="w-52 h-[407px] flex flex-col items-center justify-end pb-10"
    >
      A
    </div>
  );
}
export default Intro;
