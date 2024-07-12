// // `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
// export default function Page() {
//     return <h1>Hello, trrain deployment Page!</h1>
//   }


"use client";

import React from "react";
import { DataCard } from "@/components/homepage/DataCard";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center relative ">
      
      
      
      
      <div className="flex  items-start justify-center gap-4 p-6 relative flex-1 self-stretch w-full grow bg-gray-200">
        <div className="flex    flex-col justify-center gap-3 relative flex-1  grow">
          
          <div className="flex  bg-red-200  items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-1 grow  bg-blue-200  flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#8f65af] text-base relative w-fit mt-[-1.00px] font-normal tracking-[0] leading-[normal]">
                  柴液機車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] ">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto]  flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] ">
                    <p className="font-title-title-small-semi  text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          0%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#8f65af] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="flex-1 grow  flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#c3554e] text-base relative w-fit mt-[-1.00px] font-normal tracking-[0] leading-[normal]">
                  貨車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] ">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto]  flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] ">
                    <p className="font-title-title-small-semi  text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal  text-[10px] tracking-[0] leading-[normal]">
                          0%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#c3554e] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};