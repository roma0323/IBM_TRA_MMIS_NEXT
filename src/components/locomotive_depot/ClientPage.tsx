"use client";

import useSWR from "swr";
import React, { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

import {
  getSumStatusDetailListMultiplierZeor,
  getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam,
} from "@/api/api";
import {FetcheGetSumStatusList,} from "@/types/type";

import SlideNavigationContainer, {SlideNavigationContainerRef,} from "@/components/SlideNavigationContainer";
import BoardTitleSection from "@/components/BoardTitleSection";
import Loading from "@/components/Loading";
import CategorySection from "@/components/ui/accordionSection";

import MaintenanceDetailSection from "@/components/locomotive_depot/MaintenanceDetailSection";
import TrainListTable from "@/components/locomotive_depot/TrainListTable";

const TrainPageContent: React.FC = () => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>("全部");
  const [selectedArea, setSelectedArea] = useState<string | null>("全部機務段");
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";

  const fetcher = async () => {
    const data = await getSumStatusDetailListMultiplierZeor(date);
    return data;
  };

  const { data, error, isLoading } = useSWR<FetcheGetSumStatusList>(
    `locomative${date}`,
    fetcher
  );

  const factoryData: { [key: string]: string[] } = [
    "全部機務段",
    "七堵機務段",
    "臺北機務段",
    "新竹機務段",
    "彰化機務段",
    "嘉義機務段",
    "高雄機務段",
    "花蓮機務段",
    "臺東機務段",
    "宜蘭機務段",
  ].reduce((acc: { [key: string]: string[] }, dept: string) => {
    acc[dept] = [
      "全部",
      "客車",
      "貨車",
      "柴油客車",
      "柴液機車",
      "柴電機車",
      "電力機車",
      "通勤列車",
      "城際列車",
    ];
    return acc;
  }, {});

  const filteredTrainData = data?.data.filter((train) => {
    const areaMatches =
      selectedArea === "全部機務段" ||
      !selectedArea ||
      train.deptdesc.includes(selectedArea.replace("車輛配置", ""));
    const labelMatches =
      selectedLabel === "全部" ||
      !selectedLabel ||
      train.carcatalog === selectedLabel;

    return areaMatches && labelMatches;
  }) || [];

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

  const slideNavRef = useRef<SlideNavigationContainerRef>(null);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div><Loading /></div>;

  return (
    <div className="h-full overflow-hidden">
      <SlideNavigationContainer
        ref={slideNavRef}
        totalSlides={3}
        visibleSlides={2}
        slideWidthPercentage={26}
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
        <div className="min-w-[72%] h-full relative">
          <BoardTitleSection
            title={`${selectedArea} - ${selectedLabel}`}
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

        {/* Third Div */}
        <MaintenanceDetailSection maintenanceData={maintenanceData} />
      </SlideNavigationContainer>
    </div>
  );
};

export default TrainPageContent;