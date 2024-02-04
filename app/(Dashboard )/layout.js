import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      dashboard sidebar
      {children}
    </div>
  );
};

export default DashboardLayout;
