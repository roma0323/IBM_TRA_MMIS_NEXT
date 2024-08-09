// RowByTrain.tsx

import { LabelChip } from "@/components/locomotive_depot/LabelChip";
import React from "react";

interface TrainDataInArray { className?: string; dept: string; deptdesc: string; cartype: string; carcatalog: string; belongto: number; borrowin: number; borrowout: number; current_cnt: number; current_use: number; current_temp: number; current_ready: number; maintain_w: number; maintain_sec: number; maintain_fac: number; oth_waitrep: number; oth_return: number; oth_stop: number; availability: number; }
interface TrainData {
  trainData: TrainDataInArray;
  onDivClick: (dept: string, cartype: string, divName: string) => void; // Update callback prop
}
const numberBoxClassName="m-1 flex items-center justify-center cursor-pointer rounded-2xl hover:text-primary hover:shadow-md hover:shadow-primary/30 hover:scale-110"

export const RowByTrain = ({
  trainData,
  onDivClick,
}: TrainData): JSX.Element => {
  const handleDivClick = (divName: string) => {
    onDivClick(trainData.dept, trainData.cartype, divName);
  };

  return (
    <div className="grid grid-cols-17 gap-4   w-full border-b-2 border-gray-200 text-left ">
      <div className="m-2 flex items-center justify-center ">
        <LabelChip
          text={trainData.carcatalog}
          property1="default"
        />
      </div>
      <div className="my-1 flex items-center justify-center ">{trainData.deptdesc}</div>
      <div className="my-1 flex items-center justify-center ">{trainData.cartype}</div>
      <div className={numberBoxClassName}>{trainData.belongto}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("borrowout")}>{trainData.borrowout}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("current_temp")}>{trainData.current_temp}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("current_cnt")}>{trainData.current_cnt}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("current_use")}>{trainData.current_use}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("current_temp")}>{trainData.current_temp}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("current_ready")}>{trainData.current_ready}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("maintain_w")}>{trainData.maintain_w}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("maintain_sec")}>{trainData.maintain_sec}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("maintain_fac")}>{trainData.maintain_fac}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("oth_waitrep")}>{trainData.oth_waitrep}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("oth_return")}>{trainData.oth_return}</div>
      <div className={numberBoxClassName} onClick={() => handleDivClick("oth_stop")}>{trainData.oth_stop}</div>
      <div className={numberBoxClassName}>
        {Number(trainData.availability.toFixed(2))}
      </div>
    </div>
  );
};

export default RowByTrain;
