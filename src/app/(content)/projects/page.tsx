"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { type SideNavDataType } from "@/src/context/sideNav";
import { SideNavContext } from "@/src/context/sideNav";
import Watermark from "@/src/components/background/Watermark";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { useInView } from "framer-motion";
import ContentPageHeading from "@/src/components/elements/heading/contentPageHeading";

const projects = [
  {
    displayName: "LumBytes.com",
    about: "Lumbytes if a blogging website.",
    url: "https://lumbytes.com",
    tech: "full-stack",
    banner: "/lumbytesLogo.jpg",
    bannerAlt: "LumBytes",
  },
  {
    displayName: "Portfolio",
    about: "My portfolio",
    url: "/",
    tech: "full-stack",
    banner: "/portfolioProj.jpg",
    bannerAlt: "Portfolio",
  },
];

const ProjectsPage = () => {
  // @ts-ignore
  const { navData, setNavData } = useContext(SideNavContext);
  const [hovererdProject, setHovererdProject] = useState(projects[0]);
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      const slate = gridRef.current as HTMLElement;
      const distanceFromBottom =
        window.innerHeight - slate.getBoundingClientRect().bottom;
      slate.style.height = slate.offsetHeight + distanceFromBottom + "px";
    }
  }, [gridRef]);

  useEffect(() => {
    setNavData<SideNavDataType>({
      ...navData,
      left: {
        text: "ABOUT",
        link: "/about",
      },
      right: {
        text: "BLOG",
        link: "/blog",
      },
    });
  }, []);

  const isInView = useInView(gridRef, { once: true });

  return (
    <>
      <main>
        <div className="content-page-position">
          <ContentPageHeading text="Projects." />
          <div className="content-section mb-24 md:pt-6">
            <div ref={gridRef} className="grid grid-cols-11 gap-4">
              <div className="col-span-6 pr-5 hidden xl:block">
                <div
                  style={{
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                    transform: isInView
                      ? "translate(0px, 0px)"
                      : "translate(0px, 16px)",
                  }}
                  className="relative max-w-[666px] h-full rounded-tr-3xl overflow-hidden"
                >
                  <Image
                    src={hovererdProject.banner}
                    alt={hovererdProject.bannerAlt}
                    className="object-cover object-center"
                    fill={true}
                    sizes="(max-width: 700px) 100vw, 33vw"
                    priority
                  />
                  {/* <img
                    src={hovererdProject.banner}
                    alt={hovererdProject.bannerAlt}
                    className="absolute w-full h-full inset-0 object-cover object-center"
                    fetchPriority="high"
                  /> */}
                </div>
              </div>
              <div className="relative col-span-11 xl:col-span-5 font-secondary">
                <div className="flex flex-col w-full">
                  {projects.map((project) => {
                    return (
                      <div
                        key={project.displayName}
                        className="project-list lg:mb-16 md:mb-14 mb-8 xl:mb-0"
                      >
                        <div className="block xl:hidden md:h-48 lg:h-60 h-36 relative">
                          <Link href={project.url || "#"} target="_blank">
                            <Image
                              src={project.banner}
                              alt={project.bannerAlt}
                              fill={true}
                              className="object-center object-cover"
                            />
                          </Link>
                        </div>
                        <div
                          onMouseEnter={() => setHovererdProject(project)}
                          onMouseLeave={() => setHovererdProject(projects[0])}
                          className={cn(
                            "flex items-center w-full h-20 font-bold hover:text-black text-[28px] text-black xl:text-borders-light cursor-pointer xl:px-2",
                            {
                              "xl:text-black":
                                hovererdProject.displayName ===
                                project.displayName,
                            }
                          )}
                        >
                          <Link
                            href={project.url}
                            className="flex-1"
                            target="_blank"
                          >
                            <h4 className="leading-none transform transition-colors duration-800 lg:text-3xl md:text-3xl text-2xl">
                              {project.displayName}
                            </h4>
                          </Link>

                          <div className="font-medium text-sm leading-none">
                            {project.tech}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Watermark
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          transform: isInView ? "translate(0px, 0px)" : "translate(0px, 160px)",
        }}
        text="Projects"
      />
    </>
  );
};

export default ProjectsPage;
