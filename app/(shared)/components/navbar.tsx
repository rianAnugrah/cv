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

  // Sound Engine
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
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(900, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.06);
      
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (e) {}
  };

  const playClickSound = () => {
    if (typeof window === "undefined") return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      // Main retro chirp
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(500, ctx.currentTime);
      osc1.frequency.setValueAtTime(1100, ctx.currentTime + 0.03);
      osc1.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.09);
      
      gain1.gain.setValueAtTime(0.06, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
      
      osc1.start();
      osc1.stop(ctx.currentTime + 0.09);
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
      <nav className="fixed h-[4.5rem] w-full top-0 flex justify-center bg-[#02050f]/90 text-white border-b-2 border-[#00f0ff]/30 z-50 backdrop-blur-md p3r-bg-grid">
        <ul className="flex items-center w-full justify-between lg:max-w-[64rem] px-4 md:px-0">
          
          {/* Logo & Name block */}
          <div className="flex items-center space-x-2 skew-x-[-12deg] bg-[#00f0ff]/10 border border-[#00f0ff]/40 px-4 py-1.5 shadow-[2px_2px_0px_#ff3e6c]">
            <div className="skew-x-[12deg] flex items-center space-x-2">
              <Image src={`/img/logo.png`} className="h-8 w-8 object-contain" width={40} height={40} alt="Rian logo" />
              <span className="p3r-font-display text-[#00f0ff] font-extrabold tracking-widest text-lg p3r-text-glow">RIAN.SYS</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex items-center h-full space-x-1 md:space-x-2">
            {menuItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <li
                  key={index}
                  className={`relative cursor-pointer h-[3.2rem] px-3 md:px-5 skew-x-[-12deg] flex items-center justify-center transition-all duration-200 border-t border-b border-transparent ${
                    isActive 
                      ? "bg-[#00f0ff] text-[#02050f] border-x border-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.6)] font-black"
                      : "text-gray-300 hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] hover:border-x hover:border-[#00f0ff]/30"
                  }`}
                  onMouseEnter={() => {
                    setHoverIndex(index);
                    playHoverSound();
                  }}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => handleClick(index)}
                >
                  {/* Skew reversed text & icon */}
                  <div className="skew-x-[12deg] flex flex-col md:flex-row items-center justify-center md:space-x-1">
                    {React.createElement(menuIcons[index], { className: "text-lg md:text-md" })}
                    <span className="p3r-font-display text-[10px] md:text-sm font-semibold tracking-wider uppercase md:block hidden">{item}</span>
                  </div>
                  
                  {/* Decorative P3R line at the bottom of active tab */}
                  {isActive && (
                    <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#ff3e6c]" />
                  )}
                </li>
              );
            })}
          </div>

          {/* Hire Me (P3R Combat HUD/Skill Button Style) */}
          <li 
            className="skew-x-[-12deg] bg-[#ff3e6c] hover:bg-white text-white hover:text-black font-black uppercase text-xs md:text-sm px-4 md:px-6 h-[2.8rem] flex items-center justify-center cursor-pointer border border-[#ff3e6c] shadow-[3px_3px_0px_#00f0ff] transition-all duration-200"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <a 
              href="https://wa.me/6285720880038?text=Hi%20Rian%2C%20I%20want%20to%20discuss%20a%20project%20with%20you!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="skew-x-[12deg] tracking-widest p3r-font-display"
            >
              HIRE.EXE
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
