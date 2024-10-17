"use client";

import React, { useState, useRef, useEffect } from "react";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";
import BoardTitleSection from "../BoardTitleSection";
import CategorySection from "@/components/ui/accordionSection";

const infor_for_accordionitem = {
  所屬段: [
    "七堵",
    "臺北",
    "新竹",
    "彰化",
    "嘉義",
    "高雄",
    "臺東",
    "花蓮",
    "宜蘭",
  ],
  燈號: [
    "全部",
    "紅燈",
    "黃燈",
    "綠燈",
  ],
};
const ClientPage: React.FC = () => {
  const [selectTrain, setSelectTrain] = useState<string>("");
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
        <div className="min-w-[20%] flex items-center justify-center">
          <BoardTitleSection
            title="廠段分類"
            content={
              <CategorySection
                setSelectTrain={(id) => {
                  setSelectTrain(id);
                }}
                data={infor_for_accordionitem} // Pass the data here
              />
            }
          />
        </div>

        <div>{selectTrain}</div>
        {/* Second Div */}
        {/* <div className="min-w-[40%] flex items-center justify-center">
          <div className="size-full grid grid-rows-5 gap-4 relative">
            <div className="row-span-3">
              <BoardTitleSection
                title={`車輛基本資訊 - ${selectTrain}`}
                content={
                  <>
                    {allCarSpecInfo && (
                      <CarInfoSection baseinfo={allCarSpecInfo.baseinfo} />
                    )}
                  </>
                }
              />
            </div>
            <div className="row-span-2">
              <BoardTitleSection
                title={`檢修週期`}
                content={
                  <div className=" size-full">
                    {allCarSpecInfo && (
                      <CarMaintenanceTable
                        maintenanceList={allCarSpecInfo.maintainance}
                      />
                    )}
                  </div>
                }
              />
            </div>
          </div>
        </div> */}
      </SlideNavigationContainer>
    </div>
  );
};

export default ClientPage;
