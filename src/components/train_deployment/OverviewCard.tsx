import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";


export const OverviewCard = ({ Data }: {Data: any}): JSX.Element => {

  let style_template = "";

  switch (Data.carcatalog) {
    case "城際列車":
      style_template = `text-[#538164] `;
      break;
    case "電力機車":
      style_template = `text-[#FFBB54]`;
      break;
    case "柴電機車":
      style_template = `text-[#D9730D]`;
      break;
    case "柴液機車":
      style_template = `text-[#C3554E]`;
      break;
    case "客車":
      style_template = `text-[#00BBC7]`;
      break;
    case "柴油客車":
      style_template = `text-[#9F8170]`;
      break;
    case "貨車":
      style_template = `text-[#8F65AF]`;
      break;
    case "通勤列車":
      style_template = `text-[#28BF02]`;
      break;
    default:
      style_template = "text-[#397EFF]";
  }
  return (

    <div className=" bg-white  m-3 items-center relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-bottom hover:border-gray-300 hover:shadow-lg">
      <div className={`flex flex-col items-start justify-center p-2.5  border-b border-[#646464] ${style_template}`}              >
        {Data.carcatalog}
      </div>
      <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full items-start flex-[0_0_auto] ">
        <div className="flex w-full py-2">
          <DataCard text={Data.current_ready} text1="可用數" />
          <DataCard text={Data.current_cnt} text1="總輛數" />
          <DataCard text={`${Math.round(Data.current_ready / Data.current_cnt * 100).toString()}%`} text1="可用率" />
        </div>
        <UseRateAreaChart styleTemplate={Data.carcatalog} />
      </div>
    </div>
  );
};
