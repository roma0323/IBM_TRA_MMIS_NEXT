"use client";
import React, { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

import TrainListTable from "@/components/locomotive_depot/TrainListTable";
import BoardTitleSection from "@/components/BoardTitleSection";

import DataSection from "@/components/train_deployment/detail_page/DataSection";
import TrainCategorySection from "@/components/train_deployment/detail_page/TrainCategorySection";
import MaintenanceDetailSection from "@/components/locomotive_depot/MaintenanceDetailSection";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";

import { getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname } from "@/api/api";
import { getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam } from "@/api/api";
import { getSumStatusListEq3Param } from "@/api/api";
import { FetcheGetSumStatusListData } from "@/types/type"; // Update the import path as needed

const DetailClientPage: React.FC<FetcheGetSumStatusListData> = ({ Data }) => {
  const [selectedTrainName, setSelectedTrainName] = useState("");
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]);
  const [filteredTrainData, setFilteredTrainData] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";
  const cntSum = Data.reduce((acc, item) => acc + item.current_cnt, 0);
  const readySum = Data.reduce((acc, item) => acc + item.current_ready, 0);
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  const handleTrainTypeClick = async (trainName: string) => {
    if (!slideNavRef.current?.canMoveLeft) {
      slideNavRef.current?.handleMouseEnter("right");
    }
    setSelectedTrainName(trainName);
    let fetchedData;
    if (Data[0].carcatalog === "客車") {
      fetchedData = await getSumStatusListEq3Param(trainName, date);
    } else {
      fetchedData =
        await getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname(
          Data[0].carcatalog,
          trainName,
          date
        );
    }
    setFilteredTrainData(fetchedData.data);
  };

  const handleTrainClick = async (
    dept: string,
    cartype: string,
    divData: string
  ) => {
    slideNavRef.current?.handleMouseEnter("right");

    const data =
      await getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam(
        dept,
        cartype,
        divData,
        date
      );
    setMaintenanceData(data);
  };

  return (
    <div className=" h-full   overflow-hidden">
      <SlideNavigationContainer
        ref={slideNavRef}
        totalSlides={5}
        visibleSlides={3}
        slideWidthPercentage={26}
      >
        {/* first Div */}
        <div className="min-w-[25%]   flex items-center justify-center">
          <DataSection
            cntSum={cntSum}
            readySum={readySum}
            carcatalog={Data[0].carcatalog}
          />
        </div>

        {/* second Div */}
        <div className="min-w-[25%] overflow-hidden relative">
          <BoardTitleSection
            title={`${Data[0].carcatalog} - 車種分配資訊`}
            content={
              <TrainCategorySection
                key={Data[0].carcatalog}
                selectedTrainName={selectedTrainName}
                carcatalog={Data[0].carcatalog}
                handleTrainClick={handleTrainTypeClick} // Pass the handleTrainClick function
              />
            }
          />
        </div>

        {/* Third Div */}

        <div className="min-w-[72%]  h-full  relative ">
          <BoardTitleSection
            title={`${Data[0].carcatalog} - ${selectedTrainName}`} //${selectedArea} - ${selectedLabel}
            content={
              <>
                <TrainListTable
                  TrainDataInArray={filteredTrainData}
                  handleTrainClick={handleTrainClick}
                />
              </>
            }
          />
        </div>

        {/* fourth Div */}
        <MaintenanceDetailSection maintenanceData={maintenanceData} />
      </SlideNavigationContainer>
    </div>
  );
};

export default DetailClientPage;
