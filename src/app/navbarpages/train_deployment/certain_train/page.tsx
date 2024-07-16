
"use client";

import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateChart from "@/components/train_deployment/UseRateChart";
import BigPieChart from "@/components/train_deployment/BigPieChart";
import DeploymentByTrainCategory from "@/components/train_deployment/DeploymentByTrainCategory";

const trainData = [
  { trainName: "太魯閣-TEMU1000", trainCount: 200 },
  { trainName: "普悠瑪-TEMU2000", trainCount: 150 },
  { trainName: "自強號-TEMU3000", trainCount: 120 },
  // Add more train data as needed
];

export default function Page() {
  return (
    <div className=" grid grid-cols-3 flex items-start gap-4 p-6 relative self-stretch flex-[0_0_auto] bg-neutral-100   ">



      <div className="h-full inline-flex flex-col  items-start gap-4 relative flex-[0_0_auto]">

        {/* 分配資訊   */}
        <div className="w-full flex-[0_0_auto] rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
          <div className="flex flex-col items-start justify-center p-2.5   w-full  border-b  border-[#646464]">
            分配資訊
          </div>
          <div className="flex flex-col items-start gap-[5px] px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
              <DataCard text="440" text1="總車輛數" />
              <DataCard text="440" text1="總車輛數" />
              <DataCard text="83.9 %" text1="可用率" />
            </div>
          </div>
        </div>
        {/* 分配資訊   */}

        {/* 近30 天使用率   */}
        <div className="w-full self-stretch  flex-[0_0_auto] rounded-lg flex flex-col items-center relative bg-white overflow-hidden">
          <div className="flex flex-col items-start justify-center p-2.5   w-full  border-b  border-[#646464]">
            近30 天使用率 3/1 ~ 4/1
          </div>
          <UseRateChart />

        </div>
        {/* 近30 天使用率   */}

        {/* 近30 城際列車 - 車種配置   */}
        <div className=" w-full h-full relative flex-1 rounded-lg flex flex-col items-center justify-center relative bg-white 	">
          <div className="flex flex-col items-start justify-center p-2.5   w-full  border-b  border-[#646464]">
            城際列車 - 車種配置
          </div>
          <div className="relative w-full h-5/6 flex items-start justify-center ">
            <BigPieChart />
          </div>
        </div>
        {/* 近30 城際列車 - 車種配置   */}
      </div>



      <div className="h-full gap-2.5 flex-1 grow rounded-lg flex flex-col items-start relative bg-white overflow-hidden">

        <div className="flex flex-col items-start justify-center p-2.5   w-full  border-b  border-[#646464]">
          城際列車 - 車種分配資訊
        </div>


        <div className="flex flex-col items-start gap-2.5 px-3 py-2 relative flex-1 self-stretch w-full grow" >
          {trainData.map((train, index) => (
            <DeploymentByTrainCategory
              key={index}
              trainName={train.trainName}
              trainCount={train.trainCount}
            />
          ))}
        </div>
      </div>



      <div className="h-full gap-4 flex-1 grow flex flex-col items-start relative">
        <div className="gap-2.5 flex-1 self-stretch w-full grow rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
          <div className="flex flex-col items-start justify-center p-2.5   w-full  border-b  border-[#646464]">
            城際列車 - 機務段分配
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
  );
};