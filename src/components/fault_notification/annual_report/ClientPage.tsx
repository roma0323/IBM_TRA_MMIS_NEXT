"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { getSumFailYearType } from "@/api/api";

import { ReportLevelCard } from "@/components/fault_notification/annual_report/ReportLevelCard";
import Loading from "@/components/Loading"
import BoardTitleSection from "@/components/BoardTitleSection";

import GroupBarChart from "@/components/fault_notification/annual_report/GroupBarChart";
import PieChart from "@/components/fault_notification/annual_report/PieChart";
import { DataCard } from "@/components/train_deployment/DataCard";
import refactorData  from "@/components/fault_notification/annual_report/refactorData";


function MyComponent()  {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);

  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";
  const fetcher = async () => {
    const [
      getSumFailYearTypeA,
      getSumFailYearTypeB,
      getSumFailYearTypeC,
    ] = await Promise.all([
      getSumFailYearType(date, "A"),
      getSumFailYearType(date, "B"),
      getSumFailYearType(date, "C")
    ]);
    return {
      getSumFailYearTypeA,
      getSumFailYearTypeB,
      getSumFailYearTypeC,
    };
  };

  const { data, error } = useSWR('fetchData', fetcher);
  if (error) return <p>Error loading data</p>;
  if (!data) return <p><Loading /></p>;

  const getSumFailYearTypeAll = (data.getSumFailYearTypeA || [])
  .concat(data.getSumFailYearTypeB || [])
  .concat(data.getSumFailYearTypeC || []);



  const aggregatedDataA = refactorData(data.getSumFailYearTypeA, "A");
  const aggregatedDataB = refactorData(data.getSumFailYearTypeB, "B");
  const aggregatedDataC = refactorData(data.getSumFailYearTypeC, "C");
  const aggregatedDataAll = refactorData(getSumFailYearTypeAll, "All");
  
  const aggregatedData = [aggregatedDataA, aggregatedDataB, aggregatedDataC,aggregatedDataAll];
  const pieChartData =
    activeCardIndex !== null 
      ? Object.entries(aggregatedData[activeCardIndex].kpicartypeCounts).map(
          ([name, value]) => ({ name, value })
        )
      : [];

  return (
    <div className="relative flex justify-between p-6 gap-6 h-full">
      <div className="min-w-[35rem] w-[30vw] max-w-[70rem] flex items-center justify-center">
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
                    {Object.entries(
                      aggregatedData[activeCardIndex].kpicartypeCounts
                    ).map(([key, value]) => (
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
              {activeCardIndex !== null && (
                <GroupBarChart
                  data={aggregatedData[activeCardIndex].monthlyDataBykpicartype}
                />
              )}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default MyComponent;
