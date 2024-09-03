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
    <div className="p-4 mx-3 m-3  bg-[#3034380d] rounded-xl  border-l-4">
      {maintenanceData.deptdesc} - {maintenanceData.cartype}
      {maintenanceData ? (
        <div className="flex flex-col py-2 self-stretch">
          {attributes.map((attr, index) => (
            <div key={index} className="w-full pt-1 px-6 flex  justify-between">
              <p>{attr.label}:</p>
              <p>{attr.value}</p>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
              <div>sdcsdcdsc</div>
            </div>
          ))}
          {maintenanceData.url ? (
            <div className="w-full pt-1 px-6 flex  justify-between">
              <a
                href={maintenanceData.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div>No maintenance data available.</div>
      )}
    </div>
  );
};

export default MaintenanceCard;
