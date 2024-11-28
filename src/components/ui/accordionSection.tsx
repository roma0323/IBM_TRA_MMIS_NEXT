import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CombinedCategorySectionProps = {
  setSelectTrain: (id: string, title: string, name?: string) => void;
  data: Record<string, { id: string; name: string }[] | string[]>; // Accept both types of data
};

const AccordionSection: React.FC<{
  value: string;
  title: string;
  contents?: { id: string; name: string }[] | string[];
  onTriggerClick: () => void;
  onContentClick?: (section: string, id: string, title: string, name?: string) => void;
  selectedContent: { section: string; id: string } | null;
}> = ({ value, title, contents, onTriggerClick, onContentClick, selectedContent }) => (
  <AccordionItem value={value}>
    <AccordionTrigger onClick={onTriggerClick}>{title}</AccordionTrigger>
    {contents &&
      contents.map((content: any, index: number) => (
        <AccordionContent
          key={content.id || index}
          onClick={() =>
            onContentClick && onContentClick(value, content.id || content, title, content.name)
          }
          className={`p-2 cursor-pointer rounded-lg hover:border-b-4 ${
            selectedContent?.section === value && selectedContent?.id === (content.id || content)
              ? "bg-secondary-background border-b-4"
              : ""
          }`}
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
  const [selectedContent, setSelectedContent] = useState<{ section: string; id: string } | null>(null);

  const handleTrainSelection = (section: string, id: string, title: string, name?: string) => {
    setSelectTrain(id, title, name || '');
    setSelectedContent({ section, id });
  };

  return (
    <div className="flex flex-col mx-4 relative">
      <Accordion type="single" collapsible>
        {Object.entries(data).map(([key, values]) => (
          <AccordionSection
            key={key}
            value={key}
            title={key}
            contents={values}
            onTriggerClick={() => {}}
            onContentClick={(section, id, title, name) => handleTrainSelection(section, id, title, name)}
            selectedContent={selectedContent}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default CombinedCategorySection;