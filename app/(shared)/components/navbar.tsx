"use client";
import AboutPage from "@/app/about/page";
import Home from "@/app/home/page";
import ResumePage from "@/app/resume/page";
import StorePage from "@/app/store/page";
import WorksPage from "@/app/works/page";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import {
  RiAccountCircleLine,
  RiAwardLine,
  RiBriefcase2Line,
  RiHome2Line,
  RiShoppingBag2Line,
} from "react-icons/ri";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const menuItems = ["Home", "Works", "About", "Resume", "Store"];
  const menuIcons = [
    RiHome2Line,
    RiBriefcase2Line,
    RiAccountCircleLine,
    RiAwardLine,
    RiShoppingBag2Line,
  ];
  const contents = [Home, WorksPage, AboutPage, ResumePage, StorePage];

  // Refs to sections
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sound Engine (8-bit Arcade Style)
  const playHoverSound = () => {
    if (typeof window === "undefined") return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = "square";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {}
  };

  const playClickSound = () => {
    if (typeof window === "undefined") return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      // Arcade coin/jump sound
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      osc1.type = "square";
      osc1.frequency.setValueAtTime(987.77, ctx.currentTime); // B5
      osc1.frequency.setValueAtTime(1318.51, ctx.currentTime + 0.1); // E6
      
      gain1.gain.setValueAtTime(0.05, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      
      osc1.start();
      osc1.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  };

  // Scroll tracking with Intersection Observer
  useEffect(() => {
    const currentSections = sectionRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = currentSections.indexOf(
              entry.target as HTMLDivElement
            );
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (index: number) => {
    playClickSound();
    setActiveIndex(index);
  
    const offset = 4 * 16; // 4rem converted to pixels
    const section = sectionRefs.current[index];
  
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed h-[4.5rem] w-full top-0 flex justify-center bg-[#100720]/90 text-white border-b-2 border-[#ff00ff]/50 z-50 backdrop-blur-md">
        <ul className="flex items-center w-full justify-between lg:max-w-[64rem] px-4 md:px-0">
          
          {/* Logo & Name block */}
          <div className="flex items-center space-x-2 border-2 border-[#00ffff] bg-[#100720] px-4 py-1.5 shadow-[4px_4px_0px_#ff00ff]">
            <div className="flex items-center space-x-2">
              <Image src={`/img/logo.png`} className="h-8 w-8 object-contain retro-glitch mix-blend-screen hue-rotate-180" width={40} height={40} alt="Rian logo" />
              <span className="retro-font-display text-[#00ffff] font-extrabold tracking-widest text-xl retro-text-glow retro-glitch">RIAN.SYS</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex items-center h-full space-x-1 md:space-x-2">
            {menuItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <li
                  key={index}
                  className={`relative cursor-pointer h-[3.2rem] px-3 md:px-5 flex items-center justify-center transition-all duration-200 border-2 border-transparent ${
                    isActive 
                      ? "bg-[#8b00ff]/30 text-[#00ffff] border-[#00ffff] shadow-[0_0_12px_rgba(0,255,255,0.6)] font-black"
                      : "text-gray-300 hover:bg-[#ff00ff]/20 hover:text-[#ff00ff] hover:border-[#ff00ff]"
                  }`}
                  onMouseEnter={() => {
                    setHoverIndex(index);
                    playHoverSound();
                  }}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => handleClick(index)}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center md:space-x-2">
                    {React.createElement(menuIcons[index], { className: "text-xl md:text-lg" })}
                    <span className="retro-font-display text-[12px] md:text-lg font-semibold tracking-widest uppercase md:block hidden">{item}</span>
                  </div>
                </li>
              );
            })}
          </div>

          {/* Hire Me (Arcade Coin Button) */}
          <li 
            className="bg-[#ff00ff] hover:bg-[#00ffff] text-[#100720] font-black uppercase text-xs md:text-lg px-4 md:px-6 h-[2.8rem] flex items-center justify-center cursor-pointer border-2 border-[#100720] shadow-[4px_4px_0px_#00ffff] hover:shadow-[4px_4px_0px_#ff00ff] transition-all duration-200"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <a 
              href="https://wa.me/6285720880038?text=Hi%20Rian%2C%20I%20want%20to%20discuss%20a%20project%20with%20you!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="tracking-widest retro-font-display animate-pulse"
            >
              INSERT COIN
            </a>
          </li>
        </ul>
      </nav>

      {/* Content wrapper with deep-ocean theme */}
      <div className="flex flex-col items-center w-full px-4 md:px-0 mt-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              if (el) sectionRefs.current[index] = el;
            }}
            className="w-full flex flex-col items-center justify-center py-16 scroll-mt-20 border-b border-cyan-950/20"
          >
            {React.createElement(contents[index])}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;
