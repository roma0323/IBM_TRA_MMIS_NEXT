"use client";

import React, { useState } from "react";
import BoardTitleSection from "@/components/BoardTitleSection";
import { factorySumStatusOverall } from "@/types/type"; // Update the import path as needed
import CategorySection from "@/components/ui/accordionSection";
import TrainListTable from "@/components/factory_maintenance/factoryDepot/TrainListTable";

const TrainPageContent: React.FC<factorySumStatusOverall> = ({ Data }) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>("全部");
  const [selectedArea, setSelectedArea] = useState<string | null>("全部機廠");

  const factoryData: { [key: string]: string[] } = [
    "全部機廠",
    "富岡機廠",
    "潮州機廠",
    "花蓮機廠",
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

  const filteredTrainData = Data.filter((train) => {
    const areaMatches =
      selectedArea === "全部機廠" ||
      !selectedArea ||
      train.deptdesc.includes(selectedArea.replace("車輛配置", ""));
    const labelMatches =
      selectedLabel === "全部" ||
      !selectedLabel ||
      train.carcatalog === selectedLabel;

    return areaMatches && labelMatches;
  });

  return (
    <div className="size-full flex p-4 gap-4 overflow-hidden">
      {/* First Div */}
      <div className="min-w-[15%] flex items-center justify-center">
        <BoardTitleSection
          title="機務段分類"
          content={
            <>
              <CategorySection
                setSelectTrain={(id, title) => {
                  setSelectedLabel(id);
                  setSelectedArea(title);
                }}
                data={factoryData} // Pass the factory data here
              />
            </>
          }
        />
      </div>

      {/* Second Div */}
      <div className="min-w-[84%] h-full relative">
        <BoardTitleSection
          title={`${selectedArea} - ${selectedLabel}`}
          content={<TrainListTable TrainDataInArray={filteredTrainData} />}
        />
      </div>
    </div>
  );
};

export default TrainPageContent;
