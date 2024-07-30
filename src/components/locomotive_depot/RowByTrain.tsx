
import { LabelChip } from "@/components/locomotive_depot/LabelChip";
import React from "react";
interface trainDataInArray {
  className?: string;
  dept: string;
  deptdesc: string;
  cartype: string;
  carcatalog: string;
  belongto: number;
  borrowin: number;
  borrowout: number;
  current_cnt: number;
  current_use: number;
  current_temp: number;
  current_ready: number;
  maintain_w: number;
  maintain_sec: number;
  maintain_fac: number;
  oth_waitrep: number;
  oth_return: number;
  oth_stop: number;
  availability: number;
}

interface trainData {
  trainData: trainDataInArray;
}




export const RowByTrain = ({
  trainData
}: trainData): JSX.Element => {
  return (
    <div className="grid grid-cols-16 gap-4 w-full  border-b-2 border-gray-200  text-left">
      <div className="p-2 flex items-end"><LabelChip text={trainData.carcatalog} className={`bg-[#fffffff2] ${trainData.className}`} property1="default" /></div>
      <div className="py-2 flex items-end">{trainData.cartype}</div>
      <div className="p-2 flex items-end">{trainData.belongto}</div>
      <div className="p-2 flex items-end">{trainData.borrowin}</div>
      <div className="p-2 flex items-end">{trainData.borrowout}</div>
      <div className="p-2 flex items-end">{trainData.current_cnt}</div>
      <div className="p-2 flex items-end">{trainData.current_use}</div>
      <div className="p-2 flex items-end">{trainData.current_temp}</div>
      <div className="p-2 flex items-end">{trainData.current_ready}</div>
      <div className="p-2 flex items-end">{trainData.maintain_w}</div>
      <div className="p-2 flex items-end">{trainData.maintain_sec}</div>
      <div className="p-2 flex items-end">{trainData.maintain_fac}</div>
      <div className="p-2 flex items-end">{trainData.oth_waitrep}</div>
      <div className="p-2 flex items-end">{trainData.oth_return}</div>
      <div className="p-2 flex items-end">{trainData.oth_stop}</div>
      <div className="p-2 flex items-end">{Number(trainData.availability.toFixed(2))}</div>
    </div>
  );
};


export default RowByTrain;


