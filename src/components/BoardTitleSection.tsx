import React from 'react';

type SectionProps = {
    title?: string; // Make the title optional
    content: React.ReactNode;
};

const BoardTitleSection: React.FC<SectionProps> = ({ title="", content }) => (
    <div className="flex-col items-start  relative bg-white rounded-lg flex-grow ">
      <div className="p-2.5 border-b border-gray-400">
        {title}
      </div>
      <div className="w-full h-[67vh] relative overflow-auto">
        {content}
      </div>
  </div>
);

export default BoardTitleSection;
