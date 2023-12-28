"use client";

import React, { useRef } from "react";
import { playfairDisplayFont } from "@/src/lib/fonts";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const About = ({
  parentRef,
  myRef,
}: {
  parentRef?: React.MutableRefObject<null>;
  myRef?: React.MutableRefObject<null>;
}) => {
  const fadeInRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: parentRef,
    target: myRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(fadeInRef, { once: true });

  return (
    <div
      ref={fadeInRef}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 1, delay: 1.2 }}
      // viewport={{ once: true }}
      // whileInView="onscreen"
      style={{
        ...playfairDisplayFont.style,
        opacity: isInView ? 1 : 0,
        transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div>
        <h1 className="text-4xl mb-5 font-medium">Professional Experience</h1>
        <p className="about-para">
          Currently, I am working full-time as a software developer (frontend)
          in Digitate (a venture of Tata Consultancy Services - TCS) in Pune
          India. Before joining Digitate (TCS), I did my software engineering
          internship at Hitachi Vantara.
        </p>
        <p className="about-para">
          I have also worked in some startups and helped them launch their first
          webpages on the internet.
        </p>
        <p className="about-para">
          Through out this journey I have gained immense experience from the
          people I have worked with, learnt to communicate with different people
          and think more like a client than a developer when it needs to.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-4xl mb-5 font-medium">Personal Development</h1>
        <p className="about-para">
          Creating Fun projects with a full time job is hard.. But I make sure
          to find my way around and create some interesting stuff in the moments
          I find for myself.
        </p>
        <p className="about-para">
          I have experimented with multiple technologies during my college days
          like machine learning, blockchain, also earned the “Blockchain
          Architect” certification via the Blockchain council.
        </p>
        <p className="about-para">
          I am a challenges driven person. I like to brainstorm ideas, find
          creative ways to solve problems, build something useful along the way.
          What can be a better way to do so than building some cool apps?
        </p>
      </div>
    </div>
  );
};

export default About;
