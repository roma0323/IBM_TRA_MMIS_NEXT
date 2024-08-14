import React, { Suspense } from 'react';
import ClientPage from "@/components/train_deployment/ClientPage";
import { getSumStatusListAndsumtotalEqualone } from "@/api/api";
import Loading from "@/components/Loading"; // Import your custom Loading component

export default async function Page({ searchParams }: { searchParams: { date?: string } }) {
  const date = searchParams.date || ''; // Get the 'date' parameter from the URL or set a default
  const fetchedData = await getSumStatusListAndsumtotalEqualone(date);

  return (
    <main className="flex flex-col h-full">
      <Suspense fallback={<Loading />}>
        <ClientPage Data={fetchedData.data} />
      </Suspense>
    </main>
  );
}
