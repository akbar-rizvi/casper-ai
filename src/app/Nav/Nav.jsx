'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";
import GoogleLoginButton from '../Login';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); 
  }
};





  const handletoHome = () => {
    window.location.href = "/";
  };

  const ScrollToHome=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
  <>
    {/* Fixed navbar */}
    <div id="home" className='fixed top-5 left-1/2 transform -translate-x-1/2 w-[90vw] overflow-hidden rounded-full shadow-md flex justify-between h-14 items-center p-4 bg-black/10 backdrop-blur-lg border-gray-100 z-50'>
      {/* Logo */}
      <div className='flex items-center cursor-pointer' onClick={handletoHome}>
        <img src="/cas.png" alt="logo" width={50} height={50} />
        <p className='ml-[-16px] pt-1 whitespace-nowrap'>
          <span className='text-blue-500 text-xl font-bold'>CASPER</span>&nbsp;
          <span className='font-bold text-xl text-white'>AI</span>
        </p>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex items-center px-8 gap-10 transition-colors duration-300 ${isScrolled ? 'text-black/90' : 'text-white'}`}>
        <p className='cursor-pointer' onClick={ScrollToHome}>Home</p>
        <p className='cursor-pointer hover:text-blue-500' onClick={() => scrollToSection('features')}>Features</p>
        <p className='cursor-pointer hover:text-blue-500' onClick={() => scrollToSection('howitworks')}>How it works</p>
        <p className='cursor-pointer hover:text-blue-500' onClick={() => scrollToSection('usecases')}>Use Cases</p>
      </div>

      {/* Desktop Buttons */}
      <div className='hidden md:flex items-center gap-5'>
        <p className='cursor-pointer text-white'>
        <GoogleLoginButton />
        </p>
        <button className='flex items-center gap-1 font-thin bg-black text-white px-3 py-2 rounded-full cursor-pointer md:px-4 text-sm'>
          Get Started <FaArrowRight />
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className='md:hidden p-3'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-black cursor-pointer text-xl'>
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </div>

    {/* Mobile Menu -  */}
    <div
  className={`fixed top-[85px] left-1/2 transform -translate-x-1/2 w-[90vw] bg-white/5 shadow-md flex flex-col items-start px-4 py-2 gap-3 md:hidden z-40 rounded-lg backdrop-blur-sm transition-all duration-800 ease-in-out
    ${menuOpen ? 'opacity-100 scale-100 max-h-[500px] pointer-events-auto' : 'opacity-0 scale-95 max-h-0 overflow-hidden pointer-events-none'}
  `}
>
  <p className='cursor-pointer'  onClick={() => scrollToSection('features')}>Features</p>
  <p className='cursor-pointer'  onClick={() => scrollToSection('howitworks')}>How it works</p>
  <p className='cursor-pointer' onClick={() => scrollToSection('usecases')}>Use Cases</p>
  <hr className='w-full border-gray-200' />
  <p className='cursor-pointer' >Login</p>
  <button  className='flex items-center gap-1 rounded-full font-thin bg-black text-white px-3 py-1 rounded-sm' >
    Get Started <FaArrowRight />
  </button>
</div>

  </>
)
}


export default Navbar;




