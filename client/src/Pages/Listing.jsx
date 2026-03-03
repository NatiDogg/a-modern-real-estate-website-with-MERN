import React,{useContext,useMemo,useState} from 'react'
import { AppContext } from '../Context/AppContext';
import PropertyList from '../Components/PropertyList.jsx';


const Listing = () => {
  const {properties} = useContext(AppContext);
  const [selectedFilters, setSelectedFilters] = useState({
     propertyType: [],
     priceRange: [],

  })
  const [selectedSort, setSelectedSort] = useState("");
   
  const sortOptions = ["Relevant","Low to High", "High to Low"];
  const propertyTypes = ["House","Apartment","Villa","Penthouse","Townhouse","Commercial","Land Plot"];
  const priceRange = ["0 to 10000","10000 to 20000","20000 to 40000","40000 to 80000"];

  const handleFilterChange = (checked,value,type)=>{
    setSelectedFilters(prev=>{
       const updated = {...prev}
       if(checked){
          updated[type].push(value)
       }
       else{
        updated[type] = updated[type].filter(v=> v !== value)

       }
       return updated
    })

  }

  //sorting function

    const sortProperties = (a,b)=>{
       if(selectedSort === "Low to High"){
         return a.price.sale - b.price.sale
       }
       if(selectedSort === "High to Low"){
          return b.price.sale - a.price.sale - a.price.sale
       }
       return 0
    }

    //price filter
    const matchesPrice = (property)=>{
        if(selectedFilters.priceRange.length === 0) return true
        return selectedFilters.priceRange.some(range=>{
           const [min,max] = range.split(" to ").map(Number)
           return property.price.sale >= min && property.price.sale <= max
        })
    }

    // type filter

     const matchesType = (property)=>{
          if(selectedFilters.propertyType.length === 0) return true
          return selectedFilters.propertyType.includes(property.propertyType)
     }

     // Filtered & sorted properties

     const filteredProperties = useMemo(()=>{
       return properties.filter(p=>matchesType(p) && matchesPrice(p)).sort(sortProperties)
     },[properties,selectedFilters,selectedSort])
  

  return ( 
    <section className='mt-10 w-full  px-4 bg-linear-to-r from-[#fffbee] to-white'>
        <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col md:flex-row gap-8'>
            <div className=' min-w-[10%] md:min-w-[30%] min-h-[600px] bg-linear-to-t from-yellow-50 via-yellow-100 to-yellow-100 px-8 py-2 flex flex-col gap-10'>
                  <div className='mt-5'>
                     <h2 className='text-sm font-bold'>Sort By</h2> 
                     <select value={selectedSort} onChange={(e)=>setSelectedSort(e.target.value)} className='w-full mt-2 border px-4 py-1 border-gray-200 text-sm' name="" id="">
                       {sortOptions.map((option,index)=>(
                          <option className='' key={index} value={option}>{option}</option>
                       ))}
                     </select>
                  </div>
                   <div className=''>
                     <h2 className='text-sm font-bold'>Property Type</h2> 
                     <div className='mt-2'>
                       {propertyTypes.map((type,index)=>(
                          <div key={index} className='flex flex-row items-center gap-2 text-sm'>
                             <input checked={selectedFilters.propertyType.includes(type)} onChange={(e)=>handleFilterChange(e.target.checked,type,"propertyType")}  type="checkbox"  />
                             <p>{type}</p>
                          </div>
                       ))}
                     </div>
                  </div>
                  <div className=''>
                     <h2 className='text-sm font-bold'>Price Range</h2> 
                     <div className='mt-2'>
                       {priceRange.map((price,index)=>(
                          <div key={index} className='flex flex-row items-center gap-2 text-sm'>
                             <input checked={selectedFilters.priceRange.includes(price)} onChange={(e)=>handleFilterChange(e.target.checked,price,"priceRange")}  type="checkbox" />
                             <p>${price}</p>
                          </div>
                       ))}
                     </div>
                  </div>
                  
            </div>
             <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               {  filteredProperties.length > 0 ? filteredProperties.map((property,index)=>(
                 <PropertyList key={index} property={property} />
               )): <div className='text-center text-red-500 mt-20 text-2xl'>No matches found.</div>}
             </div>
        </div>
    </section>
  )
}

export default Listing;