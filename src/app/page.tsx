// export default function Page() {
//   return <h1>Hello, Home page!</h1>
// }


"use client";

import React from "react";
import { NavigationCard } from "../components/NavigationCard";
import { IbmLogoFrame } from "../components/IbmLogoFrame";
import Link from 'next/link'


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center gap-2.5 relative ">
      <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
        <div className="flex items-center gap-2.5 relative flex-1 self-stretch w-full grow ">

          <div className="relative w-3/5 h-screen bg-[url(/cover-photo.png)] bg-cover bg-right" />


          <div className="flex flex-col items-start gap-2.5 p-[30px] relative flex-1 self-stretch grow">

            <div className="flex flex-col items-end justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <IbmLogoFrame className="!h-[72.73px] !relative" size="small" theme="light" />
            </div>

            <div className="relative w-fit font-headline-1 font-[number:var(--headline-1-font-weight)]  text-[length:var(--headline-1-font-size)] tracking-[var(--headline-1-letter-spacing)] leading-[var(--headline-1-line-height)] [font-style:var(--headline-1-font-style)]">
              新 MMIS 績效管理指標
            </div>
            <Link href="/navbarpages/train_deployment">
              <NavigationCard
                logoClassName="bg-[url(/icon-train-deployment.png)]"
                text="車輛配置資訊"
                text1="各區段、車型資料、可用率儀表板" />
            </Link>

            <Link href="/navbarpages/locomotive_depot">

              <NavigationCard
                logoClassName="bg-[url(/icon-locomotive-depot.png)]"
                text="機務段車輛配置"
                text1="各機務段、車型配置資料、可用率查看"
              />
            </Link>

            <Link href="/navbarpages/factory_maintenance">

              <NavigationCard
                logoClassName="bg-[url(/icon-locomotive-depot.png)]"
                text="機廠檢修動態"
                text1="各機廠檢修動態"
              />
            </Link>
            <Link href="/navbarpages/fault_notification">

              <NavigationCard
                logoClassName="bg-[url(/icon-fault-notification.png)]"
                text="故障通報狀態"
                text1="每日故障報表、ATP 故障分析、年度故障報表"
              />
            </Link>
            <Link href="/navbarpages/maintenance_materials">

              <NavigationCard
                logoClassName="bg-[url(/icon-maintenance-materials.png)]"
                text="車輛維修用料"
                text1="各區段、車型維修資料儀表板"
              />
            </Link>



          </div>
        </div>
      </div>
    </div>
  );
};