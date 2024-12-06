"use client";
import React, { useState, useRef } from "react";
import useSWR from "swr";

import {
  getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname,
  getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam,
  getSumStatusListEq3Param,
  getSumStatusListAndsumtotalEqualone,
  getSumStatusListAndCarcatalogEqualParam,
} from "@/api/api";
import { useSearchParams } from "next/navigation";
import { FetcheGetSumStatusListDataInArray } from "@/types/type";
import {
  refactorPieChartData,
  refactorCardData,
} from "@/components/train_deployment/detail_page/ProcessPieChartData";
import BoardTitleSection from "@/components/BoardTitleSection";
import Loading from "@/components/Loading";
import TrainCategorySectionCard from "@/components/train_deployment/detail_page/TrainCategorySectionCard";

import DataSection from "@/components/train_deployment/detail_page/DataSection";
import TrainListTable from "@/components/locomotive_depot/TrainListTable";
import MaintenanceCard from "@/components/locomotive_depot/MaintenanceCard";
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
};

const DetailClientPage: React.FC<{ carcatalogId: string }> = ({
  carcatalogId,
}) => {
  const [selectedTrainName, setSelectedTrainName] = useState("");
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]);
  const [filteredTrainData, setFilteredTrainData] = useState<any[]>([]);
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [loading2, setLoading2] = useState(false); // Add loading state
  const urlParams = useSearchParams();
  const date = urlParams ? urlParams.get("date") || "" : "";
  const carcatalog = carcatalogMap[carcatalogId] || "Unknown";

  //fetch and loading
  const fetcher = async () => {
    const fetchedData = await getSumStatusListAndsumtotalEqualone(date);
    return fetchedData.data;
  };
  const fetchCertainSumStatusList = async () => {
    const fetchedData = await getSumStatusListAndCarcatalogEqualParam(
      carcatalog,
      date
    );
    return fetchedData.data;
  };

  const { data, error } = useSWR<FetcheGetSumStatusListDataInArray[]>(
    `fetch_${carcatalogId}`,
    fetcher
  );

  const { data: CertainTrainStatusData, error: CertainTrainStatusError } =
    useSWR<FetcheGetSumStatusListDataInArray[]>(
      `fetchCertainTrainStatusData_${carcatalogId}`,
      fetchCertainSumStatusList
    );

  if (CertainTrainStatusError || error) return <div>Failed to load</div>;
  if (!CertainTrainStatusData || !data) return <Loading />;

  const PieChartData = refactorPieChartData(CertainTrainStatusData);
  const CardData = refactorCardData(CertainTrainStatusData);

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
    setLoading(true); // Set loading to true
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
    setLoading(false); // Set loading to false
  };

  const handleTrainClick = async (
    dept: string,
    cartype: string,
    divData: string
  ) => {
    slideNavRef.current?.handleMouseEnter("right");
    setLoading2(true); // Set loading to true
    const fetchedData =
      await getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam(
        dept,
        cartype,
        divData
      );
    setMaintenanceData(fetchedData);
    setLoading2(false); // Set loading to true
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
            PieChartData={PieChartData}
          />
        </div>

        {/* second Div */}
        <div className="min-w-[25%] overflow-hidden relative">
          <BoardTitleSection
            title={`${carcatalog} - 車種分配資訊`}
            content={
              <div className="flex flex-col items-start gap-2.5 px-3 py-2 relative w-full">
                {CardData.map((train, index) => (
                  <TrainCategorySectionCard
                    key={index}
                    trainName={train.name}
                    onClick={() => handleTrainTypeClick(train.name)}
                    isActive={selectedTrainName === train.name}
                    total={train.value}
                    available={train.value2}
                  />
                ))}
              </div>
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
                  loading={loading} // Pass loading state
                />
              </>
            }
          />
        </div>

        {/* fourth Div */}
        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title="車輛詳情"
            content={
              <div>
                
                {loading2 ? (
                  <Loading />
                ) : !Array.isArray(maintenanceData) ||
                  maintenanceData.length === 0 ? (
                  <div>無資料</div>
                ) : (
                  maintenanceData.map((data, index) => (
                    <MaintenanceCard
                      key={index}
                      maintenanceData={data}
                      index={index + 1}
                    />
                  ))
                )}
              </div>
            }
          />
        </div>
      </SlideNavigationContainer>
    </div>
  );
};

export default DetailClientPage;
