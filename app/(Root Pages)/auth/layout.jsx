import Image from "next/image"

const AuthLayout = ({ children }) => {
    return (
        <div className="container mx-auto min-h-[80vh]">
            <div className="min-w-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative">
                        {/* <Image src={""} /> */}
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout