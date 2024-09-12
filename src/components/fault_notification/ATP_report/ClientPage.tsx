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
    <div className=" grid grid-rows-4 grid-flow-col gap-4 p-4  h-full">
      <div className="relative row-span-1  col-span-1   ">
        <BoardTitleSection
          title="總覽"
          content={<div className="flex justify-around "><DataCard text="100" text1="故障通報" />
                <DataCard text="100" text1="行車責任事故" /></div>}
        />
      </div>
      <div className="row-span-3  col-span-1   relative">
        <BoardTitleSection
          title="各月份故障"
          content={<div className=" "> sdac</div>}
        />
      </div>

      <div className="row-span-2 col-span-3  grid grid-cols-3   gap-4 relative "> 

        
          <BoardTitleSection
            title="故障車型分析"
            content={<div className=" "> sdac</div>}
          />
          <BoardTitleSection
            title="故障要因分析"
            content={<div className=" "> sdac</div>}
          />
          <BoardTitleSection
            title="故障設備分析"
            content={<div className=" "> sdac</div>}
          />
        
        
      </div>

      <div className="row-span-2 col-span-3  relative">
      <BoardTitleSection
            title="各月份故障清單"
            content={<div className=" "> sdac</div>}
          />
      </div>
    </div>
  );
};

export default ClientPage;
