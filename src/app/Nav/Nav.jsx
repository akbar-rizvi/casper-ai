'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaBars, FaTimes ,FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-screen overflow-hidden flex justify-between items-center p-4 bg-transparent border-b border-gray-100   z-50 sticky top-0 '>
      {/* Logo */}
      <div className='flex items-center md:flex-2'>
        <img src="/cas.png" alt="logo" width={50} height={50} />
        <p className='ml-[-16px] pt-1 whitespace-nowrap'>
          <span className='text-blue-500 text-xl font-bold'>CASPER</span>&nbsp;
          <span className='font-bold text-xl'>AI</span>
        </p>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center justify-between text-white   px-8 font-semibold md:flex-2 gap-3 sm:gap-1 sm:px-2 '>
        <p className='cursor-pointer text-gray-500  '>Home</p> <p className='cursor-pointer text-gray-500  hover:text-blue-500'>Features</p>
        <p className='cursor-pointer text-gray-500   hover:text-blue-500'>How it works</p>
        <p className='cursor-pointer text-gray-500   hover:text-blue-500 '>Use Cases</p>
      </div>

      {/* Desktop Buttons */}
      <div className='hidden md:flex items-center justify-end-safe gap-5 md:flex-2'>
        <p className='cursor-pointer text-white'>Login</p>
        <button className='flex items-center gap-1 font-thin bg-black text-white px-3 py-2 rounded-md text-sm'>
          Get Started <FaArrowRight />
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className='md:hidden p-3 '>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-xl'>
  {menuOpen ? <FaXmark  className='cursor-pointer'/>: <FaBars className='cursor-pointer' />}
</button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-[100%] left-0 w-full bg-white shadow-md flex z-200 flex-col items-start px-4 py-2 gap-3 md:hidden'>
          <p className='cursor-pointer'>Features</p>
          <p className='cursor-pointer'>How it works</p>
          <p className='cursor-pointer'>Use Cases</p>
          <hr className='w-full border-gray-200' />
          <p className='cursor-pointer'>Login</p>
          <button className='flex items-center gap-1 font-thin bg-black text-white px-3 py-1 rounded-sm'>
            Get Started <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
