// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import React from "react";
import { Header } from "@/components/factory_maintenance/Header";
import { StatusChip } from "@/components/factory_maintenance/StatusChip";
import { LabelChip } from "@/components/locomotive_depot/LabelChip";
import { Table } from "@/components/inventory_performance/Table";


export default function Page() {
return(

    <div className="flex flex-col items-start gap-2.5 p-5 relative bg-neutral-100">
      庫存管理
    </div>
  );

}