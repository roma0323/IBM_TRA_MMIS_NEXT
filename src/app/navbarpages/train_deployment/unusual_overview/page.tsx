import React from "react";
import Link from "next/link";
import { getSumStatusListAndsumtotalEqualone } from "@/api/api";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import { DataByCarCatalog } from "@/types/type";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string; type?: string };
}) {
  const date = searchParams.date || "";
  //BUG: fetch from 內網unusual
  const fetchedData = await getSumStatusListAndsumtotalEqualone(date);

  const dataByCarCatalog: DataByCarCatalog = {};
  fetchedData.data.forEach((item: DataByCarCatalog[keyof DataByCarCatalog]) => {
    dataByCarCatalog[item.carcatalog] = item;
  });

  return (
    <main className=" grow bg-neutral-100 overflow-hidden relative">
      <div className=" h-full p-3 relative overflow-auto">


      <div className="flex flex-col gap-4">
          <div className="h-1/2 ">
            <BigOverviewCard
              Name="非常態列車"
              Data={dataByCarCatalog["非常態列車"]}
            />
          </div>
          以下數據不正確,外網沒有非常態資料api
          <div className="grid grid-cols-4  h-2/5 gap-4 relative">
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
