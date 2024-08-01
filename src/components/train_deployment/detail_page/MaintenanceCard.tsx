import React from "react";

interface MaintenanceCardProps {
  trainName: string;
  selectedItem: string; // Prop for selected item
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({
  trainName,
  selectedItem,
}) => {
  // Array of maintenance details with labels and condition-based values
  const maintenanceDetails = [
    {
      label: "動態說明",
      value: selectedItem === "可用" ? "1" : "$$1$$",
    },
    {
      label: "檢修級別",
      value: selectedItem === "檢修 - 段修" ? "2" : "$$1$$",
    },
    {
      label: "開工至完工日期",
      value: selectedItem === "檢修 - 場修" ? "3" : "$$1$$",
    },
    {
      label: "send the data here",
      value: selectedItem,
    },
  ];
  return (
    <div className="flex items-start gap-3 p-4 self-stretch mx-3 mt-3 bg-[#3034380d] rounded-xl overflow-hidden border-l-4 flex-col justify-center relative">
      <div className="relative w-fit mt-[-4.00px]">
        {trainName} - {selectedItem} {/* Display selected item */}
      </div>
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start w-full flex">
          {maintenanceDetails.map((detail, index) => (
            <div
              key={index}
              className="w-full py-1 px-6 flex items-center justify-between relative "
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
