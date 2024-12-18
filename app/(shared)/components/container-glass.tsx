import React from "react";

const ContainerGlass = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col gap-4 w-full overflow-auto backdrop-blur bg-[#FFDAB9] border-slate-950 border  shadow p-8">
      {children}
    </div>
  );
};

export default ContainerGlass;
