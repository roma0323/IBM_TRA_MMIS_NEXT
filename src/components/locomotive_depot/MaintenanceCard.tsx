import React from "react";

interface MaintenanceCardProps {
  trainName: string;
  selectedItem: string; // Prop for selected item
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({
  trainName,
  selectedItem,
}) => {
  // Array of data for the card
  const maintenanceDetails = [
    { label: "動態說明", value: "送修中" },
    { label: "檢修級別", value: "C1" },
    { label: "開工至完工日期", value: "12/3~12/5" },
    { label: "send the data here", value: selectedItem }, // Include the selected item
  ];

  return (
    <div className="flex items-start gap-3 p-4 mx-3 mt-3 self-stretch flex-[0_0_auto] bg-[#3034380d] rounded-xl overflow-hidden border-l-4 flex-col justify-center relative">
      {trainName} - {selectedItem} {/* Display selected item */}
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start w-full flex">
          {maintenanceDetails.map((detail, index) => (
            <div
              key={index}
              className="w-full py-1 px-6 flex items-center justify-between"
            >
              <div>{detail.label}</div>
              <div>{detail.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;
