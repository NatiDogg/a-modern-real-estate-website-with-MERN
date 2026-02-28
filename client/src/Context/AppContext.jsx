import React,{createContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProperties } from '../Data/data.js';
import { useAuth, useUser } from '@clerk/clerk-react';
import axios from 'axios'
import toast from 'react-hot-toast'
export const AppContext = createContext();

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL


const AppContextProvider = ({children}) => {
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate();
    const [searchedCities, setSearchedCities] = useState([]);
    const [properties, setProperties] = useState([]);
    const [showAgencyReg, setShowAgencyReg] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
        const {user} =  useUser();
        const {getToken} = useAuth()
    


    const getProperties = ()=>{
       setProperties(dummyProperties);
        
    }
    const getUser = async()=>{
         try {
            const {data} = await axios.get("/api/user",{headers: {Authorization: `Bearer ${await getToken()}`}})

            if(data.success){
                setIsOwner(data.role === "agencyOwner")
                setSearchedCities(data.recentSearchedCities)
                
            }
            else{
                setTimeout(()=>{
                   getUser()
                },5000)
            }
         } catch (error) {
             toast.error(error.message)
         }
    }
    useEffect(()=>{
        if(user){
            getUser()
        }
    },[user])
    
    useEffect(()=>{
        getProperties();
    },[]);

    
    
    const values = {
        navigate,
        properties,
        currency,
        user,
        showAgencyReg,
        setShowAgencyReg,
        isOwner,
        setIsOwner
      

    }

  return (
       <AppContext.Provider value={values}>
               {children}
       </AppContext.Provider>
  )
}

export default AppContextProvider;