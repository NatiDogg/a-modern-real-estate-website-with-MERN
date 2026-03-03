import React,{useContext,useState} from 'react'
import { AppContext } from '../Context/AppContext';
import { assets, cities } from '../Data/data';
import toast from 'react-hot-toast';


const AgencyReg = () => {
    const {setShowAgencyReg,axios,getToken,setIsOwner} = useContext(AppContext);
    const [formData, setFormData] = useState({
          name: "",
          email: "",
          contact: "",
          address: "",
          city: "",



    });

    const onChangeHandler = (e)=>{
        const {name,value} = e.target
        setFormData(prevData=>(
         {
            ...prevData,
            [name]: value
         }
        ));

    }
    const handleFormSubmit = async(e)=>{
        e.preventDefault();

        try {
         
         const {data} = await axios.post('/api/agencies',formData, {headers: {
            Authorization: `Bearer ${await getToken()}`
         }});

         if(data.success){
            toast.success(data.message)
            setIsOwner(true);
            setShowAgencyReg(false)
         }
         else{
            toast.error(data.message)

         }

        } catch (error) {
           toast.error(error.message)
        }
        
        setFormData({
         name: "",
          email: "",
          contact: "",
          address: "",
          city: "",
        })
    }

  return (
      <section onClick={()=>setShowAgencyReg(false)}  className='fixed inset-0 z-50 w-full bg-black/80 flex items-center justify-center'>
           <div className='hidden lg:flex '>
              <img src={assets.createPrp} alt="" className='w-[450px] h-[510px] object-center rounded-l-lg' />
           </div>
           <div className='bg-white w-[350px] md:w-[450px] md:h-[510px] p-5 relative sm:rounded-sm lg:rounded-r-lg'>
              <div className='absolute top-0 right-0 p-2'>
                 <button onClick={()=>setShowAgencyReg(false)} className='bg-yellow-300 rounded-full p-0.5 cursor-pointer hover:bg-black hover:text-yellow-300'><img src={assets.close} className='w-5 h-5 p-0.5 hover:invert' alt="" /></button>
              </div>
              <form onClick={(e)=> e.stopPropagation()} onSubmit={handleFormSubmit} className='mt-12 p-2 w-full flex flex-col gap-4' action="">
                   <h2 className='text-2xl font-bold text-black'>Register Agency</h2>
                   <div className='flex flex-col gap-4'>
                      <div className='flex flex-col md:flex-row lg:items-center gap-4'>
                          <div className='flex flex-col gap-1'>
                             <label htmlFor="name" className='text-sm font-semibold'>Agency Name</label>
                             <input name='name' onChange={(e)=>onChangeHandler(e)} value={formData.name} className='outline-none border border-gray-300 rounded-sm px-2 text-sm py-1 focus:border-gray-800' placeholder='Type here..' type="text" id='name' required />
                          </div>
                          <div className='flex flex-col gap-1'>
                             <label htmlFor="contact" className='text-sm font-semibold'>Contact</label>
                             <input name='contact' onChange={(e)=>onChangeHandler(e)} value={formData.contact} className='outline-none border border-gray-300 rounded-sm px-2 text-sm py-1 focus:border-gray-800' type="text" placeholder='Type here..' id='contact' required />
                          </div>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                             <input name='email' onChange={(e)=>onChangeHandler(e)} value={formData.email} className='outline-none border border-gray-300 rounded-sm px-2 text-sm py-1 focus:border-gray-800' type="email" placeholder='Type here..' id='email' required />
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label htmlFor="address" className='text-sm font-semibold'>Address</label>
                             <input name='address' onChange={(e)=>onChangeHandler(e)} value={formData.address} className='outline-none border border-gray-300 rounded-sm px-2 text-sm py-1 focus:border-gray-800' type="text" placeholder='Type here..' id='address' required />
                      </div>
                      <div className='flex flex-col gap-1'>
                        <label htmlFor="address" className='text-sm font-semibold'>City</label>
                           <select onChange={(e)=>onChangeHandler(e)} value={formData.city} required className='w-[50%] text-sm p-1 outline-none border border-gray-300 rounded-sm focus:border-gray-800 text-gray-700' name="city" id="city">
                               <option  value="">Select City</option>
                                {cities.map((city,index)=>(
                                   <option key={index} value={city}>{city}</option>
                                ))}
                           </select>
                      </div>
                   </div>
                   <div className='flex justify-center'>
                      <button type='submit' className='bg-neutral-900 hover:bg-black px-8 cursor-pointer py-2 rounded-lg text-white text-sm'>Register</button>
                   </div>
              </form>
           </div>
      </section>
  )
}

export default AgencyReg; 