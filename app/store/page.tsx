import React from "react";
import { SlSettings } from "react-icons/sl";
import ContainerGlass from "@/app/(shared)/components/container-glass";

export default function StorePage() {
  return (
    <div className="w-full h-screen px-4 lg:px-28 gap-4 flex flex-col items-start justify-start lg:justify-center pt-4">
      <h1 className="text-4xl mb-4 mt-8">Store <span className="text-sm text-slate-300">Coming soon</span></h1>
      <ContainerGlass>
        <div className="w-full h-full flex items-center justify-center">


        <div>
          <SlSettings className="animate-spin text-2xl" />
        </div>
        <div >
          <SlSettings className="animate-spin text-7xl"/>
        </div>
        </div>
      </ContainerGlass>
    </div>
  );
}
