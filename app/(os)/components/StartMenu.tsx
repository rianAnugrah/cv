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
      className="absolute top-10 left-2 w-64 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl rounded-xl overflow-hidden flex flex-col z-[10000] p-2 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {/* Header Profile */}
      <div className="flex items-center gap-3 p-3 border-b border-gray-200 dark:border-white/10 mb-2">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 dark:border-white/20">
          <Image src="/img/rian.png" alt="Rian" width={40} height={40} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm">Rian Anugrah</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Software Engineer</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-1">
        <MenuItem icon={<RiFolderUserLine />} label="Profile" onClick={() => handleOpen("profile", "Profile")} />
        <MenuItem icon={<RiBriefcase4Line />} label="Works" onClick={() => handleOpen("works", "Works")} />
        <MenuItem icon={<RiFileList3Line />} label="Resume" onClick={() => handleOpen("resume", "Resume")} />
        <MenuItem icon={<RiStore2Line />} label="Store" onClick={() => handleOpen("store", "Store")} />
        <MenuItem icon={<RiSettings4Line />} label="Settings" onClick={() => handleOpen("settings", "Settings")} />
      </div>

      {/* Footer */}
      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-white/10">
        <MenuItem icon={<RiShutDownLine />} label="Shut Down" onClick={() => alert("Please don't shut me down! :(")} danger />
      </div>
    </div>
  );
}

function MenuItem({ icon, label, onClick, danger }: { icon: React.ReactNode, label: string, onClick: () => void, danger?: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        danger 
          ? "text-red-500 hover:bg-red-500/10" 
          : "hover:bg-black/5 dark:hover:bg-white/10"
      }`}
    >
      <div className="text-lg">{icon}</div>
      <span>{label}</span>
    </button>
  );
}
