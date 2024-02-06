"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({
    className,
    href,
    activeClassName = "",
    children
}) => {
    const pathname = usePathname()
    const isActive = pathname.endsWith(href)
    return (
        <Link
            href={href}
            className={`${isActive ? activeClassName : ""} ${className}`}
        >{children}</Link>
    )
}

export default NavLink