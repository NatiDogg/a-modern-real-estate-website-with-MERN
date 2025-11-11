import React from 'react'
import star from '../assets/star.svg'
import clientOne from '../assets/client1.jpg'
import clientTwo from '../assets/client2.jpg'
import clientThree from '../assets/client3.jpg'
import clientFour from '../assets/client4.jpg'
import calenderSecondary from "../assets/calendar-secondary.svg"
import graph from '../assets/graph.svg'
import map from '../assets/map.svg'
import pound from '../assets/pound.svg'
import about from '../assets/about.png'
const About = () => {
  return (
     <section className='w-full pt-[100vh] px-4 py-6'>
            <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-6 md:py-3 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                   <div className='px-4'>
                      <div className='flex flex-col gap-6'>
                          <p className='text-yellow-300 font-bold text-[18px] md:text-xl'>Your Trusted Real Estate Partner</p>
                          <h2 className='text-3xl md:text-4xl capitalize text-slate-900 font-semibold'>Helping you Every Step of The way</h2>
                          <p className='text-gray-400 '>Trust,clarity, and simplicty are the core of everything we do to make your property journey easy</p>
                           <ul className='flex flex-col gap-4'>
                             <li className='flex flex-row items-center gap-3 text-gray-400 text-sm'>
                                <img src={calenderSecondary} className='w-5' alt="calender img" />
                                 in-app scheduling for property viewing
                             </li>
                             <li className='flex flex-row items-center gap-3 text-gray-400 text-sm'>
                                <img src={graph} className='w-5' alt="calender img" />
                                 real-time market price updates
                             </li>
                             <li className='flex flex-row items-center gap-3 text-gray-400 text-sm'>
                                <img src={map} className='w-5' alt="calender img" />
                                 User-friendly interface for smooth navigation
                             </li>
                             <li className='flex flex-row items-center gap-3 text-gray-400 text-sm'>
                                <img src={pound} className='w-5' alt="calender img" />
                                 Access to off-market properties
                             </li>
                           </ul>

                           <div className='flex flex-row items-center'>
                              <div>
                                 <img src={clientOne} className='h-11 w-11 rounded-full' alt="" />
                              </div>
                               <div className='-ml-3'>
                                 <img src={clientTwo} className='h-11 w-11 rounded-full' alt="" />
                              </div>
                              <div className='-ml-3'>
                                 <img src={clientThree} className='h-11 w-11 rounded-full' alt="" />
                              </div>
                              <div className='-ml-3'>
                                 <img src={clientFour} className='h-11 w-11 rounded-full' alt="" />
                              </div>
                               <div className='flex flex-col gap-1 ml-6'>
                                   <div className='flex flex-row items-center'>
                                     {Array(5).fill("").map((_,index)=>{
                                    return <img key={index} src={star} alt="" className='w-5 h-5' />
                                   })}
                                    <p className='ml-2 text-gray-600 text-sm'>5.0</p>
                                   </div>
                                   <div>
                                     <p className='text-gray-400 text-sm'>Trusted by 100,000+ users</p>
                                   </div>
                               </div>
                            
                           </div>
                           


                      </div>
                   </div>
                    <div className='px-4 flex flex-col justify-center'>
                       <img src={about} alt="" />
                    </div>
            </div>
     </section>
  )
}

export default About;