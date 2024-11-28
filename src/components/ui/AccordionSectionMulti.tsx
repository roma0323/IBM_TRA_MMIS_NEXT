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


const AccordionSectionMulti: React.FC<{
  value: string;
  title: string;
  contents?: { id: string; name: string }[] | string[];
  onTriggerClick: () => void;
  onContentClick?: (section: string, id: string, title: string, name?: string) => void;
  selectedContents: { section: string; id: string }[];
}> = ({ value, title, contents, onTriggerClick, onContentClick, selectedContents }) => (
  <AccordionItem value={value}>
    <AccordionTrigger onClick={onTriggerClick}>{title}</AccordionTrigger>
    {contents &&
      contents.map((content: any, index: number) => {
        const isSelected = selectedContents.some(
          (selected) => selected.section === value && selected.id === (content.id || content)
        );
        return (
          <AccordionContent
            key={content.id || index}
            onClick={() =>
              onContentClick && onContentClick(value, content.id || content, title, content.name)
            }
            className={`p-2 cursor-pointer rounded-lg hover:border-b-4 ${
              isSelected ? "bg-secondary-background border-b-4" : ""
            }`}
          >
            {content.name || content}
          </AccordionContent>
        );
      })}
  </AccordionItem>
);

const CombinedCategorySection: React.FC<CombinedCategorySectionProps> = ({
  setSelectTrain,
  data,
}) => {
  const [selectedContent, setSelectedContent] = useState<{ section: string; id: string } | null>(null);
  const [selectedContents, setSelectedContents] = useState<{ section: string; id: string }[]>([]);

  const handleTrainSelection = (section: string, id: string, title: string, name?: string) => {
    setSelectTrain(id, title, name || '');
    setSelectedContent({ section, id });
  };

  const handleMultiSelection = (section: string, id: string, title: string, name?: string) => {
    setSelectTrain(id, title, name || '');
    setSelectedContents((prevSelected) => {
      const isSelected = prevSelected.some(
        (selected) => selected.section === section && selected.id === id
      );
      if (isSelected) {
        return prevSelected.filter(
          (selected) => !(selected.section === section && selected.id === id)
        );
      } else {
        return [...prevSelected, { section, id }];
      }
    });
  };

  return (
    <div className="flex flex-col mx-4 relative">
      
      <Accordion type="multiple">
        {Object.entries(data).map(([key, values]) => (
          <AccordionSectionMulti
            key={key}
            value={key}
            title={key}
            contents={values}
            onTriggerClick={() => {}}
            onContentClick={(section, id, title, name) => handleMultiSelection(section, id, title, name)}
            selectedContents={selectedContents}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default CombinedCategorySection;