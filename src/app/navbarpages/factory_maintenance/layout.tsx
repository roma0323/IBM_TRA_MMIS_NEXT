import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import "@/styles/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grow overflow-hidden relative flex flex-col">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
