// import  ClientPage  from "./clientCom";
import ClientPage from "@/components/factory_maintenance/factoryDepot/ClientPage";
import React, { Suspense } from "react";
import { getFacRepairList } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {

  const fetchedData = await getFacRepairList();
  return (
    <main className=" grow bg-secondary-background overflow-hidden relative">
        <ClientPage key={searchParams.date} Data={fetchedData.data} />
    </main>
  );
}
