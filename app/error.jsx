"use client"

import LinkButton from "@/components/smallUI/LinkButton"
import { useRouter } from "next/navigation"

const error = ({ error }) => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="text-center">
        <h2 className="text-4xl text-center text-red-600 font-bold">{error.message}</h2>
        <LinkButton href="/">
          Back to Home
        </LinkButton>
      </div>

    </div>
  )
}

export default error