import React from 'react'

const Heading = ({ children }) => {
    return (
        <div className='py-5'>
            <h1 className='inline-block text-4xl font-semibold relative after:absolute after:top-full after:left-0 pb-2 after:w-1/2 after:duration-200 after:hover:w-full after:h-[6px] after:bg-gradient- to-tr after:bg-primary-600 after:from-pri mary-700 after:to-w hite dark:after:to- zinc-900 after:rounded-full'>
                {children}
            </h1>
        </div>
    )
}

export default Heading