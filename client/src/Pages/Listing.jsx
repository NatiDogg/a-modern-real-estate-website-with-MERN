import React,{useContext,useState} from 'react'
import { AppContext } from '../Context/AppContext';
import PropertyList from '../Components/PropertyList.jsx';


const Listing = () => {
  const {properties,loadingState} = useContext(AppContext);
   
  const sortOptions = ["Relevant","Low to High", "High to Low"];
  const propertyTypes = ["House","Apartment","Villa","Penthouse","Townhouse","Commercial","Land Plot"];
  const priceRange = ["0 to 10000","10000 to 20000","20000 to 40000","40000 to 80000"];
  

  return (
    <section className='mt-10 w-full  px-4 bg-linear-to-r from-[#fffbee] to-white'>
        <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col md:flex-row gap-8'>
            <div className=' min-w-[10%] md:min-w-[30%] min-h-[600px] bg-linear-to-t from-yellow-50 via-yellow-100 to-yellow-100 px-8 py-2 flex flex-col gap-10'>
                  <div className='mt-5'>
                     <h2 className='text-sm font-bold'>Sort By</h2> 
                     <select className='w-full mt-2 border px-4 py-1 border-gray-200 text-sm' name="" id="">
                       {sortOptions.map((option,index)=>(
                          <option className='' key={index} value={option}>{option}</option>
                       ))}
                     </select>
                  </div>
                   <div className=''>
                     <h2 className='text-sm font-bold'>Property Type</h2> 
                     <div className='mt-2'>
                       {propertyTypes.map((property,index)=>(
                          <div key={index} className='flex flex-row items-center gap-2 text-sm'>
                             <input  type="checkbox"  />
                             <p>{property}</p>
                          </div>
                       ))}
                     </div>
                  </div>
                  <div className=''>
                     <h2 className='text-sm font-bold'>Price Range</h2> 
                     <div className='mt-2'>
                       {priceRange.map((property,index)=>(
                          <div key={index} className='flex flex-row items-center gap-2 text-sm'>
                             <input type="checkbox" />
                             <p>${property}</p>
                          </div>
                       ))}
                     </div>
                  </div>
                  
            </div>
             <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               {  properties.length > 0 ? properties.map((property,index)=>(
                 <PropertyList key={index} property={property} />
               )): <div className='text-center text-red-500 mt-20 text-2xl'>No matches found.</div>}
             </div>
        </div>
    </section>
  )
}

export default Listing;