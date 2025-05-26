import React from 'react'

import { HiOutlinePaperClip } from "react-icons/hi";
import { PiPaperPlaneRightBold } from "react-icons/pi";

import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";

import { FaArrowRight } from "react-icons/fa";

const Article = () => {
  return (
    <div className='min-h-[100vh]'>

        <div className='p-4 flex flex-col gap-5 md:flex-row relative  md:items-center md:justify-around md:mt-5  '>
          <div className="p-4 my-5 flex flex-col gap-5 md:flex-row relative md:items-center md:justify-around md:mt-5">
           <div className="relative w-[400px] h-[400px] flex flex-col">

    <img
      src="/vrimage.png"
      alt="main"
      width={400}
      height={400}
      className="rounded-lg shadow-md shadow-black/50 w-full"
    />

    {/* Top-left */}
    <img
      src="/twitter.png"
      alt="twitter"
      width={100}
      height={100}
      className="absolute top-[-45px] left-[-20px] rounded-full"
    />

    {/* Top-right */}
    <img
      src="/youtube.png"
      alt="youtube"
      width={100}
      height={60}
      className="absolute top-[-65px] right-[-50px] rounded-full z-[-1]"
    />

    {/* Bottom-left */}
    <img
      src="/pinterest.png"
      alt="pinterest"
      width={100}
      height={100}
      className="absolute bottom-[40px] left-[-30px] rounded-full "
    />

    {/* Bottom-right */}
    <img
      src="/linkedin.png"
      alt="linkedin"
      width={60}
      height={60}
      className="absolute bottom-[30px] size-10 right-[-30px] rounded-full shadow-md backdrop-filter "
    />

     <div className="prompt rounded-md bg-black/10 p-2 mt-20">
        <p className='flex gap-3 '><HiOutlinePaperClip className='text-3xl text-gray-800  rotate-[-45deg]'/> <span className='font-thin'>Hey casper! lets turn this img into a Insta optimized for max reach.  </span> <PiPaperPlaneRightBold className='text-3xl text-gray-800'/></p>

        </div>

  </div>
 
</div>


            <div className='w-[400px] '>
  <img src='/vrimage.png' alt='logo' width={400} height={400} className='rounded-lg w-full' />
  
  <div className='flex items-center justify-between my-1 w-full'>
    <div className='flex items-center gap-1'>
      <FaRegHeart className='text-xl' />
      <span>120K</span>
    </div>
    <div className='flex items-center gap-1'>
      <BiMessageRounded className='text-2xl' />
      <span>120K</span>
    </div>
    <div className='flex items-center gap-1'>
      <LuSend className='text-2xl' />
      <span>120K</span>
    </div>
    <div className='flex items-center gap-1'>
      <FaRegBookmark />
      <span>189</span>
    </div>
  </div>
</div>

        </div>

        <button className='flex items-center justify-center gap-1 cursor-pointer  hover:scale-90  bg-black w-30 mx-auto my-5 text-white px-3 py-2 rounded-md text-sm'>
          <span className='text-xl font-thin'>Try</span>
          <span><FaArrowRight /></span>
          
        </button>

       
        

        

      
    </div>
  )
}

export default Article
