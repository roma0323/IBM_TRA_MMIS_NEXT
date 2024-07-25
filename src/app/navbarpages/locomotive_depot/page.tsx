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
  }, []);

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
    "全部機務段",
    "七堵機務段",
    "台北機務段",
    "新竹機務段",
    "彰化機務段",
    "嘉義機務段",
    "高雄機務段",
    "花蓮機務段",
    "臺東機務段",
    "宜蘭機務分段"
  ];

  return (
    <div className="bg-gray-100 grid grid-cols-4 flex-grow relative justify-center gap-3 p-6">
      <div className="flex-col items-start gap-2.5 relative bg-white rounded-lg h-full overflow-hidden">
        <div className="flex flex-col text-[#000000] items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
          城際列車 - 機務段分配{initialData[0].dept}
        </div>
        <div className="w-full h-[67dvh] relative overflow-scroll">
          <div className="flex flex-col w-full items-start relative flex-[0_0_auto] bg-[#f5f5f533] rounded-lg overflow-hidden">
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

      {selectedLabel && (
        <div className="flex-col col-span-3 items-start gap-2.5 relative bg-white rounded-lg h-full overflow-hidden">
          <div className="flex flex-col text-[#000000] items-start justify-center p-2.5 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#646464]">
            {selectedArea} - {selectedLabel}
          </div>

          <div className="w-full h-[67dvh] relative overflow-scroll">
            <div className="flex flex-col w-full items-start relative flex-[0_0_auto] p-5 bg-[#f5f5f533] rounded-lg overflow-hidden">
              <div className="grid grid-cols-18 gap-4 bg-gray-100 border-b-2 border-gray-200 rounded-lg text-left">
                <div className="col-span-2 p-2 flex items-end">車種</div>
                <div className="col-span-2 p-2 flex items-end">型號</div>
                <div className="p-2 flex items-end">配置</div>
                <div className="p-2 flex items-end">借出</div>
                <div className="p-2 flex items-end">借入</div>
                <div className="p-2 flex items-end">可用</div>
                <div className="p-2 flex items-end">定期</div>
                <div className="p-2 flex items-end">臨時</div>
                <div className="p-2 flex items-end">預備</div>
                <div className="p-2 flex items-end">W OR 保養</div>
                <div className="p-2 flex items-end">段修</div>
                <div className="p-2 flex items-end">廠修</div>
                <div className="p-2 flex items-end">待料 待修</div>
                <div className="p-2 flex items-end">無火 回送</div>
                <div className="p-2 flex items-end">停用</div>
                <div className="p-2 flex items-end">留車</div>
              </div>

              {filteredTrainData.map((train, index) => (
                <RowByTrain
                  key={index}
                  className=""
                  dept={train.dept}
                  deptdesc={train.deptdesc}
                  cartype={train.cartype}
                  carcatalog={train.carcatalog}
                  belongto={train.belongto}
                  borrowin={train.borrowin}
                  borrowout={train.borrowout}
                  current_cnt={train.current_cnt}
                  current_use={train.current_use}
                  current_temp={train.current_temp}
                  current_ready={train.current_ready}
                  maintain_w={train.maintain_w}
                  maintain_sec={train.maintain_sec}
                  maintain_fac={train.maintain_fac}
                  oth_waitrep={train.oth_waitrep}
                  oth_return={train.oth_return}
                  oth_stop={train.oth_stop}
                  availability={train.availability}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




// Define the type for the array of these objects

export default function ClientPage({ initialData }: ClientComponentProps) {
  const [data, setData] = useState(initialData);
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <TrainPageContent initialData={data} />
    </Suspense>
  );
}
