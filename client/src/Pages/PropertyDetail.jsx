import React,{useContext, useEffect,useState} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const PropertyDetail = () => {
      const [property, setProperty] = useState(null);
     const {id} = useParams();
     const {properties} = useContext(AppContext);
       const a = []
     useEffect(()=>{
         const property = properties.find((property)=> property._id === id);
          if(property){
             setProperty(property);
          }
     },[properties,id])
  return (
    <section className=' mt-10'>
           {
            property && <img src={property.images[0]} alt="" />
           }
     </section>
  )
}

export default PropertyDetail;