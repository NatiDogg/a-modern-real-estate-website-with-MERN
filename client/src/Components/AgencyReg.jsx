import React,{useContext,useState} from 'react'
import { AppContext } from '../Context/AppContext';
import { assets } from '../Data/data';

const AgencyReg = () => {
    const {setShowAgencyReg} = useContext(AppContext);
    const [formData, setFormData] = useState({
          name: "",
          email: "",
          contact: "",
          address: "",
          city: "",



    });

  return (
      <section className='fixed inset-0 z-50 w-full bg-black/80 flex items-center justify-center'>
           <div className='hidden lg:flex '>
              <img src={assets.createPrp} alt="" className='w-[450px] h-[500px] object-center rounded-l-lg' />
           </div>
           <div className='bg-white w-[450px] h-[500px] p-5 relative sm:rounded-sm lg:rounded-r-lg'>
              <div className='absolute top-0 right-0 p-2'>
                 <button onClick={()=>setShowAgencyReg((prevShow)=>!prevShow)} className='bg-yellow-300 rounded-full p-0.5 cursor-pointer hover:bg-black hover:text-yellow-300'><img src={assets.close} className='w-5 h-5 p-0.5 hover:invert' alt="" /></button>
              </div>
              <form className='mt-10 p-2 w-full' action="">
                   <h2 className='text-2xl font-bold text-black'>Register Agency</h2>
                   <div className='flex flex-col gap-4'>
                      <div className='flex items-center gap-4'>
                          <div className='flex flex-col gap-1'>
                             <label htmlFor="name">Agency Name</label>
                             <input type="text" id='name' />
                          </div>
                          <div className='flex flex-col gap-1'>
                             <label htmlFor="name">Agency Name</label>
                             <input type="text" id='name' />
                          </div>
                      </div>
                   </div>
              </form>
           </div>
      </section>
  )
}

export default AgencyReg; 