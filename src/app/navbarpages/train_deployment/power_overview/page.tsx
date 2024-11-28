"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { DataByCarCatalog } from "@/types/type";
import { getSumStatusListAndsumtotalEqualone, get30DayData } from "@/api/api";

import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import Loading from "@/components/Loading";
import {
  processAreaChart30DayData,
  processTotalAndAvailableData,
} from "@/components/train_deployment/Process30daysChartData";

export default function Page() {
  const urlParams = useSearchParams();
  const date = urlParams ? urlParams.get("date") || "" : "";

  const fetchSumStatusList = async () => {
    const fetchedData = await getSumStatusListAndsumtotalEqualone(date);
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
    <main className=" grow bg-secondary-background overflow-hidden relative">
      <div className=" h-full p-3 relative overflow-auto">
        <div className="relative flex flex-col  gap-4 ">
          <div className=" w-full">
            <BigOverviewCard
              Name="動力車"
              total={total_Available_data["動力車"]?.TOTAL}
              available={total_Available_data["動力車"]?.AVAILABLE}
              chartData={area_chart_30days["動力車"]}
            />
          </div>
          <div className="grid grid-cols-3   gap-4 relative">
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/intercity_train`,
              }}
            >
              <OverviewCard
                Name="城際列車"
                total={dataByCarCatalog["城際列車"]?.current_cnt}
                available={
                  dataByCarCatalog["城際列車"]?.current_ready +
                  dataByCarCatalog["城際列車"]?.current_temp +
                  dataByCarCatalog["城際列車"]?.current_use
                }
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/commuter_train`,
              }}
            >
              <OverviewCard
                Name="通勤列車"
                total={dataByCarCatalog["通勤列車"]?.current_cnt}
                available={
                  dataByCarCatalog["通勤列車"]?.current_ready +
                  dataByCarCatalog["通勤列車"]?.current_temp +
                  dataByCarCatalog["通勤列車"]?.current_use
                }
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/electric_locomotive`,
              }}
            >
              <OverviewCard
                Name="電力機車"
                total={dataByCarCatalog["電力機車"]?.current_cnt}
                available={
                  dataByCarCatalog["電力機車"]?.current_ready +
                  dataByCarCatalog["電力機車"]?.current_temp +
                  dataByCarCatalog["電力機車"]?.current_use
                }
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/diesel_passenger_car`,
              }}
            >
              <OverviewCard
                Name="柴油客車"
                total={dataByCarCatalog["柴油客車"]?.current_cnt}
                available={
                  dataByCarCatalog["柴油客車"]?.current_ready +
                  dataByCarCatalog["柴油客車"]?.current_temp +
                  dataByCarCatalog["柴油客車"]?.current_use
                }
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/diesel_hydraulic_locomotive`,
              }}
            >
              <OverviewCard
                Name="柴液機車"
                total={dataByCarCatalog["柴液機車"]?.current_cnt}
                available={
                  dataByCarCatalog["柴液機車"]?.current_ready +
                  dataByCarCatalog["柴液機車"]?.current_temp +
                  dataByCarCatalog["柴液機車"]?.current_use
                }
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/diesel_electric_locomotive`,
              }}
            >
              <OverviewCard
                Name="柴電機車"
                total={dataByCarCatalog["柴電機車"]?.current_cnt}
                available={
                  dataByCarCatalog["柴電機車"]?.current_ready +
                  dataByCarCatalog["柴電機車"]?.current_temp +
                  dataByCarCatalog["柴電機車"]?.current_use
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
