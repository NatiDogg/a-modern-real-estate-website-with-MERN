import React,{useState} from 'react'
import { assets } from '../Data/data';
import faq from '../assets/faq.png'
import { FaAngleDown,FaAngleUp } from 'react-icons/fa';

const Faq = () => {
    const [openAnswer, setOpenAnswer] = useState(null);
    const frequentUserQuestions = [
         {
          question: "Lightning Fast Booking",
           answer: "Designed for speed - instant search and seamless property viewing."
         },
         {
          question: "Fully Customerizable Homes",
           answer: "Easily change layouts,features, and designs to fit your lifestyle."
         },
         {
          question: "Responsive by Location",
           answer: "Every property is accessible by area - no extra effort requried"
         },
         {
          question: "Real Estate Powered",
           answer: "Backed using trusted property data - no extra agents or steps needed."
         },
         {
          question: "Smart Home Support",
           answer: "All houses come ready with modern smart living fetures included."
         }
    ]
    const toggleAnswer = (question)=>{
         if(openAnswer === question){
            setOpenAnswer(null);
         }
         else{
          setOpenAnswer(question)
         }
    }
  return (
    
    <section className='w-full px-4 py-6'>
       <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-6 md:py-4 grid grid-cols-1 lg:grid-cols-2 gap-6'>
           <div className='px-4 py-2 relative mx-auto flex flex-col justify-center '>
                   <img src={faq} alt="" width={600} className='rounded-2xl shadow-lg'  />
                <div className='absolute top-6 md:top-18 shadow-lg bg-white rounded-2xl text-black w-[80%] left-8  md:left-10   '>
                    <div className='flex flex-row items-center gap-4 px-4 py-2 '>
                        <div className=''>
                           <img src={assets.signature} className='w-12 h-12' alt="signature icon" />
                        </div>
                         <div className='flex flex-col gap-0.5'>
                            <h3 className='text-[15px] md:text-[16px] font-semibold'>Trusted Real Estate Experts</h3>
                            <p className='text-gray-500 text-[13px] md:text-sm w-full'>Turst,clarity, and simplicity are at the core of everything we do to make your property journey easy </p>

                         </div>
                    </div>
                </div>
           </div>
            <div className='px-4 py-2'>
                <div className='flex flex-col gap-4 mt-10'>
                      <div>
                         <p className='text-yellow-300 font-bold text-[18px]'>Homes Made for Living</p>
                          <h2 className='text-3xl md:text-5xl capitalize text-slate-900 font-semibold'>Simplifying your property </h2>
                          <h2 className='text-3xl md:text-5xl capitalize text-slate-900 font-semibold mt-1 md:mt-3'>Search Every Step</h2>
                          <p className='text-gray-400 px-2 mt-3 w-full  md:w-[90%] text-sm '>From finding the right location to finalzing the deal, we ensure your real estate journey is smooth,efficient and fulfiling.</p>
                      </div>
                       <div className='mt-10 px-2'>
                           <div className='flex flex-col gap-6'>
                               {frequentUserQuestions.map((q,index)=>{
                                    return <div key={index} onClick={()=>toggleAnswer(q.question)} className='border border-yellow-300/20 px-4 py-2 bg-yellow-300/20 rounded-sm cursor-pointer '>
                                         <div className='flex flex-row justify-between'>
                                           <h2 className='text-sm'>{q.question}</h2>
                                            <button className='cursor-pointer'>
                                               {
                                                openAnswer === q.question ?<FaAngleUp  /> : <FaAngleDown />
                                               }
                                            </button>
                                         </div>
                                          <div>
                                             <p className={`${openAnswer === q.question ? "block" : "hidden"} text-[15px] mt-3 text-gray-500`}>{q.answer}</p>
                                          </div>
                                    </div>

                               })}

                           </div>
                       </div>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Faq;