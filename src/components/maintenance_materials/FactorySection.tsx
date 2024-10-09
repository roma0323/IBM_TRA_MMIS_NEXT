import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BoardTitleSection from "@/components/BoardTitleSection";
import { InventoryListIssue } from "@/types/type";

type FactorySectionProps = {
  setSelectFactory: (factory: string) => void;
  setSelectFactoryName: (name: string) => void;
  setSelectedValue: (value: string) => void; // Add this prop
  setInventoryList: (list: InventoryListIssue[]) => void; // Add this prop
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

const FactorySection: React.FC<FactorySectionProps> = ({
  setSelectFactory,
  setSelectFactoryName,
  setSelectedValue, // Destructure the new prop
  setInventoryList, // Destructure the new prop
}) => {
  const handleFactorySelection = (factory: string, factoryName: string) => {
    setSelectFactory(factory);
    setSelectFactoryName(factoryName);
    setSelectedValue(""); // Reset selectedType
    setInventoryList([]); // Reset inventoryList
  };

  return (
    <div className="min-w-[20%] flex items-center justify-center">
      <BoardTitleSection
        title="廠段分類"
        content={
          <div className="flex flex-col mx-4 text-lg">
            <Accordion type="single" collapsible>
              <AccordionSection
                value="All"
                title="機務處"
                onTriggerClick={() => handleFactorySelection("All", "機務處")}
              />
              <AccordionSection
                value="All_factory"
                title="機廠"
                onTriggerClick={() => handleFactorySelection("All_factory", "機廠")}
                contents={[
                  { id: "WAY00", name: "富岡機廠" },
                  { id: "MXY00", name: "潮州機廠" },
                  { id: "MZY00", name: "花蓮機廠" },
                ]}
                onContentClick={(id, name) => handleFactorySelection(id, name)}
              />
              <AccordionSection
                value="All_depot"
                title="機務段"
                onTriggerClick={() => handleFactorySelection("All_depot", "機務段")}
                contents={[
                  { id: "MGY00", name: "七堵機務段" },
                  { id: "MHY00", name: "臺北機務段" },
                  { id: "MHY10", name: "新竹機務段" },
                  { id: "MMY00", name: "彰化機務段" },
                  { id: "MMY20", name: "嘉義機務段" },
                  { id: "MPY00", name: "高雄機務段" },
                  { id: "MYY00", name: "花蓮機務段" },
                  { id: "MIY00", name: "臺東機務段" },
                  { id: "MFY00", name: "宜蘭機務段" },
                ]}
                onContentClick={(id, name) => handleFactorySelection(id, name)}
              />
            </Accordion>
          </div>
        }
      />
    </div>
  );
};

export default FactorySection;