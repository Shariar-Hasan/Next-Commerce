import React from 'react'
import { FaEye } from 'react-icons/fa'

const page = () => {
  return (
    <div className='container mx-auto'>
      <div className="p-4 md:p-5">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10"> 
          <div className='flex justify-between items-center px-4 py-8 rounded-md border-b-4 border-b-green-600 border'>
            <div className='text-4xl px-4 text-gray-400'>
              <FaEye />
            </div>
            <div>
              <h2 className='text-xl font-light'>$3.456K</h2>
              <p className='text-gray-400'>Total views</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page