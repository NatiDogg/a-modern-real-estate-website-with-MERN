import React,{useState} from 'react'
import { assets } from '../../Data/data';

const AddProperty = () => {

    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    });
    const [inputs, setinputs] = useState({
       title: "",
       description: "",
       city: "",
       country: "",
       address: "",
       area: "",
       propertyType: "",
       priceRent: "",
       priceSale:"",
       bedrooms: "",
       bathrooms: "",
       garages: "",
       amenities: {
          parking: false,
          Wifi: false,
          Backyard: false,
          Terrace: false
       }
    });
    const [loading, setLoading] = useState(false);
    

    const handleInputs = (e)=>{
       const {value, name} = e.target

       setinputs(prevInputs=>(
         {
          ...prevInputs,
          [name]: value
         }
       ))

    }

    

    const handleAmenities = (e)=>{
         const { name, value, type, checked } = e.target;
         setinputs(prevInputs=>({
          ...prevInputs,
          amenities:{
             ...prevInputs.amenities,
             [name]: checked
          }


         }))

    }
    const handleOnSubmit = (e)=>{
      e.preventDefault();
      console.log(inputs);
      console.log(images)

      setinputs({
         title: "",
       description: "",
       city: "",
       country: "",
       address: "",
       area: "",
       propertyType: "",
       priceRent: "",
       priceSale:"",
       bedrooms: "",
       bathrooms: "",
       garages: "",
       amenities: {
          parking: false,
          Wifi: false,
          Backyard: false,
          Terrace: false
       }
      })
      setImages({
        1: null,
        2: null,
        3: null,
        4: null
      })

    }
    const handlePropertyImages = (e,key)=>{
        const file = e.target.files[0]

        if(file){
           setImages(prevImages=>(
            {
              ...prevImages,
              [key]: file
            }
           ))
        }
    }
  return (
    <section className='w-full px-3 py-4'>
       <div className='max-w-[760px] w-full px-1 py-1 md:px-2 md:py-2'>
         <form action="" onSubmit={handleOnSubmit} className='flex flex-col gap-4 '>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="name">Property Name</label>
              <input name='title' value={inputs.title} placeholder='Write here..' id='name' type="text" onChange={(e)=>handleInputs(e)} className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="description">Property Description</label>
              <textarea value={inputs.description} onChange={(e)=>handleInputs(e)}  placeholder='Write here..' name="description" id="description" className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600 resize-none' rows={6}></textarea>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="city">City</label>
              <input value={inputs.city} onChange={(e)=>handleInputs(e)}  name='city' placeholder='Write here..' id='city' type="text" className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="country">Country</label>
              <input value={inputs.country} onChange={(e)=>handleInputs(e)}  name='country' placeholder='Write here..' id='country' type="text" className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
             <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="propertyType">Property Type</label>
              <select value={inputs.propertyType} onChange={(e)=>handleInputs(e)}  className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' name="propertyType" id="propertyType">
                 <option value="">Select Type</option>
                 <option value="House">House</option>
                 <option value="Apartment">Apartment</option>
                 <option value="Penthouse">Penthouse</option>
                 <option value="Townhouse">Townhouse</option>
                 <option value="Commercial">Commercial</option>
                 <option value="Land Plot">Land Plot</option>
              </select>
            </div> 
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='flex flex-col gap-1 col-span-1 md:col-span-2'>
              <label className='font-bold' htmlFor="address">Address</label>
              <input onChange={(e)=>handleInputs(e)} value={inputs.address} name='address' placeholder='Write here..' id='address' type="text" className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="area">Area</label>
              <input onChange={(e)=>handleInputs(e)} value={inputs.area} name='area' placeholder='Write here..' id='area' type="text" className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
            
                   
            </div>
           <div className=' grid grid-cols-3 md:grid-cols-5 gap-4'>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="priceRent">Rent Price</label>
              <input onChange={(e)=>handleInputs(e)} value={inputs.priceRent} name='priceRent' placeholder='100' id='priceRent' type="number" min={100} className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="priceSale">Sale Price</label>
              <input onChange={(e)=>handleInputs(e)} value={inputs.priceSale} name='priceSale' placeholder='1000' id='priceSale' type="number" min={100} className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="bedrooms">Bedrooms</label>
              <input onChange={(e)=>handleInputs(e)} value={inputs.bedrooms} name='bedrooms' placeholder='1' id='bedrooms' type="number" min={1} className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="bathrooms">Bathrooms</label>
              <input onChange={(e)=>handleInputs(e)} value={inputs.bathrooms} name='bathrooms' placeholder='1' id='bathrooms' type="number" min={1} className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="garages">Garages</label>
              <input onChange={(e)=>handleInputs(e)} value={inputs.garages} name='garages' placeholder='1' id='garages' type="number" min={1} className='px-2 py-2 outline-none focus:outline-none border border-gray-400 focus:border-gray-500 rounded-md bg-yellow-100/30 text-gray-600' />
            </div>
    
           </div>

           
             <div className='flex flex-col gap-1'>
              <label className='font-bold' htmlFor="amenities">Amenities</label>
               <div className='flex flex-row items-center gap-3 flex-wrap'>
                  <div className='flex flex-row gap-1.5'>
                     <input type="checkbox" name="parking" checked={inputs.amenities.parking} onChange={handleAmenities} />
                     <p className='text-gray-600 text-sm font-medium'>Parking</p>
                  </div>
                  <div className='flex flex-row gap-1.5'>
                     <input type="checkbox" name="Wifi" checked={inputs.amenities.Wifi} onChange={handleAmenities} />
                     <p className='text-gray-600 text-sm font-medium'>Wifi</p>
                  </div>
                   <div className='flex flex-row gap-1.5'>
                     <input type="checkbox" name="Backyard" checked={inputs.amenities.Backyard} onChange={handleAmenities} />
                     <p className='text-gray-600 text-sm font-medium'>Backyard</p>
                  </div>
                   <div className='flex flex-row gap-1.5'>
                     <input type="checkbox" name="Terrace" checked={inputs.amenities.Terrace} onChange={handleAmenities} />
                     <p className='text-gray-600 text-sm font-medium'>Terrace</p>
                  </div>
                 
               </div>
            </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                 {Object.keys(images).map((key)=>{
                    return <label key={key} htmlFor={`propertyImage${key}`} className='ring-1 ring-slate-900/50 overflow-hidden rounded-lg'>
                        <input type="file" accept='image/*' id={`propertyImage${key}`} hidden onChange={(e)=>handlePropertyImages(e,key)} />
                        <div className=''>
                           <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadIcon} alt="upload area" className='overflow-hidden object-contain' />
                        </div>
                     </label>
                 })}

              </div>
             <div className='flex flex-col gap-1  items-center'>
              <button type='button' disabled={loading} className='font-semibold bg-yellow-400 text-black px-6 py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:shadow-[0_10px_20px_rgba(217,119,6,0.4)] hover:-translate-y-0.5'>
                 {loading ? "Adding" : "Add Property"}
            </button>
            </div>
           
         </form>


       </div>
       
    </section>
  )
}

export default AddProperty;