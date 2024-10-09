"use client";

import React, { useState, useRef } from "react";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";
import TrainCategorySection from "@/components/car_type_spec/TrainCategorySection";
import BoardTitleSection from "../BoardTitleSection";

type Props = {
  date: string;
  fake_data: { cartype: string; kpi_oprtype: string; cardesc: string }[]; // Add fake_data prop
};

const ClientPage: React.FC<Props> = ({ date, fake_data }) => {
  const [selectTrain, setSelectTrain] = useState<string>("EMU700");
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  return (
    <div className="h-full overflow-hidden">
      <SlideNavigationContainer
        ref={slideNavRef}
        totalSlides={3}
        visibleSlides={2}
        slideWidthPercentage={21}
      >
        {/* First Div */}
        <TrainCategorySection
          setSelectTrain={setSelectTrain}
          fake_data={fake_data} // Pass fake_data to TrainSection
        />
        {/* Second Div */}
        <div className="min-w-[40%]   flex items-center justify-center">
          <div className="size-full grid grid-rows-4  gap-4 relative ">
            <div className="row-span-2">
              <BoardTitleSection
                title={`車輛基本資訊`}
                content={
                  <div className="h-full relative w-full flex items-start justify-start">
                    ds
                  </div>
                }
              />
            </div>
            <div className="row-span-2">
              <BoardTitleSection
                title={`檢修？？？`}
                content={
                  <div className="h-full relative w-full flex items-start justify-start">
                    ds
                  </div>
                }
              />
            </div>
          </div>
        </div>
        {/* Third Div */}

        <div className="min-w-[58%]   flex items-center justify-center">
          <div className="size-full grid grid-rows-4  gap-4 relative ">
            <div className="row-span-2">
              <BoardTitleSection
                title={`車輛基本資訊`}
                content={
                  <div className="h-full relative w-full flex items-start justify-start">
                    ds
                  </div>
                }
              />
            </div>
            <div className="row-span-2">
              <BoardTitleSection
                title={`檢修？？？`}
                content={
                  <div className="h-full relative w-full flex items-start justify-start">
                    ds
                  </div>
                }
              />
            </div>
          </div>
        </div>


      </SlideNavigationContainer>
    </div>
  );
};

export default ClientPage;
