"use client"

import { useRouter } from "next/navigation"
import LinkButton from "./components/smallUI/LinkButton"
import Button from "./components/smallUI/Button"

const error = ({ error, reset }) => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="text-center">
        <h2 className="text-4xl text-center text-red-600 font-bold">{error.message}</h2>
        <LinkButton href="/">
          Back to Home
        </LinkButton>
        <Button handleClick={() => reset()}>
          Retry
        </Button>
      </div>

    </div>
  )
}

export default error