import React,{useContext} from 'react'
import PropertyList from './PropertyList.jsx';
import {Link} from 'react-router-dom'
import { assets } from '../Data/data.js';
import { AppContext } from '../Context/AppContext.jsx';
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay} from 'swiper/modules';

const FeaturedProperties = () => {
    const {properties} = useContext(AppContext);
  return (
      <section className='w-full px-4 py-6'>
           <div className='max-w-[1460px] mx-auto  px-2 py-2 md:px-6 md:py-3 flex flex-col gap-8'>
                 <div className='flex flex-col gap-2'>
                     <p className='text-sm text-black'>Your New Home Awaits!</p>
                      <h2 className='text-gray-900 font-bold text-2xl md:text-3xl'>Discover Your Place Here</h2>
                 </div>
                   <div className='flex justify-between md:px-6'>
                     <h5 className='text-sm text-gray-900'><span className='font-bold'>Displaying 1-9</span> from 3k listings</h5>
                      <Link onClick={()=>{window.scrollTo(0,0)}} to={"/listing"} className='text-black'>
                         <img className='h-5 w-5' src={assets.sliders} alt="slider logo" />
                      </Link>
                   </div>
                  { <Swiper 
                     autoplay={
                      {
                        delay: 3500,
                        disableOnInteraction: false,
                      }
                     }
                     breakpoints={{
                      600:{
                         slidesPerView: 2,
                         spaceBetween: 30,

                      },
                       1124:{
                         slidesPerView: 3,
                         spaceBetween: 30,

                      },
                       1300:{
                         slidesPerView: 4,
                         spaceBetween: 30,

                      }
                    
                      
                     }}
                     modules={[Autoplay]}
                     className='w-full '>
                        { properties.length > 0 && properties.map((property,index)=>{
                           return  <SwiperSlide key={index}>
                                 <PropertyList property={property} />
                          </SwiperSlide>
                        })}
                          
                     </Swiper>}
           </div>
      </section>
  )
}

export default FeaturedProperties;