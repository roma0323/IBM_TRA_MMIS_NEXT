"use client";

import Link from "next/link";
import React, { useState } from "react";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import { useSearchParams, useRouter } from "next/navigation";

type ClientPageProps = {
  initialData: any[];
};

const ClientPage: React.FC<ClientPageProps> = ({ initialData }) => {
  const POWER_TRAIN_DATA = {
    carcatalog: "動力車",
    current_ready: 1,
    current_cnt: 5,
  };

  const UNUSUALLY_USED_TRAIN_DATA = {
    carcatalog: "非常態車輛",
    current_ready: 1,
    current_cnt: 5,
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
            <BigOverviewCard Data={initialData[8]} />
          </div>
          <div className="grid grid-cols-4">
            <div onClick={() => handleTypeChange("power")}>
              <OverviewCard Data={POWER_TRAIN_DATA} />
            </div>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${initialData[0].carcatalog}` }}>
              <OverviewCard Data={initialData[0]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${initialData[3].carcatalog}` }}>
              <OverviewCard Data={initialData[3]} />
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
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${initialData[1].carcatalog}` }}>
              <OverviewCard Data={initialData[1]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${initialData[7].carcatalog}` }}>
              <OverviewCard Data={initialData[7]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${initialData[2].carcatalog}` }}>
              <OverviewCard Data={initialData[2]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${initialData[5].carcatalog}` }}>
              <OverviewCard Data={initialData[5]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${initialData[4].carcatalog}` }}>
              <OverviewCard Data={initialData[4]} />
            </Link>
            <Link href={{ pathname: `/navbarpages/train_deployment/certain_train/${initialData[6].carcatalog}` }}>
              <OverviewCard Data={initialData[6]} />
            </Link>

          </div>
        </div>
      )}

      {type === "unusual" && (
        <div className=" h-full flex  flex-col justify-around">
          <div>
            <BigOverviewCard Data={UNUSUALLY_USED_TRAIN_DATA} />
          </div>
          以下數據不正確（外網沒有非常態資料api）
          <div className="grid grid-cols-4">
              <OverviewCard Data={initialData[0]} />
              <OverviewCard Data={initialData[1]} />
              <OverviewCard Data={initialData[2]} />
              <OverviewCard Data={initialData[3]} />
              <OverviewCard Data={initialData[4]} />
              <OverviewCard Data={initialData[5]} />
              <OverviewCard Data={initialData[6]} />
              <OverviewCard Data={initialData[7]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientPage;
