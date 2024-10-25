"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
 

  const navLinks = [
    {
      href: `/navbarpages/train_deployment/all_overview`,
      label: "車輛配置",
      startsWith: "/navbarpages/train_deployment",
      
    },
    {
      href: `/navbarpages/locomotive_depot`,
      label: "機務段配置",
      
    },
    {
      href: `/navbarpages/factory_maintenance/factory_overview`,
      label: "機廠檢修",
     
    },
    {
      href: `/navbarpages/fault_notification/daily_report`,
      label: "故障通報",
      
    },
    {
      href: `/navbarpages/maintenance_materials`,
      label: "庫存績效",
      
    },
    {
      href: `/navbarpages/car_type_spec`,
      label: "車輛諸元",

    },
    {
      href: `/navbarpages/operation_signal`,
      label: "營運燈號",
    },
  ];

  return (
    <>
      <div className="h-fit w-full flex justify-between absolute pr-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="relative hover:scale-110"
              alt="IBM Logo"
              src="/ibm-logo-frame.svg"
              width={112}
              height={96}
            />
          </Link>
          {/* <div>新 MMIS 績效管理指標</div> */}
        </div>
        <div className="flex items-center gap-2">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div
                key={link.href}
                className={`px-3 flex cursor-pointer items-center text-zinc-600 hover:text-primary`}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>
  );
}
