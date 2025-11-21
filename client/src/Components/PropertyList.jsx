import React,{useState,useEffect} from 'react'
import { assets } from '../Data/data.js';
import { Link } from 'react-router-dom';


const PropertyList = ({property}) => {

  return (
         <Link onClick={()=>{scrollTo(0,0)}} to={`/listing/${property._id}`}>
            <div className=' bg-white  py-1  w-full rounded-md flex flex-col gap-1'>
            <div className='aspect-4/3'>
                <img className="w-full rounded-t-lg h-full object-cover" src={property.images[0]} alt="" />
            </div>
            <div className='flex flex-row px-1 justify-between gap-4'>
                <h4 className='font-bold text-gray-800'>{property.propertyType}</h4>
                 <p className='text-yellow-500 text-[16px] font-semibold'>${property.price.sale} | ${property.price.rent}.00 <span className='text-xs'>/night</span></p>
                
            </div>
             <div className='flex flex-col gap-4'>
                <h2 className='text-[16px] text-slate-900 font-semibold line-clamp-1'>{property.title}</h2>
                 <div className='flex flex-row items-center text-gray-400 gap-2 px-2'>
                      <div className='flex items-center gap-2'>
                         <img src={assets.bed} alt="" className='w-5 h-5' />
                         <p className='text-sm'>{property.facilities.bedrooms}</p>
                           <div className='w-0.5 h-4 bg-gray-500 ml-2'></div>
                      </div>
                      <div className='flex items-center gap-2'>
                         <img src={assets.bath} alt="" className='w-5 h-5' />
                         <p className='text-sm'>{property.facilities.bathrooms}</p>
                           <div className='w-0.5 h-4 bg-gray-500 ml-2'></div>
                      </div>
                      <div className='flex items-center gap-2'>
                         <img src={assets.car} alt="" className='w-5 h-5' />
                         <p className='text-sm'>{property.facilities.garages}</p>
                           <div className='w-0.5 h-4 bg-gray-500 ml-2'></div>
                      </div>
                      <div className='flex items-center gap-2'>
                         <img src={assets.ruler} alt="" className='w-5 h-5' />
                         <p className='text-sm'>{property.area}</p>
                           
                      </div>
                 </div>
                 <div>
                   <p className='line-clamp-2 px-1 text-sm text-gray-400'>{property.description}</p>
                 </div>

             </div>
       </div>
         </Link>
  )
}

export default PropertyList;