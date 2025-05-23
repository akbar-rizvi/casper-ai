import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div >
     <div className='relative min-h-[60vh]'>
         <video  autoPlay
        muted
        playsInline
        loop
        controls={false} style={{
          width: '100vw',      // full viewport width
          height: '50vh',      // half viewport height
          objectFit: 'cover', 
          display: 'block',    
        }}>
        <source src="/export_upscale.mp4" type="video/mp4" />
        
      </video>
     </div>



     <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-center absolute top-100 rounded-md  gap-0">
        <button className="w-full border-radius-left shadow-2xl sm:w-auto border-1 border-black/20 cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Content Creator
        </button>
        <button className="w-full shadow-2xl sm:w-auto border-1 border-black/20 cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Business Pages & Brands
        </button>
        <button className="w-full border-radius-right  sm:w-auto border-1 border-black/20 shadow-lg cursor-pointer p-4 font-bold bg-white hover:bg-blue-500 hover:text-white hover:border-0">
          Social Media Marketer
        </button>
</div>


      <div className='w-full flex flex-col  items-center justify-center sm:mt-2  mt-25'>
        <p className='text-3xl text-blue-800 font-bold'>Hey</p>
        <p className='text-3xl font-bold'>Creators !</p>
        <p>Have Content Already? Optimize it with Casper Ai </p>
      </div>

    </div>
  );
};

export default Hero;
