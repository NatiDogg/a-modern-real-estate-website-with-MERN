import React from 'react'
import { Link, useLocation } from 'react-router-dom'



const NavBar = ({active,setMenuOpened,menuOpened}) => {
     const location = useLocation();
  const navLinks = [
          {
            name: "Home",
             href: "/"
          },
          {
            name: "Listing",
             href: "/listing"
          },
          {
            name: "Blog",
             href: "/blog"
          },
          {
            name: "Contact",
            href: "/contact"
          }
  ]
  return (
      <nav>
          <ul className={`${menuOpened ? "flex flex-col gap-4 justify-center items-start" : "flex flex-row justify-center items-center gap-4"}`}>
             {navLinks.map((link,index)=>{
                 
                return  <li key={index} className={`${active || menuOpened ? "text-black" : "text-white"}  uppercase font-semibold text-[15px]`}>
                  <Link onClick={()=> {setMenuOpened(false), scrollTo(0,0)}} className='' to={link.href}> {link.name}</Link>
                    {location.pathname === link.href ? <div className=' h-0.5 w-8 bg-amber-500'></div>: ""}
                  </li>
             })}
             
          </ul>
      </nav>
  )
}

export default NavBar;