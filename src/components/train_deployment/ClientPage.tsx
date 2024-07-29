"use client";

type ClientPageProps = {
  initialData: any[];
};
import Link from 'next/link';
import React from "react";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import { BigOverviewCard } from "@/components/train_deployment/BigOverviewCard";

const ClientPage: React.FC<ClientPageProps> = ({ initialData }) => {
  return (
    <div className="bg-gray-200 p-3 ">
            <BigOverviewCard Data={initialData[8]} />

        <div className="grid grid-cols-4 flex-grow relative bg-gray-200 overflow-hidden">

        {initialData.map((data, index) => (
          <Link
            key={index}
            href={{
              pathname: `/navbarpages/train_deployment/certain_train/${data.carcatalog}`,
            }}
          >
            <OverviewCard Data={data} />
          </Link>
        ))}
      </div>
    </div>

  );
};

export default ClientPage;
