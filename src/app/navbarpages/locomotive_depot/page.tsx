// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { LabelChip } from "@/components/locomotive_depot/LabelChip"
import { Header } from "@/components/locomotive_depot/header"

export default function Page() {
    return    (
    
    <div className="bg-gray-100 grid grid-cols-4 flex min-h-screen  relative justify-center gap-2.5 p-6  ">




      <div className="inline-flex flex-col h-[678.82px] items-start gap-2.5 relative flex-[0_0_auto] bg-white rounded-lg overflow-hidden">
        <div className="bg-white flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
          <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base relative w-fit tracking-[0] leading-[normal]">
            城際列車 - 機務段分配
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-4 p-3 relative flex-1 grow">
          <div className="flex flex-col w-[390px] items-start relative flex-[0_0_auto] bg-[#f5f5f533] rounded-lg overflow-hidden">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base relative w-fit tracking-[0] leading-[normal]">
                台北機務段車輛配置
              </div>
            </div>
            <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <img className="self-stretch w-full object-cover relative h-px" alt="Line" src="line-6.svg" />
              <div className="flex flex-col items-start justify-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="px-2.5 py-1 self-stretch rounded-[10px] overflow-hidden flex items-center gap-[5px] relative flex-1 grow">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="inline-flex items-center justify-center gap-2.5 p-[3px] relative flex-[0_0_auto] rounded-[50px]">
                        <LabelChip className="!flex-[0_0_auto]" property1="default" />
                      </div>
                      <div className="opacity-0 font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#36aa00] text-[length:var(--label-label-large-semi-font-size)] relative w-fit tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                        +10%
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        67
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="px-2.5 py-1 self-stretch rounded-[10px] overflow-hidden flex items-center gap-[5px] relative flex-1 grow">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[3px] relative flex-[0_0_auto] rounded-[50px]">
                        <LabelChip
                          className="!flex-[0_0_auto]"
                          property1="default"
                          seriousClassName="!text-[#d9730d]"
                          text="通勤列車"
                        />
                      </div>
                      <div className="opacity-0 font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#36aa00] text-[length:var(--label-label-large-semi-font-size)] relative w-fit tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                        +10%
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="px-2.5 py-1 self-stretch rounded-[10px] overflow-hidden flex items-center gap-[5px] relative flex-1 grow">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[3px] relative flex-[0_0_auto] rounded-[50px]">
                        <LabelChip
                          className="!flex-[0_0_auto]"
                          property1="default"
                          seriousClassName="!text-[#d9730d]"
                          text="通勤列車"
                        />
                      </div>
                      <div className="opacity-0 font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#36aa00] text-[length:var(--label-label-large-semi-font-size)] relative w-fit tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                        +10%
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        38
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="px-2.5 py-1 self-stretch rounded-[10px] overflow-hidden flex items-center gap-[5px] relative flex-1 grow">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[3px] relative flex-[0_0_auto] rounded-[50px]">
                        <LabelChip
                          className="!flex-[0_0_auto]"
                          property1="default"
                          seriousClassName="!text-[#538164]"
                          text="柴油客車"
                        />
                      </div>
                      <div className="opacity-0 font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#36aa00] text-[length:var(--label-label-large-semi-font-size)] relative w-fit tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                        +10%
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        26
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="px-2.5 py-1 self-stretch rounded-[10px] overflow-hidden flex items-center gap-[5px] relative flex-1 grow">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[3px] relative flex-[0_0_auto] rounded-[50px]">
                        <LabelChip
                          className="!flex-[0_0_auto]"
                          property1="default"
                          seriousClassName="!text-[#8f65af]"
                          text="柴液機車"
                        />
                      </div>
                      <div className="opacity-0 font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#36aa00] text-[length:var(--label-label-large-semi-font-size)] relative w-fit tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                        +10%
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#f5f5f533] rounded-lg overflow-hidden">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base relative w-fit tracking-[0] leading-[normal]">
                新竹機務段車輛配置
              </div>
            </div>
            <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <img className="self-stretch w-full object-cover relative h-px" alt="Line" src="line-6.svg" />
              <div className="flex flex-col items-start justify-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="px-2.5 py-1 self-stretch rounded-[10px] overflow-hidden flex items-center gap-[5px] relative flex-1 grow">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="inline-flex items-center justify-center gap-2.5 p-[3px] relative flex-[0_0_auto] rounded-[50px]">
                        <LabelChip className="!flex-[0_0_auto]" property1="default" text="ALL" />
                      </div>
                      <div className="opacity-0 font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#36aa00] text-[length:var(--label-label-large-semi-font-size)] relative w-fit tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                        +10%
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        233
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#f5f5f533] rounded-lg overflow-hidden">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base relative w-fit tracking-[0] leading-[normal]">
                花蓮機務段車輛配置
              </div>
            </div>
            <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <img className="self-stretch w-full object-cover relative h-px" alt="Line" src="line-6.svg" />
              <div className="flex flex-col items-start justify-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="px-2.5 py-1 self-stretch rounded-[10px] overflow-hidden flex items-center gap-[5px] relative flex-1 grow">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="inline-flex items-center justify-center gap-2.5 p-[3px] relative flex-[0_0_auto] rounded-[50px]">
                        <LabelChip className="!flex-[0_0_auto]" property1="default" text="ALL" />
                      </div>
                      <div className="opacity-0 font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#36aa00] text-[length:var(--label-label-large-semi-font-size)] relative w-fit tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                        +10%
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        465
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#f5f5f533] rounded-lg overflow-hidden">
            <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base relative w-fit tracking-[0] leading-[normal]">
                七堵機務段車輛配置
              </div>
            </div>
            <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <img className="self-stretch w-full object-cover relative h-px" alt="Line" src="line-6.svg" />
              <div className="flex flex-col items-start justify-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="px-2.5 py-1 self-stretch rounded-[10px] overflow-hidden flex items-center gap-[5px] relative flex-1 grow">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="inline-flex items-center justify-center gap-2.5 p-[3px] relative flex-[0_0_auto] rounded-[50px]">
                        <LabelChip className="!flex-[0_0_auto]" property1="default" text="ALL" />
                      </div>
                      <div className="opacity-0 font-label-label-large-semi font-[number:var(--label-label-large-semi-font-weight)] text-[#36aa00] text-[length:var(--label-label-large-semi-font-size)] relative w-fit tracking-[var(--label-label-large-semi-letter-spacing)] leading-[var(--label-label-large-semi-line-height)] [font-style:var(--label-label-large-semi-font-style)]">
                        +10%
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-title-title-medium-semi font-[number:var(--title-title-medium-semi-font-weight)] text-[#4e4e4e] text-[length:var(--title-title-medium-semi-font-size)] tracking-[var(--title-title-medium-semi-letter-spacing)] leading-[var(--title-title-medium-semi-line-height)] [font-style:var(--title-title-medium-semi-font-style)]">
                        124
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-3 h-[668.82px] items-start relative bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col items-start justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
          <div className="mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-base relative w-fit tracking-[0] leading-[normal]">
            台北機務段資訊
          </div>
        </div>
        <div className="flex flex-col items-center justify-end p-3 relative self-stretch w-full flex-[0_0_auto] rounded overflow-hidden">
          <div className="flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-[#3034380d] overflow-hidden border-b [border-bottom-style:solid]">
            <Header cellType="header" height="normal" />
            <Header
              cellType="header"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="型號"
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="配置"
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="借出"
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="借入"
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="可用"
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="定期"
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="臨時"
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="預備"
            />
            <Header
              cellType="header"
              className="!items-center !w-[52px]"
              headerNameWrapperClassName="!mt-[-2.00px] !mb-[-2.00px] ![justify-content:unset] !p-[unset]"
              height="normal"
              text={
                <>
                  w or
                  <br />
                  保養
                </>
              }
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="段修"
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="廠修"
            />
            <Header
              cellType="header"
              className="!items-center !w-[52px]"
              headerNameWrapperClassName="!mt-[-2.00px] !mb-[-2.00px] ![justify-content:unset] !p-[unset]"
              height="normal"
              text={
                <>
                  待料
                  <br />
                  待修
                </>
              }
            />
            <Header
              cellType="header"
              className="!items-center !w-[52px]"
              headerNameWrapperClassName="!mt-[-2.00px] !mb-[-2.00px] ![justify-content:unset] !p-[unset]"
              height="normal"
              text={
                <>
                  無火
                  <br />
                  回送
                </>
              }
            />
            <Header
              cellType="header"
              className="!w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="停用"
            />
            <Header
              cellType="header"
              className="!mr-[-10.00px] !w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="留車"
            />
            <Header
              cellType="header"
              className="!mr-[-10.00px] !w-[52px]"
              headerNameWrapperClassName="!rounded-[10px] ![justify-content:unset] !overflow-hidden"
              height="normal"
              text="可用率"
            />
          </div>
          <div className="flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white overflow-hidden border-b [border-bottom-style:solid]">
            <Header cellType="body-label" className="!self-stretch" height="normal" />
            <Header cellType="body" className="!self-stretch" height="normal" />
            <Header cellType="body" className="!w-[52px]" height="normal" text1="2" />
            <Header cellType="body" className="!w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!w-[52px]" height="normal" text1="2" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="2" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!mr-[-10.00px] !items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!mr-[-10.00px] !items-center !w-[52px]" height="normal" text1="100%" />
          </div>
          
          <div className="flex items-center gap-px px-2.5 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-white overflow-hidden border-b [border-bottom-style:solid]">
            <Header
              cellType="body-label"
              className="!self-stretch"
              height="normal"
              labelChipSeriousClassName="!text-[#8f65af]"
              labelChipText="柴電機車"
            />
            <Header cellType="body" className="!self-stretch" height="normal" text1="R190" />
            <Header cellType="body" className="!w-[52px]" height="normal" text1="6" />
            <Header cellType="body" className="!w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!w-[52px]" height="normal" text1="6" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="5" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="1" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!mr-[-10.00px] !items-center !w-[52px]" height="normal" text1="0" />
            <Header cellType="body" className="!mr-[-10.00px] !items-center !w-[52px]" height="normal" text1="83%" />
          </div>
          
        </div>
      </div>



    </div>) 

    
  }