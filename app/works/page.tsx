import Link from "next/link";
import React from "react";
import Image from "next/image";

import {
  DiCss3,
  DiCss3Full,
  DiFirebase,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiWordpress,
} from "react-icons/di";
import { RiNextjsFill, RiReactjsFill, RiWordpressFill } from "react-icons/ri";

export default function WorksPage() {
  const projects = [
    {
      title: "Ravenry",
      link: "https://app.theravenry.com",
      image: "/img/ravenry.PNG",
      techIcon: <RiReactjsFill className="text-6xl text-[#00f0ff] animate-pulse" />,
      techs: [
        { name: "React", icon: <DiReact /> },
        { name: "NodeJs", icon: <DiNodejs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "CSS", icon: <DiCss3Full /> },
        { name: "Firebase", icon: <DiFirebase /> },
      ],
    },
    {
      title: "Solos",
      link: "https://solos.page",
      image: "/img/solos.PNG",
      techIcon: <RiNextjsFill className="text-6xl text-[#00f0ff]" />,
      techs: [
        { name: "React", icon: <DiReact /> },
        { name: "NodeJs", icon: <DiNodejs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "CSS", icon: <DiCss3Full /> },
      ],
    },
    {
      title: "Beatrix Cendana",
      link: "https://botak-ps.vercel.app/monitor",
      displayLink: "https://bcendana.design",
      image: "/img/bcendana.PNG",
      techIcon: <RiNextjsFill className="text-6xl text-[#00f0ff]" />,
      techs: [
        { name: "Astro JS", icon: <DiJavascript /> },
        { name: "Tailwind", icon: <DiCss3 /> },
        { name: "CSS", icon: <DiCss3Full /> },
      ],
    },
    {
      title: "Savicore",
      link: "https://savicore.com",
      image: "/img/savicore.PNG",
      techIcon: <RiWordpressFill className="text-6xl text-[#ff3e6c]" />,
      techs: [
        { name: "Wordpress", icon: <DiWordpress /> },
        { name: "HTML5", icon: <DiHtml5 /> },
        { name: "Javascript", icon: <DiJavascript /> },
        { name: "CSS", icon: <DiCss3Full /> },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[64rem] gap-4 flex flex-col items-start pt-4 text-white">
      
      {/* Title */}
      <div className="skew-x-[-12deg] bg-[#02050f]/60 border-b-2 border-[#ff3e6c] px-6 py-2 w-fit mb-6">
        <h2 className="skew-x-[12deg] p3r-font-display text-2xl font-black uppercase tracking-widest text-white p3r-text-glow-pink">
          Past works / Operations
        </h2>
      </div>

      {/* Grid List */}
      <div className="w-full flex flex-col gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            {/* Screenshot Panel */}
            <div className="w-full lg:w-[360px] shrink-0 relative group">
              <div className="absolute inset-0 bg-[#00f0ff]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 mix-blend-overlay"></div>
              <Image
                width={1280}
                height={720}
                alt={`${project.title} Screenshot`}
                src={project.image}
                className="w-full object-cover rounded-none border border-[#00f0ff]/30 shadow-[3px_3px_0px_rgba(0,0,0,0.6)] group-hover:border-[#00f0ff] transition-colors duration-200"
              />
            </div>

            {/* Description Info */}
            <DescBox>
              <div className="flex items-start gap-4">
                <div className="p-2 border border-white/10 bg-[#02050f] skew-x-[-8deg]">
                  <div className="skew-x-[8deg]">{project.techIcon}</div>
                </div>
                
                <div className="flex flex-col">
                  <span className="p3r-font-display text-[#00f0ff] text-xs font-bold tracking-widest uppercase">
                    OP_{String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black tracking-wide uppercase p3r-font-display text-white mt-0.5">
                    {project.title}
                  </h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-[#ff3e6c] hover:text-[#00f0ff] text-sm font-semibold tracking-wider hover:underline p3r-font-display mt-1 transition-colors duration-200"
                  >
                    {project.displayLink || project.link}
                  </Link>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="flex gap-2.5 mt-4 flex-wrap">
                {project.techs.map((tech, idx) => (
                  <Pile key={idx}>
                    <div className="flex items-center gap-1">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  </Pile>
                ))}
              </div>
            </DescBox>
          </Card>
        ))}
      </div>
    </div>
  );
}

const Pile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="skew-x-[-12deg] bg-[#02050f] border border-[#00f0ff]/20 text-gray-300 hover:text-black hover:bg-[#00f0ff] hover:border-[#00f0ff] px-3 py-1 text-xs font-bold uppercase tracking-wider p3r-font-display cursor-default transition-all duration-200">
      <div className="skew-x-[12deg]">{children}</div>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#0b1329]/75 backdrop-blur-md border border-cyan-500/30 p-6 lg:p-8 gap-6 w-full shadow-[4px_4px_0px_#ff3e6c] hover:shadow-[6px_6px_0px_#00f0ff] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200">
      {children}
    </div>
  );
};

const DescBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col justify-between flex-grow">{children}</div>;
};
