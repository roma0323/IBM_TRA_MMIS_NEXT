import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import MidNavbar from "@/components/MidNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "每日故障通報", path: "/navbarpages/fault_notification/daily_report" },
    { name: "年度故障通報", path: "/navbarpages/fault_notification/annual_report" },
    { name: "ATP故障分析", path: "/navbarpages/fault_notification/ATP_report" },
   
  ];
  return (
    <section className="grow overflow-hidden relative flex flex-col">
      <Suspense fallback={<div>MidNavBar Loading...</div>}><MidNavbar navItems={navItems} /></Suspense>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
