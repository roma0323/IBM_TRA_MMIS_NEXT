import React from "react";

interface Props {
  text: string;
  text1: string;
}

export const DataCard = ({ text , text1 }: Props): JSX.Element => {
  return (
    <div className="flex h-[75px]  relative flex-col items-center justify-center p-2  flex-1 self-stretch ">
          <div className=" text-4xl">
            {text}
          </div>
          <div className=" text-sm ">
            {text1}
          </div>
        </div>
  );
};
