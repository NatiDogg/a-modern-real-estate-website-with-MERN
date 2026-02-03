import React,{createContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProperties } from '../Data/data.js';
import { useUser } from '@clerk/clerk-react';
export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);
     const {user} =  useUser();


    const getProperties = ()=>{
       setProperties(dummyProperties);
        
    }
    
    useEffect(()=>{
        getProperties();
    },[]);

    
    
    const values = {
        navigate,
        properties,
        currency,
        user
      

    }

  return (
       <AppContext.Provider value={values}>
               {children}
       </AppContext.Provider>
  )
}

export default AppContextProvider;