
import { LabelChip } from "@/components/locomotive_depot/LabelChip";
import { factorySumStatus } from "@/types/type";
import React from "react";

interface TrainData {
  trainData: factorySumStatus;
}


const CannotClickClassName = "my-1  flex items-center justify-center  ";

export const FactoryRowByTrain = ({ trainData }: TrainData): JSX.Element => {
  return (
    <div className="grid grid-cols-20 gap-2 text-wrap w-full border-b-2 border-gray-200 ">
      {/* FIXME: sort by shadcn ui */}
      <div className=" flex items-center justify-center">
        <LabelChip text={trainData.carcatalog} />
      </div>
      <div className=" flex items-center justify-center">
        <LabelChip text={trainData.deptdesc} />
      </div>
      <div className={`${CannotClickClassName} col-span-2`}>
        {trainData.cartype}
      </div>
      <div className={`${CannotClickClassName} col-span-2`}>
        {trainData.assetnum}
      </div>
      <div className={CannotClickClassName}>{trainData.worktype}</div>
      <div className={`${CannotClickClassName} col-span-2`}>
        {trainData.facindate}
      </div>
      <div className={`${CannotClickClassName} col-span-2`}>
        {trainData.actstart}
      </div>
      <div className={`${CannotClickClassName} col-span-2`}>
        {trainData.schedfinish}
      </div>
      <div className={`${CannotClickClassName} col-span-2`}>
        {trainData.actfinish}
      </div>
      <div className={`${CannotClickClassName} col-span-2`}>
        {trainData.facoutdate}
      </div>
      <div className={CannotClickClassName}>{trainData.infacdays}</div>
      <div className={CannotClickClassName}>{trainData.inwodays}</div>
      <div className={CannotClickClassName}>{trainData.behindordelaydays}</div>
    </div>
  );
};

export default FactoryRowByTrain;
