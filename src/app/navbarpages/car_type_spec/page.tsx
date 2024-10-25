import ClientPage from "@/components/car_type_spec/ClientPage";
import React from "react";
import {  getCarTypeList } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  let all_car_type = await getCarTypeList();
  all_car_type = all_car_type.filter(
    (item: any) => item.cartype !== "客車" && item.cartype !== "貨車"
  );

  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      <ClientPage
        all_car_type={all_car_type} 
      />
    </main>
  );
}
