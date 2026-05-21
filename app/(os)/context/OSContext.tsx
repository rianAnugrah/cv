"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface OSWindow {
  id: string;
  title: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface OSContextProps {
  windows: OSWindow[];
  activeWindowId: string | null;
  wallpaper: string;
  openApp: (id: string, title: string) => void;
  closeApp: (id: string) => void;
  toggleMinimize: (id: string) => void;
  toggleMaximize: (id: string) => void;
  focusApp: (id: string) => void;
  setWallpaper: (url: string) => void;
}

const OSContext = createContext<OSContextProps | undefined>(undefined);

export const OSProvider = ({ children }: { children: ReactNode }) => {
  const [windows, setWindows] = useState<OSWindow[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [wallpaper, setWallpaperState] = useState<string>("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"); // default elegant wallpaper fallback
  const [maxZIndex, setMaxZIndex] = useState(10);

  const focusApp = (id: string) => {
    setMaxZIndex((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, zIndex: maxZIndex + 1, isMinimized: false } : win))
    );
    setActiveWindowId(id);
  };

  const openApp = (id: string, title: string) => {
    setWindows((prev) => {
      if (prev.find((w) => w.id === id)) {
        focusApp(id);
        return prev;
      }
      const newWindow: OSWindow = {
        id,
        title,
        isMinimized: false,
        isMaximized: false,
        zIndex: maxZIndex + 1,
      };
      setMaxZIndex((z) => z + 1);
      setActiveWindowId(id);
      return [...prev, newWindow];
    });
  };

  const closeApp = (id: string) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
    setActiveWindowId((prev) => (prev === id ? null : prev));
  };

  const toggleMinimize = (id: string) => {
    setWindows((prev) => {
      const isCurrentlyMinimized = prev.find((w) => w.id === id)?.isMinimized;
      if (isCurrentlyMinimized) {
        focusApp(id); // focus when unminimizing
      }
      return prev.map((win) =>
        win.id === id ? { ...win, isMinimized: !win.isMinimized } : win
      );
    });
    // If minimizing the active window, clear activeWindowId
    setWindows((prev) => {
       const win = prev.find((w) => w.id === id);
       if (win && win.isMinimized && activeWindowId === id) setActiveWindowId(null);
       return prev;
    });
  };

  const toggleMaximize = (id: string) => {
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, isMaximized: !win.isMaximized } : win
      )
    );
    focusApp(id);
  };

  const setWallpaper = (url: string) => {
    setWallpaperState(url);
    if (typeof window !== "undefined") {
      localStorage.setItem("os-wallpaper", url);
    }
  };

  // Load wallpaper on mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("os-wallpaper");
      if (saved) setWallpaperState(saved);
      else setWallpaperState("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2940&auto=format&fit=crop"); // Default elegant gradient
    }
  }, []);

  return (
    <OSContext.Provider
      value={{
        windows,
        activeWindowId,
        wallpaper,
        openApp,
        closeApp,
        toggleMinimize,
        toggleMaximize,
        focusApp,
        setWallpaper,
      }}
    >
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) {
    throw new Error("useOS must be used within an OSProvider");
  }
  return context;
};
