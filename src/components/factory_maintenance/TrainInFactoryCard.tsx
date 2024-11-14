import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
interface MonthData {
  name: string;
  "當月預計": number;
  "當月達成": number;
  "累積預計": number;
  "累積達成": number;
}

interface Factory {
  departmentName: string;
  infaccnt: number;
  monthData: MonthData[];
}

interface Props {
  factory: any;
  currentMonthIndex: number;
  isActive: boolean;
  onToggle: () => void;
}

export const TrainInFactoryCard: React.FC<Props> = ({
  factory,
  currentMonthIndex,
  isActive,
  onToggle,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cumulativeAchievementRate = Math.round(
    (factory.monthData[currentMonthIndex]["累積達成"] /
      factory.monthData[currentMonthIndex]["累積預計"]) *
      100
  );

  return (
    <div
      className={`mt-5 p-5 rounded-lg flex-col inline-flex cursor-pointer transition-transform duration-300 ease-in-out transform ${
        isHovered || isActive ? "bg-secondary-background" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      <div className="self-stretch flex-col items-start flex">
        <div className="self-stretch py-1 border-b justify-between items-end inline-flex">
          <div className="text-xl">
            {factory.departmentName}機廠
            <span className="ml-2 text-xs">在廠車輛數</span>
          </div>
          <div className="flex items-end">
            <div className="ml-4 text-4xl">{factory.infaccnt}</div>
          </div>
        </div>

        {(isHovered || isActive) && (
          <div className="self-stretch py-2 justify-between items-center inline-flex">
            <DataCard
              text={`${cumulativeAchievementRate}%`}
              text1="累積達成率"
            />
            <DataCard text={`${factory.monthData[currentMonthIndex]["累積達成"]}`} text1="累積達成" />
            <DataCard text={`${factory.monthData[currentMonthIndex]["累積預計"]}`} text1="累積預計" />
            <div className="pl-2 border-l">
              <DataCard text={`${factory.monthData[factory.monthData.length - 1]["累積預計"]}`} text1="年度目標" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};