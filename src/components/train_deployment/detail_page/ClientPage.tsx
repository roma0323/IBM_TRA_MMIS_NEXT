"use client";
import React, { useState, useRef } from "react";
import useSWR from "swr";


import { getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname,getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam,getSumStatusListEq3Param,getSumStatusListAndsumtotalEqualone } from "@/api/api";
import { useSearchParams } from "next/navigation";
import { FetcheGetSumStatusListDataInArray } from "@/types/type"; 

import BoardTitleSection from "@/components/BoardTitleSection";
import Loading from "@/components/Loading";

import DataSection from "@/components/train_deployment/detail_page/DataSection";
import TrainListTable from "@/components/locomotive_depot/TrainListTable";
import TrainCategorySection from "@/components/train_deployment/detail_page/TrainCategorySection";
import MaintenanceDetailSection from "@/components/locomotive_depot/MaintenanceDetailSection";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";



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
  const urlParams = useSearchParams();
  const date = urlParams ? urlParams.get("date") || "" : "";
  const carcatalog = carcatalogMap[carcatalogId] || "Unknown";

  //fetch and loading
  const fetcher = async () => {
    const fetchedData = await getSumStatusListAndsumtotalEqualone(date);
    console.log(fetchedData.data,'fetchedData.data')
    console.log(fetchedData.data[0],'fetchedData.data')
    return fetchedData.data;
  };
  const { data, error } = useSWR<FetcheGetSumStatusListDataInArray[]>(
    `fetch_${carcatalogId}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;
  //fetch and loading

  const cntSum = data
    .filter((item) => item.carcatalog === carcatalog)
    .reduce((sum, item) => sum + item.current_cnt, 0);
  const readySum = data
    .filter((item) => item.carcatalog === carcatalog)
    .reduce(
      (sum, item) =>
        sum + item.current_ready + item.current_temp + item.current_use,
      0
    );

  const handleTrainTypeClick = async (trainName: string) => {
    if (!slideNavRef.current?.canMoveLeft) {
      slideNavRef.current?.handleMouseEnter("right");
    }
    setSelectedTrainName(trainName);
    let fetchedData;
    if (carcatalog === "客車") {
      fetchedData = await getSumStatusListEq3Param(trainName);
    } else {
      fetchedData =
        await getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname(
          carcatalog,
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
            title={`${carcatalog} - 車種分配資訊`}
            content={
              <TrainCategorySection
                key={carcatalog}
                selectedTrainName={selectedTrainName}
                carcatalog={carcatalog}
                handleTrainClick={handleTrainTypeClick}
              />
            }
          />
        </div>

        {/* Third Div */}

        <div className="min-w-[72%]  h-full  relative ">
          <BoardTitleSection
            title={`${carcatalog} - ${selectedTrainName}`}
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
