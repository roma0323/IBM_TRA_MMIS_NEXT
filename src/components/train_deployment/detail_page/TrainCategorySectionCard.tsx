// components/DeploymentByTrainCategory.tsx

import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";

type MyComponentProps = {
  trainName: string;
  onClick: () => void;
  isActive: boolean;
};

const DeploymentByTrainCategory: React.FC<MyComponentProps> = ({
  trainName,
  onClick,
  isActive,
}) => {

  const handleToggle = () => {
    onClick();
  };


  return (
    <div
      className={`p-4 self-stretch bg-secondary-background rounded-lg cursor-pointer hover:border-primary hover:border-l-4
        ${isActive ? "border-l-4" : ""} flex-col justify-center relative border-primary`}
      onClick={handleToggle}
    >
      <div >{trainName}</div>
      <div className="flex w-full justify-around" >
        <DataCard text="" text1="可用數" />
        <DataCard text="" text1="總輛數" />
        <DataCard text="" text1="可用率" />
      </div>
    </div>
  );
};

export default DeploymentByTrainCategory;