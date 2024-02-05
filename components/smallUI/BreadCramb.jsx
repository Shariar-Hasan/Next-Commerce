"use client"
import { hypenBreakerStringMaker } from "@/utils/converters";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronsRight } from "react-icons/bi";
const BreadCramb = () => {
    let pathname = usePathname()
    const pathArray = pathname.split("/")
    let currentPath = "/"
    let breadCrumbArray = [
        {
            path: "/",
            text: "Home"
        }
    ]
    for (let i = 0; i < pathArray.length; i++) {
        if (pathArray[i] !== "") {
            currentPath += pathArray[i] + "/"
            breadCrumbArray.push({
                path: currentPath,
                text: hypenBreakerStringMaker(pathArray[i])
            })
        }
    }
    return (
        <div className="hidden md:flex items-center justify-normal flex-wrap px-3">
            {
                breadCrumbArray?.map(({ path, text }, index) => {
                    return index === breadCrumbArray.length - 1
                        ?
                        <span
                            key={index}>
                            {text}
                        </span>
                        :

                        <Link
                            className="flex items-center"
                            href={path}
                            key={index}>
                            <span
                                className="text-link">
                                {text}
                            </span>
                            <span
                                className="mx-2">
                                <BiChevronsRight className="text-gray-500" />
                            </span>
                        </Link>
                })
            }
        </div>
    )
}

export default BreadCramb