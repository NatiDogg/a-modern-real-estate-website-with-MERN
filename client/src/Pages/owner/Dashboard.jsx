import React,{useState,useContext, useEffect} from 'react'
import { assets } from '../../Data/data'
import { dummyDashboardData } from '../../Data/data'
import { AppContext } from '../../Context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
     const {user, currency,axios,getToken} = useContext(AppContext);
     const [dashboardData, setDashboardData] = useState({
         bookings: [],
         totalBookings: 0,
         totalRevenue: 0
     });


     const getDashboardData = async () => {
    try {
        const token = await getToken();
        if (!token) {
            console.error("No token available - User may be logged out");
            return;
        }

        const { data } = await axios.get("/api/bookings/agency", {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (data.success) {
            setDashboardData(data.dashboardData);
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.error("Clerk Token Error:", error);
        toast.error("Session expired. Please sign in again.");
    }
};

     useEffect(()=>{
           if(user){
            getDashboardData();
           }
     },[user])
     
  return dashboardData && (
       
    <section className='w-full px-3 py-4 '>
       <div className='max-w-[1460px] mx-auto px-1 py-1 md:px-2 md:py-2 flex flex-col gap-4'>
           <div className='w-full flex flex-col md:flex-row justify-between gap-2 md:gap-4 items-center'>
                <div className='w-full bg-yellow-200 rounded-lg flex flex-row items-center gap-6 p-6'>
                     <div className='md:p-0.5'>
                        <img src={assets.house} className='hidden md:flex w-8 h-8' alt="" />
                     </div>
                     <div className='md:p-0.5'>
                        <p className='text-black font-semibold text-sm md:text-[19px]'>{dashboardData?.totalBookings}</p>
                        <h5 className='text-yellow-400 font-bold text-sm md:text-xl'>Total Sales</h5>
                     </div>
                </div>
                <div className='w-full bg-sky-300 rounded-lg flex flex-row items-center gap-6 p-6'>
                   <div className='md:p-0.5'>
                        <img src={assets.dollar} className='hidden md:flex  w-8 h-8' alt="" />
                     </div>
                     <div className='md:p-0.5'>
                        <p className='text-black font-semibold text-sm md:text-[19px]'>{dashboardData?.totalRevenue}</p>
                        <h5 className='text-yellow-400 font-bold text-sm md:text-xl'>Total Earnings</h5>
                     </div>
                </div>
           </div>
           

           <div className='flex w-full flex-col'>
              <div className='p-3 grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-10  bg-yellow-300 items-center text-black rounded-t-lg'>
                   <div className='flex gap-4 md:gap-10 md:p-1 col-span-1 md:col-span-2'>
                      <p className=' hidden md:block text-sm text-black md:text-[17px]'>Index</p>
                      <p className='text-sm text-black md:text-[17px]'>Property</p>
                   </div>
                   <div className='col-span-1 md:col-span-2'>
                      <p className='text-sm text-black md:text-[17px]'>Booking dates</p>
                   </div>
                   <div>
                     <p className='text-sm text-black md:text-[17px]'>Amount</p>
                   </div>
                   <div>
                     <p className='text-sm text-black md:text-[17px]'>Status</p>
                   </div>

              </div>
             <div className='p-3'>
               
              {dashboardData?.bookings.map((booking,index)=>{

                   return <div key={index} className='p-3 flex flex-row flex-wrap md:grid md:grid-cols-6 gap-2 md:gap-10 items-center text-black border-b border-gray-200 '>
                        <div className='flex gap-4 items-center md:gap-10 md:p-1 col-span-1 md:col-span-2'>
                        <p className='text-gray-600 hidden md:block'>{index}</p>
                          <div className='flex items-center gap-2 '>
                             <img src={booking.property.images[0]} alt="" className='w-20 h-15 rounded-lg ' />
                             <p className='text-sm text-gray-600'>{booking.property.title}</p>
                          </div>
                        </div>

                        <div className=' col-span-1 md:col-span-2'>
                           <p className='text-gray-600 text-sm'>{ new Date(booking.checkInDate).toLocaleDateString()} to {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                        </div>
                        <div className='md:px-4'>
                          <p className='text-sm text-gray-600 md:text-[15px]'>{currency}{booking.totalPrice}</p>
                        </div>

                        <div>
                           <p className={`${booking.status.toLowerCase() === "completed"? "bg-green-300 text-green-600": "bg-red-200 text-red-400"} p-2 text-center capitalize font-semibold rounded-full text-sm`}>{booking.status}</p>
                        </div>
                 

                   </div> 
                    
                 })}
                
             </div>
      
           </div>
          
          
       </div>


          
    </section>
  )
}

export default Dashboard


                 