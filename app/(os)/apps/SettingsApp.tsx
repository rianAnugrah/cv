"use client";
import React from "react";
import Image from "next/image";
import { useOS } from "../context/OSContext";

const WALLPAPERS = [
  { id: "abstract-1", name: "Abstract Gradient", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
  { id: "minimal-dark", name: "Minimal Dark", url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop" },
  { id: "macos-monterey", name: "MacOS Style", url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2940&auto=format&fit=crop" },
];

export default function SettingsApp() {
  const { wallpaper, setWallpaper } = useOS();

  return (
    <div className="p-6 md:p-10 h-full font-sans text-gray-800 dark:text-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Settings</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Personalize your workspace.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm backdrop-blur-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Desktop Wallpaper</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {WALLPAPERS.map((wp) => (
              <button 
                key={wp.id}
                onClick={() => setWallpaper(wp.url)}
                className={`relative flex flex-col items-center gap-2 rounded-xl overflow-hidden group transition-all ${
                  wallpaper === wp.url ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-[#121212]' : 'hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 hover:ring-offset-2 dark:hover:ring-offset-[#121212]'
                }`}
              >
                <div className="relative w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <Image src={wp.url} alt={wp.name} fill className="object-cover" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 pb-1">{wp.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
