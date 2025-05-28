import React from 'react'

const Agent = () => {
  return (
    <div className='min-h-screen my-20 w-full px-4 md:px-10 flex flex-col'>
        {/* icons info */}
        <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-around md:gap-2 p-4 gap-2 w-[80vw] mx-auto gap-5 my-20">
        <div className="flex flex-col items-center  justify-center ">
          <div>
            <img src="/people.png" alt="people" className="size-20" />
          </div>
          <div className="border-1 border-black/20 p-4 rounded-xl shadow-md ">
            <p className="text-center text-lg font-bold p-2 ">Market researcher Agent
</p>
            <p className="font-thin p-4">
              Tracks industry trends and consumer insights
Delivers concise reports so you can act fast
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-center">
          <div>
            <img src="/people.png" alt="people" className="size-20" />
          </div>
          <div className="border-1 border-black/20 p-4 rounded-xl shadow-md">
            <p className="text-center text-lg font-bold p-2">Competitors Agent
</p>
            <p className="font-thin p-4">
              Monitors competitor offerings and pricing
Alerts you to market shifts before they happen
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-center gap-3 shadow-md">
          <div>
            <img src="/market-share.png" alt="people" className="size-16" />
          </div>
          <div className="border-1 border-black/20 p-4 rounded-xl py-6">
            <p className="text-center font-bold text-lg">Creator Agent
</p>
            <p className="font-thin p-4">
              Crafts blog posts, social media copy, and email campaigns
Optimizes for SEO and engagement automatically
            </p>
          </div>
        </div>
      </div>

        </div>


        {/* auto posting Agent */}
        <div className='w-full flex  md:flex-row flex-col gap-8 text-xl  md:gap-0 items-center justify-around font-bold'>
            <p>Product Experience Agent</p>
            <p>Auto Posting Agent</p>
            <img src="./cardlogo.png" alt="cardlogo" />
        </div>


        <div className='flex flex-col  gap-6 p-4  w-[80vw] mx-auto gap-5 my-20' >
            <div>
                <p className='font-bold'>Ad Copy Generator Agent</p>
                <p className='text-sm text-black/70'>Goal: Write high-conversion ad copy for Facebook, Instagram, YouTube Input: Product type, target audience, tone</p>
            </div>

            <div>
                <p className='font-bold'>Influencer Outreach Agent</p>
                <p className='text-sm text-black/70'>Goal: Identify micro-influencers and draft outreach emails/DMs Input: Niche + location</p>
            </div>
        </div>
      
    </div>
  )
}

export default Agent
