import ClientPage from "@/components/car_type_spec/ClientPage";
import React from "react";
import { getInvMount } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  const date = searchParams.date || ""; // Get the 'date' parameter from the URL or set a default

  let inventory_overview = await getInvMount(date);
  let fake_data = [
    {
      cartype: "通勤列車",
      kpi_oprtype: "EMU700",
      cardesc: "EMU700",
    },
    {
      cartype: "通勤列車",
      kpi_oprtype: "EMU800",
      cardesc: "EMU800",
    },
    {
      cartype: "城際列車",
      kpi_oprtype: "普悠瑪",
      cardesc: "TEMU2000",
    },

    {
      cartype: "柴電機車",
      kpi_oprtype: "R180",
      cardesc: "R180",
    },
    {
      cartype: "電力機車",
      kpi_oprtype: "E100",
      cardesc: "E100",
    },
    {
      cartype: "客車",
      kpi_oprtype: "40RCK100",
      cardesc: "RCK100",
    },
    {
      cartype: "客車",
      kpi_oprtype: "30SPK2500",
      cardesc: "SPK2500",
    },
  ];

  fake_data = fake_data.filter(
    (item) => item.cartype !== "客車" && item.cartype !== "貨車"
  );

  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage
        date={date}
        fake_data={fake_data} // Pass fake_data to ClientPage
      />
    </main>
  );
}
