import MidNavbar from "@/components/MidNavbar";
import React, { Suspense } from "react";
import Loading from "@/components/Loading";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "總覽", path: "/navbarpages/factory_maintenance" },
    {
      name: "車輛可營運燈號列表",
      path: "/navbarpages/factory_maintenance/operational_lights",
    },
  ];
  return (
    <section className="flex-grow flex flex-col relative">
      <Suspense fallback={<div>MidNavBar Loading...</div>}><MidNavbar navItems={navItems} /></Suspense>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
