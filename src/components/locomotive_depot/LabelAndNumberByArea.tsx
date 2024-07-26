import PropTypes from "prop-types";
import React from "react";
import { LabelChipAndNumber } from "@/components/locomotive_depot/LabelChipAndNumber";

interface Props {
  area_name?: string;
  onLabelClick: (text: string) => void; // Add onLabelClick prop
}

export const LabelAndNumberByArea = ({ area_name = "台北機務段車輛配置", onLabelClick }: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-center  p-5 relative self-stretch w-full flex-[0_0_auto]">
      <div>{area_name}</div>
      <LabelChipAndNumber onClick={onLabelClick} className="" text="All" train_amount={67} />
      <LabelChipAndNumber onClick={onLabelClick} className="" text="通勤列車" train_amount={67} />
      <LabelChipAndNumber onClick={onLabelClick} className="" text="城際列車" train_amount={67} />
      <LabelChipAndNumber onClick={onLabelClick} className="" text="柴液機車" train_amount={67} />
      <LabelChipAndNumber onClick={onLabelClick} className="" text="客車" train_amount={67} />
      <LabelChipAndNumber onClick={onLabelClick} className="" text="柴油客車" train_amount={67} />
      <LabelChipAndNumber onClick={onLabelClick} className="" text="貨車" train_amount={67} />
    </div>
  );
};

LabelAndNumberByArea.propTypes = {
  area_name: PropTypes.string,
  onLabelClick: PropTypes.func.isRequired, // Define prop type for onLabelClick
};

export default LabelAndNumberByArea;