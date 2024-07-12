// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
"use client";

import React from "react";
import { Header } from "@/components/factory_maintenance/Header";
import { StatusChip } from "@/components/factory_maintenance/StatusChip";
import { LabelChip } from "@/components/locomotive_depot/LabelChip";
import { Table } from "@/components/inventory_performance/Table";


export default function Page() {
return(

    <div className="flex flex-col items-start gap-2.5 p-5 relative bg-neutral-100">
      <div className="flex items-start gap-5 relative flex-1 self-stretch w-full grow">
        <div className="flex flex-col w-[209px] items-start relative self-stretch">
          <div className="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
            <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#4e4e4e] text-base relative w-fit font-normal tracking-[0] leading-[normal]">
              篩選列表
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 px-2.5 py-5 relative flex-1 self-stretch w-full grow bg-white rounded-[0px_0px_5px_5px] overflow-hidden">
            <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-[5px] relative flex-1 grow">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <img className="relative w-4 h-4" alt="Drag indicator" src="image.png" />
                  <div className="mt-[-1.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-xs relative w-fit font-normal tracking-[0] leading-[normal]">
                    年度（必選）
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="112 年度" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="110 年度" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="109 年度" />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-[5px] relative flex-1 grow">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <img className="relative w-4 h-4" alt="Drag indicator" src="drag-indicator.png" />
                  <div className="mt-[-1.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-xs relative w-fit font-normal tracking-[0] leading-[normal]">
                    配屬段（必選）
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="機務處" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="七堵機務段" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="臺北機務段" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="新竹機務段" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="彰化機務段" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="嘉義機務段" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="高雄機務段" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="台東機務段" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="花蓮機務段" />
                  <LabelChip className="!flex-[0_0_auto]" property1="default" text="宜蘭機務段" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-2.5 relative self-stretch flex-[0_0_auto]">
          <div className="flex flex-col w-[401px] items-start relative flex-1 grow">
            <div className="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
              <div className="mt-[-1.00px] font-title-title-medium-demi text-[#4e4e4e] text-[length:var(--title-title-medium-demi-font-size)] relative w-fit font-[number:var(--title-title-medium-demi-font-weight)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                機務處-庫存相關資料
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white">
              <div className="flex flex-col items-center justify-center gap-2.5 px-0 py-2.5 relative flex-1 grow bg-white rounded-[5px] overflow-hidden">
                <div className="flex items-end justify-between p-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-center gap-2.5 px-2 py-2.5 relative self-stretch flex-[0_0_auto]">
                    <div className="flex flex-col w-10 items-center relative flex-1 grow overflow-hidden">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          2500m
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          2000m
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          1500m
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          1000m
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          500m
                        </div>
                      </div>
                    </div>
                    <div className="[font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      {""}
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-38.00px] mr-[-38.00px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[39px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      1月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-54.50px] mr-[-54.50px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-4 relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      2月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-60.50px] mr-[-60.50px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[22px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      3月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-63.00px] mr-[-63.00px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="relative self-stretch w-[25px] bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      4月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-64.00px] mr-[-64.00px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[19px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      5月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-70.00px] mr-[-70.00px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[17px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      6月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-76.00px] mr-[-76.00px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="relative self-stretch w-[25px] bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      7月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-81.00px] mr-[-81.00px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[18px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      8月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-78.00px] mr-[-78.00px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[67px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="ml-[-3.00px] mr-[-3.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[#4e4e4e] text-[10px] relative w-fit font-normal tracking-[0] leading-[normal]">
                      9月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-75.50px] mr-[-75.50px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[45px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="relative w-fit ml-[-6.00px] mr-[-6.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                      10月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-75.50px] mr-[-75.50px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[67px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="relative w-fit ml-[-6.00px] mr-[-6.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                      11月
                    </div>
                  </div>
                  <div className="flex flex-col w-[26px] items-center gap-2.5 px-2 py-2.5 relative ml-[-0.58px] overflow-hidden">
                    <div className="ml-[-75.50px] mr-[-75.50px] flex h-2.5 items-center relative self-stretch w-full bg-[#487ca5] rounded-[5px] overflow-hidden -rotate-90">
                      <div className="w-[126px] relative self-stretch bg-[#c3554e] rounded-[5px]" />
                    </div>
                    <div className="relative w-fit ml-[-6.00px] mr-[-6.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                      12月
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <StatusChip status="normal" text="領用金額" />
                  <StatusChip status="normal" text="庫存餘額" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 px-[5px] py-0 relative flex-1 self-stretch w-full grow bg-white rounded-[0px_0px_5px_5px] overflow-hidden">
              <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] rounded overflow-hidden flex relative">
                <div className="flex h-8 items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-[#3034380d] overflow-hidden border-b [border-bottom-style:solid]">
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="年月"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="庫存餘額"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="領用金額"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="1 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="3 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="4 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="5 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header cellType="body-header" height="normal" text="6 月" />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="7 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="8 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="9 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="10 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="11 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
                <div className="h-8 overflow-hidden border-[#3034380d] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body-header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="12 月"
                  />
                  <Table className="!self-stretch !flex-1 !grow" property1="flex" text="1,125,578,978" />
                  <Table
                    className="!h-[37px] !mt-[-7.50px] !mb-[-7.50px] !flex-1 !grow"
                    headerFlexClassName="!mt-[unset] !mb-[unset]"
                    property1="flex"
                    text="136,500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch grow">
          <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
              <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#4e4e4e] text-base relative w-fit font-normal tracking-[0] leading-[normal]">
                庫存相關資料表格
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5 p-2.5 relative flex-1 self-stretch w-full grow bg-white rounded-[5px] overflow-hidden">
              <div className="flex flex-col items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#646464]">
                  <div className="flex w-[100px] h-10 items-center justify-center gap-5 relative border-b-2 [border-bottom-style:solid] border-[#397eff]">
                    <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#4e4e4e] text-sm text-center relative w-fit font-normal tracking-[0] leading-[normal]">
                      庫存餘額
                    </div>
                  </div>
                  <div className="inline-flex items-center relative self-stretch flex-[0_0_auto] opacity-50">
                    <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#3034380d] text-sm relative w-fit font-normal tracking-[0] leading-[normal]">
                      領用金額
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col items-center justify-end self-stretch w-full flex-[0_0_auto] rounded overflow-hidden flex relative">
                <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-[#3034380d] border-b [border-bottom-style:solid]">
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="廠段"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="料號"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="材料名稱"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="單價"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="數量"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="材料單位"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="金額"
                  />
                  <Header
                    cellType="header"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="金額占比"
                  />
                </div>
                <div className="justify-center flex-[0_0_auto] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="WAY00"
                  />
                  <Header cellType="body" height="normal" text="1622240330" />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="驅動裝置附車軸"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2,294,554"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="15"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="ST"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="37,418,370"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2.24%"
                  />
                </div>
                <div className="justify-center flex-[0_0_auto] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="WAY00"
                  />
                  <Header cellType="body" height="normal" text="1622240330" />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="驅動裝置附車軸"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2,294,554"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="15"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="ST"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="37,418,370"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2.24%"
                  />
                </div>
                <div className="justify-center flex-[0_0_auto] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="WAY00"
                  />
                  <Header cellType="body" height="normal" text="1622240330" />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="驅動裝置附車軸"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2,294,554"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="15"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="ST"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="37,418,370"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2.24%"
                  />
                </div>
                <div className="justify-center flex-[0_0_auto] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="WAY00"
                  />
                  <Header cellType="body" height="normal" text="1622240330" />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="驅動裝置附車軸"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2,294,554"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="15"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="ST"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="37,418,370"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2.24%"
                  />
                </div>
                <div className="justify-center flex-[0_0_auto] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="WAY00"
                  />
                  <Header cellType="body" height="normal" text="1622240330" />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="驅動裝置附車軸"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2,294,554"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="15"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="ST"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="37,418,370"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2.24%"
                  />
                </div>
                <div className="justify-center flex-[0_0_auto] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="WAY00"
                  />
                  <Header cellType="body" height="normal" text="1622240330" />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="驅動裝置附車軸"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2,294,554"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="15"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="ST"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="37,418,370"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2.24%"
                  />
                </div>
                <div className="justify-center flex-[0_0_auto] flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full bg-white border-b [border-bottom-style:solid]">
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="WAY00"
                  />
                  <Header cellType="body" height="normal" text="1622240330" />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="驅動裝置附車軸"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2,294,554"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="15"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="ST"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="37,418,370"
                  />
                  <Header
                    cellType="body"
                    className="!flex-1 !grow"
                    headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                    height="normal"
                    text="2.24%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}