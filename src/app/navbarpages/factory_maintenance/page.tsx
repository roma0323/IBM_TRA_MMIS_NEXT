"use client";

import React, { useEffect, useState } from "react";
import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";
import ComposedChartMonthly from "@/components/factory_maintenance/ComposedChartMonthly";
import ComposedChartAccmulate from "@/components/factory_maintenance/ComposedChartAccmulate";

type DataSet = {
  [key: string]: number;
};

const fetchDataAndTransform = async () => {
  try {
    const response = await fetch('http://tra.webtw.xyz:8888/maximo/zz_data?method=getFacRepairYearPlan&year=2022', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log("Raw data:", data);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const transformData = (dataset: DataSet) => {
      return monthNames.map((month, index) => {
        const monthIndex = (index + 1).toString().padStart(2, '0');
        return {
          name: month,
          當月預計: dataset[`${monthIndex}_PLAN`],
          當月達成: dataset[`${monthIndex}_ACT`],
          累積預計: dataset[`${monthIndex}_YTD_SUM_PLAN`],
          累積達成: dataset[`${monthIndex}_YTD_SUM_ACT`]
        };
      });
    };

    const transformedData = data.slice(0, 4).map(transformData);
    console.log("transformedData data:", transformedData);

    return transformedData;

  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
};

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

export default function Page() {
  const [data, setData] = useState([[], [], [], []]);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchDataAndTransform().then(transformedData => {
      setData(transformedData);
    });
  }, []);

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
        {data.map((chartData, index) => (
          activeCardIndex === index && (
            <div key={index} className="flex-grow w-full flex flex-col my-8 items-center justify-start">
              jbbjh
              <ComposedChartMonthly data={chartData} />
              <ComposedChartAccmulate data={chartData} />
            </div>
          )
        ))}
      </div>
    </div>
  )
}
