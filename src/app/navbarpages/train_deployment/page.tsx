import React, { Suspense } from "react";
import ClientPage from "@/components/train_deployment/ClientPage";
import { getSumStatusListAndsumtotalEqualone } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  const date = searchParams.date || ""; // Get the 'date' parameter from the URL or set a default

  // Fetch data based on the current date
  const fetchedData = await getSumStatusListAndsumtotalEqualone(date);

  return (
    <main className=" grow bg-neutral-100 overflow-hidden relative">
        <ClientPage key={searchParams.date} Data={fetchedData.data} />
    </main>
  );
}
