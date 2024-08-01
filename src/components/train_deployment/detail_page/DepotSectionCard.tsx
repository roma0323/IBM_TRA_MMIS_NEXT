import React from "react";

interface DetailTrainByDepotProps {
  trainName: string;
  onItemClick: (itemName: string) => void;  // Prop for handling item clicks
}

const DetailTrainByDepot: React.FC<DetailTrainByDepotProps> = ({ trainName, onItemClick }) => {
  // Array of items with their labels and values
  const items = [
    { label: '總數量（車組）', value: '1' },
    { label: '可用', value: '1' },
    { label: '檢修 - w或保養', value: '1' },
    { label: '檢修 - 段修', value: '1' },
    { label: '檢修 - 場修', value: '1' },
    { label: '其他', value: '1' },
    { label: '可用率', value: '1' },
  ];
  // 
//
  return (
    <div className={` flex items-start gap-3 p-4 self-stretch mx-3 mt-3 flex-[0_0_auto] bg-[#3034380d] rounded-xl overflow-hidden border-l-4 flex-col justify-center relative $ isActive ? 'border-[#397EFF] border-l-4' : ''} flex-col justify-center relative`}>
      <div className="relative w-fit mt-[-4.00px]">
        台北機務段 - {trainName}
      </div>
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start w-full flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"
              onClick={() => onItemClick(item.label)}  // Handle item click
            >
              <div>{item.label}</div>
              <div>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailTrainByDepot;
