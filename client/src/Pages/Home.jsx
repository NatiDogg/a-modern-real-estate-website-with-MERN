import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero.jsx';
import About from '../Components/About.jsx';
import FeaturedProperties from '../Components/FeaturedProperties.jsx';
import Faq from '../Components/Faq.jsx';
import Cta from '../Components/Cta.jsx';
import Testimonials from '../Components/Testimonials.jsx';


const Home = () => {
  return (
    <div className=' bg-linear-to-r from-[#fffbee] to-white flex flex-col gap-6  '>
               <Hero />
               <About />
               <FeaturedProperties />
               <Faq />
               <Cta />
               <Testimonials />
              
        
    </div>
     
  )
}

export default Home;