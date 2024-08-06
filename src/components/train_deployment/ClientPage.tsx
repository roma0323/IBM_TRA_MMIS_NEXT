"use client";

import Link from "next/link";
import React, { useState } from "react";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";
import { useSearchParams } from "next/navigation"; // Import useSearchParams

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

  // State to track which card is clicked

  const searchParams = useSearchParams(); // Use useSearchParams to access query parameters
  const type = searchParams ? searchParams.get("type") : null;
  console.log(type)
  // Determine which data to show based on the 'type' parameter

  return (
    <div className="bg-gray-200 p-3">
      <div>
        <p>
          Query Parameter <strong>type</strong>: {type || "None"}
        </p>
        <BigOverviewCard Data={initialData[8]} />

        <div className="grid grid-cols-4 flex-grow relative bg-gray-200 overflow-hidden">
          <div>
            <OverviewCard Data={POWER_TRAIN_DATA} />
          </div>
          <Link
            href={{
              pathname: `/navbarpages/train_deployment/certain_train/${initialData[0].carcatalog}`,
            }}
          >
            <div>
              <OverviewCard Data={initialData[0]} />
            </div>
          </Link>
          <Link
            href={{
              pathname: `/navbarpages/train_deployment/certain_train/${initialData[3].carcatalog}`,
            }}
          >
            <div>
              <OverviewCard Data={initialData[3]} />
            </div>
          </Link>
          <Link
            href={{
              pathname: `/navbarpages/train_deployment/certain_train/${UNUSUALLY_USED_TRAIN_DATA.carcatalog}`,
            }}
          >
            <div>
              <OverviewCard Data={UNUSUALLY_USED_TRAIN_DATA} />
            </div>
          </Link>
        </div>
      </div>

      {/* Second div - Only show this when a link is clicked */}
      <div>
        <BigOverviewCard Data={POWER_TRAIN_DATA} />
        <div className="grid grid-cols-4 flex-grow relative bg-gray-200 overflow-hidden">
          <Link
            href={{
              pathname: `/navbarpages/train_deployment/certain_train/${UNUSUALLY_USED_TRAIN_DATA.carcatalog}`,
            }}
          >
            <OverviewCard Data={UNUSUALLY_USED_TRAIN_DATA} />
          </Link>
        </div>
      </div>

      {/* Third div - Only show this when a link is clicked */}
      <div>
        <BigOverviewCard Data={POWER_TRAIN_DATA} />

        <div className="grid grid-cols-4 flex-grow relative bg-gray-200 overflow-hidden">
          <Link
            href={{
              pathname: `/navbarpages/train_deployment/certain_train/${UNUSUALLY_USED_TRAIN_DATA.carcatalog}`,
            }}
          >
            <OverviewCard Data={UNUSUALLY_USED_TRAIN_DATA} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
