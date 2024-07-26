import PropTypes from "prop-types";
import React from "react";
import { DataCard } from "@/components/train_deployment/DataCard";
import  UseRateChart  from "@/components/train_deployment/UseRateChart";

interface Props {
  text: string;
}

export const OverviewCard = ({ text = "柴液機車" }: Props): JSX.Element => {
  return (

    <div className=" bg-white  m-3 items-center relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-bottom hover:border-gray-300 hover:shadow-lg">
              <div className="flex flex-col text-[#397EFF] items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
                  {text}
              </div>
              <div className="flex flex-col items-start px-2.5 py-0 relative self-stretch w-full items-start flex-[0_0_auto] ">
                <div className="flex items-center gap-5 px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] rounded-[5px] overflow-hidden">
                  <DataCard  text="2681" text1="車輛可用數" />
                  <DataCard  text="3197" text1="總車輛數" />
                  <DataCard  text="83.9 %" text1="可用率" />
                </div>
                <UseRateChart />
              </div>
            </div>
  );
};

OverviewCard.propTypes = {
  text: PropTypes.string,
};