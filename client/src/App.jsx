import React, {useState,useEffect} from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx';
import Listing from './Pages/Listing.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';


function App() {
   

  return (
       <main className=' relative flex flex-col gap-4 min-h-[2000px] '>
            <Header />
             <div className='flex flex-col gap-4 mt-15 flex-1'>
                <Routes>
                   <Route path='/' element= {<Home />} />
                   <Route path='/listing' element= {<Listing />} />
                    <Route path='/blog' element= {<Blog />} />
                    <Route path='/contact' element= {<Contact />} />
                 </Routes>
             </div>
              <Footer />
       </main>
  )
}

export default App
