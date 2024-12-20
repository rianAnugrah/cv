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
  RiBloggerLine,
  RiBriefcase2Line,
  RiHome2Fill,
  RiHome2Line,
  RiSettings2Line,
  RiShoppingBag2Line,
} from "react-icons/ri";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const menuItems = ["Home", "Works", "About", "Resume",  "Store"];
  const menuIcons = [
    RiHome2Line,
    RiBriefcase2Line,
    RiAccountCircleLine,
    RiAwardLine,
    RiShoppingBag2Line,
  ];
  const contents = [Home, WorksPage, AboutPage, ResumePage,  StorePage];

  // Refs to sections
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll tracking with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is in view
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  
    const offset = 4 * 16; // 4rem converted to pixels (adjust if root font size differs)
    const section = sectionRefs.current[index];
  
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* MOBILE MENU */}
      <nav className="fixed h-[4rem] w-full top-0 flex justify-center bg-[#f7f7f7] text-gray-950  z-10">
        <ul className="flex space-x-[1px] items-center w-full justify-center  lg:max-w-[64rem] border border-slate-950 bg-[#f7f7f7]">
          <Image src={`/img/logo.png`} className="h-full w-[4rem] relative " width={200} height={200} alt="Rian logo" />
          <li className="text-[#222] text-3xl px-[1rem]  hidden md:flex">Rian</li> 
          <li className=" hidden md:flex flex-grow "></li>

          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`relative group cursor-pointer hover:bg-[#B8E2C8] text-[#222]   w-[4rem] h-full  flex  flex-col items-center justify-center ${
                activeIndex === index ? " -top-0 " : " top-0"
              } transition-all duration-300 ease-in-out`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleClick(index)}
            >
              <div className={` z-10 `}>
                {" "}
                {React.createElement(menuIcons[index])}
              </div>
              <div className={` z-10 w-12 text-xs text-center `}>{item}</div>
              {/* Curved outside effect on hover and active */}
              <div
                className={`absolute hidden -top-0 left-1/2 transform -translate-x-1/2 h-14 border-4  w-14 ${
                  hoverIndex === index && "bg-teal-800"
                } ${
                  activeIndex === index && "bg-teal-600"
                }  transition-all duration-500 ease-in-out ${
                  hoverIndex === index || activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              />
            </li>
          ))}


          <li className="text-[#222] border-l  hidden md:flex border-slate-950 hover:text-[#f7f7f7] transition-all duration-300  text-xl px-[2rem] h-full relative group cursor-pointer bg-[#FF6600]   flex-col items-center justify-center "><a href="https://wa.me/6285720880038?text=Hi%20Rian%2C%20I%20want%20to%20discuss%20a%20project%20with%20you!" target="_blank" rel="noopener noreferrer">Hire Me</a></li>
        </ul>
      </nav>

      {/* Sections to scroll to */}
      <div className=" overflow-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              if (el) sectionRefs.current[index] = el;
            }}
            className=" flex flex-col items-center justify-center text-white "
          >
            {/* <h1 className="text-4xl">{item} Section</h1> */}
            {React.createElement(contents[index])}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;
