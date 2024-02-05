import React from 'react'
import { FaEye } from 'react-icons/fa'

const page = () => {
  return (
    <div className='container mx-auto'>
      <div className="p-4 md:p-5">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
          <div className='flex justify-between items-center p-4 border '>
            <div>
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