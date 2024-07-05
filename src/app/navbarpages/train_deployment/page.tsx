// // `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
// export default function Page() {
//     return <h1>Hello, trrain deployment Page!</h1>
//   }


"use client";

import React from "react";
import { DataCard } from "../../../components/DataCard";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center relative">
      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-start relative flex-[0_0_auto]">
          <div className="flex w-[1440px] items-center gap-5 px-5 py-3 relative self-stretch bg-white">
            <img className="relative w-8 h-8" alt="Menu" src="menu-fill0-wght400-grad0-opsz24-1.svg" />
            <img className="relative w-[34px] h-px mt-[-128.00px]" alt="Line" />
            <div className="inline-flex items-center gap-3 px-1 py-0 relative flex-[0_0_auto]">
              <div className="relative w-20 h-[58.18px] bg-[url(/IBM-LOGO-frame.svg)] bg-cover bg-[50%_50%]" />
              <div className="relative w-fit font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                新 MMIS 績效管理指標
              </div>
            </div>
            <div className="relative flex-1 grow h-[19px]" />
            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded overflow-hidden border border-solid border-[#397eff]">
              <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#397eff] text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                車輛資訊
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#646464] text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                機務段配置資訊
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#646464] text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                機廠檢修資訊
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#646464] text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                故障通報
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] rounded-[30px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#646464] text-[length:var(--label-label-large-semi-font-size)] tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                檢修動態
              </div>
            </div>
            <div className="flex w-[54px] items-center justify-center gap-2.5 p-1 relative bg-neutral-100 rounded-2xl overflow-hidden">
              <img className="relative w-6 h-6" alt="Dark mode" src="dark-mode.png" />
            </div>
          </div>
        </div>
        <div className="flex w-[1440px] items-center gap-5 px-6 py-0 relative flex-[0_0_auto] bg-white">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] font-display-display-small-dem font-[number:var(--display-display-small-dem-font-weight)] text-[#4e4e4e] text-[length:var(--display-display-small-dem-font-size)] relative w-fit tracking-[var(--display-display-small-dem-letter-spacing)] leading-[var(--display-display-small-dem-line-height)] [font-style:var(--display-display-small-dem-font-style)]">
                車種配置與使用率
              </div>
            </div>
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] font-display-display-small-dem font-[number:var(--display-display-small-dem-font-weight)] text-[#4e4e4e] text-[length:var(--display-display-small-dem-font-size)] relative w-fit tracking-[var(--display-display-small-dem-letter-spacing)] leading-[var(--display-display-small-dem-line-height)] [font-style:var(--display-display-small-dem-font-style)]">
                /
              </div>
            </div>
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] font-display-display-small-dem font-[number:var(--display-display-small-dem-font-weight)] text-[#397eff] text-[length:var(--display-display-small-dem-font-size)] relative w-fit tracking-[var(--display-display-small-dem-letter-spacing)] leading-[var(--display-display-small-dem-line-height)] [font-style:var(--display-display-small-dem-font-style)]">
                總覽
              </div>
            </div>
          </div>
          <div className="relative flex-1 grow h-2.5" />
          <div className="inline-flex items-center justify-center gap-2.5 p-[5px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-end justify-center gap-[5px] p-2.5 relative flex-[0_0_auto] rounded-[5px] overflow-hidden">
              <div className="relative w-fit mt-[-1.00px] font-label-label-medium-dem font-[number:var(--label-label-medium-dem-font-weight)] text-[#646464] text-[length:var(--label-label-medium-dem-font-size)] tracking-[var(--label-label-medium-dem-letter-spacing)] leading-[var(--label-label-medium-dem-line-height)] [font-style:var(--label-label-medium-dem-font-style)]">
                上次更新時間
              </div>
              <p className="font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#646464] text-[length:var(--title-title-medium-semi-font-size)] relative w-fit tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                113 / 5 / 8&nbsp;&nbsp;(三) 12:20
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5px] pt-2.5 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white">
          <div className="flex items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#397eff]">
              <div className="font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] relative w-fit text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                總覽
              </div>
            </div>
            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
              <div className="relative w-fit font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#3034380d] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                通勤列車
              </div>
            </div>
            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
              <div className="font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] relative w-fit text-[#4e4e4e] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                城際列車
              </div>
            </div>
            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
              <div className="relative w-fit font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#3034380d] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                電力機車
              </div>
            </div>
            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
              <div className="relative w-fit font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#3034380d] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                柴液機車
              </div>
            </div>
            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
              <div className="relative w-fit font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#3034380d] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                客車
              </div>
            </div>
            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
              <div className="relative w-fit font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#3034380d] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                柴油客車
              </div>
            </div>
            <div className="inline-flex h-10 items-center px-4 py-0 relative flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#b0cbff] opacity-50">
              <div className="relative w-fit font-title-title-medium-demi font-[number:var(--title-title-medium-demi-font-weight)] text-[#3034380d] text-[length:var(--title-title-medium-demi-font-size)] tracking-[var(--title-title-medium-demi-letter-spacing)] leading-[var(--title-title-medium-demi-line-height)] [font-style:var(--title-title-medium-demi-font-style)]">
                貨車
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center gap-4 p-6 relative flex-1 self-stretch w-full grow bg-neutral-100">
        <div className="flex flex-col items-center justify-center gap-3 relative flex-1 self-stretch grow">
          <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="gap-2.5 flex-1 grow flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-2.5 bg-white flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                  <div className="text-[#397eff] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-base tracking-[0] leading-[normal]">
                    總車種配置
                  </div>
                </div>
                <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                  <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                    <DataCard className="!flex-1 !grow" prop="one" prop1="light" />
                    <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                    <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                  </div>
                  <div className="self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
                    <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                      <p className="font-title-title-small-semi text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                        <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                          3/1 ~ 4/1 使用率{" "}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col w-[30px] items-center gap-1 px-0 py-2.5 relative self-stretch">
                        <div className="relative flex-1 self-stretch w-full grow">
                          <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                            100%
                          </div>
                        </div>
                        <div className="relative flex-1 self-stretch w-full grow">
                          <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                            75%
                          </div>
                        </div>
                        <div className="relative flex-1 self-stretch w-full grow">
                          <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                            50%
                          </div>
                        </div>
                        <div className="relative flex-1 self-stretch w-full grow">
                          <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                            25%
                          </div>
                        </div>
                        <div className="relative flex-1 self-stretch w-full grow">
                          <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                            0%
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="relative self-stretch w-[114px] bg-[#397eff] rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[133px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[100px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[133px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[110px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[153px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[146px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[155px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-24 bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[120px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[132px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[136px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="relative self-stretch w-[114px] bg-[#397eff] rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[133px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[120px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[132px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[136px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="relative self-stretch w-[114px] bg-[#397eff] rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[133px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[100px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[133px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[110px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[153px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[146px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[155px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-24 bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[120px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[132px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[136px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="relative self-stretch w-[114px] bg-[#397eff] rounded-[5px]" />
                        </div>
                      </div>
                      <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                        <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                          <div className="w-[133px] bg-[#397eff] relative self-stretch rounded-[5px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[340px] flex-1 grow bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#d9730d] text-base relative w-fit mt-[-1.00px] font-normal tracking-[0] leading-[normal]">
                  通勤列車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                    <p className="font-title-title-small-semi text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          0%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#ffa344] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[340px] flex-1 grow bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#d9730d] text-base relative w-fit mt-[-1.00px] font-normal tracking-[0] leading-[normal]">
                  城際列車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                    <p className="font-title-title-small-semi text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          0%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#d9730d] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[340px] flex-1 grow bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#8f65af] text-base relative w-fit mt-[-1.00px] font-normal tracking-[0] leading-[normal]">
                  電力機車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                    <p className="font-title-title-small-semi text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
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
          </div>
          <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-1 grow bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#8f65af] text-base relative w-fit mt-[-1.00px] font-normal tracking-[0] leading-[normal]">
                  柴液機車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                    <p className="font-title-title-small-semi text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
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
            <div className="flex-1 grow bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="text-[#538164] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-base tracking-[0] leading-[normal]">
                  客車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                    <p className="font-title-title-small-semi text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          0%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 grow bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="text-[#538164] relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-base tracking-[0] leading-[normal]">
                  柴油客車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                    <p className="font-title-title-small-semi text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          0%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[100px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[110px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[153px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[146px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[155px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-24 bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[120px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[132px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="h-[216px] inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[136px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[114px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                    <div className="self-stretch inline-flex flex-col items-center gap-1 px-0 py-2.5 relative flex-[0_0_auto] overflow-hidden">
                      <div className="flex w-[196px] items-center p-px relative flex-1 grow ml-[-95.00px] mr-[-95.00px] bg-neutral-100 rounded-[5px] overflow-hidden -rotate-90">
                        <div className="w-[133px] bg-[#538164] relative self-stretch rounded-[5px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 grow bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
              <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                <div className="[font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#c3554e] text-base relative w-fit mt-[-1.00px] font-normal tracking-[0] leading-[normal]">
                  貨車
                </div>
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="2681" text1="車輛可用數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="3197" text1="總車輛數" />
                  <DataCard className="!flex-1 !grow" prop="one" prop1="light" text="83.9 %" text1="可用率" />
                </div>
                <div className="self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative rounded-lg overflow-hidden">
                  <div className="flex flex-col items-start justify-center gap-2.5 px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                    <p className="font-title-title-small-semi text-[#4e4e4e] text-[length:var(--title-title-small-semi-font-size)] relative w-fit mt-[-1.00px] font-[number:var(--title-title-small-semi-font-weight)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] [font-style:var(--title-title-small-semi-font-style)]">
                      <span className="font-[number:var(--title-title-small-semi-font-weight)] font-title-title-small-semi [font-style:var(--title-title-small-semi-font-style)] tracking-[var(--title-title-small-semi-letter-spacing)] leading-[var(--title-title-small-semi-line-height)] text-[length:var(--title-title-small-semi-font-size)]">
                        3/1 ~ 4/1 使用率{" "}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-end justify-between px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col w-[30px] h-[216px] items-center gap-1 px-0 py-2.5 relative">
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          100%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          75%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          50%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
                          25%
                        </div>
                      </div>
                      <div className="relative flex-1 self-stretch w-full grow">
                        <div className="absolute h-3.5 -top-px left-0 [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-[10px] tracking-[0] leading-[normal]">
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