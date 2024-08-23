// pages/[param].js
"use client";
import React, { Suspense } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

const MidNavbar: React.FC = () => {
  const pathname = usePathname();
  let content;

  const searchParam = useSearchParams();
  const id = searchParam ? searchParam.get("id") : "";

  switch (pathname) {
    case "/navbarpages/fault_notification":
      content = "每日故障通報 Ａ＋Ｂ";
      break;
  }
  return (
    <div>
      <div className="flex  flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="h-[10vh] w-full flex  items-center gap-5 px-6 relative flex-[0_0_auto] ">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className=" text-3xl ">故障通報/</div>
            </div>
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="text-3xl  text-[#397eff]">
                {content}
                {id}
              </div>
            </div>
          </div>

          <div className="relative flex-1 grow" />

          <div className="inline-flex items-center justify-center gap-2.5 p-[5px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-end justify-center gap-[5px] p-2.5 relative flex-[0_0_auto] rounded-[5px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] font-label-label-medium-dem font-[number:var(--label-label-medium-dem-font-weight)]  text-[length:var(--label-label-medium-dem-font-size)] tracking-[var(--label-label-medium-dem-letter-spacing)] leading-[var(--label-label-medium-dem-line-height)] [font-style:var(--label-label-medium-dem-font-style)]">
                上次更新時間
              </div>
              <p className="font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)]  text-[length:var(--title-title-medium-semi-font-size)] relative w-fit tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                113 / 5 / 8&nbsp;&nbsp;(三) 12:20
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5px] pt-2.5 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto] ">
          <div className="flex items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <Link
              href={{
                pathname: "/navbarpages/fault_notification",
              }}
              className={`link ${pathname === "/navbarpages/fault_notification" ? "mid_nav_active" : "mid_nav_unactive"}`}
            >
              <div className=" inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] ">
                每日故障通報 Ａ＋Ｂ
              </div>
            </Link>
            <Link
              href={{
                pathname: "/navbarpages/fault_notification/annual_report",
                query: { id: "故障通報數據年度報告" },
              }}
              className={`link ${id === "故障通報數據年度報告" ? "mid_nav_active" : "mid_nav_unactive"}`}
            >
              <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] ">
                故障通報數據年度報告
              </div>
            </Link>
          </div>
        </div>
      </div>
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
