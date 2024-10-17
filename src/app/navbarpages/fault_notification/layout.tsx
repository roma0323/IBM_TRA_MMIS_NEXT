import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import "@/styles/globals.css";

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
