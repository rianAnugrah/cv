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
      techIcon: <RiWordpressFill className="text-6xl text-[#ff00ff]" />,
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
      <div className="bg-[#100720]/80 border-2 border-[#ff00ff] px-6 py-2 w-fit mb-6">
        <h2 className="retro-font-display text-2xl font-black uppercase tracking-widest text-[#ff00ff] retro-text-glow-pink retro-glitch">
          &gt; PAST WORKS / OPERATIONS
        </h2>
      </div>

      {/* Grid List */}
      <div className="w-full flex flex-col gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            {/* Screenshot Panel */}
            <div className="w-full lg:w-[360px] shrink-0 relative group">
              <div className="absolute inset-0 bg-[#00ffff]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 mix-blend-overlay"></div>
              <Image
                width={1280}
                height={720}
                alt={`${project.title} Screenshot`}
                src={project.image}
                className="w-full object-cover rounded-md border-4 border-[#ff00ff]/30 shadow-[0_0_15px_rgba(255,0,255,0.4)] group-hover:border-[#ff00ff] group-hover:shadow-[0_0_25px_#ff00ff] transition-all duration-200 sepia-[.4] contrast-125"
              />
            </div>

            {/* Description Info */}
            <DescBox>
              <div className="flex items-start gap-4">
                <div className="p-2 border-2 border-[#00ffff]/50 bg-[#100720] retro-box-glow">
                  <div>{project.techIcon}</div>
                </div>
                
                <div className="flex flex-col">
                  <span className="retro-font-display text-[#00ffff] text-sm font-bold tracking-widest uppercase">
                    LVL_{String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black tracking-wide uppercase retro-font-display text-white mt-0.5 retro-glitch hover:text-[#ff00ff] transition-colors">
                    {project.title}
                  </h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-[#ff00ff] hover:text-[#00ffff] text-sm font-semibold tracking-wider hover:underline retro-font-display mt-1 transition-colors duration-200"
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
    <div className="bg-[#100720] border-2 border-[#00ffff]/50 text-gray-300 hover:text-black hover:bg-[#00ffff] hover:border-[#00ffff] hover:shadow-[0_0_10px_#00ffff] px-3 py-1 text-xs font-bold uppercase tracking-wider retro-font-display cursor-default transition-all duration-200">
      <div>{children}</div>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#100720]/80 backdrop-blur-md border-2 border-[#00ffff] p-6 lg:p-8 gap-6 w-full shadow-[6px_6px_0px_#ff00ff] hover:shadow-[0_0_20px_#00ffff] transition-all duration-200">
      {children}
    </div>
  );
};

const DescBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col justify-between flex-grow">{children}</div>;
};
