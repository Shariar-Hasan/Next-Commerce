"use client"
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed h-[100vh] w-[300px] ">

      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
