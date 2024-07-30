
"use client";

import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import BigPieChart from "@/components/train_deployment/BigPieChart";
import DeploymentByTrainCategory from "@/components/train_deployment/DeploymentByTrainCategory";
// import UseRateLineChart from "@/components/train_deployment/UseRateLineChart";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";

const trainData = [
    { trainName: "太魯閣-TEMU1000", trainCount: 200 },
    { trainName: "普悠瑪-TEMU2000", trainCount: 150 },
    { trainName: "自強號-TEMU3000", trainCount: 120 },
    // Add more train data as needed
];
type ClientPageProps = {
    initialData: any[];
};


const DetailClientPage: React.FC<ClientPageProps> = ({ initialData }) => {
    const cnt_sum = initialData.reduce((acc, item) => acc + item.current_cnt, 0);
    const ready_sum = initialData.reduce((acc, item) => acc + item.current_ready, 0);
    return (
        <div className=" grid grid-cols-3 flex items-start gap-4 p-6 relative self-stretch flex-[0_0_auto] bg-neutral-100   ">

            <div className="h-full inline-flex flex-col  items-start gap-4 relative flex-[0_0_auto]">

                {/* 分配資訊   */}
                <div className="w-full flex-[0_0_auto] rounded-lg flex flex-col items-start relative bg-white overflow-hidden">
                    <div className="flex flex-col items-start justify-center p-2.5   w-full  border-b  border-[#646464]">
                        分配資訊
                    </div>
                    <div className="flex flex-col items-start gap-[5px] px-2.5 py-0 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                            <DataCard text={cnt_sum} text1="可用數" />
                            <DataCard text={ready_sum} text1="總輛數" />
                            <DataCard text={`${Math.round(ready_sum/cnt_sum*100).toString()}%`} text1="可用率" />
                        </div>
                    </div>
                </div>
                {/* 分配資訊   */}

                {/* 近30 天使用率   */}
                <div className="w-full self-stretch  flex-[0_0_auto] rounded-lg flex flex-col items-center relative bg-white overflow-hidden">
                    <div className="flex flex-col items-start justify-center p-2.5   w-full  border-b  border-[#646464]">
                        近30 天使用率
                    </div>
                    <UseRateAreaChart />

                </div>
                {/* 近30 天使用率   */}

                {/* 近30 城際列車 - 車種配置   */}
                <div className=" w-full h-full relative flex-1 rounded-lg flex flex-col items-center justify-center relative bg-white 	">

                    <div className="flex flex-col items-start justify-center  p-2.5   w-full  border-b  border-[#646464]">
                    城際列車 - 車種配置
                    </div>
                    <div className="relative w-full  flex items-start justify-center ">
                        <BigPieChart />
                    </div>
                </div>
                {/* 近30 城際列車 - 車種配置   */}
            </div>



            <div className="h-full gap-2.5 flex-1 grow rounded-lg flex flex-col items-start relative bg-white overflow-hidden">

                <div className="flex flex-col items-start justify-center p-2.5   w-full  border-b  border-[#646464]">
                    城際列車 - 車種分配資訊
                </div>

                <div className="overflow-auto flex flex-col items-start gap-2.5 px-3 py-2 relative  w-full h-[67vh]" >
                    {trainData.map((train, index) => (
                        <DeploymentByTrainCategory
                            key={index}
                            trainName={train.trainName}
                            trainCount={train.trainCount}
                        />
                    ))}
                </div>
            </div>

            <div className="h-full gap-4 flex-1 grow flex flex-col items-start relative bg-white">

            </div>


        </div>
    );
};


export default DetailClientPage;
