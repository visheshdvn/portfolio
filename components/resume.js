import React from "react";
import SectionHeader from "./utils/sectionHeader";

const Resume = () => {
  return (
    <section id="resume" className="section-default">
      <SectionHeader word1="Resume" theme="text-theme-resume" />
      <div className="pl-40 mt-14">
        <div style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-2 gap-0 border-b mb-14">
            <ResumeSection section="work experience" />
            <div className="">
              <WorkExperienceDetails
                title="1. Founding Partner & Web developer at HiHome"
                duration="Dec 2019 - Present"
                description="HiHome was a startup of my college seniors. I was recruited in HiHome in DEC 2019 as a founding partner and senior web developer."
              />
              <WorkExperienceDetails
                title="2. Google Developer Students Club - Core team member"
                duration="Dec 2019 - Present"
                description="I was a part of google developers in my college."
              />
              <WorkExperienceDetails
                title="1. Founding Partner & Web developer at HiHome"
                duration="Dec 2019 - Present"
                description="HiHome was a startup of my college seniors. I was recruited in HiHome in DEC 2019 as a founding partner and senior web developer."
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-0 border-b mb-14">
            <ResumeSection section="education" />
            <div className="">
              <EducationDetails
                title="1. B.Tech - Computer Science & Egineering"
                duration="Batch: 2018 - 2022"
                grade="CGPA: 7.89"
              />
              <EducationDetails
                title="2. Senior Secondary"
                duration="Batch: 2014 - 2015"
                grade="Percentage: 83.60%"
              />
              <EducationDetails
                title="3. High School"
                duration="Dec 2019 - Present"
                grade="Percentage: 77.80%"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-0">
            <ResumeSection section="certifications" />
            <div className="">
              <CertDetails
                title="1. Certified Blockchain Architect."
                validity="July 20 2021 - Present"
                issuer="Blockchain Council"
              />
              <CertDetails
                title="2. Data scructures ans algorithms in Python - Top Performer."
                validity="August 2020 - Present"
                issuer="Coding Ninjas"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ResumeSection({ section }) {
  return (
    <h2 className="font-primary font-bold text-4.5xl float-left capitalize">
      {section}
    </h2>
  );
}

function WorkExperienceDetails({ title, duration, description }) {
  return (
    <div className="mb-14">
      <h3 className="font-primary text-2xl text-blue-400">{title}</h3>
      <div className="pl-5">
        <time className="font-secondary text-base py-3">{duration}</time>
        <p className="font-secondary text-lg pt-1 w-4/5 leading-tight">{description}</p>
      </div>
    </div>
  );
}

function EducationDetails({ title, duration, grade }) {
  return (
    <div className="mb-14">
      <h3 className="font-primary text-2xl text-lime-500">{title}</h3>
      <div className="pl-5">
        <time className="font-secondary text-base py-3">{duration}</time>
        <p className="font-secondary text-lg pt-1 w-4/5">Board: CBSE</p>
        <p className="font-secondary text-lg pt-1 w-4/5">{grade}</p>
      </div>
    </div>
  );
}

function CertDetails({ title, issuer, validity, link }) {
  return (
    <div className="mb-14">
      <h3 className="font-primary text-2xl text-yellow-500">{title}</h3>
      <div className="pl-5">
        <time className="font-secondary text-base py-3">
          Validity: {validity}
        </time>
        <p className="font-secondary text-lg pt-1 w-4/5">Issuer: {issuer}</p>
      </div>
    </div>
  );
}

export default Resume;
