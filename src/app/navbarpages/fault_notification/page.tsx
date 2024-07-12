

"use client";

import React from "react";
import { Header } from "@/components/factory_maintenance/Header";
import { DataCard } from "@/components/fault_notification/DataCard";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center relative bg-neutral-100">
      <div className="flex flex-col items-start gap-4 p-4 relative flex-1 self-stretch w-full grow">
        <div className="relative flex-1 w-[1408px] grow overflow-hidden">
          <div className="flex flex-col w-[401px] h-[785px] items-start gap-4 absolute top-0 left-0">
            <div className="relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden flex flex-col items-start gap-2.5">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-[normal]">
                    本日故障通報數 (A+B)
                  </div>
                </div>
                <div className="gap-[5px] px-2.5 py-0 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full bg-white">
                  <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                    <DataCard className="!flex-1 !grow" prop="one" prop1="light" />
                  </div>
                  <img className="w-full h-px relative self-stretch object-cover" alt="Line" src="image.svg" />
                  <div className="flex items-center gap-2.5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassName="!px-0 !py-[3px]"
                      prop="one"
                      prop1="light"
                      seriousClassName="!text-[#538164]"
                      text="柴油客車"
                      text1="2"
                    />
                    <img className="w-px relative self-stretch object-cover" alt="Line" src="line-6.svg" />
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassName="!px-0 !py-[3px]"
                      prop="one"
                      prop1="light"
                      seriousClassName="!text-[#d9730d]"
                      text="通勤列車"
                      text1="1"
                    />
                    <img className="w-px relative self-stretch object-cover" alt="Line" src="line-6.svg" />
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassName="!px-0 !py-[3px]"
                      prop="one"
                      prop1="light"
                      seriousClassName="!text-[#c3554e]"
                      text="電力機車"
                      text1="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden flex flex-col items-start gap-2.5">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base tracking-[0] leading-[normal]">
                    行車事故回報 (A) 數據
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                  <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassNameOverride="!mb-[unset]"
                      hasFrame={false}
                      prop="one"
                      prop1="light"
                      text1="1"
                    />
                    <img className="w-px relative self-stretch object-cover" alt="Line" src="line-6.svg" />
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassNameOverride="!mb-[unset]"
                      hasFrame={false}
                      prop="one"
                      prop1="light"
                      text1="1"
                      text2="機務處相關"
                    />
                    <img className="w-px relative self-stretch object-cover" alt="Line" src="line-6.svg" />
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassNameOverride="!mb-[unset]"
                      hasFrame={false}
                      prop="one"
                      prop1="light"
                      text1="0"
                      text2="其他"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden flex flex-col items-start gap-2.5">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
                  <div className="mt-[-1.00px] text-[#4e4e4e] text-base relative w-fit [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
                    行車事故回報 (B) 數據
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                  <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassNameOverride="!mb-[unset]"
                      hasFrame={false}
                      prop="one"
                      prop1="light"
                      text1="3"
                      text2="當日總通報數"
                    />
                    <img className="w-px relative self-stretch object-cover" alt="Line" src="line-6.svg" />
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassNameOverride="!mb-[unset]"
                      hasFrame={false}
                      prop="one"
                      prop1="light"
                      text1="0"
                      text2="機務處相關"
                    />
                    <img className="w-px relative self-stretch object-cover" alt="Line" src="line-6.svg" />
                    <DataCard
                      className="!flex-1 !grow"
                      frameClassNameOverride="!mb-[unset]"
                      hasFrame={false}
                      prop="one"
                      prop1="light"
                      text1="0"
                      text2="其他"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[991px] h-[785px] absolute top-0 left-[417px] flex flex-col items-start gap-2.5">
            <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
              <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
                <div className="mt-[-1.00px] text-[#4e4e4e] text-base relative w-fit [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
                  檢修相關資料表格
                </div>
              </div>
              <div className="gap-2.5 p-2.5 flex-1 grow rounded-[5px] overflow-hidden flex flex-col items-start relative self-stretch w-full bg-white">
                <div className="flex flex-col items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start relative self-stretch w-full flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#646464]">
                    <div className="inline-flex h-10 items-center justify-center gap-5 px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#397eff]">
                      <div className="text-[#4e4e4e] text-sm text-center relative w-fit [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
                        Ａ級檢修 (1)
                      </div>
                    </div>
                    <div className="inline-flex items-center px-4 py-0 relative self-stretch flex-[0_0_auto] opacity-50">
                      <div className="text-[#3034380d] text-sm relative w-fit [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
                        B級檢修 (3)
                      </div>
                    </div>
                    <div className="inline-flex items-center px-4 py-0 relative self-stretch flex-[0_0_auto] opacity-50">
                      <div className="relative w-fit [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#3034380d] text-sm tracking-[0] leading-[normal]">
                        C級檢修 (10)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end relative self-stretch w-full flex-[0_0_auto] rounded overflow-hidden">
                  <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-[#3034380d] border-b [border-bottom-style:solid]">
                    <Header
                      cellType="header"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="車種"
                    />
                    <Header
                      cellType="header"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="事故等級"
                    />
                    <Header
                      cellType="header"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="車次"
                    />
                    <Header
                      cellType="header"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="車組/車號"
                    />
                    <Header
                      cellType="header"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="事故地點"
                    />
                    <Header
                      cellType="header"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="通報時間"
                    />
                    <Header
                      cellType="header"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="通報單號"
                    />
                    <Header
                      cellType="header"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="故障現象"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid]">
                    <Header
                      cellType="body-label"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="WAY00"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="B"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="7524"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="E311"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="七堵貨"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="11-14 09:50"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="1121114-28"
                    />
                    <Header cellType="body" height="normal" text="ATP系統故障，重開正常" />
                  </div>
                  <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid]">
                    <Header
                      cellType="body-label"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="WAY00"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="A"
                    />
                    <Header cellType="body" height="normal" text="4232" />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="EMC723"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="南港"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="11-14 18:01"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="1121114-28"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="EMC723號動力端二次測短路接地"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid]">
                    <Header
                      cellType="body-label"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="WAY00"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="B"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="2154"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="EMC706"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="嘉義"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="11-14 09:21"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="1121114-28"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="5車山側南邊門故障"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid]">
                    <Header
                      cellType="body-label"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="WAY00"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="B"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="1805"
                    />
                    <Header cellType="body" height="normal" text="DR1017" />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="內灣"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="11-14 09:31"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="1121114-28"
                    />
                    <Header
                      cellType="body"
                      className="!flex-1 !grow"
                      headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
                      height="normal"
                      text="Ｐ引擎十字街頭抖動"
                    />
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