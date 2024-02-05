"use client"
import React, { useState } from 'react'
import { PiSignOutFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { companyInfo, dashboardRoutes, navRoutes } from '@/utils/contants';
import Image from 'next/image';
import DashboardNavSection from './DashboardNavSection';
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div
            className={`h-screen  ${isSidebarOpen ? "max-w-[100vw] sm:max-w-[300px]" : "max-w-0"} top-0 left-0 bg-front md:sticky fixed duration-300 overflow-hidden  z-[9988] transition-all shadow-lg `}>
            <div className="flex flex-col h-full  w-[100vw] sm:w-[300px]">
                {/* Top section */}
                <div className="py-4 px-2 flex justify-between ">
                    <Image width={100} height={100} src={companyInfo?.logo.src} alt={companyInfo?.name} className="max-w-[50px] w-full" />
                    <button
                        onClick={() => setIsSidebarOpen(false)}>
                        <IoMdClose className="text-2xl" />
                    </button>
                </div>
                {/* nav bar section */}
                <div className="flex-1 bg-front overflow-y-auto border-t border-b border-opacity-50 border-gray-300 px-3 py-1">
                    <DashboardNavSection
                        topic="Site Navigation"
                        routeList={navRoutes.filter(({ isDashboardRoute }) => isDashboardRoute)}
                        prefixSlash="/"
                    />
                    <DashboardNavSection
                        topic="Dashboard Navigation"
                        routeList={dashboardRoutes}
                    />

                </div>
                {/* Sidenav footer */}

                <div className="text-xs py-3 px-2 text-center tracking-wider flex items-center justify-between">
                    <div className="flex items-center">
                        <Image
                            width={100} height={100}
                            className="w-[35px] aspect-square rounded-full"
                            src={"https://i.pravatar.cc/300"}
                            alt={"My Profile Photo"}
                        />
                        <div className="flex flex-col justify-start items-start pl-2 pr-3 overflow-hidden">
                            <span className="text-xs">
                                {"Shariar Hasan"}
                            </span>
                            <span className="text-[10px]">
                                {"shahriar.hasan.1523@gmail.com"}
                            </span>
                        </div>
                    </div>
                    <button
                        className="px-3 hover:text-primary duration-200"
                        onClick={() => { }}
                    >
                        <PiSignOutFill className="text-2xl" />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Sidebar