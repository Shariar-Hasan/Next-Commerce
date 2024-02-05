"use client";

import DashboardHeader from "@/components/layers/DasboardHeader";
import Sidebar from "@/components/layers/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex">
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
    </div>
  );
};

export default DashboardLayout;
