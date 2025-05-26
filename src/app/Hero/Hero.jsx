import React from 'react';


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
          height: '60vh',      // half viewport height
          objectFit: 'cover', 
          display: 'block',    
        }}>
        <source src="/export_upscale.mp4" type="video/mp4" />
        
      </video>

      {/* band on vedio */}
      <div className='w-full bg-white/40 absolute top-20 py-12 px-15'>
        <p className='text-sm font-thin'>Hey Creator</p>
        <p className='text-lg font-bold'>Supercharge Your Content Everywhere</p>
        <p className='pb-10 md:pb-0  w-full md:w-1/3 text-md font-thin  text-black'>Turn your article, video, img, or podcast into a perfectly optimized post for every major platform </p>
        <p className='text-md font-bold'> -automatically.</p>
      </div>
     </div>



     <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-center absolute top-118 rounded-md  gap-0">
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


      <div className='w-full flex flex-col  items-center justify-center sm:mt-2  mt-30'>
        <p className='text-3xl text-blue-800 font-bold mt-10'>Hey</p>
        <p className='text-3xl font-bold'>Creators !</p>
        <p className='px-5 text-center'>Have Content Already? Optimize it with Casper Ai </p>
      </div>

    </div>
  );
};

export default Hero;
