"use client";

import React, { useState, useRef, useEffect } from "react";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";
import BoardTitleSection from "../BoardTitleSection";
import { getAllCarSpecInfoByCarType } from "@/api/api";

import CategorySection from "@/components/operation_signal/CategorySection";
import CarUseStatusTable from "@/components/car_type_spec/CarUseStatusTable";
import CarInfoSection from "@/components/car_type_spec/CarBasicInfoSection"; // Import the new component
import CarSetTable from "@/components/car_type_spec/CarSetTable"; // Import the new component
import CarMaintenanceTable from "@/components/car_type_spec/CarMaintenanceTable"; // Import the new component

type Props = {
  all_car_type: { cartype: string; kpi_oprtype: string; cardesc: string }[]; // Add all_car_type prop
};

const ClientPage: React.FC<Props> = ({ all_car_type }) => {
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

  const groupedData = all_car_type.reduce((acc, item) => {
    if (!acc[item.cartype]) {
      acc[item.cartype] = [];
    }
    acc[item.cartype].push({ id: item.cardesc, name: item.kpi_oprtype });
    return acc;
  }, {} as Record<string, { id: string; name: string }[]>);

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
              <div className="flex flex-col mx-4 text-lg relative">
                <div className="fixed bottom-4  bg-white underline cursor-pointer hover:font-medium text-primary">
                  <a
                    href="http://192.168.36.21/maximo/webclient/common/openreport_AM108.jsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    機客貨車概況及車號表
                  </a>
                </div>

                <CategorySection
                  setSelectTrain={(id) => {
                    setSelectTrain(id);
                    slideNavRef.current?.handleMouseEnter("right");
                  }}
                  data={groupedData}
                />
              </div>
            }
          />
        </div>

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