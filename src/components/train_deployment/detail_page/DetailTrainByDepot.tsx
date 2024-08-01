import React from "react";

interface DetailTrainByDepotProps {
  trainName: string;
  onItemClick: (itemName: string) => void;  // Prop for handling item clicks
}

const DetailTrainByDepot: React.FC<DetailTrainByDepotProps> = ({ trainName, onItemClick }) => {
  return (
    <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded overflow-hidden border-l-4 flex-col justify-center relative">
      <div className="relative w-fit mt-[-4.00px]">
        台北機務段 - {trainName}
      </div>
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start w-full flex">
          <div
            className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"
            onClick={() => onItemClick('總數量（車組）')}  // Handle item click
          >
            <div>總數量（車組）</div>
            <div>1</div>
          </div>
          <div
            className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"
            onClick={() => onItemClick('可用')}  // Handle item click
          >
            <div>可用</div>
            <div>1</div>
          </div>
          <div
            className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"
            onClick={() => onItemClick('檢修 - w或保養')}  // Handle item click
          >
            <div>檢修 - w或保養</div>
            <div>1</div>
          </div>
          <div
            className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"
            onClick={() => onItemClick('檢修 - 段修')}  // Handle item click
          >
            <div>檢修 - 段修</div>
            <div>1</div>
          </div>
          <div
            className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"
            onClick={() => onItemClick('檢修 - 場修')}  // Handle item click
          >
            <div>檢修 - 場修</div>
            <div>1</div>
          </div>
          <div
            className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"
            onClick={() => onItemClick('其他')}  // Handle item click
          >
            <div>其他</div>
            <div>1</div>
          </div>
          <div
            className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"
            onClick={() => onItemClick('可用率')}  // Handle item click
          >
            <div>可用率</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTrainByDepot;
