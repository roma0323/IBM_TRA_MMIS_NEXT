
 "use client";

import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import  UseRateChart  from "@/components/train_deployment/UseRateChart";
import  BigPieChart  from "@/components/train_deployment/BigPieChart";

export default function Page() {
  return (
    <div className="flex flex-col h-full items-center relative overflow-hidden">
      
      <div className="flex items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] bg-neutral-100">
        <div className="inline-flex flex-col h-[782.82px] items-start gap-4 relative flex-[0_0_auto]">
          {/* 分配資訊   */}
          <div className="w-[390px] flex-[0_0_auto] rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
            <div className="p-2.5 border-b [border-bottom-style:solid] border-[#646464] flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal  relative text-[#4e4e4e] tracking-[0] leading-[normal]">
                分配資訊
              </div>
            </div>
            <div className="flex flex-col items-start gap-[5px] px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                <DataCard  text="440" text1="總車輛數"/>
                <DataCard  text="440" text1="總車輛數" />
                <DataCard  text="83.9 %" text1="可用率" />
              </div>
            </div>
          </div>
          {/* 分配資訊   */}

          {/* 近30 天使用率   */}
          <div className="self-stretch w-full flex-[0_0_auto] rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
              <p className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-base relative text-[#4e4e4e] tracking-[0] leading-[normal]">
                近30 天使用率 3/1 ~ 4/1
              </p>
            </div>
            <UseRateChart />

          </div>
          {/* 近30 天使用率   */}

          {/* 近30 城際列車 - 車種配置   */}
          <div className="w-[390px] relative flex-1 rounded-lg flex flex-col items-center justify-center relative bg-white 	">
            <div className="flex flex-col items-start justify-center p-2.5   w-full  bg-white border-b [border-bottom-style:solid] border-[#646464]">
              <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-base relative text-[#4e4e4e] tracking-[0] leading-[normal]">
                城際列車 - 車種配置
              </div>
            </div>
            <div className="relative w-full h-5/6 flex items-start justify-center ">
              <BigPieChart  />
            </div>
          </div>
          {/* 近30 城際列車 - 車種配置   */}




        </div>
        <div className="h-[782.82px] gap-2.5 flex-1 grow rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
          <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
            <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-base relative text-[#4e4e4e] tracking-[0] leading-[normal]">
              城際列車 - 車種分配資訊
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 px-3 py-2 relative flex-1 self-stretch w-full grow">
            <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded overflow-hidden border-l-4 [border-left-style:solid] border-[#d9730d] flex-col justify-center relative">
              <div className="relative w-fit mt-[-4.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                太魯閣-TEMU1000
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[150px] items-center gap-3 relative">
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="w-fit mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] text-[length:var(--label-label-medium-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                      車輛數
                    </div>
                    <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                      <div className="w-fit mt-[-1.00px] font-body-body-large-semi font-[number:var(--body-body-large-semi-font-weight)] text-[length:var(--body-body-large-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--body-body-large-semi-letter-spacing)] leading-[var(--body-body-large-semi-line-height)] [font-style:var(--body-body-large-semi-font-style)]">
                        200 輛
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                  <div className="relative w-[62px] h-[60px] mr-[-2.00px]">
                    <div className="relative w-[60px] h-[60px] bg-[url(/ellipse-4.svg)] bg-[100%_100%]">
                      <img
                        className="w-[30px] h-[59px] absolute top-0 left-[30px]"
                        alt="Ellipse"
                        src="ellipse-3-3.svg"
                      />
                      <div className="absolute top-[22px] left-[18px] [font-family:'Noto_Sans_TC-SemiBold',Helvetica] font-semibold text-[#4e4e4e] text-[11px] tracking-[0] leading-[normal]">
                        47%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center gap-2.5 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                <div className="flex gap-[5px] self-stretch w-full items-center relative flex-[0_0_auto]">
                  <div className="w-[90px] mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] text-[length:var(--label-label-medium-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                    台北機務段
                  </div>
                  <div className="flex items-center gap-2.5 relative flex-1 grow">
                    <div className="flex h-2 items-center px-0 py-px relative flex-1 grow bg-white rounded-[10px] overflow-hidden">
                      <div className="w-[133px] rounded-[10px] relative self-stretch bg-[#d9730d]" />
                    </div>
                  </div>
                  <div className="flex w-[30px] items-center gap-px relative">
                    <div className="text-[#4e4e4e] text-[length:var(--label-label-medium-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                      100
                    </div>
                  </div>
                </div>
                <div className="flex gap-[5px] self-stretch w-full items-center relative flex-[0_0_auto]">
                  <div className="w-[90px] mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] text-[length:var(--label-label-medium-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                    新竹機務段
                  </div>
                  <div className="flex items-center gap-2.5 relative flex-1 grow">
                    <div className="flex h-2 items-center px-0 py-px relative flex-1 grow bg-white rounded-[10px] overflow-hidden">
                      <div className="w-[120px] rounded-[10px] relative self-stretch bg-[#d9730d]" />
                    </div>
                  </div>
                  <div className="flex w-[30px] items-center gap-px relative">
                    <div className="text-[#4e4e4e] text-[length:var(--label-label-medium-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                      80
                    </div>
                  </div>
                </div>
                <div className="flex gap-[5px] self-stretch w-full items-center relative flex-[0_0_auto]">
                  <div className="w-[90px] mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] text-[length:var(--label-label-medium-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                    七堵機務段
                  </div>
                  <div className="flex items-center gap-2.5 relative flex-1 grow">
                    <div className="flex h-2 items-center px-0 py-px relative flex-1 grow bg-white rounded-[10px] overflow-hidden">
                      <div className="w-[69px] rounded-[10px] relative self-stretch bg-[#d9730d]" />
                    </div>
                  </div>
                  <div className="flex w-[30px] items-center gap-px relative">
                    <div className="text-[#4e4e4e] text-[length:var(--label-label-medium-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                      20
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-full flex-[0_0_auto] rounded flex flex-col items-start relative bg-white overflow-hidden">
              <div className="gap-2.5 bg-white flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded-lg overflow-hidden flex-col justify-center relative">
                  <div className="relative w-fit mt-[-4.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                    新自強號 - MEU3000
                  </div>
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex w-[150px] items-center gap-3 relative">
                      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="w-fit mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] text-[length:var(--label-label-medium-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                          車輛數
                        </div>
                        <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                          <div className="w-fit mt-[-1.00px] font-body-body-large-semi font-[number:var(--body-body-large-semi-font-weight)] text-[length:var(--body-body-large-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--body-body-large-semi-letter-spacing)] leading-[var(--body-body-large-semi-line-height)] [font-style:var(--body-body-large-semi-font-style)]">
                            120 輛
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                      <div className="relative w-[62px] h-[60px] mr-[-2.00px]">
                        <div className="relative w-[60px] h-[60px] bg-[url(/ellipse-4.svg)] bg-[100%_100%]">
                          <img className="w-[30px] h-9 absolute top-0 left-[30px]" alt="Ellipse" src="image.svg" />
                          <div className="absolute top-[22px] left-[13px] [font-family:'Noto_Sans_TC-SemiBold',Helvetica] font-semibold text-[#4e4e4e] text-[11px] tracking-[0] leading-[normal]">
                            28.6%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-full flex-[0_0_auto] rounded flex flex-col items-start relative bg-white overflow-hidden">
              <div className="gap-2.5 bg-white flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded-lg overflow-hidden flex-col justify-center relative">
                  <div className="relative w-fit mt-[-4.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                    PP電力機車 - E1000
                  </div>
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex w-[150px] items-center gap-3 relative">
                      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="w-fit mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] text-[length:var(--label-label-medium-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                          車輛數
                        </div>
                        <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                          <div className="w-fit mt-[-1.00px] font-body-body-large-semi font-[number:var(--body-body-large-semi-font-weight)] text-[length:var(--body-body-large-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--body-body-large-semi-letter-spacing)] leading-[var(--body-body-large-semi-line-height)] [font-style:var(--body-body-large-semi-font-style)]">
                            80 輛
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                      <div className="relative w-[62px] h-[60px] mr-[-2.00px]">
                        <div className="relative w-[60px] h-[60px] bg-[url(/ellipse-4.svg)] bg-[100%_100%]">
                          <img
                            className="w-[27px] h-5 absolute top-0 left-[30px]"
                            alt="Ellipse"
                            src="ellipse-3-4.svg"
                          />
                          <div className="absolute top-[22px] left-[18px] [font-family:'Noto_Sans_TC-SemiBold',Helvetica] font-semibold text-[#4e4e4e] text-[11px] tracking-[0] leading-[normal]">
                            19%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-full flex-[0_0_auto] rounded flex flex-col items-start relative bg-white overflow-hidden">
              <div className="gap-2.5 bg-white flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded-lg overflow-hidden flex-col justify-center relative">
                  <div className="relative w-fit mt-[-4.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                    普悠瑪 - TEMU2000
                  </div>
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex w-[150px] items-center gap-3 relative">
                      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                        <div className="w-fit mt-[-1.00px] font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)] text-[length:var(--label-label-medium-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
                          車輛數
                        </div>
                        <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                          <div className="w-fit mt-[-1.00px] font-body-body-large-semi font-[number:var(--body-body-large-semi-font-weight)] text-[length:var(--body-body-large-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--body-body-large-semi-letter-spacing)] leading-[var(--body-body-large-semi-line-height)] [font-style:var(--body-body-large-semi-font-style)]">
                            20 輛
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                      <div className="relative w-[62px] h-[60px] mr-[-2.00px]">
                        <div className="relative w-[60px] h-[60px] bg-[url(/ellipse-4.svg)] bg-[100%_100%]">
                          <img className="w-2 h-1.5 absolute top-0 left-[30px]" alt="Ellipse" src="ellipse-3.svg" />
                          <div className="absolute top-[22px] left-[18px] [font-family:'Noto_Sans_TC-SemiBold',Helvetica] font-semibold text-[#4e4e4e] text-[11px] tracking-[0] leading-[normal]">
                            4.8%
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
        <div className="h-[782.82px] gap-4 flex-1 grow flex flex-col items-start relative">
          <div className="gap-2.5 flex-1 self-stretch w-full grow rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
              <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-base relative text-[#4e4e4e] tracking-[0] leading-[normal]">
                城際列車 - 機務段分配
              </div>
            </div>
            <div className="items-start px-3 py-0 flex flex-col gap-3 relative flex-1 self-stretch w-full grow">
              <div className="self-stretch w-full flex-[0_0_auto] rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
                <div className="gap-2.5 bg-white flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded-lg overflow-hidden flex-col justify-center relative">
                    <p className="relative w-fit mt-[-4.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                      台北機務段 - 太魯閣 - TEMU1000
                    </p>
                    <div className="flex flex-col items-start justify-center gap-px relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          總數量（車組）
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          16
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          可用
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          12
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - w或保養
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - 段修
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          0
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - 場修
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          其他
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <img
                        className="mt-[-2578.18px] relative self-stretch w-full h-px ml-[-346.00px] object-cover"
                        alt="Divider"
                      />
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          可用率
                        </div>
                        <div className="relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          75 %
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-full flex-[0_0_auto] rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
                <div className="gap-2.5 bg-white flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded-lg overflow-hidden flex-col justify-center relative">
                    <p className="relative w-fit mt-[-4.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                      新竹機務段 - 太魯閣 - TEMU1000
                    </p>
                    <div className="flex flex-col items-start justify-center gap-px relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          總數量（車組）
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          16
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          可用
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          12
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - w或保養
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - 段修
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          0
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - 場修
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          其他
                        </div>
                        <div className="text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <img
                        className="mt-[-2776.18px] relative self-stretch w-full h-px ml-[-346.00px] object-cover"
                        alt="Divider"
                      />
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          可用率
                        </div>
                        <div className="relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          75 %
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch w-full flex-[0_0_auto] rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
                <div className="gap-2.5 bg-white flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded-lg overflow-hidden flex-col justify-center relative">
                    <p className="relative w-fit mt-[-4.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                      七堵機務段 - 太魯閣 - TEMU1000
                    </p>
                    <div className="flex flex-col items-start justify-center gap-px relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          總數量（車組）
                        </div>
                        <div className="text-[#646464] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          16
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          可用
                        </div>
                        <div className="text-[#646464] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          12
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[#4e4e4e] text-[length:var(--label-label-small-semi-font-size)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - w或保養
                        </div>
                        <div className="text-[#646464] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - 段修
                        </div>
                        <div className="text-[#646464] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          0
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          檢修 - 場修
                        </div>
                        <div className="text-[#646464] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          其他
                        </div>
                        <div className="text-[#646464] text-[length:var(--label-label-small-semi-font-size)] relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          2
                        </div>
                      </div>
                      <img
                        className="mt-[-2974.18px] relative self-stretch w-full h-px ml-[-346.00px] object-cover"
                        alt="Divider"
                      />
                      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                        <div className="w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[length:var(--label-label-small-semi-font-size)] relative text-[#4e4e4e] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          可用率
                        </div>
                        <div className="relative w-fit mt-[-1.00px] font-label-label-small-semi font-[number:var(--label-label-small-semi-font-weight)] text-[#646464] text-[length:var(--label-label-small-semi-font-size)] tracking-[var(--label-label-small-semi-letter-spacing)] leading-[var(--label-label-small-semi-line-height)] [font-style:var(--label-label-small-semi-font-style)]">
                          75 %
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
    </div>
  );
};