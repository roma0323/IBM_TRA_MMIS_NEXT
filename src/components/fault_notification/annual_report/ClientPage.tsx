"use client";

import React, { useState } from "react";
import { ReportLevelCard } from "@/components/fault_notification/annual_report/ReportLevelCard";
import BoardTitleSection from "@/components/BoardTitleSection";
import GroupBarChart from "@/components/fault_notification/annual_report/GroupBarChart";
import PieChart from "@/components/fault_notification/annual_report/PieChart";
import { DataCard } from "@/components/train_deployment/DataCard";

import { FailListItem, ReportLevelCardDataType } from "@/types/type";

const ClientPage: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
  const [selectFactory, setSelectFactory] = useState<string>("A");
  const FakegetSumFailYearTypeAData = [
    {
      year: "2024",
      month: "01",
      kpicartype: "電力機車",
      atp: "0",
      duty: "0",
      dutydept: "",
      failtype: "A",
    },
    {
      year: "2024",
      month: "01",
      kpicartype: "通勤列車",
      atp: "0",
      duty: "0",
      dutydept: "",
      failtype: "A",
    },
  ];

  return (
    <div className="relative flex justify-between p-6 gap-6 h-full">
      <div className="min-w-[550px] flex items-center justify-center">
        <BoardTitleSection
          title={`故障通報分級`}
          content={
            <div className="flex flex-col mx-4">
              {FakegetSumFailYearTypeAData.map((CardDataByLevel, index) => (
                <ReportLevelCard
                  key={index}
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
      <div className="grow flex   grid grid-rows-2  gap-4 relative">
        <BoardTitleSection
          title="年度累積故障通報-依車種"
          content={
            <div className="size-full flex items-center relative">

              <div className="grid grid-cols-4 gap-4 w-3/5 h-full justify-items-center items-center">
                <DataCard text="100" text1="故障通報" />
                <DataCard text="100" text1="行車責任事故" />
                <DataCard text="100" text1="ATP故障" />
                <DataCard text="100" text1="故障通報" />
                <DataCard text="100" text1="行車責任事故" />
                <DataCard text="100" text1="ATP故障" />
                <DataCard text="100" text1="故障通報" />
                <DataCard text="100" text1="行車責任事故" />
              </div>
              <div className=" grow  h-full">
                <PieChart />
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
