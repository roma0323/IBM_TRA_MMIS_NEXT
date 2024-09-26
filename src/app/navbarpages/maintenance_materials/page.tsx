// import  ClientPage  from "./clientCom";
import ClientPage from "@/components/maintenance_materials/ClientPage";
import React from "react";
import { getInvMount,getInvMountList,getInvMountListIssue } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  const date = searchParams.date || ""; // Get the 'date' parameter from the URL or set a default

  const [inventory_overview, inventory_list_balance, inventory_list_issue] = await Promise.all([
    getInvMount(date),
    getInvMountList(date),
    getInvMountListIssue(date),
  ]);

  // console.log("inventory_overview",inventory_overview)
  // console.log('inventory_list',inventory_list_balance)
  // console.log('inventory_list_issue',inventory_list_issue)


  return (
    <main className=" grow bg-neutral-100 overflow-hidden relative">
      <div>{inventory_list_issue[0].itemnum}</div>
        {/* <ClientPage key={searchParams.date} Data={fetchedData.data} /> */}
    </main>
  );
}
