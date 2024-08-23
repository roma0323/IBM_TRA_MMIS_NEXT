// "use client";
import React from "react";
import { NavigationCard } from "../components/homepage/NavigationCard";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

// Get the current date in YYYY-MM-DD format
let currentDate = new Date();
// Subtract one day
currentDate.setDate(currentDate.getDate());
// Format the date to 'yyyy-MM-dd'
let formattedDate = format(currentDate, "yyyy-MM-dd");

const navigationData = [
  {
    href: `/navbarpages/train_deployment?type=all&date=${formattedDate}`,
    logoClassName: `${process.env.BASEPATH}/icon-train-deployment.png`,
    text: "車輛配置資訊",
    text1: "各區段、車型資料、可用率儀表板",
  },
  {
    href: `/navbarpages/locomotive_depot?date=${formattedDate}`,
    logoClassName: `${process.env.BASEPATH}/icon-locomotive-depot.svg`,
    text: "機務段車輛配置",
    text1: "各機務段、車型配置資料、可用率查看",
  },
  {
    href: `/navbarpages/factory_maintenance?date=${formattedDate}`,
    logoClassName: `${process.env.BASEPATH}/icon-locomotive-depot.svg`,

    text: "機廠檢修動態",
    text1: "各機廠檢修動態",
  },
  {
    href: `/navbarpages/fault_notification?date=${formattedDate}`,
    logoClassName: `${process.env.BASEPATH}/icon-fault-notification.svg`,
    text: "故障通報狀態",
    text1: "每日故障報表、ATP 故障分析、年度故障報表",
  },
  {
    href: `/navbarpages/maintenance_materials?date=${formattedDate}`,
    logoClassName: `${process.env.BASEPATH}/icon-maintenance-materials.svg`,
    text: "車輛維修用料",
    text1: "各區段、車型維修資料儀表板",
  },
];

export default function Page() {
  return (
    <div className="flex h-full relative ">
      <div
        style={{
          backgroundImage: `url(${process.env.BASEPATH}/cover-photo.png)`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          width: "60%",
          height: "100%",
          position: "relative",
        }}
      />

      <div className="flex flex-col gap-2 p-16  flex-1 ">
        <div className="flex flex-col items-end   w-full ">
          <Image
            className="relative"
            alt="ibm-logo-frame.svg"
            src={`${process.env.BASEPATH}/ibm-logo-frame.svg`}
            width={80}
            height={80}
          />
        </div>

        <div className="text-2xl text-sky-800 mb-4">新 MMIS 績效管理指標</div>

        {navigationData.map((item, index) => (
          <div key={index} className=" w-full">
            <Link href={item.href}>
              <NavigationCard
                logoClassName={item.logoClassName}
                text={item.text}
                text1={item.text1}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
