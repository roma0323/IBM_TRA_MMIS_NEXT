import ClientPage from "@/components/train_deployment/detail_page/ClientPage";
import { getSumStatusListAndCarcatalogEqualParam } from "@/api/api";
import React, { Suspense } from 'react';
import Loading from "@/components/Loading"; // Import your custom Loading component

interface PageProps {
  params: any;
}

type Params = {
  slug: string;
}
 
export function generateStaticParams() {
  return [{id:'電力機車'},{id:'城際列車'},{id:'通勤列車'},{id:'柴電機車'},{id:'柴液機車'},{id:'柴油客車'},{id:'客車'}];
}


export default async function Page({ params }: PageProps) {
  console.log(params.id)
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
