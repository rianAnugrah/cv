"use client";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const PROJECTS = [
  {
    title: "Ravenry",
    url: "https://app.theravenry.com",
    color: "from-violet-600 to-blue-500",
    tags: ["React", "NodeJs", "MongoDB", "CSS", "Firebase"],
  },
  {
    title: "Solos",
    url: "https://solos.page",
    color: "from-emerald-500 to-teal-400",
    tags: ["React", "NodeJs", "MongoDB", "CSS"],
  },
  {
    title: "Beatrix Cendana",
    url: "https://bcendana.design",
    color: "from-pink-500 to-rose-400",
    tags: ["Astro JS", "Tailwind", "CSS"],
  },
  {
    title: "Savicore",
    url: "https://savicore.com",
    color: "from-amber-500 to-orange-400",
    tags: ["Wordpress", "HTML5", "Javascript", "CSS"],
  },
];

export default function WorksApp() {
  return (
    <div className="p-6 md:p-10 h-full font-sans text-gray-800 dark:text-gray-200 overflow-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">Past Works</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">A showcase of projects I have built.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        {PROJECTS.map((proj, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-md hover:border-blue-500/30"
          >
            {/* Gradient Thumbnail */}
            <div className={`relative w-full h-40 bg-gradient-to-br ${proj.color} flex items-center justify-center overflow-hidden`}>
              <span className="text-6xl font-black text-white/20 select-none tracking-tighter">
                {proj.title[0]}
              </span>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors shadow-lg"
                >
                  <RiExternalLinkLine className="text-xl" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{proj.title}</h3>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-blue-500 hover:underline truncate block"
                >
                  {proj.url}
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
