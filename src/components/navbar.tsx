"use client";

import React, { Suspense, useState, useEffect, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { DatePickerForm } from "@/components/ui/date_picker";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode_toggle";
import Image from "next/image";
import MidNavbar from "@/components/MidNavbar";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const date = searchParams?.get("date") || "";
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState<number | null>(null);

  const navLinks = useMemo(
    () => [
      {
        href: `/navbarpages/train_deployment/all_overview`,
        label: "車輛配置",
        startsWith: `/navbarpages/train_deployment`,
        subLinks: [
          {
            name: "車輛總覽",
            path: `/navbarpages/train_deployment/all_overview`,
          },
          {
            name: "動力車",
            path: `/navbarpages/train_deployment/power_overview`,
          },
          {
            name: "非常態列車",
            path: `/navbarpages/train_deployment/unusual_overview`,
          },
          {
            name: "城際列車",
            path: `/navbarpages/train_deployment/certain_train/intercity_train`,
          },
          {
            name: "通勤列車",
            path: `/navbarpages/train_deployment/certain_train/commuter_train`,
          },
          {
            name: "電力機車",
            path: `/navbarpages/train_deployment/certain_train/electric_locomotive`,
          },
          {
            name: "柴電機車",
            path: `/navbarpages/train_deployment/certain_train/diesel_electric_locomotive`,
          },
          {
            name: "柴液機車",
            path: `/navbarpages/train_deployment/certain_train/diesel_hydraulic_locomotive`,
          },
          {
            name: "柴油客車",
            path: `/navbarpages/train_deployment/certain_train/diesel_passenger_car`,
          },
          {
            name: "客車",
            path: `/navbarpages/train_deployment/certain_train/passenger_car`,
          },
         
        ],
      },
      {
        href: `/navbarpages/locomotive_depot`,
        label: "機務段配置",
        startsWith: `/navbarpages/locomotive_depot`,
        subLinks: [
          {
            name: "機務段總覽",
            path: `/navbarpages/locomotive_depot`,
          },
        ],
      },
      {
        href: `/navbarpages/factory_maintenance/factory_overview`,
        label: "機廠檢修",
        startsWith: `/navbarpages/factory_maintenance`,
        subLinks: [
          {
            name: "機廠檢修總覽",
            path: `/navbarpages/factory_maintenance/factory_overview`,
          },
          {
            name: "機廠配置",
            path: `/navbarpages/factory_maintenance/factory_depot`,
          },
        ],
      },
      {
        href: `/navbarpages/fault_notification/daily_report`,
        label: "故障通報",
        startsWith: `/navbarpages/fault_notification`,
        subLinks: [
          {
            name: "每日故障通報",
            path: `/navbarpages/fault_notification/daily_report`,
          },
          {
            name: "年度故障通報",
            path: `/navbarpages/fault_notification/annual_report`,
          },
          {
            name: "ATP故障分析",
            path: `/navbarpages/fault_notification/ATP_report`,
          },
        ],
      },
      {
        href: `/navbarpages/maintenance_materials`,
        label: "庫存績效",
        startsWith: `/navbarpages/maintenance_materials`,
        subLinks: [
          {
            name: "庫存績效總覽",
            path: `/navbarpages/maintenance_materials`,
          },
        ],
      },
      {
        href: `/navbarpages/car_type_spec`,
        label: "車輛諸元",
        startsWith: `/navbarpages/car_type_spec`,
        subLinks: [
          {
            name: "車輛諸元總覽",
            path: `/navbarpages/car_type_spec`,
          },
        ],
      },
      {
        href: `/navbarpages/operation_signal`,
        label: "營運燈號",
        startsWith: `/navbarpages/operation_signal`,
        subLinks: [
          {
            name: "營運燈號總覽",
            path: `/navbarpages/operation_signal`,
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const index = pathname
      ? navLinks.findIndex((link) => pathname.startsWith(link.startsWith))
      : -1;
    setCurrentPageIndex(index !== -1 ? index : null);
  }, [pathname, navLinks]);

  return (
    <div>
      <div className="h-fit w-full flex justify-between relative pr-6">
        <div className="flex ">
          <div className={`p-4  flex cursor-pointer items-center `}>
            <Link href={{ pathname: `/` }}>
              <Image
                className="relative hover:scale-110  h-[1vw] w-auto min-h-[2rem] "
                alt="IBM Logo"
                src={`/ibm-logo-frame.svg`}
                sizes="10rem"
                width="0"
                height="0"
              />
            </Link>
          </div>

          {navLinks.map((link, index) => (
            <Link
              href={`${link.href}?date=${date}`}
              key={link.href}
              className={`px-3 flex cursor-pointer items-center ${
                pathname?.startsWith(link.startsWith) ? "active" : ""
              } ${isHovered === index ? "mid_nav_unactive" : ""}`}
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

      <div>
        {isHovered !== null ? (
          <div
            onMouseEnter={() => setIsHovered(isHovered)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <MidNavbar navItems={navLinks[isHovered].subLinks} />
          </div>
        ) : (
          currentPageIndex !== null && (
            <MidNavbar navItems={navLinks[currentPageIndex].subLinks} />
          )
        )}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <Navbar />
    </Suspense>
  );
}
