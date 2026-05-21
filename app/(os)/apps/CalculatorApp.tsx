"use client";
import React, { useState } from "react";

export default function CalculatorApp() {
  const [display, setDisplay] = useState("0");

  const handleInput = (val: string) => {
    if (display === "0") setDisplay(val);
    else setDisplay(display + val);
  };

  const calculate = () => {
    try {
      // Basic safe eval equivalent for simple calculator
      // eslint-disable-next-line no-new-func
      const result = new Function('return ' + display)();
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => setDisplay("0");

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-[#1a1a1a] p-4 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-black p-4 text-right text-3xl font-mono rounded shadow-inner mb-4 overflow-hidden truncate">
        {display}
      </div>
      
      <div className="grid grid-cols-4 gap-2 flex-1">
        {["7", "8", "9", "/"].map(btn => (
          <button key={btn} onClick={() => handleInput(btn)} className="bg-white dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#333] rounded shadow text-xl font-medium">{btn}</button>
        ))}
        {["4", "5", "6", "*"].map(btn => (
          <button key={btn} onClick={() => handleInput(btn)} className="bg-white dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#333] rounded shadow text-xl font-medium">{btn}</button>
        ))}
        {["1", "2", "3", "-"].map(btn => (
          <button key={btn} onClick={() => handleInput(btn)} className="bg-white dark:bg-[#2a2a2a] hover:bg-gray-200 dark:hover:bg-[#333] rounded shadow text-xl font-medium">{btn}</button>
        ))}
        {["C", "0", "=", "+"].map(btn => (
          <button 
            key={btn} 
            onClick={() => {
              if (btn === "C") clear();
              else if (btn === "=") calculate();
              else handleInput(btn);
            }} 
            className={`${btn === "C" ? 'bg-red-500 text-white' : btn === "=" ? 'bg-blue-500 text-white' : 'bg-white dark:bg-[#2a2a2a]'} hover:brightness-110 rounded shadow text-xl font-medium`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
