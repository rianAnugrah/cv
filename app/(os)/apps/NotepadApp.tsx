"use client";
import React, { useState } from "react";

export default function NotepadApp() {
  const [text, setText] = useState("Hello world! This is a simple notepad.\nYour notes won't be saved if you refresh the page.");

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#1a1a1a]">
      <textarea
        className="flex-1 w-full h-full p-4 bg-transparent outline-none resize-none font-mono text-gray-800 dark:text-gray-200"
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
}
