"use client";
import React, { useEffect } from "react";

import { HiOutlinePaperClip } from "react-icons/hi";
import { PiPaperPlaneRightBold } from "react-icons/pi";

import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

import CountUp from 'react-countup';

const Article = () => {
  


    useEffect(() => {
      AOS.init({ duration: 1000 });
    });



  return (
    <div className="min-h-[100vh] flex flex-col" id="usecases">
      <div className="p-4 flex flex-col gap-5 md:flex-row relative  md:items-center md:justify-around md:mt-5  ">
        
        <div className="p-4 my-5 flex flex-col gap-5 md:flex-row relative md:items-center md:justify-around md:mt-5 lg:pl-30">
          <div className="relative w-full max-w-[400px] h-auto flex flex-col mx-auto rounded-ful">
            <img
              src="/vrimage.png"
              alt="main"
              className="rounded-[30px] shadow-md shadow-black/50 w-full h-auto "
            />

            {/* Top-left */}
            <img
              src="/twitter.png"
              alt="twitter"
              data-aos="zoom-in"
              className="absolute top-[-45px] left-[-20px] w-[70px] h-[70px] rounded-full"
            />

            {/* Top-right */}
            <img
              src="/youtube.png"
              alt="youtube"
              data-aos="zoom-in"
              className="absolute top-[-50px] right-[-20px] w-[70px] h-[70px] rounded-full"
            />

            <img
              src="/insta.png"
              alt="youtube"
              data-aos="zoom-in"
              className="absolute top-50 right-[-40px] w-[90px] h-[90px] rounded-full z-3"
            />

            {/* Bottom-left */}
            <img
              src="/pinterest.png"
              alt="pinterest"
              data-aos="zoom-in"
              className="absolute bottom-[120px] left-[-40px] w-[80px] h-[80px] rounded-full"
            />

            {/* Bottom-right */}
            <img
              src="/linkedin.png"
              alt="linkedin"
              data-aos="zoom-in"
              className="absolute bottom-20 right-20 w-[80px] h-[70px]   backdrop-filter"
            />

            <div className="prompt rounded-md bg-black/10 p-2 mt-20 ">
              <p className="flex gap-3">
                <HiOutlinePaperClip className="text-3xl text-gray-800 rotate-[-45deg]" />
                <span className="font-thin">
                  Hey casper! lets turn this img into a Insta optimized for max
                  reach.
                </span>
                <PiPaperPlaneRightBold className="text-3xl text-gray-800" />
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[400px] mx-auto">
          <img
            src="/vrimage.png"
            alt="logo"
            className="rounded-lg w-full h-auto"
          />

          <div className="flex flex-wrap items-center justify-between my-1">
            {/* Icons Section */}
            <div className="flex items-center gap-1">
              <FaRegHeart className="text-xl" />
              <span><CountUp end={120} duration={3} />k</span>
            </div>
            <div className="flex items-center gap-1">
              <BiMessageRounded className="text-2xl" />
              <span> <CountUp end={330} duration={4} />K</span>
            </div>
            <div className="flex items-center gap-1">
              <LuSend className="text-2xl" />
              <span><CountUp end={56} duration={2} />K</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegBookmark />
              <span><CountUp end={189} duration={2} /></span>
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center gap-1 cursor-pointer  hover:scale-98 shadow-lg shadow-black/50  bg-black w-30 mx-auto my-5 text-white px-3 py-2 rounded-md text-sm">
        <span className="text-xl font-thin ">Try</span>
        <span>
          <FaArrowRight />
        </span>
      </button>
    </div>
  );
};

export default Article;
