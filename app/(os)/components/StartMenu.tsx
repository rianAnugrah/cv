"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useOS } from "../context/OSContext";
import { RiSettings4Line, RiShutDownLine, RiFullscreenLine, RiFullscreenExitLine, RiSearchLine } from "react-icons/ri";
import { APPS } from "./Desktop";

export default function StartMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { openApp } = useOS();
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isOpen, onClose]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  if (!isOpen) return null;

  const handleOpen = (id: string, title: string, ramCost: number) => {
    openApp(id, title, ramCost);
    onClose();
  };

  // Group apps by category
  const filteredApps = APPS.filter(app => app.title.toLowerCase().includes(searchQuery.toLowerCase()));
  
  const categorizedApps = filteredApps.reduce((acc, app) => {
    if (!acc[app.category]) acc[app.category] = [];
    acc[app.category].push(app);
    return acc;
  }, {} as Record<string, typeof APPS>);

  const colorMap = ["bg-blue-500", "bg-teal-500", "bg-orange-500", "bg-purple-500", "bg-indigo-500", "bg-pink-500"];
  const categories = Object.keys(categorizedApps).sort();

  const scrollToCategory = (category: string) => {
    const el = categoryRefs.current[category];
    if (el && scrollContainerRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      ref={menuRef} 
      className="absolute top-10 left-0 w-full h-[calc(100vh-40px)] sm:top-12 sm:left-2 sm:translate-x-0 sm:w-[650px] sm:h-[600px] bg-white/90 dark:bg-[#1a1a1a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] sm:rounded-2xl overflow-hidden flex flex-col z-[10000] animate-in fade-in slide-in-from-top-4 duration-200"
    >
      {/* User Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-black/20 shrink-0">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-white/20 shadow-md shrink-0 bg-gray-200">
          <Image src="/img/rian.png" alt="Rian" width={56} height={56} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Rian</span>
          <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Software Engineer</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-12 h-full border-r border-gray-200 dark:border-white/10 flex flex-col items-center justify-end pb-4 pt-2 bg-gray-50/50 dark:bg-black/20 shrink-0">
          <div className="flex flex-col gap-2">
          <button onClick={toggleFullscreen} className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 rounded-md transition-colors" title="Toggle Fullscreen">
            {isFullscreen ? <RiFullscreenExitLine className="text-xl" /> : <RiFullscreenLine className="text-xl" />}
          </button>
          <button onClick={() => handleOpen("settings", "Settings", 10)} className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 rounded-md transition-colors" title="Settings">
            <RiSettings4Line className="text-xl" />
          </button>
          <button onClick={() => alert("Shut down?")} className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-red-500/10 hover:text-red-500 rounded-md transition-colors" title="Shut Down">
            <RiShutDownLine className="text-xl" />
          </button>
        </div>
      </div>

      {/* Category Sidebar */}
      <div className="hidden sm:flex w-40 h-full border-r border-gray-200 dark:border-white/10 flex-col py-4 bg-gray-50/30 dark:bg-black/10 shrink-0 overflow-y-auto custom-scrollbar">
        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4 mb-2">Categories</span>
        <div className="flex flex-col gap-1 px-2">
          {categories.map((category) => (
             <button 
               key={category} 
               onClick={() => scrollToCategory(category)}
               className="text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors truncate"
             >
               {category}
             </button>
          ))}
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="flex-1 flex flex-col h-full bg-transparent overflow-hidden">
        {/* Search Bar */}
        <div className="p-6 pb-2 shrink-0">
          <div className="relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input 
              type="text" 
              placeholder="Search apps..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-shadow"
            />
          </div>
        </div>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-4 relative" ref={scrollContainerRef}>
          {categories.length === 0 ? (
             <div className="text-center text-sm text-gray-500 mt-10">No apps found matching &quot;{searchQuery}&quot;</div>
          ) : (
            categories.map((category, catIndex) => (
              <div 
                key={category} 
                className="mb-8"
                ref={(el) => { categoryRefs.current[category] = el; }}
              >
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 pl-1 sticky -top-4 py-2 z-10">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categorizedApps[category].map((app, index) => {
                    const url = (app as any).url;
                    return (
                      <Tile 
                        key={app.id}
                        icon={
                          url ? (
                            <div className="w-10 h-10 mb-2 bg-white/90 rounded-md flex items-center justify-center shadow-sm overflow-hidden p-1.5 shrink-0">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img 
                                src={`https://www.google.com/s2/favicons?domain=${url}&sz=64`} 
                                alt={app.title} 
                                className="w-full h-full object-contain" 
                              />
                            </div>
                          ) : (
                            <div className="text-3xl mb-2 shrink-0">{app.icon}</div>
                          )
                        } 
                        label={app.title} 
                        color={colorMap[(catIndex * 3 + index) % colorMap.length]} 
                        onClick={() => handleOpen(app.id, app.title, app.ramCost)} 
                      />
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

function Tile({ icon, label, color, onClick }: { icon: React.ReactNode, label: string, color: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`${color} text-white w-full aspect-square rounded-md flex flex-col items-center justify-center hover:brightness-110 active:scale-95 transition-all shadow-sm`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
