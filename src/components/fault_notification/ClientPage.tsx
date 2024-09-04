"use client";

import React, { useState, useRef } from "react";
import { TrainInFactoryCard } from "@/components/fault_notification/ReportLevelCard";
import ComposedChartMonthly from "@/components/factory_maintenance/ComposedChartMonthly";
import ComposedChartAccmulate from "@/components/factory_maintenance/ComposedChartAccmulate";
import { factoryMaintenanceOverall } from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection";


const getCurrentMonthIndex = (): number => {
  const date = new Date();
  return date.getMonth(); // January is 0, February is 1, etc.
};

interface ClientPageProps extends factoryMaintenanceOverall {
  listData: any[];
}

const ClientPage: React.FC<ClientPageProps> = ({ Data, listData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [selectFactory, setSelectFactory] = useState<string>("");
  const currentMonthIndex = getCurrentMonthIndex();

  return (
    <div className="relative flex gap-6 p-6 h-full  ">

        <div className="min-w-[35%] flex items-center justify-center">
          <BoardTitleSection
            title={`故障通報分級`}
            content={
              <div className="flex flex-col mx-4">
                {Data.map((factory, index) => (
                  <TrainInFactoryCard
                    key={index}
                    factory={factory}
                    currentMonthIndex={currentMonthIndex}
                    isActive={activeCardIndex === index}
                    onToggle={() => {
                      setActiveCardIndex(
                        activeCardIndex === index ? null : index
                      );
                      setSelectFactory(factory.departmentName + "機廠");
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
                {Data.map(
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
                )}
              </div>
            }
          />
        </div>

       
    </div>
  );
};

export default ClientPage;
