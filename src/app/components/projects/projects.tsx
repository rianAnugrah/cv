import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col w-full px-6 border-t border-gray-700 text-gray-400">
      <p className="text-xl py-6">Past Projects</p>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

const Project = () => {
  return (
    <div className="border rounded border-gray-700 group hover:border-gray-400 mb-6">
      <img
        src="https://dummyimage.com/600x400/c1c1c1/fff.png&text=Project+Thumbnail"
        className="w-full h-[200px]"
      />
      <p className="px-6 py-4 text-sm text-gray-700 group-hover:text-gray-400">
        Temperature & Humidity Monitoring System
      </p>
      <div className="flex gap-2 px-6 pb-4">
        <Pile>HTML</Pile>
        <Pile>CSS</Pile>
        <Pile>PHP</Pile>
      </div>
    </div>
  );
};

const Pile = ({ children }) => {
  return (
    <div className="rounded-sm px-2 py-1 border text-gray-400 border-gray-400 text-xs">
      {children}
    </div>
  );
};
