import PropTypes from "prop-types";
import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
// import UseRateLineChart from "@/components/train_deployment/UseRateLineChart";
import UseRateAreaChart from "@/components/train_deployment/UseRateAreaChart";


type ClientPageProps = {
    Data: any;
};

export const BigOverviewCard = ({ Data }: ClientPageProps): JSX.Element => {
    return (

        <div className=" bg-white  m-3 items-center relative rounded-lg overflow-hidden  transition-transform duration-300 ease-in-out transform  hover:border-bottom hover:border-gray-300 hover:shadow-lg">
            <div className="flex flex-col text-[#397EFF] items-start justify-center p-2.5  self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                {Data.NAME}
            </div>
            <div className="flex  gap-5 py-[5px]  w-full h-full rounded-[5px] overflow-hidden">
                <div className="flex-col flex px-8 justify-around w-1/4 ">
                    <div >
                        <div className="text-6xl">{Data.AVAILABLE}</div>
                        <div>可用數</div>
                    </div>
                    <div>
                        <div className="text-6xl">{Data.TOTAL}</div>
                        <div> 總輛數</div>
                    </div>
                    <div>
                        <div className="text-6xl"> {`${Math.round(Data.RATION_TODAY * 100).toString()}%`}</div>
                        <div> 可用率</div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-2 justify-start">
                    <p className="text-center">
                        <span className="block">近</span>
                        <span className="block">30</span>
                        <span className="block">日</span>
                        <span className="block">使</span>
                        <span className="block">用</span>
                        <span className="block">率</span>
                    </p>
                </div>
                <UseRateAreaChart />
            </div>
        </div>
    );
};

BigOverviewCard.propTypes = {
    text: PropTypes.string,
};