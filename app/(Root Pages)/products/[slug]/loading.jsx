import React from 'react'

const loading = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-[100vh] w-[100vw]">
            <div className="w-32 h-32 mx-auto bg-primary-600 rounded-full animate-pulse"></div>
        </div>
    </div>
  )
}

export default loading