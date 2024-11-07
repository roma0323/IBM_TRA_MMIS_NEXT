// pages/Page.tsx

import React from "react";
import ClientPage from "@/components/operation_signal/ClientPage";

export default function Page() {
  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      <ClientPage />
    </main>
  );
}