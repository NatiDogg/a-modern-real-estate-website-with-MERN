import React, {useState,useEffect,useContext} from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx';
import Listing from './Pages/Listing.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import PropertyDetail from './Pages/PropertyDetail.jsx';
import MyBooking from './Pages/MyBooking.jsx'
import AgencyReg from './Components/AgencyReg.jsx';
import { AppContext } from './Context/AppContext.jsx';
import SideBar from './Components/owner/SideBar.jsx';
import Dashboard from './Pages/owner/Dashboard.jsx';
import AddProperty from './Pages/owner/AddProperty.jsx';
import ListProperty from './Pages/owner/listProperty.jsx';




function App() {
    const {showAgencyReg} = useContext(AppContext);
    const location = useLocation();
    const isOwnerPath = location.pathname.includes("owner");
   


  return (
       <main className=' relative flex flex-col gap-4 min-h-screen '>
            {!isOwnerPath && <Header />}
            {
               showAgencyReg && <AgencyReg/>
            }
             <div className='flex flex-col gap-4 mt-12  flex-1'>
                <Routes>
                   <Route path='/' element= {<Home />} />
                   <Route path='/listing' element= {<Listing />} />
                   <Route path='/listing/:id' element= {<PropertyDetail />} />
                    <Route path='/blog' element= {<Blog />} />
                    <Route path='/contact' element= {<Contact />} />
                    <Route path='/my-bookings' element= {<MyBooking />} />
                    <Route path='owner' element={<SideBar />}>
                      <Route index element={<Dashboard/>} />
                      <Route path='/owner/add-property' element={<AddProperty />}/>
                      <Route path='/owner/list-property' element={<ListProperty />} />
                    </Route>
                    
                 </Routes>
             </div>
              {!isOwnerPath && <Footer />}
       </main>
  )
}

export default App
