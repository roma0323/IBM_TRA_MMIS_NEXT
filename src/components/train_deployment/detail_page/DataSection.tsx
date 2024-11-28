import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";
import BigPieChart from "@/components/train_deployment/detail_page/BigPieChart";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the Section component
import {PiechartData} from "@/types/type"

const DataSection = ({
  cntSum = 0,
  readySum = 0,
  carcatalog = "Unknown",
  PieChartData=[]
}: {
  cntSum?: number;
  readySum?: number;
  carcatalog?: string;
  PieChartData?:PiechartData[];
}) => (
  <div className="size-full grid grid-rows-4  gap-4 relative ">
    <BoardTitleSection
      title={`分配資訊`}
      content={
        <div className="size-full flex relative justify-around items-center ">
          <DataCard text={readySum.toString()} text1="可用數" />
          <DataCard text={cntSum.toString()} text1="總輛數" />
          <DataCard
            text={`${Math.round((readySum / cntSum) * 100)}%`}
            text1="可用率"
          />
        </div>
      }
    />

    <BoardTitleSection
      title={`30 天使用率`}
      content={
        <div className="size-full flex relative justify-end items-center px-3">
          <UseRateAreaChart styleTemplate={carcatalog} />
        </div>
      }
    />

    <div className="row-span-2">
      <BoardTitleSection
        title={`城際列車 - 車種配置`}
        content={
          <div className="h-full relative w-full flex items-start justify-start">
            <BigPieChart styleTemplate={carcatalog} PieChartData={PieChartData}/>
          </div>
        }
      />
    </div>
  </div>
);

export default DataSection;
