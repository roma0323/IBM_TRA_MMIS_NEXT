"use client";

type ClientPageProps = {
  initialData: any[];
};
import Link from 'next/link';
import React from "react";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";

const ClientPage: React.FC<ClientPageProps> = ({ initialData }) => {
  return (
    <div className="grid grid-cols-4 flex-grow relative bg-gray-200 overflow-hidden">
      {initialData.map((data, index) => (
        <Link
          key={index}
          href={{
            pathname: "/navbarpages/train_deployment/certain_train",
            query: { id: data.carcatalog },
          }}
        >
          <OverviewCard Data={data} />
        </Link>
      ))}
    </div>
  );
};

export default ClientPage;
