'use client';

import React, { useState, useEffect, Suspense } from "react";
import { LabelAndNumberByArea } from "@/components/locomotive_depot/LabelAndNumberByArea";
import { RowByTrain } from "@/components/locomotive_depot/RowByTrain";

type TrainData = {
  dept: string;
  deptdesc: string;
  cartype: string;
  carcatalog: string;
  belongto: number;
  borrowin: number;
  borrowout: number;
  current_cnt: number;
  current_use: number;
  current_temp: number;
  current_ready: number;
  maintain_w: number;
  maintain_sec: number;
  maintain_fac: number;
  oth_waitrep: number;
  oth_return: number;
  oth_stop: number;
  availability: number;
};

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

  return (
    <div className="bg-gray-100 grid grid-cols-4 flex-grow relative justify-center gap-3 p-6">
      <div className="flex-col items-start gap-2.5 relative bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col text-black items-start justify-center p-2.5 relative self-stretch w-full flex-shrink-0 border-b border-gray-400">
          城際列車 - 機務段分配
        </div>
        <div className="w-full h-[67vh]  relative overflow-scroll">
          <div className="flex flex-col w-full bg-white items-start relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
            {areas.map(area => (
              <LabelAndNumberByArea
                key={area}
                area_name={area}
                onLabelClick={(label) => handleLabelClick(label, area)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-col col-span-3 items-start gap-2.5 relative bg-white rounded-lg h-full overflow-hidden">
        <div className="flex flex-col text-black items-start justify-center p-2.5 relative self-stretch w-full flex-shrink-0 border-b border-gray-400">
          {selectedArea} - {selectedLabel}
        </div>
        <div className="w-full h-[67vh] relative overflow-scroll">
          <div className="flex flex-col bg-white w-full items-start relative flex-shrink-0 p-5 bg-gray-100 rounded-lg overflow-hidden">
            
            <div className="grid grid-cols-16 gap-4 bg-zinc-100 border-b-2 border-gray-200 rounded-lg text-left">
              {headers.map((header, index) => (
                <div key={index} className="p-2 flex items-end">
                  {header}
                </div>))}
            </div>
            {selectedLabel && filteredTrainData.map((train, index) => (
              <RowByTrain
                key={index}
                trainData={train}
              />
            ))}
          </div>
        </div>
      </div>
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
