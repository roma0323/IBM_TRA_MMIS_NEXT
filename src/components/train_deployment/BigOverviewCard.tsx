import React from "react";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";

export const BigOverviewCard = ({ Data }: {Data: any;}): JSX.Element => {
    return (

        <div className=" bg-white  m-3  relative rounded-lg  hover:shadow-lg">
            <div className=" text-[#397EFF] p-2.5  border-b  border-[#646464]">
                {Data.carcatalog}
            </div>
            
            <div className="flex  py-6  px-10 w-full h-full">
                <div className="flex-col flex  justify-around w-1/4 ">
                    <div >
                        <div className="text-6xl">{Data.current_ready}</div>
                        <div>可用數</div>
                    </div>
                    <div>
                        <div className="text-6xl">{Data.current_cnt}</div>
                        <div> 總輛數</div>
                    </div>
                    <div>
                        <div className="text-6xl"> {`${Math.round(Data.current_ready/Data.current_cnt * 100).toString()}%`}</div>
                        <div> 可用率</div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start">
                    <p className="text-center">
                        <span className="block">30</span>
                        <span className="block">日</span>
                        <span className="block">使</span>
                        <span className="block">用</span>
                        <span className="block">率</span>
                    </p>
                </div>
                <UseRateAreaChart styleTemplate="" />
                </div>
        </div>
    );
};
