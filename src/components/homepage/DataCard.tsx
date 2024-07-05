import PropTypes from "prop-types";
import React from "react";

interface Props {
  prop: "one";
  prop1: "light";
  className: any;
  text: string;
  text1: string;
}

export const DataCard = ({ prop, prop1, className, text = "2681", text1 = "車輛可用數" }: Props): JSX.Element => {
  return (
    <div className={`flex h-[75px] items-center justify-center gap-2.5 relative ${className}`}>
      <div className="flex flex-col items-start justify-center gap-[5px] p-2.5 relative flex-1 self-stretch grow  rounded-[10px] overflow-hidden">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-xl tracking-[0] leading-[normal]">
              {text}
            </div>
          </div>
          <div className="relative w-fit font-label-label-medium-semi font-[number:var(--label-label-medium-semi-font-weight)]  text-[length:var(--label-label-medium-semi-font-size)] tracking-[var(--label-label-medium-semi-letter-spacing)] leading-[var(--label-label-medium-semi-line-height)] [font-style:var(--label-label-medium-semi-font-style)]">
            {text1}
          </div>
        </div>
      </div>
    </div>
  );
};

DataCard.propTypes = {
  prop: PropTypes.oneOf(["one"]),
  prop1: PropTypes.oneOf(["light"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};