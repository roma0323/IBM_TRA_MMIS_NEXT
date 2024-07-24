// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

"use client";

import React, { useEffect, useState } from "react";
import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";
import ComposedChart from "@/components/factory_maintenance/ComposedChart";

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

    if (data.length < 4) {
      throw new Error("Insufficient data received from the API.");
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const transformData = (dataset: DataSet) => {
      return monthNames.map((month, index) => {
        const monthIndex = (index + 1).toString().padStart(2, '0');
        return {
          name: month,
          當月預計: dataset[`${monthIndex}_PLAN`],
          當月達成: dataset[`${monthIndex}_ACT`]
        };
      });
    };

    const transformedData = data.slice(0, 4).map(transformData);

    return transformedData;

  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
};

export default function Page() {
  const [data, setData] = useState([[], [], [], []]);

  useEffect(() => {
    fetchDataAndTransform().then(transformedData => {
      setData(transformedData);
    });
  }, []);

  return (
    <div className="grid grid-cols-7 flex-grow relative bg-neutral-100 gap-4 p-6">
      <div className="col-span-2 bg-white items-center relative rounded-lg overflow-hidden">
        <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
          城際列車 - 機務段分配
        </div>

        <TrainInFactoryCard
          // onClick={handleClick}
          totalVehicles={50}
          cumulativeAchievementRate={24}
          cumulativeRepairedVehicles={25}
          cumulativeTargetRate={64}
          annualTargetNumber={113}
        />
      </div>

      <div className="col-span-5 bg-white flex flex-col items-center relative rounded-lg">
        <div className="items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
          城際列車 - 機務段分配
        </div>
        {data.map((chartData, index) => (
          <div key={index} className="flex-grow w-full flex flex-col items-center justify-start">
            <ComposedChart data={chartData} />
          </div>
        ))}
      </div>
    </div>
  )
}