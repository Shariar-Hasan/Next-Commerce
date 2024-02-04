"use client"
const Button = ({ handleClick, children, outlined }) => {
    return (
        <button
            onClick={handleClick}
            className={`inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white border-2 rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900  duration-200
            ${outlined
                    ? "hover:bg-primary-600 bg-transparent text-inherit border-primary-600"
                    : 'bg-primary-600 hover:bg-transparent hover:text-inherit hover:border-primary-600'}`} >
            {children}
        </button>
    )
}

export default Button