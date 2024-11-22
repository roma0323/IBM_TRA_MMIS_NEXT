import React from "react";
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
export const BigOverviewCard = ({
  Name = "Unknown Train",
  Data = DEFAULT_TRAIN_DATA,
}: {
  Name?: string;
  Data?: FetcheGetSumStatusListDataInArray;
}): JSX.Element => {
  return (
    <div className=" relative size-full  bg-white flex flex-col rounded-lg  ">
      <BoardTitleSection
        title={`${Name}`}
        content={
          <div className="size-full flex  py-6  px-10">
            <div className="flex-col flex  justify-around w-1/4  ">
              <div>

                <div className="text-xl">{(Data.current_ready+Data.current_temp+Data.current_use).toString()}</div>
                <div>可用數</div>
              </div>
              <div>
                <div className="text-xl">{Data.current_cnt}</div>
                <div> 總輛數</div>
              </div>
              <div>
                <div className="text-xl">
                  {`${Math.round(
                    (Data.current_ready / Data.current_cnt) * 100
                  ).toString()}%`}
                </div>
                <div> 可用率</div>
              </div>
            </div>

            <div className="w-3/4">
              近30日使用率
              <UseRateAreaChart styleTemplate={Name} />
            </div>
          </div>
        }
      />
    </div>
  );
};
