"use client";
import React from "react";
import Image from "next/image";
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
  RiLayoutMasonryFill,
  RiServerFill,
  RiBuilding2Fill,
  RiCloudFill,
  RiPenNibFill,
} from "react-icons/ri";

const SKILLS = [
  { label: "NextJs", icon: <RiNextjsLine /> },
  { label: "ReactJs", icon: <RiReactjsFill className="text-blue-400" /> },
  { label: "Tailwind", icon: <RiTailwindCssFill className="text-teal-400" /> },
  { label: "HTML", icon: <RiHtml5Fill className="text-orange-500" /> },
  { label: "CSS", icon: <RiCss3Fill className="text-blue-500" /> },
  { label: "MongoDB", icon: <RiDatabaseFill className="text-green-500" /> },
  { label: "Javascript", icon: <RiJavascriptFill className="text-yellow-400" /> },
  { label: "Node", icon: <RiNodejsFill className="text-green-500" /> },
  { label: "MySQL", icon: <RiDatabase2Fill className="text-blue-400" /> },
  { label: "Figma", icon: <RiPenNibFill className="text-purple-400" /> },
  { label: "Photoshop", icon: <RiBrush2Fill className="text-blue-500" /> },
  { label: "Express", icon: <RiServerFill className="text-gray-400" /> },
  { label: "Illustrator", icon: <RiBrush2Fill className="text-orange-400" /> },
  { label: "Vercel", icon: <RiCloudFill className="text-white" /> },
  { label: "Netlify", icon: <RiCloudFill className="text-teal-300" /> },
  { label: "Github", icon: <RiGithubFill /> },
];

const WHAT_I_DO = [
  {
    icon: <RiLayoutMasonryFill className="text-blue-400 text-xl" />,
    title: "Advanced Frontend Engineer",
    desc: "Experienced App Developer skilled in developing responsive websites or applications. Proficient in creating responsive, user-friendly, and high-performing solutions using the latest technologies.",
  },
  {
    icon: <RiServerFill className="text-emerald-400 text-xl" />,
    title: "Backend Engineer",
    desc: "With expertise in building scalable, high-performance server-side applications using Node.js, MongoDB, MySQL, SQLite. Experienced in API development, database design, and deployment, ensuring secure and efficient backend solutions.",
  },
  {
    icon: <RiBuilding2Fill className="text-violet-400 text-xl" />,
    title: "Software Architect",
    desc: "Experienced Software Architect skilled in designing and developing scalable and efficient software solutions. Proficient in system architecture, technology integration, and ensuring high-quality performance.",
  },
];

export default function ProfileApp() {
  return (
    <div className="flex flex-col w-full h-full gap-6 p-6 md:p-10 font-sans text-gray-800 dark:text-gray-200 overflow-auto">

      {/* Hero Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-lg flex-shrink-0">
          <Image src="/img/rian.png" alt="Rian Anugrah" width={64} height={64} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-0.5">Hello, I am Fullstack Developer</p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rian Anugrah</h2>
          <p className="text-sm font-medium text-gray-400">Fullstack Developer</p>
        </div>
      </div>

      {/* About Me */}
      <div className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 p-5 rounded-2xl shadow-sm backdrop-blur-md">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">About Me</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Hi, I am Experienced Software Engineer with a proven track record of success in developing user-friendly and efficient web applications. With over 6 years of experience in the field,
        </p>
      </div>

      {/* What I Do */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {WHAT_I_DO.map((item, i) => (
            <div
              key={i}
              className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 p-5 rounded-2xl shadow-sm backdrop-blur-md hover:border-blue-500/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-white/10 dark:bg-white/5 rounded-xl mb-3">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Working Skills */}
      <div className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 p-5 rounded-2xl shadow-sm backdrop-blur-md">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">Working Skills</h3>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill, i) => (
            <Badge key={i} icon={skill.icon}>{skill.label}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function Badge({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow cursor-default">
      <span className="text-sm">{icon}</span>
      <span>{children}</span>
    </div>
  );
}
