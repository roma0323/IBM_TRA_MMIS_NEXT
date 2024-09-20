"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DatePickerForm } from "@/components/ui/date_picker";

const trainTypes = [
  { id: "城際列車", name: "城際列車" },
  { id: "通勤列車", name: "通勤列車" },
  { id: "電力機車", name: "電力機車" },
  { id: "柴電機車", name: "柴電機車" },
  { id: "柴液機車", name: "柴液機車" },
  { id: "柴油客車", name: "柴油客車" },
  { id: "客車", name: "客車" },
  { id: "貨車", name: "貨車" },
];

const MidNavbar: React.FC = () => {
  // const router = useRouter();
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();
  let decodedLastPart = decodeURIComponent(pathname.split("/").pop() || "");
  const date = searchParams?.get("date") || "";

  // let type = "";
  // if (decodedLastPart == "all_overview") {
  //   type = "總覽";
  // }
  // if (decodedLastPart === "unusual_overview") {
  //   type = "非常態車輛";
  // }
  // if (decodedLastPart === "power_overview") {
  //   type = "動力車";
  // }

  // const handleSelect = (value: string) => {
  //   router.replace(`/navbarpages/train_deployment/${value}?date=${date}`);
  // };

  return (
    <div className="flex w-full px-6 sticky items-start gap-1">
      {/* <Select value={decodedLastPart} onValueChange={handleSelect}>
        <SelectTrigger className="w-fit">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all_overview">總覽</SelectItem>
          <SelectItem value="power_overview">動力車</SelectItem>
          <SelectItem value="unusual_overview">非常態車輛</SelectItem>
        </SelectContent>
      </Select> */}

      <Link
        href={`/navbarpages/train_deployment/all_overview/?date=${date}`}
        className={` ${
          decodedLastPart === "all_overview"
            ? "mid_nav_active"
            : "mid_nav_unactive"
        }`}
      >
        <div className="inline-flex h-fit items-center px-4 py-2">
        總覽
        </div>
      </Link>
      <Link
        href={`/navbarpages/train_deployment/power_overview/?date=${date}`}
        className={` ${
          decodedLastPart === "power_overview"
            ? "mid_nav_active"
            : "mid_nav_unactive"
        }`}
      >
        <div className="inline-flex h-fit items-center px-4 py-2">
        動力車
        </div>
      </Link>
      <Link
        href={`/navbarpages/train_deployment/unusual_overview/?date=${date}`}
        className={` ${
          decodedLastPart === "unusual_overview"
            ? "mid_nav_active"
            : "mid_nav_unactive"
        }`}
      >
        <div className="inline-flex h-fit items-center px-4 py-2">
        非常態車輛
        </div>
      </Link>
      {trainTypes.map((train) => (
        <Link
          href={`/navbarpages/train_deployment/certain_train/${train.name}?date=${date}`}
          className={` ${
            decodedLastPart === train.name
              ? "mid_nav_active"
              : "mid_nav_unactive"
          }`}
          key={train.id}
        >
          <div className="inline-flex h-fit items-center px-4 py-2">
            {train.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MidNavbar />
    </Suspense>
  );
}
