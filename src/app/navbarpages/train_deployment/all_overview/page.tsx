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

const basePath = process.env.NEXT_PUBLIC_BASEPATH || "";

// RSTA 客車 RSTL 動力車 RSTF RSTP 貨車 USUALFLAG 常用

function processData(data: any[]) {
  const group1: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // EQ11 is RSTL, USUALFLAG is "1"
  const group2: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // EQ11 is RSTA, USUALFLAG is "1"
  const group3: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // EQ11 is RSTF or RSTP, USUALFLAG is "1"
  const group4: Record<string, { AVAILABLE: number; TOTAL: number }> = {}; // USUALFLAG is "0"

  data.forEach((item) => {
    const { ALL_D, AVAILABLE, TOTAL, EQ11, USUALFLAG } = item;
    const availableNum = parseFloat(AVAILABLE);
    const totalNum = parseFloat(TOTAL);

    let group = null;
    if (USUALFLAG === "1") {
      if (EQ11 === "RSTL") {
        group = group1;
      } else if (EQ11 === "RSTA") {
        group = group2;
      } else if (EQ11 === "RSTF" || EQ11 === "RSTP") {
        group = group3;
      }
    } else if (USUALFLAG === "0") {
      group = group4;
    }

    if (group) {
      if (!group[ALL_D]) {
        group[ALL_D] = { AVAILABLE: 0, TOTAL: 0 };
      }
      group[ALL_D].AVAILABLE += availableNum;
      group[ALL_D].TOTAL += totalNum;
    }
  });

  const groupArray = (
    group: Record<string, { AVAILABLE: number; TOTAL: number }>
  ) =>
    Object.keys(group).map((date) => {
      const { AVAILABLE, TOTAL } = group[date];
      const RATION = Math.round((AVAILABLE / TOTAL) * 100);
      return { name: date, RATION };
    });

  const final_output = [
    groupArray(group1),
    groupArray(group2),
    groupArray(group3),
    groupArray(group4),
  ];

  return final_output;
}

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

  const final_output = processData(thirtyDayData);

  const dataByCarCatalog: DataByCarCatalog = {};
  sumStatusData.forEach((item: DataByCarCatalog[keyof DataByCarCatalog]) => {
    dataByCarCatalog[item.carcatalog] = item;
  });

  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      <div className="h-full p-3 relative overflow-auto">
        <div className="flex flex-col h-full justify-around">
          <div className="h-1/2 w-full">
            <BigOverviewCard Name="全局" Data={dataByCarCatalog["全局"]} />
          </div>

          <div className="grid grid-cols-4 gap-4 h-2/5 relative">
            <Link
              href={{
                pathname: `${basePath}/navbarpages/train_deployment/power_overview`,
              }}
            >
              <OverviewCard
                Name="動力車"
                Data={dataByCarCatalog["動力車"]}
                chartData={final_output[0]}
              />
            </Link>

            <Link
              href={{
                pathname: `${basePath}/navbarpages/train_deployment/certain_train/passenger_car`,
              }}
            >
              <OverviewCard
                Name="客車"
                Data={dataByCarCatalog["客車"]}
                chartData={final_output[1]}
              />
            </Link>
            <Link
              href={{
                pathname: `${basePath}/navbarpages/train_deployment/certain_train/freight_car`,
              }}
            >
              <OverviewCard
                Name="貨車"
                Data={dataByCarCatalog["貨車"]}
                chartData={final_output[2]}
              />
            </Link>
            <Link
              href={{
                pathname: `${basePath}/navbarpages/train_deployment/unusual_overview`,
              }}
            >
              <OverviewCard
                Name="非常態列車"
                Data={dataByCarCatalog["非常態列車"]}
                chartData={final_output[3]}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}