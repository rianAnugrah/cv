import React from "react";
import ContainerGlass from "@/app/(shared)/components/container-glass";

export default function ResumePage() {
  const timelineData = [
    {
      year: "2024",
      company: "PT. Sarang Gagak Sakti",
      role: "Software Architect, Fullstack Engineer",
      details: "Design and construct scalable, high-performance software system architectures. Manage fullstack product delivery from start to end.",
      align: "end",
      accent: "#ff3e6c",
    },
    {
      year: "2019",
      company: "PT. Happy Indonesia",
      role: "Designer, IT Support, Screen Coordinator",
      details: "Responsible for screen layouts, visual guidelines, technical network integrity, and hardware/software systems operations.",
      align: "start",
      accent: "#00f0ff",
    },
    {
      year: "2017",
      company: "PT. Go Online Solusi",
      role: "PHP Fullstack Programmer",
      details: "Developed e-commerce platforms using Opencart. Managed Roepistore.com and scaled product features for better user retention.",
      align: "end",
      accent: "#ff3e6c",
    },
    {
      year: "2016",
      company: "PT. Pharos Indonesia",
      role: "Software Engineer",
      details: "Collaborated with R&D and Technical Support to build Web-based telemetry dashboards for internal temperature and humidity monitoring systems.",
      align: "start",
      accent: "#00f0ff",
    },
    {
      year: "2015",
      company: "First Title / Graduation",
      role: "BSI Bogor - Manajemen Informatika",
      details: "Graduated with Object-Based System Modeling specialization. Developed modular applications using CodeIgniter as a primary development framework.",
      align: "end",
      accent: "#ff3e6c",
    },
    {
      year: "1993",
      company: "Hello World!",
      role: "September 10, 1993",
      details: "Born in Bogor, Indonesia. Eldest of two siblings. Passionate developer, husband, and father.",
      align: "start",
      accent: "#00f0ff",
    },
  ];

  return (
    <div className="w-full max-w-[64rem] gap-4 flex flex-col items-start pt-4 text-white">
      
      {/* Title */}
      <div className="skew-x-[-12deg] bg-[#02050f]/60 border-b-2 border-[#00f0ff] px-6 py-2 w-fit mb-6">
        <h2 className="skew-x-[12deg] p3r-font-display text-2xl font-black uppercase tracking-widest text-[#00f0ff] p3r-text-glow">
          My Resume / Timeline
        </h2>
      </div>

      <ContainerGlass>
        <div className="relative border-l border-dashed border-[#00f0ff]/30 pl-6 md:pl-8 py-4 ml-3 space-y-12">
          
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline custom node indicator */}
              <div 
                className="absolute left-[-31px] md:left-[-39px] top-1.5 w-4 h-4 md:w-5 md:h-5 skew-x-[-12deg] border-2 transition-transform duration-300 group-hover:scale-125"
                style={{ 
                  backgroundColor: "#02050f", 
                  borderColor: item.accent,
                  boxShadow: `0 0 8px ${item.accent}`
                }}
              />

              {/* Slanted Year badge */}
              <div 
                className="skew-x-[-12deg] text-white px-3 py-1 font-bold text-xs uppercase p3r-font-display w-fit mb-2 shadow-[2px_2px_0px_rgba(0,0,0,0.8)]"
                style={{ backgroundColor: item.accent }}
              >
                <span className="skew-x-[12deg] block">{item.year}</span>
              </div>

              {/* Details card */}
              <div className="flex flex-col max-w-2xl bg-[#02050f]/40 p-5 border border-white/5 hover:border-[#00f0ff]/30 transition-colors duration-200">
                <h3 className="text-lg font-extrabold text-white tracking-wide uppercase p3r-font-display">
                  {item.company}
                </h3>
                <h4 className="text-sm font-semibold text-[#00f0ff] uppercase tracking-wider mt-1">
                  {item.role}
                </h4>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {item.details}
                </p>
              </div>

            </div>
          ))}

        </div>
      </ContainerGlass>
    </div>
  );
}
