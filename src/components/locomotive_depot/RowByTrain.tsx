// RowByTrain.tsx

import { LabelChip } from "@/components/locomotive_depot/LabelChip";
import React from "react";

interface TrainDataInArray { className?: string; dept: string; deptdesc: string; cartype: string; carcatalog: string; belongto: number; borrowin: number; borrowout: number; current_cnt: number; current_use: number; current_temp: number; current_ready: number; maintain_w: number; maintain_sec: number; maintain_fac: number; oth_waitrep: number; oth_return: number; oth_stop: number; availability: number; }
interface TrainData {
  trainData: TrainDataInArray;
  onDivClick: (dept: string, cartype: string, divName: string) => void; // Update callback prop
}

export const RowByTrain = ({
  trainData,
  onDivClick,
}: TrainData): JSX.Element => {
  const handleDivClick = (divName: string) => {
    onDivClick(trainData.dept, trainData.cartype, divName);
  };

  return (
    <div className="grid grid-cols-16 gap-4 w-full border-b-2 border-gray-200 text-left cursor-pointer">
      <div className="p-2 flex items-end">
        <LabelChip
          text={trainData.carcatalog}
          className={`bg-[#fffffff2] ${trainData.className}`}
          property1="default"
        />
      </div>
      <div className="py-2 flex items-end">{trainData.cartype}</div>
      <div className="p-2 flex items-end">{trainData.belongto}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("borrowout")}>{trainData.borrowout}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("current_temp")}>{trainData.current_temp}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("current_cnt")}>{trainData.current_cnt}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("current_use")}>{trainData.current_use}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("current_temp")}>{trainData.current_temp}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("current_ready")}>{trainData.current_ready}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("maintain_w")}>{trainData.maintain_w}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("maintain_sec")}>{trainData.maintain_sec}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("maintain_fac")}>{trainData.maintain_fac}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("oth_waitrep")}>{trainData.oth_waitrep}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("oth_return")}>{trainData.oth_return}</div>
      <div className="p-2 flex items-end" onClick={() => handleDivClick("oth_stop")}>{trainData.oth_stop}</div>
      <div className="p-2 flex items-end">
        {Number(trainData.availability.toFixed(2))}
      </div>
    </div>
  );
};

export default RowByTrain;
