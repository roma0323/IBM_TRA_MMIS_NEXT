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
        slideWidthPercentage={36}
      >
        <div className="min-w-[35%] flex items-center justify-center">
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

        <div className="min-w-[63%] flex items-center justify-center">
          <BoardTitleSection
            title={`${selectFactory}-檢修走勢`}
            content={
              <div className="size-full">
                {refactorChartData.map(
                  (chartData, index) =>
                    activeCardIndex === index && (
                      <div
                        key={index}
                        className=" size-full flex flex-col py-8 items-center justify-between"
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

        <div className="min-w-[35%] flex items-center justify-center ">
          <BoardTitleSection
            title={`${selectFactory}-該月檢修清單`}
            content={
              <div className="flex flex-col size-full">
                {data.listData.data.map((attr: factorySumStatus, index:number) =>
                  selectFactory === "全部機廠" ||
                  attr.deptdesc.includes(selectFactory) ? (
                    <div
                      key={index}
                      className="p-4 mx-3 m-3  bg-[#3034380d] rounded-xl  border-l-4"
                    >
                      {attr.deptdesc} - {attr.assetnum}
                      <div className="flex flex-col py-2 self-stretch">
                        <div className="w-full pt-1 px-6 flex  justify-between">
                          <p>進場收容單號:</p>
                          <p>{attr.imnum}</p>
                        </div>
                        <div className="w-full pt-1 px-6 flex  justify-between">
                          <p>工作單號:</p>
                          <p>{attr.wojp3}</p>
                        </div>
                        <div className="w-full pt-1 px-6 flex  justify-between">
                          <p>車輛數:</p>
                          <p>{attr.childcarcnt}</p>
                        </div>
                        <div className="w-full pt-1 px-6 flex  justify-between">
                          <p>檢修級別:</p>
                          <p>{attr.worktype}</p>
                        </div>
                        <div className="w-full pt-1 px-6 flex  justify-between">
                          <p>交段日期:</p>
                          <p>{attr.facoutdate}</p>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            }
          />
        </div>
      </SlideNavigationContainer>
    </div>
  );
};

export default ClientPage;
