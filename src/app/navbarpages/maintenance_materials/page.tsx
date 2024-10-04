import ClientPage from "@/components/maintenance_materials/ClientPage";
import React from "react";
import { getInvMount } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  const date = searchParams.date || ""; // Get the 'date' parameter from the URL or set a default

  let inventory_overview = await getInvMount(date);

  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage
        inventory_overview={inventory_overview}
        date={date}
      />
    </main>
  );
}