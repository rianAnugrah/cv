"use client"
import AboutPage from '@/app/about/page';
import Home from '@/app/home/page';
import ResumePage from '@/app/resume/page';
import StorePage from '@/app/store/page';
import WorksPage from '@/app/works/page';
import React, { useRef, useState } from 'react';

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

  

  

const MagicMenuWithScrollDesktop = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const menuItems = ['Home', 'About', 'Resume', 'Works', 'Store'];
  const menuIcons = [<RiHome2Line />,<RiAccountCircleLine />,<RiAwardLine />,<RiBriefcase2Line />,<RiShoppingBag2Line />];
  const contents = [<Home />,<AboutPage />,<ResumePage />,<WorksPage/>,<StorePage/>]

  // Refs to sections
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div >
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 hidden lg:flex justify-center items-center h-16 bg-gray-900 text-white z-20 px-4 rounded-t-xl">
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
      <div  >
        {menuItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex flex-col items-center justify-center bg-gray-700 text-white "
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
