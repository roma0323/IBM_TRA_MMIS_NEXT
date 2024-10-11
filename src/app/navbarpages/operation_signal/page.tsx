// pages/Page.tsx

import React from "react";
import { getOperationSignal } from "@/api/api";
import ClientPage from "@/components/operation_signal/ClientPage";

export default async function Page() {
  // const operation_signal = await getOperationSignal();

  // console.log('Operation Signal:', operation_signal);

  return (
    <main className="grow bg-neutral-100 overflow-hidden relative">
      <ClientPage
       
      />
    </main>
  );
}
