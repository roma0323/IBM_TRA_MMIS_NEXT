import React from "react";
import { getCarColor } from "@/lib/getCarColor"; // Import the getCarColor function

type SectionProps = {
  title?: string; // Make the title optional
  content: React.ReactNode;
};

const BoardTitleSection: React.FC<SectionProps> = ({ title = "", content }) => {
  // Determine the color based on the title
  const color = getCarColor(title);

  return (
    <div className="size-full overflow-hidden flex flex-col items-start bg-white relative rounded-lg">
      <div
        className="w-full p-2.5 border-b border-gray-400"
        style={{ color }} // Apply the dynamic color to the title
      >
        {title}
      </div>
      <div className="size-full flex-grow overflow-auto">{content}</div>
    </div>
  );
};

export default BoardTitleSection;