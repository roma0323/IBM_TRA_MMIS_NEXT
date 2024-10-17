import React from "react";
import { RowByTrain } from "@/components/locomotive_depot/RowByTrain";
import { FetcheGetSumStatusListDataInArray } from "@/types/type";

interface TrainOverviewSectionProps {
  filteredTrainData: FetcheGetSumStatusListDataInArray[];
  handleTrainClick: (dept: string, cartype: string, divData: string) => void;
}

const TrainOverviewSection: React.FC<TrainOverviewSectionProps> = ({
  filteredTrainData,
  handleTrainClick,
}) => {
  const headers = [
    "車種",
    "機務段",
    "型號",
    "配置",
    "借出",
    "借入",
    "可用",
    "定期",
    "臨時",
    "預備",
    "W OR 保養",
    "段修",
    "廠修",
    "待料 待修",
    "無火 回送",
    "停用",
    "可用率",
  ];

  return (
    <div className="flex flex-col  p-3  relative ">
      <div className="grid grid-cols-17 gap-4 bg-zinc-100 border-b-2 border-gray-200 rounded-lg text-left ">
        {headers.map((header, index) => (
          <div key={index} className="m-2 flex items-center justify-center">
            {header}
          </div>
        ))}
      </div>
      <div>
        {
          filteredTrainData.map((train, index) => (
            <RowByTrain
              key={index}
              trainData={train}
              onDivClick={handleTrainClick} // Pass the click handler
            />
          ))}
      </div>
    </div>
  );
};

export default TrainOverviewSection;
