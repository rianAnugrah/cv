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
  RiLayoutLine, RiCodeBoxLine, RiBarChartBoxLine, RiMapPinLine, RiRobotLine, RiMessage2Line
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
  
  // KOMUNIKASI & PRODUKTIVITAS
  { id: "google-docs", title: "Google Docs", url: "https://docs.google.com", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://docs.google.com" />, category: "Productivity", ramCost: 20 },
  { id: "google-sheets", title: "Google Sheets", url: "https://docs.google.com/spreadsheets", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://docs.google.com/spreadsheets" />, category: "Productivity", ramCost: 20 },
  { id: "excalidraw", title: "Excalidraw", url: "https://excalidraw.com/", icon: <RiBrushLine />, component: <WebBrowserApp url="https://excalidraw.com/" />, category: "Productivity", ramCost: 15 },
  { id: "miro", title: "Miro", url: "https://miro.com", icon: <RiLayoutLine />, component: <WebBrowserApp url="https://miro.com" />, category: "Productivity", ramCost: 25 },
  { id: "notion", title: "Notion", url: "https://www.notion.so", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://www.notion.so" />, category: "Productivity", ramCost: 25 },
  { id: "hackmd", title: "HackMD", url: "https://hackmd.io", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://hackmd.io" />, category: "Productivity", ramCost: 15 },
  { id: "etherpad", title: "Etherpad", url: "https://etherpad.org", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://etherpad.org" />, category: "Productivity", ramCost: 15 },

  // DEVELOPMENT & CODING
  { id: "codepen", title: "CodePen", url: "https://codepen.io", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://codepen.io" />, category: "Development", ramCost: 20 },
  { id: "jsfiddle", title: "JSFiddle", url: "https://jsfiddle.net", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://jsfiddle.net" />, category: "Development", ramCost: 20 },
  { id: "stackblitz", title: "StackBlitz", url: "https://stackblitz.com", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://stackblitz.com" />, category: "Development", ramCost: 30 },
  { id: "codesandbox", title: "CodeSandbox", url: "https://codesandbox.io", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://codesandbox.io" />, category: "Development", ramCost: 30 },
  { id: "replit", title: "Replit", url: "https://replit.com", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://replit.com" />, category: "Development", ramCost: 30 },
  { id: "swagger", title: "Swagger Editor", url: "https://editor.swagger.io", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://editor.swagger.io" />, category: "Development", ramCost: 15 },

  // MEDIA & VISUALISASI
  { id: "canva", title: "Canva", url: "https://www.canva.com", icon: <RiBrushLine />, component: <WebBrowserApp url="https://www.canva.com" />, category: "Media", ramCost: 30 },
  { id: "figma", title: "Figma", url: "https://www.figma.com", icon: <RiLayoutLine />, component: <WebBrowserApp url="https://www.figma.com" />, category: "Media", ramCost: 40 },
  { id: "youtube", title: "YouTube", url: "https://www.youtube.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://www.youtube.com/embed" />, category: "Media", ramCost: 25 },
  { id: "vimeo", title: "Vimeo", url: "https://vimeo.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://vimeo.com" />, category: "Media", ramCost: 25 },
  { id: "spotify", title: "Spotify", url: "https://open.spotify.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://open.spotify.com/embed" />, category: "Media", ramCost: 20 },
  { id: "soundcloud", title: "SoundCloud", url: "https://soundcloud.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://soundcloud.com" />, category: "Media", ramCost: 15 },

  // DASHBOARD & ANALYTICS
  { id: "metabase", title: "Metabase", url: "https://www.metabase.com", icon: <RiBarChartBoxLine />, component: <WebBrowserApp url="https://www.metabase.com" />, category: "Analytics", ramCost: 20 },
  { id: "grafana", title: "Grafana", url: "https://grafana.com", icon: <RiBarChartBoxLine />, component: <WebBrowserApp url="https://grafana.com" />, category: "Analytics", ramCost: 20 },
  { id: "superset", title: "Superset", url: "https://superset.apache.org", icon: <RiBarChartBoxLine />, component: <WebBrowserApp url="https://superset.apache.org" />, category: "Analytics", ramCost: 20 },
  { id: "looker", title: "Looker Studio", url: "https://lookerstudio.google.com", icon: <RiBarChartBoxLine />, component: <WebBrowserApp url="https://lookerstudio.google.com" />, category: "Analytics", ramCost: 25 },

  // FILE & DOCUMENT VIEWER
  { id: "drive", title: "Google Drive", url: "https://drive.google.com", icon: <RiFolderUserLine />, component: <WebBrowserApp url="https://drive.google.com" />, category: "Files", ramCost: 20 },
  { id: "office", title: "Office Online", url: "https://www.office.com", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://www.office.com" />, category: "Files", ramCost: 20 },
  { id: "pdfjs", title: "PDF.js Viewer", url: "https://mozilla.github.io/pdf.js", icon: <RiFileTextLine />, component: <WebBrowserApp url="https://mozilla.github.io/pdf.js" />, category: "Files", ramCost: 15 },

  // MAPS & LOCATION
  { id: "osm", title: "OpenStreetMap", url: "https://www.openstreetmap.org", icon: <RiMapPinLine />, component: <WebBrowserApp url="https://www.openstreetmap.org/export/embed.html" />, category: "Maps", ramCost: 20 },
  { id: "mapbox", title: "Mapbox", url: "https://www.mapbox.com", icon: <RiMapPinLine />, component: <WebBrowserApp url="https://www.mapbox.com" />, category: "Maps", ramCost: 20 },
  { id: "leaflet", title: "Leaflet", url: "https://leafletjs.com", icon: <RiMapPinLine />, component: <WebBrowserApp url="https://leafletjs.com" />, category: "Maps", ramCost: 15 },

  // SOCIAL / COMMUNITY
  { id: "discord", title: "Discord", url: "https://discord.com", icon: <RiMessage2Line />, component: <WebBrowserApp url="https://discord.com" />, category: "Social", ramCost: 25 },
  { id: "reddit", title: "Reddit", url: "https://www.reddit.com", icon: <RiMessage2Line />, component: <WebBrowserApp url="https://www.reddit.com" />, category: "Social", ramCost: 20 },
  { id: "twitter", title: "Twitter / X", url: "https://x.com", icon: <RiMessage2Line />, component: <WebBrowserApp url="https://x.com" />, category: "Social", ramCost: 20 },
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com", icon: <RiMessage2Line />, component: <WebBrowserApp url="https://www.instagram.com" />, category: "Social", ramCost: 20 },

  // AI & INTERACTIVE TOOLS
  { id: "huggingface", title: "Hugging Face", url: "https://huggingface.co", icon: <RiRobotLine />, component: <WebBrowserApp url="https://huggingface.co" />, category: "AI Tools", ramCost: 20 },
  { id: "observable", title: "ObservableHQ", url: "https://observablehq.com", icon: <RiCodeBoxLine />, component: <WebBrowserApp url="https://observablehq.com" />, category: "AI Tools", ramCost: 20 },
  { id: "wolfram", title: "Wolfram Cloud", url: "https://www.wolframcloud.com", icon: <RiRobotLine />, component: <WebBrowserApp url="https://www.wolframcloud.com" />, category: "AI Tools", ramCost: 25 },

  // Games
  { id: "2048", title: "2048", url: "https://play2048.co/", icon: <RiGamepadLine />, component: <WebBrowserApp url="https://play2048.co/" />, category: "Games", ramCost: 15 },

  // Blocked Testing
  { id: "chatgpt", title: "ChatGPT", url: "https://chatgpt.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://chatgpt.com" />, category: "Blocked", ramCost: 10 },
  { id: "github", title: "GitHub", url: "https://github.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://github.com" />, category: "Blocked", ramCost: 10 },
  { id: "gmail", title: "Gmail", url: "https://mail.google.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://mail.google.com" />, category: "Blocked", ramCost: 10 },
  { id: "whatsapp", title: "WhatsApp Web", url: "https://web.whatsapp.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://web.whatsapp.com" />, category: "Blocked", ramCost: 10 },
  { id: "facebook", title: "Facebook", url: "https://facebook.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://facebook.com" />, category: "Blocked", ramCost: 10 },
  { id: "google-search", title: "Google Search", url: "https://google.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://google.com/search?igu=1" />, category: "Blocked", ramCost: 10 },
  { id: "netlify", title: "Netlify", url: "https://app.netlify.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://app.netlify.com" />, category: "Blocked", ramCost: 10 },
  { id: "vercel", title: "Vercel", url: "https://vercel.com", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://vercel.com" />, category: "Blocked", ramCost: 10 },

  // System
  { id: "browser", title: "Web Browser", icon: <RiGlobalLine />, component: <WebBrowserApp showAddressBar={true} />, category: "System", ramCost: 20 },
  { id: "wikipedia", title: "Wikipedia", url: "https://en.m.wikipedia.org", icon: <RiGlobalLine />, component: <WebBrowserApp url="https://en.m.wikipedia.org" />, category: "System", ramCost: 15 },
  { id: "settings", title: "Settings", icon: <RiSettings4Line />, component: <SettingsApp />, category: "System", ramCost: 10 },
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

      {/* Desktop Workspace (below taskbar) - Icons Hidden */}
      <div className="absolute top-10 left-0 w-full h-[calc(100vh-40px)] p-4 flex flex-col flex-wrap items-start justify-start gap-4 z-10" onClick={() => setStartOpen(false)}>
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
