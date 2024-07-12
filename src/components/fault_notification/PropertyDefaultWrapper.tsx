import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "default";
  className: any;
  hasEllipse: boolean;
  seriousClassName: any;
  text: string;
}

export const PropertyDefaultWrapper = ({
  property1,
  className,
  hasEllipse = true,
  seriousClassName,
  text = "故障數",
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-[5px] p-1 relative bg-[#fffffff2] rounded-[5px] overflow-hidden ${className}`}
    >
      {hasEllipse && <div className="relative w-1.5 h-1.5 bg-[#7d27b6] rounded-[3px]" />}

      <div
        className={`relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_TC-Regular',Helvetica] font-normal text-[#4e4e4e] text-[11px] tracking-[0] leading-[normal] ${seriousClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  hasEllipse: PropTypes.bool,
  text: PropTypes.string,
};