import React from "react";

interface DetailTrainByDepotProps {
    trainName: string;
}

const MaintenanceCard: React.FC<DetailTrainByDepotProps> = ({ trainName }) => {
    return (
        <div className="flex items-start gap-3 p-4 self-stretch w-full flex-[0_0_auto] bg-[#3034380d] rounded overflow-hidden border-l-4 flex-col justify-center relative">
            <div className="relative w-fit mt-[-4.00px]">
            車組"EMU503"-代號"64"
            </div>
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start w-full flex">
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>動態說明</div>
                        <div>1</div>
                    </div>
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>檢修級別</div>
                        <div>1</div>
                    </div>
                    <div className="w-full py-1 px-6 flex items-center justify-between relative cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200">
                        <div>開工至完工日期</div>
                        <div>1</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MaintenanceCard;
