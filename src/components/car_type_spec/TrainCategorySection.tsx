import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BoardTitleSection from "@/components/BoardTitleSection";

type TrainCategorySectionProps = {
  setSelectTrain: (factory: string) => void;
  all_car_type: { cartype: string; kpi_oprtype: string; cardesc: string }[]; 
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
          onClick={() => onContentClick && onContentClick(content.id, content.name)}
          className={`p-2 text-lg cursor-pointer rounded-lg  hover:bg-slate-100`}
        >
          {content.name}
        </AccordionContent>
      ))}
  </AccordionItem>
);

const TrainCategorySection: React.FC<TrainCategorySectionProps> = ({
  setSelectTrain,
  all_car_type, // Destructure the new prop
}) => {
  const handleTrainSelection = (train_id: string) => {
    setSelectTrain(train_id);
  };

  const groupedData = all_car_type.reduce((acc, item) => {
    if (!acc[item.cartype]) {
      acc[item.cartype] = [];
    }
    acc[item.cartype].push({ id: item.cardesc, name: item.kpi_oprtype });
    return acc;
  }, {} as Record<string, { id: string; name: string }[]>);

  return (
    <div className="min-w-[20%] flex items-center justify-center">
      <BoardTitleSection
        title="廠段分類"
        content={
          <div className="flex flex-col mx-4 text-lg">
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
            客車貨車button這裏
          </div>
        }
      />
    </div>
  );
};

export default TrainCategorySection;