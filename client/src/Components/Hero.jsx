import React,{useState,useEffect} from 'react'
import RightArrowIcon from '../assets/right.svg';
import locationIcon from '../assets/pin.svg';
import usersIcon from '../assets/users.svg';
import calenderIcon from '../assets/calendar.svg';
import searchIcon from '../assets/search.svg';
import { cities } from '../Data/data.js';


const Hero = () => {
    const [formData, setformData] = useState({
        destination: "",
        checkIn: "",
        checkOut: "",
        guests: ""
    });
    const [handleCity, sethandleCity] = useState("");
     const [showCities, setshowCities] = useState(false);

   const handleDestinationCities = (city)=>{
        setformData(prevData => ({
        ...prevData,
        destination: city
    }));
    
    setshowCities(city !== "");
       
   }
  
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
                   <h1 className='text-2xl  md:text-4xl font-semibold text-white capitalize'>Explore <span className='bg-linear-to-r from-yellow-400 to-white bg-clip-text text-transparent'>Exceptional Properites </span> located in stunning surroundings.</h1>
                </div>
                <div className=' w-full relative text-black '>
                     <form className='bg-white px-4 py-3 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 z-20  '>
                         <div className='flex flex-col gap-1 '>
                           <label htmlFor='destination' className='flex flex-row gap-1 items-center text-sm text-gray-500 '>
                                <img src={locationIcon} alt="location icon" className='w-4 h-4' />
                                Destination
                           </label>
                           <input value={formData.destination} onChange={(e)=>{
                            handleDestinationCities(e.target.value);
                            
                           }}  id='destination' type="text" placeholder='Type here' required className='border text-gray-700  text-sm border-gray-300 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                            {
                              showCities ? <div className='absolute bottom-80 lg:bottom-20 bg-white rounded-sm w-[50%] md:w-[20%] grid place-content-start py-3 px-4'>
                                 
                                     <ul className='flex flex-col gap-1'>
                                        {cities.map((city,index)=>{
                                        return <li onClick={()=>{setformData(prevData=> ({...prevData, destination: city})); setshowCities(false)}} className='text-gray-600 cursor-pointer' key={index}>{city}</li>
                                     })}
                                     </ul>
                                 
                              </div> : ""
                            }
                           
                         </div>
                         <div className='flex flex-col gap-1'>
                           <label htmlFor='checkin' className='flex flex-row gap-1 items-center text-sm text-gray-500 '>
                                <img src={calenderIcon} alt="location icon" className='w-4 h-4' />
                                Check in
                           </label>
                           <input id='checkin' required  type="date"  className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                           
                         </div>
                         <div className='flex flex-col gap-1'>
                           <label htmlFor='checkout' className='flex flex-row gap-1 items-center text-sm text-gray-500 '>
                                <img src={calenderIcon} alt="location icon" className='w-4 h-4' />
                                Check out
                           </label>
                           <input required  id='checkout' type="date"  className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                           
                         </div>
                         <div className='flex flex-col gap-1'>
                           <label htmlFor='guests' className='flex flex-row gap-1 items-center text-sm text-gray-500 '>
                                <img src={usersIcon} alt="location icon" className='w-4 h-4' />
                                Guests
                           </label>
                           <input required  id='guests' placeholder='1' type="number" min={1} max={5} className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                           
                         </div>
                         <div className='grid mt-0 lg:mt-2 col-span-1 md:col-span-2 lg:col-span-1'>
                            <button className='bg-black flex items-center justify-center w-full  gap-1 text-[15px] cursor-pointer text-white px-4 py-2 rounded-md text-center'> 
                              <img src={searchIcon} className='invert  ' width={17} alt="" />
                              Search
                            </button>
                         </div>
                     </form>
                </div>
               
             </div>

               
           </div>
       </section>
  )
}

export default Hero;