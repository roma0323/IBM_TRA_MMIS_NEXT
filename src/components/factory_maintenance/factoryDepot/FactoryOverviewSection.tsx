import React from "react";
import { FactoryRowByTrain } from "@/components/factory_maintenance/factoryDepot/FactoryRowByTrain";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the Section component
import { factorySumStatus } from "@/types/type";

interface TrainOverviewSectionProps {
  filteredTrainData: factorySumStatus[];
  selectedLabel: string | null;
  selectedArea: string | null;
}

const TrainOverviewSection: React.FC<TrainOverviewSectionProps> = ({
  filteredTrainData,
  selectedLabel,
  selectedArea,
}) => {
  return (
   
          <div className="flex flex-col p-3 relative">
            <div className="grid grid-cols-20 gap-1 bg-zinc-100 border-b-2 border-gray-200 rounded-lg ">
              <div className="m-2 flex items-center justify-center ">車種</div>
              <div className="m-2 flex items-center justify-center">廠別</div>
              <div className="m-2 flex items-center justify-center col-span-2">車型</div>
              <div className="m-2 flex items-center justify-center col-span-2">車組/車號</div>
              <div className="m-2 flex items-center justify-center">檢修級別</div>
              <div className="m-2 flex items-center justify-center col-span-2">進場日期</div>
              <div className="m-2 flex items-center justify-center col-span-2">開工日期</div>
              <div className="m-2 flex items-center justify-center col-span-2">預計完工日期</div>
              <div className="m-2 flex items-center justify-center col-span-2">實際完工日期</div>
              <div className="m-2 flex items-center justify-center col-span-2">出廠日期</div>
              <div className="m-2 flex items-center justify-center">在場天數</div>
              <div className="m-2 flex items-center justify-center">施工天數</div>
              <div className="m-2 flex items-center justify-center">提前/預期天數</div>
            </div>
            <div>
              {selectedLabel &&
                filteredTrainData.map((train, index) => (
                  <FactoryRowByTrain key={index} trainData={train} />
                ))}
            </div>
          </div>
       
  );
};

export default TrainOverviewSection;