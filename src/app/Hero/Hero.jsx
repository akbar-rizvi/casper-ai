"use client"
import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {


  const handleBusinesspage=()=>{
    window.location.href="/Business"
  }

  useEffect(() => {
  AOS.init({ duration: 1000 }); 
}, []);

  return (
    <div className="">
      <div className="">
        <video
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          style={{
            width: "100vw", // full viewport width
            height: "60vh", // half viewport height
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src="video.mp4" />
        </video>
      </div>

      <div className=" w-full flex flex-col sm:flex-row sm:items-center sm:justify-center rounded-md  gap-0 -mt-1">
        {/* <button className="w-full border-radius-left shadow-2xl sm:w-auto border-1 border-black/20 cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Content Creator
        </button> */}
        <button onClick={handleBusinesspage} className="w-full border-radius-left shadow-2xl sm:w-auto border-1 border-black/20 cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Business Pages & Brands
        </button>
        <button className="w-full border-radius-right  sm:w-auto border-1 border-black/20 shadow-lg cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Social Media Marketer
        </button>
      </div>

      <div
        className="w-full flex flex-col items-center justify-center sm:mt-2 mt-2 md:30"
        data-aos="fade-up">
  <p className="text-3xl text-blue-800 font-bold mt-10">Hey</p>
  <p className="text-3xl font-bold">Creators !</p>
  <p className="px-5 text-center">
    Have Content Already? Optimize it with Casper Ai
  </p>
</div>

    </div>
  );
};

export default Hero;
