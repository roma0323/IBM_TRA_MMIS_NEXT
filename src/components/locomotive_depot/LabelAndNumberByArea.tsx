import PropTypes from "prop-types";
import React, { useState } from "react";
import { LabelChipAndNumber } from "@/components/locomotive_depot/LabelChipAndNumber";

interface Props {
  area_name?: string;
  onLabelClick: (text: string) => void;
}

export const LabelAndNumberByArea = ({ area_name = "台北機務段車輛配置", onLabelClick }: Props): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-start justify-center pt-5 px-5 relative self-stretch w-full flex-[0_0_auto]">
      <div onClick={handleToggleVisibility} className="w-full p-2 cursor-pointer transition-transform rounded-xl duration-300 ease-in-out transform hover:scale-105 hover:border hover:border-gray-200"> -{area_name}</div>
      {isVisible && (
        <>
          <LabelChipAndNumber onClick={onLabelClick} className="" text="All" train_amount={67} />
          <LabelChipAndNumber onClick={onLabelClick} className="" text="通勤列車" train_amount={67} />
          <LabelChipAndNumber onClick={onLabelClick} className="" text="城際列車" train_amount={67} />
          <LabelChipAndNumber onClick={onLabelClick} className="" text="柴液機車" train_amount={67} />
          <LabelChipAndNumber onClick={onLabelClick} className="" text="客車" train_amount={67} />
          <LabelChipAndNumber onClick={onLabelClick} className="" text="柴油客車" train_amount={67} />
          <LabelChipAndNumber onClick={onLabelClick} className="" text="貨車" train_amount={67} />
        </>
      )}
    </div>
  );
};

LabelAndNumberByArea.propTypes = {
  area_name: PropTypes.string,
  onLabelClick: PropTypes.func.isRequired,
};

export default LabelAndNumberByArea;