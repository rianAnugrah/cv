import React from "react";

const ContainerGlass = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 w-full overflow-auto backdrop-blur-md bg-[#0a152d]/70 border border-cyan-500/30 p-8 shadow-[6px_6px_0px_#00f0ff] relative before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-[#00f0ff]">
      {children}
    </div>
  );
};

export default ContainerGlass;
