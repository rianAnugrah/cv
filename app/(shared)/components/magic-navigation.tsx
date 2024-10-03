"use client"
import AboutPage from '@/app/about/page';
import Home from '@/app/home/page';
import ResumePage from '@/app/resume/page';
import StorePage from '@/app/store/page';
import WorksPage from '@/app/works/page';
import React, { useEffect, useRef, useState } from 'react';

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

  

  

const MagicMenuWithScroll = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const menuItems = ['Home', 'About', 'Resume', 'Works', 'Store'];
  const menuIcons = [<RiHome2Line />,<RiAccountCircleLine />,<RiAwardLine />,<RiBriefcase2Line />,<RiShoppingBag2Line />];
  const contents = [<Home />,<AboutPage />,<ResumePage />,<WorksPage/>,<StorePage/>]

  // Refs to sections
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);




  // Scroll tracking with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
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
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <div >

        {/* MOBILE MENU */}
      <nav className="fixed bottom-2 w-[calc(100vw_-_32px)] flex lg:w-auto transform left-1/2 -translate-x-1/2 justify-center items-center h-16 bg-gray-900 text-white z-20 px-4 rounded-xl ">
        <ul className="flex space-x-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`relative group cursor-pointer w-12 flex  flex-col items-center justify-center ${activeIndex === index ? " -top-5 " : " top-0"} transition-all duration-500 ease-in-out`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleClick(index)}
            >
              <div className={` z-10 `}>{menuIcons[index]}</div>
              <div className={` z-10 w-12 text-xs text-center `}>{item}</div>
              {/* Curved outside effect on hover and active */}
              <div
                className={`absolute -top-3 left-1/2 transform -translate-x-1/2 h-14 border-4 border-gray-900 w-14 ${ hoverIndex === index && "bg-teal-800" } ${ activeIndex === index && "bg-teal-600"}  rounded-full transition-all duration-500 ease-in-out ${
                  hoverIndex === index || activeIndex === index
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0'
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>



      {/* Sections to scroll to */}
      <div  className='h-screen overflow-auto'>
        {menuItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex flex-col items-center justify-center text-white "
          >
            {/* <h1 className="text-4xl">{item} Section</h1> */}
            {contents[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagicMenuWithScroll;
