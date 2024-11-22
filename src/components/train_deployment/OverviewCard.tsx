import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";
import { FetcheGetSumStatusListDataInArray } from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection";

const DEFAULT_TRAIN_DATA: FetcheGetSumStatusListDataInArray = {
  carcatalog: "Unknown",
  current_ready: 0,
  current_cnt: 0,
  index: 0,
  dept: "total",
  deptdesc: "total",
  cartype: "total",
  belongto: 0.0,
  borrowin: 0.0,
  borrowout: 0.0,
  current_use: 0.0,
  current_temp: 0.0,
  maintain_w: 0.0,
  maintain_sec: 0.0,
  maintain_fac: 0.0,
  oth_waitrep: 0.0,
  oth_return: 0.0,
  oth_stop: 0.0,
  availability: 1.0,
};

export const OverviewCard = ({
  Name = "Unknown Train",
  Data = DEFAULT_TRAIN_DATA,
  chartData = [],
}: {
  Name?: string;
  Data?: FetcheGetSumStatusListDataInArray;
  chartData?: Array<{ name: string; RATION: number }>;
}): JSX.Element => {
  return (
    <div className="rounded-lg hover:shadow-lg size-full">
      <BoardTitleSection
        title={`${Name}`}
        content={
          <div className="size-full flex flex-col justify-around " >
            <div className="flex justify-around w-full py-2 ">
              <DataCard text={Data.current_cnt.toString()} text1="總輛數" />
              <DataCard text={(Data.current_ready+Data.current_temp+Data.current_use).toString()} text1="可用數" />
              <DataCard
                text={`${Math.round(
                  ((Data.current_ready+Data.current_temp+Data.current_use) / Data.current_cnt) * 100
                ).toString()}%`}
                text1="可用率"
              />
            </div>
            <div className="w-full h-32">
              <UseRateAreaChart styleTemplate={Name} chartData={chartData} />
            </div>
          </div>
        }
      />
    </div>
  );
};