"use client";

import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import BoardTitleSection from "@/components/BoardTitleSection";
import SlideNavigationContainer, { SlideNavigationContainerRef } from "@/components/SlideNavigationContainer";
import InventoryOverviewTable from "@/components/maintenance_materials/InventoryOverviewTable";
import CategorySection from "@/components/ui/accordionSection";
import { factoryData } from "@/components/maintenance_materials/factoryData";
import { useInventoryData } from "@/components/maintenance_materials/useInventoryData";

import { DataTablePagination } from "@/components/ui/DataTablePagination";
import { columnInventoryListIssue } from "@/components/maintenance_materials/columnInventoryListIssue";
import { columnInventoryListBalance } from "@/components/maintenance_materials/columnInventoryListBalance";
import { InventoryListIssue, InventoryListBalance } from "@/types/type";

export function ClientPage() {
  const urlParams = useSearchParams();
  const date = urlParams ? urlParams.get("date") || "" : "";
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  const {
    error,
    isLoading,
    setSelectFactory,
    selectFactoryName,
    setSelectFactoryName,
    selectedType,
    setSelectedValue,
    inventoryList,
    setInventoryList, 
    isLoadingState,
    handleCellClick,
    filteredInventoryOverview,
    chartData,
  } = useInventoryData(date);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loading />;

  function isInventoryListBalance(item: InventoryListBalance | (InventoryListIssue & { percentage: number })): item is InventoryListBalance {
    return (item as InventoryListBalance).sum_invbal_mount !== undefined;
  }

  function isInventoryListIssue(item: InventoryListBalance | (InventoryListIssue & { percentage: number })): item is InventoryListIssue & { percentage: number } {
    return (item as InventoryListIssue).sum_issue_mount !== undefined && (item as { percentage: number }).percentage !== undefined;
  }

  const inventoryListBalance = inventoryList.filter(isInventoryListBalance);
  const inventoryListIssue = inventoryList.filter(isInventoryListIssue);

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
                <>
                 { isLoadingState ? (
                  <Loading />
                ) : (
                  inventoryList.length > 0 ? (
                    inventoryListBalance.length > 0 ? (
                      <DataTablePagination columns={columnInventoryListBalance} data={inventoryListBalance} />
                    ) : (
                      <DataTablePagination columns={columnInventoryListIssue} data={inventoryListIssue} />
                    )
                  ) : null
                )}
                </>
            }
          />
        </div>
      </SlideNavigationContainer>
    </div>
  );
}

export default ClientPage;