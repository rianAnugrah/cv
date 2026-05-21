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
        <div className="bg-[#100720]/80 border-2 border-[#00ffff] px-6 py-2 w-fit">
          <h2 className="retro-font-display text-2xl font-black uppercase tracking-widest text-[#00ffff] retro-text-glow retro-glitch">
            &gt; PROFILE.EXE
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row w-full lg:max-w-[64rem] gap-6 bg-transparent">
        
        {/* Left Card: What I Do */}
        <div className="w-full md:w-1/2 min-h-[460px] bg-[#100720]/80 backdrop-blur-md border-2 border-[#ff00ff] p-6 md:p-8 retro-box-glow relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#00ffff]">
          <h3 className="retro-font-display text-2xl font-extrabold text-[#00ffff] uppercase tracking-wider mb-6 flex items-center gap-2 border-b-2 border-[#ff00ff]/30 pb-2">
            <span className="w-3 h-3 bg-[#ff00ff] animate-pulse"></span> WHAT I DO
          </h3>
          
          <div className="space-y-6">
            <div>
              <p className="font-bold text-md text-[#ff00ff] tracking-wide uppercase retro-font-display text-lg">
                &gt; Frontend Development
              </p>
              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                Proficient in building pixel-perfect, responsive user interfaces. Expert at translating Figma designs into production-ready React/Next.js codebases, ensuring smooth micro-animations and exceptional UX.
              </p>
            </div>
            
            <div className="border-t border-[#00ffff]/30 pt-4">
              <p className="font-bold text-md text-[#ff00ff] tracking-wide uppercase retro-font-display text-lg">
                &gt; Backend Architecture
              </p>
              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                Skilled at designing scalable and robust server architectures using Node.js, Express, and databases such as MongoDB, MySQL, and SQLite. Experienced in API development, authentication, and deployment.
              </p>
            </div>
            
            <div className="border-t border-[#00ffff]/30 pt-4">
              <p className="font-bold text-md text-[#ff00ff] tracking-wide uppercase retro-font-display text-lg">
                &gt; System Integration
              </p>
              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                Capable of architectural planning, setting up robust state management, routing, and compiling custom developer tooling to accelerate team delivery and build performance-first applications.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card: Working Skills */}
        <div className="w-full md:w-1/2 min-h-[460px] bg-[#100720]/80 backdrop-blur-md border-2 border-[#00ffff] p-6 md:p-8 shadow-[0_0_15px_#00ffff] relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#ff00ff]">
          <h3 className="retro-font-display text-2xl font-extrabold text-[#ff00ff] uppercase tracking-wider mb-6 flex items-center gap-2 border-b-2 border-[#00ffff]/30 pb-2">
            <span className="w-3 h-3 bg-[#00ffff] animate-pulse"></span> CORE ARSENAL
          </h3>
          
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-400 font-light italic">
              Loading inventory systems...
            </p>
            
            <div className="flex flex-wrap gap-x-2.5 gap-y-3 pt-2">
              <Pile icon={<RiNextjsLine className="text-[#00ffff]" />}>NextJs</Pile>
              <Pile icon={<RiReactjsFill className="text-[#00ffff] animate-pulse" />}>ReactJs</Pile>
              <Pile icon={<RiTailwindCssFill className="text-[#00ffff]" />}>Tailwind</Pile>
              <Pile icon={<RiHtml5Fill className="text-[#ff00ff]" />}>HTML5</Pile>
              <Pile icon={<RiCss3Fill className="text-[#00ffff]" />}>CSS3</Pile>
              <Pile icon={<RiDatabaseFill className="text-[#00ffff]" />}>MongoDB</Pile>
              <Pile icon={<RiJavascriptFill className="text-[#ff00ff]" />}>Javascript</Pile>
              <Pile icon={<RiNodejsFill className="text-[#00ffff]" />}>Node.js</Pile>
              <Pile icon={<RiDatabase2Fill className="text-[#00ffff]" />}>MySQL</Pile>
              <Pile icon={<RiBrush2Fill className="text-[#ff00ff]" />}>Figma</Pile>
              <Pile icon={<RiBrush2Fill className="text-[#00ffff]" />}>Photoshop</Pile>
              <Pile icon={<RiNodejsFill className="text-[#00ffff]" />}>Express</Pile>
              <Pile icon={<RiBrush2Fill className="text-[#00ffff]" />}>Illustrator</Pile>
              <Pile icon={<RiGithubFill className="text-[#ff00ff]" />}>Github</Pile>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const Pile = ({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) => {
  return (
    <div className="bg-[#100720] border-2 border-[#00ffff]/50 text-white hover:text-black hover:bg-[#00ffff] hover:border-[#00ffff] hover:shadow-[0_0_10px_#00ffff] px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide uppercase retro-font-display cursor-default transition-all duration-200">
      <div className="flex items-center gap-1.5">
        {icon}
        <span>{children}</span>
      </div>
    </div>
  );
};
