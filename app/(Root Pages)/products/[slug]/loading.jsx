import React from 'react'

const loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[100vh] w-[100vw]">
        <div>
          <span className="w-6 aspect-square bg-primary-600 animate-pulse rounded-full"></span>
          <span className="w-6 aspect-square bg-primary-600 animate-pulse rounded-full"></span>
          <span className="w-6 aspect-square bg-primary-600 animate-pulse rounded-full"></span>
        </div>
      </div>
    </div>
  )
}

export default loading