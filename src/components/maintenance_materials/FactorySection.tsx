import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BoardTitleSection from "@/components/BoardTitleSection";

type FactorySectionProps = {
  selectFactory: string;
  setSelectFactory: (factory: string) => void;
  selectFactoryName: string;
  setSelectFactoryName: (name: string) => void;
  activeContentId: string | undefined;
  setActiveContentId: (id: string | undefined) => void;
};


const AccordionSection: React.FC<{
  value: string;
  title: string;
  contents?: { id: string; name: string }[];
  onTriggerClick: () => void;
  onContentClick?: (id: string, name: string) => void;
  activeContentId?: string;
}> = ({ value, title, contents, onTriggerClick, onContentClick, activeContentId }) => (
  <AccordionItem value={value}>
    <AccordionTrigger onClick={onTriggerClick}>{title}</AccordionTrigger>
    {contents &&
      contents.map((content) => (
        <AccordionContent
          key={content.id}
          onClick={() => onContentClick && onContentClick(content.id, content.name)}
          className={`p-2 cursor-pointer rounded-lg ${activeContentId === content.id ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
        >
          {content.name}
        </AccordionContent>
      ))}
  </AccordionItem>
);

const FactorySection: React.FC<FactorySectionProps> = ({
  setSelectFactory,
  setSelectFactoryName,
  activeContentId,
  setActiveContentId,
}) => {
  return (
    <div className="min-w-[20%] flex items-center justify-center">
      <BoardTitleSection
        title="廠段分類"
        content={
          <div className="flex flex-col mx-4">
            <Accordion type="single" collapsible>
              <AccordionSection
                value="All"
                title="機務處"
                onTriggerClick={() => {
                  setSelectFactory("All");
                  setSelectFactoryName("機務處");
                  setActiveContentId(undefined);
                }}
              />
              <AccordionSection
                value="All_factory"
                title="機廠"
                onTriggerClick={() => {
                  setSelectFactory("All_factory");
                  setSelectFactoryName("機廠");
                  setActiveContentId(undefined);
                }}
                contents={[
                  { id: "WAY00", name: "富岡機廠" },
                  { id: "MXY00", name: "潮州機廠" },
                  { id: "MZY00", name: "花蓮機廠" },
                ]}
                onContentClick={(id, name) => {
                  setSelectFactory(id);
                  setSelectFactoryName(name);
                  setActiveContentId(id);
                }}
                activeContentId={activeContentId}
              />
              <AccordionSection
                value="All_depot"
                title="機務段"
                onTriggerClick={() => {
                  setSelectFactory("All_depot");
                  setSelectFactoryName("機務段");
                  setActiveContentId(undefined);
                }}
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
                onContentClick={(id, name) => {
                  setSelectFactory(id);
                  setSelectFactoryName(name);
                  setActiveContentId(id);
                }}
                activeContentId={activeContentId}
              />
            </Accordion>

         
          </div>
        }
      />
    </div>
  );
};

export default FactorySection;