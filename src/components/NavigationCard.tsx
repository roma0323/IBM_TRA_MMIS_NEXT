import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1?: string;
  logoClassName: any;
  text: string;
  text1: string;
}

export const NavigationCard = ({
  property1 = 'default',
  logoClassName,
  text = "車輛配置資訊",
  text1 = "各區段、車型資料、可用率儀表板",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex w-[489px] items-center gap-[15px] px-[34px] py-5 relative  rounded-[5px] overflow-hidden border border-solid border-[#4e4e4e] shadow-[0px_0px_4px_#00000080] border-white flex-[0_0_auto] `}
    >
      <div className="flex w-[362px] items-center gap-[15px] relative">
        <div className={`relative w-[50px] h-[49.9px] ${logoClassName}`} />
        <div
          className={`inline-flex flex-col items-start justify-center gap-[5px] relative flex-[0_0_auto] mr-[-25.00px]`}
        >
          <div className="relative w-fit mt-[-1.00px] font-title-1 font-[number:var(--title-1-font-weight)] text-[length:var(--title-1-font-size)] tracking-[var(--title-1-letter-spacing)] leading-[var(--title-1-line-height)] [font-style:var(--title-1-font-style)]">
            {text}
          </div>
          <div className="relative w-fit font-title-2 font-[number:var(--title-2-font-weight)]  text-[length:var(--title-2-font-size)] tracking-[var(--title-2-letter-spacing)] leading-[var(--title-2-line-height)] [font-style:var(--title-2-font-style)]">
            {text1}
          </div>
        </div>
      </div>
    </div>
  );
};

NavigationCard.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};