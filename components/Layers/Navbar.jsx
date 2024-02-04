"use client"
import { companyInfo, navRoutes } from "@/utils/contants"
import NavLink from "../smallUI/NavLink"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    useEffect(() => {
        console.log(isNavOpen)
    }, [isNavOpen])
    const toggleNavOpening = () => {
        setIsNavOpen(prev => !prev)
    }
    console.log(companyInfo)
    return (
        <header className="bg-front">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">{companyInfo?.name}</span>
                        <Image
                            width={32}
                            height={32}
                            className="h-auto"
                            src={companyInfo?.logo?.src} alt={companyInfo?.name} />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={toggleNavOpening}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {
                        navRoutes.map(({ path, name, isNavItem }) => (
                            isNavItem && <NavLink
                                key={name}
                                href={path}
                                className={"text-sm font-semibold leading-6 "}
                                activeClassName="text-link"
                            >
                                {name}
                            </NavLink>
                        ))
                    }
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <NavLink href="/login"
                        className="text-sm font-semibold leading-6 " activeClassName="text-link">Log in</NavLink>
                </div>
            </nav>
            {/* Mobile Version Navbar */}
            <div className="lg:hidden" role="dialog" aria-modal="true">
                <div className={`${isNavOpen ? "translate-x-0" : "translate-x-full"} fixed inset-y-0 right-0 z-10 w-full duration-200 overflow-y-auto bg-front px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
                    {/* Logo and Close button */}
                    <div className="flex items-center justify-between">
                        {/* Logo  */}
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">{companyInfo?.name}</span>
                            <Image
                                width={32}
                                height={32}
                                className=" w-auto"
                                src={companyInfo?.logo?.src}
                                alt={companyInfo?.name} />
                        </Link>
                        {/* Close button for Mobile Nav */}
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* Nav section :  Mobile version */}
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {
                                    navRoutes?.map(({ name, path, isNavItem }) => isNavItem &&
                                        <NavLink
                                            key={name}
                                            href={path}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            activeClassName="text-link">
                                            {name}
                                        </NavLink>)
                                }
                            </div>
                            <div className="py-6">
                                <NavLink href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 " activeClassName="text-link">Log in</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Navbar