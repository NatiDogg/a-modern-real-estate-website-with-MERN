import React,{createContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
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
    const [searchQuery, setSearchQuery] = useState("");
        const {user} =  useUser();
        const {getToken} = useAuth()
    


    const getProperties = async()=>{
        try {
            const {data} = await axios.get("/api/properties")
            if(data.success){
                setProperties(data.properties)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
        
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
        setProperties,
        currency,
        user,
        showAgencyReg,
        setShowAgencyReg,
        isOwner,
        setIsOwner,
        axios,
        getToken,
        searchQuery,
        setSearchQuery,
        searchedCities,
        setSearchedCities
      

    }

  return (
       <AppContext.Provider value={values}>
               {children}
       </AppContext.Provider>
  )
}

export default AppContextProvider;