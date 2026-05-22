"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useOS } from "../context/OSContext";
import {
  RiSettings4Line, RiShutDownLine, RiFullscreenLine, RiFullscreenExitLine,
  RiSearchLine, RiCloseLine,
  RiFolderUserLine, RiLayoutLine, RiCodeBoxLine, RiVideoLine,
  RiBarChartBoxLine, RiFileTextLine, RiMapPinLine, RiRobotLine, RiGamepadLine, RiComputerLine,
} from "react-icons/ri";
import { APPS } from "./Desktop";

const CATEGORY_META: Record<string, { icon: React.ReactNode; color: string }> = {
  Portfolio:   { icon: <RiFolderUserLine />,  color: "text-blue-400" },
  Productivity:{ icon: <RiLayoutLine />,       color: "text-cyan-400" },
  Development: { icon: <RiCodeBoxLine />,      color: "text-emerald-400" },
  Media:       { icon: <RiVideoLine />,        color: "text-pink-400" },
  Analytics:   { icon: <RiBarChartBoxLine />,  color: "text-amber-400" },
  Files:       { icon: <RiFileTextLine />,     color: "text-orange-400" },
  Maps:        { icon: <RiMapPinLine />,       color: "text-green-400" },
  "AI Tools":  { icon: <RiRobotLine />,        color: "text-violet-400" },
  Games:       { icon: <RiGamepadLine />,      color: "text-rose-400" },
  System:      { icon: <RiComputerLine />,     color: "text-slate-400" },
};

export default function StartMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { openApp } = useOS();
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const searchRef = useRef<HTMLInputElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) onClose();
    };
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      setTimeout(() => searchRef.current?.focus(), 80);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isOpen, onClose]);

  // Reset search on close
  useEffect(() => { if (!isOpen) setSearchQuery(""); }, [isOpen]);

  // Track active category by scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const onScroll = () => {
      const containerTop = container.getBoundingClientRect().top;
      let current = "";
      for (const [cat, el] of Object.entries(categoryRefs.current)) {
        if (!el) continue;
        const top = el.getBoundingClientRect().top - containerTop;
        if (top <= 40) current = cat;
      }
      setActiveCategory(current);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen();
    }
  };

  if (!isOpen) return null;

  const handleOpen = (id: string, title: string, ramCost: number) => {
    openApp(id, title, ramCost);
    onClose();
  };

  const filteredApps = APPS.filter(app =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categorizedApps = filteredApps.reduce((acc, app) => {
    if (!acc[app.category]) acc[app.category] = [];
    acc[app.category].push(app);
    return acc;
  }, {} as Record<string, typeof APPS>);

  const categories = Object.keys(categorizedApps).sort();

  const scrollToCategory = (category: string) => {
    categoryRefs.current[category]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={menuRef}
      className="absolute top-10 left-0 w-full h-[calc(100vh-40px)] sm:top-12 sm:left-2 sm:w-[680px] sm:h-[600px] bg-white/95 backdrop-blur-2xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:rounded-2xl overflow-hidden flex flex-col z-[10000] animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      {/* Header */}
      <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-100 shrink-0 bg-gray-50/80">
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-200 shadow-sm">
            <Image src="/img/rian.png" alt="Rian" width={48} height={48} className="w-full h-full object-cover" />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow" />
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900 leading-tight">Rian Anugrah</div>
          <div className="text-xs text-blue-500 font-medium mt-0.5">Software Engineer</div>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
          >
            {isFullscreen ? <RiFullscreenExitLine className="text-base" /> : <RiFullscreenLine className="text-base" />}
          </button>
          <button
            onClick={() => handleOpen("settings", "Settings", 10)}
            title="Settings"
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
          >
            <RiSettings4Line className="text-base" />
          </button>
          <button
            onClick={() => alert("Shut down?")}
            title="Shut Down"
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
          >
            <RiShutDownLine className="text-base" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex overflow-hidden">

        {/* Category Sidebar */}
        <div className="hidden sm:flex w-44 border-r border-gray-100 flex-col py-3 shrink-0 overflow-y-auto bg-gray-50/60">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4 mb-2">Categories</span>
          <div className="flex flex-col gap-0.5 px-2">
            {categories.map((cat) => {
              const meta = CATEGORY_META[cat];
              const isActive = activeCategory === cat && !searchQuery;
              return (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all group ${
                    isActive
                      ? "bg-white shadow-sm text-gray-900"
                      : "text-gray-500 hover:text-gray-800 hover:bg-white/70"
                  }`}
                >
                  <span className={`text-sm shrink-0 transition-colors ${isActive ? (meta?.color ?? "text-blue-500") : "text-gray-300 group-hover:text-gray-500"}`}>
                    {meta?.icon ?? <RiLayoutLine />}
                  </span>
                  <span className="text-xs font-medium truncate">{cat}</span>
                  <span className={`ml-auto text-[10px] tabular-nums shrink-0 ${isActive ? "text-gray-400" : "text-gray-300"}`}>
                    {categorizedApps[cat].length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Search */}
          <div className="px-4 pt-4 pb-2 shrink-0">
            <div className="relative">
              <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 rounded-xl pl-9 pr-9 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <RiCloseLine className="text-base" />
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Grid */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-6" ref={scrollContainerRef}>
            {categories.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-32 gap-2">
                <RiSearchLine className="text-3xl text-gray-300" />
                <span className="text-sm text-gray-400">No apps found for &quot;{searchQuery}&quot;</span>
              </div>
            ) : (
              categories.map((category) => {
                const meta = CATEGORY_META[category];
                return (
                  <div
                    key={category}
                    ref={(el) => { categoryRefs.current[category] = el; }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-sm ${meta?.color ?? "text-gray-400"}`}>{meta?.icon}</span>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{category}</h3>
                      <div className="flex-1 h-px bg-gray-100 ml-1" />
                    </div>

                    {/* App Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {categorizedApps[category].map((app) => {
                        const url = (app as any).url;
                        return (
                          <button
                            key={app.id}
                            onClick={() => handleOpen(app.id, app.title, app.ramCost)}
                            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-sm active:scale-95 transition-all group text-center"
                          >
                            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0 bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                              {url ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                  src={`https://www.google.com/s2/favicons?domain=${url}&sz=64`}
                                  alt={app.title}
                                  className="w-6 h-6 object-contain"
                                />
                              ) : (
                                <span className={`text-xl ${meta?.color ?? "text-gray-500"}`}>{app.icon}</span>
                              )}
                            </div>
                            <span className="text-[11px] font-medium text-gray-500 group-hover:text-gray-800 transition-colors leading-tight line-clamp-2 w-full">
                              {app.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
