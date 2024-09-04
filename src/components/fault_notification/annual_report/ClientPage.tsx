"use client";

import React, { useState } from "react";
import { ReportLevelCard } from "@/components/fault_notification/annual_report/ReportLevelCard";
import BoardTitleSection from "@/components/BoardTitleSection";

import { FailListItem, ReportLevelCardDataType } from "@/types/type";

const ClientPage: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
  const [selectFactory, setSelectFactory] = useState<string>("A");
  const FakegetSumFailYearTypeAData = [
    {
        "year": "2024",
        "month": "01",
        "kpicartype": "電力機車",
        "atp": "0",
        "duty": "0",
        "dutydept": "",
        "failtype": "A"
    },
    {
        "year": "2024",
        "month": "01",
        "kpicartype": "通勤列車",
        "atp": "0",
        "duty": "0",
        "dutydept": "",
        "failtype": "A"
    },
  ];

  return (
    <div className="relative flex justify-between p-6 gap-6 h-full">
      <div className="min-w-[600px] flex items-center justify-center">
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
      <div className="grow flex items-center justify-center">
        <BoardTitleSection
          title={`${selectFactory}級`}
          content={<div className="p-6"></div>}
        />
      </div>
    </div>
  );
};

export default ClientPage;
