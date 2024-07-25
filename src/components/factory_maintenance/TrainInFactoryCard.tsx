import PropTypes from "prop-types";
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

      className={`w-full px-[11px] rounded-lg flex-col justify-start items-start inline-flex cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-bottom hover:border-gray-300 hover:shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}>
      <div className="self-stretch px-2.5 pb-2.5 flex-col justify-center items-start flex">
        <div className="text-[#4e4e4e] pt-6">{factoryLocation}機廠</div>
      </div>
      <div className="self-stretch px-[25px] flex-col justify-start items-start flex">
        <div
          className="self-stretch py-1 border-b border-[#646464]/20 justify-between items-center inline-flex"

        >
          <div className="text-[#4e4e4e] text-3xl">{totalVehicles}</div>
          <div className="text-[#4e4e4e]">在廠車輛</div>
        </div>
        {(isHovered || isActive) && (
          <div className="self-stretch mb-4 py-2 rounded-[5px] justify-between items-center inline-flex">
            <DataCard text={`${cumulativeAchievementRate}%`} text1="累積達成率" />
            <DataCard text={`${cumulativeRepairedVehicles}`} text1="累積修車輛數" />
            <DataCard text={`${cumulativeTargetRate}`} text1="累積目標輛數" />
            <div className="pl-3 border-l border-[#dfdfdf] flex-col justify-start items-start inline-flex">
              <DataCard text={`${annualTargetNumber}`} text1="年度目標量數" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

TrainInFactoryCard.propTypes = {
  factoryLocation: PropTypes.string.isRequired,
  totalVehicles: PropTypes.number.isRequired,
  cumulativeAchievementRate: PropTypes.number.isRequired,
  cumulativeRepairedVehicles: PropTypes.number.isRequired,
  cumulativeTargetRate: PropTypes.number.isRequired,
  annualTargetNumber: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TrainInFactoryCard;
