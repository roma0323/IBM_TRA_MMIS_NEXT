import React from 'react';
import MaintenanceCard from "@/components/train_deployment/detail_page/MaintenanceCard";

type DepotSectionProps = {
  title: string;
  selectedTrainName: string;
  isDetailVisible: boolean;
};

const MaintenanceSection: React.FC<DepotSectionProps> = ({ title, selectedTrainName, isDetailVisible }) => (
  <div className="h-full gap-2.5 flex-1 grow rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
    <div className="flex flex-col items-start justify-center p-2.5 w-full border-b border-[#646464]">
      {title}
    </div>
    <div className="overflow-auto flex flex-col items-start gap-2.5 px-3 py-2 relative w-full h-[67vh]">
      {isDetailVisible && <MaintenanceCard trainName={selectedTrainName} />}
    </div>
  </div>
);

export default MaintenanceSection;
