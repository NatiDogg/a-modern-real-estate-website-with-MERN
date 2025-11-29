import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { assets } from '../Data/data.js';

const Footer = () => {
  return (
      <footer className='w-full px-4 py-6 bg-[#fffbee] '>
         <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-6 md:py-4 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 '>
            <div className='col-span-2 sm:col-span-1 lg:col-span-2 px-3'>
                  <div>
                     <Link onClick={()=>scrollTo(0,0)} to={"/"}>
                         <img src={Logo} alt="" className='h-11' />
                      </Link>
                  </div>
                  <div className='flex flex-col gap-4 mt-2'>
                     <p className='text-sm text-gray-400'>Providing local expertise and the most comprehensive listing data to help you find your perfect home, whether you're moving across the street or across the country.</p>
                     <div className='flex flex-row items-center gap-3'>
                          <div>
                             <a rel='noopener noreferrer' title='facebook.com' target='_blank' href="https://facebook.com"> <img className='h-4.5 hover:scale-110 transition-all duration-150' src={assets.facebook} alt="facebook page link" /></a>
                          </div>
                          <div>
                             <a title='instagram.com' target='_blank' href="https://www.instagram.com/nate_dogg65" rel='noopener noreferrer'> <img className='h-4.5 hover:scale-110 transition-all duration-150' src={assets.instagram} alt="instagram page link" /></a>
                          </div>
                           <div>
                             <a title='twitter.com' target='_blank' href="https://www.twitter.com" rel='noopener noreferrer'> <img className='h-4.5 hover:scale-110 transition-all duration-150'  src={assets.twitter} alt="twitter page link" /></a>
                          </div>
                          <div>
                             <a title='linkdin.com' target='_blank' href="https://www.linkedin.com/in/natnael-wondmu-863b69298/" rel='noopener noreferrer'> <img className='h-4.5 hover:scale-110 transition-all duration-150'  src={assets.linkedin} alt="linkedin page link" /></a>
                          </div>
                     </div>
                  </div>
            </div>
            <div className='flex flex-col gap-2 mx-auto py-1 px-2'>
                 <div className=''>
                   <h3 className='uppercase font-semibold'>company</h3>
                 </div>
                 <div className='flex flex-col gap-2'>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)}  to={'/blog'}>About</Link>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)} to={'/blog'}>Careers</Link>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)} to={'/blog'}>Press</Link>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)} to={'/blog'}>Blog</Link>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)} to={'/blog'}>Partners</Link>
                 </div>
            </div>
            <div className='flex flex-col gap-2 mx-auto py-1 px-2'>
                 <div className=''>
                   <h3 className='uppercase font-semibold'>support</h3>
                 </div>
                 <div className='flex flex-col gap-2'>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)}  to={'/contact'}>Help Center</Link>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)} to={'/contact'}>Saftey information</Link>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)} to={'/contact'}>Cancellation Options</Link>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)} to={'/contact'}>Contact Us</Link>
                      <Link className='text-sm text-gray-500 hover:scale-105' onClick={()=>scrollTo(0,0)} to={'/contact'}>Accessibility</Link>
                 </div>
                 
            </div>
            <div className='flex flex-col gap-2  col-span-2 sm:col-span-3 items-center lg:col-span-1 lg:items-start mx-auto py-1 px-2'>
                 <div className=''>
                   <h3 className='uppercase font-semibold'>stay updated</h3>
                 </div>
                 <div className='mt-1'>
                  <p className='text-gray-400 text-sm'>Subscribe to our newsletter for inspiration and special offers</p>
                 </div>
                 <div className=' relative border flex flex-row  w-full py-1 px-1 md:px-2 border-gray-300 rounded-full'>
                   <input className='outline-none px-2 py-0.5' type="text" />
                     <div className='absolute right-2 md:right-0 bottom-0'>
                          <button className='bg-neutral-800 text-white text-sm rounded-full px-2 cursor-pointer hover:bg-neutral-950 py-2'>Subscribe</button>
                     </div>
                  
                 </div>
                
                 
            </div>


         </div>
           <hr className='text-gray-300' />
          <div className='flex flex-row py-1 justify-between items- gap-10'>
              <div>
                <p className='text-sm text-gray-500'>&copy; {new Date().getFullYear()} Natiorria. All rights reserved.</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <p className='text-sm cursor-pointer text-gray-500 hover:scale-105 transition-all duration-150'>Privacy</p>
                  <p className='text-sm cursor-pointer  text-gray-500 hover:scale-105 transition-all duration-150'>Terms</p>
                  <p className='text-sm cursor-pointer  text-gray-500 hover:scale-105 transition-all duration-150'>Sitemap</p>

              </div>
          </div>
           
      </footer>
  )
}

export default Footer;