import React from 'react';
import TrainByDepotCard from "@/components/train_deployment/detail_page/TrainByDepotCard";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the Section component

type DepotSectionProps = {
  title: string;
  selectedTrainName: string;
  isDetailVisible: boolean;
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
        <TrainByDepotCard
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
