// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

"use client";

import React from "react";
import { CellTypeBodyWrapper } from "@/components/factory_maintenance/CellTypeBodyWrapper";
import { Header } from "@/components/factory_maintenance/Header";
import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";



export default function Page() {
  return (

    <div className="grid grid-cols-7  flex-grow relative bg-neutral-100  gap-4 p-6  ">


      <div className=" col-span-2 bg-white  items-center relative rounded-lg overflow-hidden">
        <div className="flex flex-col  items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
        城際列車 - 機務段分配
        </div>

<TrainInFactoryCard 
      // onClick={handleClick}
      totalVehicles={50}
      cumulativeAchievementRate={24}
      cumulativeRepairedVehicles={25}
      cumulativeTargetRate={64}
      annualTargetNumber={113}
    />      

        
      </div>

      <div className="col-span-3 gap-2.5 flex-1 self-stretch grow flex flex-col items-start relative">
        <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
          <div className="rounded-[5px_5px_0px_0px] overflow-hidden flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-[normal]">
              機廠檢修資料 - 在廠資料
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 px-3 py-0 relative flex-1 self-stretch w-full grow bg-white rounded-[5px] overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-[5px] pt-2.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
              <div className="flex items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
                  <div className="font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#646464] relative w-fit text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                    ALL（187）
                  </div>
                </div>
                <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#397eff]">
                  <div className="relative w-fit font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                    已進廠（96）
                  </div>
                </div>
                <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
                  <div className="relative w-fit font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                    已開工（90）
                  </div>
                </div>
                <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
                  <div className="font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#3034380d] relative w-fit text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                    已完工（3）
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end relative self-stretch w-full flex-[0_0_auto] rounded overflow-hidden">
              <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-[#3034380d] border-b [border-bottom-style:solid]">
                <Header cellType="header" className="!flex-1 !grow" height="normal" />
                <Header
                  cellType="header"
                  className="!flex-1 !grow"
                  headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                  height="normal"
                  text="型號"
                />
                <Header
                  cellType="header"
                  className="!flex-1 !grow"
                  headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                  height="normal"
                  text="在廠天數"
                />
                <Header
                  cellType="header"
                  className="!flex-1 !grow"
                  headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                  height="normal"
                  text="施工天數"
                />
                <Header
                  cellType="header"
                  className="!flex-1 !grow"
                  headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                  height="normal"
                  text="提前 / 逾期天數"
                />
                <Header
                  cellType="header"
                  className="!flex-1 !grow"
                  headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                  height="normal"
                  text="檢修級別"
                />
                <Header
                  cellType="header"
                  className="!flex-1 ![justify-content:unset] !items-start !grow"
                  headerNameWrapperClassName="!rounded-[10px] !mr-[-19.71px] ![justify-content:unset] !flex-[unset] !overflow-hidden !w-[140px] !grow-[unset]"
                  height="normal"
                  text="開工狀態"
                />
              </div>
              <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid]">
                <Header cellType="body-label" className="!self-stretch !flex-1 !grow" height="normal" />
                <Header cellType="body" className="!self-stretch !flex-1 !grow" height="normal" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="196" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="29" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="-" />
                <Header cellType="body" className="!flex-1 !grow" height="normal" text1="c1" />
                <CellTypeBodyWrapper cellType="body-status" className="!flex-1 !grow" />
              </div>
              <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid]">
                <Header cellType="body-label" className="!self-stretch !flex-1 !grow" height="normal" />
                <Header cellType="body" className="!self-stretch !flex-1 !grow" height="normal" text1="35FPK10400" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="196" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="29" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="-" />
                <Header cellType="body" className="!flex-1 !grow" height="normal" text1="c1" />
                <CellTypeBodyWrapper
                  cellType="body-status"
                  className="!flex-1 !grow"
                  ellipseClassName="!bg-[#36aa00]"
                  statusChipClassName="!border-[#36aa00] !border !border-solid"
                  statusChipWrapperClassName="!mr-[-19.71px] !flex-[unset] !w-[140px] !grow-[unset]"
                  text="已完工"
                />
              </div>
              <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid]">
                <Header cellType="body-label" className="!self-stretch !flex-1 !grow" height="normal" />
                <Header cellType="body" className="!self-stretch !flex-1 !grow" height="normal" text1="35FPK10400" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="196" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="29" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="-" />
                <Header cellType="body" className="!flex-1 !grow" height="normal" text1="c1" />
                <CellTypeBodyWrapper cellType="body-status" className="!flex-1 !grow" text="已開工" />
              </div>
              <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid]">
                <Header cellType="body-label" className="!self-stretch !flex-1 !grow" height="normal" />
                <Header cellType="body" className="!self-stretch !flex-1 !grow" height="normal" text1="35FPK10400" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="196" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="29" />
                <Header cellType="body" className="!flex-1 !items-start !grow" height="normal" text1="-" />
                <Header cellType="body" className="!flex-1 !grow" height="normal" text1="c1" />
                <CellTypeBodyWrapper
                  cellType="body-status"
                  className="!flex-1 !grow"
                  ellipseClassName="!bg-[#36aa00]"
                  statusChipClassName="!border-[#36aa00] !border !border-solid"
                  statusChipWrapperClassName="!mr-[-19.71px] !flex-[unset] !w-[140px] !grow-[unset]"
                  text="已完工"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}