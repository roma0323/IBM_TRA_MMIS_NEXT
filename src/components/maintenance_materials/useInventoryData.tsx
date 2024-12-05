import { useState, useMemo } from "react";
import useSWR from "swr";
import { getInvMountListRow, getInvMount } from "@/api/api";
import { InventoryListIssue, InventoryListBalance, InventoryOverview } from "@/types/type";
import { SlideNavigationContainerRef } from "@/components/SlideNavigationContainer";


type FactoryGroups = {
  All: string[];
  All_depot: string[];
  All_factory: string[];
};

const factoryGroups: FactoryGroups = {
  All: ["MGY00", "MHY00", "MHY10", "MMY00", "MMY20", "MPY00", "MYY00", "MIY00", "MFY00", "WAY00", "MXY00", "MZY00"],
  All_depot: ["MGY00", "MHY00", "MHY10", "MMY00", "MMY20", "MPY00", "MYY00", "MIY00", "MFY00"],
  All_factory: ["WAY00", "MXY00", "MZY00"],
};

export const useInventoryData = (date: string) => {
  const { data: inventory_overview = [], error, isLoading } = useSWR(`${date}urlParams`, () => getInvMount(date));

  const [selectFactory, setSelectFactory] = useState<string>("All");
  const [selectFactoryName, setSelectFactoryName] = useState<string>("機務處");
  const [selectedType, setSelectedValue] = useState<string>("");
  const [inventoryList, setInventoryList] = useState<(InventoryListBalance | InventoryListIssue & { percentage: number })[]>([]);
  const [isLoadingState, setisLoadingState] = useState<boolean>(false);
  const [totalMoney, setTotalMoney] = useState<number>(0);

  const fetchAndSumData = async (factories: string[], date: string, month: string, type: string): Promise<(InventoryListBalance | InventoryListIssue & { percentage: number })[]> => {
    const allData = await Promise.all(factories.map((factory) => getInvMountListRow(date, month, factory, type)));
    return allData.flat().reduce((acc, item) => {
      const existingItem = acc.find((i: InventoryListBalance | InventoryListIssue) => i.itemnum === item.itemnum && i.dept === item.dept);
      if (existingItem) {
        existingItem.quantity = (parseFloat(existingItem.quantity) + parseFloat(item.quantity)).toString();
        existingItem.sum_issue_mount = (parseFloat(existingItem.sum_issue_mount) + parseFloat(item.sum_issue_mount)).toString();
      } else {
        acc.push({ ...item, percentage: 0 });
      }
      return acc;
    }, [] as (InventoryListBalance | InventoryListIssue & { percentage: number })[]);
  };

  const handleCellClick = async (type: string, month: string, typeName: string, slideNavRef: React.RefObject<SlideNavigationContainerRef>) => {
    setSelectedValue(typeName);
    setisLoadingState(true);

    const factories = factoryGroups[selectFactory as keyof FactoryGroups] || [selectFactory];
    const summedData = await fetchAndSumData(factories, date, month, type);

    const total = summedData.reduce((acc: number, item: InventoryListBalance | InventoryListIssue) => {
      const sumMount = "sum_invbal_mount" in item ? parseFloat(item.sum_invbal_mount) : parseFloat(item.sum_issue_mount);
      return acc + sumMount;
    }, 0);
    setTotalMoney(total);

    const updatedData = summedData.map(item => {
      const sumMount = "sum_invbal_mount" in item ? parseFloat(item.sum_invbal_mount) : parseFloat(item.sum_issue_mount);
      const percentage = total ? ((sumMount / total) * 100).toFixed(2) : "0.00";
      return { ...item, percentage: parseFloat(percentage) };
    });

    setInventoryList(updatedData);
    setisLoadingState(false);

    // Trigger slide to the right
    if (slideNavRef.current) {
      slideNavRef.current.handleMouseEnter("right");
    }
  };

  const filteredInventoryOverview = useMemo(() => {
    const overviewMap: { [key: string]: { sum_issue_mount: number; sum_invbal_mount: number } } = {};
    inventory_overview.forEach((item: InventoryOverview) => {
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
      year: "2024",
      sum_issue_mount: overviewMap[month].sum_issue_mount.toString(),
      sum_invbal_mount: overviewMap[month].sum_invbal_mount.toString(),
    }));
  }, [inventory_overview, selectFactory]);

  const chartData = useMemo(() => {
    if (filteredInventoryOverview.length === 0) {
      return {};
    }
    return filteredInventoryOverview.reduce((acc: { [key: string]: { 庫存餘額: number; 領用金額: number } }, item) => {
      acc[item.month] = {
        庫存餘額: Math.round(Number(item.sum_invbal_mount)),
        領用金額: Math.round(Number(item.sum_issue_mount)),
      };
      return acc;
    }, {});
  }, [filteredInventoryOverview]);

  return {
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
  };
};