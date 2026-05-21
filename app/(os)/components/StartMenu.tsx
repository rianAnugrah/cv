"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useOS } from "../context/OSContext";
import { RiFolderUserLine, RiBriefcase4Line, RiFileList3Line, RiStore2Line, RiSettings4Line, RiShutDownLine } from "react-icons/ri";

export default function StartMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { openApp } = useOS();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOpen = (id: string, title: string) => {
    openApp(id, title);
    onClose();
  };

  return (
    <div 
      ref={menuRef} 
      className="absolute top-10 left-0 w-[400px] h-[450px] bg-white/90 dark:bg-[#1a1a1a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden flex z-[10000] animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {/* Left Sidebar */}
      <div className="w-12 h-full border-r border-gray-200 dark:border-white/10 flex flex-col items-center justify-between py-2 bg-gray-50/50 dark:bg-black/20">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-white/20 hover:scale-105 transition-transform cursor-pointer mt-2">
          <Image src="/img/rian.png" alt="Rian" width={32} height={32} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex flex-col gap-2 mb-2">
          <button onClick={() => handleOpen("settings", "Settings")} className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 rounded-md transition-colors">
            <RiSettings4Line className="text-xl" />
          </button>
          <button onClick={() => alert("Shut down?")} className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-red-500/10 hover:text-red-500 rounded-md transition-colors">
            <RiShutDownLine className="text-xl" />
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 pl-1">Productivity</h3>
        
        <div className="grid grid-cols-2 gap-2">
          <Tile 
            icon={<RiFolderUserLine className="text-3xl mb-2" />} 
            label="Profile" 
            color="bg-blue-500" 
            onClick={() => handleOpen("profile", "Profile")} 
          />
          <Tile 
            icon={<RiBriefcase4Line className="text-3xl mb-2" />} 
            label="Works" 
            color="bg-teal-500" 
            onClick={() => handleOpen("works", "Works")} 
          />
          <Tile 
            icon={<RiFileList3Line className="text-3xl mb-2" />} 
            label="Resume" 
            color="bg-orange-500" 
            onClick={() => handleOpen("resume", "Resume")} 
          />
          <Tile 
            icon={<RiStore2Line className="text-3xl mb-2" />} 
            label="Store" 
            color="bg-purple-500" 
            onClick={() => handleOpen("store", "Store")} 
          />
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
