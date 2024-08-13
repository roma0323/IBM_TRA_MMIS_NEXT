import ClientPage from "@/components/train_deployment/detail_page/ClientPage";
import { getSumStatusListAndCarcatalogEqualParam } from "@/api/api";
import React, { Suspense } from 'react';
import Loading from "@/components/Loading"; // Import your custom Loading component

interface PageProps {
  params: any;
}

export default async function Page({ params }: PageProps) {
  const decodedLastPart = decodeURIComponent(params.id);

  const data = await getSumStatusListAndCarcatalogEqualParam(decodedLastPart);
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <ClientPage Data={data.data} />
      </Suspense>
    </main>
  );
}
