// pages/Page.tsx

import React from "react";
import { getOperationSignal } from "@/api/api";
import ClientPage from "@/components/operation_signal/ClientPage";

export default async function Page() {
  const operation_signal = await getOperationSignal();

  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      
      <ClientPage signals={operation_signal} />
    </main>
  );
}