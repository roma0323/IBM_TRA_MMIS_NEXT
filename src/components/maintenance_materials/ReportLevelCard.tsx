import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
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
      <div className="flex items-center justify-between">
        <span className="text-5xl">{CardDataByLevel.fail_lvl}</span>

        <div
          className={`cursor-pointer px-2  rounded-lg hover:shadow-lg   ${
            isActive && clickedDiv === "allUnits"
              ? "bg-white shadow-lg   "
              : ""
          }  `}
          onClick={() => setClickedDiv("allUnits")}
        >
          <DataCard
            text={CardDataByLevel.all_fail_quantity.toString()}
            text1="全部單位"
          />
        </div>
        <div
          className={`cursor-pointer px-2  rounded-lg hover:shadow-lg    ${
            isActive && clickedDiv === "mechanical"
              ? "bg-white shadow-lg   "
              : ""
          }`}
          onClick={() => setClickedDiv("mechanical")}
        >
          <DataCard
            text={CardDataByLevel.Maintenance_fail_quantity.toString()}
            text1="機務處"
          />
        </div>
        
      </div>
    </div>
  );
};

export default ReportLevelCard;
