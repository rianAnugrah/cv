"use client";
import React from "react";
import { RiStore2Line } from "react-icons/ri";

export default function StoreApp() {
  return (
    <div className="h-full font-sans text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center gap-6 p-10">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-2xl">
        <RiStore2Line className="text-4xl text-white" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Store</h2>
        <p className="text-lg font-medium text-blue-500">Coming soon</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xs">
          Something exciting is being built here. Stay tuned!
        </p>
      </div>
    </div>
  );
}
