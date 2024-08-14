import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";

interface Props {
  factoryLocation: string;
  totalVehicles: number;
  cumulativeAchievementRate: number;
  cumulativeRepairedVehicles: number;
  cumulativeTargetRate: number;
  annualTargetNumber: number;
  isActive: boolean;
  onToggle: () => void;
}

export const TrainInFactoryCard = ({
  factoryLocation,
  totalVehicles,
  cumulativeAchievementRate,
  cumulativeRepairedVehicles,
  cumulativeTargetRate,
  annualTargetNumber,
  isActive,
  onToggle
}: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`mt-5 p-5 rounded-lg flex-col inline-flex cursor-pointer transition-transform duration-300 ease-in-out transform ${
        isHovered || isActive ? "bg-slate-100" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      <div className="self-stretch flex-col items-start flex">
        <div className="self-stretch py-1 border-b border-[#646464]/20 justify-between items-end inline-flex">
          <div className="text-xl">
            {factoryLocation}機廠<span className="ml-2 text-xs">在廠車輛數</span>
          </div>
          <div className="flex items-end">
            <div className="ml-4 text-4xl">{totalVehicles}</div>
          </div>
        </div>

        {(isHovered || isActive) && (
          <div className="self-stretch py-2 justify-between items-center inline-flex">
            <DataCard text={`${cumulativeAchievementRate}%`} text1="累積達成率" />
            <DataCard text={`${cumulativeRepairedVehicles}`} text1="累積達成" />
            <DataCard text={`${cumulativeTargetRate}`} text1="累積預計" />
            <div className="pl-2 border-l">
              <DataCard text={`${annualTargetNumber}`} text1="年度目標" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainInFactoryCard;
