"use client"

import { useState } from "react";
import DashboardHeader from "./DasboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayertempalate = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <div className="flex-1">
                <DashboardHeader
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                {children}
            </div>
        </>
    )
}

export default DashboardLayertempalate