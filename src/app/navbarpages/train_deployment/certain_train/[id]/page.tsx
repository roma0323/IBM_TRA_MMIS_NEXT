import ClientPage from "@/components/train_deployment/detail_page/ClientPage";
import { getSumStatusListAndCarcatalogEqualParam } from "@/api/api";
import React, { Suspense } from "react";

interface PageProps {
  params: any;
  searchParams: any;
}

export function generateStaticParams() {
  return [
    { id: "intercity_train", name: "城際列車" },
    { id: "commuter_train", name: "通勤列車" },
    { id: "electric_locomotive", name: "電力機車" },
    { id: "diesel_electric_locomotive", name: "柴電機車" },
    { id: "diesel_hydraulic_locomotive", name: "柴液機車" },
    { id: "diesel_passenger_car", name: "柴油客車" },
    { id: "passenger_car", name: "客車" },
    { id: "freight_car", name: "貨車" },
  ];
}

const carcatalogMap: { [key: string]: string } = {
  intercity_train: "城際列車",
  commuter_train: "通勤列車",
  electric_locomotive: "電力機車",
  diesel_electric_locomotive: "柴電機車",
  diesel_hydraulic_locomotive: "柴液機車",
  diesel_passenger_car: "柴油客車",
  passenger_car: "客車",
  freight_car: "貨車",
};

export default async function Page({ params, searchParams }: PageProps) {
  const carcatalog = carcatalogMap[params.id] || "Unknown";
  const date = searchParams.date;

  const data = await getSumStatusListAndCarcatalogEqualParam(carcatalog, date);
  if (data.data == null || data.data.length === 0) {
    data.data = [
      {
        index: 0,
        dept: "Unknowndept",
        deptdesc: "Unknowndeptdesc",
        cartype: "Unknowncartype",
        carcatalog: "Unknown",
        belongto: 0,
        borrowin: 0,
        borrowout: 0,
        current_cnt: 0,
        current_use: 0,
        current_temp: 0,
        current_ready: 0,
        maintain_w: 0,
        maintain_sec: 0,
        maintain_fac: 0,
        oth_waitrep: 0,
        oth_return: 0,
        oth_stop: 0,
        availability: 0,
      },
    ];
  }

  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      <ClientPage key={params.id} Data={data.data} />
    </main>
  );
}