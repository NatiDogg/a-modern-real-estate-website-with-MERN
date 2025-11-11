import React,{createContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProperties } from '../Data/data.js';
export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);

    const getProperties = ()=>{
        setProperties(dummyProperties);
    }
    useEffect(()=>{
        getProperties();
    },[]);
    const values = {
        navigate,
        properties

    }
  return (
       <AppContext.Provider value={values}>
               {children}
       </AppContext.Provider>
  )
}

export default AppContextProvider;