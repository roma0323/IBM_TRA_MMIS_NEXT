import React from 'react';

type SectionProps = {
    title?: string; // Make the title optional
    content: React.ReactNode;
};

const BoardTitleSection: React.FC<SectionProps> = ({ title="", content }) => (
  <div className="bg-gray-100 flex flex-col flex-grow relative justify-center w-full">
    <div className="flex-col items-start  relative bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col text-black items-start justify-center p-2.5 relative self-stretch w-full flex-shrink-0 border-b border-gray-400">
        {title}
      </div>
      <div className="w-full h-[67vh] relative overflow-auto">
        {content}
      </div>
    </div>
  </div>
);

export default BoardTitleSection;
