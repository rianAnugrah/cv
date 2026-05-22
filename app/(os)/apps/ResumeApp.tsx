"use client";
import React from "react";
import { RiCalendarCheckLine } from "react-icons/ri";

const TIMELINE = [
  {
    year: "2024",
    title: "Software Architect, Fullstack Engineer",
    company: "PT. Sarang Gagak Sakti",
    desc: "",
  },
  {
    year: "2019",
    title: "Designer, IT Support, Screen Koordinator",
    company: "PT. Happy Indonesia",
    desc: "",
  },
  {
    year: "2017",
    title: "Php Fullstack Programmer",
    company: "Pt. Go Online Solusi",
    desc: "Using Opencart, managed Roepistore.com",
  },
  {
    year: "2016",
    title: "Software Engineer",
    company: "PT. Pharos Indonesia",
    desc: "Working with R&D and Technical support to create integrate web interface for internal temperature and humidity monitoring.",
  },
  {
    year: "2015",
    title: "Graduated",
    company: "BSI Bogor — Manajemen Informatika (Now Sistem Informasi)",
    desc: "Of my entire campus, there were only 3 people who took the final project with the theme of Object Based System Modeling (which was said to be a theme that was really avoided by students at that time) and I was one of those 3 people. Used CodeIgniter as a framework in 2015 which requires object-based programming as its main foundation.",
  },
  {
    year: "1993",
    title: "Hello world! 🌏",
    company: "",
    desc: "Was born on September 10 1993, from a simple family as the eldest of 2 siblings. Until now he is married and has a son.",
  },
];

export default function ResumeApp() {
  return (
    <div className="p-6 md:p-10 font-sans text-gray-800 dark:text-gray-200 max-w-3xl mx-auto h-full overflow-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">My Resume Timeline</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Career milestones and journey.</p>
      </div>

      <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/20 ml-3 md:ml-4 space-y-8 pb-10">
        {TIMELINE.map((item, i) => (
          <div key={i} className="relative pl-8 md:pl-10">
            {/* Timeline Node */}
            <div className="absolute left-[-21px] top-1 bg-white dark:bg-[#121212] p-1 rounded-full border-2 border-blue-500/50 dark:border-blue-400/30 text-blue-500 shadow-sm">
              <RiCalendarCheckLine className="text-base" />
            </div>

            <div className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 p-5 rounded-xl shadow-sm backdrop-blur-md transition-all hover:shadow-md hover:border-blue-500/30">
              <span className="inline-block px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-md mb-3">
                {item.year}
              </span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{item.title}</h3>
              {item.company && (
                <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2">{item.company}</p>
              )}
              {item.desc && (
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">{item.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
