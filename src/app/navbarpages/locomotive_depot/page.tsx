// import  ClientPage  from "./clientCom";
import  ClientPage  from "@/components/locomotive_depot/ClientPage";
import React, { Suspense } from 'react';
import Loading from "@/components/Loading"; 
import { getSumStatusDetailListMultiplierZeor } from "@/api/api";


export default async function Page() {
  const data = await getSumStatusDetailListMultiplierZeor();
  return    <main className="flex flex-col h-full">
     <Suspense fallback={<Loading />}>
     <ClientPage Data={data.data} />
     </Suspense>
      </main>
      
}