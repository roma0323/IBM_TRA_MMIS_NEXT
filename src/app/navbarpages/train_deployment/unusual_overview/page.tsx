"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { DataByCarCatalog } from "@/types/type";
import {
  getSumStatusListAndsumtotalEqualoneNotNormaltrain,
  get30DayData,
} from "@/api/api";
import {
  processAreaChart30DayData,
  processTotalAndAvailableData,
} from "@/components/train_deployment/Process30daysChartData";

import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import Loading from "@/components/Loading";

export default function Page() {
  const urlParams = useSearchParams();
  const date = urlParams ? urlParams.get("date") || "" : "";

  const fetchSumStatusList = async () => {
    const fetchedData = await getSumStatusListAndsumtotalEqualoneNotNormaltrain(
      date
    );
    return fetchedData.data;
  };

  const fetch30DayData = async () => {
    const fetchedData = await get30DayData();
    return fetchedData;
  };

  const { data: sumStatusData, error: sumStatusError } = useSWR(
    "fetchSumStatusList",
    fetchSumStatusList
  );
  const { data: thirtyDayData, error: thirtyDayError } = useSWR(
    "fetch30DayData",
    fetch30DayData
  );

  if (sumStatusError || thirtyDayError) return <div>Failed to load</div>;
  if (!sumStatusData || !thirtyDayData) return <Loading />;

  const area_chart_30days = processAreaChart30DayData({ data: thirtyDayData });
  const total_Available_data = processTotalAndAvailableData({
    data: thirtyDayData,
  });

  const dataByCarCatalog: DataByCarCatalog = {};
  sumStatusData.forEach((item: DataByCarCatalog[keyof DataByCarCatalog]) => {
    dataByCarCatalog[item.carcatalog] = item;
  });

  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      <div className="size-full p-6 relative overflow-auto">
        <div className="flex flex-col flex-1 size-full gap-6">
          <div className="grow">
            <BigOverviewCard
              Name="非常態列車"
              total={total_Available_data["非常態列車"]?.TOTAL}
              available={total_Available_data["非常態列車"]?.AVAILABLE}
              chartData={area_chart_30days["非常態列車"]}
            />
          </div>
          <div className="grid grid-cols-4 gap-4 grow relative">
            <OverviewCard
              Name="客車"
              total={dataByCarCatalog["客車"]?.current_cnt}
              available={
                dataByCarCatalog["客車"]?.current_ready +
                dataByCarCatalog["客車"]?.current_temp +
                dataByCarCatalog["客車"]?.current_use
              }
            />
            <OverviewCard
              Name="城際列車"
              total={dataByCarCatalog["城際列車"]?.current_cnt}
              available={
                dataByCarCatalog["城際列車"]?.current_ready +
                dataByCarCatalog["城際列車"]?.current_temp +
                dataByCarCatalog["城際列車"]?.current_use
              }
            />
            <OverviewCard
              Name="貨車"
              total={dataByCarCatalog["貨車"]?.current_cnt}
              available={
                dataByCarCatalog["貨車"]?.current_ready +
                dataByCarCatalog["貨車"]?.current_temp +
                dataByCarCatalog["貨車"]?.current_use
              }
            />
            <OverviewCard
              Name="柴液機車"
              total={dataByCarCatalog["柴液機車"]?.current_cnt}
              available={
                dataByCarCatalog["柴液機車"]?.current_ready +
                dataByCarCatalog["柴液機車"]?.current_temp +
                dataByCarCatalog["柴液機車"]?.current_use
              }
            />
            <OverviewCard
              Name="柴油客車"
              total={dataByCarCatalog["柴油客車"]?.current_cnt}
              available={
                dataByCarCatalog["柴油客車"]?.current_ready +
                dataByCarCatalog["柴油客車"]?.current_temp +
                dataByCarCatalog["柴油客車"]?.current_use
              }
            />
            <OverviewCard
              Name="柴電機車"
              total={dataByCarCatalog["柴電機車"]?.current_cnt}
              available={
                dataByCarCatalog["柴電機車"]?.current_ready +
                dataByCarCatalog["柴電機車"]?.current_temp +
                dataByCarCatalog["柴電機車"]?.current_use
              }
            />
            <OverviewCard
              Name="通勤列車"
              total={dataByCarCatalog["通勤列車"]?.current_cnt}
              available={
                dataByCarCatalog["通勤列車"]?.current_ready +
                dataByCarCatalog["通勤列車"]?.current_temp +
                dataByCarCatalog["通勤列車"]?.current_use
              }
            />
            <OverviewCard
              Name="電力機車"
              total={dataByCarCatalog["電力機車"]?.current_cnt}
              available={
                dataByCarCatalog["電力機車"]?.current_ready +
                dataByCarCatalog["電力機車"]?.current_temp +
                dataByCarCatalog["電力機車"]?.current_use
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}
