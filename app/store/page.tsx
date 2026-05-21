import React from "react";
import ContainerGlass from "@/app/(shared)/components/container-glass";

export default function StorePage() {
  return (
    <div className="w-full max-w-[64rem] mb-6 gap-4 flex flex-col items-start pt-4 text-white">
      
      {/* Title */}
      <div className="skew-x-[-12deg] bg-[#02050f]/60 border-b-2 border-[#ff3e6c] px-6 py-2 w-fit mb-6">
        <h2 className="skew-x-[12deg] p3r-font-display text-2xl font-black uppercase tracking-widest text-white p3r-text-glow-pink">
          Store / Items <span className="text-xs text-[#00f0ff] font-light lowercase tracking-wider ml-2">coming soon</span>
        </h2>
      </div>

      <ContainerGlass>
        <div className="w-full min-h-[300px] flex flex-col items-center justify-center py-12 relative overflow-hidden">
          
          {/* Outer Cyber Grid dial (Clockwise Spin) */}
          <div className="relative w-44 h-44 rounded-full border border-dashed border-[#00f0ff]/40 flex items-center justify-center animate-[spin_12s_linear_infinite] mb-6">
            
            {/* Inner Revolver Cylinder (Counter-clockwise Spin) */}
            <div className="relative w-32 h-32 rounded-full border-2 border-double border-[#ff3e6c]/50 flex items-center justify-center animate-[spin_8s_linear_infinite_reverse]">
              
              {/* Bullet Chambers (P3R Revolver cylinder design) */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-4 h-4 rounded-full border border-[#00f0ff]/80 bg-[#02050f] shadow-[0_0_4px_#00f0ff]"
                  style={{
                    transform: `rotate(${deg}deg) translate(0, -48px)`,
                  }}
                />
              ))}

              {/* Glowing Inner Core */}
              <div className="w-12 h-12 bg-[#02050f] border-2 border-[#00f0ff] rounded-full flex items-center justify-center shadow-[0_0_15px_#00f0ff] animate-pulse">
                <span className="p3r-font-display text-[10px] text-[#00f0ff] font-black">P3R</span>
              </div>

            </div>
          </div>

          {/* Loader Message */}
          <div className="flex flex-col items-center space-y-1">
            <p className="p3r-font-display text-lg font-black tracking-widest uppercase text-white p3r-text-glow">
              System Loading
            </p>
            <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">
              Chambers aligning... Items preparing for deployment.
            </p>
          </div>

        </div>
      </ContainerGlass>
    </div>
  );
}
