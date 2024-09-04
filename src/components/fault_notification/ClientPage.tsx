"use client";

import React, { useState, useRef } from "react";
import { ReportLevelCard } from "@/components/fault_notification/ReportLevelCard";
import ComposedChartMonthly from "@/components/factory_maintenance/ComposedChartMonthly";
import ComposedChartAccmulate from "@/components/factory_maintenance/ComposedChartAccmulate";
import { FailListItem } from "@/types/type";
import { ReportLevelCardDataType } from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection";


type Props = {
  fail_list: FailListItem[];
  ReportLevelCardData: ReportLevelCardDataType[]; // Add the 'ReportLevelCardData' property here
};

const ClientPage: React.FC<Props> = ({ fail_list, ReportLevelCardData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [selectFactory, setSelectFactory] = useState<string>("");

  return (
    <div className="relative flex gap-6 p-6 h-full  ">

        <div className="min-w-[35%] flex items-center justify-center">
          <BoardTitleSection
            title={`故障通報分級`}
            content={
              <div className="flex flex-col mx-4">
                {ReportLevelCardData.map((CardDataByLevel, index) => (
                  <ReportLevelCard
                    key={index}
                    CardDataByLevel={CardDataByLevel}
                    isActive={activeCardIndex === index}
                    onToggle={() => {
                      setActiveCardIndex(
                        activeCardIndex === index ? null : index
                      );
                      setSelectFactory(CardDataByLevel.fail_lvl + "等級");
                    }}
                  />
                ))}
              </div>
            }
          />
        </div>

        <div className="min-w-[63%] flex items-center justify-center">
          <BoardTitleSection
            title={`${selectFactory}-檢修走勢`}
            content={
              <div className="size-full">
                {/* {Data.map(
                  (chartData, index) =>
                    activeCardIndex === index && (
                      <div
                        key={index}
                        className=" size-full flex flex-col py-8 items-center justify-between"
                      >
                        <div className="flex justify-center items-center w-full">
                          <ComposedChartMonthly data={chartData.monthData} />
                        </div>
                        <div className="flex justify-center items-center w-full">
                          <ComposedChartAccmulate data={chartData.monthData} />
                        </div>
                      </div>
                    )
                )} */}
              </div>
            }
          />
        </div>

       
    </div>
  );
};

export default ClientPage;
