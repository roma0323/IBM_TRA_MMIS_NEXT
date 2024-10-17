import React from "react";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="layout_section">
      <Navbar />
      {children}
    </section>
  );
}
