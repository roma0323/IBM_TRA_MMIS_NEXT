// // `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
// export default function Page() {
//     return <h1>Hello, trrain deployment Page!</h1>
//   }


"use client";

import React from "react";
import { DataCard } from "@/components/homepage/DataCard";
import { OverviewCard } from "@/components/train_deployment/OverviewCard";
import UseRateChart from "@/components/train_deployment/UseRateChart";

export default function Page() {
  return (



    <div className="grid grid-cols-4 flex-grow  relative  bg-gray-200 overflow-hidden ">

      <OverviewCard text="柴液機車" />
      <OverviewCard text="柴液機車" />
      <OverviewCard text="柴液機車" />
      <OverviewCard text="柴液機車" />
      <OverviewCard text="柴液機車" />
      <OverviewCard text="柴液機車" />
      <OverviewCard text="柴液機車" />
      <OverviewCard text="柴液機車" />
    </div>




  );
};