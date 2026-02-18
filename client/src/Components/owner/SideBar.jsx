import React,{useContext, useEffect} from 'react'
import {Outlet,Link,useLocation} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { AppContext } from '../../Context/AppContext'
import { assets } from '../../Data/data'
import {UserButton, useClerk } from "@clerk/clerk-react"

const SideBar = () => {
   const {navigate,isOwner} = useContext(AppContext);
   const location = useLocation();

   const navItems = [
      {
        path: "/owner",
        label: "Dashboard",
        icon: assets.dashboard
      },
      {
        path: "/owner/add-property",
        label: "Add Property",
        icon: assets.housePlus
      },
      {
        path: "/owner/list-property",
        label: "List Property",
        icon: assets.list
      }
   ]

   useEffect(()=>{
       if(!isOwner){
          navigate("/");
       }
   },[isOwner])

   
    
  return (
     <section className='w-full px-1 bg-linear-to-r from-[#fffbee] to-white'>
         <div className='max-w-[1460px] mx-auto px-1 py-1 md:px-2 md:py-2 flex flex-col lg:flex-row gap-8 lg:gap-10'>
              <div className='min-w-[10%] md:min-w-[25%] lg:min-h-[97vh] flex flex-col gap-4 border border-white bg-white shadow rounded-md '>
                 <div className='p-4 flex justify-between'>
                  <Link to={'/'}>
                     <img src={Logo} alt="" className='h-12' />
                  </Link> 
                   <UserButton appearance={{elements:{rootBox: "scale-125",avatarBox: "w-20 h-20"}}} />
                                                 
                                            
                 </div>
                 <div className='flex lg:flex-col gap-6 mt-5 w-full '>
                       {navItems.map((nav,index)=>(
                                  
                             <div key={index} className={`${location.pathname === nav.path ? "bg-yellow-200 border-b-4 lg:border-b-transparent lg:border-r-4 border-yellow-500 p-2 " : "hover:bg-gray-50 p-2"} flex items-center gap-2 w-full py-1 px-2 lg:py-3 lg:px-4 transition-all`}>
                              <img className='hidden lg:flex' src={nav.icon} alt="icon" />
                               <Link className='font-semibold text-neutral-700 text-sm' to={nav.path}>
                                  {nav.label}
                               </Link>
                                
                             </div>
                       ))}
                 </div>
                
              </div>
              <div className='w-full'>
                 <Outlet />
              </div>

         </div>
           
     </section>
  )
}

export default SideBar

