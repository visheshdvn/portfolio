import Head from "next/head";
import pbg from "@/public/portfoliobg.jpg";
import { playfairDisplayFont, latoFont } from "@/lib/fonts";
// linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)),
export default function Home() {
  return (
    <>
      <main
        style={{
          height: "calc(100vh)",
          backgroundImage: `url(/portfoliobg.jpg)`,
        }}
        className="pt-[60px] mt-[-60px] bg-cover bg-no-repeat bg-center"
      >
        <div className="bg-gradient-to-b mt-[-60px] h-screen from-black/90 to-black/90 w-full absolute z-0"></div>
        <div className="container mx-auto h-full flex">
          {/* details section */}
          <section className="2xl:w-[927px] flex flex-col h-full z-10">
            <div className="2xl:h-[705px] relative">
              <div className="absolute left-[93px] top-24 z-10">
                <h3
                  style={latoFont.style}
                  className="text-[22px] font-bold mb-3"
                >
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
                  Full-stack developer and a blogger based in India. My passion
                  is to convert ideas into reality with the power of code. I
                  specialize in creating fast and SEO friendly web applications
                  with the best technologies internet has to offer. <br />
                  <br />
                  Interested in working together? Drop a message.
                </p>
              </div>
            </div>
            <div className="h-px bg-borders-dark"></div>
            <div className="flex-1 flex items-center pl-[93px] space-x-20">
              <div className="w-[250px] font-serif text-sm leading-[1.45]">
                Skilled in creating scalable web applications with
                React.js/Next.js.
              </div>
              <div className="w-[250px] font-serif text-sm leading-[1.45]">
                Amateur blogger trying to make my way into the world of content
                creation.
              </div>
            </div>
          </section>
          {/* face section */}
          <section className="flex-1 flex z-10">
            <div className="w-[452px] border-borders-dark border-x px-3">
              <div
                style={{ backgroundImage: "url(/dummyface.png)" }}
                className="bg-cover bg-center bg-no-repeat h-full"
              ></div>
            </div>
            <div className="flex items-center flex-1">
              <div className="h-px bg-borders-dark w-full"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
