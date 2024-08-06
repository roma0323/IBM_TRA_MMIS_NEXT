import React from 'react';
import TrainCategorySectionCard from "@/components/train_deployment/detail_page/TrainCategorySectionCard";
import BoardTitleSection from "@/components/BoardTitleSection"; 

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
          <TrainCategorySectionCard
            key={index}
            trainName={train.trainName}
            trainCount={train.trainCount}
            onClick={() => handleTrainClick(train.trainName)} // Pass trainName on click
            isActive={selectedTrainName === train.trainName}
          />
        ))}
      </div>
    }
  />
);

export default TrainCategorySection;
