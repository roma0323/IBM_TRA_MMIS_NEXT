import React from "react";

type CarInfoSectionProps = {
  baseinfo: {
    description: string;
    carclass: string;
    manufacturer: string;
    vendor: string;
    manufacturerdate: string;
    testrundate: string;
    procrundate: string;
    expectedlife: number;
  };
};

const CarInfoSection: React.FC<CarInfoSectionProps> = ({ baseinfo }) => {
  return (
    <div className="size-full pl-4 relative grid grid-cols-2 items-center flex grow">
      <div>
        <div className="font-semibold text-lg">車型</div>
        <div>{baseinfo.description}</div>
      </div>
      <div>
        <div className="font-semibold text-lg">製造商</div>
        <div>{baseinfo.manufacturer}</div>
      </div>
      <div>
        <div className="font-semibold text-lg">車等</div>
        <div>{baseinfo.carclass}</div>
      </div>
      <div>
        <div className="font-semibold text-lg">供應商</div>
        <div>{baseinfo.vendor}</div>
      </div>
      <div>
        <div className="font-semibold text-lg">預計使用年限</div>
        <div>{baseinfo.expectedlife}</div>
      </div>
      <div>
        <div className="font-semibold text-lg">最早製造日期</div>
        <div>{baseinfo.manufacturerdate}</div>
      </div>
      <div>
        <div className="font-semibold text-lg">最早試運日期</div>
        <div>{baseinfo.testrundate}</div>
      </div>
      <div>
        <div className="font-semibold text-lg">最早啟用日期</div>
        <div>{baseinfo.procrundate}</div>
      </div>
    </div>
  );
};

export default CarInfoSection;