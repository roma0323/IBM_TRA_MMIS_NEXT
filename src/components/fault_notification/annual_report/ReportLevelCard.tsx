import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import { FailListItem } from "@/types/type";
import { ReportLevelCardDataType } from "@/types/type";

type Props = {
  isActive: boolean;
  onToggle: () => void;
};

export const ReportLevelCard: React.FC<Props> = ({ isActive, onToggle }) => {
  const [clickedDiv, setClickedDiv] = useState<string | null>("allUnits");

  return (
    <div
      className={`mt-3 p-3 rounded-lg flex-col inline-flex hover:bg-slate-100 transform ${
        isActive ? "bg-slate-100" : ""
      }`}
      onClick={onToggle}
    >
      <div className="self-stretch items-start flex border-b border-[#646464]/20 justify-between items-center inline-flex">
        <div className="">
          <span className="text-8xl">A</span>
        </div>
        <div className="flex  grow justify-around ">
          <DataCard text="100" text1="故障通報" />
          <DataCard text="100" text1="行車責任事故" />
          <DataCard text="100" text1="ATP故障" />
        </div>
      </div>
    </div>
  );
};

export default ReportLevelCard;
