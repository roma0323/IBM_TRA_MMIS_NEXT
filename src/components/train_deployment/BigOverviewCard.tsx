import React from "react";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";
import { FetcheGetSumStatusListDataInArray } from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection"; // Import the Section component

export const BigOverviewCard = ({
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
    <div className=" relative size-full  bg-white flex flex-col rounded-lg  ">
      <BoardTitleSection
        title={`${Name}`}
        content={
          <div className="size-full flex  py-6  px-10">
            <div className="flex-col flex  justify-around w-1/4  ">
              <div>

                <div className="text-xl">{total.toString()}</div>
                <div>可用數</div>
              </div>
              <div>
                <div className="text-xl">{available.toString()}</div>
                <div> 總輛數</div>
              </div>
              <div>
                <div className="text-xl">
                {`${availabilityRate}%`}
                </div>
                <div> 可用率</div>
              </div>
            </div>

            <div className="w-3/4">
            <div className="text-right text-sm px-2">近30日使用率</div>
              <UseRateAreaChart styleTemplate={Name} chartData={chartData} />
            </div>
          </div>
        }
      />
    </div>
  );
};
