"use client";
import React from "react";
import { RiShoppingCartLine, RiStarFill } from "react-icons/ri";

const STORE_ITEMS = [
  { title: "Next.js Boilerplate", price: "$49", rating: 4.8 },
  { title: "Tailwind UI Kit", price: "$29", rating: 4.9 },
  { title: "Consulting Hour", price: "$120", rating: 5.0 },
];

export default function StoreApp() {
  return (
    <div className="p-6 md:p-10 h-full font-sans text-gray-800 dark:text-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Digital Store</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Assets, templates, and services.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORE_ITEMS.map((item, idx) => (
          <div key={idx} className="bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow backdrop-blur-md flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
              <RiShoppingCartLine className="text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
            <div className="flex items-center gap-1 text-yellow-500 mb-4">
              <RiStarFill className="text-sm" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{item.rating}</span>
            </div>
            <div className="mt-auto w-full">
              <button className="w-full py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-black text-white rounded-lg font-medium text-sm transition-colors">
                Buy for {item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
