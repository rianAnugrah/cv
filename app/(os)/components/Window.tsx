"use client";
import React, { useRef } from "react";
import Draggable from "react-draggable";
import { useOS } from "../context/OSContext";
import { VscChromeMinimize, VscChromeMaximize, VscChromeRestore, VscChromeClose } from "react-icons/vsc";

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Window({ id, title, children }: WindowProps) {
  const { windows, closeApp, toggleMinimize, toggleMaximize, focusApp, activeWindowId } = useOS();
  const nodeRef = useRef<HTMLDivElement>(null);
  
  const windowState = windows.find((w) => w.id === id);
  if (!windowState || windowState.isMinimized) return null;

  const isActive = activeWindowId === id;

  const handleDragStart = () => {
    focusApp(id);
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-handle"
      bounds="parent"
      onStart={handleDragStart}
      disabled={windowState.isMaximized}
    >
      <div
        ref={nodeRef}
        onMouseDown={() => focusApp(id)}
        className={`absolute overflow-hidden flex flex-col bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl ${
          windowState.isMaximized ? "inset-0 !w-full !h-[calc(100%-40px)] !transform-none rounded-none border-0 top-10" : "w-[90%] md:w-[800px] h-[600px] top-[10%] left-[5%] md:left-[10%] rounded-xl"
        }`}
        style={{ zIndex: windowState.zIndex }}
      >
        {/* Title Bar */}
        <div 
          className={`window-handle flex items-center justify-between px-4 py-2 select-none ${windowState.isMaximized ? '' : 'cursor-move'} ${isActive ? 'bg-gray-50' : 'bg-white/60'} border-b border-gray-200`}
          onDoubleClick={() => toggleMaximize(id)}
        >
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            {title}
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <button
              onClick={(e) => { e.stopPropagation(); toggleMinimize(id); }}
              className="hover:text-gray-700 transition-colors"
            >
              <VscChromeMinimize />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }}
              className="hover:text-gray-700 transition-colors"
            >
              {windowState.isMaximized ? <VscChromeRestore /> : <VscChromeMaximize />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); closeApp(id); }}
              className="hover:text-red-500 transition-colors ml-1"
            >
              <VscChromeClose />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-auto bg-white">
          {children}
        </div>
      </div>
    </Draggable>
  );
}
