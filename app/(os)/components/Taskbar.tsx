"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "../context/OSContext";
import { RiWifiFill, RiBattery2ChargeLine, RiCloseLine } from "react-icons/ri";
import { APPS } from "./Desktop";

export default function Taskbar({ onStartClick }: { onStartClick: (e: React.MouseEvent) => void }) {
  const { windows, activeWindowId, toggleMinimize, focusApp, currentRam, closeApp } = useOS();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-10 bg-white/60 dark:bg-black/60 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 z-[9999] flex items-center justify-between px-2 shadow-sm text-gray-800 dark:text-gray-100 select-none">
      
      {/* Left side: Start Button & Open Apps */}
      <div className="flex items-center h-full gap-1">
        {/* Start Button */}
        <button 
          onClick={onStartClick}
          className="h-8 px-3 rounded-md hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center transition-colors group"
        >
          <div className="grid grid-cols-2 gap-[2px] opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="w-[6px] h-[6px] bg-current rounded-sm"></div>
            <div className="w-[6px] h-[6px] bg-current rounded-sm"></div>
            <div className="w-[6px] h-[6px] bg-current rounded-sm"></div>
            <div className="w-[6px] h-[6px] bg-current rounded-sm"></div>
          </div>
        </button>

        <div className="w-px h-5 bg-gray-300 dark:bg-white/20 mx-1"></div>

        {/* Window Tabs */}
        {windows.map((win) => {
          const isActive = activeWindowId === win.id && !win.isMinimized;
          const appData = APPS.find((a) => a.id === win.id);
          const iconNode = appData ? (
            (appData as any).url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`https://www.google.com/s2/favicons?domain=${(appData as any).url}&sz=32`} alt="" className="w-4 h-4 object-contain" />
            ) : (
              <div className="w-4 h-4 flex items-center justify-center text-sm">{appData.icon}</div>
            )
          ) : null;

          return (
            <div key={win.id} className="relative group">
              <button
                onClick={() => {
                  if (isActive) toggleMinimize(win.id);
                  else focusApp(win.id);
                }}
                className={`h-8 px-3 rounded-md text-sm font-medium transition-colors max-w-[150px] flex items-center gap-2 truncate ${
                  isActive 
                    ? "bg-black/10 dark:bg-white/20 shadow-inner" 
                    : "hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {iconNode}
                <span className="truncate">{win.title}</span>
              </button>

              {/* Hover Preview Card */}
              <div className="absolute left-0 top-full mt-1 w-56 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[10000] p-3 flex flex-col pointer-events-auto">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 truncate pr-2">
                    {iconNode}
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{win.title}</span>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); closeApp(win.id); }}
                    className="p-1 rounded hover:bg-red-500 hover:text-white transition-colors text-gray-500 shrink-0"
                  >
                    <RiCloseLine />
                  </button>
                </div>
                <div className="w-full h-28 bg-gray-100 dark:bg-black/40 rounded-md flex items-center justify-center border border-gray-200 dark:border-white/5 overflow-hidden relative">
                   <div className="absolute inset-0 opacity-10 flex items-center justify-center scale-[4]">
                     {iconNode}
                   </div>
                   <span className="text-xs text-gray-500 dark:text-gray-400 font-medium z-10 relative bg-white/80 dark:bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                     Live Preview
                   </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right side: System Tray & Clock */}
      <div className="flex items-center h-full gap-3 px-2 text-xs font-medium">
        <div className="flex items-center gap-1 opacity-80 bg-black/5 dark:bg-white/10 px-2 py-1 rounded">
          <span>RAM: {currentRam}%</span>
        </div>
        <div className="flex items-center gap-2 opacity-80 text-sm">
          <RiWifiFill />
          <RiBattery2ChargeLine className="text-lg" />
        </div>
        <span className="text-sm">{time}</span>
      </div>
    </div>
  );
}
