import React,{useState,useEffect,useContext} from 'react'
import { AppContext } from '../../Context/AppContext';
import { dummyProperties } from '../../Data/data';

const ListProperty = () => {

  const {user,currency} = useContext(AppContext);

  const [properties, setProperties] = useState([]);

   //getting property of the agency owner

   const getProperties = async()=>{
       setProperties(dummyProperties);
   }
  

   useEffect(()=>{
      if(user){
        getProperties()
      }
   },[user])
      



  return properties && (
     <section className='w-full px-3 py-4'>
       <div className='max-w-[1460px] mx-auto px-1 py-1 md:px-2 md:py-2 flex flex-col gap-4'>
             <div className='flex w-full flex-col'>
              <div className='p-3 grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-10  bg-yellow-300 items-center text-black rounded-t-lg'>
                   <div className='flex gap-4 md:gap-10 md:p-1 col-span-1 md:col-span-2'>
                      <p className=' hidden md:block text-sm text-black md:text-[17px]'>Index</p>
                      <p className='text-sm text-black md:text-[17px]'>Name</p>
                   </div>
                   <div className='col-span-1 md:col-span-2'>
                      <p className='text-sm text-black md:text-[17px]'>Address</p>
                   </div>
                   <div>
                     <p className='text-sm text-black md:text-[17px]'>Price</p>
                   </div>
                   <div>
                     <p className='text-sm text-black md:text-[17px]'>Action</p>
                   </div>

              </div>
             <div className='p-3'>
                {properties.map((property, index)=>{
                  return  <div className='p-3 flex flex-row flex-wrap md:grid md:grid-cols-6 gap-2 md:gap-10 items-center text-black border-b border-gray-200 '>
                        <div className='flex gap-4 items-center md:gap-10 md:p-1 col-span-1 md:col-span-2'>
                        <p className='text-gray-600 hidden md:block'>{index + 1}</p>
                          <div className='flex items-center gap-2 '>
                             <img src={property.images[0]} alt="" className='w-20 h-15 rounded-lg ' />
                             <p className='text-sm text-gray-600'>{property.title}</p>
                          </div>
                        </div>

                        <div className=' col-span-1 md:col-span-2 '>
                           <p className='text-gray-600 text-sm line-clamp-1 '>{property.address}</p>
                        </div>
                        <div className='md:px-4'>
                          <p className='text-sm text-gray-600 md:text-[15px]'>{currency}{property.price.sale}</p>
                        </div>

                        <div className='flex items-center px-4'>
                           <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3' >
                              <input type="checkbox" className='sr-only peer' defaultChecked={property.isAvailable} />
                               <div className='w-10 h-6 bg-slate-300 rounded-full peer peer-checked:bg-yellow-300 transition-colors duration-200' />
                               <span className='absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4' />
                           </label>
                        </div>
                 

                   </div> 
                })}
               
              
                
             </div>

          </div>
       </div>

     </section>
  )
}

export default ListProperty