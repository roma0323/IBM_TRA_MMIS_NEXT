"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  InventoryOverview,
  InventoryListIssue,
  InventoryListBalance,
} from "@/types/type";
import BoardTitleSection from "@/components/BoardTitleSection";
import SlideNavigationContainer, {
  SlideNavigationContainerRef,
} from "@/components/SlideNavigationContainer";
import InventoryTableList from "@/components/maintenance_materials/InventoryTableList";
import InventoryOverviewTable from "@/components/maintenance_materials/InventoryOverviewTable";
import FactorySection from "@/components/maintenance_materials/FactorySection";
import { getInvMountListRow } from "@/api/api";

type Props = {
  inventory_overview: InventoryOverview[];
  date: string;
};

const ClientPage: React.FC<Props> = ({ inventory_overview, date }) => {
  const [selectFactory, setSelectFactory] = useState<string>("All");
  const [selectFactoryName, setSelectFactoryName] = useState<string>("機務處");
  const [selectedType, setSelectedValue] = useState<string>("");
  const [inventoryList, setInventoryList] = useState<InventoryListIssue[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalMoney, setTotalMoney] = useState<number>(0); // New state for total money
  const slideNavRef = useRef<SlideNavigationContainerRef>(null);

  const fetchAndSumData = async (factories: string[], date: string, month: string, type: string) => {
    const allData = await Promise.all(
      factories.map((factory) => getInvMountListRow(date, month, factory, type))
    );

    return allData.flat().reduce((acc, item) => {
      const existingItem = acc.find((i: InventoryListIssue) => i.itemnum === item.itemnum && i.dept === item.dept);
      if (existingItem) {
        existingItem.quantity = (parseFloat(existingItem.quantity) + parseFloat(item.quantity)).toString();
        existingItem.sum_issue_mount = (parseFloat(existingItem.sum_issue_mount) + parseFloat(item.sum_issue_mount)).toString();
      } else {
        acc.push(item);
      }
      return acc;
    }, [] as InventoryListIssue[]);
  };

  const handleCellClick = async (type: string, month: string, typeName: string) => {
    setSelectedValue(typeName);
    setIsLoading(true);

    let factories: string[] = [];
    if (selectFactory === "All_depot") {
      factories = ["MGY00", "MHY00", "MHY10", "MMY00", "MMY20", "MPY00", "MYY00", "MIY00", "MFY00"];
    } else if (selectFactory === "All_factory") {
      factories = ["WAY00", "MXY00", "MZY00"];
    } else if (selectFactory === "All") {
      factories = ["MGY00", "MHY00", "MHY10", "MMY00", "MMY20", "MPY00", "MYY00", "MIY00", "MFY00", "WAY00", "MXY00", "MZY00"];
    }

    let summedData = [];
    if (factories.length > 0) {
      summedData = await fetchAndSumData(factories, date, month, type);
      summedData = summedData.sort((a: InventoryListIssue, b: InventoryListIssue) => parseFloat(b.sum_issue_mount) - parseFloat(a.sum_issue_mount));
    } else {
      summedData = await getInvMountListRow(date, month, selectFactory, type);
    }

    setInventoryList(summedData);

    // Calculate total money
    const total = summedData.reduce((acc: number, item: InventoryListIssue | InventoryListBalance) => {
      const sumMount = 'sum_issue_mount' in item ? parseFloat(item.sum_issue_mount) : parseFloat(item.sum_invbal_mount);
      return acc + sumMount;
    }, 0);
    setTotalMoney(total);

    setIsLoading(false);
    slideNavRef.current?.handleMouseEnter("right");
  };

  const filteredInventoryOverview = useMemo(() => {
    const overviewMap: {
      [key: string]: { sum_issue_mount: number; sum_invbal_mount: number };
    } = {};

    inventory_overview.forEach((item) => {
      if (
        selectFactory === "All" ||
        (selectFactory === "All_factory" && ["WAY00", "MXY00", "MZY00"].includes(item.dept)) ||
        (selectFactory === "All_depot" && ["MGY00", "MHY00", "MHY10", "MMY00", "MMY20", "MPY00", "MYY00", "MIY00", "MFY00"].includes(item.dept)) ||
        item.dept === selectFactory
      ) {
        if (!overviewMap[item.month]) {
          overviewMap[item.month] = { sum_issue_mount: 0, sum_invbal_mount: 0 };
        }
        overviewMap[item.month].sum_issue_mount += Number(item.sum_issue_mount);
        overviewMap[item.month].sum_invbal_mount += Number(item.sum_invbal_mount);
      }
    });

    return Object.keys(overviewMap).map((month) => ({
      dept: selectFactory,
      month,
      year: "2024", // Assuming year is constant, adjust if necessary
      sum_issue_mount: overviewMap[month].sum_issue_mount.toString(),
      sum_invbal_mount: overviewMap[month].sum_invbal_mount.toString(),
    }));
  }, [inventory_overview, selectFactory]);

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
          setSelectFactory={setSelectFactory}
          setSelectFactoryName={setSelectFactoryName}
          setSelectedValue={setSelectedValue} // Pass the setter for selectedType
          setInventoryList={setInventoryList} // Pass the setter for inventoryList
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
            title={`${selectFactoryName} - ${selectedType}`}
            content={<InventoryTableList data={inventoryList} isLoading={isLoading} totalMoney={totalMoney} />} // Pass totalMoney to InventoryTableList
          />
        </div>
      </SlideNavigationContainer>
    </div>
  );
};

export default ClientPage;