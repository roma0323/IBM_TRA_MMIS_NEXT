"use client";

import React from "react";
import { LabelChip } from "@/components/factory_maintenance/LabelChip";
import { StatusChip } from "@/components/factory_maintenance/StatusChip";


export default function Page() {
  return (
    <div className="flex flex-col items-start gap-2.5 p-4 relative bg-neutral-100">
      <div className="flex items-start gap-4 relative flex-1 self-stretch w-full grow">
        <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto] bg-white rounded-[5px]">
          <div className="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
            <div className="font-title-title-medium-demi text-[length:var(--title-title-medium-demi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-medium-demi-font-weight)] text-[#4e4e4e] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
              篩選列表
            </div>
          </div>
          <div className="flex flex-col w-[323px] items-start gap-5 px-2.5 py-5 relative flex-1 grow rounded-[0px_0px_5px_5px] overflow-hidden">
            <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-[5px] relative flex-1 grow">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <img className="relative w-4 h-4" alt="Drag indicator" src="drag-indicator-2.png" />
                  <div className="[font-family:'Noto_Sans_JP-Regular',Helvetica] text-xs relative w-fit mt-[-1.00px] font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                    配屬段
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <LabelChip selection="selected" text="七堵機務段" />
                  <LabelChip selection="unselected" text="台北機務段" />
                  <LabelChip selection="unselected" text="新竹機務段" />
                  <LabelChip selection="unselected" text="彰化機務段" />
                  <LabelChip selection="unselected" text="嘉義機務段" />
                  <LabelChip selection="unselected" text="高雄機務段" />
                  <LabelChip selection="unselected" text="台東機務段" />
                  <LabelChip selection="unselected" text="花蓮機務段" />
                  <LabelChip selection="unselected" text="宜蘭機務段" />
                </div>
              </div>
            </div>
            <div className="flex-col flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                  <img className="relative w-4 h-4" alt="Drag indicator" src="drag-indicator.png" />
                  <div className="[font-family:'Noto_Sans_JP-Regular',Helvetica] text-xs relative w-fit mt-[-1.00px] font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                    車號
                  </div>
                </div>
                <div className="flex flex-col h-11 items-start justify-around gap-[5px] relative self-stretch w-full">
                  <div className="flex items-center justify-between p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] border border-solid border-[#397eff]">
                    <div className="relative w-fit [font-family:'Noto_Sans_TC-Bold',Helvetica] font-bold text-[#4e4e4e] text-[10px] tracking-[0] leading-4 whitespace-nowrap">
                      EMU3300
                    </div>
                    <img className="relative w-5 h-5" alt="Search" src="search.png" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="[font-family:'Noto_Sans_JP-Regular',Helvetica] text-xs relative w-fit mt-[-1.00px] font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                  查詢結果
                </div>
                <StatusChip status="critical" text="EMU3240"/>
              </div>
            </div>
            <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-[5px] relative flex-1 grow">
                <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <img className="relative w-4 h-4" alt="Drag indicator" src="image.png" />
                  <div className="[font-family:'Noto_Sans_JP-Regular',Helvetica] text-xs relative w-fit mt-[-1.00px] font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                    燈號
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-center justify-center gap-2.5 px-3 py-1 relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-[#397eff]">
                    <div className="[font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative w-fit mt-[-1.00px] font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      紅燈
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-center justify-center gap-2.5 px-3 py-1 relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-[#397eff]">
                    <div className="[font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative w-fit mt-[-1.00px] font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      綠燈
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 relative flex-1 self-stretch grow">
          
          
          <div className="flex flex-col w-[1077px] items-start relative flex-1 grow mr-[-8.00px]">
            <div className="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-[normal]">
                EMU3000
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5 p-5 relative flex-1 self-stretch w-full grow bg-white rounded-[0px_0px_5px_5px]">
              <div className="self-stretch w-full flex items-start gap-2.5 p-2.5 relative flex-1 grow rounded-[10px] overflow-hidden">
                <StatusChip status="normal" text="EMU3240"/>
                <StatusChip status="normal" text="EMU3240" />
                <StatusChip status="normal" text="EMU3250" />
                <StatusChip

                  status="critical"
                  text="EMU3260"
                />
                <StatusChip status="normal" text="EMU3270" />
                <StatusChip status="normal" text="EMU3280" />
                <StatusChip

                  status="critical"
                  text="EMU3290"
                />
                <StatusChip

                  status="critical"
                  text="EMU3300"
                />
                <StatusChip status="normal" text="EMU3310" />
                <StatusChip status="normal" text="EMU3220" />
                <StatusChip

                  status="critical"
                  text="EMU3330"
                />
                <StatusChip status="normal" text="EMU3340" />
                <StatusChip status="normal" text="EMU3350" />
                <StatusChip status="normal" text="EMU3360" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[1077px] items-start relative flex-1 grow mr-[-8.00px]">
            <div className="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-[normal]">
                EMU3000
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5 p-5 relative flex-1 self-stretch w-full grow bg-white rounded-[0px_0px_5px_5px]">
              <div className="self-stretch w-full flex items-start gap-2.5 p-2.5 relative flex-1 grow rounded-[10px] overflow-hidden">
                <StatusChip status="normal" text="EMU3240"/>
                <StatusChip status="normal" text="EMU3240" />
                <StatusChip status="normal" text="EMU3250" />
                <StatusChip

                  status="critical"
                  text="EMU3260"
                />
                <StatusChip status="normal" text="EMU3270" />
                <StatusChip status="normal" text="EMU3280" />
                <StatusChip

                  status="critical"
                  text="EMU3290"
                />
                <StatusChip

                  status="critical"
                  text="EMU3300"
                />
                <StatusChip status="normal" text="EMU3310" />
                <StatusChip status="normal" text="EMU3220" />
                <StatusChip

                  status="critical"
                  text="EMU3330"
                />
                <StatusChip status="normal" text="EMU3340" />
                <StatusChip status="normal" text="EMU3350" />
                <StatusChip status="normal" text="EMU3360" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[1077px] items-start relative flex-1 grow mr-[-8.00px]">
            <div className="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-[normal]">
                EMU3000
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5 p-5 relative flex-1 self-stretch w-full grow bg-white rounded-[0px_0px_5px_5px]">
              <div className="self-stretch w-full flex items-start gap-2.5 p-2.5 relative flex-1 grow rounded-[10px] overflow-hidden">
                <StatusChip status="normal" text="EMU3240"/>
                <StatusChip status="normal" text="EMU3240" />
                <StatusChip status="normal" text="EMU3250" />
                <StatusChip

                  status="critical"
                  text="EMU3260"
                />
                <StatusChip status="normal" text="EMU3270" />
                <StatusChip status="normal" text="EMU3280" />
                <StatusChip

                  status="critical"
                  text="EMU3290"
                />
                <StatusChip

                  status="critical"
                  text="EMU3300"
                />
                <StatusChip status="normal" text="EMU3310" />
                <StatusChip status="normal" text="EMU3220" />
                <StatusChip

                  status="critical"
                  text="EMU3330"
                />
                <StatusChip status="normal" text="EMU3340" />
                <StatusChip status="normal" text="EMU3350" />
                <StatusChip status="normal" text="EMU3360" />
              </div>
            </div>
          </div>  

        </div>
      </div>
    </div>
  );
};