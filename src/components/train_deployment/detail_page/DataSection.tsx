import React from 'react';
import { DataCard } from "@/components/train_deployment/DataCard";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";
import BigPieChart from "@/components/train_deployment/BigPieChart";

type DataSectionProps = {
  cntSum: number;
  readySum: number;
  carcatalog: string; // Add the carcatalog prop

};

const DataSection: React.FC<DataSectionProps> = ({ cntSum, readySum, carcatalog }) => (
  <div className="h-full w-full inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">


    <div className="w-full flex-[0_0_auto] rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
      <div className="flex flex-col items-start justify-center p-2.5 w-full border-b border-[#646464]">
        分配資訊
      </div>
      <div className="flex flex-col items-start gap-[5px] px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
          <DataCard text={readySum.toString()} text1="可用數" />
          <DataCard text={cntSum.toString()} text1="總輛數" />
          <DataCard text={`${Math.round((readySum / cntSum) * 100)}%`} text1="可用率" />
        </div>
      </div>
    </div>



    <div className="w-full self-stretch flex-[0_0_auto] rounded-lg flex flex-col items-center relative bg-white overflow-hidden">
      <div className="flex flex-col items-start justify-center p-2.5 w-full border-b border-[#646464]">
        30 天使用率
      </div>
      <UseRateAreaChart styleTemplate={carcatalog} /> {/* Pass the carcatalog as styleTemplate */}
    </div>
    <div className="w-full h-full relative rounded-lg flex flex-col items-start justify-start bg-white">
      <div className="flex flex-col items-start justify-center p-2.5 w-full border-b border-[#646464]">
        城際列車 - 車種配置
      </div>
      <div className="h-full relative w-full flex items-start justify-start">
        <BigPieChart styleTemplate={carcatalog} />
      </div>
    </div>
  </div>
);

export default DataSection;
