import React, { useState } from 'react';
import SingleBar from "@/components/train_deployment/SingleBar";
import SmallPieChart from "@/components/train_deployment/SmallPieChart";

interface MyComponentProps {
  trainName: string;
  trainCount: number;
  onClick: () => void;
}

const DeploymentByTrainCategory: React.FC<MyComponentProps> = ({ trainName, trainCount, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
    onClick();
  };

  return (
    <div
      className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded overflow-hidden border-[#397EFF] border-l-4 flex-col justify-center relative"
      onClick={handleToggle}
    >
      <div className="text-lg">
        {trainName}
      </div>
      <div className="flex items-center justify-between relative self-stretch w-full">
        <div className="ml-2 inline-flex flex-col items-start relative flex relative">
          <div className="text-4xl">
            {trainCount}
          </div>
          <div className="text-md">車輛數</div>
        </div>
        <div className="relative w-[80px] h-[80px] inline-flex flex-col items-center justify-center flex-[0_0_auto]">
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
