import ClientPage from "@/components/train_deployment/detail_page/ClientPage";
import React, { Suspense } from "react";

interface PageProps {
  params: any;
}


export default function Page({ params }: PageProps) {
  return (
    <main className="grow bg-secondary-background overflow-hidden relative">
      <ClientPage key={params.id} carcatalogId={params.id} />
    </main>
  );
}