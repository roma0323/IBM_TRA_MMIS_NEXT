"use client";

import React, { useState, useRef, useEffect } from "react";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";
import BoardTitleSection from "../BoardTitleSection";
import { getAllCarSpecInfoByCarType } from "@/api/api";

import TrainCategorySection from "@/components/car_type_spec/TrainCategorySection";
import CarUseStatusTable from "@/components/car_type_spec/CarUseStatusTable";
import CarInfoSection from "@/components/car_type_spec/CarBasicInfoSection"; // Import the new component
import CarSetTable from "@/components/car_type_spec/CarSetTable"; // Import the new component
import CarMaintenanceTable from "@/components/car_type_spec/CarMaintenanceTable"; // Import the new component


type Props = {
  all_car_type: { cartype: string; kpi_oprtype: string; cardesc: string }[]; // Add all_car_type prop
};

const ClientPage: React.FC<Props> = ({  all_car_type }) => {
  const [selectTrain, setSelectTrain] = useState<string>("");
  const [allCarSpecInfo, setAllCarSpecInfo] = useState<any>(null);
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  useEffect(() => {
    const fetchCarSpecInfo = async () => {
      const carSpecInfo = await getAllCarSpecInfoByCarType(selectTrain);
      setAllCarSpecInfo(carSpecInfo);
    };

    fetchCarSpecInfo();
  }, [selectTrain]);

  return (
    <div className="h-full overflow-hidden">
      <SlideNavigationContainer
        ref={slideNavRef}
        totalSlides={3}
        visibleSlides={2}
        slideWidthPercentage={22}
      >
        {/* First Div */}
        <TrainCategorySection
          setSelectTrain={(train) => {
            setSelectTrain(train);
            slideNavRef.current?.handleMouseEnter("right");
          }}
          all_car_type={all_car_type} // Pass all_car_type to TrainSection
        />
        {/* Second Div */}
        <div className="min-w-[40%] flex items-center justify-center">
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
        </div>
        {/* Third Div */}
        <div className="min-w-[58%] flex items-center justify-center">
          <div className="size-full grid grid-rows-5 gap-4 relative">
            <div className="row-span-2">
              <BoardTitleSection
                title={`車組`}
                content={
                  <div className=" size-full">
                    {allCarSpecInfo && (
                      <CarSetTable
                        carTypeChildrenList={allCarSpecInfo.cartypechildrenlist}
                      />
                    )}
                  </div>
                }
              />
            </div>
            <div className="row-span-3">
              <BoardTitleSection
                title={`使用狀態`}
                content={
                  <div className=" size-full">
                    {allCarSpecInfo && (
                      <CarUseStatusTable
                        carChildren={allCarSpecInfo.carchildren}
                      />
                    )}
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
