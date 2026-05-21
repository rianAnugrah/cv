"use client";
import React from "react";
import Image from "next/image";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";

const PROJECTS = [
  {
    title: "Ravenry Platform",
    category: "Analytical Platform",
    desc: "A comprehensive data analysis dashboard with interactive reporting tools.",
    img: "/img/ravenry.PNG",
  },
  {
    title: "Svara",
    category: "Media Streaming",
    desc: "A highly concurrent music streaming backend handling thousands of real-time connections.",
    img: "/img/svara.png",
  },
  {
    title: "Smart Village",
    category: "E-Government",
    desc: "Centralized public service portal to streamline local government operations.",
    img: "/img/smartvillage.png",
  },
  {
    title: "Tanya AI",
    category: "Artificial Intelligence",
    desc: "Conversational AI agent interface wrapped in an elegant mobile-first design.",
    img: "/img/tanya.PNG",
  },
];

export default function WorksApp() {
  return (
    <div className="p-6 md:p-10 h-full font-sans text-gray-800 dark:text-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Selected Works</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">A showcase of projects I have engineered and designed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="group flex flex-col bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-md">
            
            {/* Image Container */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image 
                src={proj.img} 
                alt={proj.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors shadow-lg">
                  <RiExternalLinkLine className="text-xl" />
                </button>
                <button className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors shadow-lg">
                  <RiGithubLine className="text-xl" />
                </button>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-1">
              <span className="text-xs font-semibold text-blue-500 mb-1">{proj.category}</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {proj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
