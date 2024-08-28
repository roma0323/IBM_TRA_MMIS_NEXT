import React from "react";
import Link from "next/link";
import { DatePickerForm } from "@/components/ui/date_picker";

const MidNavbar: React.FC = () => {
  return (
    <div className="w-full flex flex-col px-6   sticky">
      <div className="h-[8dvh]  flex items-center  justify-between  relative">
        <div className="flex items-center">
          <span className="text-3xl">車輛配置資訊/</span>
          <span className="text-3xl text-[#397eff]">總覽</span>
        </div>
        <DatePickerForm />
      </div>

      <div className="flex items-start gap-1">
        <Link href={`/navbarpages/locomotive_depot`} className="mid_nav_active">
          <div className="inline-flex h-10 items-center px-4">總覽</div>
        </Link>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
      <MidNavbar />
    // </Suspense>
  );
}
