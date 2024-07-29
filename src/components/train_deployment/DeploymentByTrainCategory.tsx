import React, { useState } from 'react';
import SingleBar from "@/components/train_deployment/SingleBar";
import SmallPieChart from "@/components/train_deployment/SmallPieChart";

interface MyComponentProps {
  trainName: string;
  trainCount: number;
}

const DeploymentByTrainCategory: React.FC<MyComponentProps> = ({ trainName, trainCount }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div
      className={"flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded overflow-hidden  border-[#397EFF] border-l-4 flex-col justify-center relative"}
      onClick={handleToggle}
    >
      <div className="relative w-fit mt-[-4.00px]">
        {trainName}
      </div>
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto] flex w-[150px] relative">
        車輛數
          <div>
            {trainCount} 輛
          </div>
        </div>
        <div className="relative w-[80px] h-[80px] inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <SmallPieChart />
        </div>
      </div>
      <div className="justify-center self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
        <SingleBar />
      </div>
    </div>
  );
};

export default DeploymentByTrainCategory;