import React from 'react';
import MaintenanceCard from "@/components/train_deployment/detail_page/MaintenanceCard";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the Section component

type MaintenanceSectionProps = {
  title: string;
  selectedTrainName: string;
  isDetailVisible: boolean;
  selectedItem: string | null;  // Prop for selected item
};

const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({
  title,
  selectedTrainName,
  isDetailVisible,
  selectedItem
}) => (
  <BoardTitleSection
    title={title}
    content={
      isDetailVisible && selectedItem ? (
        <MaintenanceCard trainName={selectedTrainName} selectedItem={selectedItem} />
      ) : (
        <div></div> // Placeholder content if not visible
      )
    }
  />
);

export default MaintenanceSection;
