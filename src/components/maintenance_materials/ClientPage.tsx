"use client";

import React, { useState, useRef } from "react";
import { InventoryOverview,InventoryListBalance,InventoryListIssue } from "@/types/type";

import BoardTitleSection from "@/components/BoardTitleSection";
import InventoryTypeCard from "@/components/maintenance_materials/InventoryTypeCard";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";
import InventoryTableList from "@/components/maintenance_materials/InventoryTableList";
import InventoryOverviewTable from "@/components/maintenance_materials/InventoryOverviewTable";

type Props = {
  inventory_overview: InventoryOverview[];
  inventory_list_balance: InventoryListBalance[];
  inventory_list_issue: InventoryListIssue[];
};


const ClientPage: React.FC<Props> = ({
  inventory_overview,
  inventory_list_balance,
  inventory_list_issue,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(0);
  const [selectFactory, setSelectFactory] = useState<string>("-");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  const handleCellClick = (value: string) => {
    setSelectedValue(value);
    slideNavRef.current?.handleMouseEnter("right");
  };

  const chartData = inventory_overview.reduce(
    (acc: { [key: string]: { 庫存餘額: number; 領用金額: number } }, item) => {
      acc[item.month] = {
        庫存餘額: Math.round(Number(item.sum_invbal_mount)),
        領用金額: Math.round(Number(item.sum_issue_mount)),
      };
      return acc;
    },
    {}
  );

  return (
    <div className="h-full overflow-hidden">
      <SlideNavigationContainer
        ref={slideNavRef}
        totalSlides={3}
        visibleSlides={2}
        slideWidthPercentage={21}
      >
        {/* First Div */}
        <div className="min-w-[20%] flex items-center justify-center">
          <BoardTitleSection
            title="故障通報分級"
            content={
              <div className="flex flex-col mx-4">
                {inventory_overview.map((CardDataByLevel, index) => (
                  <InventoryTypeCard
                    key={index}
                    CardDataByLevel={CardDataByLevel}
                    isActive={activeCardIndex === index}
                    onToggle={() => {
                      setActiveCardIndex(index);
                      setSelectFactory(CardDataByLevel.dept);
                    }}
                  />
                ))}
              </div>
            }
          />
        </div>

        {/* Second Div */}
        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title={`${selectFactory}`}
            content={
              <InventoryOverviewTable
                chartData={chartData}
                inventoryOverview={inventory_overview}
                handleCellClick={handleCellClick}
              />
            }
          />
        </div>

        {/* Third Div */}
        <div className="min-w-[73%] grow flex items-center justify-center">
          <BoardTitleSection
            title={`${selectFactory} - ${selectedValue}`}
            content={<InventoryTableList data={inventory_list_balance} />}
          />
        </div>
      </SlideNavigationContainer>
    </div>
  );
};

export default ClientPage;