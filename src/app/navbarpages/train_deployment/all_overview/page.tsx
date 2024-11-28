"use client";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

import {get30DayData } from "@/api/api";

import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import Loading from "@/components/Loading";
import {
  processAreaChart30DayData,
  processTotalAndAvailableData,
} from "@/components/train_deployment/Process30daysChartData";

export default function Page() {

  const fetch30DayData = async () => {
    const fetchedData = await get30DayData();
    return fetchedData;
  };

  const { data: thirtyDayData, error: thirtyDayError } = useSWR(
    "fetch30DayData",
    fetch30DayData
  );

  if (thirtyDayError) return <div>Failed to load</div>;
  if ( !thirtyDayData) return <Loading />;

  const area_chart_30days = processAreaChart30DayData({ data: thirtyDayData });
  const total_Available_data = processTotalAndAvailableData({
    data: thirtyDayData,
  });


  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      <div className="size-full p-6 relative overflow-auto">
        <div className="flex flex-col flex-1 size-full gap-6">
          <div className="grow">
            <BigOverviewCard
              Name="全局"
              total={total_Available_data["動力車"]?.TOTAL}
              available={total_Available_data["動力車"]?.AVAILABLE}
              chartData={area_chart_30days["動力車"]}
            />
          </div>

          <div className="grid grid-cols-4 gap-4 grow relative">
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/power_overview`,
              }}
            >
              <OverviewCard
                Name="動力車"
                total={total_Available_data["動力車"]?.TOTAL}
                available={total_Available_data["動力車"]?.AVAILABLE}
                chartData={area_chart_30days["動力車"]}
              />
            </Link>

            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/passenger_car`,
              }}
            >
              <OverviewCard
                Name="客車"
                total={total_Available_data["客車"]?.TOTAL}
                available={total_Available_data["客車"]?.AVAILABLE}
                chartData={area_chart_30days["客車"]}
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/freight_car`,
              }}
            >
              <OverviewCard
                Name="貨車"
                total={total_Available_data["貨車"]?.TOTAL}
                available={total_Available_data["貨車"]?.AVAILABLE}
                chartData={area_chart_30days["貨車"]}
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/unusual_overview`,
              }}
            >
              <OverviewCard
                Name="非常態列車"
                total={total_Available_data["非常態列車"]?.TOTAL}
                available={total_Available_data["非常態列車"]?.AVAILABLE}
                chartData={area_chart_30days["非常態列車"]}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
