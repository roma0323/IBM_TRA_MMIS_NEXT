// // `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
// export default function Page() {
//     return <h1>Hello, trrain deployment Page!</h1>
//   }


"use client";

import React from "react";
import { DataCard } from "@/components/homepage/DataCard";
import  UseRateChart  from "@/components/train_deployment/UseRateChart";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center relative ">
      
      
      
      
      <div className="grid grid-cols-4 flex  items-start justify-center gap-4 p-6 relative flex-1 self-stretch w-full grow bg-gray-200">
          

            <div className=" bg-blue-200  items-start relative rounded-lg overflow-hidden">
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
                <UseRateChart />
                
              </div>
            </div>
            <div className=" bg-blue-200  items-start relative rounded-lg overflow-hidden">
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
                <UseRateChart />
                
              </div>
            </div>
            <div className=" bg-blue-200  items-start relative rounded-lg overflow-hidden">
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
                <UseRateChart />
                
              </div>
            </div>
            <div className=" bg-blue-200  items-start relative rounded-lg overflow-hidden">
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
                <UseRateChart />
                
              </div>
            </div>
            <div className=" bg-blue-200  items-start relative rounded-lg overflow-hidden">
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
                <UseRateChart />
                
              </div>
            </div>
            <div className=" bg-blue-200  items-start relative rounded-lg overflow-hidden">
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
                <UseRateChart />
                
              </div>
            </div>
            <div className=" bg-blue-200  items-start relative rounded-lg overflow-hidden">
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
                <UseRateChart />
                
              </div>
            </div>
            
            <div className=" bg-blue-200  items-start relative rounded-lg overflow-hidden">
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
                <UseRateChart />
                
              </div>
            </div>
            
            
          </div>

    </div>
  );
};