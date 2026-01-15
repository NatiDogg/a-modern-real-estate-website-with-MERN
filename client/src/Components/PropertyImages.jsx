import React,{useState} from 'react'

const PropertyImages = ({property}) => {
      const [hoveredIndex, setHoveredIndex] = useState(0);
      const imageCaptions = [
          {
            heading: "Front View",
            desc: "Experience a stunning first impression with elegant curb appeal"
          },
          {
            heading: "Living Area",
            desc: "Spacious interiors designed for comfort and style"
          },
          {
            heading: "Master Bedroom",
            desc: "A private retreat featuring comfort, light, and relaxation."
          },
           {
            heading: "Modern Kitchen",
            desc: "Fully equipped kitchen with sleek finishes and modern appliances."
          },
      ]
  return (
       <div className='flex items-center gap-2 h-[400px] w-full mx-auto'>
          {
            property.images.map((image,index)=>{
                const caption = imageCaptions[index]
                const isHovered = hoveredIndex === index
                return (
                     <div key={index} className={`relative group transition-all duration-500 h-[400px] overflow-hidden rounded-2xl ${isHovered ? "grow w-full": "max-sm:w-10 max-md:w-20 2-56"}`} onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(0)}>
                         <img src={image} alt="property" className='h-full w-full object-cover object-center rounded-2xl' />
                         <div className='absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl'>
                            <h3 className='text-xl text-gray-200'>{caption.heading}</h3>
                             <p className='text-white/90'>{caption.desc}</p>
                         </div>
                     </div>
                )
            })
          }
       </div>
  )
}

export default PropertyImages;

//flex items-center gap-6 h-[400px] w-full mx-auto