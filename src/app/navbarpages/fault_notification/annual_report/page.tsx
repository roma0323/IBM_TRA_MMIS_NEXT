"use client";

import React from "react";
import { LabelChip } from "@/components/locomotive_depot/LabelChip";
import { DataCard } from "@/components/fault_notification/DataCard";
import { StatusChip } from "@/components/fault_notification/StatusChip";

export default function Page() {
  return(
<div className="flex flex-col min-h-screen items-center relative bg-neutral-100">
      <div className="flex items-start gap-4 p-4 relative flex-1 self-stretch w-full grow">
        <div className="inline-flex flex-col items-start gap-6 relative self-stretch flex-[0_0_auto]">
          <div className="w-[366px] flex-[0_0_auto] rounded-lg overflow-hidden flex flex-col items-start gap-2.5 relative">
            <div className="flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
              <div className="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
                <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#4e4e4e] text-base relative w-fit font-normal tracking-[0] leading-[normal]">
                  故障通報數據
                </div>
              </div>
              <div className="flex flex-col items-start gap-[5px] px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
                <div className="flex items-center gap-2.5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard
                    className="!flex-1 !grow"
                    override={<LabelChip className="!flex-[0_0_auto]" property1="Default" text="總故障通報數" />}
                    prop="one"
                    prop1="light"
                  />
                  <img className="relative self-stretch w-px object-cover" alt="Line" src="line-6.svg" />
                  <DataCard
                    className="!flex-1 !grow"
                    divClassName="!mr-[-2.33px] !ml-[-2.33px] !flex-[unset] !w-[106.67px] !grow-[unset]"
                    frameClassName="!gap-2.5 ![justify-content:unset]"
                    hasDiv={false}
                    override={<LabelChip className="!flex-[0_0_auto]" property1="Default" text="行車責任" />}
                    prop="one"
                    prop1="light"
                    text="11"
                  />
                  <img className="relative self-stretch w-px object-cover" alt="Line" src="line-6.svg" />
                  <DataCard
                    className="!flex-1 !grow"
                    divClassNameOverride="!ml-[-17px]"
                    override={<LabelChip className="!flex-[0_0_auto]" property1="Default" text="ATP 故障數" />}
                    prop="one"
                    prop1="light"
                    text="13"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[366px] flex-1 grow rounded-lg overflow-hidden flex flex-col items-start gap-2.5 relative">
            <div className="h-[446.82px] flex flex-col items-start relative self-stretch w-full">
              <div className="flex items-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white border-b [border-bottom-style:solid] border-[#646464]">
                <div className="flex flex-col w-5 h-5 items-center justify-center relative">
                  <img className="relative w-[11.53px] h-[10.25px]" alt="Polygon" src="/list_botton.svg" />
                </div>
                <div className="mt-[-1.00px] font-section-title-2 text-on-surface text-[length:var(--section-title-2-font-size)] relative w-fit font-[number:var(--section-title-2-font-weight)] tracking-[var(--section-title-2-letter-spacing)] leading-[var(--section-title-2-line-height)] [font-style:var(--section-title-2-font-style)]">
                  故障通報列表 （車種分類）
                </div>
              </div>
              <div className="w-[361px] h-[616px] mb-[-212.18px] rounded-[5px] overflow-hidden flex flex-col items-start gap-2.5 p-2.5 relative bg-on-primary">
                <div className="flex flex-col items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="mt-[-1.00px] font-label-text text-secondary text-[length:var(--label-text-font-size)] relative w-fit font-[number:var(--label-text-font-weight)] tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            車種
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="mt-[-1.00px] font-label-text text-secondary text-[length:var(--label-text-font-size)] relative w-fit font-[number:var(--label-text-font-weight)] tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            總故障
                            <br />
                            通報數
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="mt-[-1.00px] font-label-text text-secondary text-[length:var(--label-text-font-size)] relative w-fit font-[number:var(--label-text-font-weight)] tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            行車責任
                            <br />
                            事故數
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="relative w-fit mt-[-1.00px] font-label-text font-[number:var(--label-text-font-weight)] text-secondary text-[length:var(--label-text-font-size)] tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            ATP <br />
                            故障數
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <StatusChip className="!flex-[0_0_auto]" property1="one" />
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            139
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            11
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            13
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <StatusChip
                          className="!border-[#c38c00] !flex-[0_0_auto]"
                          divClassName="!text-[#c38c00]"
                          property1="one"
                          text="通勤列車"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            47
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            3
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <StatusChip
                          className="!border-[#c38c00] !flex-[0_0_auto]"
                          divClassName="!text-[#c38c00]"
                          property1="one"
                          text="城際列車"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            48
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            4
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <StatusChip
                          className="!border-[#11ae3d] !flex-[0_0_auto]"
                          divClassName="!text-[#11ae3d]"
                          property1="one"
                          text="客車"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            3
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <StatusChip
                          className="!border-[#11ae3d] !flex-[0_0_auto]"
                          divClassName="!text-[#11ae3d]"
                          property1="one"
                          text="柴油客車"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            11
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            2
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <StatusChip
                          className="!border-[#9747ff] !flex-[0_0_auto]"
                          divClassName="!text-[#9747ff]"
                          property1="one"
                          text="電力機車"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            22
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <StatusChip
                          className="!border-[#9747ff] !flex-[0_0_auto]"
                          divClassName="!text-[#9747ff]"
                          property1="one"
                          text="柴液機車"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            １
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            2
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px] relative overflow-hidden">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex w-[90px] items-center gap-2.5 px-0 py-[5px] relative self-stretch">
                        <StatusChip
                          className="!border-[#646464] !flex-[0_0_auto]"
                          divClassName="!text-[#646464]"
                          property1="one"
                          text="貨車"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 px-0 py-[5px] relative flex-1 self-stretch grow">
                        <div className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] flex-[0_0_auto] rounded-[10px] relative overflow-hidden">
                          <div className="w-fit mt-[-1.00px] text-[length:var(--label-text-font-size)] relative font-label-text font-[number:var(--label-text-font-weight)] text-secondary tracking-[var(--label-text-letter-spacing)] leading-[var(--label-text-line-height)] [font-style:var(--label-text-font-style)]">
                            0
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
        <div className="flex-1 self-stretch grow flex flex-col items-start gap-2.5 relative">
          <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
              <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] text-[#4e4e4e] text-base relative w-fit font-normal tracking-[0] leading-[normal]">
                檢修相關資料表格
              </div>
            </div>
          </div>
        </div>
        <div className="w-[674px] self-stretch flex flex-col items-start gap-2.5 relative">
          <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px_5px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#646464]">
              <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] text-base relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                112 故障通報數 A 級各月份資料
              </div>
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <LabelChip className="!flex-[0_0_auto]" property1="Default" text="故障數" />
                <LabelChip className="!flex-[0_0_auto]" property1="Default" text="總故障通報數" />
                <LabelChip className="!flex-[0_0_auto]" property1="Default" text="行車責任事故數 " />
              </div>
            </div>
            <div className="flex-1 self-stretch w-full grow flex flex-col items-start gap-2.5 p-2.5 relative bg-white">
              <div className="flex flex-col items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 1月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="flex w-[260px] items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#5590ff] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            12
                          </div>
                        </div>
                      </div>
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="w-5 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="flex w-10 items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#7e27b6] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 2月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="w-[180px] self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            8
                          </div>
                        </div>
                      </div>
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="w-10 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="flex w-10 items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#7e27b6] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 3月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="w-[420px] self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            20
                          </div>
                        </div>
                      </div>
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="w-[60px] self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            2
                          </div>
                        </div>
                      </div>
                      <div className="flex h-2.5 items-center gap-2.5 relative self-stretch w-full">
                        <div className="flex w-10 items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#7e27b6] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-3.00px] mb-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 4月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-[440px] self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            21
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-10 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex w-10 items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#7e27b6] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 5月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex-1 self-stretch grow bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            31
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-20 bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            3
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex w-[100px] items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#7e27b6] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 6月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex w-[260px] items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#5590ff] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            12
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-20 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            3
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex w-10 items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#7e27b6] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 7月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-80 self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            15
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#7e27b6] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 8月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-[180px] self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            8
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-[60px] self-stretch bg-[#7e27b6] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 9月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-[120px] self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            9
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-[53px] self-stretch bg-[#7e27b6] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 10月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-40 self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            7
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-10 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex w-10 items-center justify-end gap-[3px] px-2.5 py-0 relative self-stretch bg-[#7e27b6] rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 11月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#7e27b6] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[60px] [font-family:'Noto_Sans_JP-Regular',Helvetica] text-[10px] relative font-normal text-[#4e4e4e] tracking-[0] leading-[normal]">
                      112 年 12月
                    </div>
                    <div className="flex flex-col items-start gap-px relative flex-1 grow">
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#5590ff] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#ffba08] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="w-5 self-stretch bg-[#7e27b6] flex items-center justify-end gap-[3px] px-2.5 py-0 relative rounded-[5px]" />
                        <div className="inline-flex items-center gap-px relative self-stretch flex-[0_0_auto]">
                          <div className="w-[15px] mt-[-1.00px] text-[10px] text-center relative [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-secondary tracking-[0] leading-[normal]">
                            0
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
    </div>
  )
}