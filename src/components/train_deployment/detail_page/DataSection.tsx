import React from 'react';
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";
import BigPieChart from "@/components/train_deployment/detail_page/BigPieChart";


const DataSection = ({
  cntSum=0, 
  readySum=0,  
  carcatalog="Unknown"
}: {
  cntSum?: number;  
  readySum?: number; 
  carcatalog? :string; 
})   => (
  <div className="h-full w-full inline-flex flex-col items-start gap-4 relative ">


    <div className="w-full flex-[0_0_auto] rounded-lg flex flex-col  relative bg-white ">
      <div className=" p-2.5  border-b border-[#646464]">
        分配資訊
      </div>
      <div className="flex w-full">
        <DataCard text={readySum.toString()} text1="可用數" />
        <DataCard text={cntSum.toString()} text1="總輛數" />
        <DataCard text={`${Math.round((readySum / cntSum) * 100)}%`} text1="可用率" />
      </div>
    </div>



    <div className="w-full flex-[0_0_auto] rounded-lg flex flex-col  relative bg-white ">
      <div className=" p-2.5  border-b border-[#646464]">
        30 天使用率
      </div>
      <UseRateAreaChart styleTemplate={carcatalog} /> 
    </div>

    <div className="w-full flex-[0_0_auto] rounded-lg flex flex-col  relative bg-white ">
      <div className=" p-2.5  border-b border-[#646464]">
        城際列車 - 車種配置
      </div>
      <div className="h-full relative w-full flex items-start justify-start">
        <BigPieChart styleTemplate={carcatalog} />
      </div>
    </div>
  </div>
);

export default DataSection;
