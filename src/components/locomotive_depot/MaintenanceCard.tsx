import React from "react";

interface MaintenanceCardProps {
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({
}) => {


  return (
    <div className="flex items-start gap-3 p-4 mx-3 mt-3 self-stretch flex-[0_0_auto] bg-[#3034380d] rounded-xl overflow-hidden border-l-4 flex-col justify-center relative">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
      <div>passed data</div>
      </div>
    </div>
  );
};

export default MaintenanceCard;