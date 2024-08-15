"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import { useSearchParams, useRouter } from "next/navigation";
import { FetcheGetSumStatusListData } from "@/types/type";
import { DataByCarCatalog } from "@/types/type";


const ClientPage: React.FC<FetcheGetSumStatusListData> = ({ Data }) => {

  // Transform the Data array into an object where carcatalog is the key
  const dataByCarCatalog: DataByCarCatalog = useMemo(() => {
    const result: DataByCarCatalog = {};
    Data.forEach(item => {
      result[item.carcatalog] = item;
    });
    return result;
  }, [Data]);

  const searchParams = useSearchParams();
  const type = searchParams ? searchParams.get("type") : null;
  const router = useRouter();

  const handleTypeChange = (newType: string) => {
    router.push(`?type=${newType}`);
  };

  return (
    <div className="bg-gray-200 h-full p-3">
      {type === "all" && (
        <div className="h-full flex flex-col justify-around">
          <div>
            <BigOverviewCard Name="全局" Data={dataByCarCatalog["全局"]} />
          </div>
          <div className="grid grid-cols-4">
            <div onClick={() => handleTypeChange("power")}>
              <OverviewCard  Name="動力車" Data={dataByCarCatalog["動力車"]} />
            </div>
              <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/客車` }}>
                <OverviewCard Name="客車" Data={dataByCarCatalog["客車"]} />
              </Link>
              <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/貨車` }}>
                <OverviewCard Name="貨車" Data={dataByCarCatalog["貨車"]} />
              </Link>
            <div onClick={() => handleTypeChange("unusual")}>
              <OverviewCard Name="非常態列車" Data={dataByCarCatalog["非常態列車"]} />
            </div>
          </div>
        </div>
      )}

      {type === "power" && (
        <div className="h-full flex flex-col justify-around">
          <div>
            <BigOverviewCard Name="動力車" Data={dataByCarCatalog["動力車"]} />
          </div>
          <div className="grid grid-cols-3 flex-grow relative bg-gray-200 overflow-hidden">
              <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/城際列車` }}>
                <OverviewCard Name="城際列車" Data={dataByCarCatalog["城際列車"]} />
              </Link>
                <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/通勤列車` }}>
                <OverviewCard Name="通勤列車" Data={dataByCarCatalog["通勤列車"]} />
              </Link>
                <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/電力機車` }}>
                <OverviewCard Name="電力機車" Data={dataByCarCatalog["電力機車"]} />
              </Link>
                <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/柴油客車` }}>
                <OverviewCard Name="柴油客車" Data={dataByCarCatalog["柴油客車"]} />
              </Link>
                <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/柴液機車` }}>
                <OverviewCard Name="柴液機車" Data={dataByCarCatalog["柴液機車"]} />
              </Link>
                <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/柴電機車` }}>
                <OverviewCard Name="柴電機車" Data={dataByCarCatalog["柴電機車"]} />
              </Link>
            </div>
        </div>
      )}

      {type === "unusual" && (
        <div className="h-full flex flex-col justify-around">
          <div>
            <BigOverviewCard Name="非常態列車" Data={dataByCarCatalog["非常態列車"]} />
          </div>
          以下數據不正確,外網沒有非常態資料api
          <div className="grid grid-cols-4">
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
      )}
    </div>
  );
};

export default ClientPage;
