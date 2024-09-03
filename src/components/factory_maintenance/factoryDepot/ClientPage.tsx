"use client";

import React, { useState, useRef } from "react";
import { LabelAndNumberByArea } from "@/components/locomotive_depot/LabelAndNumberByArea";
import FactoryOverviewSection from "@/components/factory_maintenance/factoryDepot/FactoryOverviewSection.tsx";
import BoardTitleSection from "@/components/BoardTitleSection";
import { getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam } from "@/api/api";
import { factorySumStatusOverall } from "@/types/type"; // Update the import path as needed
import { useSearchParams } from "next/navigation";

const TrainPageContent: React.FC<factorySumStatusOverall> = ({ Data }) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>("All");
  const [selectedArea, setSelectedArea] = useState<string | null>("全部機廠");
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";
  const areas = [
    "全部機廠",
    "富岡機廠",
    "潮州機廠",
    "花蓮機廠",
  ];

  const filteredTrainData = Data.filter((train) => {
    const areaMatches =
      selectedArea === "全部機廠" ||
      !selectedArea ||
      train.deptdesc.includes(selectedArea.replace("車輛配置", ""));
    const labelMatches =
      selectedLabel === "All" ||
      !selectedLabel ||
      train.carcatalog === selectedLabel;

    return areaMatches && labelMatches;
  });

  const handleLabelClick = (label: string, area: string) => {
    console.log("label", label);
    console.log("area", area);
    setSelectedLabel((prevLabel) =>
      prevLabel === label && selectedArea === area ? null : label
    );
    setSelectedArea((prevArea) =>
      prevArea === area && selectedLabel === label ? null : area
    );
  };

  return (
    <div className="size-full flex p-4 gap-4 overflow-hidden">
      
        {/* First Div */}
        <div className="min-w-[15%] flex items-center justify-center">
          <BoardTitleSection
            title={`機廠分配`}
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
        <FactoryOverviewSection
          filteredTrainData={filteredTrainData}
          selectedLabel={selectedLabel}
          selectedArea={selectedArea}
        />
      
    </div>
  );
};

export default TrainPageContent;