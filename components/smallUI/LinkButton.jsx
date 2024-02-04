import Link from 'next/link'
import React from 'react'

const LinkButton = ({ href = "", children, outlined }) => {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center border-2 rounded-lg  duration-200
            ${outlined
                    ? "hover:bg-primary-600 hover:text-gray-200 bg-transparent text-inherit border-primary-600"
                    : 'text-gray-200 bg-primary-600 hover:bg-transparent hover:text-inherit border-primary-600 hover:border-primary-600'}`} >
            {children}
        </Link>
    )
}

export default LinkButton