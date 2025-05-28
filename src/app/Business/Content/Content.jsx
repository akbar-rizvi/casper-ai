import React from "react";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';


const Content = () => {
  return (
    <div className="min-h-screen">
      {/* heading grafics  */}
      <div className="">
        <p className="md:text-4xl text-3xl font-bold pl-8">Supercharge Your Content Everywhere</p>
        <p className="px-10">
          Turn your article, video, image, or podcast into a perfectly optimized
          post for every major platform{" "}
        </p>
        <p className="px-5 font-thin text-sm pl-10">— automatically.</p>
      </div>

      {/* icons div */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-around md:gap-2 p-4 gap-2 w-[80vw] mx-auto gap-5 my-20">
        <div className="flex flex-col items-center  justify-center ">
          <div>
            <img src="/people.png" alt="people" className="size-20" />
          </div>
          <div className="border-1 border-black/20 p-4 rounded-xl shadow-md ">
            <p className="text-center text-lg font-bold p-2 ">Product Advisor Agent</p>
            <p className="font-thin p-4">
              Guides customers through product options Delivers personalized
              recommendations in real time
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-center">
          <div>
            <img src="/people.png" alt="people" className="size-20" />
          </div>
          <div className="border-1 border-black/20 p-4 rounded-xl shadow-md">
            <p className="text-center text-lg font-bold p-2">Persona Builder Agent</p>
            <p className="font-thin p-4">
              Uncovers who your best customers are Segments and profiles
              audiences for targeted campaigns Persona Builder Agent
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-center gap-3 shadow-md">
          <div>
            <img src="/market-share.png" alt="people" className="size-16" />
          </div>
          <div className="border-1 border-black/20 p-4 rounded-xl py-6">
            <p className="text-center font-bold text-lg">Sales Leads Agent</p>
            <p className="font-thin p-4">
              Generates and qualifies leads 24/7 Automates follow‑up messages to
              boost conversions
            </p>
          </div>
        </div>
      </div>




      {/* Main Section */}
            <div className="flex flex-col md:flex-row gap-10 my-20">
              {/* Left Image Section */}
              <div className="relative flex justify-center items-center md:w-1/2">
                <img src="/saas.jpg" alt="main" className="w-[80%] max-w-xs" />
                <img src="/agency.jpg" alt="main" className="absolute md:left-[30%]  lg:left-[40%] md:top-[20%] top-[8%] left-[40%] w-[60%] max-w-xs right-20%" />
              </div>
      
              {/* Right Section */}
              <div className="md:w-1/2 flex flex-col items-center gap-6 text-center ">
                
                
      
                <div className="text-left">
                  <p className="text-sm font-bold p-6">A Guide to Streamlining Your Business</p>
                  <p className="text-sm text-black/80 px-6">
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
    </div>
  );
};

export default Content;
