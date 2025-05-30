'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handletoHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log('menuOpen is:', menuOpen);
  }, [menuOpen]);

  return (
    <div className='w-[90vw] mx-auto overflow-hidden rounded-full shadow-md flex justify-between h-14 items-center p-4 bg-black/10 backdrop-blur-lg border-gray-100 sticky top-5 z-30'>
      {/* Logo */}
      <div className='flex items-center cursor-pointer' onClick={handletoHome}>
        <img src="/cas.png" alt="logo" width={50} height={50} />
        <p className='ml-[-16px] pt-1 whitespace-nowrap'>
          <span className='text-blue-500 text-xl font-bold'>CASPER</span>&nbsp;
          <span className='font-bold text-xl text-white'>AI</span>
        </p>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex items-center px-8  gap-10 transition-colors duration-300 ${isScrolled ? 'text-black/90' : 'text-white'}`}>
        <p className='cursor-pointer'>Home</p>
        <p className='cursor-pointer hover:text-blue-500'>Features</p>
        <p className='cursor-pointer hover:text-blue-500'>How it works</p>
        <p className='cursor-pointer hover:text-blue-500'>Use Cases</p>
      </div>

      {/* Desktop Buttons */}
      <div className='hidden md:flex items-center gap-5'>
        <p className='cursor-pointer text-white'>Login</p>
        <button className='flex items-center gap-1 font-thin bg-black text-white px-3 py-2 rounded-md text-sm'>
          Get Started <FaArrowRight />
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className='md:hidden p-3'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-black cursor-pointer text-xl'>
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-4 py-2 gap-3 md:hidden z-4'>
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
