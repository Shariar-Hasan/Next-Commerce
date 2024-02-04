import Image from "next/image"

const AuthLayout = ({ children }) => {
    console.log("auth layout")
    return (
        <div className="container mx-auto min-h-[80vh]">
            <div className="min-w-xl">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout