import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";
import BoardTitleSection from "@/components/BoardTitleSection";

export const OverviewCard = ({
  Name = "Unknown Train",
  total = 0,
  available = 0,
  chartData = [],
}: {
  Name?: string;
  total?: number;
  available?: number;
  chartData?: Array<{ name: string; RATION: number }>;
}): JSX.Element => {
  const availabilityRate = total ? Math.round((available / total) * 100) : 0;

  return (
    <div className="rounded-lg hover:shadow-lg size-full">
      <BoardTitleSection
        title={`${Name}`}
        content={
          <div className="size-full flex flex-col justify-around">
            <div className="flex justify-around w-full py-2">
              <DataCard text={total.toString()} text1="總輛數" />
              <DataCard text={available.toString()} text1="可用數" />
              <DataCard text={`${availabilityRate}%`} text1="可用率" />
            </div>
            <div className="text-right text-sm px-2">近30日使用率</div>
            <div className="w-full h-32 pr-2 ">
              <UseRateAreaChart styleTemplate={Name} chartData={chartData} />
            </div>
          </div>
        }
      />
    </div>
  );
};