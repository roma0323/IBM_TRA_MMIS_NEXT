"use client";

import React, { useState } from "react";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import {  factorySumStatus } from "@/types/type"; // Update the import path as needed
import { getFacRepairList } from "@/api/api";
import {
  calculateCounts,
  createFactoryData,
} from "@/components/factory_maintenance/factoryDepot/ProcessData";

import Loading from "@/components/Loading"
import BoardTitleSection from "@/components/BoardTitleSection";
import CategorySection from "@/components/ui/accordionSection";
import {DataTable} from "@/components/factory_maintenance/factoryDepot/TrainListTable";
import {columns} from "@/components/factory_maintenance/factoryDepot/column";

const TrainPageContent: React.FC = () => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>("全部");
  const [selectedArea, setSelectedArea] = useState<string | null>("全部機廠");

  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";

  const fetcher = async () => {
    const data = await getFacRepairList();
    return data.data;
  };
  const { data, error } = useSWR<factorySumStatus[]>(`feactory_depot_fetcher${date}`,fetcher);
  if (error) return <p>Error loading data</p>;
  if (!data) return <p><Loading /></p>;

  const counts = data ? calculateCounts(data) : {};
  const factoryData = createFactoryData(counts);
  

  const filteredTrainData = data.filter((train) => {
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
      <div className="min-w-[15rem] w-[25vw] flex items-center justify-center">
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
      <div className="w-[75vw]  h-full relative">
        <BoardTitleSection
          title={`${selectedArea} - ${selectedLabel}`}
          content={<DataTable columns={columns} data={filteredTrainData} /> }
        />
      </div>
    </div>
  );
};

export default TrainPageContent;
