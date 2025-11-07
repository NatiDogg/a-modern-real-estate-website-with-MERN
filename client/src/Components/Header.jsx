import React,{useEffect,useState} from 'react'
import { Link,useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png'
import NavBar from '../Components/NavBar';
import loginLogo from '../assets/user.svg';
import closeBtn from '../assets/close.svg'
import openMenuBtn from '../assets/menu.svg'
import searchBtn from '../assets/search.svg';
const Header = () => {
       const [active, setActive] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const location = useLocation();

    useEffect(()=>{
       const handleScroll = ()=>{
            if(location.pathname === "/"){
                 setActive(window.scrollY > 30)
            }
            else{
                setActive(true);
            }
            if(window.scrollY > 20){
                setMenuOpened(false);
            }
           
       }
       window.addEventListener("scroll",handleScroll);
       handleScroll()
       return ()=>{
          window.removeEventListener("scroll",handleScroll);
       }
    },[location.pathname])

  return (
     <header className={`${active ? "bg-white shadow-md": ""} ' fixed w-full top-0 left-0 right-0 px-1 py-0 md:px-4 md:py-1 z-50 transition-all duration-300 '`}>
          <div className='max-w-[1460px] px-2 py-2 md:px-6 md:py-3 flex flex-row justify-between items-center'>
             <div className=''>
                <Link to={"/"}>
                   <img src={Logo} alt="" className={`${!active && "invert"} h-11`} />
                </Link>
             </div>
              <div className={`${menuOpened ? "fixed top-15 right-12 bg-gray-50 z-50 text-black px-12 py-6 shadow-2xl rounded-sm w-52": ""}hidden lg:flex ml-24 flex-1 justify-center`}>
                  <NavBar active = {active} setMenuOpened= {setMenuOpened} menuOpened= {menuOpened}  />
              </div>
               <div className='flex flex-row items-center gap-3 md:gap-5'>
                   
                    <div className={`${showSearch && "bg-gray-200"} hidden md:flex flex-row justify-center items-center gap-1 px-2 py-0.5  rounded-full`}>
                       <input type="text" className={`${showSearch ? "opacity-100 w-50 px-2" : "opacity-0 w-0 px-0"} transition-all duration-200 outline-none  h-full text-black text-sm`} placeholder='type here..' />
                        <div  className={`${showSearch ? "bg-gray-200" : "bg-white"}  rounded-full cursor-pointer py-1 px-1`}>
                           <img onClick={()=>setShowSearch(prevSearch=> !prevSearch)} src={searchBtn} alt="search icon" className='h-6 w-6' />
                           </div>
                    </div>
                     <div className=' flex lg:hidden'>
                           {menuOpened ?
                             <img className={`${!active && "invert"} cursor-pointer  lg:hidden`} src={closeBtn} alt='close menu icon' onClick={()=>setMenuOpened(prevMenu=> !prevMenu)} /> :  <img className={`${!active && "invert"}  cursor-pointer flex lg:hidden`} onClick={()=>setMenuOpened(prevMenu=> !prevMenu)} src={openMenuBtn} alt="open menu button" />
                           }
                     </div>
                   <div className=' bg-yellow-300 px-5 py-2 rounded-full '>
                       <button className='flex  flex-row gap-1 items-center cursor-pointer text-[16px]'>
                           Login 
                           <img src={loginLogo} className='h-4' alt="user Login icon" />
                       </button>
                      
                   </div>
                   
               </div>
             
          </div>
     </header>
  )
}

export default Header;

