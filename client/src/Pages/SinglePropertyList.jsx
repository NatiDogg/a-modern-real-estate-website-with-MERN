import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

const SinglePropertyList = () => {
    const location = useLocation();
     const {id} = useParams();
  return (
    <div className=' mt-10'>
          <h2 className='text-red-500'>{id}</h2>
          <h1 className='text-red-500'>{location.pathname}</h1>
     </div>
  )
}

export default SinglePropertyList;