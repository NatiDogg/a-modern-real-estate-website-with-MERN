import React from 'react'
import { assets } from '../Data/data';

const Cta = () => {
  return (
     <section className='w-full px-4 py-6'>
        <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-6 md:py-4'>
              <div className='flex flex-col gap-4 items-center'>
                     <div className='bg-neutral-900 rounded-full flex flex-row items-center gap-2 text-gray-100 px-4 py-2'>
                         <img className='invert' src={assets.rocket} alt="" />
                         <h6 className='text-sm'>Trusted by Experts</h6>
                     </div>
                     <div>
                       <h2 className='text-2xl sm:text-3xl md:text-4xl text-neutral-800 font-bold text-center'>Sell or Rent Faster with <span className='text-yellow-300'>Expert Strategies</span></h2>
                       <h2 className='text-center mt-1 md:mt-2 text-2xl sm:text-3xl md:text-4xl text-neutral-900 font-bold'>and Real Support!</h2>
                     </div>
                     <div className='flex flex-col items-center'>
                       <p className='text-gray-400 text-center w-full sm:w-[90%] md:w-[61%]'>Achieve your goals faster with personalized strategies, hands-on support, and results that speak for themselves.</p>
                     </div>
                     <div>
                       <button className='bg-yellow-300 px-8 py-3 rounded-full cursor-pointer text-sm font-semibold text-neutral- hover:shadow-2xl hover:shadow-yellow-400'>Get Started</button>
                     </div>
              </div>
        </div>   
     </section>
  )
}

export default Cta;