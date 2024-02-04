import React from 'react'

const loading = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-screen">
            <div className="w-12 h-12 mx-auto bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <h1 className='text-9xl'>Loading</h1>
    </div>
  )
}

export default loading