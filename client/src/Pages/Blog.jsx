import React from 'react'
import { blogs } from '../Data/data';
const Blog = () => {
  return (
    <section className='mt-10'>
         <div className='max-w-[1460px] mx-auto px-2 py-2 md:px-4 md:py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
           {
            blogs.map((blog,index)=>{
              return <div key={index} className='flex flex-col gap-2'>
                    <div className='bg-yellow-100/90 rounded-2xl shadow-md p-3'>
                      <img className='rounded-xl shadow-xl shadow-slate-900/50' src={blog.image} alt="blog photo" />
                    </div>
                    <div className='flex flex-col gap-1'>
                       <h5 className='text-sm text-gray-400'>{blog.category}</h5>
                       <h3 className='font-semibold line-clamp-1'>{blog.title}</h3>
                       <p className='text-gray-500 text-sm'>{blog.description}</p>
                       <p className='underline font-bold text-sm mt-2'>continue reading</p>

                    </div>
              </div>
            })
           }

         </div>
    </section>
  )
}

export default Blog;