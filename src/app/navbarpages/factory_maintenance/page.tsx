// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

"use client";

import React from "react";
import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";
import ComposedChart from "@/components/factory_maintenance/ComposedChart";


const data = [
  {
    name: 'Page A',
    當月預計: 590,
    當月達成: 800,
  },
  {
    name: 'Page B',
    當月預計: 868,
    當月達成: 967,
  },
  {
    name: 'Page C',
    當月預計: 1397,
    當月達成: 1098,
  },
  {
    name: 'Page D',
    當月預計: 1480,
    當月達成: 1200,
  },
  {
    name: 'Page E',
    當月預計: 1520,
    當月達成: 1108,
  },
  {
    name: 'Page F',
    當月預計: 1400,
    當月達成: 680,
  },
];

const MXY00_data = [];
const MZY00_data = [];
const WAY00_data = [];
const all_data = [];


export default function Page() {
  return (

    <div className="grid grid-cols-7  flex-grow relative bg-neutral-100  gap-4 p-6  ">


      <div className=" col-span-2 bg-white  items-center relative rounded-lg overflow-hidden">
        <div className="flex flex-col  items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
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

      <div className=" col-span-5 bg-white flex flex-col  items-center relative rounded-lg">
        <div className="  items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
          城際列車 - 機務段分配
        </div>
        <div className="flex-grow w-full flex flex-col items-center justify-start">
          <ComposedChart data={data}/>
        </div>
        <div className="flex-grow w-full flex flex-col items-center justify-start">
          <ComposedChart data={data}/>
        </div>


      </div>
    </div>

  )
}