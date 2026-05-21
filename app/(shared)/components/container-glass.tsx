import React from "react";

const ContainerGlass = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 w-full overflow-auto bg-[#100720]/80 border-2 border-[#ff00ff] p-8 retro-box-glow relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#00ffff]">
      {children}
    </div>
  );
};

export default ContainerGlass;
