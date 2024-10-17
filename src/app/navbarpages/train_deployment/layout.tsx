import React, { Suspense } from "react";
import "@/styles/globals.css";
import Loading from "@/components/Loading";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="layout_section">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
