import ClientPage from "@/components/maintenance_materials/ClientPage";
import React from "react";
import { getInvMount, getInvMountList, getInvMountListIssue } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  const date = searchParams.date || ""; // Get the 'date' parameter from the URL or set a default

  let [inventory_overview, inventory_list_balance, inventory_list_issue] = await Promise.all([
    getInvMount(date),
    getInvMountList(date),
    getInvMountListIssue(date),
  ]);

  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage
        inventory_overview={inventory_overview}
        inventory_list_balance={inventory_list_balance}
        inventory_list_issue={inventory_list_issue}
      />
    </main>
  );
}