"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { DataByCarCatalog } from "@/types/type";
import { getSumStatusListAndsumtotalEqualone } from "@/api/api";

import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import Loading from "@/components/Loading";

const basePath = process.env.NEXT_PUBLIC_BASEPATH || "";

export default function Page() {
  const urlParams = useSearchParams();
  const date = urlParams ? urlParams.get("date") || "" : "";
  const fetcher = async () => {
    const fetchedData = await getSumStatusListAndsumtotalEqualone(date);
    return fetchedData.data;
  };
  //must add value before fetcher, cannot be date , it may be empty value
  const { data, error } = useSWR("fetch trigger",fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const dataByCarCatalog: DataByCarCatalog = {};
  data.forEach((item: DataByCarCatalog[keyof DataByCarCatalog]) => {
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
              <OverviewCard Name="動力車" Data={dataByCarCatalog["動力車"]} />
            </Link>

            <Link
              href={{
                pathname: `${basePath}/navbarpages/train_deployment/certain_train/passenger_car`,
              }}
            >
              <OverviewCard Name="客車" Data={dataByCarCatalog["客車"]} />
            </Link>
            <Link
              href={{
                pathname: `${basePath}/navbarpages/train_deployment/certain_train/freight_car`,
              }}
            >
              <OverviewCard Name="貨車" Data={dataByCarCatalog["貨車"]} />
            </Link>
            <Link
              href={{
                pathname: `${basePath}/navbarpages/train_deployment/unusual_overview`,
              }}
            >
              <OverviewCard
                Name="非常態列車"
                Data={dataByCarCatalog["非常態列車"]}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}