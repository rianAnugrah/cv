import React from "react";
import {
  RiBrush2Fill,
  RiCss3Fill,
  RiDatabase2Fill,
  RiDatabaseFill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsLine,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

export default function AboutPage() {
  return (
    <>
      {/* Title */}
      <div className="w-full lg:max-w-[64rem] mb-6">
        <div className="skew-x-[-12deg] bg-[#02050f]/60 border-b-2 border-[#00f0ff] px-6 py-2 w-fit">
          <h2 className="skew-x-[12deg] p3r-font-display text-2xl font-black uppercase tracking-widest text-[#00f0ff] p3r-text-glow">
            About Me / Profile
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row w-full lg:max-w-[64rem] gap-6 bg-transparent">
        
        {/* Left Card: What I Do */}
        <div className="w-full md:w-1/2 min-h-[460px] bg-[#0b1329]/75 backdrop-blur-md border border-cyan-500/30 p-6 md:p-8 shadow-[6px_6px_0px_#ff3e6c] relative before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-[#ff3e6c]">
          <h3 className="p3r-font-display text-xl font-extrabold text-[#00f0ff] uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
            <span className="w-2.5 h-2.5 bg-[#ff3e6c] transform skew-x-[-12deg]"></span> What I Do
          </h3>
          
          <div className="space-y-6">
            <div>
              <p className="font-bold text-md text-white tracking-wide uppercase p3r-font-display">
                Advanced Frontend Development
              </p>
              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                Proficient in building pixel-perfect, responsive user interfaces. Expert at translating Figma designs into production-ready React/Next.js codebases, ensuring smooth micro-animations and exceptional UX.
              </p>
            </div>
            
            <div className="border-t border-white/5 pt-4">
              <p className="font-bold text-md text-white tracking-wide uppercase p3r-font-display">
                Backend Architecture
              </p>
              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                Skilled at designing scalable and robust server architectures using Node.js, Express, and databases such as MongoDB, MySQL, and SQLite. Experienced in API development, authentication, and deployment.
              </p>
            </div>
            
            <div className="border-t border-white/5 pt-4">
              <p className="font-bold text-md text-white tracking-wide uppercase p3r-font-display">
                System Design & Integration
              </p>
              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                Capable of architectural planning, setting up robust state management, routing, and compiling custom developer tooling to accelerate team delivery and build performance-first applications.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card: Working Skills */}
        <div className="w-full md:w-1/2 min-h-[460px] bg-[#0b1329]/75 backdrop-blur-md border border-cyan-500/30 p-6 md:p-8 shadow-[6px_6px_0px_#00f0ff] relative before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-[#00f0ff]">
          <h3 className="p3r-font-display text-xl font-extrabold text-[#00f0ff] uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-white/10 pb-2">
            <span className="w-2.5 h-2.5 bg-[#00f0ff] transform skew-x-[-12deg]"></span> Core Arsenal
          </h3>
          
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-400 font-light italic">
              Combat-ready proficiencies and technologies used in the field:
            </p>
            
            <div className="flex flex-wrap gap-x-2.5 gap-y-3 pt-2">
              <Pile icon={<RiNextjsLine className="text-[#00f0ff]" />}>NextJs</Pile>
              <Pile icon={<RiReactjsFill className="text-[#00f0ff] animate-pulse" />}>ReactJs</Pile>
              <Pile icon={<RiTailwindCssFill className="text-[#00f0ff]" />}>Tailwind</Pile>
              <Pile icon={<RiHtml5Fill className="text-[#ff3e6c]" />}>HTML5</Pile>
              <Pile icon={<RiCss3Fill className="text-[#00f0ff]" />}>CSS3</Pile>
              <Pile icon={<RiDatabaseFill className="text-[#00f0ff]" />}>MongoDB</Pile>
              <Pile icon={<RiJavascriptFill className="text-[#ff3e6c]" />}>Javascript</Pile>
              <Pile icon={<RiNodejsFill className="text-[#00f0ff]" />}>Node.js</Pile>
              <Pile icon={<RiDatabase2Fill className="text-[#00f0ff]" />}>MySQL</Pile>
              <Pile icon={<RiBrush2Fill className="text-[#ff3e6c]" />}>Figma</Pile>
              <Pile icon={<RiBrush2Fill className="text-[#00f0ff]" />}>Photoshop</Pile>
              <Pile icon={<RiNodejsFill className="text-[#00f0ff]" />}>Express</Pile>
              <Pile icon={<RiBrush2Fill className="text-[#00f0ff]" />}>Illustrator</Pile>
              <Pile icon={<RiGithubFill className="text-[#ff3e6c]" />}>Github</Pile>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const Pile = ({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) => {
  return (
    <div className="skew-x-[-12deg] bg-[#02050f] border border-[#00f0ff]/30 text-white hover:text-black hover:bg-[#00f0ff] hover:border-[#00f0ff] hover:shadow-[0_0_8px_#00f0ff] px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide uppercase p3r-font-display cursor-default transition-all duration-200">
      <div className="skew-x-[12deg] flex items-center gap-1.5">
        {icon}
        <span>{children}</span>
      </div>
    </div>
  );
};
