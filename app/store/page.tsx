import React from "react";
import { SlSettings } from "react-icons/sl";

export default function WorksPage() {
  return (
    <div className="w-full h-screen px-28 gap-4 flex flex-col items-start justify-center">
      <h1 className="text-4xl mb-4">Store <span className="text-sm text-slate-300">Coming soon</span></h1>
      <div className="h-[calc(100dvh_-_160px)] flex items-center justify-center overflow-auto w-full backdrop-blur-sm bg-white/10 border-white/30 border rounded-xl shadow p-8">
        
        <div>
          <SlSettings className="animate-spin text-2xl" />
        </div>
        <div >
          <SlSettings className="animate-spin text-7xl"/>
        </div>
      </div>
    </div>
  );
}
