"use client"
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { FaBell, FaUserLarge } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import BreadCramb from "../smallUI/BreadCramb";
import { useRouter } from "next/navigation";
import { toggleTheme } from "@/redux/slices/themeSlice";
import Image from "next/image";
import ThemeSwither from "../smallUI/ThemeSwither";

const DashboardHeader = ({ setIsSidebarOpen }) => {
    const { isDark } = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const router = useRouter()
    const avaterMenu = [
        {
            title: "Profile",
            icon: <FaUserLarge />,
            func: () => {
                router.push("/dashboard/profile")
            }
        },
        {
            title: "Settings",
            icon: <FiSettings />,
            func: () => {
                router.push("/dashboard/profile/settings")
            }
        },
        {
            title: "Log Out",
            icon: <FaSignOutAlt />,
            func: () => { return }
        },
    ]
    return (
        <div className={`w-full z-[99] sticky shadow-md duration-700 transition-all top-0 bg-front py-2 flex items-center justify-between`}>
            {/* dahsboard header left */}
            <div className="flex items-center md:px-3">
                <button
                    className="p-3 rounded-full text-xl"
                    onClick={() => setIsSidebarOpen(prev => !prev)}
                >
                    <HiMiniBars3BottomLeft />
                </button>
                <BreadCramb />
            </div>
            {/* Dashboar dheader right */}
            <div className="md:px-3 flex items-center">
                <ThemeSwither />
                <button
                    className="p-3 rounded-full text-xl group/menu relative">
                    <Image
                        width={300}
                        height={300}
                        className="w-[40px] aspect-square rounded-full"
                        src="https://i.pravatar.cc/300"
                        alt="Shariar Hasan" />
                </button>
            </div>
        </div>
    )
}

export default DashboardHeader 