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
  const fetchedData = await getSumStatusListAndsumtotalEqualone(date);

  const dataByCarCatalog: DataByCarCatalog = {};
  fetchedData.data.forEach((item: DataByCarCatalog[keyof DataByCarCatalog]) => {
    dataByCarCatalog[item.carcatalog] = item;
  });

  return (
    <main className=" grow bg-secondary-background overflow-hidden relative">
      <div className=" h-full p-3 relative overflow-auto">
        <div className="relative flex flex-col  gap-4 ">
          <div className=" w-full">
            <BigOverviewCard Name="動力車" Data={dataByCarCatalog["動力車"]} />
          </div>

          <div className="grid grid-cols-3   gap-4 relative">
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/intercity_train`,
              }}
            >
              <OverviewCard
                Name="城際列車"
                Data={dataByCarCatalog["城際列車"]}
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/commuter_train`,
              }}
            >
              <OverviewCard
                Name="通勤列車"
                Data={dataByCarCatalog["通勤列車"]}
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/electric_locomotive`,
              }}
            >
              <OverviewCard
                Name="電力機車"
                Data={dataByCarCatalog["電力機車"]}
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/diesel_passenger_car`,
              }}
            >
              <OverviewCard
                Name="柴油客車"
                Data={dataByCarCatalog["柴油客車"]}
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/diesel_hydraulic_locomotive`,
              }}
            >
              <OverviewCard
                Name="柴液機車"
                Data={dataByCarCatalog["柴液機車"]}
              />
            </Link>
            <Link
              href={{
                pathname: `/navbarpages/train_deployment/certain_train/diesel_electric_locomotive`,
              }}
            >
              <OverviewCard
                Name="柴電機車"
                Data={dataByCarCatalog["柴電機車"]}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
