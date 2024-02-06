"use client"
import { useRouter } from "next/navigation"
import Button from "./components/smallUI/Button"

const NotFound = () => {
    const router = useRouter()
    return (
        <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-back'>
            <div className="max-w-xl w-full border flex items-center flex-col">
                <h1 className='text-9xl text-yellow-300'>404</h1>
                <h2 className='text-4xl'>Page Not Found</h2>
                <h3 className='text-xl'>The page you are looking for does not exist.</h3>
                <div className='flex items-center justify-center gap-5 mt-10'>
                    <Button handleClick={() => router.back()} >
                        Go back
                    </Button>
                    <Button handleClick={() => router.push("/")} outlined >
                        Go to Homepage
                    </Button>
                    {/* <Link href='/' replace className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Home
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default NotFound