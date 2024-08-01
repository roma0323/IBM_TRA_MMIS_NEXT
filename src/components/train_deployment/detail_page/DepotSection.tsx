import React from 'react';
import DepotSectionCard from "@/components/train_deployment/detail_page/DepotSectionCard";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the Section component

type DepotSectionProps = {
  title: string;
  selectedTrainName: string;
  isDetailVisible: boolean;
  selectedItem: string | null;  // Prop for selected item
  handleItemClick: (itemName: string) => void;  // Add prop for handling item clicks
};

const DepotSection: React.FC<DepotSectionProps> = ({
  title,
  selectedTrainName,
  isDetailVisible,
  handleItemClick
}) => (
  <BoardTitleSection
    title={title}
    content={
      isDetailVisible ? (
        <DepotSectionCard
          trainName={selectedTrainName}
          onItemClick={handleItemClick}
        />
      ) : (
        <div></div> // Placeholder when no details are visible
      )
    }
  />
);

export default DepotSection;
