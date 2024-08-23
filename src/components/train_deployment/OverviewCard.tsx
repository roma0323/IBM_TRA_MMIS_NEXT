import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";
import { FetcheGetSumStatusListDataInArray } from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the Section component

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
  Name = "Unknown Train", // Set the default value for Name
  Data = DEFAULT_TRAIN_DATA, // Set the default value for Data
}: {
  Name?: string; // Make Name optional and allow it to have a default value
  Data?: FetcheGetSumStatusListDataInArray; // Make Data optional and allow it to have a default value
}): JSX.Element => {
  return (
    <div className="">
      <BoardTitleSection
        title={`${Name}`}
        content={
          <div className="size-full flex flex-col ">
            <div className="flex w-full py-2 ">
              <DataCard text={Data.current_ready.toString()} text1="可用數" />
              <DataCard text={Data.current_cnt.toString()} text1="總輛數" />
              <DataCard
                text={`${Math.round((Data.current_ready / Data.current_cnt) * 100).toString()}%`}
                text1="可用率"
              />
            </div>
            <div className="w-full h-32 ">
              <UseRateAreaChart styleTemplate={Name} />
            </div>
          </div>
        }
      />
    </div>
  );
};
