import React from 'react'
import { assets } from '../Data/data';
import faq from '../assets/faq.png'
const Faq = () => {
  return (
    <section className='w-full px-4 py-6'>
       <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-6 md:py-4 grid grid-cols-1 lg:grid-cols-2 gap-6'>
           <div className='px-4 py-2 relative mx-auto '>
                   <img src={faq} alt="" width={600} className='rounded-2xl shadow-lg'  />
                <div className='absolute top-8 shadow-lg bg-white rounded-2xl text-black w-[80%] left-8  md:left-15   '>
                    <div className='flex flex-row items-center gap-4 px-4 py-2 '>
                        <div className=''>
                           <img src={assets.signature} className='w-12 h-12' alt="signature icon" />
                        </div>
                         <div className='flex flex-col gap-0.5'>
                            <h3 className='text-[15px] md:text-[16px] font-semibold'>Trusted Real Estate Experts</h3>
                            <p className='text-gray-500 text-[13px] md:text-sm w-full'>Turst,clarity, and simplicity are at the core of everything we do to make your property journey easy </p>

                         </div>
                    </div>
                </div>
           </div>
            <div className='px-4 py-2'>
                <div className='flex flex-col gap-4 mt-10'>
                      <div>
                         <p className='text-yellow-300 font-bold text-[18px]'>Homes Made for Living</p>
                          <h2 className='text-3xl md:text-5xl capitalize text-slate-900 font-semibold'>Simplifying your property </h2>
                          <h2 className='text-3xl md:text-5xl capitalize text-slate-900 font-semibold mt-3'>Search Every Step</h2>
                          <p className='text-gray-400 mt-3 text-sm '>From finding the right location to finalzing the deal, we ensure your real estate journey is smooth,efficient and fulfiling.</p>
                      </div>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Faq;