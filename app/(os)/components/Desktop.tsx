"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useOS } from "../context/OSContext";
import Taskbar from "./Taskbar";
import Window from "./Window";
import StartMenu from "./StartMenu";

// Import the App components
import ProfileApp from "../apps/ProfileApp";
import WorksApp from "../apps/WorksApp";
import ResumeApp from "../apps/ResumeApp";
import StoreApp from "../apps/StoreApp";
import SettingsApp from "../apps/SettingsApp";

import { RiFolderUserLine, RiBriefcase4Line, RiFileList3Line, RiStore2Line, RiSettings4Line } from "react-icons/ri";

const APPS = [
  { id: "profile", title: "Profile", icon: <RiFolderUserLine />, component: <ProfileApp /> },
  { id: "works", title: "Works", icon: <RiBriefcase4Line />, component: <WorksApp /> },
  { id: "resume", title: "Resume", icon: <RiFileList3Line />, component: <ResumeApp /> },
  { id: "store", title: "Store", icon: <RiStore2Line />, component: <StoreApp /> },
  { id: "settings", title: "Settings", icon: <RiSettings4Line />, component: <SettingsApp /> },
];

export default function Desktop() {
  const { windows, wallpaper, openApp } = useOS();
  const [startOpen, setStartOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-gray-900 dark:text-gray-100 font-sans">
      {/* Wallpaper */}
      <Image
        src={wallpaper}
        alt="Desktop Wallpaper"
        fill
        className="object-cover pointer-events-none z-0"
        priority
      />

      <Taskbar onStartClick={(e) => { e.stopPropagation(); setStartOpen((prev) => !prev); }} />
      <StartMenu isOpen={startOpen} onClose={() => setStartOpen(false)} />

      {/* Desktop Workspace (below taskbar) */}
      <div className="absolute top-10 left-0 w-full h-[calc(100vh-40px)] p-4 flex flex-col flex-wrap items-start justify-start gap-4 z-10" onClick={() => setStartOpen(false)}>
        {/* Desktop Icons */}
        {APPS.map((app) => (
          <button
            key={`icon-${app.id}`}
            onDoubleClick={(e) => {
              e.stopPropagation();
              openApp(app.id, app.title);
            }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center justify-center w-20 h-24 p-2 rounded-lg hover:bg-white/20 transition-colors group cursor-pointer"
          >
            <div className="text-4xl text-white drop-shadow-md group-hover:scale-110 transition-transform">
              {app.icon}
            </div>
            <span className="mt-2 text-xs font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] text-center line-clamp-2">
              {app.title}
            </span>
          </button>
        ))}
      </div>

      {/* Render Open Windows */}
      {windows.map((win) => {
        const appData = APPS.find((a) => a.id === win.id);
        if (!appData) return null;
        return (
          <Window key={win.id} id={win.id} title={win.title}>
            {appData.component}
          </Window>
        );
      })}
    </div>
  );
}
