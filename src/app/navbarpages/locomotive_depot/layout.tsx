import MidNavbar from "@/components/locomotive_depot/mid_navbar";
import React, { Suspense } from "react";
import Loading from "@/components/Loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grow overflow-hidden relative flex flex-col">
      <MidNavbar />
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </section>
  );
}
