import React from "react";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";
import { FetcheGetSumStatusListDataInArray } from "@/types/type";

const DEFAULT_TRAIN_DATA: FetcheGetSumStatusListDataInArray = {
    carcatalog: "Unknown",
    current_ready: 0,
    current_cnt: 0,
    index: 0,
    dept: "total",
    deptdesc: "total",
    cartype: "total",
    belongto: 0.0,
    borrowin: 0.0,
    borrowout: 0.0,
    current_use: 0.0,
    current_temp: 0.0,
    maintain_w: 0.0,
    maintain_sec: 0.0,
    maintain_fac: 0.0,
    oth_waitrep: 0.0,
    oth_return: 0.0,
    oth_stop: 0.0,
    availability: 1.0,
};
export const BigOverviewCard = ({
    Name = "Unknown Train",  // Set the default value for Name
    Data = DEFAULT_TRAIN_DATA,  // Set the default value for Data
}: {
    Name?: string;  // Make Name optional and allow it to have a default value
    Data?: FetcheGetSumStatusListDataInArray;  // Make Data optional and allow it to have a default value
}): JSX.Element => {
    return (

        <div className=" relative size-full  bg-white flex flex-col rounded-lg  hover:shadow-lg">
            <div className=" text-[#397EFF] p-2.5  border-b  border-[#646464]">
                {Name}
            </div>

            <div className="flex flex-grow overflow-auto py-6  px-10 relative ">
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
                        <div className="text-6xl"> {`${Math.round(Data.current_ready / Data.current_cnt * 100).toString()}%`}</div>
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
                <div className="w-3/4" >
                    <UseRateAreaChart styleTemplate="" />
                </div>
            </div>
        </div>
    );
};
