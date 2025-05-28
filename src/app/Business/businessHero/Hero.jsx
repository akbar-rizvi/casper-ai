"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BuusinessHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="min-h-screen relative top-[-10px]">
      <div className=" relative">
        <video
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          style={{
            width: "100vw", // full viewport width
            height: "100vh", // half viewport height
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src="business_vedio.mp4" />
        </video>
      </div>

      <div className=" w-full flex flex-col sm:flex-row sm:items-center sm:justify-center rounded-md  gap-0 -mt-6 absolute top-[77vh] z-34">
        {/* <button className="w-full border-radius-left shadow-2xl sm:w-auto border-1 border-black/20 cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Content Creator
        </button> */}
        <button className="w-full border-radius-left shadow-2xl sm:w-auto border-1 border-black/20 cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Business Pages & Brands
        </button>
        <button className="w-full border-radius-right  sm:w-auto border-1 border-black/20 shadow-lg cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Social Media Marketer
        </button>
      </div>

      <div
        className="w-full flex flex-col items-center justify-center sm:mt-2 md:mt-10 mt-4"
        data-aos="fade-up"
      >
        <p className="md:mt-10 ">
          <span className="text-3xl text-blue-800 font-bold ">Hey</span>{" "}
          <span className="text-3xl font-bold ">Business</span>
        </p>
        <p className="text-3xl font-bold">Owners !</p>
        <p className="px-5 text-center">
          According to HubSpot data, 47% of buyers view three to five content
          pieces before contacting sales representatives,
        </p>
      </div>
    </div>
  );
};

export default BuusinessHero;
