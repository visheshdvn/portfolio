import React from "react";
import { HomeSectionsLayout } from "../layouts";
import { playfairDisplayFont } from "@/lib/fonts";

const About = () => {
  return (
    <HomeSectionsLayout heading="More about myself.">
      <section style={playfairDisplayFont.style} className="max-w-[752px]">
        <div>
          <h1 className="text-4xl mb-5">
            <span>Professional Experience</span>
          </h1>
          <p className="about-para">
            Currently, I am working full-time as a software developer (frontend)
            in Digitate (a venture of Tata Consultancy Services - TCS) in Pune
            India. Before joining Digitate (TCS), I did my software engineering
            internship at Hitachi Vantara.
          </p>
          <p className="about-para">
            I have also worked in some startups and helped them launch their
            first webpages on the internet.
          </p>
          <p className="about-para">
            Through out this journey I have gained immense experience from the
            people I have worked with, learnt to communicate with different
            people and think more like a client than a developer when it needs
            to.
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-4xl mb-5">Personal Development.</h1>
          <p className="about-para">
            Creating Fun projects with a full time job is hard.. But I make sure
            to find my way around and create some interesting stuff in the
            moments I find for myself.
          </p>
          <p className="about-para">
            I have experimented with multiple technologies during my college
            days like machine learning, blockchain, also earned the “Blockchain
            Architect” certification via the Blockchain council.
          </p>
          <p className="about-para">
            I am a challenges driven person. I like to brainstorm ideas, find
            creative ways to solve problems, build something useful along the
            way. What can be a better way to do so than building some cool apps?
          </p>
        </div>
      </section>
    </HomeSectionsLayout>
  );
};

export default About;
