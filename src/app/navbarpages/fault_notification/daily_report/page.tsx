// import  ClientPage  from "./clientCom";
import ClientPage from "@/components/locomotive_depot/ClientPage";
import React, { Suspense } from "react";
import { getSumStatusDetailListMultiplierZeor } from "@/api/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { date?: string };
}) {
  const date = searchParams.date || ""; // Get the 'date' parameter from the URL or set a default

  const fetchedData = await getSumStatusDetailListMultiplierZeor(date);
  return (
    <main className=" grow bg-neutral-100 overflow-hidden relative">
        <ClientPage key={searchParams.date} Data={fetchedData.data} />
    </main>
  );
}
