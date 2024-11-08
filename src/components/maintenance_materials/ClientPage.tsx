"use client";

import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import BoardTitleSection from "@/components/BoardTitleSection";
import SlideNavigationContainer, { SlideNavigationContainerRef } from "@/components/SlideNavigationContainer";
import InventoryTableList from "@/components/maintenance_materials/InventoryTableList";
import InventoryOverviewTable from "@/components/maintenance_materials/InventoryOverviewTable";
import CategorySection from "@/components/ui/accordionSection";
import { factoryData } from "@/components/maintenance_materials/factoryData";
import { useInventoryData } from "@/components/maintenance_materials/useInventoryData";

export function ClientPage() {
  const urlParams = useSearchParams();
  const date = urlParams ? urlParams.get("date") || "" : "";
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  const {
    inventory_overview,
    error,
    isLoading,
    selectFactory,
    setSelectFactory,
    selectFactoryName,
    setSelectFactoryName,
    selectedType,
    setSelectedValue,
    inventoryList,
    setInventoryList, 
    isLoadingState,
    totalMoney,
    handleCellClick,
    filteredInventoryOverview,
    chartData,
  } = useInventoryData(date);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loading />;

  return (
    <div className="h-full overflow-hidden">
      <SlideNavigationContainer ref={slideNavRef} totalSlides={3} visibleSlides={2} slideWidthPercentage={21}>
        <div className="min-w-[20%] flex items-center justify-center">
          <BoardTitleSection
            title="廠段分類"
            content={
              <CategorySection
                setSelectTrain={(id, name) => {
                  setSelectFactory(id);
                  setSelectFactoryName(name || "");
                  setSelectedValue("");
                  setInventoryList([]); // Use setInventoryList here
                }}
                data={factoryData}
              />
            }
          />
        </div>

        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title={`${selectFactoryName}`}
            content={
              <InventoryOverviewTable
                chartData={chartData}
                inventoryOverview={filteredInventoryOverview}
                handleCellClick={(type, month, typeName) => handleCellClick(type, month, typeName, slideNavRef)}
              />
            }
          />
        </div>

        <div className="min-w-[73%] grow flex items-center justify-center relative">
          <BoardTitleSection
            title={`${selectFactoryName} - ${selectedType}`}
            content={
              <InventoryTableList
                data={inventoryList}
                isLoading={isLoadingState}
                totalMoney={totalMoney}
              />
            }
          />
        </div>
      </SlideNavigationContainer>
    </div>
  );
}

export default ClientPage;