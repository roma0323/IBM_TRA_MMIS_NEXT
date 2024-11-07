import React from "react";

type SlideNavigationProps = {
  direction: "left" | "right";
  onClick: (direction: "left" | "right") => void;
  isVisible: boolean;
};

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  direction,
  onClick,
  isVisible,
}) => {
  if (!isVisible) return null; // Don't render anything if not visible

  const gradientClasses =
    direction === "left"
      ? "bg-gradient-to-r from-slate-300 to-transparent"
      : "bg-gradient-to-l from-slate-200 to-transparent";

  return (
    <div
      onClick={() => onClick(direction)}
      className={`absolute top-0 ${direction === "left" ? "left-0" : "right-0"} h-full w-[3vw] ${gradientClasses} cursor-pointer flex items-center justify-center text-[#397EFF] text-3xl`}
    >
      {direction === "left" ? "<" : ">"}
    </div>
  );
};

export default SlideNavigation;