import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CombinedCategorySectionProps = {
  setSelectTrain: (id: string,title:string, name?: string) => void;
  data: Record<string, { id: string; name: string }[] | string[]>; // Accept both types of data
};

const AccordionSection: React.FC<{
  value: string;
  title: string;
  contents?: { id: string; name: string }[] | string[];
  onTriggerClick: () => void;
  onContentClick?: (id: string,title:string, name?: string) => void;
}> = ({ value, title, contents, onTriggerClick, onContentClick }) => (
  <AccordionItem value={value}>
    <AccordionTrigger onClick={onTriggerClick}>{title}</AccordionTrigger>
    {contents &&
      contents.map((content: any, index: number) => (
        <AccordionContent
          key={content.id || index}
          onClick={() =>
            onContentClick && onContentClick(content.id || content,title, content.name)
          }
          className={`p-2  cursor-pointer rounded-lg hover:bg-slate-100`}
        >
          {content.name || content}
        </AccordionContent>
      ))}
  </AccordionItem>
);

const CombinedCategorySection: React.FC<CombinedCategorySectionProps> = ({
  setSelectTrain,
  data,
}) => {
  const handleTrainSelection = (id: string,title:string, name?: string) => {
    setSelectTrain(id,title, name || '');
  };

  return (
    <div className="flex flex-col mx-4  relative">
      <Accordion type="single" collapsible>
        {Object.entries(data).map(([key, values]) => (
          <AccordionSection
            key={key}
            value={key}
            title={key}
            contents={values}
            onTriggerClick={() => {}}
            onContentClick={(id,title, name) => handleTrainSelection(id,title, name)}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default CombinedCategorySection;