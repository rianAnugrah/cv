"use client";
import React, { useState } from "react";
import { RiRefreshLine } from "react-icons/ri";

export default function WebBrowserApp({ url: initialUrl = "https://bing.com", showAddressBar = false }: { url?: string, showAddressBar?: boolean }) {
  const [key, setKey] = useState(0);
  const [inputVal, setInputVal] = useState(initialUrl);
  const [currentUrl, setCurrentUrl] = useState(initialUrl);

  const navigate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    let finalUrl = inputVal.trim();
    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
      finalUrl = 'https://' + finalUrl;
    }
    setCurrentUrl(finalUrl);
    setInputVal(finalUrl);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#121212]">
      {/* Address Bar */}
      {showAddressBar && (
        <form onSubmit={navigate} className="flex items-center gap-2 p-2 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/20">
          <button 
            type="button"
            onClick={() => setKey(k => k + 1)}
            className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300 shrink-0"
          >
            <RiRefreshLine />
          </button>
          <input 
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-white dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded px-3 py-1 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500"
            placeholder="Search or enter web address"
          />
        </form>
      )}
      
      {/* IFrame Content */}
      <div className="flex-1 w-full bg-white">
        <iframe
          key={key}
          src={currentUrl}
          className="w-full h-full border-none"
          title="Web App"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          allow="fullscreen; clipboard-read; clipboard-write"
        />
      </div>
    </div>
  );
}
