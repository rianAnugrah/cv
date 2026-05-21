"use client";
import React from "react";
import { RiCalendarCheckLine } from "react-icons/ri";

const TIMELINE = [
  {
    year: "Feb 2024 - Present",
    title: "Software Engineer",
    company: "Ravenry",
    desc: "Spearheaded the development of a complex analytical platform using React, Next.js, and TypeScript. Implemented secure API architectures and streamlined data visualization.",
  },
  {
    year: "2022 - 2024",
    title: "Fullstack Engineer",
    company: "Bukausaha",
    desc: "Engineered robust backend services using Node.js and Express. Integrated multiple payment gateways and optimized database queries for performance at scale.",
  },
  {
    year: "2021 - 2022",
    title: "Web Developer",
    company: "Narasida",
    desc: "Designed and developed responsive, high-conversion landing pages. Collaborated closely with the marketing team to boost engagement through pixel-perfect UI.",
  },
];

export default function ResumeApp() {
  return (
    <div className="p-6 md:p-10 font-sans text-gray-800 dark:text-gray-200 max-w-3xl mx-auto h-full relative">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Experience</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">My professional journey and career milestones.</p>
      </div>

      <div className="relative border-l border-gray-200 dark:border-white/10 ml-3 md:ml-4 space-y-8 pb-10">
        {TIMELINE.map((item, i) => (
          <div key={i} className="relative pl-8 md:pl-10">
            {/* Timeline Node */}
            <div className="absolute left-[-21px] top-0.5 bg-white dark:bg-[#121212] p-1 rounded-full border border-gray-200 dark:border-white/10 text-blue-500 shadow-sm">
              <RiCalendarCheckLine className="text-lg" />
            </div>
            
            <div className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 p-5 rounded-xl shadow-sm backdrop-blur-md transition-all hover:shadow-md hover:border-blue-500/30">
              <span className="inline-block px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-md mb-3">
                {item.year}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{item.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
