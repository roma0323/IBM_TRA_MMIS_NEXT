"use client";

import React, { useState } from "react";
import { LabelAndNumberByArea } from "@/components/locomotive_depot/LabelAndNumberByArea";
import SlideNavigation from "@/components/SlideNavigation";
import BoardTitleSection from "@/components/BoardTitleSection";
import TrainOverviewSection from "@/components/locomotive_depot/TrainOverviewSection";
import MaintenanceDetailSection from "@/components/locomotive_depot/MaintenanceDetailSection";
import { getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam } from "@/api/api";
import { FetcheGetSumStatusListData } from "@/types/type"; // Update the import path as needed
import { useSearchParams } from "next/navigation";

const TrainPageContent: React.FC<FetcheGetSumStatusListData> = ({ Data }) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>("All");
  const [selectedArea, setSelectedArea] = useState<string | null>("全部機務段");
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]); // New state for maintenance data
  const searchParams = useSearchParams()
  const date = searchParams?.get('date') || '';
  const areas = [
    "全部機務段",
    "七堵機務段",
    "臺北機務段",
    "新竹機務段",
    "彰化機務段",
    "嘉義機務段",
    "高雄機務段",
    "花蓮機務段",
    "臺東機務段",
    "宜蘭機務分段",
  ];

  const handleLabelClick = (label: string, area: string) => {
    setSelectedLabel((prevLabel) =>
      prevLabel === label && selectedArea === area ? null : label,
    );
    setSelectedArea((prevArea) =>
      prevArea === area && selectedLabel === label ? null : area,
    );
  };

  const handleTrainClick = async (
    dept: string,
    cartype: string,
    divData: string,
  ) => {
    const data =
      await getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam(
        dept,
        cartype,
        divData,
        date
      );
    setMaintenanceData(data);
  };

  const filteredTrainData = Data.filter((train) => {
    const areaMatches =
      selectedArea === "全部機務段" ||
      !selectedArea ||
      train.deptdesc.includes(selectedArea.replace("車輛配置", ""));
    const labelMatches =
      selectedLabel === "All" ||
      !selectedLabel ||
      train.carcatalog === selectedLabel;

    return areaMatches && labelMatches;
  });

  //handleMouseEnter and slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Adjust if you have more or less than 3 divs
  const visibleSlides = 2; // Set to 1 since we want to slide one div at a time
  const handleMouseEnter = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? 0 : prevIndex - 1;
      } else if (direction === "right") {
        return prevIndex >= totalSlides - visibleSlides
          ? prevIndex
          : prevIndex + 1;
      }
      return prevIndex;
    });
  };
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < totalSlides - visibleSlides;
  //handleMouseEnter and slide

  return (
    <div className=" h-full  p-6 overflow-hidden">
      <div
        className="flex h-full gap-6 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 26}%)` }}
      >
        {/* First Div */}
        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title="城際列車 - 機務段分配"
            content={
              <div className="flex flex-col w-full bg-white items-start relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                {areas.map((area) => (
                  <LabelAndNumberByArea
                    key={area}
                    area_name={area}
                    onLabelClick={(label) => handleLabelClick(label, area)}
                  />
                ))}
              </div>
            }
          />
        </div>

        {/* Second Div */}
        <TrainOverviewSection
          filteredTrainData={filteredTrainData}
          selectedLabel={selectedLabel}
          selectedArea={selectedArea}
          handleTrainClick={handleTrainClick}
          handleMouseEnter={handleMouseEnter}
        />

        {/* Third Div */}
        <MaintenanceDetailSection maintenanceData={maintenanceData} />
      </div>
      <SlideNavigation
        direction="left"
        onHover={handleMouseEnter}
        isVisible={canMoveLeft}
      />
      <SlideNavigation
        direction="right"
        onHover={handleMouseEnter}
        isVisible={canMoveRight}
      />
    </div>
  );
};

export default TrainPageContent;
