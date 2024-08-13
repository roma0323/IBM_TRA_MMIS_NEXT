"use client";

import React, {useState } from "react";
import { TrainInFactoryCard } from "@/components/factory_maintenance/TrainInFactoryCard";
import ComposedChartMonthly from "@/components/factory_maintenance/ComposedChartMonthly";
import ComposedChartAccmulate from "@/components/factory_maintenance/ComposedChartAccmulate";
import { factoryMaintenanceOverall } from "@/types/type";


const getCurrentMonthIndex = (): number => {
    const date = new Date();
    return date.getMonth(); // January is 0, February is 1, etc.
  }

const ClientPage: React.FC<factoryMaintenanceOverall> = ({ Data }) => {
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

    const currentMonthIndex = getCurrentMonthIndex();

    const handleToggle = (index: number) => {
        setActiveCardIndex(activeCardIndex === index ? null : index);
    };

    return (
        <div className=" grid grid-cols-7  relative  flex flex-grow  bg-neutral-100 gap-4 p-6">
            <div className="col-span-2 bg-white items-center relative rounded-lg overflow-hidden">
                <div className="flex flex-col items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                    機廠檢修預覽
                </div>
                {Data.map((factory, index) => (
                    <TrainInFactoryCard
                        key={index}
                        factoryLocation={factory.departmentName} // Note the typo fix
                        totalVehicles={factory.infaccnt}
                        cumulativeAchievementRate={factory.monthData[currentMonthIndex]['累積達成']/factory.monthData[currentMonthIndex]['累積預計']}
                        cumulativeRepairedVehicles={factory.monthData[currentMonthIndex]['累積達成']}
                        cumulativeTargetRate={factory.monthData[currentMonthIndex]['累積預計']}
                        annualTargetNumber={factory.monthData[factory.monthData.length - 1]['累積預計']}
                        isActive={activeCardIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>

            <div className="col-span-5 bg-white flex flex-col items-center relative rounded-lg">
                <div className="items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                    機廠檢修走勢
                </div>
                {Data.map((chartData, index) => (
                    activeCardIndex === index && (
                        <div key={index} className="flex-grow w-full flex flex-col my-8 items-center justify-start">
                            <ComposedChartMonthly data={chartData.monthData} />
                            <ComposedChartAccmulate data={chartData.monthData} />
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}
export default ClientPage;


