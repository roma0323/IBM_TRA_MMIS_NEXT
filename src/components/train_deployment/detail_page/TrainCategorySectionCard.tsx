import React, { useState } from 'react';
import { DataCard } from "@/components/train_deployment/DataCard";

type MyComponentProps = {
  trainName: string;
  trainCount: number;
  onClick: () => void;
  isActive: boolean;
  carcatalog: string; // Add the carcatalog prop
}

const DeploymentByTrainCategory: React.FC<MyComponentProps> = ({ trainName, trainCount, onClick, isActive, carcatalog }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    onClick();
  };

  let color = "";

  switch (carcatalog) {
    case "城際列車":
      color = `#538164`;
      break;
    case "電力機車":
      color = `#FFBB54`;
      break;
    case "柴電機車":
      color = `#D9730D`;
      break;
    case "柴液機車":
      color = `#C3554E`;
      break;
    case "客車":
      color = `#00BBC7`;
      break;
    case "柴油客車":
      color = `#9F8170`;
      break;
    case "貨車":
      color = `#8F65AF`;
      break;
    case "通勤列車":
      color = `#28BF02`;
      break;
    default:
      color = "#397EFF";
  }


  return (
    <div
      className={`p-4 self-stretch   bg-[#3034380d] rounded-lg  cursor-pointer hover:shadow-lg
        ${isActive ? 'border-l-4' : ''} flex-col justify-center relative`}
      style={{ borderColor: isActive ? color : 'transparent' }}  // Apply dynamic border color here
      onClick={handleToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-lg">
        {trainName}
      </div>
      <div className="flex w-full">
        <DataCard text="22" text1="可用數" />
        <DataCard text="22" text1="總輛數" />
        <DataCard text="22" text1="可用率" />
      </div>
    </div>
  );
};

export default DeploymentByTrainCategory;
