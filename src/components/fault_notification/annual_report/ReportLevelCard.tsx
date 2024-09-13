import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import GroupBarChart from "@/components/fault_notification/annual_report/GroupBarChart";

type MonthlyData = {
  name: string;
  All: number;
  duty: number;
  ATP: number;
};

type Props = {
  isActive: boolean;
  onToggle: () => void;
  CardDataByLevel: {
    failtype: string;
    total: number;
    duty_num: number;
    atp_num: number;
    monthlyData: { [month: string]: { [kpicartype: string]: number } };
  };
};

export const ReportLevelCard: React.FC<Props> = ({ isActive, onToggle, CardDataByLevel }) => {
  const [clickedDiv, setClickedDiv] = useState<string | null>("allUnits");

  return (
    <div
      className={`mt-3 p-3 rounded-lg border-b border-[#646464]/20 hover:bg-slate-100 transform ${
        isActive ? "bg-slate-100" : ""
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-around">
        <span className="text-8xl">{CardDataByLevel.failtype}</span>
        <DataCard text={CardDataByLevel.total.toString()} text1="故障通報" />
        <DataCard text={CardDataByLevel.duty_num.toString()} text1="行車責任事故" />
        <DataCard text={CardDataByLevel.atp_num.toString()} text1="ATP故障" />
      </div>

      <div className="h-32 w-full">
        <GroupBarChart data={CardDataByLevel.monthlyData} />
      </div>
    </div>
  );
};

export default ReportLevelCard;