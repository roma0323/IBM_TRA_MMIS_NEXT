import React, { useState } from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import { InventoryOverview } from "@/types/type";

type Props = {
  CardDataByLevel: InventoryOverview;
  isActive: boolean;
  onToggle: () => void;
};

export const InventoryTypeCard: React.FC<Props> = ({
  CardDataByLevel,
  isActive,
  onToggle,
}) => {
  const [clickedDiv, setClickedDiv] = useState<string | null>("sum_issue_mount");

  return (
    <div
      className={`mt-3 p-3 rounded-lg flex-col inline-flex transform ${
        isActive && clickedDiv !== null ? "bg-slate-100" : ""
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <span className="text-5xl">{CardDataByLevel.dept}</span>
        
      </div>
    </div>
  );
};

export default InventoryTypeCard;