// import  ClientPage  from "./clientCom";
import ClientPage from "@/components/factory_maintenance/factoryDepot/ClientPage";
import React, { Suspense } from "react";

export default async function Page() {
  return (
    <main className=" grow bg-secondary-background overflow-hidden relative">
      <ClientPage />
    </main>
  );
}
