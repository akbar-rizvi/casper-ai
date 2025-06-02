"use client";
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import GlowingMicrophone from '../mic/Mic';

const Blog = () => {
  return (
    <div className="min-h-screen w-full px-4 md:px-10 flex flex-col gap-16">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-10 mb-10">
        {/* Left Image Section */}
        <div className="relative flex justify-center items-center md:w-1/2">
          <img src="/saas.jpg" alt="main" className="w-[80%] max-w-xl max-h-[90vh] " />
          <img src="/agency.jpg" alt="main" className="absolute md:left-[30%] max-h-[70vh]  lg:left-[40%] md:top-[15%] top-[8%] left-[40%] w-[60%] max-w-xl right-20%" />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col items-center gap-6 text-center ">
          <p className="text-4xl md:text-6xl font-bold">
            ARTICLE / <span className="text-blue-800">BLOG</span>
          </p>
          <p className="text-sm md:text-base">
            “Writing has always been my passion, but I often struggle to engage with readers and express my thoughts clearly.”
          </p>

          <div className="text-left">
            <p className="text-sm font-bold">A Guide to Streamlining Your Business</p>
            <p className="text-sm text-black/80">
              Running a business can be hard, but making it simple can help you save time and money. To streamline your business, start by looking at daily tasks. Are there steps you can remove or make faster? Use tools like computers or apps to help with work. For example, you can send emails instead of printing papers. Talk to your team often and make sure everyone knows what to do. Keep your plans clear and your goals simple. When your business runs smoothly, you can focus on growing it. A few small changes can make a big difference.
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xl font-semibold">“Casper Gave me-”</p>
            <button className="rounded-full border-2 border-black px-6 py-2 hover:shadow-lg hover:scale-90 transition-transform flex items-center gap-3">
              <span>Try</span>
              <FaArrowRight />
            </button>
          </div>

          {/* Woman Section with Bubbles */}
          <div className="relative w-full max-w-sm h-[300px] mx-auto">
            <img
              src="/woman.png"
              alt="main"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]"
            />
            <p className="absolute top-0 left-15 md:left-0 transform -translate-x-1/2 bg-blue-500 text-white text-xs md:text-sm font-semibold rounded-full p-2">
              Better Citations
            </p>
            <p className="absolute top-10 md:right-[-40px] right-10 bg-blue-500 text-white text-xs md:text-sm font-semibold rounded-full p-2">
              Ultra-Realistic imgs
            </p>
            <p className="absolute bottom-10 right-10 md:right-[-20px] bg-blue-500 text-white text-xs md:text-sm font-semibold rounded-full p-2">
              Niche Target
            </p>
            <p className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs md:text-sm font-semibold rounded-full p-2">
              Smart Audience
            </p>
            <p className="absolute bottom-[50px] left-20 md:left-[-60px] bg-blue-500 text-white text-xs md:text-sm font-semibold rounded-full p-2">
              SEO-Optimisation
            </p>
          </div>
        </div>
      </div>

      {/* Podcast Section */}
      <div className='flex flex-col  gap-20'>
        <div className="w-full   gap-4">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-2xl text-center">
            <p className="text-3xl md:text-4xl font-bold">THE PODCAST EPISODE</p>
            <p className="text-sm text-black/50 p-3">
              Suffers from poor audio quality, lack of structure, unclear messaging, or unengaging delivery, which negatively impacts the listener experience and fails to effectively communicate the intended message.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-around w-full gap-2 max-h-[500px]">
            <div className="flex flex-col items-center">
              <img src="/host1.png" alt="main" className="w-48 md:w-72 p-3" />
              <p className="bg-blue-500 text-white text-xs md:text-sm font-semibold rounded-full p-2 text-center -mt-4">
                After AI :"I think we could..."
              </p>
            </div>
            <div>
                <GlowingMicrophone />
              {/* <img src="/podcasts.png" alt="main" className="w-48 md:w-60" /> */}
            </div>
            <div className="flex flex-col items-center">
              <img src="/host2.png" alt="main" className="w-48 md:w-72 p-1" />
              <p className="bg-blue-500 text-white text-xs md:text-sm font-semibold rounded-full p-2 text-center -mt-4">
                "Sooo... umm... I think... maybe... like, we could—uh, yeah..."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 p-3 mt-100 md:mt-0 ">
        <div className="text-center md:text-left">
          <p className="font-bold">Gear up for success with full optimization for all major platforms</p>
          <p className="font-light text-sm text-black/70">
            — including Spotify, Apple Podcasts, Google Podcasts, and more!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex items-center gap-4">
            <img src="/medium.png" alt="main" className="w-8 h-8" />
            <img src="/spotify.png" alt="main" className="w-8 h-8" />
            <img src="/Podcast_io.png" alt="main" className="w-8 h-8" />
          
          </div>
          <button className="flex items-center justify-center gap-2 hover:scale-90 transition-transform border border-black px-4 py-2 rounded-full text-sm">
            <span className="text-lg font-light">Try</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
      </div>

       
    </div>
  );
};

export default Blog;