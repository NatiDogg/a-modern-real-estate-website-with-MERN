import React,{useContext, useEffect,useState} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import PropertyImages from '../Components/PropertyImages.jsx';
import { assets } from '../Data/data.js';
import toast from 'react-hot-toast';

const PropertyDetail = () => {
      const [property, setProperty] = useState(null);
     const {id} = useParams();
     const {properties,navigate,axios,getToken} = useContext(AppContext);
     const [checkInDate, setCheckInDate] = useState(null)
      const [checkOutDate, setCheckOutDate] = useState(null)
      const [guests, setGuests] = useState(1);


     const [isAvailable, setIsAvailable] = useState(false);

      const checkAvailability = async()=>{
           try {
              if(checkInDate > checkOutDate){
                 toast.error("checkInDate should be less than checkOutDate")
              }
               const {data} =  await axios.post("/api/bookings/check-availability", {property: id,checkInDate,checkOutDate}
               )

               if(data.success){
                  if(data.isAvailable){
                      setIsAvailable(true)
                      toast.success("Property is Available")
                  }
               }
               else{
                  setIsAvailable(false)
                  toast.error(data.message)
               }
           } catch (error) {
              toast.error(error.message)
           }
      }

      const onSubmitHandler = async(e)=>{
            try {
               e.preventDefault()
               if(!isAvailable){
                  return checkAvailability()
               }
                else{
                    
                  const {data} =  await axios.post("/api/bookings/book", {property: id,checkInDate,checkOutDate,guests,paymentMethod: "Pay at Check-in"},{
                     headers: {Authorization: `Bearer ${await getToken()}`}
                  }
                  )

                  if(data.success){
                     toast.success(data.message)
                     navigate("/my-bookings")
                     scrollTo(0,0)
                  }
                  else{
                     toast.error(data.message)
                  }
                }
            } catch (error) {
               toast.error(error.message)
            }
      }
       
     useEffect(()=>{
         const property = properties.find((property)=> property._id === id);
          if(property){
             setProperty(property);
          }
     },[properties,id]) 
  return (
        property && (
           <section className=' mt-10 w-full px-4 py-6'>
                <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-4 md:py-3 '>
                     <div className='w-full'>
                       <PropertyImages property = {property} />
                     </div>
                     <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6 px-1 '>
                       <div className='flex flex-col gap-3 border border-gray-100 rounded-md py-3 px-2 col-span-1 lg:col-span-2'>
                           <div className='flex flex-row items-center gap-2'>
                              <img className='w-5 h-5' src={assets.pin} alt="" />
                               <p className='text-gray-400 text-sm'>{property.address}</p>
                           </div>

                           <div className='flex flex-col md:flex-row md:justify-between '>
                                <div className='flex flex-col gap-1'>
                                 <h2 className='text-xl lg:text-2xl font-bold'>{property.title}</h2>
                                 <h4 className='capitalize text-yellow-300 font-semibold text-xl'>{property.propertyType}</h4>
                                </div>
                                <div className='flex flex-col gap-1'>
                                  <p className='text-gray-700 text-[16px] font-semibold'>${property.price.sale} | ${property.price.rent}.00 <span className='text-xs'>/night</span></p>
                                  <div className='flex flex-row items-center gap-1'>
                                      <p className='ml-2 text-gray-900 text-xl font-semibold'>5.0</p>
                                       {
                                         Array(5).fill('').map((_,index)=>{
                                           return <img key={index} src={assets.star} alt="stars" className='w-5 h-5' />
                                            })
                                        }                     
                                     </div>
                                                                                                      
                                </div>
                           </div>
                            
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
                                        <div className='w-0.5 h-4 bg-gray-500 ml-2'></div>
                                  </div>
                            </div>
                             
                             <div className='flex flex-col gap-1 mt-2'>
                                <h4 className='text-gray-900 font-semibold'>Property Details</h4>
                                 <p className='text-gray-500 text-sm'>{property.description}</p>
                             </div>
                            
                              <div className='flex flex-col gap-2'>
                                <h4 className='text-gray-900 font-semibold'>Amenities</h4>
                                 <div className='flex flex-row gap-4 items-center'>
                                    {property.amenities.map((amenti,index)=>{
                                      return  <div className='bg-yellow-200/50 rounded-full px-2 py-1 text-sm' key={index}>{amenti}</div>
                                    })}
                                 </div>
                              </div>

                             <div className='mt-5 bg-yellow-100 rounded-md py-2'>
                                <form onSubmit={onSubmitHandler} action="" className='px-4 py-3 rounded-md grid grid-cols-1 lg:grid-cols-4 gap-4'>
                                    <div className='flex flex-col gap-1'>
                                       <label htmlFor="checkin" className='flex flex-row gap-1 items-center text-sm text-gray-500'>
                                          <img src={assets.calendar} alt="location icon" className='w-4 h-4' />
                                          Check in
                                       </label>
                                       <input onChange={(e)=>setCheckInDate(e.target.value)} min={new Date().toISOString().split("T")[0]} id='checkin' required  type="date"  className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                       <label htmlFor="checkout" className='flex flex-row gap-1 items-center text-sm text-gray-500'>
                                          <img src={assets.calendar} alt="location icon" className='w-4 h-4' />
                                          Check out
                                       </label>
                                       <input onChange={(e)=>setCheckOutDate(e.target.value)} min={checkInDate} disabled={!checkInDate}  id='checkout' required  type="date"  className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                       <label htmlFor="guests" className='flex flex-row gap-1 items-center text-sm text-gray-500'>
                                          <img src={assets.user} alt="location icon" className='w-4 h-4' />
                                          Guests
                                       </label>
                                       <input value={guests} onChange={(e)=>setGuests(e.target.value)} required  id='guests' placeholder='1' type="number" min={1} max={5} className='border text-sm border-gray-300 text-gray-700 outline-none  focus:border-gray-900 rounded-sm px-2 py-1' />
                                    </div>
                                    <div className='flex flex-col justify-end'>
                                       <button className='bg-black flex items-center justify-center w-full  gap-1 text-[15px] cursor-pointer text-white px-4 py-2 rounded-md text-center hover:shadow-lg hover:shadow-slate-900'>
                                         <img src={assets.search} className='invert  ' width={17} alt="" />
                                         {isAvailable ? "Book Property" : "Check Dates"}
                                       </button>

                                    </div>
                                       
                                </form>
                               </div>



                        </div>

                        <div className='border border-gray-100 rounded-md mx-auto py-3 px-6 w-full'>
                              <div className='flex flex-col items-center gap-2'>
                                  <div>
                                     <h3 className='font-bold text-[17px] md:text-xl '>Contact Agent</h3>
                                  </div>
                                  <div className='w-full'>
                                     <form className='flex flex-col gap-4 items-center' action="">
                                        <div className='w-full'>
                                          <input className='w-full md:w-[90%] border border-gray-400 py-1 px-2 rounded-md text-sm outline-none focus:border-gray-800' type="text" placeholder='Your Name' />
                                        </div>
                                        <div className='w-full'>
                                          <input className='w-full md:w-[90%] border border-gray-400 py-1 px-2 rounded-md text-sm outline-none focus:border-gray-800' type="email" placeholder='Your Email' />
                                        </div>
                                        <div className='w-full'>
                                           <textarea className='w-full md:w-[90%] border border-gray-400 py-1 px-2 rounded-md text-sm outline-none focus:border-gray-800 resize-none' name="" id="" cols={20} placeholder='Your Message' rows={5}></textarea>
                                        </div>
                                        <div className='w-full'>
                                           <button className='bg-yellow-400 w-full md:w-[90%] py-2 cursor-pointer rounded-full text-black font-semibold text-sm text-center hover:bg-black hover:text-yellow-400'>Send Message</button>
                                        </div>
                                     </form>
                                  </div>
                                  <div className='mt-2'>
                                     <h3 className='font-bold text-[17px] md:text-xl '>For Buying Contact</h3>
                                  </div>
                                  <div className='border border-gray-300 rounded-sm w-full py-2 px-3'>
                                       <div className='flex justify-between items-center'>
                                          <div className='flex items-center gap-2'>
                                             <div>
                                                <h5 className='font-semibold text-sm'>{property.agency.name}</h5>
                                                <p className='text-xs text-gray-400'>Agency Office</p>
                                             </div>
                                             <div>
                                                <p className=' bg-cyan-600 text-xs rounded-full py-0.5 px-2 text-cyan-200'>Agency</p>
                                             </div>
                                              
                                          </div>
                                          <div>
                                             <img src={property.agency.owner.image} alt="" className='h-10 w-10 rounded-full' />
                                          </div>

                                       </div>
                                       
                                       <div className='flex gap-3 border-t border-gray-400 mt-1 py-1 items-center'>
                                          <img className='w-5 h-5 py-1 bg-amber-300 rounded-full' src={assets.phone} alt="" />
                                          <p className='text-gray-400 text-sm'>{property.agency.contact}</p>
                                           
                                       </div>
                                       <div className='flex gap-3 border-t border-gray-400 mt-1 py-1 items-center'>
                                          <img className='w-5 h-5 py-1 bg-amber-300 rounded-full' src={assets.mail} alt="" />
                                          <p className='text-gray-400 text-sm'>{property.agency.email}</p>
                                           
                                       </div>
                                       <div className='flex gap-3 border-t border-gray-400 mt-1 py-2 items-center'>
                                           <div className='flex justify-center gap-4 w-full'>
                                              <div className='border-r-2 px-6'>
                                                <div className='flex gap-1.5 items-center'>
                                                   <img src={assets.mail} className='h-5 w-5' alt="email logo" />
                                                   <p className='text-gray-500 text-sm'>Send Email</p>
                                 

                                                </div>
                                              </div>
                                              <div className='px-3'>
                                                <div className='flex gap-1.5 items-center'>
                                                   <img src={assets.phone} className='h-5 w-5' alt="email logo" />
                                                   <p className='text-gray-500 text-sm'>Call Now</p>
                                 

                                                </div>
                                              </div>
                                           </div>
                                           
                                       </div>
                                  </div>   
                                  
                              </div>
                        </div>
                     </div>
                </div>
           </section>
        )
  
  )
}

export default PropertyDetail;

