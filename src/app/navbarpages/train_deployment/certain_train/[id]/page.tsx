import ClientPage from "@/components/train_deployment/detail_page/ClientPage";
import React, { Suspense } from "react";

interface PageProps {
  params: any;
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

export default function Page({ params }: PageProps) {
  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      <ClientPage key={params.id} carcatalogId={params.id} />
    </main>
  );
}