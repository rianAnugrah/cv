"use client";
import React, { useState, useEffect } from "react";
import { useOS } from "../context/OSContext";
import { RiWifiFill, RiBattery2ChargeLine, RiCloseLine, RiSearchLine } from "react-icons/ri";
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
    <>
      {/* Top Full-Width Taskbar */}
      <div className="absolute top-0 left-0 w-full h-10 bg-white/75 backdrop-blur-2xl border-b border-gray-200/70 shadow-sm flex items-center justify-between px-4 z-[9999] select-none">

        {/* Left Side (Start Button) */}
        <div className="flex-1 flex items-center justify-start">
          <button
            onClick={onStartClick}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-all group relative"
          >
            <div className="grid grid-cols-2 gap-[2px]">
              <div className="w-[6px] h-[6px] bg-blue-500 rounded-[2px]"></div>
              <div className="w-[6px] h-[6px] bg-blue-500 rounded-[2px]"></div>
              <div className="w-[6px] h-[6px] bg-blue-500 rounded-[2px]"></div>
              <div className="w-[6px] h-[6px] bg-blue-500 rounded-[2px]"></div>
            </div>
          </button>
        </div>

        {/* Center: Dock Items */}
        <div className="flex flex-1 items-center justify-center gap-1">

        {/* Window Tabs (Icons Only) */}
        {windows.map((win) => {
          const isActive = activeWindowId === win.id && !win.isMinimized;
          const appData = APPS.find((a) => a.id === win.id);
          const iconNode = appData ? (
            (appData as any).url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`https://www.google.com/s2/favicons?domain=${(appData as any).url}&sz=64`} alt="" className="w-5 h-5 object-contain pointer-events-none" />
            ) : (
              <div className="w-5 h-5 flex items-center justify-center text-lg text-white">{appData.icon}</div>
            )
          ) : null;

          return (
            <div key={win.id} className="relative group flex items-center justify-center">
              <button
                onClick={() => {
                  if (isActive) toggleMinimize(win.id);
                  else focusApp(win.id);
                }}
                className={`h-8 w-8 sm:w-auto sm:px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                  isActive ? "bg-blue-50 shadow-sm" : "hover:bg-gray-100 hover:scale-105"
                }`}
              >
                {iconNode}
                <span className="hidden sm:inline-block text-sm font-medium text-gray-700 max-w-[120px] truncate">{win.title}</span>
              </button>

              {/* Active Indicator */}
              <div className={`absolute -bottom-1 h-1 rounded-full transition-all ${isActive ? "w-4 bg-blue-500" : "w-1.5 bg-gray-300"}`}></div>

              {/* Hover Preview Card */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[120%] mt-2 w-56 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[10000] p-3 flex flex-col pointer-events-auto origin-top transform scale-95 group-hover:scale-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 truncate pr-2">
                    <div className="scale-75 origin-left">{iconNode}</div>
                    <span className="text-xs font-semibold text-gray-800 truncate">{win.title}</span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); closeApp(win.id); }}
                    className="p-1.5 rounded-md hover:bg-red-500 hover:text-white transition-colors text-gray-400 shrink-0"
                  >
                    <RiCloseLine />
                  </button>
                </div>
                <div className="w-full h-28 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-100 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center scale-[5]">
                    {iconNode}
                  </div>
                  <span className="text-xs text-gray-400 font-medium z-10 relative bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm">
                    Live Preview
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Right Side: System Tray */}
        <div className="flex-1 flex justify-end items-center gap-3 text-xs font-medium text-gray-600">
          <div className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-md">
            <span className="text-gray-500">RAM</span>
            <span className="text-blue-500 font-semibold">{currentRam}%</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <RiWifiFill />
            <RiBattery2ChargeLine className="text-[1.1rem]" />
          </div>
          <div className="flex flex-col items-end leading-tight pr-1 text-gray-700">
            <span>{time}</span>
          </div>
        </div>

      </div>
    </>
  );
}
