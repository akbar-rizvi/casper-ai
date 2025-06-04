import React from 'react'

const ArticleNavbar = () => {

    const credit=49

  return (
    <div className=''>

        {/* top bar */}
        <div className='w-full  flex items-center justify-around py-4 shadow-md border-b border-gray-300 shadow-gray-300  '>
            {/* type of article  dropdown section*/}
            <div>
                <p className='text-2xl font-bold text-blue-800'>Casper Ai</p>
            </div>
            <div className='flex gap-2' >
                <select name="" id="" className='text-center border-1 border-gray-300 rounded-md p-1'>
                    <option value="text">Text</option>
                    <option value="video" >Video</option>
                    <option value="audio">Audio</option>
                </select>

                <button className='text-white bg-black rounded-md p-2 text-sm cursor-pointer'> + New thread </button>
            </div>
          


            <div className='border-1 border-gray-300 rounded-md px-2 py-1 '>
                 <p><span className='font-bold'>Credits</span> <span className='text-blue-800 font-thin text-md'>{credit}</span></p>
                

            </div>

        </div>
   
    </div>
  )
}

export default ArticleNavbar
