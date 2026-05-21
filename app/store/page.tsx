import React from "react";
import ContainerGlass from "@/app/(shared)/components/container-glass";

export default function StorePage() {
  return (
    <div className="w-full max-w-[64rem] mb-6 gap-4 flex flex-col items-start pt-4 text-white">
      
      {/* Title */}
      <div className="bg-[#100720]/80 border-2 border-[#ff00ff] px-6 py-2 w-fit mb-6">
        <h2 className="retro-font-display text-2xl font-black uppercase tracking-widest text-[#00ffff] retro-text-glow retro-glitch">
          &gt; STORE / ITEMS <span className="text-xs text-[#ff00ff] font-light lowercase tracking-wider ml-2">coming soon</span>
        </h2>
      </div>

      <ContainerGlass>
        <div className="w-full min-h-[300px] flex flex-col items-center justify-center py-12 relative overflow-hidden">
          
          {/* Retro Pixel Loader (Spinning Neon Squares) */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-6">
            <div className="absolute w-24 h-24 border-4 border-dashed border-[#ff00ff] animate-[spin_4s_linear_infinite] shadow-[0_0_15px_#ff00ff]"></div>
            <div className="absolute w-16 h-16 border-4 border-dotted border-[#00ffff] animate-[spin_3s_linear_infinite_reverse] shadow-[0_0_15px_#00ffff]"></div>
            
            {/* Glowing Inner Core */}
            <div className="w-8 h-8 bg-[#00ffff] border-2 border-[#100720] flex items-center justify-center shadow-[0_0_20px_#00ffff] animate-pulse"></div>
          </div>

          {/* Loader Message */}
          <div className="flex flex-col items-center space-y-2">
            <p className="retro-font-display text-2xl font-black tracking-widest uppercase text-white retro-text-glow-pink retro-glitch">
              INSERT COIN TO UNLOCK
            </p>
            <p className="text-xs text-[#00ffff] font-medium tracking-wider uppercase">
              LOADING ASSETS... PREPARE FOR DEPLOYMENT.
            </p>
          </div>

        </div>
      </ContainerGlass>
    </div>
  );
}
