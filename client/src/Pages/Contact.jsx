
import React from 'react'
import bgImg from '../assets/bg.png'

const Contact = () => {
  return (
     <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}
            </style>

            <section className="flex items-center justify-center py-12 px-4">
                <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">

                    <div className="p-5">
                        <h1 className="text-3xl font-semibold text-gray-900 text-center md:text-start mb-3 tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-sm/6 text-gray-600 text-center md:text-start mx-auto md:mx-0 mb-8 leading-relaxed max-w-[400px]">
                            Have a question or idea? Our approachable team would love to connect and support you.
                        </p>

                        <form>
                            <div className="grid grid-cols-2 gap-4 mb-5">
                                <div>
                                    <label className="block text-sm text-gray-500 mb-2">First name</label>
                                    <input type="text" placeholder="David" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-500 mb-2">Last name</label>
                                    <input type="text" placeholder="Andrew" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />  
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm text-gray-500 mb-2">Email id</label>
                                <input type="email" placeholder="david@company.com" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"/>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm text-gray-500 mb-2">Phone number</label>
                                <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-indigo-500 transition-colors">
                                    <select className="px-3 py-3 text-sm outline-none cursor-pointer text-gray-500 bg-white border-r border-gray-300">
                                        <option>US</option>
                                        <option>UK</option>
                                        <option>ET</option>
                                        <option>CA</option>
                                    </select>
                                    <input type="tel" placeholder="+1 342 123-456" className="flex-1 px-3 py-3 text-sm outline-none" />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm text-gray-500 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none resize-y focus:border-indigo-500 transition-colors"/>
                            </div>

                            <div className="flex items-center gap-2 mb-6">
                                <input type="checkbox" className="w-5 h-5 cursor-pointer accent-indigo-500 rounded-[5px] text-gray-300" />
                                <label className="text-sm text-gray-500 cursor-pointer">
                                    You agree to our <span className="underline">terms</span> and <span className="underline">privacy policy</span>.
                                </label>
                            </div>

                            <button type="submit" className="w-full py-3.5 bg-linear-to-br from-yellow-300 to-yellow-500 text-white rounded-lg text-sm cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]" >
                                Send message
                            </button>
                        </form>
                    </div>

                    <div className="rounded-3xl p-10 relative min-h-[662px] w-full max-w-[520px] hidden md:flex flex-col justify-between overflow-hidden">
                        <img src={bgImg} alt="3D shapes" className="absolute inset-0 w-full h-full object-cover" />

                        <div className="relative z-10 mt-auto">
                            <p className="text-sm/6 text-white mb-5 max-w-[400px]">
                                Explore Exceptional Properites located in stunning surroundings
                            </p>
                            <p className="text-sm text-white mb-4 text-right">
                                ━ Natnael wondimu
                            </p>

                            <div className="flex justify-end gap-2 items-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Contact