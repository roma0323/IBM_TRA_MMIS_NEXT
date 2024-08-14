"use client";

import Link from "next/link";
import React from "react";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import { useSearchParams, useRouter } from "next/navigation";
import { FetcheGetSumStatusListData } from "@/types/type"; // Update the import path as needed



const ClientPage: React.FC<FetcheGetSumStatusListData> = ({ Data }) => {
  const POWER_TRAIN_DATA = {
    // carcatalog: "動力車",
    carcatalog: null,
    current_ready: null,
    current_cnt: null,
  };

  const UNUSUALLY_USED_TRAIN_DATA = {
    carcatalog: null,
    // carcatalog: "非常態車輛",
    current_ready: null,
    current_cnt: null,
  };

  const searchParams = useSearchParams();
  const type = searchParams ? searchParams.get("type") : null;
  const router = useRouter();

  const handleTypeChange = (newType: string) => {
    router.push(`?type=${newType}`);
  };

  return (
    <div className="bg-gray-200 h-full p-3">
      {/* Conditionally render based on the 'type' parameter */}
      {type === "all" && (
        <div className=" h-full flex  flex-col justify-around">
          <div>
            <BigOverviewCard Data={Data[8]} />
          </div>
          <div className="grid grid-cols-4">
            <div onClick={() => handleTypeChange("power")}>
              <OverviewCard Data={POWER_TRAIN_DATA} />
            </div>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/客車` }}>
              <OverviewCard Data={Data[0]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/貨車` }}>
              <OverviewCard Data={Data[3]} />
            </Link>
            <div onClick={() => handleTypeChange("unusual")}>
              <OverviewCard Data={UNUSUALLY_USED_TRAIN_DATA} />
            </div>
          </div>
        </div>
      )}

      {type === "power" && (
        <div className=" h-full flex  flex-col justify-around">
          <div>
            <BigOverviewCard Data={POWER_TRAIN_DATA} />
          </div>
          <div className="grid grid-cols-3 flex-grow relative bg-gray-200 overflow-hidden">
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/城際列車` }}>
              <OverviewCard Data={Data[1]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/通勤列車` }}>
              <OverviewCard Data={Data[7]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/電力列車` }}>
              <OverviewCard Data={Data[2]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/柴油客車` }}>
              <OverviewCard Data={Data[5]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/柴液機車` }}>
              <OverviewCard Data={Data[4]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/柴電機車` }}>
              <OverviewCard Data={Data[6]} />
            </Link>

          </div>
        </div>
      )}

      {type === "unusual" && (
        <div className=" h-full flex  flex-col justify-around">
          <div>
            <BigOverviewCard Data={UNUSUALLY_USED_TRAIN_DATA} />
          </div>
          以下數據不正確,外網沒有非常態資料api
          <div className="grid grid-cols-4">
              <OverviewCard Data={Data[0]} />
              <OverviewCard Data={Data[1]} />
              <OverviewCard Data={Data[2]} />
              <OverviewCard Data={Data[3]} />
              <OverviewCard Data={Data[4]} />
              <OverviewCard Data={Data[5]} />
              <OverviewCard Data={Data[6]} />
              <OverviewCard Data={Data[7]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientPage;
