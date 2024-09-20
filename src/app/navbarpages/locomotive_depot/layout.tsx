import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import MidNavbar from "@/components/MidNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "總覽", path: "/navbarpages/locomotive_depot" },
   
  ];
  return (
    <section className="grow overflow-hidden relative flex flex-col">
      <MidNavbar navItems={navItems} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
