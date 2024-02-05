import DashboardLayertempalate from "@/components/layers/DashboardLayertempalate";


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-back-gradient">
      <DashboardLayertempalate>
        {children}
      </DashboardLayertempalate>
    </div>
  );
};

export default DashboardLayout;
