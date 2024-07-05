import PropTypes from "prop-types";
import React from "react";

interface Props {
  size: "small";
  theme: "light";
  className: any;
}

export const IbmLogoFrame = ({ size, theme, className }: Props): JSX.Element => {
  return (
    <div className={`w-[100px] h-[73px] bg-[url(/ibm-logo-frame.svg)] bg-cover bg-[50%_50%] ${className}`} />
  );
};

IbmLogoFrame.propTypes = {
  size: PropTypes.oneOf(["small"]),
  theme: PropTypes.oneOf(["light"]),
};