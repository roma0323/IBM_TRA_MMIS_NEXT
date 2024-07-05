// export default function Page() {
//   return <h1>Hello, Home page!</h1>
// }


"use client";

import React from "react";
import { NavigationCard } from "../components/NavigationCard";
import { IbmLogoFrame } from "../components/IbmLogoFrame";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center gap-2.5 relative bg-white">
      <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
        <div className="flex items-center gap-2.5 relative flex-1 self-stretch w-full grow bg-white">
          <div className="relative w-[881px] h-[1024px] bg-[url(/cover-photo.png)] bg-[100%_100%]" />
          <div className="flex flex-col items-start gap-2.5 p-[30px] relative flex-1 self-stretch grow">
            <div className="flex flex-col items-end justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            </div>
            <div className="flex flex-col items-end justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <IbmLogoFrame className="!h-[72.73px] !relative" size="small" theme="light" />
            </div>
            <div className="relative w-fit font-headline-1 font-[number:var(--headline-1-font-weight)] text-[#4e4e4e] text-[length:var(--headline-1-font-size)] tracking-[var(--headline-1-letter-spacing)] leading-[var(--headline-1-line-height)] [font-style:var(--headline-1-font-style)]">
              新 MMIS 績效管理指標
            </div>
            <NavigationCard 
              className="!flex-[0_0_auto]" 
              frameClassName="!mr-[-25.00px]"
              logoClassName="bg-[url(/icon-train-deployment.png)]" 
              property1="default"
              text="車輛配置資訊"
              text1="各區段、車型資料、可用率儀表板" />
            <NavigationCard
              className="!border-white !flex-[0_0_auto] !bg-[unset]"
              frameClassName="!mr-[-25.00px]"
              logoClassName="bg-[url(/icon-locomotive-depot.png)]"
              property1="default"
              text="機務段車輛配置"
              text1="各機務段、車型配置資料、可用率查看"
            />
            <NavigationCard
              className="!border-white !flex-[0_0_auto] !bg-[unset]"
              frameClassName="!mr-[-25.00px]"
              logoClassName="bg-[url(/icon-locomotive-depot.png)]"
              property1="default"
              text="機廠檢修動態"
              text1="各機廠檢修動態"
            />
            <NavigationCard
              className="!border-white !flex-[0_0_auto] !bg-[unset]"
              frameClassName="!mr-[-25.00px]"
              logoClassName="bg-[url(/icon-maintenance-materials.png)]"
              property1="default"
              text="車輛維修用料"
              text1="各區段、車型維修資料儀表板"
            />

            <NavigationCard
              className="!border-white !flex-[0_0_auto] !bg-[unset]"
              frameClassName="!mr-[-25.00px]"
              logoClassName="bg-[url(/icon-fault-notification.png)]"
              property1="default"
              text="故障通報狀態"
              text1="每日故障報表、ATP 故障分析、年度故障報表"
            />
          </div>
        </div>
      </div>
    </div>
  );
};