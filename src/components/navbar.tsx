"use client";

import React, { Suspense, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { DatePickerForm } from "@/components/ui/date_picker";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode_toggle";
import Image from "next/image";
import MidNavbar from "@/components/MidNavbar";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const navLinks = [
    {
      href: `/navbarpages/train_deployment/all_overview`,
      label: "車輛配置資訊",
      startsWith: "/navbarpages/train_deployment",
      subLinks: [
        {
          name: "總覽",
          path: "/navbarpages/train_deployment/all_overview",
        },
        {
          name: "動力車",
          path: "/navbarpages/train_deployment/power_overview",
        },
        {
          name: "非常態列車",
          path: "/navbarpages/train_deployment/unusual_overview",
        },
        {
          name: "城際列車",
          path: "/navbarpages/train_deployment/certain_train/intercity_train",
        },
        {
          name: "通勤列車",
          path: "/navbarpages/train_deployment/certain_train/commuter_train",
        },
        {
          name: "電力機車",
          path: "/navbarpages/train_deployment/certain_train/electric_locomotive",
        },
        {
          name: "柴電機車",
          path: "/navbarpages/train_deployment/certain_train/diesel_electric_locomotive",
        },
        {
          name: "柴液機車",
          path: "/navbarpages/train_deployment/certain_train/diesel_hydraulic_locomotive",
        },
        {
          name: "柴油客車",
          path: "/navbarpages/train_deployment/certain_train/diesel_passenger_car",
        },
        {
          name: "客車",
          path: "/navbarpages/train_deployment/certain_train/passenger_car",
        },
        {
          name: "貨車",
          path: "/navbarpages/train_deployment/certain_train/freight_car",
        },
      ],
    },
    {
      href: `/navbarpages/locomotive_depot`,
      label: "機務段配置資訊",
      startsWith: "/navbarpages/locomotive_depot",
      subLinks: [{ name: "總覽", path: "/navbarpages/locomotive_depot" }],
    },
    {
      href: `/navbarpages/factory_maintenance/factory_overview`,
      label: "機廠檢修資訊",
      startsWith: "/navbarpages/factory_maintenance",
      subLinks: [
        {
          name: "總覽",
          path: "/navbarpages/factory_maintenance/factory_overview",
        },
        {
          name: "機廠配置資訊",
          path: "/navbarpages/factory_maintenance/factory_depot",
        },
      ],
    },
    {
      href: `/navbarpages/fault_notification/daily_report`,
      label: "故障通報",
      startsWith: "/navbarpages/fault_notification",
      subLinks: [
        {
          name: "每日故障通報",
          path: "/navbarpages/fault_notification/daily_report",
        },
        {
          name: "年度故障通報",
          path: "/navbarpages/fault_notification/annual_report",
        },
        {
          name: "ATP故障分析",
          path: "/navbarpages/fault_notification/ATP_report",
        },
      ],
    },
    {
      href: `/navbarpages/maintenance_materials`,
      label: "庫存績效",
      startsWith: "/navbarpages/inventory_performance",
      subLinks: [],
    },
  ];
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";
  return (
    <div>
      <div className="h-fit w-full flex justify-between relative pr-6">
        <div className="flex ">
          <Link href="/">
            <Image
              className="relative hover:scale-110"
              alt="IBM Logo"
              src="/ibm-logo-frame.svg"
              width={112}
              height={96}
            />
          </Link>

          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              
              href={`${link.href}?date=${date}`}
              className={` px-3 flex   items-center ${
                pathname?.startsWith(link.startsWith) ? "active" : ""
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <DatePickerForm />
          <ModeToggle />
        </div>
      </div>

      <div
        className={`transition-opacity duration-1000 ease-in-out bg-gradient-to-b from-transparent to-white ${
          isHovered !== null ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(isHovered)}
        onMouseLeave={() => setIsHovered(null)}
      >
        {isHovered !== null && (
          <MidNavbar navItems={navLinks[isHovered].subLinks} />
        )}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>
  );
}
