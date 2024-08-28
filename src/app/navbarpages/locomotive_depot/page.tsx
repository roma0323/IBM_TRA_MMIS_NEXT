// import  ClientPage  from "./clientCom";
import ClientPage from "@/components/locomotive_depot/ClientPage";
import React, { Suspense } from "react";
import { getSumStatusDetailListMultiplierZeor } from "@/api/api";

export default async function Page() {
  const data = await getSumStatusDetailListMultiplierZeor();
  return (
    <main className=" grow bg-neutral-100 overflow-hidden relative">
        <ClientPage Data={data.data} />
    </main>
  );
}
