"use client"

import { toggleTheme } from "@/redux/slices/themeSlice"
import { FaMoon, FaSun } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

const ThemeSwither = () => {
    const { isDark } = useSelector(state => state.theme)
    const dispatch = useDispatch()
    return (
        <button
            className="text-xl mx-2"
            onClick={() => dispatch(toggleTheme())}
        >
            {isDark ? <FaSun /> : <FaMoon />}
        </button>
    )
}

export default ThemeSwither