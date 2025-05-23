import React from 'react'
import Image from 'next/image'

const Article = () => {
  return (
    <div className='min-h-[100vh]'>

        <div className='p-4 flex flex-col gap-5 md:flex-row relative  md:items-center md:justify-around md:mt-5  '>
          <div className="p-4 flex flex-col gap-5 md:flex-row relative md:items-center md:justify-around md:mt-5">
  <div className="relative w-[400px] h-[400px] flex flex-col">

    <Image
      src="/vrimage.png"
      alt="main"
      width={400}
      height={400}
      className="rounded-lg shadow-md shadow-black/50"
    />

    {/* Top-left */}
    <Image
      src="/twitter.png"
      alt="twitter"
      width={100}
      height={100}
      className="absolute top-[-45px] left-[-20px] rounded-full"
    />

    {/* Top-right */}
    <Image
      src="/youtube.png"
      alt="youtube"
      width={100}
      height={60}
      className="absolute top-[-65px] right-[-50px] rounded-full z-[-1]"
    />

    {/* Bottom-left */}
    <Image
      src="/pinterest.png"
      alt="pinterest"
      width={100}
      height={100}
      className="absolute bottom-[40px] left-[-30px] rounded-full "
    />

    {/* Bottom-right */}
    <Image
      src="/linkedin.png"
      alt="linkedin"
      width={60}
      height={60}
      className="absolute bottom-[30px] size-10 right-[-30px] rounded-full"
    />

     <div className="prompt rounded-md bg-black/10 p-2 mt-20">
        <p>@Hey casper! lets turn this image into a Insta optimized for max reach.</p>

        </div>

  </div>
 
</div>


            <div>
              <Image src='/vrimage.png' alt='logo' width={400} height={400} className='rounded-lg ' />

            </div>
        </div>

       
        

        

      
    </div>
  )
}

export default Article
