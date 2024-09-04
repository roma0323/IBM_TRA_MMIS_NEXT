import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";

interface MonthData {
  name: string;
  當月預計: number;
  當月達成: number;
  累積預計: number;
  累積達成: number;
}

interface Factory {
  departmentName: string;
  infaccnt: number;
  monthData: MonthData[];
}

interface Props {
  factory: Factory;
  currentMonthIndex: number;
  isActive: boolean;
  onToggle: () => void;
}

export const TrainInFactoryCard: React.FC<Props> = ({
  factory,
  isActive,
  onToggle,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickedDiv, setClickedDiv] = useState<string | null>("allUnits");

  const handleDivClick = (divName: string) => {
    setClickedDiv((prev) => (prev === divName ? null : divName));
  };

  const handleOuterDivClick = () => {
    onToggle();
  };

  return (
    <div
      className={`mt-5 p-5 rounded-lg flex-col inline-flex  transform ${
        clickedDiv !== null ? "bg-slate-100" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOuterDivClick}
    >
      <div className="self-stretch items-start flex border-b border-[#646464]/20 justify-between items-center inline-flex">
        <div className="">
          <span className="text-9xl">A</span>
          <span className="ml-2 text-lg">級</span>
        </div>
        <div className="flex flex-col grow items-end">
          <div
            className={`cursor-pointer px-2 ${clickedDiv === "other" ? "bg-blue-100" : ""} hover:bg-blue-100`}
            onClick={() => handleDivClick("other")}
          >
            <span className="text-xs">其他</span>
            <span className="text-4xl pl-4">2</span>
          </div>
          <div
            className={`cursor-pointer px-2 hover:bg-blue-100 ${
              clickedDiv === "mechanical" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleDivClick("mechanical")}
          >
            <span className="text-xs">機務處</span>
            <span className="text-4xl pl-4">0</span>
          </div>
          <div
            className={`cursor-pointer px-2 hover:bg-blue-100 ${
              clickedDiv === "allUnits" ? "bg-blue-100" : ""
            }`}
            onClick={() => handleDivClick("allUnits")}
          >
            <span className="text-xs">全部單位</span>
            <span className="text-4xl pl-4">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainInFactoryCard;