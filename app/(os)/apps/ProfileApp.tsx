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
} from "react-icons/ri";

export default function ProfileApp() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-6 p-6 md:p-10 font-sans text-gray-800 dark:text-gray-200">
      
      {/* Left Column: What I Do */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
            <Image src="/img/rian.png" alt="Rian Anugrah" width={64} height={64} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rian Anugrah</h2>
            <p className="text-sm font-medium text-blue-500">Fullstack Engineer</p>
          </div>
        </div>
        
        <div className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 p-6 rounded-2xl shadow-sm backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">What I Do</h3>
          
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Frontend Development</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Building pixel-perfect, responsive user interfaces. Expert at translating Figma designs into production-ready React/Next.js codebases, ensuring smooth micro-animations and exceptional UX.
              </p>
            </div>
            
            <div className="pt-5 border-t border-gray-200 dark:border-white/5">
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">Backend Architecture</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Designing scalable and robust server architectures using Node.js, Express, and databases such as MongoDB, MySQL, and SQLite. Experienced in API development, authentication, and deployment.
              </p>
            </div>
            
            <div className="pt-5 border-t border-gray-200 dark:border-white/5">
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">System Integration</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Capable of architectural planning, setting up robust state management, routing, and compiling custom developer tooling to accelerate team delivery and build performance-first applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Core Arsenal */}
      <div className="w-full md:w-1/2 flex flex-col h-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 p-6 rounded-2xl shadow-sm backdrop-blur-md overflow-hidden">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Core Arsenal</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Proficiencies and technologies used in the field.
        </p>
        
        <div className="flex flex-wrap gap-2 overflow-auto pb-4">
          <Badge icon={<RiNextjsLine />}>NextJs</Badge>
          <Badge icon={<RiReactjsFill className="text-blue-500" />}>ReactJs</Badge>
          <Badge icon={<RiTailwindCssFill className="text-teal-500" />}>Tailwind</Badge>
          <Badge icon={<RiHtml5Fill className="text-orange-500" />}>HTML5</Badge>
          <Badge icon={<RiCss3Fill className="text-blue-600" />}>CSS3</Badge>
          <Badge icon={<RiDatabaseFill className="text-green-500" />}>MongoDB</Badge>
          <Badge icon={<RiJavascriptFill className="text-yellow-400" />}>Javascript</Badge>
          <Badge icon={<RiNodejsFill className="text-green-600" />}>Node.js</Badge>
          <Badge icon={<RiDatabase2Fill className="text-blue-400" />}>MySQL</Badge>
          <Badge icon={<RiBrush2Fill className="text-purple-500" />}>Figma</Badge>
          <Badge icon={<RiBrush2Fill className="text-blue-500" />}>Photoshop</Badge>
          <Badge icon={<RiNodejsFill className="text-gray-400" />}>Express</Badge>
          <Badge icon={<RiBrush2Fill className="text-orange-500" />}>Illustrator</Badge>
          <Badge icon={<RiGithubFill />}>Github</Badge>
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
