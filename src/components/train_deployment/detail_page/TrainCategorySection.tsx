import React from 'react';
import DeploymentByTrainCategory from "@/components/train_deployment/detail_page/DeploymentByTrainCategory";

type TrainCategorySectionProps = {
  initialData: any[];
  trainData: { trainName: string, trainCount: number }[];
  selectedTrainName: string;
  isDetailVisible: boolean;
  handleTrainClick: (trainName: string) => void;
};

const TrainCategorySection: React.FC<TrainCategorySectionProps> = ({ initialData, trainData, selectedTrainName, isDetailVisible, handleTrainClick }) => (
  <div className="h-full gap-2.5 flex-1 grow rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
    <div className="flex flex-col items-start justify-center p-2.5 w-full border-b border-[#646464]">
      {initialData[0].carcatalog} - 車種分配資訊
    </div>
    <div className="overflow-auto flex flex-col items-start gap-2.5 px-3 py-2 relative w-full h-[67vh]">
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
  </div>
);

export default TrainCategorySection;
