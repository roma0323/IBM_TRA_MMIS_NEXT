import React from 'react';

type SectionProps = {
    title?: string; // Make the title optional
    content: React.ReactNode;
};



const BoardTitleSection: React.FC<SectionProps> = ({ title="", content }) => (

  
    <div className="size-full overflow-hidden flex flex-col items-start bg-white relative  rounded-lg ">
      <div className="w-full p-2.5 border-b border-gray-400">
        {title}
      </div>
      <div className=" size-full flex-grow overflow-auto">
        {content}
      </div>
  </div>
);

export default BoardTitleSection;
