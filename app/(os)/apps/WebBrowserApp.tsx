"use client";
import React, { useState } from "react";
import { RiRefreshLine } from "react-icons/ri";

export default function WebBrowserApp({ url }: { url: string }) {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#121212]">
      {/* Mini Address Bar */}
      <div className="flex items-center gap-2 p-2 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20">
        <button 
          onClick={() => setKey(k => k + 1)}
          className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
        >
          <RiRefreshLine />
        </button>
        <div className="flex-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded px-3 py-1 text-xs text-gray-500 truncate select-all">
          {url}
        </div>
      </div>
      
      {/* IFrame Content */}
      <div className="flex-1 w-full bg-white">
        <iframe
          key={key}
          src={url}
          className="w-full h-full border-none"
          title="Web App"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          allow="fullscreen; clipboard-read; clipboard-write"
        />
      </div>
    </div>
  );
}
