"use client"
import useScrollTrack from '@/hooks/useScrollTrack'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const isVisible = useScrollTrack(100)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <button onClick={scrollToTop} className={`fixed bottom-[15px] right-[15px] p-2 text-lg md:text-3xl border-2 rounded-full bg-white text-gray-900 duration-300 ${isVisible
            ? "hover:opacity-100 opacity-50 visible translate-y-0"
            : "opacity-0 invisible translate-y-[200px]"}`}>
            <FaArrowUp />
        </button>
    )
}

export default ScrollToTop