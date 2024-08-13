import React, { Suspense } from 'react';
import ClientPage from "@/components/train_deployment/ClientPage";
import { getData } from "@/api/getSumStatusList&sumtotal=1";
import Loading from "@/components/Loading"; // Import your custom Loading component

export default async function Page() {
  const fetchedData = await getData();
  // const fetchedData: FetcheGetSumStatusList = await getData();

  return (
    <main className="flex flex-col h-full">
      <Suspense fallback={<Loading />}>
        <ClientPage Data={fetchedData.data} />
      </Suspense>
    </main>
  );
}
