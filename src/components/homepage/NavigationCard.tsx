import React from "react";
import Image from "next/image";

interface Props {
  property1?: string;
  logoClassName: any;
  text: string;
  text1: string;
}

export const NavigationCard = ({
  logoClassName,
  text,
  text1,
}: Props): JSX.Element => {
  return (
    <div className="flex w-full items-center gap-6 px-4 py-5 relative rounded-2xl  border-b-4 border-l-4 border-primary/30 cursor-pointer transition-transform duration-300 ease-in-out transform hover:shadow-lg">
      <Image
        className="relative"
        alt="icon"
        src={`${logoClassName}`}
        width={48}
        height={48}
      />
      <div className={`inline-flex  flex-col text-sky-800 relative`}>
        <div className="text-lg">{text}</div>
        <div className="text-xs text-primary/50">{text1}</div>
      </div>
    </div>
  );
};
