"use client";

import React, { useEffect, useState } from "react";
import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";
import ComposedChartMonthly from "@/components/factory_maintenance/ComposedChartMonthly";
import ComposedChartAccmulate from "@/components/factory_maintenance/ComposedChartAccmulate";

interface MonthData {
    name: string;
    '當月預計': number;
    '當月達成': number;
    '累積預計': number;
    '累積達成': number;
    '當月差距': number; // Add the missing property
    '累積差距': number; // Add the missing property

  }
  
  type YearData = MonthData[][];
  
  interface ClientPageProps {
    fetchData: YearData;
  }
const factoryData = [
  {
    factoryLocation: "潮州",
    totalVehicles: 50,
    cumulativeAchievementRate: 24,
    cumulativeRepairedVehicles: 25,
    cumulativeTargetRate: 64,
    annualTargetNumber: 113,
  },
  {
    factoryLocation: " 花蓮",
    totalVehicles: 50,
    cumulativeAchievementRate: 24,
    cumulativeRepairedVehicles: 25,
    cumulativeTargetRate: 64,
    annualTargetNumber: 113,
  },
  {
    factoryLocation: "富岡",
    totalVehicles: 50,
    cumulativeAchievementRate: 24,
    cumulativeRepairedVehicles: 25,
    cumulativeTargetRate: 64,
    annualTargetNumber: 113,
  },
  {
    factoryLocation: "全部",
    totalVehicles: 50,
    cumulativeAchievementRate: 24,
    cumulativeRepairedVehicles: 25,
    cumulativeTargetRate: 64,
    annualTargetNumber: 113,
  },
];
const ClientPage: React.FC<ClientPageProps> = ({ fetchData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-7 h-[67dvh] relative overflow-scroll flex-grow  bg-neutral-100 gap-4 p-6">
      <div className="col-span-2 bg-white items-center relative rounded-lg overflow-hidden">
        <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
          機廠檢修預覽
        </div>

        {factoryData.map((factory, index) => (
          <TrainInFactoryCard
            key={index}
            factoryLocation={factory.factoryLocation} // Note the typo fix
            totalVehicles={factory.totalVehicles}
            cumulativeAchievementRate={factory.cumulativeAchievementRate}
            cumulativeRepairedVehicles={factory.cumulativeRepairedVehicles}
            cumulativeTargetRate={factory.cumulativeTargetRate}
            annualTargetNumber={factory.annualTargetNumber}
            isActive={activeCardIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      <div className="col-span-5 bg-white flex flex-col items-center relative rounded-lg">
        <div className="items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
        機廠檢修走勢
        </div>
        {fetchData.map((chartData, index) => (
          activeCardIndex === index && (
            <div key={index} className="flex-grow w-full flex flex-col my-8 items-center justify-start">
              <ComposedChartMonthly data={chartData} />
              <ComposedChartAccmulate data={chartData} />
            </div>
          )
        ))}
      </div>
    </div>
  )
}
export default ClientPage;


