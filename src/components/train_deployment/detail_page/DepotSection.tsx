import React from 'react';
import DetailTrainByDepot from "@/components/train_deployment/detail_page/DetailTrainByDepot";

type DepotSectionProps = {
  title: string;
  selectedTrainName: string;
  isDetailVisible: boolean;
  handleItemClick: (itemName: string) => void;  // Add prop for handling item clicks
};

const DepotSection: React.FC<DepotSectionProps> = ({ title, selectedTrainName, isDetailVisible, handleItemClick }) => (
  <div className="h-full gap-2.5 flex-1 grow rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
    <div className="flex flex-col items-start justify-center p-2.5 w-full border-b border-[#646464]">
      {title}
    </div>
    <div className="overflow-auto flex flex-col items-start gap-2.5 px-3 py-2 relative w-full h-[67vh]">
      {isDetailVisible && <DetailTrainByDepot trainName={selectedTrainName} onItemClick={handleItemClick} />}
    </div>
  </div>
);

export default DepotSection;
