"use client";

import React, { useState, useRef } from "react";
import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";
import ComposedChartMonthly from "@/components/factory_maintenance/ComposedChartMonthly";
import ComposedChartAccmulate from "@/components/factory_maintenance/ComposedChartAccmulate";
import { factoryMaintenanceOverall } from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection";
import SlideNavigationContainer, { SlideNavigationContainerRef } from "@/components/SlideNavigationContainer";

const getCurrentMonthIndex = (): number => {
  const date = new Date();
  return date.getMonth(); // January is 0, February is 1, etc.
};

const ClientPage: React.FC<factoryMaintenanceOverall> = ({ Data }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  const currentMonthIndex = getCurrentMonthIndex();

  return (
    <div className="h-full overflow-hidden">
      <SlideNavigationContainer ref={slideNavRef} totalSlides={3} visibleSlides={2} slideWidthPercentage={36}>
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
                      slideNavRef.current?.handleMouseEnter("right");
                    }}
                  />
                ))}
              </div>
            }
          />
        </div>

        <div className="min-w-[65%] flex items-center justify-center">
          <BoardTitleSection
            title={`機廠檢修走勢`}
            content={
              <div>
                {Data.map(
                  (chartData, index) =>
                    activeCardIndex === index && (
                      <div
                        key={index}
                        className="flex-grow w-full flex flex-col my-8 items-center justify-start"
                      >
                        <ComposedChartMonthly data={chartData.monthData} />
                        <ComposedChartAccmulate data={chartData.monthData} />
                      </div>
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