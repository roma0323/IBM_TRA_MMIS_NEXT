// MaintenanceCard.tsx

import React from "react";

interface MaintenanceCardProps {
  maintenanceData: any; // Accept maintenance data
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({
  maintenanceData,
}) => {
  const attributes = [
    { label: "車組車號", value: maintenanceData.assetnum },
    { label: "檢修級別", value: maintenanceData.worktype },
    { label: "開工", value: maintenanceData.actstart },
    { label: "完工", value: maintenanceData.actfinish },
    { label: "動態代號", value: maintenanceData.type },
    { label: "動態說明", value: maintenanceData.typedesc },
    { label: "借用段", value: maintenanceData.borrowdept },
  ];

  return (
    <div className="flex items-start gap-3 p-4 mx-3 mt-3 self-stretch flex-[0_0_auto] bg-[#3034380d] rounded-xl overflow-hidden border-l-4 flex-col justify-center relative">
      {maintenanceData.deptdesc} - {maintenanceData.cartype}
      {maintenanceData ? (
        <div className="flex inline-flex flex-col items-start w-full items-center justify-between relative self-stretch w-full">
          {attributes.map((attr, index) => (
            <div key={index} className="w-full py-1 px-6 flex items-center justify-between">
              <p>{attr.label}:</p>
              <p>{attr.value}</p>
            </div>
          ))}
          {maintenanceData.url ? (
          <div className="w-full py-1 px-6 flex items-center justify-between">
            <a href={maintenanceData.url} target="_blank" rel="noopener noreferrer">View Details</a>
          </div>
          ):(<div></div>)}
        </div>
      ) : (
        <div>No maintenance data available.</div>
      )}
    </div>
  );
};

export default MaintenanceCard;
