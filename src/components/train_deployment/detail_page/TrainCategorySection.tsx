import React, { useState, useEffect } from "react";
import TrainCategorySectionCard from "@/components/train_deployment/detail_page/TrainCategorySectionCard";
import BoardTitleSection from "@/components/BoardTitleSection";
import { getCarTypeListAndCarcatalogEqualParam } from "@/api/api";

type TrainCategorySectionProps = {
  initialData: any[];
  selectedTrainName: string;
  handleTrainClick: (trainName: string) => void;
  carcatalog: string; // Add the carcatalog prop
};

const TrainCategorySection: React.FC<TrainCategorySectionProps> = ({
  initialData,
  selectedTrainName,
  handleTrainClick,
  carcatalog,
}) => {
  const [trainData, setTrainData] = useState<
    { trainName: string; trainCount: number }[]
  >([]);
  ///////////////////////////Have to be fix after backend refactor///////////////////////

  useEffect(() => {
    const fetchTrainData = async () => {
      const fetchedData = await getCarTypeListAndCarcatalogEqualParam(
        carcatalog
      );
      const dynamicTrainData = fetchedData.map(
        (item: { kpi_oprtype: string; cardesc: string }) => ({
          trainName: item.cardesc,
          trainCount: null,
        })
      );
      setTrainData(dynamicTrainData);
    };
    fetchTrainData();
  }, [carcatalog]);
  ///////////////////////////Have to be fix after backend refactor///////////////////////

  return (
    <div className="size-full relative">
      

      <BoardTitleSection
        title={`${initialData[0].carcatalog} - 車種分配資訊`}
        content={
          <div className="flex flex-col items-start gap-2.5 px-3 py-2 relative w-full">
            {trainData.map((train, index) => (
              <TrainCategorySectionCard
                key={index}
                trainName={train.trainName}
                trainCount={train.trainCount}
                onClick={() => handleTrainClick(train.trainName)}
                isActive={selectedTrainName === train.trainName}
                carcatalog={carcatalog}
              />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default TrainCategorySection;
