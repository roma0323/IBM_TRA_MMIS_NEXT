"use client";

import React, { useState, useRef } from "react";
import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";
import ComposedChartMonthly from "@/components/factory_maintenance/ComposedChartMonthly";
import ComposedChartAccmulate from "@/components/factory_maintenance/ComposedChartAccmulate";
import { factoryMaintenanceOverall } from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";

const getCurrentMonthIndex = (): number => {
  const date = new Date();
  return date.getMonth(); // January is 0, February is 1, etc.
};

interface ClientPageProps extends factoryMaintenanceOverall {
  listData: any[];
}

const ClientPage: React.FC<ClientPageProps> = ({ Data, listData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);
  const [selectFactory, setSelectFactory] = useState<string>('機廠');
  const currentMonthIndex = getCurrentMonthIndex();
 
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
            title={`機廠檢修走勢`}
            content={
              <div className="size-full">
                {Data.map((chartData, index) => (
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
                ))}
              </div>
            }
          />
        </div>

        <div className="min-w-[35%] flex items-center justify-center ">
          <BoardTitleSection
            title={`當月機廠檢修清單`}
            content={
              <div className="flex flex-col size-full">
                {listData.map(
                  (attr, index) =>(
                    selectFactory === "全部機廠" || attr.deptdesc.includes(selectFactory) ? (
                      <div
                        key={index}
                        className="p-4 mx-3 m-3  bg-[#3034380d] rounded-xl  border-l-4"
                      >
                        車號 - {attr.assetnum} {attr.deptdesc} {selectFactory}
                        <div className="flex flex-col py-2 self-stretch">
                          <div className="w-full pt-1 px-6 flex  justify-between">
                            <p>進場收容單號:</p>
                            <p>{attr.imnum}</p>
                          </div>

                          <div className="w-full pt-1 px-6 flex  justify-between">
                            <p>檢修級別:</p>
                            <p>{attr.worktype}</p>
                          </div>
                          <div className="w-full pt-1 px-6 flex  justify-between">
                            <p>工作單號:</p>
                            <p>{attr.wojp3}</p>
                          </div>
                          <div className="w-full pt-1 px-6 flex  justify-between">
                            <p>交段日期:</p>
                            <p>{attr.schedfinish}</p>
                          </div>
                          <div className="w-full pt-1 px-6 flex  justify-between">
                            <p>機場:</p>
                            <p>{attr.testdate}</p>
                          </div>
                          <div className="w-full pt-1 px-6 flex  justify-between">
                            <p>車輛數:</p>
                            <p>{attr.childcarcnt}</p>
                          </div>
                        </div>
                      </div>
                      ) : null
                    )
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
