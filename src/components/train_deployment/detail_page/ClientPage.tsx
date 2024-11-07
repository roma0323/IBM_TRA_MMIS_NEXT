"use client";
import React, { useState, useRef, useEffect } from "react";
import useSWR from "swr";

import BoardTitleSection from "@/components/BoardTitleSection";
import Loading from "@/components/Loading";

import DataSection from "@/components/train_deployment/detail_page/DataSection";
import TrainListTable from "@/components/locomotive_depot/TrainListTable";
import TrainCategorySection from "@/components/train_deployment/detail_page/TrainCategorySection";
import MaintenanceDetailSection from "@/components/locomotive_depot/MaintenanceDetailSection";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";

import { getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname } from "@/api/api";
import { getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam } from "@/api/api";
import { getSumStatusListEq3Param } from "@/api/api";
import { getSumStatusListAndCarcatalogEqualParam } from "@/api/api";
import { FetcheGetSumStatusListDataInArray } from "@/types/type"; // Update the import path as needed

const carcatalogMap: { [key: string]: string } = {
  intercity_train: "城際列車",
  commuter_train: "通勤列車",
  electric_locomotive: "電力機車",
  diesel_electric_locomotive: "柴電機車",
  diesel_hydraulic_locomotive: "柴液機車",
  diesel_passenger_car: "柴油客車",
  passenger_car: "客車",
  freight_car: "貨車",
};

const DetailClientPage: React.FC<{ carcatalogId: string }> = ({
  carcatalogId,
}) => {
  const [selectedTrainName, setSelectedTrainName] = useState("");
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]);
  const [filteredTrainData, setFilteredTrainData] = useState<any[]>([]);
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);
  const fetcher = async () => {
      const carcatalog = carcatalogMap[carcatalogId] || "Unknown";
      const fetchedData = await getSumStatusListAndCarcatalogEqualParam(carcatalog);
    return fetchedData.data;
  };
  const { data, error } = useSWR<FetcheGetSumStatusListDataInArray [] >("fetch trigger",fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;
  


  const cntSum = data.reduce((acc, item) => acc + item.current_cnt, 0);
  const readySum = data.reduce((acc, item) => acc + item.current_ready, 0);

  const handleTrainTypeClick = async (trainName: string) => {
    if (!slideNavRef.current?.canMoveLeft) {
      slideNavRef.current?.handleMouseEnter("right");
    }
    setSelectedTrainName(trainName);
    let fetchedData;
    if (data[0].carcatalog === "客車") {
      fetchedData = await getSumStatusListEq3Param(trainName);
    } else {
      fetchedData =
        await getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname(
          data[0].carcatalog,
          trainName
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

    const fetchedData =
      await getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam(
        dept,
        cartype,
        divData
      );
    setMaintenanceData(fetchedData);
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
            carcatalog={data[0]?.carcatalog}
          />
        </div>

        {/* second Div */}
        <div className="min-w-[25%] overflow-hidden relative">
          <BoardTitleSection
            title={`${data[0].carcatalog} - 車種分配資訊`}
            content={
              <TrainCategorySection
                key={data[0].carcatalog}
                selectedTrainName={selectedTrainName}
                carcatalog={data[0].carcatalog}
                handleTrainClick={handleTrainTypeClick} // Pass the handleTrainClick function
              />
            }
          />
        </div>

        {/* Third Div */}

        <div className="min-w-[72%]  h-full  relative ">
          <BoardTitleSection
            title={`${data[0].carcatalog} - ${selectedTrainName}`} //${selectedArea} - ${selectedLabel}
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
