import ClientPage from "@/components/train_deployment/detail_page/ClientPage";
import { getSumStatusListAndCarcatalogEqualParam } from "@/api/api";
import React, { Suspense } from "react";
import Loading from "@/components/Loading"; // Import your custom Loading component

interface PageProps {
  params: any;
}
export function generateStaticParams() {
  return [
    { id: "電力機車" },
    { id: "城際列車" },
    { id: "通勤列車" },
    { id: "柴電機車" },
    { id: "柴液機車" },
    { id: "柴油客車" },
    { id: "客車" },
  ];
}

export default async function Page({ params }: PageProps) {
  const carcatalog = decodeURIComponent(params.id);

  const data = await getSumStatusListAndCarcatalogEqualParam(carcatalog);
  if (data.data == null || data.data.length === 0) {
    data.data = [
      {
        index: 0,
        dept: "Unknowndept",
        deptdesc: "Unknowndeptdesc",
        cartype: "Unknowncartype",
        carcatalog: "Unknown",
        belongto: 0,
        borrowin: 0,
        borrowout: 0,
        current_cnt: 0,
        current_use: 0,
        current_temp: 0,
        current_ready: 0,
        maintain_w: 0,
        maintain_sec: 0,
        maintain_fac: 0,
        oth_waitrep: 0,
        oth_return: 0,
        oth_stop: 0,
        availability: 0,
      },
    ];
  }

  return (
    <main className=" grow bg-neutral-100 overflow-hidden relative">
      <Suspense fallback={<Loading />}>
        <ClientPage Data={data.data} />
      </Suspense>
    </main>
  );
}
