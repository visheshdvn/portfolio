import React from "react";
import SectionHeader from "./utils/sectionHeader";

const Blog = () => {
  return (
    <section className="section-default w-11/12">
      <SectionHeader word1="Blog" theme="text-theme-blog" />
      <div className="flex flex-wrap mt-16">
        <Blogpost title="The best Web Developer - Qustions & Answers" />
        <Blogpost title="The best Web Developer - Qustions & Answers" />
        <Blogpost title="The best Web Developer - Qustions & Answers" />
        <Blogpost title="The best Web Developer - Qustions & Answers" />
      </div>
      <div className="w-11/12 flow-root">
        <div className="float-right">
          <a className="uppercase font-primary tracking-wider text-theme-blog pb-1 px-2 border-b border-theme-blog">View all -&gt;</a>
        </div>
      </div>
    </section>
  );
};

function Blogpost({ title, date, excerpt }) {
  return (
    <article className="w-1/2 pr-40 h-64">
      <h3 className="font-primary text-theme-blog text-3xl mb-3 font-semibold">
        {title}
      </h3>
      <h5 className="font-secondary text-xs tracking-wide mb-3">DECEMBER 1, 2021</h5>
      <p className="font-secondary text-base mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et
        mattis ac accumsan, cursus.
      </p>
      <a href="#" className="text-theme-blog text-sm">READ MORE...</a>
    </article>
  );
}

export default Blog;
