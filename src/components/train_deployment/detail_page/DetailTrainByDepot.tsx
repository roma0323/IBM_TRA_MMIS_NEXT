import React from "react";

interface DetailTrainByDepotProps {
    trainName: string;
}

const DetailTrainByDepot: React.FC<DetailTrainByDepotProps> = ({ trainName }) => {
    return (
        <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded overflow-hidden border-l-4 flex-col justify-center relative">
            <div className="relative w-fit mt-[-4.00px]">
                台北機務段 - {trainName}
            </div>
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start w-full flex">
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>總數量（車組）</div>
                        <div>1</div>
                    </div>
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>可用</div>
                        <div>1</div>
                    </div>
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>檢修 - w或保養</div>
                        <div>1</div>
                    </div>
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>檢修 - 段修</div>
                        <div>1</div>
                    </div>
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>檢修 - 場修</div>
                        <div>1</div>
                    </div>
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>其他</div>
                        <div>1</div>
                    </div>
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>可用率</div>
                        <div>1</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTrainByDepot;
