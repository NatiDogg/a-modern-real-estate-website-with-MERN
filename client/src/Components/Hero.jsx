import React from 'react'
import RightArrowIcon from '../assets/right.svg';
import locationIcon from '../assets/pin.svg';
import usersIcon from '../assets/users.svg';
import calenderIcon from '../assets/calendar.svg';
import searchIcon from '../assets/search.svg';


const Hero = () => {
  return (
       <section className="h-screen w-screen bg-[url('/src/assets/bg.png')] absolute inset-0 bg-cover bg-center bg-no-repeat">
           <div className='z-10 flex flex-col justify-end py-10 px-8 h-screen w-screen'>
             <div className='bg-black/40 absolute inset-0' /> 
             <div className='flex z-10 flex-col items-start gap-4 text-white'>
                <div className='border border-white px-2 py-1 rounded-full'>
                   <button className='flex text-xs items-center gap-3 cursor-pointer'>
                    Explore how we simplify stays and spaces
                      <img src={RightArrowIcon} className='bg-white rounded-full h-5 w-5 px-1 py-1' alt=""  />
                    </button>
                </div>
                <div>
                   <h1 className='text-2xl md:text-4xl font-semibold text-white capitalize'>Explore <span className='text-yellow-300'>Exceptional</span> Properites located in stunning surroundings.</h1>
                </div>
                <div className=' w-full  text-black '>
                     <div className='bg-white px-4 py-3 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 '>
                         <div className='flex flex-col gap-1'>
                           <h3 className='flex flex-row gap-1 items-center text-sm text-gray-500 '>
                                <img src={locationIcon} alt="location icon" className='w-4 h-4' />
                                Destination
                           </h3>
                           <input type="text" placeholder='Type here' className='border text-gray-700  text-sm border-gray-300 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                           
                         </div>
                         <div className='flex flex-col gap-1'>
                           <h3 className='flex flex-row gap-1 items-center text-sm text-gray-500 '>
                                <img src={calenderIcon} alt="location icon" className='w-4 h-4' />
                                Check in
                           </h3>
                           <input type="date"  className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                           
                         </div>
                         <div className='flex flex-col gap-1'>
                           <h3 className='flex flex-row gap-1 items-center text-sm text-gray-500 '>
                                <img src={calenderIcon} alt="location icon" className='w-4 h-4' />
                                Check out
                           </h3>
                           <input type="date"  className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                           
                         </div>
                         <div className='flex flex-col gap-1'>
                           <h3 className='flex flex-row gap-1 items-center text-sm text-gray-500 '>
                                <img src={usersIcon} alt="location icon" className='w-4 h-4' />
                                Guests
                           </h3>
                           <input type="number" min={1}  className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                           
                         </div>
                         <div className='grid mt-0 lg:mt-3 col-span-1 md:col-span-2 lg:col-span-1'>
                            <button className='bg-black flex items-center justify-center w-full  gap-1 text-[16px] cursor-pointer text-white px-4 py-2 rounded-md text-center'> 
                              <img src={searchIcon} className='invert h-4 w-4' alt="" />
                              Search
                            </button>
                         </div>
                     </div>
                </div>
               
             </div>

               
           </div>
       </section>
  )
}

export default Hero;