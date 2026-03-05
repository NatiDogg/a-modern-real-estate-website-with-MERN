import React,{useContext,useEffect,useState} from 'react'
import { assets } from '../Data/data.js';
import { AppContext } from '../Context/AppContext.jsx';
import toast from 'react-hot-toast';
const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const {currency,user,axios,getToken} = useContext(AppContext);
  const getUserBooking = async()=>{
    try {
       const {data} =  await axios.get("/api/bookings/user",{
              headers: {Authorization: `Bearer ${await getToken()}`}
             })

         if(data.success){
            setBookings(data.bookings)
         }
         else{
            toast.error(data.message)
         }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
     if(user){
       getUserBooking();
     }
  },[user]);
    
  
  return (
    <section className='mt-10 w-full bg-yellow-100/20 '>
        <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col gap-4'>
          {
            bookings?.map((booking,index)=>{
              return  <div className='bg-white shadow-sm py-2 px-3 rounded-md flex flex-col gap-1' key={index}>
                    <div className='flex flex-row gap-4 items-start'>
                         <div>
                            <img src={booking.property.images[0]} alt="" className='w-30 h-20 rounded-lg' />
                         </div>
                         <div className='flex flex-col gap-2'>
                            <h3 className='font-bold'>{booking.property.title}</h3>
                            <div className='flex justify-between items-center w-[60%]'>
                               <p className='text-gray-700 font-semibold text-sm'>Guests: <span className='text-gray-400 text-xs'>{booking.guests}</span></p>
                               <p className='text-gray-700 font-semibold text-sm'>Total: <span className='text-gray-400 text-xs'>{currency}{booking.totalPrice}</span></p>
                               
                            </div>
                            <div className='flex gap-0.5 items-center'>
                               <img src={assets.pin} className='w-4 h-4' alt="" />
                               <p className='text-sm text-gray-400'>{booking.property.address}</p>
                            </div>
                            
                         </div>
                         
                    </div>
                     <hr className='m-1 text-gray-200' />
                     <div className='flex flex-col md:flex-row md:justify-between gap-4 md:items-center p-1'>
                         <div className='flex flex-col md:flex-row gap-3 md:items-center'>
                             <div>
                                <p className='text-sm text-black '>Booking ID: <span className='text-gray-400'>{booking._id}</span></p>
                             </div>
                             <div>
                                <p className='text-sm text-black '>Check-In: <span className='text-gray-400'>{new Date(booking.checkInDate).toDateString()}</span></p>
                             </div>
                              <div>
                                <p className='text-sm text-black '>Check-Out: <span className='text-gray-400'>{new Date(booking.checkOutDate).toDateString()}</span></p>
                             </div>
                         </div>
                         <div className='flex flex-row items-center gap-4 '>
                            <div className='flex items-center gap-1'>
                               <p className='text-sm'>Payment:</p>
                              {booking.isPaid ? <div className='w-2 h-2 bg-green-500 rounded-full'></div> : <div className='w-2 h-2 bg-amber-400 rounded-full'></div>}
                              <p className='text-sm'>{booking.isPaid ? "Paid" : "Unpaid"}</p>
                               {!booking.isPaid && <button className='bg-yellow-400 text-xs px-6 py-1 cursor-pointer ml-2'>Pay Now</button>}
                            </div>
                         </div>
                     </div>
                    
              </div>
            })
          }
        </div>
    </section>
  )
}

export default MyBooking