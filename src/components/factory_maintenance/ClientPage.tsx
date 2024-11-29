"use client";

import React, { useState, useRef } from "react";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import { getFacRepairListByMonth, getFacRepairYearPlan } from "@/api/api";
import { factorySumStatus } from "@/types/type";
import Loading from "@/components/Loading"
import BoardTitleSection from "@/components/BoardTitleSection";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";

import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";
import ComposedChartMonthly from "@/components/factory_maintenance/ComposedChartMonthly";
import ComposedChartAccmulate from "@/components/factory_maintenance/ComposedChartAccmulate";
import getChartData from "@/components/factory_maintenance/ChartDataRefactor";
import TrainListTable from "@/components/factory_maintenance/TrainListTable";

const getCurrentMonthIndex = (): number => {
  const date = new Date();
  return date.getMonth(); // January is 0, February is 1, etc.
};

const ClientPage: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);
  const [selectFactory, setSelectFactory] = useState<string>("");
  const currentMonthIndex = getCurrentMonthIndex();

  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";
  const fetcher = async () => {
    const [
      ChartData,
      listData,
    ] = await Promise.all([
      getFacRepairYearPlan(date),
      getFacRepairListByMonth(date)
    ]);
    return {
      ChartData,
      listData,
    };
  };
  const { data, error } = useSWR('fetchData', fetcher);
  if (error) return <p>Error loading data</p>;
  if (!data) return <p><Loading /></p>;

  const refactorChartData = getChartData(data.ChartData);
  return (
    <div className="relative h-full  ">
      <SlideNavigationContainer
        ref={slideNavRef}
        totalSlides={3}
        visibleSlides={2}
        slideWidthPercentage={49}
      >
        <div className="min-w-[49%] flex items-center justify-center">
          <BoardTitleSection
            title={`機廠檢修預覽`}
            content={
              <div className="flex flex-col mx-4">
                {refactorChartData.map((factory, index) => (
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
                      slideNavRef.current?.handleMouseEnter("right");
                    }}
                  />
                ))}
              </div>
            }
          />
        </div>

        <div className="min-w-[49%] flex items-center justify-center">
          <BoardTitleSection
            title={`${selectFactory}-檢修走勢`}
            content={
              <div className="size-full">
                {refactorChartData.map(
                  (chartData, index) =>
                    activeCardIndex === index && (
                      <div
                        key={index}
                        className=" size-full flex flex-col items-center justify-around"
                      >
                        <div className="flex justify-center items-center w-full">
                          <ComposedChartMonthly data={chartData.monthData.map(item => ({
                            ...item,
                            當月預計: Number(item.當月預計),
                            當月達成: Number(item.當月達成),
                          }))} />
                        </div>
                        <div className="flex justify-center items-center w-full">
                          <ComposedChartAccmulate data={chartData.monthData.map(item => ({
                            ...item,
                            累積預計: Number(item.累積預計),
                            累積達成: Number(item.累積達成),
                          }))} />
                        </div>
                      </div>
                    )
                )}
              </div>
            }
          />
        </div>

        <div className="min-w-[48%] flex items-center justify-center ">
          <BoardTitleSection
            title={`${selectFactory}-該月檢修清單-共${(data.listData.data).length}件`}
            content={
              <div className="flex flex-col size-full">
                <TrainListTable TrainDataInArray={data.listData.data} />
                
              </div>
            }
          />
        </div>
      </SlideNavigationContainer>
    </div>
  );
};

export default ClientPage;
