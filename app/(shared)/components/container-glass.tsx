import React from "react";

const ContainerGlass = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col gap-4 w-full overflow-auto backdrop-blur bg-white/10 border-white/30 border rounded-xl shadow p-8">
      {children}
    </div>
  );
};

export default ContainerGlass;
