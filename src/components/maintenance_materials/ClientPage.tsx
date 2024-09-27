"use client";

import React, { useState, useRef, useMemo } from "react";
import {
  InventoryOverview,
  InventoryListBalance,
  InventoryListIssue,
} from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";
import InventoryTableList from "@/components/maintenance_materials/InventoryTableList";
import InventoryOverviewTable from "@/components/maintenance_materials/InventoryOverviewTable";
import FactorySection from "@/components/maintenance_materials/FactorySection";

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
  const [selectFactory, setSelectFactory] = useState<string>("");
  const [selectFactoryName, setSelectFactoryName] = useState<string>("name");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [activeContentId, setActiveContentId] = useState<string | undefined>(undefined);
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  const handleCellClick = (value: string, month: string) => {
    setSelectedValue(value);
    if (value === "庫存餘額") {
      setTableData(
        filteredInventoryListBalance.filter((item) => item.month === month)
      );
    } else if (value === "領用金額") {
      setTableData(
        filteredInventoryListIssue.filter((item) => item.month === month)
      );
    }
    slideNavRef.current?.handleMouseEnter("right");
  };

  const filteredInventoryOverview = useMemo(() => {
    if (selectFactory === "All") {
      const overviewMap: {
        [key: string]: { sum_issue_mount: number; sum_invbal_mount: number };
      } = {};
      inventory_overview.forEach((item) => {
        if (!overviewMap[item.month]) {
          overviewMap[item.month] = { sum_issue_mount: 0, sum_invbal_mount: 0 };
        }
        overviewMap[item.month].sum_issue_mount += Number(item.sum_issue_mount);
        overviewMap[item.month].sum_invbal_mount += Number(
          item.sum_invbal_mount
        );
      });
      return Object.keys(overviewMap).map((month) => ({
        dept: "All",
        month,
        year: "2024", // Assuming year is constant, adjust if necessary
        sum_issue_mount: overviewMap[month].sum_issue_mount.toString(),
        sum_invbal_mount: overviewMap[month].sum_invbal_mount.toString(),
      }));
    } else if (selectFactory === "All_factory") {
      const overviewMap: {
        [key: string]: { sum_issue_mount: number; sum_invbal_mount: number };
      } = {};
      inventory_overview.forEach((item) => {
        if (["WAY00", "MXY00", "MZY00"].includes(item.dept)) {
          if (!overviewMap[item.month]) {
            overviewMap[item.month] = {
              sum_issue_mount: 0,
              sum_invbal_mount: 0,
            };
          }
          overviewMap[item.month].sum_issue_mount += Number(
            item.sum_issue_mount
          );
          overviewMap[item.month].sum_invbal_mount += Number(
            item.sum_invbal_mount
          );
        }
      });
      return Object.keys(overviewMap).map((month) => ({
        dept: "All_factory",
        month,
        year: "2024", // Assuming year is constant, adjust if necessary
        sum_issue_mount: overviewMap[month].sum_issue_mount.toString(),
        sum_invbal_mount: overviewMap[month].sum_invbal_mount.toString(),
      }));
    } else if (selectFactory === "All_depot") {
      const overviewMap: {
        [key: string]: { sum_issue_mount: number; sum_invbal_mount: number };
      } = {};
      inventory_overview.forEach((item) => {
        if (
          [
            "MGY00",
            "MHY00",
            "MHY10",
            "MMY00",
            "MMY20",
            "MPY00",
            "MYY00",
            "MIY00",
            "MFY00",
          ].includes(item.dept)
        ) {
          if (!overviewMap[item.month]) {
            overviewMap[item.month] = {
              sum_issue_mount: 0,
              sum_invbal_mount: 0,
            };
          }
          overviewMap[item.month].sum_issue_mount += Number(
            item.sum_issue_mount
          );
          overviewMap[item.month].sum_invbal_mount += Number(
            item.sum_invbal_mount
          );
        }
      });
      return Object.keys(overviewMap).map((month) => ({
        dept: "All_depot",
        month,
        year: "2024", // Assuming year is constant, adjust if necessary
        sum_issue_mount: overviewMap[month].sum_issue_mount.toString(),
        sum_invbal_mount: overviewMap[month].sum_invbal_mount.toString(),
      }));
    } else {
      return inventory_overview.filter((item) => item.dept === selectFactory);
    }
  }, [inventory_overview, selectFactory]);

  const filteredInventoryListBalance = useMemo(
    () =>
      selectFactory === "All" ||
      selectFactory === "All_factory" ||
      selectFactory === "All_depot"
        ? inventory_list_balance.filter(
            (item) =>
              selectFactory === "All" ||
              (selectFactory === "All_factory" &&
                ["WAY00", "MXY00", "MZY00"].includes(item.dept)) ||
              (selectFactory === "All_depot" &&
                [
                  "MGY00",
                  "MHY00",
                  "MHY10",
                  "MMY00",
                  "MMY20",
                  "MPY00",
                  "MYY00",
                  "MIY00",
                  "MFY00",
                ].includes(item.dept))
          )
        : inventory_list_balance.filter((item) => item.dept === selectFactory),
    [inventory_list_balance, selectFactory]
  );

  const filteredInventoryListIssue = useMemo(
    () =>
      selectFactory === "All" ||
      selectFactory === "All_factory" ||
      selectFactory === "All_depot"
        ? inventory_list_issue.filter(
            (item) =>
              selectFactory === "All" ||
              (selectFactory === "All_factory" &&
                ["WAY00", "MXY00", "MZY00"].includes(item.dept)) ||
              (selectFactory === "All_depot" &&
                [
                  "MGY00",
                  "MHY00",
                  "MHY10",
                  "MMY00",
                  "MMY20",
                  "MPY00",
                  "MYY00",
                  "MIY00",
                  "MFY00",
                ].includes(item.dept))
          )
        : inventory_list_issue.filter((item) => item.dept === selectFactory),
    [inventory_list_issue, selectFactory]
  );

  const chartData = useMemo(() => {
    if (filteredInventoryOverview.length === 0) {
      return {};
    }
    return filteredInventoryOverview.reduce(
      (
        acc: { [key: string]: { 庫存餘額: number; 領用金額: number } },
        item
      ) => {
        acc[item.month] = {
          庫存餘額: Math.round(Number(item.sum_invbal_mount)),
          領用金額: Math.round(Number(item.sum_issue_mount)),
        };
        return acc;
      },
      {}
    );
  }, [filteredInventoryOverview]);

  return (
    <div className="h-full overflow-hidden">
      <SlideNavigationContainer
        ref={slideNavRef}
        totalSlides={3}
        visibleSlides={2}
        slideWidthPercentage={21}
      >
        {/* First Div */}
        <FactorySection
          selectFactory={selectFactory}
          setSelectFactory={setSelectFactory}
          selectFactoryName={selectFactoryName}
          setSelectFactoryName={setSelectFactoryName}
          activeContentId={activeContentId}
          setActiveContentId={setActiveContentId}
        />

        {/* Second Div */}
        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title={`${selectFactoryName}`}
            content={
              <InventoryOverviewTable
                chartData={chartData}
                inventoryOverview={filteredInventoryOverview}
                handleCellClick={handleCellClick}
              />
            }
          />
        </div>

        {/* Third Div */}
        <div className="min-w-[73%] grow flex items-center justify-center">
          <BoardTitleSection
            title={`${selectFactoryName} - ${selectedValue}`}
            content={<InventoryTableList data={tableData} />}
          />
        </div>
      </SlideNavigationContainer>
    </div>
  );
};

export default ClientPage;