import React, { useState } from "react";

type Props = {
  factory:  { factory_id: string, name: string };
  isActive: boolean;
  onToggle: () => void;
};

export const InventoryTypeCard: React.FC<Props> = ({
  factory,
  isActive,
  onToggle,
}) => {
  const [clickedDiv, setClickedDiv] = useState<string | null>("");

  return (
    <div
      className={`mt-1 p-2 rounded-lg flex-col inline-flex transform ${
        isActive && clickedDiv !== null ? "bg-slate-100" : ""
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <span className="text-md">{factory.name}</span>
        
      </div>
    </div>
  );
};

export default InventoryTypeCard;