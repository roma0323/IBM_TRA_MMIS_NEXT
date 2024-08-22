import React, { Suspense } from 'react';
import ClientPage from "@/components/train_deployment/ClientPage";
import { getSumStatusListAndsumtotalEqualone } from "@/api/api";
import Loading from "@/components/Loading"; // Import your custom Loading component

export default async function Page({ searchParams }: { searchParams: { date?: string } }) {
  const date = searchParams.date || ''; // Get the 'date' parameter from the URL or set a default
  console.log('before fetch');
  
  // Fetch data based on the current date
  const fetchedData = await getSumStatusListAndsumtotalEqualone(date);
  console.log('after fetch');
  
  return (
    <main className=" grow bg-neutral-100 overflow-hidden relative">
      <Suspense fallback={<Loading />}>
        <ClientPage key={date} Data={fetchedData.data} />
      </Suspense>
    </main>
  );
}
