import PropTypes from "prop-types";
import React from "react";

interface Props {
  text: string;
  text1: string;
}

export const DataCard = ({ text = "2681", text1 = "車輛可用數" }: Props): JSX.Element => {
  return (
    <div className="flex h-[75px] items-center justify-center gap-2.5 relative flex-1 grow">
      <div className="flex flex-col items-start justify-center gap-[5px]  relative flex-1 self-stretch grow bg-white rounded-[10px] overflow-hidden">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px]  text-2xl  leading-[normal]">
              {text}
            </div>
          </div>
          <div className="relative text-sm w-fit ">
            {text1}
          </div>
        </div>
      </div>
    </div>
  );
};

DataCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};