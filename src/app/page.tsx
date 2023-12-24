import React from 'react';

import Bio from './components/bio/bio';
import Projects from './components/projects/projects';

export default function page() {
  return (
    <div className='flex flex-col md:flex-row w-full '>
      <div className='w-full md:w-[360px] overflow-auto pb-20 h-[100svh] bg-black custom-scroll'>
        <Bio />
        <Projects />

        <div className='fixed border-t border-gray-700 text-gray-700 flex bottom-0 text-xs bg-black left-0 w-full md:w-[360px] h-[60px] items-center justify-evenly'>
          <a className='hover:text-gray-400 cursor-pointer p-2 '>RA</a>
          <a className='hover:text-gray-400 cursor-pointer p-2 '>Projects</a>
          <a className='hover:text-gray-400 cursor-pointer p-2 '>Thoughts</a>
          <a className='hover:text-white cursor-pointer border border-orange-500 text-orange-500 rounded-sm p-2 hover:bg-orange-500'>
            Hire Me
          </a>
        </div>
      </div>
      <div className='p-10 flex-grow hidden md:flex'>Portal</div>
    </div>
  );
}
