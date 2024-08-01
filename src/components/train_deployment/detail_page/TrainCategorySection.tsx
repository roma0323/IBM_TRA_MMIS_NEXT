import React from 'react';
import DeploymentByTrainCategory from "@/components/train_deployment/detail_page/DeploymentByTrainCategory";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the BoardTitleSection component

type TrainCategorySectionProps = {
  initialData: any[];
  trainData: { trainName: string, trainCount: number }[];
  selectedTrainName: string;
  isDetailVisible: boolean;
  handleTrainClick: (trainName: string) => void;
};

const TrainCategorySection: React.FC<TrainCategorySectionProps> = ({
  initialData,
  trainData,
  selectedTrainName,
  isDetailVisible,
  handleTrainClick
}) => (
  <BoardTitleSection
    title={`${initialData[0].carcatalog} - 車種分配資訊`}
    content={
      <div className="overflow-auto flex flex-col items-start gap-2.5 px-3 py-2 relative w-full">
        {trainData.map((train, index) => (
          <DeploymentByTrainCategory
            key={index}
            trainName={train.trainName}
            trainCount={train.trainCount}
            onClick={() => handleTrainClick(train.trainName)}
            isActive={selectedTrainName === train.trainName && isDetailVisible}
          />
        ))}
      </div>
    }
  />
);

export default TrainCategorySection;
