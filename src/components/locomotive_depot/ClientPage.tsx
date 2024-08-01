'use client';

import React, { useState, useEffect, Suspense } from "react";
import { LabelAndNumberByArea } from "@/components/locomotive_depot/LabelAndNumberByArea";
import { RowByTrain } from "@/components/locomotive_depot/RowByTrain";
import SlideNavigation from '@/components/SlideNavigation'; // Import SlideNavigation component
import BoardTitleSection from '@/components/BoardTitleSection'; // Import the Section component

type TrainData = { dept: string; deptdesc: string; cartype: string; carcatalog: string; belongto: number; borrowin: number; borrowout: number; current_cnt: number; current_use: number; current_temp: number; current_ready: number; maintain_w: number; maintain_sec: number; maintain_fac: number; oth_waitrep: number; oth_return: number; oth_stop: number; availability: number; };
type TrainDataArray = TrainData[];
interface ClientComponentProps {
  initialData: TrainDataArray;
}

const TrainPageContent: React.FC<ClientComponentProps> = ({ initialData }) => {
  const [trainData, setTrainData] = useState<TrainData[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  useEffect(() => {
    setTrainData(initialData);
  }, [initialData]);

  const handleLabelClick = (label: string, area: string) => {
    setSelectedLabel((prevLabel) => (prevLabel === label && selectedArea === area ? null : label));
    setSelectedArea((prevArea) => (prevArea === area && selectedLabel === label ? null : area));
  };

  const filteredTrainData = trainData.filter(train => {
    const areaMatches = selectedArea === "全部機務段" || !selectedArea || train.deptdesc.includes(selectedArea.replace("車輛配置", ""));
    const labelMatches = selectedLabel === "All" || !selectedLabel || train.carcatalog === selectedLabel;
    return areaMatches && labelMatches;
  });

  const areas = [
    "全部機務段", "七堵機務段", "台北機務段", "新竹機務段", "彰化機務段", "嘉義機務段", "高雄機務段", "花蓮機務段", "臺東機務段", "宜蘭機務分段"
  ];

  const headers = [
    "車種", "型號", "配置", "借出", "借入", "可用", "定期", "臨時", "預備",
    "W OR 保養", "段修", "廠修", "待料 待修", "無火 回送", "停用", "留車"
  ];

  // Slide navigation logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Adjust if you have more or less than 3 divs
  const visibleSlides = 2; // Set to 1 since we want to slide one div at a time

  const handleMouseEnter = (direction: 'left' | 'right') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? 0 : prevIndex - 1;
      } else if (direction === 'right') {
        return prevIndex >= totalSlides - visibleSlides ? prevIndex : prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < totalSlides - visibleSlides;

  return (
    <div className="flex w-full p-6 relative overflow-hidden bg-neutral-100">
      <div
        className="flex w-full gap-10 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 26}%)` }} // Adjusted to slide the divs
      >
        {/* First Div */}
        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title="城際列車 - 機務段分配"
            content={(
              <div className="flex flex-col w-full bg-white items-start relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                {areas.map(area => (
                  <LabelAndNumberByArea
                    key={area}
                    area_name={area}
                    onLabelClick={(label) => handleLabelClick(label, area)}
                  />
                ))}
              </div>
            )}
          />
        </div>

        {/* Second Div */}
        <div className="min-w-[72%] flex items-center justify-center">
          <BoardTitleSection
            title={`${selectedArea} - ${selectedLabel}`}
            content={(
              <div className="flex flex-col bg-white w-full items-start relative flex-shrink-0 p-5 bg-gray-100 rounded-lg overflow-hidden">
                <div className="grid grid-cols-16 gap-4 bg-zinc-100 border-b-2 border-gray-200 rounded-lg text-left">
                  {headers.map((header, index) => (
                    <div key={index} className="p-2 flex items-end">
                      {header}
                    </div>
                  ))}
                </div>
                {selectedLabel && filteredTrainData.map((train, index) => (
                  <RowByTrain
                    key={index}
                    trainData={train}
                  />
                ))}
              </div>
            )}
          />
        </div>

        {/* Third Div */}
        <div className="min-w-[25%] flex items-center justify-center">
          <BoardTitleSection
            title="Third Div Content"
            content={<div>Additional content for the third div</div>}
          />
        </div>
      </div>
      <SlideNavigation direction="left" onHover={handleMouseEnter} isVisible={canMoveLeft} />
      <SlideNavigation direction="right" onHover={handleMouseEnter} isVisible={canMoveRight} />
    </div>
  );
}

const ClientPage: React.FC<ClientComponentProps> = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrainPageContent initialData={data} />
    </Suspense>
  );
}

export default ClientPage;
