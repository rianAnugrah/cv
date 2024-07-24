import React from "react";

const ContainerGlass = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[calc(100dvh_-_160px)]  lg:h-[calc(100dvh_-_160px)] flex flex-col gap-4 w-full overflow-auto backdrop-blur-sm bg-white/10 border-white/30 border rounded-xl shadow p-8">
      {children}
    </div>
  );
};

export default ContainerGlass;
