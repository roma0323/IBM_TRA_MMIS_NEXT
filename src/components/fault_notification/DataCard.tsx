import PropTypes from "prop-types";
import React from "react";
import { PropertyDefaultWrapper } from "@/components/fault_notification/PropertyDefaultWrapper";

interface Props {
  prop: "one";
  prop1: "light";
  className: any;
  override: JSX.Element;
  divClassName: any;
  frameClassName: any;
  hasDiv: boolean;
  text: string;
  divClassNameOverride: any;
}

export const DataCard = ({
  prop,
  prop1,
  className,
  override = (
    <PropertyDefaultWrapper
      className="!flex-[0_0_auto]"
      hasEllipse={false}
      property1="default"
      seriousClassName="!text-[#5590ff]"
      text="總故障通報數"
    />
  ),
  divClassName,
  frameClassName,
  hasDiv = true,
  text = "139",
  divClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`flex h-[100px] items-center justify-center gap-2.5 relative ${className}`}>
      <div
        className={`flex flex-col items-start justify-center gap-[5px] p-2.5 relative flex-1 self-stretch grow bg-white rounded-[10px] overflow-hidden ${divClassName}`}
      >
        <div
          className={`flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] ${frameClassName}`}
        >
          <div className="items-center gap-2.5 px-0 py-[3px] rounded-[50px] inline-flex justify-center relative flex-[0_0_auto]">
            {override}
          </div>
          {hasDiv && (
            <div
              className={`relative w-fit -ml-7 opacity-0 [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#85ed48] text-sm tracking-[0] leading-[normal] ${divClassNameOverride}`}
            >
              +10%
            </div>
          )}
        </div>
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="flex-col items-start inline-flex justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP-Regular',Helvetica] font-normal text-[#4e4e4e] text-xl tracking-[0] leading-[normal]">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DataCard.propTypes = {
  prop: PropTypes.oneOf(["one"]),
  prop1: PropTypes.oneOf(["light"]),
  hasDiv: PropTypes.bool,
  text: PropTypes.string,
};