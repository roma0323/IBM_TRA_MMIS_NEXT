'use client';
import React, { useState } from 'react';
import DataSection from '@/components/train_deployment/detail_page/DataSection';
import TrainCategorySection from '@/components/train_deployment/detail_page/TrainCategorySection';
import DepotSection from '@/components/train_deployment/detail_page/DepotSection';
import MaintenanceSection from '@/components/train_deployment/detail_page/MaintenanceSection';

const trainData = [
  { trainName: "太魯閣-TEMU1000", trainCount: 200 },
  { trainName: "普悠瑪-TEMU2000", trainCount: 150 },
  { trainName: "自強號-TEMU3000", trainCount: 120 },
];

type ClientPageProps = {
  initialData: any[];
};

const DetailClientPage: React.FC<ClientPageProps> = ({ initialData }) => {
  const [selectedTrainName, setSelectedTrainName] = useState('');
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleTrainClick = (trainName: string) => {
    if (trainName === selectedTrainName) {
      setIsDetailVisible(!isDetailVisible);
    } else {
      setSelectedTrainName(trainName);
      setIsDetailVisible(true);
    }
  };

  const cntSum = initialData.reduce((acc, item) => acc + item.current_cnt, 0);
  const readySum = initialData.reduce((acc, item) => acc + item.current_ready, 0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;
  const visibleSlides = 3;

  const handleMouseEnter = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex >= totalSlides - visibleSlides ? prevIndex : prevIndex + 1));
    }
  };

  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < totalSlides - visibleSlides;

  return (
    <div className="flex w-full p-6 relative overflow-hidden bg-neutral-100">
      <div
        className="flex w-full gap-8 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 34}%)` }}
      >
        <div className="min-w-[33%] h-full flex items-center justify-center">
          <DataSection cntSum={cntSum} readySum={readySum} />
        </div>
        <div className="min-w-[32%] h-full flex items-center justify-center">
          <TrainCategorySection
            initialData={initialData}
            trainData={trainData}
            selectedTrainName={selectedTrainName}
            isDetailVisible={isDetailVisible}
            handleTrainClick={handleTrainClick}
          />
        </div>
        <div className="min-w-[32%] h-full flex items-center justify-center">
          <DepotSection
            title={`${initialData[0].carcatalog} - 機務段分配資訊`}
            selectedTrainName={selectedTrainName}
            isDetailVisible={isDetailVisible}
          />
        </div>
        <div className="min-w-[32%] h-full flex items-center justify-center">
          <MaintenanceSection
            title="檢修車輛詳情"
            selectedTrainName={selectedTrainName}
            isDetailVisible={isDetailVisible}
          />
        </div>
      </div>
      {canMoveLeft && (
        <div
          onMouseEnter={() => handleMouseEnter('left')}
          className="absolute top-0 left-0 h-full w-[3vw] bg-gradient-to-r from-slate-300 to-transparent cursor-pointer flex items-center justify-center text-[#397EFF] text-3xl"
        >
          {'<'}
        </div>
      )}
      {canMoveRight && (
        <div
          onMouseEnter={() => handleMouseEnter('right')}
          className="absolute top-0 right-0 h-full w-[3vw] bg-gradient-to-l from-slate-200 to-transparent cursor-pointer flex items-center justify-center text-[#397EFF] text-3xl"
        >
          {'>'}
        </div>
      )}
    </div>
  );
};

export default DetailClientPage;
