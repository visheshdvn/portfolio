import React from "react";
import SectionHeader from "./utils/sectionHeader";

const Skills = () => {
  return (
    <section className="section-default">
      <div className="grid gap-0 grid-cols-2 h-full">
        <div className="h-full">
          <SectionHeader word1="Skills" theme="text-theme-skills" />
          <div
            style={{ maxWidth: "720px" }}
            className="font-secondary mt-24 text-xl"
          >
            <p className="mb-8">
              I am highly trained in both backend and frontend development. My
              skill is to create websites that are fast, performant, beautiful
              and SEO friendly.
            </p>
            <p className="mb-8">
              Throughout my development carrier I’ve gained extensive experience
              in creating E-commerce, blogs, portfolios, admin panels
              architectures that scales.
            </p>
            <p>
              If you want to create your own web solution do drop a message
              :&#41;
            </p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Skills;
