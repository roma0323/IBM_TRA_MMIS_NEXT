import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import { FailListItem } from "@/types/type";
import { ReportLevelCardDataType } from "@/types/type";

type Props = {
  CardDataByLevel: ReportLevelCardDataType;
  isActive: boolean;
  onToggle: () => void;
};

export const ReportLevelCard: React.FC<Props> = ({
  CardDataByLevel,
  isActive,
  onToggle,
}) => {
  const [clickedDiv, setClickedDiv] = useState<string | null>("allUnits");

  return (
    <div
      className={`mt-3 p-3 rounded-lg flex-col inline-flex  transform ${
        isActive && clickedDiv !== null ? "bg-slate-100" : ""
      }`}
      onClick={onToggle}
    >
      <div className="self-stretch items-start flex border-b pb-2 border-[#646464]/20 justify-between items-center inline-flex">
        <div className="">
          <span className="text-7xl">{CardDataByLevel.fail_lvl}</span>
          <span className="ml-2 text-lg">級</span>
        </div>
        <div className="flex flex-col grow  items-end">
          <div
            className={`cursor-pointer px-2 rounded-lg   hover:border-l-4 border-primary/20 ${
              isActive && clickedDiv === "other" ? "bg-white border-l-4 border-primary/20" : ""
            }  `}
            onClick={() => setClickedDiv("other")}
          >
            <span className="text-xs">其他</span>
            <span className="text-4xl pl-4">
              {CardDataByLevel.other_fail_quantity}
            </span>
          </div>
          <div
            className={`cursor-pointer px-2 rounded-lg   hover:border-l-4 border-primary/20 ${
              isActive && clickedDiv === "mechanical" ? "bg-white border-l-4 border-primary/20" : ""
            }`}
            onClick={() => setClickedDiv("mechanical")}
          >
            <span className="text-xs">機務處</span>
            <span className="text-4xl pl-4">
              {CardDataByLevel.Maintenance_fail_quantity}
            </span>
          </div>
          <div
            className={`cursor-pointer px-2 rounded-lg   hover:border-l-4 border-primary/20 ${
              isActive && clickedDiv === "allUnits" ? "bg-white border-l-4 border-primary/20" : ""
            }`}
            onClick={() => setClickedDiv("allUnits")}
          >
            <span className="text-xs">全部單位</span>
            <span className="text-4xl pl-4">
              {CardDataByLevel.all_fail_quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportLevelCard;
