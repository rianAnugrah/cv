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

import WebBrowserApp from "../apps/WebBrowserApp";
import CalculatorApp from "../apps/CalculatorApp";
import NotepadApp from "../apps/NotepadApp";

import {
  RiFolderUserLine, RiBriefcase4Line, RiFileList3Line, RiStore2Line, RiSettings4Line,
  RiCalculatorLine, RiFileTextLine, RiGamepadLine, RiGlobalLine, RiBrushLine,
  RiCodeBoxLine, RiBarChartBoxLine, RiMapPinLine, RiRobotLine
} from "react-icons/ri";

export const APPS = [
  // Portfolio
  { id: "profile", title: "Profile", icon: <RiFolderUserLine />, component: <ProfileApp />, category: "Portfolio", ramCost: 10 },
  { id: "works", title: "Works", icon: <RiBriefcase4Line />, component: <WorksApp />, category: "Portfolio", ramCost: 10 },
  { id: "resume", title: "Resume", icon: <RiFileList3Line />, component: <ResumeApp />, category: "Portfolio", ramCost: 10 },
  { id: "store", title: "Store", icon: <RiStore2Line />, component: <StoreApp />, category: "Portfolio", ramCost: 10 },

  // Productivity
  { id: "calculator", title: "Calculator", icon: <RiCalculatorLine />, component: <CalculatorApp />, category: "Productivity", ramCost: 5 },
  { id: "notepad", title: "Notepad", icon: <RiFileTextLine />, component: <NotepadApp />, category: "Productivity", ramCost: 5 },
  { id: "excalidraw", title: "Excalidraw", url: "https://excalidraw.com/", icon: <RiBrushLine />, component: <WebBrowserApp url="https://excalidraw.com/" />, category: "Productivity", ramCost: 15 },
  { id: "tldraw", title: "tldraw", url: "https://www.tldraw.com", icon: <RiBrushLine />, component: <WebBrowserApp url="https://www.tldraw.com" />, category: "Productivity", ramCost: 15 },
  { id: "hackmd", title: "HackMD", url: "https://hackmd.io", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://hackmd.io" />, category: "Productivity", ramCost: 15 },
  { id: "etherpad", title: "Etherpad", url: "https://etherpad.org", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://etherpad.org" />, category: "Productivity", ramCost: 15 },
  { id: "desmos", title: "Desmos", url: "https://www.desmos.com/calculator", icon: <RiCalculatorLine />, component: <WebBrowserApp url="https://www.desmos.com/calculator" />, category: "Productivity", ramCost: 10 },

  // Development
  { id: "codepen", title: "CodePen", url: "https://codepen.io", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://codepen.io" />, category: "Development", ramCost: 20 },
  { id: "jsfiddle", title: "JSFiddle", url: "https://jsfiddle.net", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://jsfiddle.net" />, category: "Development", ramCost: 20 },
  { id: "stackblitz", title: "StackBlitz", url: "https://stackblitz.com", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://stackblitz.com" />, category: "Development", ramCost: 30 },
  { id: "codesandbox", title: "CodeSandbox", url: "https://codesandbox.io", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://codesandbox.io" />, category: "Development", ramCost: 30 },
  { id: "replit", title: "Replit", url: "https://replit.com", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://replit.com" />, category: "Development", ramCost: 30 },
  { id: "swagger", title: "Swagger Editor", url: "https://editor.swagger.io", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://editor.swagger.io" />, category: "Development", ramCost: 15 },

  // Media
  { id: "photopea", title: "Photopea", url: "https://www.photopea.com", icon: <RiBrushLine />, component: <WebBrowserApp url="https://www.photopea.com" />, category: "Media", ramCost: 30 },
  { id: "youtube", title: "YouTube", url: "https://www.youtube.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://www.youtube.com/embed" />, category: "Media", ramCost: 25 },
  { id: "spotify", title: "Spotify", url: "https://open.spotify.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://open.spotify.com/embed" />, category: "Media", ramCost: 20 },
  { id: "soundcloud", title: "SoundCloud", url: "https://soundcloud.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://soundcloud.com" />, category: "Media", ramCost: 15 },

  // Analytics
  { id: "rawgraphs", title: "RAWGraphs", url: "https://app.rawgraphs.io", icon: <RiBarChartBoxLine />, component: <WebBrowserApp url="https://app.rawgraphs.io" />, category: "Analytics", ramCost: 15 },
  { id: "observable", title: "ObservableHQ", url: "https://observablehq.com", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://observablehq.com" />, category: "Analytics", ramCost: 20 },

  // Files
  { id: "pdfjs", title: "PDF.js Viewer", url: "https://mozilla.github.io/pdf.js", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://mozilla.github.io/pdf.js" />, category: "Files", ramCost: 15 },

  // Maps
  { id: "osm", title: "OpenStreetMap", url: "https://www.openstreetmap.org", icon: <RiMapPinLine />, component: <WebBrowserApp url="https://www.openstreetmap.org/export/embed.html" />, category: "Maps", ramCost: 20 },
  { id: "googlemaps", title: "Google Maps", url: "https://maps.google.com", icon: <RiMapPinLine />, component: <WebBrowserApp url="https://maps.google.com/maps?output=embed" />, category: "Maps", ramCost: 20 },

  // AI Tools
  { id: "huggingface", title: "Hugging Face", url: "https://huggingface.co", icon: <RiRobotLine />, component: <WebBrowserApp url="https://huggingface.co" />, category: "AI Tools", ramCost: 20 },
  { id: "wolfram", title: "Wolfram Cloud", url: "https://www.wolframcloud.com", icon: <RiRobotLine />, component: <WebBrowserApp url="https://www.wolframcloud.com" />, category: "AI Tools", ramCost: 25 },

  // Games
  { id: "2048", title: "2048", url: "https://play2048.co", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://play2048.co/" />, category: "Games", ramCost: 10 },
  { id: "chess", title: "Chess", url: "https://lichess.org", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://lichess.org/ai" />, category: "Games", ramCost: 20 },
  { id: "slither", title: "Slither.io", url: "https://slither.io", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://slither.io" />, category: "Games", ramCost: 20 },
  { id: "agar", title: "Agar.io", url: "https://agar.io", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://agar.io" />, category: "Games", ramCost: 20 },
  { id: "skribbl", title: "Skribbl.io", url: "https://skribbl.io", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://skribbl.io" />, category: "Games", ramCost: 15 },
  { id: "krunker", title: "Krunker.io", url: "https://krunker.io", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://krunker.io" />, category: "Games", ramCost: 30 },
  { id: "wordle", title: "Wordle", url: "https://wordlegame.org", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://wordlegame.org" />, category: "Games", ramCost: 10 },
  { id: "minesweeper", title: "Minesweeper", url: "https://minesweeper.online", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://minesweeper.online" />, category: "Games", ramCost: 10 },
  { id: "sudoku", title: "Sudoku", url: "https://sudoku.com", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://sudoku.com" />, category: "Games", ramCost: 10 },
  { id: "diep", title: "Diep.io", url: "https://diep.io", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://diep.io" />, category: "Games", ramCost: 20 },

  // System
  { id: "browser", title: "Web Browser", icon: <RiGlobalLine />, component: <WebBrowserApp showAddressBar={true} />, category: "System", ramCost: 20 },
  { id: "wikipedia", title: "Wikipedia", url: "https://en.m.wikipedia.org", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://en.m.wikipedia.org" />, category: "System", ramCost: 15 },
  { id: "settings", title: "Settings", icon: <RiSettings4Line />, component: <SettingsApp />, category: "System", ramCost: 10 },
];

export default function Desktop() {
  const { windows, wallpaper, openApp, pendingCloseAppId, confirmCloseApp, cancelCloseApp } = useOS();
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
      <div className="absolute top-10 left-0 w-full h-[calc(100vh-40px)] p-6 z-10 flex flex-col items-end" onClick={() => setStartOpen(false)}>
        
        {/* Portfolio Widget */}
        <div className="w-72 sm:w-80 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in-95 duration-500">
          <div className="flex items-center gap-2 mb-4 px-1">
            <RiFolderUserLine className="text-xl text-white drop-shadow-md" />
            <h2 className="text-white font-bold tracking-wide drop-shadow-md">Portfolio</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {APPS.filter(app => app.category === "Portfolio").map(app => (
              <button 
                key={app.id}
                onClick={(e) => { e.stopPropagation(); openApp(app.id, app.title, app.ramCost); }}
                className="bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-white/10 border border-white/10 dark:border-white/5 hover:border-white/30 dark:hover:border-white/20 transition-all rounded-2xl p-4 flex flex-col items-center justify-center gap-2 group shadow-sm hover:shadow-md"
              >
                <div className="text-3xl text-white group-hover:scale-110 transition-transform drop-shadow-sm">
                  {app.icon}
                </div>
                <span className="text-xs font-medium text-white/90 group-hover:text-white drop-shadow-sm">
                  {app.title}
                </span>
              </button>
            ))}
          </div>
        </div>

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

      {/* Confirmation Modal for Closing Apps */}
      {pendingCloseAppId && (
        <div className="absolute inset-0 bg-black/50 z-[100000] flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-2xl max-w-sm w-full border border-gray-200 dark:border-white/10 animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Close Application</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to close {APPS.find(a => a.id === pendingCloseAppId)?.title || "this app"}? Any unsaved progress inside the window will be lost.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelCloseApp}
                className="px-4 py-2 text-sm font-medium rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmCloseApp}
                className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded transition-colors shadow-sm"
              >
                Close App
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
