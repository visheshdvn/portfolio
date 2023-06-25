import React from "react";
import { latoFont, playfairDisplayFont } from "@/lib/fonts";

const Landing = () => {
  return (
    <section
      style={{
        height: "calc(100vh)",
        backgroundImage: `url(/portfoliobg.jpg)`,
      }}
      className="pt-[60px] bg-cover bg-no-repeat bg-center text-white snap-start relative"
    >
      <div className="bg-gradient-to-b mt-[-60px] h-screen from-black/90 to-black/95 w-full absolute z-0"></div>
      <div className="container mx-auto h-full flex 2xl:px-">
        <section className="2xl:w-[900px] xl:w-[800px] flex flex-col h-full z-10">
          <div className="2xl:h-[705px] relative">
            <div className="absolute left-[73px] top-[120px] z-10">
              <h3 style={latoFont.style} className="text-[22px] font-bold mb-3">
                Hi, I am
              </h3>
              <h1
                style={playfairDisplayFont.style}
                className="text-8xl font-medium mb-3"
              >
                Vishesh Dhawan
              </h1>
              <h3
                style={latoFont.style}
                className="text-lg font-normal text-[#757575] mb-[72px]"
              >
                Full-Stack web developer • Blogger
              </h3>
              <p className="2xl:max-w-[577px] font-serif text-lg leading-[1.45]">
                Full-stack developer and a blogger based in India. My passion is
                to convert ideas into reality with the power of code. I
                specialize in creating fast and SEO friendly web applications
                with the best technologies internet has to offer. <br />
                <br />
                Interested in working together? Drop a message.
              </p>
            </div>
          </div>
          <div className="h-px bg-borders-dark"></div>
          <div className="flex-1 flex items-center pl-[73px] space-x-20">
            <div className="w-[260px] font-serif text-[15px] leading-[1.45]">
              Skilled in creating scalable web applications with
              React.js/Next.js.
            </div>
            <div className="w-[260px] font-serif text-[15px] leading-[1.45]">
              Amateur blogger trying to make my way into the world of content
              creation.
            </div>
          </div>
        </section>
        {/*  */}
        <section className="flex-1 flex z-10">
          <div className="border-borders-dark border-x w-full flex justify-center px-3">
            <div
              style={{ backgroundImage: "url(/dummyface.png)" }}
              className="bg-cover bg-center bg-no-repeat h-full w-full max-w-[436px]"
            ></div>
          </div>
        </section>
        {/*  */}
        <div className="flex items-center 2xl:w-[73px] z-10">
          <div className="h-px bg-borders-dark w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
