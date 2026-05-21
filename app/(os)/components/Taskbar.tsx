"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "../context/OSContext";
import { RiMenuFill, RiWifiFill, RiBattery2ChargeLine } from "react-icons/ri";

export default function Taskbar({ onStartClick }: { onStartClick: (e: React.MouseEvent) => void }) {
  const { windows, activeWindowId, toggleMinimize, focusApp } = useOS();
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
          className="h-8 px-3 rounded-md hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <RiMenuFill className="text-lg" />
        </button>

        <div className="w-px h-5 bg-gray-300 dark:bg-white/20 mx-1"></div>

        {/* Window Tabs */}
        {windows.map((win) => {
          const isActive = activeWindowId === win.id && !win.isMinimized;
          return (
            <button
              key={win.id}
              onClick={() => {
                if (isActive) toggleMinimize(win.id);
                else focusApp(win.id);
              }}
              className={`h-8 px-4 rounded-md text-sm font-medium transition-colors max-w-[150px] truncate ${
                isActive 
                  ? "bg-black/10 dark:bg-white/20 shadow-inner" 
                  : "hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {win.title}
            </button>
          );
        })}
      </div>

      {/* Right side: System Tray & Clock */}
      <div className="flex items-center h-full gap-3 px-2 text-sm font-medium">
        <div className="flex items-center gap-2 opacity-80">
          <RiWifiFill />
          <RiBattery2ChargeLine className="text-lg" />
        </div>
        <span>{time}</span>
      </div>
    </div>
  );
}
