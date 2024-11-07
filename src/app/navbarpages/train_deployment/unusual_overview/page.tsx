"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { DataByCarCatalog } from "@/types/type";
import { getSumStatusListAndsumtotalEqualoneNotNormaltrain } from "@/api/api";

import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import Loading from "@/components/Loading";


export default function Page() {
  const urlParams = useSearchParams();
  const date = urlParams ? urlParams.get("date") || "" : "";
  const fetcher = async () => {
    const fetchedData = await getSumStatusListAndsumtotalEqualoneNotNormaltrain(date);
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
        <div className="flex flex-col gap-4">
          <div className="h-1/2">
            <BigOverviewCard
              Name="非常態列車"
              Data={dataByCarCatalog["非常態列車"]}
            />
          </div>
          <div className="grid grid-cols-4 h-2/5 gap-4 relative">
            <OverviewCard Name="客車" Data={dataByCarCatalog["客車"]} />
            <OverviewCard Name="城際列車" Data={dataByCarCatalog["城際列車"]} />
            <OverviewCard Name="貨車" Data={dataByCarCatalog["貨車"]} />
            <OverviewCard Name="柴液機車" Data={dataByCarCatalog["柴液機車"]} />
            <OverviewCard Name="柴油客車" Data={dataByCarCatalog["柴油客車"]} />
            <OverviewCard Name="柴電機車" Data={dataByCarCatalog["柴電機車"]} />
            <OverviewCard Name="通勤列車" Data={dataByCarCatalog["通勤列車"]} />
            <OverviewCard Name="電力機車" Data={dataByCarCatalog["電力機車"]} />
          </div>
        </div>
      </div>
     
    </main>
  );
}