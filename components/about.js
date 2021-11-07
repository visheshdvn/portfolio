import React from "react";
import SectionHeader from "./utils/sectionHeader";

const About = () => {
  return (
    <section id="about" className="min-h-screen pl-14 pt-6">
      <div className="grid grid-cols-2 gap-0">
        <div className="col-auto">
          <SectionHeader word1="About" word2="Me" theme="text-theme-about" />

          <div
            style={{ maxWidth: "720px" }}
            className="font-secondary mt-24 text-xl"
          >
            <p className="mb-8">
              Hello Folks! My name is Vishesh Dhawan and I am a Full stack web
              developer and a blockchain smart contracts based in India. I have
              2 years of professional experience in creating fast and performant
              and SEO friendly websites.
            </p>
            <p className="mb-8">
              I have a diverse set of skills in both frontend and backend web
              development.
            </p>
            <p>
              If you are interested in launching your own blog/personal
              portfolio/ecommerce website or any kind of web solutiond, feel
              free to drop a message.
            </p>
          </div>
        </div>
        <div className="col-auto">
          <div className="h-full w-full">
            <div
              style={{ width: "400px", height: "400px" }}
              className="relative mx-auto transform -translate-x-16 translate-y-28"
            >
              <div className="border-4 border-theme-about absolute w-full h-full top-8 -left-8 z-0"></div>
              <div className="border-4 border-white absolute w-full h-full -top-8 -right-8 z-0"></div>
              <img src="face-front.png" className="w-full h-full z-10 relative" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
