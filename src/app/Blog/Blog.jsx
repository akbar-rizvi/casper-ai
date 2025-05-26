import React from 'react'

import { FaArrowRight } from "react-icons/fa";


const Blog = () => {
  return (
    <div className='min-h-[100vh] mx-auto max-w-[100vw] flex flex-col gap-15'>
       <div className='flex min-h-[100vh] mx-auto max-w-[100vw] gap-15 mb-10'>
         {/* left img section */}
        <div className='flex flex-col md:flex-row mx-10 relative flex-1'>
            <img src="/saas.jpg" alt="main" width={350} height={350} />
            <img src="/agency.jpg" alt="main" width={300} height={300} className='absolute left-[250px] top-[50px]' />


        </div>
        {/* right section  */}
        <div className='flex-2 flex flex-col items-center gap-5'>
            <p><span className='text-6xl font-bold'>ARTICLE /</span> <span className='text-6xl font-bold text-blue-800'>BLOG</span></p>

            <p>“Writing has always been my passion, but I often struggle to engage with readers and express my thoughts clearly.”</p>

        <div>
            <p className='text-[12px] font-bold px-2'>A Guide to Streamlining Your Business</p>
            <p className='text-[12px] px-2 text-black/80'>Running a business can be hard, but making it simple can help you save time and money. To streamline your business, start by looking at daily tasks. Are there steps you can remove or make faster? Use tools like computers or apps to help with work. For example, you can send emails instead of printing papers. Talk to your team often and make sure everyone knows what to do. Keep your plans clear and your goals simple. When your business runs smoothly, you can focus on growing it. A few small changes can make a big difference.</p>
        </div>

        <div className='w-full flex items-center justify-between '>
            <p className='text-xl font-semibold'> “Casper Gave me-”</p>
            <button className='rounded-full border-2 border-black px-8 py-2 cursor-pointer hover:shadow-lg hover:scale-90 flex items-center gap-3'><span>Try </span>  <span><FaArrowRight /></span> </button>
        </div>



        {/* woman section */}

       <div className="relative w-[300px] h-[300px] mx-auto">
  {/* Central img */}
  <img
    src="/woman.png"
    alt="main"
    width={450}
    height={250}
    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
  />

  {/* Bubble Tags */}
  <p className="absolute top-0 left-0 transform -translate-x-1/2 bg-blue-500 text-white text-sm font-semibold rounded-full p-4 text-center">
    Better Citations
  </p>

  <p className="absolute top-10 right-[-75] bg-blue-500 text-white text-sm font-semibold rounded-full p-4 text-center">
    Ultra-Realistic imgs
  </p>

  <p className="absolute bottom-10 right-[-30] bg-blue-500 text-white text-sm font-semibold rounded-full p-4 text-center">
    Niche Target
  </p>

  <p className="absolute bottom-[-20] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm font-semibold rounded-full p-4 text-center">
    Smart Audience
  </p>

  <p className="absolute bottom-25 left-[-70px] bg-blue-500 text-white text-sm font-semibold rounded-full p-4 text-center">
    SEO-Optimisation
  </p>
 
</div>

        </div>
       </div>



        {/* podcast section */}

           <div className='w-full mt-10'>

                        {/* podcast info */}
                    <div className='w-full flex flex-col items-end gap-1 justify-center'>
                    <div className='w-1/2 '>
                        <p className='text-4xl font-bold' >THE PODCAST EPISODE</p>
                        <p className='pl-2 text-sm'>
                        
                            suffers from poor audio quality, lack of structure, unclear messaging, or unengaging delivery, which negatively impacts the listener experience and fails to effectively communicate the intended message
                        </p>
                    </div>
            {/* host section */}
            <div className='flex w-full justify-around items-center mx-auto'>
                <div>
                    <img src="/host1.png" alt="main" width={400} height={400} className='p-3' />
                    <p className='bg-blue-500 text-white text-sm font-semibold rounded-full p-4 text-center relative top-[-20px]'>After AI :"I think we could...</p>
                </div>
                <div>
                    <img src="/podcasts.png" alt="main" width={300} height={300} />
                </div>
                <div>
                     <img src="/host2.png" alt="main" width={400} height={400}  className='p-1'/>
                     <p className='bg-blue-500 text-white text-sm font-semibold rounded-full p-4 text-center relative top-[-40px] '>"Sooo... umm... I think... maybe... like, we could—uh, yeah..."</p>
                </div>
            </div>
               
            </div>
        </div>






    {/* last section for major platforms */}
        <div className='w-full  p-3 flex  items-center justify-around'>
          <div >
            <p className='font-bold'>Gear up for success with full optimization for all major platforms</p>
            < p className='font-thin text-sm text-black/70'>— including Spotify, Apple Podcasts, Google Podcasts, and more!</p>

          </div>
          
          <div className='flex items-center justify-between w-1/4'>
              <div className='flex items-center justify-center gap-5'>
            <img src="/medium.png" alt="main" width={40} height={40} />
             <img src="/spotify.png" alt="main" width={40} height={40} />
              <img src="/Podcast_io.png" alt="main" width={40} height={40} />

          </div>

            <button className='flex items-center justify-center gap-1 cursor-pointer  hover:scale-90   w-30 mx-auto my-5 border-1 border-black px-3 py-2 rounded-full text-sm'>
                      <span className='text-xl font-thin'>Try</span>
                      <span><FaArrowRight /></span>
                      
                    </button>
          </div>
        </div>



     
      
    </div>
  )
}

export default Blog
