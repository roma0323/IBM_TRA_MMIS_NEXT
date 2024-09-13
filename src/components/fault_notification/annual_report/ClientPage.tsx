"use client";

import React, { useState } from "react";
import { ReportLevelCard } from "@/components/fault_notification/annual_report/ReportLevelCard";
import BoardTitleSection from "@/components/BoardTitleSection";
import GroupBarChart from "@/components/fault_notification/annual_report/GroupBarChart";
import PieChart from "@/components/fault_notification/annual_report/PieChart";
import { DataCard } from "@/components/train_deployment/DataCard";

import { FailListItem, ReportLevelCardDataType } from "@/types/type";

interface AggregatedData {
  failtype: string;
  total: number;
  duty_num: number;
  atp_num: number;
  kpicartypeCounts: { [key: string]: number }; // Added kpicartypeCounts
  monthlyData: { name: string; All: number; duty: number; ATP: number }[];
}

const ClientPage: React.FC<{ aggregatedData: AggregatedData[] }> = ({ aggregatedData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
  const [selectFactory, setSelectFactory] = useState<string>("A");

  const pieChartData = activeCardIndex !== null
    ? Object.entries(aggregatedData[activeCardIndex].kpicartypeCounts).map(([name, value]) => ({ name, value }))
    : [];

  return (
    <div className="relative flex justify-between p-6 gap-6 h-full">
      <div className="min-w-[550px] flex items-center justify-center">
        <BoardTitleSection
          title={`故障通報分級`}
          content={
            <div className="flex flex-col mx-4">
              {aggregatedData.map((CardDataByLevel, index) => (
                <ReportLevelCard
                  key={index}
                  CardDataByLevel={CardDataByLevel}
                  isActive={activeCardIndex === index}
                  onToggle={() => {
                    setActiveCardIndex(index);
                  }}
                />
              ))}
            </div>
          }
        />
      </div>
      <div className="grow flex grid grid-rows-2 gap-4 relative">
        <BoardTitleSection
          title="年度累積故障通報-依車種"
          content={
            <div className="size-full flex items-center relative">
              <div className="grid grid-cols-4 gap-4 w-3/5 h-full justify-items-center items-center">
                {activeCardIndex !== null && (
                  <>
                    {Object.entries(aggregatedData[activeCardIndex].kpicartypeCounts).map(([key, value]) => (
                      <DataCard key={key} text={value.toString()} text1={key} />
                    ))}
                  </>
                )}
              </div>
              <div className="grow h-full">
                <PieChart data={pieChartData} />
              </div>
            </div>
          }
        />

        <BoardTitleSection
          title="各月份故障通報-依車種"
          content={
            <div className="size-full">
              <GroupBarChart />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ClientPage;