'use client'
import React, { useState, useEffect } from 'react';
import DataSection from '@/components/train_deployment/detail_page/DataSection';
import TrainCategorySection from '@/components/train_deployment/detail_page/TrainCategorySection';
import SlideNavigation from '@/components//SlideNavigation'; 
import TrainOverviewSection from "@/components/locomotive_depot/TrainOverviewSection";
import MaintenanceDetailSection from "@/components/locomotive_depot/MaintenanceDetailSection";
import { getCarTypeListAndCarcatalogEqualParam } from "@/api/api";
import { getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname } from "@/api/api";
import { getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam } from "@/api/api";
import { getSumStatusListEq3Param } from "@/api/api";
import { FetcheGetSumStatusListData } from "@/types/type"; // Update the import path as needed


const DetailClientPage: React.FC<FetcheGetSumStatusListData> = ({ Data }) => {
  const [selectedTrainName, setSelectedTrainName] = useState('');
  const [isTrainDetailVisible, setIsTrainDetailVisible] = useState(false);
  const [maintenanceData, setMaintenanceData] = useState<any[]>([]);
  const [filteredTrainData, setFilteredTrainData] = useState<any[]>([]);
  const [trainData, setTrainData] = useState<{ trainName: string, trainCount: number }[]>([]);

///////////////////////////Have to be fix after backend refactor///////////////////////
useEffect(() => {
  const fetchTrainData = async () => {
    const fetchedData = await getCarTypeListAndCarcatalogEqualParam(Data[0].carcatalog);
    const dynamicTrainData = fetchedData.map((item: { kpi_oprtype: string; cardesc: string; }) => ({
      trainName: item.cardesc,
      trainCount: null
    }));
    setTrainData(dynamicTrainData);
  };
  fetchTrainData();
}, [Data]); // Add an empty dependency array here

///////////////////////////Have to be fix after backend refactor///////////////////////
  const handleTrainTypeClick = async (trainName: string) => {
    if(!canMoveLeft){handleMouseEnter('right');}
    setSelectedTrainName(trainName);
    setIsTrainDetailVisible(!isTrainDetailVisible);
    let fetchedData
    if(Data[0].carcatalog==="客車"){
       fetchedData = await getSumStatusListEq3Param(trainName);
    }
    else{
       fetchedData = await getSumStatusListAndMultiplierEqualZeorCarcatalogEqualParamCartypeEqualTrainname(Data[0].carcatalog,trainName);
    }
    setFilteredTrainData(fetchedData.data);
  };

  const handleTrainClick = async (dept: string, cartype: string, divData: string) => {
    const data = await getSumStatusDetailListMultiplierZeorDeptParamCartypeParamQtypeParam(dept,cartype,divData)
    setMaintenanceData(data);
  };

//mouse slide
  const cntSum = Data.reduce((acc, item) => acc + item.current_cnt, 0);
  const readySum = Data.reduce((acc, item) => acc + item.current_ready, 0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5;
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
//mouse slide

  return (
    <div className="flex w-full p-6 relative overflow-hidden bg-neutral-100">
      <div
        className="flex w-full gap-8 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 26}%)` }}
      >

        {/* first Div */}
        <div className="min-w-[25%] h-full flex items-center justify-center">
          <DataSection cntSum={cntSum} readySum={readySum} carcatalog={Data[0].carcatalog} />
        </div>

        {/* second Div */}
        <div className="min-w-[25%] h-full flex items-center justify-center">
          <TrainCategorySection
            initialData={Data}
            trainData={trainData}
            selectedTrainName={selectedTrainName}
            isDetailVisible={isTrainDetailVisible}
            carcatalog={Data[0].carcatalog}
            handleTrainClick={handleTrainTypeClick} // Pass the handleTrainClick function
          />
        </div>
        
        {/* Third Div */}
        <TrainOverviewSection
          filteredTrainData={filteredTrainData} // Pass fetched data to TrainOverviewSection
          selectedArea={Data[0].carcatalog}
          selectedLabel={selectedTrainName}
          handleTrainClick={handleTrainClick}
          handleMouseEnter={handleMouseEnter}
        />

        {/* fourth Div */}
        <MaintenanceDetailSection
          maintenanceData={maintenanceData}
        />
      </div>
      <SlideNavigation direction="left" onHover={handleMouseEnter} isVisible={canMoveLeft} />
      <SlideNavigation direction="right" onHover={handleMouseEnter} isVisible={canMoveRight} />
      
    </div>
  );
};

export default DetailClientPage;
