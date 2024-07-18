// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { LabelAndNumberByArea } from "@/components/locomotive_depot/LabelAndNumberByArea"
import { Header } from "@/components/locomotive_depot/header"

export default function Page() {
  return (

    <div className="bg-gray-100 grid grid-cols-4 flex-grow  relative justify-center gap-3 p-6  ">




      <div className=" flex-col  items-start gap-2.5 relative  bg-white rounded-lg h-full overflow-hidden ">

        <div className="flex flex-col text-[#000000] items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
          城際列車 - 機務段分配
        </div>



        <div className="  w-full h-[67dvh] relative  overflow-scroll">
          <div className="flex flex-col w-full items-start relative flex-[0_0_auto] bg-[#f5f5f533] rounded-lg overflow-hidden">
          <LabelAndNumberByArea area_name="台北機務段車輛配置"/>
          <LabelAndNumberByArea area_name="新竹機務段車輛配置"/>
          <LabelAndNumberByArea area_name="花蓮機務段車輛配置"/>
            



          </div>

        </div>




      </div>

      <div className="flex flex-col col-span-3 items-start relative bg-white rounded-lg overflow-hidden">
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