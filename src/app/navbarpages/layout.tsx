import React, { Suspense } from "react";
import {NavigationMenuDemo} from "@/components/NavigationMenuDemo";
import Navbar from "@/components/navbar";
import Loading from "@/components/Loading"; // Import your custom Loading component

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" h-full overflow-hidden relative flex flex-col">
      <Navbar />
      {/* <NavigationMenuDemo /> */}
      {children}
    </section>
  );
}
