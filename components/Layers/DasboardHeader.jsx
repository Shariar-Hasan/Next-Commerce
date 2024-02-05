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
                {/* notification */}
                <button
                    className="p-3 rounded-full text-xl group/menu relative">
                    <FaBell />
                    <span className="absolute top-0 right-0  bg-red-500 text-white rounded-full px-1 py-0.5 text-xs font-bold">2</span>
                    {/* This is notification points */}
                    <ul className="absolute top-full right-0 bg-front border rounded-lg group-focus-within/menu:visible group-focus-within/menu:opacity-100 invisible duration-200 opacity-0 p-2 min-w-[400px]">
                        <li className="flex justify-start items-center px-3 py-2 rounded-lg hover:bg-back duration-200 gap-x-3">
                            <span className="flex items-center justify-center p-2 rounded-full border">
                                <FaBell />
                            </span>
                            <span className="flex-grow text-left text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing.
                            </span>
                        </li>
                        <li className="flex justify-start items-center px-3 py-2 rounded-lg hover:bg-back duration-200 gap-x-3">
                            <span className="flex items-center justify-center p-2 rounded-full border">
                                <FaBell />
                            </span>
                            <span className="flex-grow text-left text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing.
                            </span>
                        </li>
                        <li className="flex justify-start items-center px-3 py-2 rounded-lg hover:bg-back duration-200 gap-x-3">
                            <span className="flex items-center justify-center p-2 rounded-full border">
                                <FaBell />
                            </span>
                            <span className="flex-grow text-left text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing.
                            </span>
                        </li>
                    </ul>
                </button>

                <button
                    title={`switch to ${isDark ? "Light Mode" : "Dark Mode "}`}
                    onClick={() => dispatch(toggleTheme())}
                    className="p-4 rounded-full text-xl group/menu relative">
                    {isDark ? <BsFillSunFill /> : <BsMoonStarsFill />}
                </button>
                <button
                    className="p-3 rounded-full text-xl group/menu relative">
                    <Image
                        width={300}
                        height={300}
                        className="w-[40px] aspect-square rounded-full"
                        src="https://i.pravatar.cc/300"
                        alt="Shariar Hasan" />
                    <ul className="absolute top-full right-0 bg-front border rounded-lg group-focus-within/menu:visible group-focus-within/menu:opacity-100 invisible duration-200 opacity-0 p-2">
                        {
                            avaterMenu?.map(({ func, title, icon }, i) => <li
                                key={i}
                                onClick={func}
                                className="text-sm md:text-base font-semibold md:tracking-wide hover:text-gray-400 px-8 py-2 my-1 rounded-lg  hover:bg-back duration-200 flex items-center gap-x-2">
                                {icon}{title}
                            </li>)
                        }
                    </ul>
                </button>
            </div>
        </div>
    )
}

export default DashboardHeader 