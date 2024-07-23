import PropTypes from "prop-types";
import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";

interface Props {
  onClick: (text: string) => void; // Add onClick prop
  totalVehicles: number;
  cumulativeAchievementRate: number;
  cumulativeRepairedVehicles: number;
  cumulativeTargetRate: number;
  annualTargetNumber: number;
}

export const TrainInFactoryCard = ({ 
  onClick,
  totalVehicles,
  cumulativeAchievementRate,
  cumulativeRepairedVehicles,
  cumulativeTargetRate,
  annualTargetNumber 
}: Props): JSX.Element => {
  return (
    <div className="w-full  px-[11px] pb-8  rounded-lg flex-col justify-start items-start inline-flex">
      <div className="self-stretch  px-2.5 pb-2.5 flex-col justify-center items-start flex">
        <div className="text-[#4e4e4e] pt-6 ">花蓮機廠在廠車輛（總）</div>
      </div>
      <div className="self-stretch h-24 px-[25px] flex-col justify-start items-start flex">
        <div className="self-stretch py-1 border-b border-[#646464]/20 justify-between items-center inline-flex">
          <div className="text-[#4e4e4e]">在廠車輛</div>
          <div className="text-[#4e4e4e] text-3xl">{totalVehicles}</div>

        </div>
        <div className="self-stretch py-2 rounded-[5px] justify-between items-center inline-flex">
          <DataCard text={`${cumulativeAchievementRate}%`} text1="累積達成率" />
          <DataCard text={`${cumulativeRepairedVehicles}`} text1="累積修車輛數" />
          <DataCard text={`${cumulativeTargetRate}`}  text1="累積目標輛數" />
          <div className="pl-3 border-l border-[#dfdfdf] flex-col justify-start items-start inline-flex">
            <DataCard text={`${annualTargetNumber}`} text1="年度目標量數" />
          </div>
        </div>
      </div>
    </div>
  );
};

TrainInFactoryCard.propTypes = {
  onClick: PropTypes.func.isRequired, // Define prop type for onClick
  totalVehicles: PropTypes.number.isRequired,
  cumulativeAchievementRate: PropTypes.number.isRequired,
  cumulativeRepairedVehicles: PropTypes.number.isRequired,
  cumulativeTargetRate: PropTypes.number.isRequired,
  annualTargetNumber: PropTypes.number.isRequired,
};

export default TrainInFactoryCard;