import React from 'react'


const Work = () => {
  return (
    <div className='mt-20 min-h-[100vh] bg-black/3'>
        {/* info section */}

        {/* flex flex-col  md:flex-row md:items-center md:justify-around md:gap-2 p-4 gap-2  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 lg:grid-cols-4'>
            <div className='w-auto bg-white p-4 rounded-lg shadow-sm'>
                <p className='text-lg font-bold py-2 text-center pb-6'>Insta Reel Generation</p>
                <p className='text-[12px] font-thin'>Buxa.ai</p>
                <div className='flex items-center justify-center'>
                    <p className='text-sm flex-1 py-2 text-black/40'>An AI tool that creates engaging reels from your stories, complete with captions.</p>
                    <img src="/play1.png" alt="logo" width={50} height={30} className='flex-1 size-30  animate-[bounce_6s_ease-in-out_infinite]' />
                </div>
            </div>
            <div className='w-auto bg-white p-4 rounded-lg shadow-sm'>
                <p className='text-lg font-bold py-2 text-center pb-6'>Article Generation</p>
                <p className='text-[12px] font-thin'>Buxa.ai</p>
                <div className='flex items-center justify-center'>
                <p className='text-sm py-2 text-black/40'>An AI tool that performs deep research and writes high-quality, SEO-optimized articles for you.</p>
                <img src="/note1.png" alt="logo" width={100} height={10} className='flex-1 animate-[bounce_5s_ease-in-out_infinite] ' />
                </div>
            </div>
            <div className='w-auto bg-white p-4 rounded-lg shadow-sm'>
                <p className='text-lg font-bold py-2 text-center pb-6'>PodCast Generation</p>
                <p className='text-[12px] font-thin'>buxa.ai</p>

                <div className='flex items-center justify-center'>
                <p className='text-sm py-2 text-black/40 '>An AI-powered tool that creates natural-sounding podcasts for you with ease.</p>
                <img src="/headphone.jpg" alt="logo" width={140} height={140} className='flex-1  animate-[bounce_10s_ease-in-out_infinite]' />
                </div>
            
            </div>
            <div className='w-auto bg-white p-4 rounded-lg shadow-sm'>
                <p className='text-lg font-bold py-2 text-center pb-6'>Ai Avatar creation</p>
                <p className='text-[12px] font-thin'>Buxa.ai</p>

                <div className='flex items-center justify-center'>
                <p className='text-sm py-2 text-black/40'>An AI tool that lets you upload your photo, choose a style, and generate your custom avatar.</p>
                <img src="/avatar.png" alt="logo" width={110} height={110} className='flex-1  animate-[bounce_5s_ease-in-out_infinite] ' />
                </div>
            </div>

        </div>
        {/* working section */}
        <div>
        <div className='flex flex-col  justify-start p-4 mt-5'>
            <p className='text-4xl font-bold text-blue-800 pl-4'>HOW</p>
            <p className='text-4xl font-bold pl-4'>IT WORKS</p>
        </div>

        {/* working flow */}
        <div className=' w-full flex flex-col items-center  justify-center  md:flex-row md:items-center md:justify-around md:gap-2 p-4 gap-2'>
           <div className='flex flex-col items-center gap-2'>
             <img src="/idea.gif" alt="logo" width={200} height={200} className='rounded-full'/>
            <p className='text-sm'>Uplaod your ideas and content  or generate with Buxa.ai</p>
           </div>
            
                <img src="/right-arrow.gif" alt="logo" width={50} height={50} className='rounded-full rotate-90 md:rotate-0'/>
                
           

       <div className='flex flex-col items-center gap-2'>
              <img src="/social-media.gif" alt="logo" width={200} height={200} className='rounded-full '/>
              <p  className='text-sm'>Choose the platform you wamts to optimsie for.</p>
       </div>
              <img src="/right-arrow.gif" alt="logo" width={50} height={50} className='rounded-full rotate-90 md:rotate-0'/>

             <div className='flex flex-col items-center gap-2'>
                 <img src="/goal.gif" alt="logo" width={200} height={200} className='rounded-full'/>
              <p  className='text-sm'>Get fully optimized content for you socials </p>
             </div>

        </div>

        </div>

        <div className='p-4 mx-4'>
            <p className=''><span className='text-4xl font-bold' >EVERY</span> <span className='text-blue-500 font-bold text-4xl'>PLATFORM</span></p>

            <p>
                <b>has its own algorithm</b> — <span className='text-sm'>and we analyze each one for you. From formatting to timing, we tailor your content to meet platform standards and maximize reach, engagement, and visibility.</span>

            </p>
        </div>
      
    </div>
  )
}

export default Work
