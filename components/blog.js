import React from "react";
import SectionHeader from "./utils/sectionHeader";

const Blog = () => {
  return (
    <section id="blog" className="section-default w-11/12">
      <SectionHeader word1="Blog" theme="text-theme-blog" />
      <div className="flex flex-wrap mt-16">
        <Blogpost title="The best Web Developer - Qustions & Answers" />
        <Blogpost title="The best Web Developer - Qustions & Answers" />
        <Blogpost title="The best Web Developer - Qustions & Answers" />
        <Blogpost title="The best Web Developer - Qustions & Answers" />
      </div>
      <div className="flow-root pr-40">
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
      <h3 className="font-primary text-theme-blog text-4xl font-semibold mb-2">
        {title}
      </h3>
      <date className="font-secondary text-sm tracking-wide">DECEMBER 1, 2021</date>
      <p className="font-secondary text-lg mb-2 leading-tight pt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis et
        mattis ac accumsan, cursus.
      </p>
      <a href="#" className="text-theme-blog text-base">READ MORE...</a>
    </article>
  );
}

export default Blog;
