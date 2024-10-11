import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TrainCategorySectionProps = {
  setSelectTrain: (factory: string) => void;
  groupedData: Record<string, { id: string; name: string }[]>;
};

const AccordionSection: React.FC<{
  value: string;
  title: string;
  contents?: { id: string; name: string }[];
  onTriggerClick: () => void;
  onContentClick?: (id: string, name: string) => void;
}> = ({ value, title, contents, onTriggerClick, onContentClick }) => (
  <AccordionItem value={value}>
    <AccordionTrigger onClick={onTriggerClick}>{title}</AccordionTrigger>
    {contents &&
      contents.map((content) => (
        <AccordionContent
          key={content.id}
          onClick={() =>
            onContentClick && onContentClick(content.id, content.name)
          }
          className={`p-2 text-lg cursor-pointer rounded-lg  hover:bg-slate-100`}
        >
          {content.name}
        </AccordionContent>
      ))}
  </AccordionItem>
);

const TrainCategorySection: React.FC<TrainCategorySectionProps> = ({
  setSelectTrain,
  groupedData, // Destructure the new prop
}) => {
  const handleTrainSelection = (train_id: string) => {
    setSelectTrain(train_id);
  };

  return (
    <Accordion type="single" collapsible>
      {Object.entries(groupedData).map(([cartype, contents]) => (
        <AccordionSection
          key={cartype}
          value={cartype}
          title={cartype}
          contents={contents}
          onTriggerClick={() => {}}
          onContentClick={(id) => handleTrainSelection(id)}
        />
      ))}
    </Accordion>
  );
};

export default TrainCategorySection;