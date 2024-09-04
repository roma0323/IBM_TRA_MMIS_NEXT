// components/DeploymentByTrainCategory.tsx

import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import { getCarColor } from "@/lib/getCarColor"; // Import the utility function

type MyComponentProps = {
  trainName: string;
  trainCount: number;
  onClick: () => void;
  isActive: boolean;
  carcatalog: string;
};

const DeploymentByTrainCategory: React.FC<MyComponentProps> = ({
  trainName,
  trainCount,
  onClick,
  isActive,
  carcatalog,
}) => {

  const handleToggle = () => {
    onClick();
  };

  // Use the utility function to get the color
  const color = getCarColor(carcatalog);

  return (
    <div
      className={`p-4 self-stretch bg-[#3034380d] rounded-lg cursor-pointer hover:shadow-lg
        ${isActive ? "border-l-4" : ""} flex-col justify-center relative`}
      style={{ borderColor: isActive ? color : "transparent" }} // Apply dynamic border color here
      onClick={handleToggle}
    >
      <div className="text-lg">{trainName}</div>
      <div className="flex w-full justify-around" >
        <DataCard text="" text1="可用數" />
        <DataCard text="" text1="總輛數" />
        <DataCard text="" text1="可用率" />
      </div>
    </div>
  );
};

export default DeploymentByTrainCategory;