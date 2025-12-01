import React,{createContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProperties } from '../Data/data.js';
export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);
    const [loadingState, setLoadingState] = useState(true);


    const getProperties = ()=>{
        setProperties(dummyProperties);
        
    }
    useEffect(() => {
        let timer;

     if (properties.length === 0) {
           timer = setTimeout(() => {
             setLoadingState(false);
           }, 10000);
     } else {
        // properties loaded immediately
        setLoadingState(false);
    }

      return () => clearTimeout(timer); // cleanup to avoid memory leaks
     }, [properties]);
    useEffect(()=>{
        getProperties();
    },[]);

    
    
    const values = {
        navigate,
        properties,
        loadingState

    }

  return (
       <AppContext.Provider value={values}>
               {children}
       </AppContext.Provider>
  )
}

export default AppContextProvider;