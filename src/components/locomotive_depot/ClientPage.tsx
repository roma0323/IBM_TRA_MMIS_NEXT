"use client";

import useSWR from "swr";
import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import {
  getSumStatusDetailListMultiplierZeor,
  getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam,
} from "@/api/api";
import { FetcheGetSumStatusListDataInArray } from "@/types/type";
import {
  calculateCounts,
  createFactoryData,
} from "@/components/locomotive_depot/ProcessData";

import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";
import BoardTitleSection from "@/components/BoardTitleSection";
import Loading from "@/components/Loading";
import CategorySection from "@/components/ui/accordionSection";

import MaintenanceCard from "@/components/locomotive_depot/MaintenanceCard";
import TrainListTable from "@/components/locomotive_depot/TrainListTable";
import { DataTableClickable } from "@/components/ui/DataTableClickable";
import { columns } from "@/components/locomotive_depot/column";

const TrainPageContent: React.FC = () => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>("全部");
  const [selectedArea, setSelectedArea] = useState<string | null>("全部機務段");
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]);
  const [LoadingState, setLoadingState] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";

  const fetcher = async () => {
    const data = await getSumStatusDetailListMultiplierZeor(date);
    return data.data;
  };

  const { data, error, isLoading } = useSWR<
    FetcheGetSumStatusListDataInArray[]
  >(`locomative${date}`, fetcher);

  const counts = data ? calculateCounts(data) : {};
  const factoryData = createFactoryData(counts);

 // ClientPage.tsx

const filteredTrainData =
data?.filter((train) => {
  const areaMatches =
    !selectedArea ||
    selectedArea === "全部機務段" ||
    train.deptdesc.includes(selectedArea.replace("車輛配置", "")) ||
    (selectedArea === "其他機務段" && ![
      "七堵機務段",
      "臺北機務段",
      "新竹機務段",
      "彰化機務段",
      "嘉義機務段",
      "高雄機務段",
      "花蓮機務段",
      "臺東機務段",
      "宜蘭機務段",
    ].includes(train.deptdesc));

  const categories = [
    "客車",
    "貨車",
    "柴油客車",
    "柴液機車",
    "柴電機車",
    "電力機車",
    "通勤列車",
    "城際列車",
    "其他",
  ];

  const labelMatches =
    !selectedLabel ||
    selectedLabel === "全部" ||
    train.carcatalog === selectedLabel ||
    (selectedLabel === "其他" && !categories.includes(train.carcatalog));

  return areaMatches && labelMatches;
}) || [];
  const handleTrainClick = async (
    dept: string,
    cartype: string,
    divData: string
  ) => {
    setLoadingState(true);
    slideNavRef.current?.handleMouseEnter("right");
    const data =
      await getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam(
        dept,
        cartype,
        divData,
        date
      );
    setMaintenanceData(data);
    setLoadingState(false);
  };

  const slideNavRef = useRef<SlideNavigationContainerRef>(null);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loading />;
  console.log(maintenanceData, "maintenanceData");
  return (
    <div className="h-full overflow-hidden">
      <SlideNavigationContainer
        ref={slideNavRef}
        totalSlides={3}
        visibleSlides={2}
        slideWidthPercentage={25}
      >
        {/* First Div */}
        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title="機務段分類"
            content={
              <>
                <CategorySection
                  setSelectTrain={(id, title) => {
                    setSelectedLabel(id);
                    setSelectedArea(title);
                  }}
                  data={factoryData}
                />
              </>
            }
          />
        </div>

        {/* Second Div */}
        <div className="min-w-[73%] h-full relative">
          <BoardTitleSection
            title={`${selectedArea} - ${selectedLabel}`}
            // content={<DataTableClickable columns={columns} data={filteredTrainData} /> }

            content={
              <>
                <TrainListTable
                  TrainDataInArray={filteredTrainData}
                  handleTrainClick={handleTrainClick}
                  loading={isLoading}
                />
              </>
            }
          />
        </div>

        {/* Third Div */}
        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title="車輛詳情"
            content={
              <div>
                {LoadingState ? (
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

export default TrainPageContent;
