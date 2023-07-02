import React, { useRef } from "react";
import { HomeSectionsLayout } from "../layouts";
import { playfairDisplayFont } from "@/lib/fonts";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const About = ({
  containerRef,
}: {
  containerRef: React.MutableRefObject<null>;
}) => {
  const targetRef = useRef(null);
  const fadeInRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(fadeInRef, { once: true });
  
  return (
    <HomeSectionsLayout targetRef={targetRef} heading="More about myself.">
      <div
        ref={fadeInRef}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1, delay: 1.2 }}
        // viewport={{ once: true }}
        // whileInView="onscreen"
        style={{
          ...playfairDisplayFont.style,
          // transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
        className="max-w-[752px]"
      >
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
      </div>
    </HomeSectionsLayout>
  );
};

export default About;
