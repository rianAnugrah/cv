"use client"
// components/TextReveal.js
import { useEffect, useState } from 'react';

const texts = [
  'Hello, I am Software Architect',
  'Hello, I am Frontend Engineer',
  'Hello, I am UI/UX Designer',
  'Hello, I am Fullstack Developer'
];

export default function TextReveal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center h-8 relative w-full ">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ease-in-out absolute ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
